---
slug: sale-details
title: sale_details
description: An explanation of the sale_details table.
---

# The `sale_details` Table

| Column Name         | Data Type     | Nullable | Updatable | Comment     |
|---------------------|---------------|----------|-----------|-------------|
| sale_detail_id      | BIGINT        | NO       | NO        | Primary Key |
| sale_header_id      | VARCHAR(50)   | YES      | YES       |             |
| inventory_id        | VARCHAR(50)   | YES      | YES       |             |
| plant_id            | VARCHAR(50)   | YES      | YES       |             |
| quantity            | DECIMAL(10,2) | YES      | YES       |             |
| unit_price          | DECIMAL(10,2) | YES      | YES       |             |
| discount            | DECIMAL(10,2) | YES      | YES       |             |
| sales_tax           | DECIMAL(10,2) | YES      | YES       |             |
| other_tax           | DECIMAL(10,2) | YES      | YES       |             |
| external_identifier | VARCHAR(100)  | YES      | YES       |             |
| is_deleted          | ENUM          | YES      | YES       | True,False  |
| created_by          | VARCHAR(35)   | NO       | NO        |             |
| created_date        | DATE          | NO       | NO        |             |
| updated_by          | VARCHAR(35)   | YES      | YES       |             |
| updated_date        | DATE          | YES      | YES       |             |

## Indexes

| Index Type  | Column Name    |
|-------------|----------------|
| PRIMARY KEY | sale_detail_id |
| INDEX       | sale_header_id |

## Foreign Keys

| Source Column | Target Table | Target Column | Actions |
|---------------|--------------|---------------|---------|
|               |              |               |         |