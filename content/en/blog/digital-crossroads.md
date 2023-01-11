---
date: 2022-12-07
slug: digital-business-at-a-crossroads
headline: Digital Business at a Crossroads
description: Digital business is rapidly approaching a crossroads, the Baseline Protocol is here to help.
title: Digital Business at a Crossroads
blurb: “”
categories: ["Technical", "Research", "Outreach", "Enterprise"]
contributors: [Baseline Technical Steering Committee]
---

**Digital Business at a Crossroads**

Digital business is rapidly approaching a crossroads.

On the one hand,



* “Digitally transformed organizations are projected to contribute to more than half of the global gross domestic product (GDP) by 2023, accounting for $53.3 trillion” ([IDC, 2020](https://financesonline.com/digital-transformation-statistics/)), and
* “65% of the world’s GDP is predicted to be digitized by 2022” ([IMF, 2020](https://financesonline.com/digital-transformation-statistics/)).

The advantages of digitization have been clear for a while:

<img src="/blog/images/digital-crossroads/image3.png" alt="alt text" >

Source: [Financesonline](https://financesonline.com/digital-transformation-statistics/) (2022)

Yet this drive to digitize business has an exponentially increasing dark side:



* [40% of internet traffic originates from malicious bots](https://www.prnewswire.com/news-releases/barracuda-research-reveals-skyrocketing-levels-of-bot-traffic-301366777.html) with cybercrime causing [$10.5T in damage annually by 2025](https://cybersecurityventures.com/cybercrime-damage-costs-10-trillion-by-2025/), almost 10% of the [projected 2025 global GDP](https://www.statista.com/statistics/268750/global-gross-domestic-product-gdp/), with an annual, accelerating growth rate of 15%.
* Approx. [15 billion connected Things in 2022 (doubling every 3 years)](https://iot-analytics.com/number-connected-iot-devices/) are exponentially increasing the vulnerability of digital business activities.

The above two points mean that the costs of conducting digital business– security plus regulatory compliance costs– are growing exponentially. Consequently, this development will soon threaten the profitability of new and existing digital businesses.

_But why now?_ Because the exponential growth of digital business costs is not new but has been happening for a long time. It has been driven by both increased distribution and decentralization of data and computing resources and the unavoidable rise in the number of connected devices. Who doesn’t have a mobile phone, a tablet, a digital watch, a laptop, one or more AI assistants, connected TVs, connected lights, connected cars, etc.? And this trend will not change, quite on the contrary as the above numbers demonstrate.

We also know that exponential change is insidious; humans do not recognize it until it is too late. Take the classic example: If 1% of a lake’s surface is covered with water lilies and the water lily population doubles every day, the entire lake will be covered in less than a week. However, the water lilies will be barely noticeable until day 4, and then it is too late. We are currently approaching day 4 for the Internet; we are almost too late to turn the ship around.

_But why do the costs grow exponentially?_ Because they arise from vulnerabilities in conducting digital business due to a lack of trust both from the point of view of regulatory compliance and cybersecurity. And the number of vulnerabilities increases with (1) the square of the number of entities (network size) that can interact with each other and (2) the number of trust boundaries crossed when those entities interact (decentralization). In other words, the attack surface of digital businesses is growing exponentially, and, therefore, also the cost of defending them.

Given that orchestrated security frameworks do not scale incredibly well unless you are the size of Google or Amazon, it is not surprising that failures rise and their costs rise as digital services become increasingly decentralized. Any device connected to the internet, or even an internal network, is an attack vector on your digital business.

This dynamic is encapsulated in the [ Digital Business Trilemma proposed by Dr. Andreas Freund](https://itntrust.medium.com/the-digital-business-trilemma-zero-trust-and-the-itn-14d80b9599e8): _Only two of three characteristics can be met at the same time for all participating digital service consumers and providers:_



1. _Decentralization_
2. _Security_
3. _Performance_

This trilemma is a weaker version of the [Blockchain Trilemma](https://vitalik.ca/general/2021/04/07/sharding.html) described by Ethereum’s founder, Vitalik Buterin, since in our situation there is no requirement for data consistency and integrity across all participants as we have in the case of Blockchains.

Since the overall decentralization of digital businesses is outside the control of a single entity, one is left with choosing whether to optimize the performance or the security of digital services; a seemingly impossible trade-off. However, this choice can be made easier by focusing on digital services for subnetworks. Such subnetworks have lower levels of decentralization, i.e., the number of participants, and, therefore, a business can improve security and performance by better managing its attack surface through the shift of computing and storage for digital services to a network’s edge. This is possible thanks to Moore’s Law continuing to drive down the costs of computing and storage. Therefore, a business can now focus on optimizing security at the edge.

This leads to the next question: _What does security at the edge require?_

The answer is Zero Trust. This is a deceptively simple statement because Zero Trust at the edge means no entity trusts another entity at any given time, even if the last digital business interaction was trusted. As a consequence, every participant must be able to do several things together:



1. Authenticate and authorize every other participant for every single digital business interaction at all times,
2. Prove and verify the authenticity, integrity, and correctness of every digital service transaction, and its associated supply chain of prior digital transactions informing and triggering said digital service transaction,
3. Minimize the exchange of sensitive data in a digital service transaction, ideally to zero.

Since digital transactions do not occur in a vacuum we can summarize the above critical points as_ Multiparty Zero Trust under Zero-Knowledge_ (MZTZK).

The [Baseline Protocol](https://docs.baseline-protocol.org/) open-source project was conceived as a solution pattern and a [standard](https://github.com/eea-oasis/baseline-standard) for MZTZK. It is part of the [Enterprise Ethereum Alliance Community Projects](https://entethalliance.org/eeacommunityprojects/) initiative in collaboration with the[ Open Projects](https://www.oasis-open.org/projects-committees/) program of the internet standards organization OASIS.  The Baseline Protocol has inspired other standards such as the [Metro Ethernet Forums 114 standard](https://www.mef.net/resources/mef-114-dlt-based-commercial-and-operational-services-framework-billing/) (telecommunications industry) and [Polygon Nightfall](https://polygon.technology/solutions/polygon-nightfall) (an enterprise Ethereum Layer 2 scaling solution).

The project was created to address known issues with B2B transactions around data synchronicity between two or more systems of record because there is no guarantee that commercial data is properly represented in an ERP system, or that the history of commercial transactions (Orders, Invoices, Credit Memos, etc.) are accurately reflected in the ERP systems of the involved parties- incorrect tax calculations or incorrect application of volume discounts to pricing are typical sources of data misalignment. These types of issues lead to hundreds of billions of dollars in opportunity costs every year across the nearly 3 trillion B2B transactions a year globally. Larger organizations with thousands or tens of thousands of business relationships globally not only have the headache of opportunity costs but also maintain one-to-one integrations between systems of record, often with arcane technology. As already discussed, the B2B situation is further complicated as more and more transactions occur at the edge and with autonomous agents originating business transactions. Examples include Alexa placing automatic product orders when certain conditions are met, and digital telecom supply chains with bundled services of voice, data-on-demand, edge security, and ephemeral telecom networks delivering services at the edge. Currently, it is impossible to detect if such complex digital supply chains are compromised and if participants are not malicious actors.

A standards-compliant Baseline Protocol implementation will support contract logic aligned with the business rules around commercial documents such as Orders and Invoices and privacy preservation through zk-proofs to achieve



* the synchronizations of systems of record by enforcing data consistency through zk-proofs that can only be generated if the submitted commercial documents comply with the relevant business rules and data encoded into its zk prover systems’ program circuits,
* complete B2B transaction audits by anyone, anytime, in real-time based on on-chain recursive zk-proofs,
* a high level of protection against malicious actors since all zk-proofs must be validated before being finalized by participants that can prove their identity for every transaction,
* while maintaining complete confidentiality through the very nature of the zk-proofs.

How is that achieved?

The simple B2B example of an Order between a Buyer and a Seller as seen in the figure below demonstrates the concept.

<img src="/blog/images/digital-crossroads/image2.png" alt="alt text" >


Here, Buyer and Seller Order generation and acceptance assume that a Master Services Agreement (MSA) between the parties exists and that it is recorded on a Baseline Protocol Implementation (BPI). Furthermore, it assumes that the commercial state of the MSA tracking all transactions between Buyer and Seller has been synchronized up to this point. Without a BPI, both Buyer and Seller must assume that the MSA between them and all its values are correctly captured in the other party’s respective Systems-of-Record – typically a bad assumption. However, with a BPI both systems of record can always stay in sync using the BPI MSA state as a reference. Furthermore,  a BPI allows validation that the state updates by the parties are correct and that the parties are allowed to perform those updates – for every such update.

But what does that look like from a (standards-compliant) architectural point of view?

The standard defines a BPI stack as follows:

<img src="/blog/images/digital-crossroads/image4.png" alt="alt text" >


The different components are defined as follows:

**BPI Abstraction Layer**



* **API Gateway:** An API gateway that exposes all required functionality to the counterparties to an agreement and enforces all necessary authentication and authorization of API calls, as well as correctly directs the API calls within the Baseline Protocol Stack.
* **Application:** The application logic manages the pre-processing and routing of all API requests and enforcement of authentication and authorization protocols and rules.

**Middleware Layer**



* **Workflows:** A Business Process Management engine that allows for the definition, management, and instantiation of workflows and worksteps and associated business rules and data based on agreements between counterparties.
* **Identity/Accounts/Workgroups:** A capability that allows the identification and management of counterparties and their delegates, as well as members of workflows and worksteps organized in workgroups created by the counterparties to an agreement. This capability is the heart of ensuring Zero Trust with every transaction since the standard recommends the usage of [W3C Decentralized Identifiers](https://www.w3.org/TR/did-core/) and [W3C Verifiable Credentials](https://www.w3.org/TR/vc-data-model/) for authentication and identity verification since they allow one to meet our main identity requirement from above in a standards-compliant manner: _authenticate and authorize every other participant for every single digital business interaction at all times._
* **Messaging:** A capability that enables secure and privacy-preserving exchanges of messages between counterparties. Furthermore, this capability enables the coordination of proposed agreement state changes.

**Processing Layer**



* **Transaction Pool**: one or more transaction pools that hold, properly sequence, preprocess and batch for processing by the Virtual State Machine all requested state change transactions of a BPI.
* **Virtual State Machine**: A system that processes and finalizes all state changes where state changes must be deterministic, cryptographically verifiable, and data privacy-preserving.
* **Storage**: A system storing the cryptographically linked state of all agreements in a BPI, both current and historical records.

**CCSM Abstraction Layer**



* **API Gateway:** An API gateway that enables accessing all necessary BPI functions implemented on one or more CCSMs, and correctly directs the requests within the CCSM Abstraction layer to the proper CCSM API application logic.
* **Application:** The CCSM API application logic manages the pre-processing, and the correct usage of the underlying CCSM and BPI authentication and authorization.

So what is a CCSM? It is a Consensus Controlled State Machine, a network of replicated, shared, and synchronized digital data spread across multiple sites connected by a peer-to-peer utilizing a consensus algorithm with no central administrator or centralized data storage.

**CCSM Layer**



* **Messaging:** A messaging capability that allows the exchange of messages between CCSM nodes that comprise received transactions or a new proposed CCSM state.
* **Transaction Pool:** A transaction pool that temporarily stores, properly sequences, pre-processes, and batches for processing by the CCSM Virtual State Machine all submitted CCSM transactions.
* **Virtual State Machine:** A system that deterministically and cryptographically verifiable processes all CCSM state changes.
* **Storage:** A system that stores the cryptographically linked state of all state objects in a CCSM, both current and historical records.

A typical BPI transaction is visualized in the figure below:


<img src="/blog/images/digital-crossroads/image1.png" alt="alt text" >


A transaction is prepared and submitted by an external application and flows through the different layers of the BPI stack -- in order are the BPI Abstraction Layer, the Middleware Layer, the Processing Layer, the CCSM Abstraction Layer, and the CCSM Layer -- and interacts with the components of each layer as required. The figure further demonstrates how the transaction result is returned to an external application after it is finalized on the CCSM layer and reverse-traverses the layers of the BPI stack interacting with the relevant components in each layer as required.

There are existing reference implementations with another implementation currently under active development and examples of implementations of the Baseline Protocol pattern, which can be found [here](https://github.com/eea-oasis/baseline/tree/main/examples) and [here](https://prvd-oasis.org/).

Furthermore, recent developments in the Ethereum Layer 2 scaling solutions community can be leveraged directly as a BPI execution framework such as [zkEVMs](https://github.com/LuozhuZhang/awesome-zkevm) or, as already mentioned,[ Polygon Nightfall](https://polygon.technology/solutions/polygon-nightfall). These efforts demonstrate how new technology innovations and different standards neatly fit with and into the Baseline Protocol standard.

Furthermore, there are current efforts underway for specific use case implementations of ZTMCZK frameworks in multiple industries, such as mobility, telecommunications, financing, and supply chain that will go live in 2023.

The Baseline Protocol community is inviting everyone to join us to advance and popularize the Baseline Protocol and all its implementations as an opportunity to take the right path at the digital businesses’ crossroads that we are rapidly approaching. Learn more at [baseline-protocol.org](https://www.baseline-protocol.org/).


