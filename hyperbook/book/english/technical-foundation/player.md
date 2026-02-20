---
name: Computer Player
index: 1
---

# The Computer Player

The computer player is a program
that connects to the [game server](/grundlagen/server)
and independently solves the given task.
The task of the pupils is
to think of a strategy and implement it
with which they can win against the players of the other teams.

The computer player can be written in any programming language,
but for some languages, sample computer players are already provided
in the [download area of the Software-Challenge website](https://software-challenge.de/dokumentation-und-material),
which are highly recommended for beginners,
as this way the XML interface does not need to be considered.

**Note:** The game server program requires Java.
Therefore, the [Java SDK must be installed](/entwicklung/java/installation-von-java)
on the executing computers.

## The Random Player

The random player is a computer player
that the Institute of Computer Science enters into the competition.
Although it represents a correct solution to the task,
it is not particularly intelligent.
In addition to the actual program,
the source code of the random player is also available.
Pupils can look at this source code and extend it with their own strategy.
This allows pupils to concentrate entirely
on the design and implementation of their own strategy.

## The Advanced Player

When the current season of the Software-Challenge is a little more advanced,
the institute provides a stronger computer player:
the Advanced Player.
This is a player that pursues a more efficient strategy
to solve the task.
This player is published without the source code,
so that pupils can use the Advanced Player as an opponent for test games,
but cannot reuse the source code for their own player.