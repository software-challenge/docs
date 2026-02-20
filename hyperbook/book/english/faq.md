---
name: F.A.Q.
index: 3
---

# Frequently Asked Questions (F.A.Q.)

Here we collect some frequently asked questions
that reach us.
We always try to keep them up to date
and detailed.

If you still can't find what you're looking for,
feel free to ask us on our [Discord](https://discord.gg/jhyF7EU),
or send us an [email](mailto:tech@software-challenge.de).

## Technical

### My player exceeds the two-second limit, what can I do?

A fundamental rule in the Software-Challenge is
that each player has a maximum of two seconds
to send a response to the game server.

The time is measured from receipt of the game server's message
to the arrival of the player's response.

#### General

Now you can try to optimize the algorithm
that is used to calculate the move.
You can pay attention to where loops are run
that can be optimized.
Furthermore, it is a good idea to check
whether the player makes frequent redundant or duplicate accesses
to methods, objects or variables
and whether these can be reduced or even completely avoided.
This can already save time
if the code was very unoptimized.

#### Algorithms and data structures

Furthermore, it can make sense
to deal with already optimized data structures,
such as [Bitboards](https://de.wikipedia.org/wiki/Bitboard),
or algorithms,
such as [Minimax](https://de.wikipedia.org/wiki/Minimax-Algorithmus).

:::alert{warn}
The above-mentioned data structure and algorithm were only examples
and there are certainly many other possibilities.
These are only intended as a starting point for further information.

Furthermore, it should be noted that these topics can be quite complex.
It is perfectly fine to come up with your own algorithms
that implement the strategies you have devised.
This can also achieve excellent results.
:::

#### Garbage Collector

The above-mentioned [possibilities](/faq#general)
can already make your player significantly faster and better
when it comes to finding good moves in a short time.
However, even this may not lead to the desired goal
of staying under two seconds.

Because even if the player has already calculated its move,
time can still pass until the move arrives at the game server.
This is particularly the case with programming languages
that have a garbage collector *(i.e., automatic memory management)*.
This can also achieve excellent results.

:::alert{info}
This is the case, for example,
with the player template provided by the Software-Challenge,
as it was written in Java
and the language has a garbage collector.
:::

The [Garbage Collector](https://de.wikipedia.org/wiki/Garbage_Collection)
is a system that automatically manages memory,
so that no manual memory management is necessary.
This means that as soon as, for example,
a variable that was previously initialized
is no longer in the scope of the application,
the garbage collector will run from time to time
and free the memory that this variable occupied.

##### Java

However, in Java the garbage collector can often start
at very inconvenient times,
such as just before the move is sent to the game server.
The work of the garbage collector is also included
in the time the player has to calculate the move.

To optimize the time the garbage collector takes,
you can give the player some startup arguments:

:::alert{warn}
Please note that the following arguments are not universally valid.
For each player, a slightly different combination may be optimal.
:::

```shell
-XX:+ExplicitGCInvokesConcurrent
```
The full effect of the garbage collector from `System.gc()` is mitigated,
as it is not a *Stop the World Event* garbage collector.
This means that all application threads would be paused
until the garbage collector has done its work.

```shell
-XX:NewRatio=1
```
Alternative way to specify the size of the young generation.
Sets the ratio of young to old generation.
This *can* mean that the garbage collector
has less work to do in a single run.

```shell
-mx800m -ms800m
```
Reduces and fixes the memory size,
so that garbage collection occurs more frequently
and takes less time.

```shell
-XX:-UseParNewGC
```
Disables parallel collection of the young generation.
This makes sense
because the player only has one thread available
on the competition server.

For further information, this sheet is very interesting.
:download[HotSpot JVM options cheatsheet]{src="/gc_cheatsheet.pdf"}
