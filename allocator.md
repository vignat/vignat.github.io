---
layout: default
title: Pool Allocator
---

### Pool Allocator

Here is an informal description of the resource allocator API necessary for the
NAT box in [VNDS](/proj/vnds/) project. It is proposed as a [MS/BS
project](/proj/topics.html#certified-pool-allocator). The allocator manages a
range of numbers \[0,N\] and allocates and frees a single number at a time. This
number will later serve as an index in a static array and will be binded to a
specific new flow.

NAT box expires unused flows. For this purpose it needs to keep track the list
of flows sorted by the access time. Allocator naturally keeps the access time
order.

The allocator API consists of the following functions:

#### `allocate`

Returns a number in the range \[0,N\] that is guaranteed to be free.

If there is no free number, signals failure.

#### `deallocate`

Takes a number `n` in the range \[0,N\] and frees, i.e. makes it available for
the `allocate` function.

If the `n` is free (was deallocated lately, or never allocated), it signals a failure.

#### `rejuvenate`

Takes a number `n` that is already allocated and promotes it to the beginning of
the access time order.

If `n` is free, signals a failure.

#### `get oldest`

Returns the allocated number from the end of the access time order, i.e. that
was allocated or rejuvenated before any other allocated number.

If no number is allocated, it signals a failure.

### Proposed Implementation

Use two lists (free + busy):

* Free-list is single-linked list, and it keeps all the numbers that are available for
 allocation.
* Busy-list is a double-linked list, and it keeps all the allocated numbers in
 the access time order.

`allocate` and `deallocate` functions move an element from one list to another,
`get oldest` returns the Busy-list tail and `rejuvenate` moves the
element from the middle of Busy-list to its head.

This implementation featuring:

* verification simplicity (linked list is a common verification hello-world),
* constant time (de)allocation (so it should be pretty performant), but it might
  mess-up 
* cache locality (if it does not fit entirely into cache; can be tackled
  with hierarchy).