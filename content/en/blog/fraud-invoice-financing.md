---
date: 2023-01-18
slug: fraud-invoice-financing
headline: Baseline Fraud out of Invoice Financing
description: Utilizing the Baseline Protocol to synchronize separated silos of information to help prevent fraud in invoice financing
title: Baseline Fraud out of Invoice Financing
blurb: “”
categories: ["Technical", "Research", "Outreach", "Enterprise"]
contributors: [Baseline Technical Steering Committee]
---

**Baseline Fraud out of Invoice Financing**

It was a regular day in the office in September of 2021 at a fast-growing fintech company from Belgrade, Serbia, focused on invoice financing. We were occupied with our daily tasks: invoice customer onboarding, risk assessment, and transaction approval. 

Suddenly, an email arrived from one of our debtors, replying to an automated notification from our platform. about a due payment. He’s confused by the notification because he had already paid the invoice to the ‘invoice financing company’. We get on a call with him only to find out that he’s been communicating with another invoice financing company, and that he’s confused about whom he is supposed to pay. We already suspected what had happened and we immediately contacted our client, the original seller of the invoice, who did not answer the phone.  We then contacted the second invoice financing company and they confirmed our suspicion - they had financed the same invoice, from the same client to the same debtor, just hours before we did. This is what is known as double financing and is an old, well-known, fraud in the industry, and one that is very hard to deal with.

To quote ChatGPT: 

_“Double financing fraud occurs when a single invoice is financed by two or more financial institutions without their knowledge. This can occur when a borrower submits the same invoice to multiple lenders in order to receive multiple advances on the same invoice. Double financing fraud can result in significant losses for the lenders, as they may not receive full repayment for the amount they have advanced.”_

