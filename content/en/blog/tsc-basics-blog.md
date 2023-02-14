---
date: 2023-02-14
slug: the-basics-blog
headline: The BASEics
description:  Baseline Architecture Simplified for Everyone (BASEics)
title: The BASEics
categories: ["Technical", "Research", "Outreach", "Enterprise"]
contributors: [Baseline Technical Steering Committee]
---

#### **Baseline Architecture Simplified for Everyone (BASEics)**

The Baseline Protocol is an open-source initiative geared toward developing a pragmatic approach to multiparty zero trust under zero knowledge. Its founders, among them Microsoft, EY, and ConsenSys, understand the significant challenges enterprises face when pushing digital transformation efforts beyond the walls of their enterprise. The protocol itself is governed as an open-source standard and collection of projects that any individual or entity is free to implement, contribute toward, or develop. The solution this protocol presents is a pattern allowing external collaboration in critical enterprise-to-enterprise business processes that require privacy, desire cost reduction, and strive for verifiable synchronization concerning multiple systems of record. Businesses allocate a significant amount of capital toward customer relationship management, CRM, enterprise resource planning ERP, systems of record, and implementations connecting and managing already existing systems. The inability to wholly and reliably synchronize these systems’ data and behaviors between enterprises without exposing sensitive information leads to substantial digital disarray and, therefore, economic waste accepted as the current standard. Recognition of such economic fragility has led to greater demand for enterprises to digitally collaborate in a secure, verifiably correct, and synchronized manner. The Baseline Protocol reimagines how enterprises of all types and sizes can collaborate securely and privately across their boundaries through a shared frame of reference. The Baseline Protocol has begun building those items necessary in seeking to transform the state of enterprise cooperation. 

#### **The Baseline Protocol - Starting Point**

