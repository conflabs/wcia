---
slug: 20220211-wcia-technical-committee-report
title: 'WCIA Technical Committee Report - 2022-02-11'
authors: [bobby]
tags: [v1-3]
---

# Technical Committee Report

---

**_Release v1.3.0 Go/NoGo Meeting: February 25, 2022, @2p._**  

**_Next Release (v1.3.0) Date: February 28, 2022._**

## V1.3.0 Schema Changes to be Implemented 2022-02-28:

- **Version Minor Increment**
    - **Schema(s) Affected**: _Transfer Data Schema_, and _Lab Result Schema_
        - The changes to the schemas are backward compatible, resulting in a minor version increment:
            - `"Document_schema_version": "v1.3.0"`

<!-- truncate -->

- **Additional Laboratory Identifiers**
  - **Schema(s) Affected**: _Lab Result Schema_
    - Three additional keys are to be added to the Lab Result Schema:
      - `lab_name`: The name of the laboratory. (string)
      - `lab_ubi_license`: The laboratory’s UBI License. (string)
      - `lab_ccrs_license`: The Laboratory’s CCRS Identifier (string)

Example:
```json
{
  "document_name": "WCIA Lab Result Schema",
  "document_schema_version": "1.3.0",
  "document_origin": "https://cannalabinc.com/wcia/v1/cannabisLabResult.json",
  "lab_name": "Cannabis Laboratory, Inc.",
  "lab_ubi_license": "9876543210",
  "lab_ccrs_license": "0123456789",
  "labresult_id": "WA-211031-999",
  "coa": "https://cannalabinc.com/cannabisLabResult.pdf",
  ...
}
```

- **Canonical Reference Link**
  - **Schema(s) Affected**: _Transfer Data Schema_, and _Lab Result Schema_
    - A single key/value pair is being added to both schemas:
      - `document_origin`: A URL reference to the document itself (string)

Example:
```json
{
  "document_name": "WCIA Lab Result Schema",
  "document_schema_version": "1.3.0",
  "document_origin": "https://certs.conflabs.com/wcia/v1/WA-Dxy1BcGlulDf-WA-211031-999.json",
  "labresult_id": "WA-211031-999",
  "coa": "https://certs.conflabs.com/full/WA-Dxy1BcGlulDf-WA-211031-999.pdf",
  ...
}
```