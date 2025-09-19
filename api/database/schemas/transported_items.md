---
slug: transported-items
title: transported_items
description: An explanation of the transported_items table.
---

# The `transported_items` Table

| Column Name                   | Data Type       | Nullable | Updatable | Comment                |
|-------------------------------|-----------------|----------|-----------|------------------------|
| transported_items_id          | BIGINT NOT NULL | NO       | NO        | Primary Key            |
| external_manifest_identifier  | VARCHAR(100)    | YES      | YES       |                        |
| inventory_external_identifier | VARCHAR(100)    | YES      | YES       |                        |
| plant_external_identifier     | VARCHAR(100)    | YES      | YES       |                        |
| description                   | VARCHAR(250)    | YES      | YES       |                        |
| product_type                  | VARCHAR(75)     | YES      | YES       |                        |
| medical                       | VARCHAR(50)     | YES      | YES       |                        |
| inventory_type                | ENUM            | YES      | YES       | Clones, Plant, Seed... |
| strain                        | VARCHAR(100)    | YES      | YES       |                        |
| quantity                      | VARCHAR(50)     | YES      | YES       |                        |
| uom                           | VARCHAR(50)     | YES      | YES       |                        |
| weight_per_unit               | VARCHAR(50)     | YES      | YES       |                        |
| servings_per_unit             | VARCHAR(50)     | YES      | YES       |                        |
| external_identifier           | VARCHAR(100)    | YES      | YES       |                        |
| created_by                    | VARCHAR(35)     | NO       | NO        |                        |
| created_date                  | DATE            | NO       | NO        |                        |
| updated_by                    | VARCHAR(35)     | YES      | YES       |                        |
| updated_date                  | DATE            | YES      | YES       |                        |
| record_created_by             | VARCHAR(35)     | NO       | NO        |                        |
| record_created_date           | DATE            | NO       | NO        |                        |
| record_updated_by             | VARCHAR(35)     | YES      | YES       |                        |
| record_updated_date           | DATE            | YES      | YES       |                        |
| is_deleted                    | ENUM            | YES      | YES       | True,False             |
| operation                     | ENUM            | YES      | YES       | Insert,Update,Delete   |
| error_message                 | VARCHAR(100)    | YES      | YES       |                        |

## Indexes

| Index Type  | Column Name          |
|-------------|----------------------|
| PRIMARY KEY | transported_items_id |
| INDEX       | transported_items_id |

## Foreign Keys

| Source Column | Target Table | Target Column | Actions |
|---------------|--------------|---------------|---------|
|               |              |               |         |