Comprehending what it means to “baseline” some existing process and how the Baseline Protocol can be applied within real-world use cases can be an intimidating task. There exists a variety of definitions one is encouraged to read on the [Baseline Protocol website](https://www.baseline-protocol.org/), its[ documentations](https://docs.baseline-protocol.org/), and [github repositories](https://github.com/eea-oasis/baseline). Due to the standards' intentional flexibility, developers have great freedom in the way they design and build potential novel implementations of the protocol. This flexibility further compounds the steep learning curve many face in attempting to reconcile the abstract ideas of the Baseline Protocol with already existing mental models. A favored starting point to engage with the Baseline Protocol is a word-by-word analysis of two definitions:

_“**A standard** that enables **two or more state machines** to **achieve and maintain data consistency,** and **workflow continuity** by using a **network as a common frame of reference.**”_



* **A standard →** The Baseline Protocol is a standard that defines technical requirements necessary to achieve its overarching goals.
* **Two or more state machines →** A state machine can be viewed as an enterprise system that keeps records and interacts with other enterprises via the Baseline Protocol instance. 
* **Achieve and maintain data consistency →**  Disparate systems of record belonging to different enterprises reach alignment and consistency through cooperation. 
* **Workflow continuity →** Business processes executed by implementations should be without interruption and unable to reach an incorrect state due to atomicity. 
* **Network as a common frame of reference →** The Baseline Protocol is implemented upon a network that has consensus mechanisms; often referred to as a Consensus Controlled State Machine, CCSM.

_“**A set of tools and libraries** that helps enterprises coordinate complex, **multi-party business processes** and **workflows** with **privacy** while **keeping data in respective systems of record.**”_



* **Set of tools and libraries →** Implementing the Baseline Protocol correctly results in a set of coded tools that can facilitate baselining a business process. 
* **Multi-party business processes →** The entirety of steps that two or more enterprises undergo while engaging in the transfer of physical and virtual items and information. 
* **Workflows →** A step-wise partitioning of interactions between enterprises that accomplish one overall finalized goal.
* **Privacy and keeping data in systems of record →** Enterprises implementing the Baseline Protocol can use zero-knowledge cryptography to verifiably prove attributes of data without sharing said data.

The information introduced so far represents a great starting point for forming a rudimentary mental model of the Baseline Protocol in which all ensuing concepts can be built upon. That information can be summarized as follows: The Baseline Protocol is a standard that, if correctly implemented in code, will create and expose a set of tools granting any number of enterprises the ability to coordinate their complex multi-party business engagements and interactions under zero-knowledge in an always-synchronized, privacy-preserving fashion.   

#### **The Baseline Protocol - Key Terms**

Focus will now shift toward supplementing the foundational mental model established with three key terms discerning how enterprises collaborate within the Baseline Protocol. 

**Master Service Agreement, MSA**. The MSA agreed upon by two or more enterprises establishes how coordination will occur and by what rules the information and processes reliant upon both parties’ participation within the baselined system need to adhere. The MSA can be initially thought of as an electronic contract that dictates how enterprises will behave when engaging in business processes via an implementation of the Baseline Protocol. Once the details of the MSA have been accepted by all parties involved, they are translated into code capable of automatically and autonomously enforcing the functional logic within the MSA. For example, the numerous steps and confirmations that are generally taken by enterprise A before enterprise B’s purchase order can be confirmed and accepted. Every Implementation of the Baseline Protocol necessitates an MSA. 

**State Object**. A State Object is an item derived from an agreement and can be exchanged between counterparties to such a specific agreement. It represents either the specific state of a product or service offering or asset to be transacted between counterparties. Transactions between counterparties, or enterprises, progress the state of the object only at the instruction of the coded agreement terms.  For instance, a purchase order initiated from Enterprise A to B will only progress when the coded purchase agreement prerequisites of signature, quantity, price, and date confirmations are met. 

**Baseline Protocol Instance or Implementation, BPI**. BPIs are logical constructs shared between transacting counterparties of requesters and providers and are implemented on a CCSM. BPIs are used to validate and reconcile transactions and the collective state of objects between requesters and providers. Attempting to connect the concept of a BPI to existing mental models can be fraught with difficulties due to the mind's tendency toward mapping logical constructs to their physical counterparts. As an illustration, consider a rocket’s logical construct of propulsion in correlation to those concrete parts of the rocket physically participating in creating propulsion. This is likely not the case for a BPI, as its complete construction of logical capability will exist in multiple, physically unconnected, locations. The best example of this logical-to-physical disconnect within a BPI is the region responsible for simultaneously bridging party-to-party and party-to-CCSM interaction. The shape of this region’s construction is so flexible that an infinite variety of standard-abiding  architectures could be produced. Currently it suffices to think of this region, and the BPI itself, as the aggregate of logic executed by each enterprise participating within the BPI in combination with the chosen CCSM.

#### **Workgroups, Workflows, and Worksteps**

Now that the fundamental Baseline Protocol concepts of MSA, State Object, BPI, and CCSM have been prepared for mental model digestion, focus shall shift to the interactions enterprises will experience within a Baseline Protocol implementation. Business processes that the baseline pattern is applied to will be represented as a **workflow** that describes said process through a series of **worksteps**. Those enterprises whose cooperation is necessitated by a particular **workstep** will join a corresponding **workgroup** for facilitation purposes. **Workgroup** participants will interact according to and be validated by **workstep** rules as the **workflow** progresses. A **workflow** and its **worksteps** represent business processes through their coded logic of the **workgroup’s** MSA’s functional terms. There are no inherent limits to the amount of participants allowed within a workgroup, nor the number of workgroups that can engage in a workflow. On the other hand, a single workstep should only be operated by a single workgroup. This is not to say that each workstep must have a unique one-to-one relationship with a workgroup, as many worksteps may be executed by a single workgroup. Furthermore, generic worksteps for replication within multiple workgroups are desirable to improve efficiency in baselining business processes. 

A better understanding of the Baseline Protocol’s workflows, worksteps, and workgroups, as well as the advantages they provide within a Baseline Protocol implementation are easily discerned by examining Figure 1 below. First, one should envision multiple workgroups having been formed in service of executing a particular workflow and its worksteps, and an initial object representing the state of the workflow. Beginning the depicted flow, workstep 1 receives a proposed change to the state as input from one of its workgroup members. The workgroup’s agreement terms, having been already coded within the workstep, are applied to the input, and any confirmation or successive action required by other members in order to fulfill the workstep’s logic is induced. Once all of the workstep’s conditions are satisfied, a verifiably correct output is generated. This output embodies the newly achieved state of the workflow and includes a zero-knowledge proof of correctness thus granting any party, even third, the ability to verify its correctness. A member from workgroup B can verify the first workstep’s generated proof and become unquestionably confident that the previous workstep was completed correctly and the state was updated accurately.  Upon confirmed verification, the workflow will proceed to the subsequent step. Using the first workstep output as input, workstep 2 will also accept proposed changes from its members, require member action and confirmations according to its unique coded logic, and produce an output constituting a newly reached state.  



<img src="/blog/images/basics-blog/image1.png" >


_Fig. 1.  Conceptual View of Workflow, Workstep and Workgroup_

#### **A Real Life Example Without Baseline - Purchase Order**

Experiencing the application of the Baseline Protocol standard through the lens of a real life situation is the next step in permanently securing the knowledge accrued so far within a mental model. Figure 2 depicts a simplified shared business process use case for a purchase order between two parties: the purchaser and the vendor. Traditionally, a workflow like this is initiated between two ERP systems where users on either end manually input information. Tracing the Figure 2 flow will encounter steps such as Create PO, Create Invoice, and Fulfill Order. One can see how incorrect manual inputs within these steps can cause ensuant and cascading errors. Applying the baseline pattern to a process of this nature ensures proper event ordering, workflow integrity, data consistency, and data privacy regardless of ERP system type implemented by either party in the transaction. In this case, a baseline implementation would synchronize the purchaser and vendor interaction of this process by capturing the agreement between both parties, representing that agreement as an MSA within the code, and leveraging that code in governing the validity of transactions sent and received between both parties via the BPI. Proceeding Figure 3 depicts a baselined version of the flow seen in Figure 2.

<img src="/blog/images/basics-blog/image2.png" >


_Fig. 2.  Conceptual View of a Purchase Order without the baseline pattern_

#### **A Real-Life Baselined Example - Purchase Order**

Managing a purchase order flow between two parties with a baseline implementation utilizes zero trust under zero knowledge in order to maintain event ordering, workflow integrity, data consistency, and data privacy with absolute confidence. Beginning the BPIs process at the top of Figure 3, the buyer creates and sends a purchase order to the BPI. The BPI validates the correctness of this order against the coded agreement logic and responds with a cryptographic zero-knowledge proof of compliance. The buyer then sends the bundled proof and purchase order to the seller. Upon receiving the bundle, the seller can verify the purchase order has been created correctly by validating the proof received against the coded agreement logic within the BPI. During each following step, a similar process will transpire. The seller will submit its purchase order acceptance data to the BPI, and the BPI will generate a cryptographic zero-knowledge proof of contract compliance. The returned proof is bundled with the order acceptance and sent to the buyer. The buyer will receive and validate the proof’s correctness via the BPI. Through multiple phases of this process, subsequent worksteps cannot be initiated without absolute proof of the correctness of all previous steps. Thus, the baseline implementation and its parties’ systems of record cannot reach a state of incorrectness and asynchronicity. In addition, all sensitive information remains hidden within each respective party’s system during this process, and due to the zero-knowledge fashion by which the proofs were created.



<img src="/blog/images/basics-blog/image3.png" >


_Fig. 3.  Conceptual View of the Baseline Protocol applied to a purchase order_

#### **Learn More About The Baseline Protocol**

A properly created explanation of the Baseline Protocol, while capable of being summed succinctly, often depicts an implementation from a single viewpoint. In order to possess a worthy mental model that accurately connects those facets of the Baseline Protocol to existing technical concepts, one must jointly peer through the different dimensions of the protocol presented above. Those who desire a greater understanding of and strive to delve further into the Baseline Protocol can do so by visiting [baseline-protocol.org](https://www.baseline-protocol.org/) to view the standard, see the code, and join the open-source community. The second installment in the BASEics blog series will introduce and review Baseline Protocol architecture, beginning with the most basic visual introduction of an architecture that will accommodate the above flow of Figure 3. 
