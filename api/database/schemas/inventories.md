---
slug: inventories
title: inventories table
description: An explanation of the inventories table.
---

# The `inventories` Table

| Column Name          | Data Type      | Nullable | Updatable | Comment     |
|----------------------|----------------|----------|-----------|-------------|
| inventory_id         | BIGINT         | NO       | NO        | Primary key |
| licensee_id          | INT            | YES      | YES       |             |
| strain_id            | INT            | YES      | YES       |             |
| area_id              | INT            | YES      | YES       |             |
| product_id           | INT            | YES      | YES       |             |
| inventory_identifier | VARCHAR(100)   | YES      | YES       |             |
| initial_quantity     | DECIMAL(10, 2) | YES      | YES       |             |
| quantity_on_hand     | DECIMAL(10, 2) | YES      | YES       |             |
| total_cost           | NUMERIC(10, 2) | YES      | YES       |             |
| is_medical           | ENUM           | YES      | YES       | True,False  |
| external_identifier  | VARCHAR(100)   | YES      | YES       |             |
| is_deleted           | ENUM           | YES      | YES       | True,False  |
| created_by           | VARCHAR(35)    | NO       | NO        |             |
| created_date         | DATE           | NO       | NO        |             |
| updated_by           | VARCHAR(35)    | YES      | YES       |             |
| updated_date         | DATE           | YES      | YES       |             |

## Indexes

| Index Type  | Column Name   |
|-------------|---------------|
| PRIMARY KEY | inventory_id  |
| INDEX       | inventory_id  |

## Foreign Keys

| Source Column | Target Table | Target Column | Actions |
|---------------|--------------|---------------|---------|
|               |              |               |         |