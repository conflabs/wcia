---
slug: integrators
title: integrators
description: An explanation of the integrators table.
---

# The `integrators` Table

| Column Name   | Data Type   | Nullable | Updatable | Comment    |
|---------------|-------------|----------|-----------|------------|
| integrator_id | BIGINT      | NO       | NO        |            |
| name          | VARCHAR(75) | YES      | YES       |            |
| is_active     | ENUM        | NO       | YES       | True,False |
| is_deleted    | ENUM        | NO       | YES       | True,False |
| created_by    | VARCHAR(35) | NO       | NO        |            |
| created_date  | DATE        | NO       | NO        |            |
| updated_by    | VARCHAR(35) | YES      | YES       |            |
| updated_date  | DATE        | YES      | YES       |            |

## Indexes

| Index Type  | Column Name   |
|-------------|---------------|
| PRIMARY KEY | integrator_id |
| INDEX       | integrator_id |

## Foreign Keys

| Source Column | Target Table | Target Column | Actions |
|---------------|--------------|---------------|---------|
|               |              |               |         |