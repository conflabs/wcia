---
slug: sale-headers
title: sale_headers
description: An explanation of the sale_headers table.
---

# The `sale_headers` Table

| Column Name         | Data Type    | Nullable | Updatable | Comment     |
|---------------------|--------------|----------|-----------|-------------|
| sale_header_id      | BIGINT       | NO       | NO        | Primary Key |
| licensee_id         | VARCHAR(50)  | YES      | YES       |             |
| sold_to_licensee_id | VARCHAR(50)  | YES      | YES       |             |
| sale_type           | VARCHAR(50)  | YES      | YES       |             |
| sale_date           | VARCHAR(50)  | YES      | YES       |             |
| external_identifier | VARCHAR(100) | YES      | YES       |             |
| is_deleted          | ENUM         | YES      | YES       | True,False  |
| created_by          | VARCHAR(35)  | NO       | NO        |             |
| created_date        | DATE         | NO       | NO        |             |
| updated_by          | VARCHAR(35)  | YES      | YES       |             |
| updated_date        | DATE         | YES      | YES       |             |

## Indexes

| Index Type  | Column Name    |
|-------------|----------------|
| PRIMARY KEY | sale_header_id |
| INDEX       | sale_header_id |

## Foreign Keys

| Source Column | Target Table | Target Column | Actions |
|---------------|--------------|---------------|---------|
|               |              |               |         |