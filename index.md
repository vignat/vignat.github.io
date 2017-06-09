---
layout: default
title: "VigNAT: A Formally Verified Performant NAT"
---

## {{ page.title }}

VigNAT is a first fully verified [NAT][NAT] that does not compromise performance. Subject to common asumptions, we guarantee that VigNAT will never crush irregardless of the network traffic, and will follow the corresponding RFC(3022).

Our aim is to increase the reliability of network functions. We plan to do that with formal software verification. [NAT][NAT] is a classic NAT is a clasic example of stateful network function.



### Overview

#### Context

Last decade is marked by a second coming of virtualization. The birth of cloud
put a great demand on systems to be portable and replaceable. Now entire
networks follow computing nodes and become virtualizable. That is how the SDN
was born. As it advances more and more originally hardware functions move to the
portable and flexible software domain.

However, the software development methods do not keep up with the raising
responsibility. It is traditionally difficult to develop a reliable software
implementation of an originally hardware component.

On the other side, formal verification techniques have grown strong enough to
certify complete and practical systems. Such systems as a [compiler](http://compcert.inria.fr/), an operating
system [kernel](https://sel4.systems/), a distributed key value
[store](https://github.com/Microsoft/Ironclad/tree/master/ironfleet) or a file
[system](http://adam.chlipala.net/papers/FscqSOSP15/).

#### Networking

The low level high speed network functions together are called
[dataplane](https://en.wikipedia.org/wiki/Forwarding_plane). Coming from
hardware circuits historically they feature some design rules that help
verification. The code is usually small and execution path length is limited. It
is modular with a well defined interface - a frame (or a packet).

We follow the previous work\[1\] that succeeded in applying
[symbolic execution](https://en.wikipedia.org/wiki/Symbolic_execution)
method to stateless dataplane modules. Such modules as a packet classifier, a
checker or an Ethernet encapsulation. However, due to symbolic execution
limitations it can not deal with a mutable state. And it is difficult to find a
practical application that would not have it.

#### Method

To handle stateful network functions, we encapsulate the state into a set of
commonly used data structures, such as a hash table, array or LRU allocator. We
implement and certify them using theorem proving engine. To the data structures'
API borderline, we replace them with symbolic-friendly but incomplete models
that make exhaustive symbolic execution of the application possible. Our
customized symbolic execution engine then verifies the application and generates
a corpus of assumptions regarding the data structure contracts admitted in the
process. We use our custom tool to prove the assumptions based on the formal API
contracts.

We developed a dynamic [NAT][NAT] box as a simple stateful application. We are
generalizing the approach starting from similar applications, such as
* an L2 bridge with [dynamic forwarding table][mac-learning] updated by mac
  learning
* a firewall for a [DMZ][DMZ] setup

![Vigor Method](images/vigor-method.svg)

[NAT]: https://en.wikipedia.org/wiki/Network_address_translation
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

