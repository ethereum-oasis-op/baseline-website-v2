---
date: 2023-06-20
slug: proving-secrets
headline: Proving Secrets Without Exposing Them
description:  In an era where our digital footprints are meticulously tracked and our data is collected and monetized, ensuring the confidentiality of our personal information has become paramount.
title: Proving Secrets Without Exposing Them
categories: ["Technical", "Research", "Outreach", "Enterprise"]
contributors: [Baseline Technical Steering Committee]
---

# Proving Secrets Without Exposing Them


# Privacy is Compromised

We all know that we live in a world where privacy is a hot topic. More often than not we hear about data breaches, online tracking, and companies collecting user data, and using and selling it, both on the news and also anecdotal cases from friends. As a matter of fact, after ordering some McDonald’s the other day, there was an influx of fitness instructors sending me friend requests on Instagram and kale smoothies in my feed. Coincidence? I think not. 

In an era where our digital footprints are meticulously tracked and our data is collected and monetized, ensuring the confidentiality of our personal information has become paramount. You could be enjoying a delicious cheeseburger you ordered one moment, and then being suggested yoga poses while scrolling through your social media the next. Something has to put an end to that. Something also has to put an end to these cheesy jokes as well, so let’s talk about some solutions to privacy problems that cryptography has to offer.



# Zero Knowledge Proofs

In one of the best transitions in the history of blog writing, let’s briefly touch on zero knowledge proofs. They offer an ingenious approach to demonstrate the truth of a statement or claim without revealing any additional information. First, let’s revisit **[the three important characteristics of a valid zero knowledge proof](https://en.wikipedia.org/wiki/Zero-knowledge_proof)**:



* **Completeness**: if the statement is true, an honest verifier, i.e., an entity following the protocol properly, will be convinced of this fact by an honest prover.
* **Soundness**: if the statement is false, no cheating prover can convince an honest verifier that it is true, except with some small probability.
* **Zero-Knowledge**: if the statement is true, no verifier learns anything other than the fact that the statement is true. In other words, just knowing the statement (not the secret) is sufficient to construct a scenario that shows that the prover knows the secret. This is formalized by showing that every verifier has some “simulator” that, given only the statement to be proved (and no access to the prover), can produce a transcript that "looks like" an interaction between the honest prover and the verifier.

This has many applications, and many yet to be discovered. In the financial sector, for instance, zero-knowledge proofs can enable secure and privacy-preserving transactions. Imagine a scenario where two parties want to verify the validity of their financial accounts without exposing their account balances or transaction history. Zero-knowledge proofs can provide a solution by allowing each party to prove the consistency of their account information without revealing any sensitive details.

In the realm of voting systems, zero-knowledge proofs hold the potential to significantly advance the way elections are conducted. By leveraging these proofs, voters can prove the validity of their votes without compromising the anonymity of the ballot. In an age of mistrust of institutions, this can enhance the integrity of elections, prevent voter coercion, and increase public trust in the electoral process.

Since we deeply care about health in this blog, let’s stay in that field. Let’s say a couple of medical research companies want to prove the accuracy and ownership of medical data or results of research while keeping their patient’s information confidential. This is possible using zero knowledge proofs. But what if they want to join their research efforts to share and combine their research data, but still maintain patients’ privacy?


# Multi Party Computation

Secure multiparty computation (MPC) tackles the challenge of collaboratively computing a function among multiple parties who do not trust each other. In this scenario, a group of parties aims to perform a computation on their individual private inputs while maintaining the privacy of their inputs from one another. The basic characteristics of MPC protocols are:



* **Input privacy**: The information derived from the execution of the protocol should not allow any inference of the private data held by the parties, except for what is revealed by the prescribed output of the function.

* **Correctness**: Adversarially colluding parties willing to share information or deviate from the instructions during the protocol execution should not be able to force honest parties to output an incorrect result. 


A primer on MPC can be found [here](https://www.unboundtech.com/wp-content/uploads/2020/09/Unbound_Tech_A_Primer_in_Secure_Multiparty_Computation_MPC.pdf).

Salary is always a fun topic between coworkers, especially in a bar after work. Using this approach employees could calculate the average of their salaries without revealing their own salary. Simply put, they could split their salary into pieces that sum into a salary amount, keep only one piece and share the rest with the group. This way, pieces on their own would not reveal anything, but they could still sum up all of them and come up with the average. And we naively thought nothing could add to the quality of company happy hours?

Consider a scenario where two companies want to jointly analyze their customer data to gain insights and improve their services. Using secure multiparty computation, they can perform computations on their combined datasets without revealing any sensitive customer information. This allows for collaborative analysis while preserving the privacy of individual customer data. 

Let’s go back to the medical research companies example. Modern research becomes more and more data-driven, but also relies on the re-use and sharing of data. On the other hand, we have all these privacy concerns we touched upon already, so it is important to have a way to perform these types of distributed calculations with provable security and guarantee of privacy. Using secure multi-party computations, research teams could combine their research and data, come up with joint results, and speed up the research process, but still keep patients’ data private.


# Advancements and Challenges

The field of cryptography is continuously advancing, and researchers are actively working on improving the efficiency and scalability of zero-knowledge proofs and secure multiparty computation. New cryptographic protocols, such as efficient zero-knowledge proofs based on zk-SNARKs (zero-knowledge succinct non-interactive arguments of knowledge), are being developed to overcome the computational overhead associated with traditional proofs.

However, challenges remain. One such challenge is the complexity of implementing these techniques in real-world scenarios. The practical deployment of zero-knowledge proofs and secure multiparty computation requires careful consideration of usability, integration with existing systems, and compatibility with different platforms. Researchers are working on developing user-friendly frameworks and tools that simplify the adoption of these privacy-preserving methods, and working to prove that they are secure.


# Future Implications

Looking ahead, zero-knowledge proofs and secure multiparty computation have profound implications for privacy and data protection. As data collection and analysis become increasingly prevalent in various domains, the demand for techniques that safeguard personal information while enabling collaboration and innovation will only grow. This has been grouped into the expression of zero-knowledge Machine Learning, or zkML for short.

These cryptographic methods can potentially influence privacy regulations and shape the legal and ethical frameworks surrounding data handling. Policymakers, organizations, and individuals must consider the trade-offs between privacy, transparency, and security to strike the right balance in a rapidly evolving digital landscape.

By embracing and advancing these privacy-preserving techniques, we can pave the way for a future where individuals have greater control over their personal data, organizations can collaborate securely, and society benefits from the insights derived from data analysis, all while respecting privacy and confidentiality.


# Conclusion

In this blog post, we gave a light introduction to the complex and cutting-edge cryptography techniques that are trying to help solve various privacy problems that exist in the current day and age. Did we also help junk food companies save their customers, and the author of this blog to never get the motivation to hit the gym during infinite social media scrolling? Maybe. \
 \
Note: ChatGPT didn’t help that much during the writing of this blog, but approved of all the jokes written here. It will never replace us

**About the Author**

Stefan Kostic is a seasoned technical leader and maintainer in the open-source Baseline Protocol community with extensive experience in blockchain and web development. With a deep understanding of cryptography and its applications, Stefan is passionate about leveraging privacy-preserving technologies to empower individuals and organizations in the digital age. Connect with Stefan on [LinkedIn](https://www.linkedin.com/in/stefan-kostic-b07147b8/) to stay updated on his latest contributions and insights.
