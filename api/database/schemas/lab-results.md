---
slug: lab-results
title: lab_results
description: An explanation of the lab_results table.
---

# The `lab_results` Table

| Column Name         | Data Type      | Nullable | Updatable | Comment                                     |
|---------------------|----------------|----------|-----------|---------------------------------------------|
| lab_result_id       | DECIMAL (32,2) | NO       | NO        | Primary Key                                 |
| lab_licensee_id     | VARCHAR(50)    | NO       | YES       |                                             |
| licensee_id         | VARCHAR(50)    | NO       | YES       |                                             |
| lab_test_status     | ENUM           | NO       | YES       | Fail,Pass,Required,Not Required,In Process  |
| inventory_id        | VARCHAR(100)   | NO       | YES       |                                             |
| test_name           | VARCHAR(100)   | NO       | YES       |                                             |
| test_date           | VARCHAR(50)    | NO       | YES       |                                             |
| test_value          | VARCHAR(50)    | NO       | YES       |                                             |
| external_identifier | VARCHAR(100)   | NO       | YES       |                                             |
| is_deleted          | VARCHAR(50)    | YES      | YES       |                                             |
| created_by          | VARCHAR(35)    | NO       | NO        |                                             |
| created_date        | VARCHAR(50)    | NO       | NO        |                                             |
| updated_by          | VARCHAR(50)    | YES      | YES       |                                             |
| updated_date        | VARCHAR(35)    | YES      | YES       |                                             |

## Indexes

| Index Type  | Column Name   |
|-------------|---------------|
| PRIMARY KEY | lab_result_id |
| INDEX       | lab_result_id |

## Foreign Keys

| Source Column | Target Table | Target Column | Actions |
|---------------|--------------|---------------|---------|
|               |              |               |         |