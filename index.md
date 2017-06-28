---
layout: default
title: "VigNAT: A Formally Verified Performant NAT"
---

# {{ page.title }}

VigNAT is a first fully verified [NAT][NAT] that does not compromise performance.
Subject to common asumptions, we guarantee that VigNAT will never crush irregardless of the network traffic, and will follow the corresponding RFC(3022).

Our aim is to increase the reliability of network functions.
We plan to do that with formal software verification.
[NAT][NAT] is a canonical stateful network function.
We managed to formally mechanically verify it.


### Overview

We present a Network Address Translator (NAT) written in C and proven to be
semantically correct according to RFC 3022, as well as crash-free and
memory-safe. There exists a lot of recent work on network verification, but it
mostly assumes models of network functions and proves properties specific to
network configuration, such as reachability and absence of loops.  Our proof
applies directly to the C code of a network function, and it demonstrates the
absence of implementation bugs. Prior work argued that this is not feasible
(i.e., that verifying a real, stateful network function written in C does not
scale) but we demonstrate otherwise: NAT is one of the most popular network
functions and maintains per-flow state that needs to be properly updated and expired, 
which is a typical source of verification challenges.
We tackle the
scalability challenge with a new combination of symbolic execution and proof
checking using separation logic; this combination matches well the typical
structure of a network function.  We then demonstrate that formally proven
correctness in this case does not come at the cost of performance.

#### Software Network Functions
{::options parse_block_html="true" /}

Software <abbr title="Network Function">NF</abbr>s have always been popular in low-rate environments, such as home gateways or wireless access points.
More recently, they have also appeared in experimental [IP routers](http://routebricks.org/) and [industrial middleboxes][brocade] that support multi-Gbps line rates.
Moreover, we are witnessing a push for virtual network functions that can be deployed on general-purpose platforms on demand, much like virtual machines are being deployed in clouds.

#### Reliability Perspective

However, the software development methods do not keep up with the raising responsibility.
It is traditionally difficult to develop a reliable software implementation of an originally hardware component.

On the other side, formal verification techniques have grown strong enough to certify complete and practical systems.
Such systems as a [compiler](http://compcert.inria.fr/), an operating
system [kernel](https://sel4.systems/), a distributed key value
[store](https://github.com/Microsoft/Ironclad/tree/master/ironfleet) or a file
[system](http://adam.chlipala.net/papers/FscqSOSP15/).

#### Method

The rationale behind our approach is that different verification techniques are best suited for different types of code.
The beauty of [symbolic execution](https://klee.github.io/) lies in its ease of use: it enables automatic code analysis, hence can be used by developers without verification expertise.
The challenge with symbolic execution is its notorious lack of scalability: applying it to real C code typically leads to path explosion [1,2].
The part of real NF code that typically leads to unmanageable path explosion is the one that manipulates state.
Hence, we split NF code into two parts:

* A library of data structures that keep all the “difficult” state, which we then formally prove to be correct—this takes time and formal methods expertise, but can be amortized if the library is re-used across multiple NFs.
* Stateless code that uses the library, which we automatically and quickly verify using symbolic execution.

The challenge lies in combining the results of these two verification techniques, and for that we developed a technique we call “lazy proofs”.
A lazy proof consists of sub-proofs structured in a way that top-level proofs proceed assuming lower level properties, and the latter are proven lazily a posteriori.
For example, symbolic execution requires the use of models that must be correct; we first do the symbolic execution and only afterward validate automatically the correctness of the models.
This approach enables us to avoid having to prove that our models are universally valid—which is hard—but instead only prove that they are valid for the specific NF and the specific properties we verified earlier with symbolic execution.
This is much easier.

![Vigor Method](images/vigor-method.svg)

[NAT]: https://en.wikipedia.org/wiki/Network_address_translation
[brocade]: http://www.brocade.com/en/products-services/software-networking/network-functions-virtualization/vyatta-network-os.html
[mac-learning]: https://en.wikipedia.org/wiki/Forwarding_information_base
[DMZ]: https://en.wikipedia.org/wiki/DMZ_(computing)

### Results

### Contact

[Arseniy Zaostrovnykh](mailto:arseniy.zaostrovnykh@epfl.ch),
[Luis Pedrosa](mailto:luis.pedrosa@epfl.ch),
[Solal Pirelli](mailto:solal.pirelli@epfl.ch),
[Katerina Argyraki](mailto:katerina.argyraki@epfl.ch),
[George Candea](mailto:george.candea@epfl.ch).

### References

**\[1\]** Dobrescu, Mihai, and Katerina Argyraki. "Software dataplane verification." Proceedings of the 11th Symposium on Networked Systems Design and Implementation (NSDI), Seattle, WA. 2014.
**\[2\]** Stoenescu, R., Popovici, M., Negreanu, L., and Raiciu, C. "SymNet: scalable symbolic execution for modern networks." In ACM SIGCOMM Conf. 2016.

