---
layout: default
title: "VigNAT Survey Results"
---

# {{ page.title }}

### Summary

In February of the year 2016, we asked multiple members of the networking community by the means of several mailing lists and personal correspondence.
We got 16 responses to a short series of questions.

The first section was about priorities; from five options, respondents had to assign high/medium/low priority, while keeping at least one option on low priority. They also had the option to ask for one feature as free-form text. 
- **Crash freedom** (the software cannot ever crash): 12, 2 and 2 high, medium and low priority respectively.
- **Liveness** (every packet is eventually processed): 7, 6 and 2.
- **Worst-case execution time** (upper bound on number of instructions per packet): 6, 6, 2.
- **Worst-case energy consumption** (upper bound on energy consumed per packet): 0, 6, 10.
- **Correctness w.r.t. a specification** (conformance to a formal specification): 8, 2, 6. (One high- and one low-priority respondent assigned medium priority to free-form "conformance to a feature set"/"prove that the code does what it is supposed to do" properties)
- Free-form suggestions:
  - Number of memory bus accesses / best-case CPU cycles
  - Check for critical resource leaks
  - Worst-case performance (instruction count being only a part of the picture)
  - Responsiveness to malicious use

We then asked them which language they would be willing to use to write line-rate packet-processing software:
- **Pure C99**: 11
- **C99 with some safety restrictions** (e.g. no `void*` casts): 9
- **Pure C++**: 2
- **C++ with some safety restrictions** (e.g. no raw pointers, no implicit type conversion): 5
- **A type-safe memory-safe language** (e.g. Go, Rust, D): 3
- **Managed code** (e.g. Java, C#, Python): 6
- **Any of the above, but with programmer-provided annotations** (e.g. loop invariants, no-null qualifiers): 3 (2 of which also checked "Managed code", 1 of which checked "Pure C99" and "Pure C++")


### Full data

|  # | Crash free | Liveness | Worst time | Worst energy | Spec conf. | Other | Pure C99 | Safe C99 | Pure C++ | Safe C++ | Type/Mem-safe | Managed | Any, annotated | 
|----|------------|----------|------------|--------------|------------|-------|----------|----------|----------|----------|---------------|---------|----------------|
|  1 | Low        | High     | High       | Low          | High       | -     |          |          |          |          |               |         | x              |
|  2 | High       | High     | Medium     | Low          | High       | -     | x        |          |          |          | x             | x       |                |
|  3 | High       | Medium   | Medium     | Low          | High       | -     |          | x        |          |          | x             | x       |                |
|  4 | Medium     | Low      | Medium     | Low          | Low        | High: Number of memory bus access, best case of CPU cycles, see MARS for CPU x86 modeling | x        |          |          |           |                       |              |                       |
|  5 | Low        | High     | High       | Medium       | Low        | Medium: Conformance to a feature set (e.g. IEEE dot1.q 2011 protocols). This may be the same as your earlier question regarding your spec. It was unclear. | x        |          | x        | x        |                       |              |                       |
|  6 | High       | Medium   | Medium     | Medium       | High       | -     | x        | x        |          |          |               |         |                |
|  7 | High       | High     | Medium     | Low          | Low        | Medium: Check for leaks of critical resources such as mbufs. | x        | x        |          |          |                       |              |                       |
|  8 | High       | Low      | High       | Low          | High       | Medium: It would be useful to prove that the code does what is supposed to do (performs the intended packet transformation), but I guess this falls in the "correctness wrt a spec" category. | x        | x        | x        | x        |                       |              |                       |
|  9 | High       | High     | Medium     | Medium       | Medium     | -     |          |          |          |          |               | x       | x              |
| 10 | High       | High     | High       | Low          | Low        | -     | x        | x        |          |          |               |         |                |
| 11 | High       | Medium   | Medium     | Medium       | High       | -     |          | x        |          |          | x             |         |                |
| 12 | High       | Medium   | High       | Low          | Low        | Medium: Not necessarily a new property, but I would like to have it extended to report on worst case performance, not necessarily as measured by the number of instructions. On a modern OOO core, the number of instructions is only a part of the picture considering stalls and other threads (hw or sw). | x         |          |          |          |                       | x            |                       |
| 13 | Medium     | High     | Medium     | Medium       | Low        | -     | x        | x        |          | x        |               | x       |                |
| 14 | High       | Low      | Low        | Low          | High       | -     | x        |          | x        |          |               | x       |                |
| 15 | High       | Medium   | High       | Low          | Medium     | -     |          | x        |          |          |               |         |                |
| 16 | High       | Medium   | Low        | Medium       | High       | High: Responsiveness to malicious use. | x        | x        |          | x        |                       |              |                       |
