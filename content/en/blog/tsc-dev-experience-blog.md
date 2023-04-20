---
date: 2023-04-20
slug: the-core-dev-experience
headline: 'Baseline: The Developer Experience'
description: What It's Like Becoming a Baseline Core Dev
title: 'Baseline: The Developer Experience'
categories: ["Technical", "Outreach", "Core Dev"]
contributors: [Baseline Technical Steering Committee]
---


# Becoming a Baseline Core Dev

The Baseline Protocol is an open-source initiative that uses blockchain technology to help multiple enterprises collaborate securely and privately, also called Multi-Party Zero Trust under Zero-Knowledge (MZTZK) A blog that covers the basic architecture can be found [here](https://www.baseline-protocol.org/blog/the-baseics/). As more organizations adopt the Baseline Protocol Standard and its implementations, the need for skilled developers to help maintain and improve the Baseline Protocol becomes increasingly important. In this blog, we'll explore what it's like to become a maintainer (Core Dev) for the Baseline Protocol.


# Community

A strong community is the backbone of any open-source initiative. Without community members lending their knowledge and experience, there will be no progress. It’s imperative to have people involved in all the different aspects of an open-source initiative – from community outreach to thought leadership to standards development to maintaining reference implementations and example applications necessary to make progress. These members must be motivated and willing to dedicate their time, and Baseline is no exception to this, especially on the technical side. 

The Baseline Protocol is primarily, a standard, a set of rules defined that acts as a framework for a Baseline Protocol Implementation (BPI). Although the standard itself is written in plain English, the codebase of reference implementations surrounding it is a driving force in enabling other developers to implement the standard on their own. Resources, such as reference implementations and materials, example code, and smaller baseline-enabled applications, are all things offered in the baseline codebase to enable others to harness the power of the protocol. None of these resources can exist without the Core Devs and the community backing them. 


# Being a Core Dev

Core Devs are an integral part of the baseline community, but what does it mean to be a Core Dev? A core developer (“Core Dev”) is someone who has contributed code to the Baseline Protocol and has been granted commit access to the code repository. Core developers can make changes to the codebase, submit pull requests, and join working groups to participate in the decision-making of open issues and grants being worked on. Below are ways to get started on the journey of becoming a Core Cev. 



1. **Familiarize yourself with the Baseline Protocol.** Read the documentation, participate in discussions in the community slack, attend or watch the weekly Baseline Show, join in on the biweekly Core Dev call, and attend meetings and workgroup sessions to learn more about the protocol and its goals.
2. **Start contributing to the project.** You can contribute to the Baseline Protocol in many ways, such as submitting bug reports, creating issues and Baseline Improvement Proposals (BLIPs), writing new, and updating existing documentation, and writing code. Code can be contributed to open issues, open BLIPs, and even newly created grant requests if you have your mind set on something in particular that is not already pending, or you have an idea for something entirely new you think is useful for Baseline. 
3. **Be proactive**. Becoming a Core Dev and contributing is a process that takes time and effort. Focus on making contributions, building relationships within the community, and learning as much as you can about the protocol and the standard itself. 

Once you become a Core Cev, you will have the opportunity to help shape the direction of the project and contribute to the development of enterprise-grade solutions solving real-world problems. This can be a rewarding and challenging experience, but it's also an opportunity to work with other talented developers and make a real impact on the industry.


# Why Become a Core Dev?

Becoming a Core Dev can provide a number of benefits – you will work closely with the Baseline Protocol codebases, which will give you a deep understanding of how blockchain and zero-knowledge technology works and how it can be applied to enterprise use cases. You will have access to a community of talented developers who are passionate about blockchain technology and its potential to revolutionize industries.

Due to the nature of open-source projects, everything you contribute will be publicly available. This can benefit you greatly in the context of career advancement opportunities and resume building. As the use of blockchain and zero-knowledge technology becomes more widespread, the demand for skilled developers is expected to grow. Becoming a Core Dev can help you build a strong reputation as an expert in the fields of enterprise applications, zero-knowledge, and blockchain, which in turn can open up new career opportunities and increase your earning potential.

You will have the ability to shape the future of the protocol –contribute to the development of new features for and improvements of Baseline Protocol Implementations and the Standard. This can be a highly rewarding experience, as you will be able to see the impact of your work on baseline and its users. You will also be contributing to a project that has the potential to transform industries and create new opportunities for businesses and individuals around the world. This can be a motivating and fulfilling experience, as you will be able to see the impact of your work on a global scale.


# AmsterBased BLIP Bounty Hunt

AmsterBased was an event hosted by the baseline community in Amsterdam in 2022, as part of the larger EF-hosted DevConnect event. It was incredibly special for several reasons: It was the first of its kind, in which the entire uninterrupted focus of the event was on the Baseline Protocol. Even the sponsors who were given a speaking slot were adjacent to baseline, and spoke on how their technology relates to the protocol (talks and full livestream available [here](https://www.youtube.com/watch?v=RhkphR2Fkm8&list=PLxmhMSa49Q1DE_WbKpMFpcoWm5kB-KuYL)). 

Alongside the in-person event, we also hosted a six-week-long online hackathon-style BLIP Bounty. Leading up to the start of this event, members of the community submitted ideas for short BLIPs (Baseline Improvement Proposals) that participants would be able to ideate on and create a small application within the six-week timeframe. The sole purpose of the BLIP Bounty Hunt was to enable new developers and create opportunities to enter the ecosystem without too steep of an on-ramp. 


## First Hand Experience

One of the suggested BLIPs was to create a ‘calendly’ style application where Bob can book a meeting with Alice at a date and time in which both of them are available, without allowing Bob to see when exactly Alice is busy. This BLIP was picked up by Vaibhav Maheshwari, who before the AmsterBased event, had no exposure to baseline. When asked about his experience, he had the following to say: 

“Working at Baseline Protocol was a lot of fun, this was largely because of how transparent and public the organization's work is. You can look up meetings and decisions on their youtube. This allows not only for understanding the decision but also the thought processes behind those decisions.

I was looking for EthAmsterdam events when I heard about Baseline Protocols BLIPS. Zero-knowledge was just starting to buzz up a little bit and I wanted to learn more about it. I fancied one of the BLIPS - specifically Baseline Calendar and sent out a detailed proposal to the team to allow me to work on it. It took a tedious bit of time to make sure the circuits were debugged and Yoav, Andreas, and Stefan patiently answered all my questions concerning the technology and circuits. This handholding was very critical as I was new to Zero Knowledge and stared at the mammoth of the code in front of me. The team was more focused on progress and approach as compared to results which allowed me to deliver much better results. I have to thank Sonal for such a smooth communication process and for answering all my doubts.

Working at Baseline was fun and I would recommend it to students who want to start their Zero-Knowledge development journey as the team is very helpful and patient. I hope it encourages and inducts many more developers to work on this exciting new technology.”


# Core Dev Contributions

Interested in seeing what has been, or is being cooked up by the core dev community? There are several completed and in-progress projects within the repo available to be used as a resource for future developers, here are just a few examples, though many more can be found in the repository. 


* **Battleship**: The Baseline Battleship example is a powerful demonstration of the capabilities of the Baseline Protocol. This Baseline Battleship example demonstrates the protocol’s ability to protect sensitive data while maintaining interoperability across different systems. This example can be found [here](https://github.com/eea-oasis/baseline/tree/main/examples/battleship).
* **Baseline Protocol Monolith Test Suite (BLIP6):** BLIP-6 is a comprehensive suite of tests designed to ensure that incoming Core Devs had an initial starting point to help reduce the learning curve of development for the Baseline Protocol. The test suite covers a wide range of implementations, including identity management, message handling, and cryptographic operations. This test suite can be found [here](https://github.com/eea-oasis/baseline/tree/main/examples/bpi-monolith-test-suite).
* **Simple Reference Implementation:** The Baseline Reference Implementation 3 (BRI-3), also known as Simple Reference Implementation (SRI), is an open-source reference implementation of the Baseline Protocol. Although still in progress, it is designed to be the first simple, yet comprehensive, starting point for developers looking to build their own Baseline Protocol implementations, allowing them to quickly get up and running with the Baseline Protocol and providing a solid foundation for more advanced implementations. The SRI can be found [here](https://github.com/eea-oasis/baseline/tree/main/examples/bri-3).

# Never a Better Time

Now is an excellent time to become a Baseline Protocol core developer and join the community. The upcoming Interop Fest and Baseline Roadshow present exciting opportunities to learn about and contribute to the Baseline Protocol's development.

**The Interop Fest**, at the end of 2023, will showcase the interoperability between two different Baseline Protocol reference implementations, highlighting the benefits of using the protocol to seamlessly, securely, and privately facilitate automated business processes between multiple enterprises in a fully trustless manner. It will feature live demonstrations of the protocol in action, providing a glimpse into the real-world applications of the technology.

**The Baseline Roadshow**, a series of virtual and IRL events, will bring together developers, industry experts, and business executives to showcase the latest developments and real-world opportunities of the technology. It will provide opportunities for networking and collaboration, as well as hands-on workshops and training sessions.

By joining the Baseline Protocol community and becoming a core developer, you can contribute to the development of a technology that has the potential to revolutionize how businesses interact with each other. You can help shape the protocol’s future by contributing code, participating in discussions and events, and sharing your knowledge and expertise with the community.

In addition to the upcoming Interop Fest and Baseline Roadshow, there are many other reasons to become a Baseline Protocol core developer, including the opportunity to work with cutting-edge technology, gain valuable experience in a rapidly evolving field, and be part of a supportive and collaborative community of like-minded individuals. 

If you're interested in blockchain, distributed systems, or enterprise software development, now is the perfect time to get involved and start building with the Baseline Protocol. Sign up [here](https://www.baseline-protocol.org/get-involved/) or join our Slack Channel [here](https://join.slack.com/t/ethereum-baseline/shared_invite/zt-1tcu9q5r6-K6BysxIExVxYl875G2B_uQ) to get involved!



--

Author: Yoav Bittan - TSC Member, Standards Maintainer / Editor, Baseline Maintainer, Core Dev
