---
date: 2024-04-26
slug: prevent-disputes-with-synchronization
headline: Preventing Disputes In Supply Chain Collaborations With Proper Systems Synchronization
description:
title:  Preventing Disputes In Supply Chain Collaborations With Proper Systems Synchronization
blurb: “Streamlining Cross-Company Processes - The Baseline Protocol’s ERP Agnostic Approach”
categories: ["Core Dev", "Technical", "Example", "Research"]
contributors: [Baseline Technical Steering Committee]
---

# Preventing Disputes In Supply Chain Collaborations With Proper Systems Synchronization

## Streamlining Cross-Company Processes - The Baseline Protocol’s ERP Agnostic Approach

Supply chain collaborations involve cross-company business processes with a high probability of disputes that involve many ERPs. A lack or loss of state consistency among ERPs could lead to these disputes or issues. It's challenging to assign an exact cost, but [Gartner](https://www.gartner.com/smarterwithgartner/how-to-improve-your-data-quality) estimates on average, annual cost of $12.9 million per organization for poor data quality. One contributing factor is the lack of a solution to obtain reliable and up-to-date business partner data. Add to this the indirect costs, such as a drop in customer satisfaction, impacts on a company’s reputation, or loss of future business opportunities, which could significantly increase the financial impact.

A good example of this scenario is an international automobile manufacturing company, let's call it AutoX, which outsources parts manufacturing to various suppliers across the globe. Each supplier, as well as AutoX, has its own ERP system to manage inventory, production, and deliveries.

AutoX places an order for specific parts with SupplierA and SupplierB. SupplierA is located in the U.S. and SupplierB is in Germany. The orders are tracked separately in the ERP systems of AutoX, SupplierA, and SupplierB.

Let’s say AutoX and SupplierA are using SAP S/4HANA and SupplierB operates a 3rd party solution and all three ERPs are integrated.

<img src="/blog/images/prevent-disputes-with-synchronization/image1.png" alt="alt text" >

The ERP system at SupplierA successfully records the production and dispatch of its parts, and the ERP system at AutoX also records the receipt of these parts. However, due to inadequate real-time synchronization, while AutoX’s ERP shows the receipt of parts from SupplierA, SupplierB's ERP still shows the parts as not yet received by AutoX when the synchronization happens.

Assuming SupplierB must initiate its part of the order's production only after SupplierA's parts have reached AutoX to maintain production balance and not overcrowd the assembly line, SupplierB delays its production. When it finally gets the updated status from AutoX’s ERP, the delay in response leads to delayed manufacturing and delivery.

When AutoX fails to deliver its finished automobiles on time to its customers, it leads to disputes over responsibility and liability, considering the negative impact on AutoX's schedule, costs, and customer relationships. The lack of ERP consistency caused by a lack of real-time and accurate automatic synchronization ultimately leads to disputes and problems.

Using the Baseline protocol, involved ERPs leverage their own Baseline instance to notify each other as soon as they become online, ensuring consistency across all participants to make informed decisions which can prevent such issues.

<img src="/blog/images/prevent-disputes-with-synchronization/image2.png" alt="alt text" >

There are many similar examples when orders, deliveries, or payments are modified or done but the lack of a proper solution to keep various ERP systems in sync leads to unnecessary costs and delays in supply chains.

The Baseline Protocol utilizes a decentralized setup which is ERP-agnostic and allows deterministic updates of ERP systems in an immutable and non-repudiable manner. This unique property is the key to the global synchronization of heterogeneous systems of records operated by independent vendors irrespective of a Cloud-based or on-premises setup.

*It is time, come join us!*

Email us at [baseline-team@oasis-open.org](mailto:baseline-team@oasis-open.org) to join the community.