The only way to effectively fight this fraud is for all participants in invoice financing to be in a single market or an industry branch to have a mechanism to share state, against which they can check new invoices that are candidates for financing. Several companies are trying to tackle this problem globally (see [here](https://www.monetago.com/) and [here](https://www.gtreview.com/news/fintech/surecomp-fights-double-financing-fraud-with-invoice-checking-tool/)), but these solutions are not commonly accepted by everyone, rendering them useless for our case. This is why we decided to design and propose our own solution for the national market of Serbia. 

The idea is simple: find a central authority everyone trusts, then have them host a simple application that stores and compares strings, and produces alerts in case a duplicate is found, then expose an API for every invoice financing company to use, then reach an agreement with all invoice financing companies on the mechanism[^1] that will take the inputs from the invoice data (invoice amount, number, date, etc.) and that will produce a unique identifier from it, then make sure that every invoice financing company uploads the unique identifier via the API before financing an invoice, then produce an alert to the invoice financing company whose unique identifier is marked as a duplicate.  Sleep like a baby knowing you are protected.

The implementation is tricky though. Not the coding part, which is trivial, but everything around it. Who is the central authority everyone trusts? Is the IT team up to the task of hosting something like this? Do they have all the necessary regulatory approvals to provide these kinds of services? What happens in case the central authority database is breached? And so forth.

We dealt with all these questions and many more. In our case, that authority is the Chamber of Commerce and Industry of Serbia. Although the cooperation with them, in general, worked pretty well, as with any institution of this kind, the process took quite some time and faced various bureaucratic obstacles. However,  we are still on track to be live in production in the Q1 of this year. Fingers crossed.

Working on a project like this makes you think a lot about state synchronization. All these separate silos of truth exist in a given market (every database of every company out there) and they are, even when made to interact with each other, constantly diverging, just because of entropy. All the costs that are incurred from all the errors pop up because one value in a database slightly differs from the same value in another database.  In our paranoia to keep our business secrets hidden, we keep crucial information behind our corporate walls, and this behavior prevents everyone from maximizing their business value and incurs significant costs to remediate data errors after the fact. But programmers have secrets (remember the last time you committed an API key to Github) but still manage to build things together by working on shared, open-source codebases. Surely there is a way to do something similar with our precious business data? (Hint, there is.)

Obviously, we cannot expect to find a central authority everyone trusts for every specific use-case of sharing business data confidentially. Even if we could, the implementation and maintenance complexity of these solutions would quickly render the whole process meaningless. 

This is where the Baseline Protocol comes in. In layman's terms, the pattern enables a company to take a <span style="text-decoration:underline;">part</span> of its DB (part of its silo of truth) and share it with the outside world (making it a shared silo of truth). Yet only the part that the company is willing to share, and only with companies it wants to share it with. While doing that the companies involved can agree on the level of privacy they want to preserve and based on that, the kind of mechanism they want to use to make sure that the state shared between their DBs (and stored in each DB separately) is synchronized. 

The [Baseline Protocol](https://www.baseline-protocol.org/) is an open-source [standard](https://github.com/eea-oasis/baseline-standard/blob/main/core/baseline-core-v1.0-psd01.md#1-introduction) for multi-party zero trust under zero knowledge (see [here](https://www.baseline-protocol.org/blog/digital-business-at-a-crossroads/)), which consists of a Baseline Protocol Instance (BPI) that serves as the central point through which participants can confidentially exchange and synchronize data based on a set of rules they agreed on. The companies interact in workgroups through predefined worksteps that execute state changes on instances of a (mutually agreed upon) initial state, and in a manner that can prevent leakage of information to the outside world. These worksteps produce zero-knowledge proofs that can be used by participants' systems of record to verify both that the rules were followed and that the state is the same across all the systems of record connected with a given workstep. 

So how would the Baseline Protocol help in our case of double financing invoice fraud?

Imagine a place such as Dropbox or GitHub, where you can open an account and create a Baseline Protocol Instance. You could choose to host the instance in the cloud and adjust the data security and privacy policies according to the needs of your use case and your jurisdiction’s regulation in how to handle it. You would then proceed to create a workgroup and invite participants. You and the rest of the participants then get to choose how to talk to the BPI - Simple REST API with webhooks, Messaging protocol such as NATS, or other options.  Among yourselves, you agree on the initial state in the BPI, as well as the worksteps that define how that state will change, and you then proceed to integrate the workflow into your respective systems of record.

And that is it. Every state change in your system of record is now synchronized with all the other participant’s systems of record through a ‘central authority’ in the form of code, computer software that runs independently, does not leak sensitive information to the outside world, and produces proofs for everyone to verify. 

You could then even have a regulator or another institution creating a BPI with workgroups for various branches of the economy they are regulating, thus creating a space for information sharing for all participants and regulatory insights into relevant information. A good example would be the Ministry of Finance creating a workgroup for invoice financing companies in Serbia, where on top of double-financing fraud prevention they could gather all the necessary statistical information they currently collect through traditional means.

What is even more interesting, is imagining networks of these BPIs interacting together, continuously accruing value because the information is now moving freely across different interest groups. A good example would be a BPI workgroup used to battle double-financing fraud in Serbia interacting with a BPI workgroup from neighboring Croatia, thus helping to prevent cross-border double-financing fraud on top of the national level fraud prevention.

We are actively working on a simple reference implementation of the Baseline Protocol standard (codename BRI-3) that will allow for use cases such as this to materialize in 2023  through a full vendor and use case agnostic implementation. If you are interested in tracking our work and want to join our effort, feel free to reach out on the[ community Slack](https://ethereum-baseline.slack.com/join/shared_invite/zt-d6emqeci-bjzBsXBqK4D7tBTZ40AEfQ#/shared-invite/email),  [Github, or e-mail (baseline-team@oasis-open.org).](https://github.com/eea-oasis/baseline)

‘Till then, happy synchronizing.


## **About the Author,**

[Ognjen Kurtic](https://www.linkedin.com/in/ognjen-kurtic-b74236a6/) is a technical leader in the open-source [Baseline Protocol](https://www.baseline-protocol.org/) community. He drives forward the adoption of the specification as a Technical Steering Committee member, Code Maintainer, and Core Developer. Ognjen is the CTO and Co-Founder of [Finspot](https://www.linkedin.com/company/finspotrs/), a company focused on solving access to finance issues for the MSME sector in the Balkans.


<!-- Footnotes themselves at the bottom. -->
## Notes

[^1]:
     This mechanism is called a [hash function](https://en.wikipedia.org//wiki/Hash_function) and for the scope of this article it is enough to think about it as a  function that will always produce the same, unique string of characters given a set of input parameters. The output which can be thought of as the digital fingerprint of the input is commonly known as the hash. Because a hash function cannot be reversed, the input cannot be derived from the hash and, therefore, privacy-preserving.  
