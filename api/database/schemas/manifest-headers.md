---
slug: manifest-headers
title: manifest_headers
description: An explanation of the manifest_headers table.
---

# The `manifest_headers` Table

| Column Name                          | Data Type              | Nullable | Updatable | Comment     |
|--------------------------------------|------------------------|----------|-----------|-------------|
| ccrs_manifest_header_id              |                        | NO       | NO        | Primary Key | 
| submitted_by                         | VARCHAR(35)            | YES      | YES       |             |
| submitted_date                       | DATE                   | YES      | YES       |             |
| Number_records                       | INT                    | YES      | YES       |             |
| external_manifest_identifier         | VARCHAR(100)           | YES      | YES       |             |
| header_operation                     | VARCHAR(50)            | YES      | YES       |             |
| transportation_type                  | VARCHAR(50)            | YES      | YES       |             |
| origin_license_number                | NUMERIC(6)             | YES      | YES       |             |
| origin_license_name                  | VARCHAR(75)            | YES      | YES       |             |
| origin_licensee_address              | VARCHAR(50)            | YES      | YES       |             |
| origin_licensee_phone                | VARCHAR(35)            | YES      | YES       |             |
| origin_licensee_email_address        | VARCHAR(50)            | YES      | YES       |             |
| origin_associate_id                  | INT                    | YES      | YES       |             |
| transportation_license_number        | NUMERIC(6)             | YES      | YES       |             |
| transportation_associate_id          | INT                    | YES      | YES       |             |
| departure_date_time                  | pg_catalog.timestamptz | YES      | YES       |             |
| arrival_date_time                    | pg_catalog.timestamptz | YES      | YES       |             |
| destination_license_number           | NUMERIC(6)             | YES      | YES       |             |
| destination_license_name             | VARCHAR(75)            | YES      | YES       |             |
| destination_license_address          | VARCHAR(50)            | YES      | YES       |             |
| destination_licensee_phone           | VARCHAR(35)            | YES      | YES       |             |
| destination_licensee_email_address   | VARCHAR(50)            | YES      | YES       |             |
| destination_associate_id             | VARCHAR(50)            | YES      | YES       |             |
| is_deleted                           | ENUM                   | YES      | YES       | True,False  |
| record_created_by                    | VARCHAR(35)            | YES      | YES       |             |
| record_created_date                  | DATE                   | YES      | YES       |             |
| record_updated_by                    | VARCHAR(35)            | YES      | YES       |             |
| record_updated_date                  | VARCHAR(50)            | YES      | YES       |             |
| order_cancelled                      | VARCHAR(50)            | YES      | YES       |             |
| manifest_generated_date              | VARCHAR(50)            | YES      | YES       |             |
| error_message                        | VARCHAR(50)            | YES      | YES       |             |
| transportation_license_address       | VARCHAR(50)            | YES      | YES       |             |
| transportation_license_name          | VARCHAR(75)            | YES      | YES       |             |
| transportation_license_email_address | VARCHAR(50)            | YES      | YES       |             |
| transportation_license_phone         | VARCHAR(35)            | YES      | YES       |             |
| is_manifest_generated                | ENUM                   | YES      | YES       | True,False  |

## Indexes

| Index Type  | Column Name             |
|-------------|-------------------------|
| PRIMARY KEY | ccrs_manifest_header_id |
| INDEX       | ccrs_manifest_header_id |

## Foreign Keys

| Source Column | Target Table | Target Column | Actions |
|---------------|--------------|---------------|---------|
|               |              |               |         |