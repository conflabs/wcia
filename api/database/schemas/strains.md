---
slug: strains
title: strains table
description: An explanation of the strains table.
---

# The `strains` Table

| Column Name  | Data Type   | Nullable | Updatable | Comment                |
|--------------|-------------|----------|-----------|------------------------|
| strain_id    | BIGINT      | NO       | NO        | Primary Key            |
| associate_id | VARCHAR(50) | YES      | YES       |                        |
| licensee_id  | VARCHAR(50) | YES      | YES       |                        |
| strain_type  | ENUM        | NO       | NO        | Indica, Sativa, Hybrid |
| name         | VARCHAR(75) | YES      | YES       |                        |
| is_deleted   | ENUM        | YES      | YES       | True,False             |
| created_by   | VARCHAR(35) | NO       | NO        |                        |
| created_date | DATE        | NO       | NO        |                        |
| updated_by   | VARCHAR(35) | YES      | YES       |                        |
| updated_date | DATE        | YES      | YES       |                        |

## Indexes

| Index Type  | Column Name |
|-------------|-------------|
| PRIMARY KEY | strain_id   |
| INDEX       | strain_id   |

## Foreign Keys

| Source Column | Target Table | Target Column | Actions |
|---------------|--------------|---------------|---------|
|               |              |               |         |