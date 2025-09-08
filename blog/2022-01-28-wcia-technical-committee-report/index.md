---
slug: 20220128-wcia-technical-committee-report
title: 'WCIA Technical Committee Report - 2022-01-28'
description: 'Summary of resolutions and changes adopted by the WCIA Technical Committee meeting from 2022-01-28.'
authors: [bobby]
tags: [v1-3, versioning, release-cycle]
keywords: [wcia, technical committee, schema, versioning, lab results, transfer data]
---

# Technical Committee Report

---

- **_Next Technical Committee Meeting: February 11, 2022, @2p._**
- **_Release v1.3.0 Go/NoGo Meeting: February 25, 2022, @2p._**
- **_Next Release (v1.3.0) Date: February 28, 2022._**

## Items For Discussion

During the most recent Technical Committee meeting, two proposals were put forward for discussion and consideration by 
the general membership.

<!-- truncate -->

### Proposal 1: Canonical Reference Link

A schema addition has been proposed in the form of a field named document_origin, to be added to both the Transfer and 
Lab Result schema. This field will contain a URL, referencing the source document link. For example, a WCIA Lab Result 
Link would have this field’s value be the WCIA Lab Result Link itself.

```json
{
  "document_name": "WCIA Lab Result Schema",
  "document_schema_version": "1.2.0",
  "document_origin": "https://certs.conflabs.com/wcia/v1/WA-Dxy1BcGlulDf-WA-211031-999.json",
  "labresult_id": "WA-211031-999",
  "coa": "https://certs.conflabs.com/full/WA-Dxy1BcGlulDf-WA-211031-999.pdf",
  ...
}
```

### Proposal 2: Bulk Lab Results

Support for bulk lab result links has been proposed and it open for discussion. Laboratories are reporting they relate 
samples by manifest ID, creating an opportunity to send groups of Lab Result Links. Two designs have been proposed for 
consideration:

1. Playlist: a keyless array containing a list of URLs.

```json
[
  "https://host.site/wcia/v1…",
  "https://host.site/wcia/v1…",
  "https://host.site/wcia/v1…",
  ...
]
```

2. Manifest Object: This is a relational wrapper of the playlist; an object with a key of manifest ID, and a value of 
Playlist.

```jaon
{
  "01FTPFW3CTSAXAEREMKM42WTT9": [
    "https://host.site/wcia/v1/WA…",
    "https://host.site/wcia/v1/WA…",
    "https://host.site/wcia/v1/WA…",
    ...
  ]
}
```

## Resolutions

- **Semver Versioning adopted for schema [https://semver.org/](https://semver.org/).**
  1. MAJOR version when you make incompatible API changes,
  2. MINOR version when you add functionality in a backwards compatible manner, and
  3. PATCH version when you make backwards compatible bug fixes.

- **Release Cycle**
  - Last Monday of the month was adopted for releases.
  - This will change to something less frequent once the "newness" of this specification settles out.
  - Implementations are expected any time between 12:00 AM PST of that Monday, and Midnight.

- **Additional Laboratory Identifiers**
  - Three additional keys are to be added to the Lab Result Schema:
    - `lab_name`: The name of the laboratory. (string)
    - `lab_ubi_license`: The laboratory’s UBI License. (string)
    - `lab_ccrs_license`: The Laboratory’s CCRS Identifier (string)

- **Best/Recommended Practices**
  1. Use the full nomenclature when discussing interop links with general customers: WCIA Transfer Data Link, and WCIA Lab Result Link.
  2. It is recommended to provide QR codes, and/or text links to the WCIA Links in the following documents:
      - Integrator-supplied Manifest Documents
      - Customer Invoices
      - Certificates of Analysis
