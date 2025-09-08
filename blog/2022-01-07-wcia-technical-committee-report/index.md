---
slug: 20220107-wcia-technical-committee-report
title: 'WCIA Technical Committee Report - 2022-01-07'
authors: [bobby]
tags: [version-change,v1-2]
---

# Technical Committee Report

----

## Resolutions

### Schema Version Control

In order to track changes in a controlled way, it was resolved to utilize the schema versioning currently maintained at 
the following links:

- [WCIA Transfer Data Schema](https://github.com/conflabs/wcia-transfer-data-schema)
- [WCIA Lab Result Schema](https://github.com/conflabs/wcia-lab-result-schema)

Pull requests are accepted from technical committee participants.

<!-- truncate -->

### Lab Identifiers for Tests and Analytes

In order to provide a consistent set of identifiers between laboratories, labs are adopting the use of OpenTHC ULIDs 
([maintained here](https://github.com/openthc/api/tree/master/etc/lab-metric)), as the first choice when available. Pull 
requests to that library are also accepted.

## Changes Adopted for WCIA Schema

### Version 1.2.0 (Implementation Date: 2022-01-21)

- `document_schema_version`
  - Effected Schema: Transfer Data Schema, and Lab Result Schema
  - This field’s value will move from “1.1.0.0” to “1.2.0”.
  - Notes: this drops the 4th version digit.

- `sample_source_id`
  - Effected Schema: Lab Result Schema
  - This field was a v1.1 addition to the WCIA Transfer Data Schema.
  - This field will now be returned within the sample object of the WCIA Lab Result Schema.

- `lab_result_link`
  - Effected Schema: Transfer Data Schema
  - This field is an existing property of an inventory transfer item object.
  - This field is defined as a URL string pointing to the WCIA Lab Result Link for that item.

- All keys in both schema are lower case.
  - The upper case letters were the result of the Document’s auto-correct feature. 

### Version 1.3.0: Proposed Changes

- Laboratory Details
    - Add laboratory details to the Lab Result schema
    - e.g., laboratory_id, laboratory_name

- Bulk Imports
    - Add the ability to send links of multiple lab results.

- Add origin/source attribute to the Lab Result schema that points to its canonical reference.