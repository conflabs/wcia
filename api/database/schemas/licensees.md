---
slug: licensees
title: licensees
description: An explanation of the licensees table.
---

# The `licensees` Table

| Column Name             | Data Type    | Nullable | Updatable | Comment    |
|-------------------------|--------------|----------|-----------|------------|
| licensee_number         | INT          | NO       | NO        |            |
| name                    | VARCHAR(75)  | YES      | YES       |            |
| dba                     | VARCHAR(50)  | YES      | YES       |            |
| license_issue_date      | DATE         | YES      | YES       |            |
| license_expiration_date | DATE         | YES      | YES       |            |
| external_identifier     | VARCHAR(100) | YES      | YES       |            |
| is_deleted              | ENUM         | YES      | YES       | True,False |
| address1                | VARCHAR(50)  | YES      | YES       |            |
| address2                | VARCHAR(50)  | YES      | YES       |            |
| city                    | VARCHAR(50)  | YES      | YES       |            |
| state                   | VARCHAR(50)  | YES      | YES       |            |
| zip_code                | VARCHAR(50)  | YES      | YES       |            |
| county                  | VARCHAR(50)  | YES      | YES       |            |
| email_address           | VARCHAR(50)  | YES      | YES       |            |
| phone_number            | VARCHAR(50)  | YES      | YES       |            |
| created_by              | VARCHAR(35)  | NO       | NO        |            |
| created_date            | DATE         | NO       | NO        |            |
| updated_by              | VARCHAR(35)  | YES      | YES       |            |
| updated_date            | DATE         | YES      | YES       |            |
| license_type            | VARCHAR(50)  | YES      | YES       |            |

## Indexes

| Index Type  | Column Name     |
|-------------|-----------------|
| PRIMARY KEY | licensee_number |
| INDEX       | licensee_number |

## Foreign Keys

| Source Column | Target Table | Target Column | Actions |
|---------------|--------------|---------------|---------|
|               |              |               |         |