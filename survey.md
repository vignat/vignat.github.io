---
layout: default
title: "VigNAT Survey Results"
---

## {{ page.title }}

### Summary

We asked 16 members of the networking community (e.g. researchers, DPDK developers) a short series of questions.

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

### Full data


|  # | Crash-freedom | Liveness | Worst-case time | Worst-case energy | Correctness w.r.t. spec | Other | 
|  1 | Low           | High     | High            | Low               | High                    | -     |
|  2 | High          | High     | Medium          | Low               | High                    | -     |
|  3 | High          | Medium   | Medium          | Low               | High                    | -     |
|  4 | Medium        | Low      | Medium          | Low               | Low                     | High: Number of memory bus access, best case of CPU cycles, see MARS for CPU x86 modeling |
|  5 | Low           | High     | High            | Medium            | Low                     | Medium: Conformance to a feature set (e.g. IEEE dot1.q 2011 protocols). This may be the same as your earlier question regarding your spec. It was unclear. |
|  6 | High          | Medium   | Medium          | Medium            | High                    | -     |
|  7 | High          | High     | Medium          | Low               | Low                     | Medium: Check for leaks of critical resources such as mbufs. |
|  8 | High          | Low      | High            | Low               | High                    | Medium: It would be useful to prove that the code does what is supposed to do (performs the intended packet transformation), but I guess this falls in the "correctness wrt a spec" category. |
|  9 | High          | High     | Medium          | Medium            | Medium                  | -     |
| 10 | High          | High     | High            | Low               | Low                     | -     |
| 11 | High          | Medium   | Medium          | Medium            | High                    | -     |
| 12 | High          | Medium   | High            | Low               | Low                     | Medium: Not necessarily a new property, but I would like to have it extended to report on worst case performance, not necessarily as measured by the number of instructions. On a modern OOO core, the number of instructions is only a part of the picture considering stalls and other threads (hw or sw). |
| 13 | Medium        | High     | Medium          | Medium            | Low                     | -     |
| 14 | High          | Low      | Low             | Low               | High                    | -     |
| 15 | High          | Medium   | High            | Low               | Medium                  | -     |
| 16 | High          | Medium   | Low             | Medium            | High                    | High: Responsiveness to malicious use. |
