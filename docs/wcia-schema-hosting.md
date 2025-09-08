---
slug: wcia-schema-hosting
title: WCIA Schema Hosting
description: Hosting the WCIA Schema.
sidebar_position: 98
---

# Hosting the WCIA Schema

As mentioned in the introduction, hosting the JSON data object can be done in a variety of ways and is up to the operator 
(and/or their integrator) to determine the best method for their use case. Regardless of the method used, the JSON object 
must be accessible via a URL link that can be shared with the recipient.

## Best Practices for Hosting

When hosting the WCIA schema JSON data object, consider the following best practices:

- **Low Friction Access**: Place no user authentication infrastructure in front of client requests. WCIA adopts a 
security philosophy of, "Anyone in possession of the URL is authorized to access it." This means that the URL should be 
easily accessible without requiring additional login or authentication steps.
- **Return True JSON Objects**: Don't just return text in the shape of a JSON object, indicate in the response 
that the content being returned is a JSON object using the `Content-Type` header to `application/json`. If not using an
integrator, be cautious of hosting the JSON object in a way that returns HTML or other content types (e.g. Google Docs
entities, Drop Bucket files, etc.) that may not be easily parsed by the recipient systems.
- **Use HTTPS**: Ensure that the URL link is served over HTTPS to provide secure access to the data. This helps protect 
the integrity of the data and ensures that it is not tampered with during transmission.