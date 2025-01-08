CREATE DATABASE  IF NOT EXISTS `solar_db`
USE `solar_db`;

-- Table for Plants
DROP TABLE IF EXISTS `plants`;
CREATE TABLE `plants` (
  `plant_id` INT NOT NULL AUTO_INCREMENT,
  `plant_name` VARCHAR(255),
  `country` VARCHAR(100),
  `address` VARCHAR(255),
  `grid_connection` VARCHAR(100),
  `total_string_capacity` DECIMAL(15, 2),
  `current_power` DECIMAL(15, 2),
  `specific_energy` DECIMAL(15, 2),
  `yield_today` DECIMAL(15, 2),
  `performance_ratio` DECIMAL(15, 2),
  `global_irradiation` DECIMAL(15, 2),
  `plant_type` VARCHAR(50),
  `installed_power` DECIMAL(15, 2),
  `real_time_power` DECIMAL(15, 2),
  `monthly_yield` DECIMAL(15, 2),
  `annual_yield` DECIMAL(15, 2),
  `plant_status` VARCHAR(50),
  PRIMARY KEY (`plant_id`)
);

-- Table for Plant Details
DROP TABLE IF EXISTS `plant_details`;
CREATE TABLE `plant_details` (
  `plant_id` INT NOT NULL,
  `no_of_devices` INT,
  `location` VARCHAR(255),
  `revenue` DECIMAL(15, 2),
  `images` TEXT,
  `videos` TEXT,
  `device_name` VARCHAR(255),
  `total_string_capacity` DECIMAL(15, 2),
  `yield` DECIMAL(15, 2),
  `total_yield` DECIMAL(15, 2),
  `specific_energy` DECIMAL(15, 2),
  `peak_ac_power` DECIMAL(15, 2),
  `grid_connection_duration` DECIMAL(15, 2),
  PRIMARY KEY (`plant_id`),
  FOREIGN KEY (`plant_id`) REFERENCES `plants`(`plant_id`)
);

-- Table for Devices
DROP TABLE IF EXISTS `devices`;
CREATE TABLE `devices` (
  `device_id` INT NOT NULL AUTO_INCREMENT,
  `plant_id` INT NOT NULL,
  `device_name` VARCHAR(255),
  `device_model` VARCHAR(255),
  `device_serial_number` VARCHAR(255),
  `nominal_power` DECIMAL(15, 2),
  `real_time_power` DECIMAL(15, 2),
  `daily_yield` DECIMAL(15, 2),
  `status` VARCHAR(50),
  PRIMARY KEY (`device_id`),
  FOREIGN KEY (`plant_id`) REFERENCES `plants`(`plant_id`)
);

-- Table for Migration Details
DROP TABLE IF EXISTS `plant_migrations`;
CREATE TABLE `plant_migrations` (
  `migration_id` INT NOT NULL AUTO_INCREMENT,
  `plant_id` INT NOT NULL,
  `status` VARCHAR(50),
  `creation_time` DATETIME,
  `original_company` VARCHAR(255),
  `target_company` VARCHAR(255),
  `created_by` VARCHAR(255),
  `approval_deadline` DATETIME,
  `operation` VARCHAR(50),
  PRIMARY KEY (`migration_id`),
  FOREIGN KEY (`plant_id`) REFERENCES `plants`(`plant_id`)
);

-- Table for Plant Alerts
DROP TABLE IF EXISTS `plant_alerts`;
CREATE TABLE `plant_alerts` (
  `alert_id` INT NOT NULL AUTO_INCREMENT,
  `plant_id` INT NOT NULL,
  `statistical_period` VARCHAR(255),
  `pv_yield` DECIMAL(15, 2),
  `inverter_yield` DECIMAL(15, 2),
  `export` DECIMAL(15, 2),
  `import` DECIMAL(15, 2),
  `revenue` DECIMAL(15, 2),
  PRIMARY KEY (`alert_id`),
  FOREIGN KEY (`plant_id`) REFERENCES `plants`(`plant_id`)
);

-- Table for Reports
DROP TABLE IF EXISTS `reports`;
CREATE TABLE `reports` (
  `report_id` INT NOT NULL AUTO_INCREMENT,
  `plant_id` INT NOT NULL,
  `report_type` ENUM('PlantReport', 'OverviewReport', 'StatisticsReport', 'DeviceReport'),
  `from_date` DATE,
  `to_date` DATE,
  `statistical_period` VARCHAR(255),
  `pv_yield` DECIMAL(15, 2),
  `inverter_yield` DECIMAL(15, 2),
  `export` DECIMAL(15, 2),
  `import_revenue` DECIMAL(15, 2),
  PRIMARY KEY (`report_id`),
  FOREIGN KEY (`plant_id`) REFERENCES `plants`(`plant_id`)
);
