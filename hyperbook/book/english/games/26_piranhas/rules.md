---
name: Game Rules
index: 1
permaid: current_game_start
prev: /grundlagen/contest
---

# Game Rules "Piranhas" for the Software-Challenge 2026

The playing field is an aquarium,
a 10x10 chessboard with columns A-J and rows 0-9.
One player plays the red fish, the other the blue fish.

# Goal of the Game

All fish of your own color should be connected into one swarm,
meaning they should be located in a contiguous area within the aquarium.
Fields that are vertically, horizontally, or diagonally adjacent
are considered contiguous.

# Initial Setup

The red player's fish start on the left and right,
the blue player's fish start at the top and bottom, more precisely:

-   8 red fish on fields A1-A8
-   8 red fish on fields J1-J8
-   8 blue fish on fields B0-I0
-   8 blue fish on fields B9-I9

Both players start with a symmetrical fish arrangement
consisting of fish with values 1-3,
with a tendency towards more small fish than large ones.

In the inner 6x6 area, there are two randomly generated octopus fields
that can be swum through,
but no move may end on them.
These fields therefore hinder swarm formation.
The two octopuses do not share any row, column, or diagonal with each other.

![Game board](/images/spiele/piranha/Piranha_Spielfeld.png)

# Moves

Players take turns moving, with Red starting.
Each round, each player makes one move.
In each move, you move one of your own fish
vertically, horizontally, or diagonally
the same number of fields in one direction
as the total number of fish (of both colors) on that line.

You must land on an empty field or on a field occupied by an opponent.
During the move, you may jump over fields containing your own fish
as well as octopuses,
but not over fields containing opponent's fish.
If an opponent's fish is in the way,
the corresponding move is invalid.
Fields that are jumped over are counted
when determining the number of fields to move.
If you land on a field where an opponent's fish is swimming,
that fish is eaten (removed from the board without replacement).

For example, in the 1st move, Red can move any red fish two fields
towards the center of the board, e.g., from A4 to C4.
Another possibility for the 1st move would be
to move a fish from A1 to A9.
One could also use the fish on A2 to eat the opponent's fish on C0.

![Move distance](/images/spiele/piranha/Piranha_Zugweite.png)

Here is another possible game situation.
For clarity, the image only considers the axes drawn.
Green arrows symbolize possible moves and red arrows those
that are not allowed according to the rules.

![More complex move distance](/images/spiele/piranha/Piranha_kompliziertere_Zuege.png)

# End of Game

The game ends when, at the end of a round
(Blue could thus destroy a red swarm in the second half of a round),
all remaining fish of one color on the board
are connected into a single contiguous swarm,
at the latest however after 30 rounds.
The game also ends if one of the players cannot make a legal move.
In this case, that player loses.

![End of game](/images/spiele/piranha/Piranha_Ende_Schwarm.png)

# Winner

The player who, at the end of the game,
possesses the heaviest contiguous swarm wins,
whereby this can also be a partial swarm (weight criterion).
For this, the sum of the weights of all fish in each swarm is calculated.
If the heaviest swarm of Red is exactly as heavy
as the heaviest swarm of Blue,
the player who first formed a full swarm (not a partial swarm)
during the game wins,
regardless of whether it was their own swarm or the opponent's.
If this is also not the case, the game ends in a draw.

An example:
Through a move by Red (player 1), a situation arises for the first time
in which all fish of one player (whether Red or Blue)
are connected into a single swarm
(either by Red uniting all their own fish
or by eating a solitary blue fish).
However, Blue (player 2) still has to make a move
and thereby splits the swarm again
(because they have to remove a fish from their own swarm
or eat a red fish from the middle of the swarm).
The game is therefore not over (unless it was round 30).
If the weight criterion does not determine a winner at the end of the game,
Red wins because Red was the first to bring about a situation
in which all fish of one player were connected into one swarm.

During the championship and the Champions League,
the weight of each player's heaviest swarm serves as a secondary criterion
for the ranking.
In the Final Eight, this secondary criterion for the ranking does not apply.
In the Final Eight, the player who,
after an even number of games (at least 6),
has won more games than the opponent wins the encounter.