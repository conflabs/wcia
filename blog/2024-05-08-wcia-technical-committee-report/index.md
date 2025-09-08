---
slug: 2024-05-08-wcia-technical-committee-report
title: 'WCIA Technical Committee Report - 2024-05-08'
description: 'Summary of resolutions and changes adopted by the WCIA Technical Committee meeting from 2024-05-08.'
authors: [bobby]
tags: [v2-2]
keywords: [wcia, technical committee, schema, versioning, lab results, transfer data]
---

# Technical Committee Report

---

## Background

Since 2016 when the Washington State Legislature passed Senate Bill 5052 establishing a cannabis patient protection act, 
retail stores have offered products designated as recreational, or medical. Additionally, state law has allowed consumers 
with a qualifying condition to register with the State’s Medical Cannabis Authorization Database (MCAD). This has allowed 
medically endorsed stores to deduct the Sales and Use Tax from the price of products when sold to such registered consumers, 
regardless of whether or not those products are designated as recreational or medical. The difference that distinguishes 
medical product from recreational is the additional requirement of passing a heavy metals test, and has no bearing on the 
Sales and Use Tax deduction.

<!-- truncate -->

## New Rules

Effective June 6th, 2024, as enacted by House Bill 1453, medically endorsed stores may additionally deduct the Excise Tax 
on products designated as “medical,” or DOH Compliant, when sold to consumers registered in the MCAD. This change will 
have an impact on all members of the supply chain, and ease of indication in interoperability is desired.

## Solution

The WCIA Transfer Data Schema already contains a boolean field called `is_medical` at the inventory transfer item level 
(i.e. each item within the `inventory_transfer_item` array). Marking this field as true (int 1), will indicate to the 
receiving entity that the item is eligible for DOH Compliant/Medical designation.

The WCIA Lab Result Schema does not currently have a coinciding `is_medical` field to indicate the additional testing was 
completed to meet the DOH Compliance standard. It was agreed such a field is desired. The `is_medical` boolean field will 
be added to the root level of the Lab Result Schema.

## Implementation (2024-06-06)

The solution requires a change to the Lab Result Schema (and no changes to the Transfer Data Schema). This change is a 
non-breaking change, and a minor version bump to 2.2. Because this is a non-breaking change, 2.1 version links will 
continue to provide previously required data. Implementation can begin at any time, with a formal date of 2024-06-06.

## Next Steps

New manifest and reporting requirements will be coming into effect on January 1, 2025. These new data points (e.g. date 
of sampling), will require additional fields on transfer and lab results links. A technical meeting will be proposed in 
September for discussion and solution proposals.

## V2.2.0 Schema Changes to be Implemented:

- **Version Minor Increment**
  - **Schema(s) Affected**: _Lab Result Schema_
    - The changes to the schemas are backward compatible, resulting in a minor version increment:
      - `"document_schema_version": "v2.2.0"`

- **Additional Lab Results Fields**
  - **Schema(s) Affected**: _Lab Result Schema_
    - One additional keys are to be added to the Lab Result Schema:
      - `is_medical`: 0 or 1 (bool)

Example:
```json
{
  ...
  "labresult_id": "WA-240818-999",
  "coa": "https://cannalabinc.com/PesticidesLabResult.pdf",
  "release_date": "2024-08-18",
  "amended_date": "",
  "expire_date": "2024-09-04",
  “status”: “string”
  “is_medical”: 1
  ...
}
```
