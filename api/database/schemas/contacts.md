---
slug: contacts
title: contacts
description: An explanation of the contacts table.
---

# The `contacts` Table

| Column Name          | Data Type    | Nullable | Updatable | Comment     |
|----------------------|--------------|----------|-----------|-------------|
| contact_id           | BIGINT       | NO       | NO        |             |
| licensee_id          | INTEGER      | YES      | YES       |             |
| integrator_id        | INTEGER      | YES      | YES       |             |
| first_name           | VARCHAR(75)  | YES      | YES       |             |
| middle_initial       | VARCHAR(50)  | YES      | YES       |             |
| last_name            | VARCHAR(100) | YES      | YES       |             |
| external_identifier  | VARCHAR(100) | YES      | YES       |             |
| is_deleted           | ENUM         | YES      | YES       | True,False  |
| created_by           | VARCHAR(35)  | NO       | NO        |             |
| created_date         | DATE         | NO       | NO        |             |
| updated_by           | VARCHAR(35)  | YES      | YES       |             |
| updated_date         | DATE         | YES      | YES       |             |
| is_admin             | ENUM         | YES      | YES       | True,False  |

## Indexes

| Index Type  | Column Name |
|-------------|-------------|
| Primary Key | contact_id  |
| Index       | contact_id  |

## Foreign Keys

| Source Column | Target Table | Target Column | Actions |
|---------------|--------------|---------------|---------|
|               |              |               |         |