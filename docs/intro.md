---
sidebar_position: 1
slug: intro
title: WCIA Schema Introduction
description: An introduction to the WCIA Schema and their use.
---

# Welcome to the WCIA Schema documentation! 

This site provides an overview of the WCIA schemas used to facilitate data transfer between cannabis industry participants
in Washington State. The schemas were designed by the people who use it to facilitate interoperability between licensees,
laboratories and other stakeholders in the legal cannabis supply chain.

## How to Use the WCIA Schemas

There are three parts to using the WCIA schemas for interoperability: forming a JSON data object in the shape of the required 
schema model, hosting the JSON object as a URI, and lastly providing the URL link to a recipient (e.g. Producer, Processor, 
Retailer, Lab, etc.).

![WCIA Basic Workflow Diagram](/img/wcia-basic-workflow.png)

There are two schemas current in use: the Lab Result Schema (version 2.2) and the Transfer Data Schema (version 2.1). 
Each schema has its own documentation, schema model, and example data. 

### Lab Result Schema (Current Version 2.2)

- **Documentation**: Get the descriptive guide here: [Version 2.2](/docs/wcia-lab-result-schema/version-2-2)
- **Schema Model**: See the schema model here: [v2.2 Lab Result Schema JSON](./wcia-lab-result-schema/assets/v-2-2-lab-result-schema.json)
- **Lab Result Example**: See an example with real world data here: [example.json](./wcia-lab-result-schema/assets/v-2-2-example.json)
- **Schema Change Log**: [ChangeLog](/docs/wcia-lab-result-schema/change-log)

### Transfer Data Schema (Current Version 2.1)

- **Transfer Data Documentation**: Get the descriptive guide here: [Version 2.1](/docs/wcia-transfer-data-schema/version-2-1)
- **Transfer Data Schema**: See the schema model here: [v2.1 wcia-transfer-data-schema.json](./wcia-transfer-data-schema/assets/v-2-1-wcia-transfer-data-schema.json)
- **Schema Change Log**: [ChangeLog](/docs/wcia-transfer-data-schema/change-log)

### Hosting the Schemas for Use

Hosting the JSON data object can be done in a variety of ways and is up to the operator (and/or their integrator) to 
determine the best method for their use case. Regardless of the method used, the JSON object must be accessible via a 
URL link that can be shared with the recipient.

[More here on Hosting the WCIA Schema](/docs/wcia-schema-hosting)

### Sharing the Link to the Hosted Schema

This will depend on whether the user has an integrator, or if they are directly sharing the link with the recipient. 
In either case, the URL link to the hosted JSON object must be shared with the recipient in order for them to access and 
parse the data. Emailing the link is common practice.

---

## License

The WCIA is a community driven organization and the WCIA schemas are released for general use under the 
[MIT License](/docs/license). 

## Resources

- [JSON Specification (RFC 8259)](https://www.ietf.org/rfc/rfc8259.txt)
- [ISO8601 Internet Dates Specification (RFC 3339)](https://www.ietf.org/rfc/rfc3339.txt)