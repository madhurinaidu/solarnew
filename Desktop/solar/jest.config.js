module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/tests/**/*.test.ts'],
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    coverageDirectory: 'coverage',
    collectCoverage: true
};