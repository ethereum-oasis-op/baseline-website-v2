---
date: 2023-08-02
slug: global-supply-chain-ccsm
headline: 'Global Supply Chain Coordination via Baseline Protocol'
description: A global supply chain includes many participants, who use various systems of records that are disconnected and heterogeneous. Coordination of participants is done mainly by exchanging data via emails and files
title: 'Global Supply Chain Coordination via Baseline Protocol & The Consensus Controlled State Machine'
categories: ["Technical", "Outreach", "Core Dev"]
contributors: [Baseline Technical Steering Committee]
---


_Coming to my senses._ 


# Intro

A global supply chain includes many participants, who use various systems of records that are disconnected and heterogeneous. Coordination of participants is done mainly by exchanging data via emails and files. Even more sophisticated EDI integrations are usually federated and lack global consistency. In such a setup, there is a good chance that changes applied in one system won’t be reflected properly in other involved systems. For instance, updating Master Data in supplier systems won’t be communicated with customers or if manually entered, might introduce errors. This will result in future disputes or manual processes to validate business partners’ data which both are costly and introduce extra frictions and delays.

 
# Consensus Controlled State Machine


With the Baseline Protocol [Baseline], we are set to improve this issue in a decentralized way. One key component of Baseline in this coordination process is a Consensus Controlled State Machine [CCSM<sup>[1]</sup>]. Using a CCSM, Baseline ensures all participants are following the same order of applying changes to keep all the systems in sync by anchoring those changes on a CCSM – a.k.a. notarizing or submitting the proof of correct execution. In case of conflicting system changes, involved systems can synchronize _collaboratively_ and verify the order of correct changes with _reference_ to their agreed upon CCSM.


The immediate questions are, how to realize a CCSM and when to anchor changes? To answer these questions, we initiated a research working group<sup>[2]</sup> in the Baseline community. The group started with depicting a simplified yet comprehensive enough end-to-end process from ordering to delivery, with focus on cross company communications. (Figure – 1)

<img src="/blog/images/global-supply/fig1.png" alt="alt text" >


_Figure – 1 – Simplified example of end-to-end supply chain data exchange_

 
We started by asking the question of “Why should a participant anchor a message?” And if we agreed on an answer, the following question was “When it should be anchored?”

 

We need to emphasize that **interoperability** of different Baseline implementations depends on these answers. If two different implementations decide for different times of anchoring, they are not interoperable.

 

A Verifiable Timestamp is the only reason we’ve identified for anchoring. Meaning, relevant documents or transactions must carry enough proof that other involved participants could _independently_ verify ‘when’ it was generated or finalized. Our initial thought was that this is _the issue_ could be solved by using a permissionless and censorship-resistant blockchain network – in short, a permissionless network.

 

[Simplified] Baselining happens as follow:


1. 	All participants need to have a Baseline instance or use a Baseline Instance
2. 	All Baseline instances are known (identity) and are connected (reachable)
3. 	A participant who propagates a change, will provide relevant informationdigitally signed, to other relevant participants and gather their digital signatureas their approvals
4. 	Others receive the changes, validate and if successful, apply the change localland return a digital signature as their confirmation
5. 	Requester will anchor a proof of all confirmations (like Merkle root) in a CCS(blockchain) as a proof of verifiable timestamp for that change.

 

Figure – 2 demonstrates a fully functional Baseline deployment using a permissionless network as its CCSM.




<img src="/blog/images/global-supply/fig2.png" alt="alt text" >


_Figure – 2 – Baselining two systems using a permissionless network as CCSM._

 

There are two important assumptions. The first one is the assumption of connected identity providers. It means both stacks can discover/find each other and establish an authenticated communication channel where the identities of connected stacks are known to each other.

 

The second point is that all the data and logic required to validate, approve, and apply a change (state transition) are available in the Baseline Stack, not the CCSM. CCSM is used for agreeing on the order of changes and verifiable timestamp. Furthermore, any change anchored on a CCSM is assumed to have a set of digital signatures from involved parties as a sign of approval and commitment to apply the state transition in their local systems.

 

Looking at 5 steps of Baselining, we can merge step 5 with 3 and 4 and get rid of blockchain anchoring. As we said, the application of CCSM is ordering and verifiable timestamp.

 

Ordering can be done using a UTXO<sup>[3]</sup> data structure to chain the changes (step 3) and keep digital signatures as the approval and local state transition (step 4), without any CCSM anchoring. Verifiable timestamp also could be addressed by asking all stakeholders to provide their timestamp when approving a change (step 4). If I provide a timestamp, that’s verifiable at least for myself. Again, without any CCSM involved. Please note that we didn’t introduce any new software or hardware components. We just removed anchoring on a permissionless network and added a UTXO data structure and every participant’s timestamp while preserving the same properties.

 

**_The combination of ordering changes (a UTXO data structure or similar approaches), and agreeing on a timestamp for changes, (e.g., adding own tamper proof timestamp while confirming a change proposal by all relevant participants) realizes a trustless CCSM component for enterprise Baseline implementation, without anchoring on a permissionless or other types of blockchains._**

