---
slug: products
title: products
description: An explanation of the products table.
---

# The `products` Table

| Column Name         | Data Type           | Nullable | Updatable | Comment     |
|---------------------|---------------------|----------|-----------|-------------|
| product_id          |  BIGINT Primary Key | NO       | NO        | Primary Key |
| licensee_id         |  VARCHAR(50)        | YES      | YES       |             |
| inventory_type      |  VARCHAR(50)        | YES      | YES       |             |
| name                |  VARCHAR(75)        | YES      | YES       |             |
| description         |  VARCHAR(250)       | YES      | YES       |             |
| unit_weight_grams   |  DECIMAL(10,2)      | YES      | YES       |             |
| external_identifier |  VARCHAR(100)       | YES      | YES       |             |
| is_deleted          |  ENUM               | YES      | YES       | True,False  |
| created_by          |  VARCHAR(35)        | NO       | NO        |             |
| created_date        |  DATE               | NO       | NO        |             |
| updated_by          |  VARCHAR(35)        | YES      | YES       |             |
| updated_date        |  DATE               | YES      | YES       |             |

## Indexes

| Index Type  | Column Name |
|-------------|-------------|
| PRIMARY KEY | product_id  |
| INDEX       | product_id  |

## Foreign Keys

| Source Column | Target Table | Target Column | Actions |
|---------------|--------------|---------------|---------|
|               |              |               |         |