---
slug: 2024-09-28-wcia-technical-committee-report
title: 'WCIA Technical Committee Report - 2024-09-25'
authors: [bobby]
tags: [schema-changes]
---

# Technical Committee Report

---

## Background

### RCW 16-309-280: Reports.

[RCW 16-309-280](https://apps.leg.wa.gov/wac/default.aspx?cite=16-309&full=true#16-309-280) is a set of rules and 
requirements related to the reporting of laboratory results. Some elements of these rules are pointed toward the 
validation of laboratory results by way of laboratory procedures and documentation, and subsection 6 places requirements 
on the certificates of analysis. These requirements are scheduled for implementation on January 1, 2025. Within 
subsection 6 are several requirements to be considered for addition to WCIA json schemas to facilitate interoperability.

<!-- truncate -->

## New Rule(s)

### RCW 16-309-280.6(e) Date of sample collection;

Certificates of Analysis will require the date of sample collection: the date upon which compliance samples were 
collected for testing. This date is not currently represented within either WCIA json schemas. As labs do not, by and 
large, collect testing samples in WA State, this information must be provided by the entity that does so. To accommodate 
the passing of this required date, a new field `sample_collection_date` (an ISO8601 timestamp) will be added to the root 
of the `inventory_transfer_item` object within the `inventory_transfer_items` array of the WCIA Transfer Data Schema.

## New Definition

### sample_source_id and inventory_id

Within the current schema documentation on Github, the description of sample_source_id and inventory_id are nearly 
identical but for the word “source,” which lacks a nuanced definition. To increase clarity, the descriptions of these 
two fields will change in the documentation as follows:

**_WCIA Inventory Transfer Schema_**
Field: `sample_source_id`
- Old Description: “A vendor system assigned unique identifier representing the source inventory from which the items were sampled.”
- New Description: “A vendor system assigned unique identifier representing the sample. This is different from the laboratory’s sample identifier.”

**WCIA Lab Result Schema**
Field: `sample_source_id`
- Old Description: “A property of the Sample object, sample_source_id is an identifier representing the source lot from which the sample was taken.”
- New Description: “A vendor system assigned unique identifier representing the sample. This is different from the laboratory’s sample identifier.”

**WCIA Inventory Transfer Schema**
Field: `inventory_id`
- Old Description: “A vendor system assigned unique identifier representing the inventory from which the items were sampled.”
- New Description: “A vendor system assigned unique identifier representing the sample’s source lot or batch.

## Implementation (2025-01-01)

### Schema Changes

Implementation requires a change to the Transfer Data Schema. This change is a non-breaking change, and a minor version 
bump to version 2.2. Because this is a non-breaking change, 2.1 version links will continue to provide previously required 
data as needed. so implementation can begin at any time, with a formal date of 2025-01-01. Version 2.1 of this schema 
remains the “current version” until then.

**V2.2.0 Schema Changes to be Implemented:**
- **Version Minor Increment**
  - **Schema(s) Affected**: _Transfer Data Schema_
    - The changes to the schemas are backward compatible, resulting in a minor version increment:
      - `document_schema_version`: "v2.2.0"

- **Additional Field(s)**
  - **Schema(s) Affected**: _Transfer Data Schema_
    - One additional key is to be added to the Schema at the root of the inventory_transfer_item object (within the 
    inventory_transfer_items array:
      - `sample_collection_date`: “ISO8601 Timestamp” 
      - Example:

```text
..."inventory_transfer_items": [
  {
    ...
    "product_name": "string",
    “sample_collection_date”: 2024-10-18
    ...
```

### Document Changes

Implementation of document changes will be made ASAP.

## Other Discussion

Several other subsections of [RCW 16-309-280](https://apps.leg.wa.gov/wac/default.aspx?cite=16-309&full=true#16-309-280) 
were reviewed and determined unnecessary additions to the Lab Result Schema:

**RCW 16-309-280.6(i) Amount of sample received**  
Committee participants agreed this is not needed downstream.

**RCW 16-309-280.6(j) Date received by laboratory**  
Committee participants agreed this is not needed downstream.

**RCW 16-309-280.6(k) Name of certifying scientist**  
Committee participants agreed this is not needed downstream.

**6-309-280.6(l) Date reported by the laboratory**  
Committee participants agreed this is not needed downstream.

**RCW 16-309-280.6(m) Results of each test performed to include name of test, results, measures (i.e., mg/g), cutoffs, 
and instrument/method of testing used**  
Committee participants agreed this is not needed downstream.