In a global supply chain, these participants include not only involved businesses (suppliers, buyers, shipping, etc.) but also authorities like customs authorities, chamber of commerce, etc. Therefore, participants requiring a verifiable (trustless) timestamp may provide their _own timestamp_ on changes/transactions in their interest. For instance, if importing customs authorities can’t trust other involved entities, relevant business documents (invoices, certificate of origin, transportation documents, etc.), can be sent to them as soon as possible to receive an _additional_ timestamp _from and for_ importing customs authorities based on an independently and cryptographically verifiable, and tamper-resistant timestamp source. This is a reasonable expectation since we’ve already assumed that customs authorities also have a Baseline instance available and they understand the concept of timestamp issuance and verification.

 

But back to our story. So what happened? Well, in contrast to Web3, real world companies will not engage in a business transaction before establishing some degree of trust! And trust starts with identity. Permissionless networks are trustless in nature and don’t have any identity assumptions. Therefore, they need maximum participation to secure the network via increasing the number of honest yet unknown players. However, if we already have an identity solution in place, we can find relevant Baseline stacks and communicate with them directly, inform them about our changes and get their approvals, who are usually just a handful of participants in a single supply chain. Also, all transactions are carrying digital signatures tied to participating _known_ identities. There is no incentive to cheat, where everyone is watching you.

 

What if one key participant is offline? Well, the same question applies for real world business transactions and also Baseline. We assume those participants are incentivized to collaborate and they have contractual obligations. Thus, they will come back online and in critical cases they will also provide redundancy. We don’t need hundreds of thousands of nodes in a permissionless network to fix availability issues that are already fixed for decades by having a few backup instances. And if those participants don’t want to collaborate, it doesn’t matter how many transactions are recorded on how many networks, they just won’t collaborate.

 

What if one goes out of sync? The same way a Baseline stack works. Identify who is out of sync and collaboratively provide the missing changes so the out-of-sync stack can verify and get to the same state as others.

 

So, we don’t need a permissionless network? Yes, we do. But not for the CCSM and anchoring. But for a more important component, that is identity. Baseline deployments will be very expensive to maintain if they are not reusable. A key step is to have a reusable identity. We need portable identities that could be used across all Baseline implementations. That’s where the SSI<sup>[4]</sup> concept comes in place and the importance of a Verifiable Data Registry<sup>[5]</sup> that could onboard every company globally. A censorship-resistant solution as the neutral ground for competing vendors. ION<sup>[6]</sup> is an example of an identifier registry using Bitcoin network as the neutral coordinator.



<img src="/blog/images/global-supply/fig3.png" alt="alt text" >


_Figure – 3 – Baselining two systems, starting with an identity solution in mind._

 

The point is that our Baseline journey started with our enthusiasm about blockchain technology, and it was obvious that we wanted to have a big BLOCKCHAIN in the middle of our conclusion. But our continuous debates gave us a second view. A view that could start from an identity solution first. The beauty of this new understanding is that we don’t need to anchor any state change on any blockchain except SSI/identity related transactions. By removing the blockchain bottleneck, Baseline scalability will be unlimited as all transactions are managed in a peer-to-peer fashion, off-chain and only among the involved parties instead of waiting for 100.000s of nodes in a permissionless setup to process and store hashes that don’t mean anything to them! Interestingly, we are not alone. WEB5<sup>[7]</sup> shares the same approach, starting with a foundation of decentralized identity and building a decentralized network on top.


# Summary

Supply chains require more automated synchronization of systems to tackle today's global issues in a coordinated way. The Baseline Protocol is an attempt to improve this inter-company alignment without relying on a trusted 3<sup>rd</sup> party. To make Baselining scalable and affordable, we require a portable identity that could be reused across vendors, industries, and use cases. This portable identity could use a permissionless (blockchain) network for coordination, but Baseline instances won’t need further interactions with any blockchain for anchoring or notarization.

 


# About the Author

Mehran Shakeri is a team lead at SAP’s Innovation Center and focused on applications of decentralized technologies in enterprise for the last 6 years. His favorite theme is global supply chain collaboration. You can find learn more about Mehran or get in touch through [LinkedIn](https://www.linkedin.com/in/mehran-shakeri-8833b347/).


---

<sup>[1]</sup> [https://github.com/eea-oasis/baseline-standard/blob/main/core/baseline-core-v1.0-psd01.md#25-consensus-controlled-state-machine](https://github.com/eea-oasis/baseline-standard/blob/main/core/baseline-core-v1.0-psd01.md#25-consensus-controlled-state-machine)

<sup>[2]</sup> [https://drive.google.com/drive/folders/1pClnoWEVVWGmF2Yc9b04AOIQHPG0Er7R](https://drive.google.com/drive/folders/1pClnoWEVVWGmF2Yc9b04AOIQHPG0Er7R)

<sup>[3]</sup> [https://en.wikipedia.org/wiki/Unspent_transaction_output](https://en.wikipedia.org/wiki/Unspent_transaction_output)

<sup>[4]</sup> [https://en.wikipedia.org/wiki/Self-sovereign_identity](https://en.wikipedia.org/wiki/Self-sovereign_identity)

<sup>[5]</sup> [https://www.w3.org/TR/did-core/#dfn-verifiable-data-registry](https://www.w3.org/TR/did-core/#dfn-verifiable-data-registry)

<sup>[6]</sup> [https://identity.foundation/ion/](https://identity.foundation/ion/)

<sup>[7]</sup> [https://developer.tbd.website/projects/web5/](https://developer.tbd.website/projects/web5/)
