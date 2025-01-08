import { Injectable, UnauthorizedException } from '@nestjs/common';
import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
} from 'amazon-cognito-identity-js';
import { JWTVerifyOptions, createRemoteJWKSet, jwtVerify, JWTVerifyResult, decodeJwt } from 'jose';

@Injectable()
export class AuthService {
  private userPool = new CognitoUserPool({
    UserPoolId: 'ap-south-1_zWKNEeQ6o', 
    ClientId: '6fl9bqm4edbptu7b3kr4qn9rp6', 
  });
  // Cognito JWKS URI
  private jwksUri = `https://cognito-idp.ap-south-1.amazonaws.com/ap-south-1_zWKNEeQ6o/.well-known/jwks.json`;

  // Create a remote JWK set
  private JWKS = createRemoteJWKSet(new URL(this.jwksUri));

  async authenticate(username: string, password: string) {
    const cognitoUser = new CognitoUser({
      Username: username,
      Pool: this.userPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: username,
      Password: password,
    });

    return new Promise((resolve, reject) => {
      cognitoUser.authenticateUser(authDetails, {
        onSuccess: (result) => {
          const accessToken = result.getAccessToken().getJwtToken();
          const idToken = result.getIdToken().getJwtToken();
          const refreshToken = result.getRefreshToken().getToken();

          resolve({
            accessToken,
            idToken,
            refreshToken,
          });
        },
        onFailure: (err) => {
          reject(new UnauthorizedException(err.message));
        },
      });
    });
  }

  async validateToken(token: string): Promise<any> {
    try {
      // Verify token
      const { payload }: JWTVerifyResult = await jwtVerify(token, this.JWKS, {
        issuer: `https://cognito-idp.ap-south-1.amazonaws.com/ap-south-1_zWKNEeQ6o`,
      });
  
      // Check token_use claim
      if (payload.token_use !== 'access') {
        throw new UnauthorizedException('Invalid token use. Expected access token.');
      }
      return payload;
    } catch (error) {
      console.error('Token validation error:', error);
      throw new UnauthorizedException('Invalid or expired token.');
    }
  }
}
