---
name: XML Documentation
permaid: xml
---

# XML elements of the game Piranhas

This documentation describes the game-specific elements
of the [XML protocol](/xml/protokoll) for the game Piranhas.

## Game state

The following XML structure describes the regularly communicated game state.
This message is sent whenever something changes on the board,
i.e., when a player has made a move.

A state contains the current board and the last move played.
The game board is a 2‑dimensional grid of fields,
with the coordinate origin (0, 0) at the bottom left corner.
Accordingly, the server transmits the board split into the individual rows,
starting with the lowest row.
The rows are described from left to right.
The last move played in the game, `lastMove`,
is structured like a normal [move](/spiele/26_piranhas/xml#zug-senden).

```xml
<room roomId="ROOM_ID">
    <data class="memento">
        <state class="state" startTeam="ONE" turn="19">
            <lastMove>
                <from x="7" y="6"/>
                <direction>UP_RIGHT</direction>
            </lastMove>
            <board>
                <row>
                    <field>TWO_S</field>
                    <field>TWO_S</field>
                    <field>TWO_S</field>
                    <field>EMPTY</field>
                    <field>EMPTY</field>
                    <field>EMPTY</field>
                    <field>EMPTY</field>
                    <field>TWO_L</field>
                    <field>TWO_M</field>
                    <field>EMPTY</field>
                </row>
                <row>
                    <field>ONE_S</field>
                    <field>EMPTY</field>
                    <field>EMPTY</field>
                    <field>EMPTY</field>
                    <field>SQUID</field>
                    <field>EMPTY</field>
                    <field>EMPTY</field>
                    <field>ONE_M</field>
                    <field>EMPTY</field>
                    <field>EMPTY</field>
                </row>
                ...
                <row>
                    <field>EMPTY</field>
                    <field>TWO_M</field>
                    ...
                    <field>TWO_M</field>
                    <field>EMPTY</field>
                </row>
            </board>
        </state>
    </data>
</room>
```

### Fields

The fields are encoded as follows:

- Empty field: `EMPTY`
- Octopus field: `SQUID`
- Field with fish: `<TEAM>_<SIZE>` (e.g., `ONE_S` for the small fish of player 1, usually Red)
  - where TEAM is `ONE` or `TWO`
  - and SIZE is `S`, `M`, or `L`, the size of the fish

## Joining a game without a reservation code

Joins any open game:

```xml
<join gameType="swc_2026_piranhas"/>
```

If no game is open, a new one is created.
Depending on whether `paused` in `server.properties` is true or false,
the game starts paused or not.

## Game move

### Request

When your own client is to move,
this request follows the game state,
indicating that the server expects a move:

```xml
<room roomId="ROOM_ID">
    <data class="moveRequest"/>
</room>
```

### Sending a move

A move in the game Piranhas always consists of a starting position,
on which a fish of your own team must be located,
and a direction in which this fish should move:

```xml
<room roomId="ROOM_ID">
    <data class="move">
        <from x="9" y="3"/>
        <direction>LEFT</direction>
    </data>
</room>
```

The direction is encoded as one of the following eight options:

`UP` `UP_RIGHT` `RIGHT` `DOWN_RIGHT` `DOWN` `DOWN_LEFT` `LEFT` `UP_LEFT`

## Game result

When the game is over, the clients receive the result of the match:

```xml
<room roomId="ROOM_ID">
    <data class="result">
        <definition>
            <fragment name="Siegpunkte">
                <aggregation>SUM</aggregation>
                <relevantForRanking>true</relevantForRanking>
            </fragment>
            <fragment name="Schwarmgr..e">
                <aggregation>AVERAGE</aggregation>
                <relevantForRanking>true</relevantForRanking>
            </fragment>
        </definition>
    <scores>
        <entry>
            <player name="Spieler 1" team="ONE"/>
            <score>
                <part>0</part>
                <part>2</part>
            </score>
        </entry>
        <entry>
            <player name="Spieler 2" team="TWO"/>
            <score>
                <part>2</part>
                <part>5</part>
            </score>
        </entry>
    </scores>
    <winner team="TWO" regular="true" reason="Spieler 2 hat den groesseren zusammenhaengenden Schwarm"/>
    </data>
</room>
```

Under `scores`, the two players are listed with the points they achieved.
What exactly the values in `part` mean is specified in the `definition`.
For Piranhas, these are the number of victory points
that are credited in the competition system
and the swarm size achieved at the end of the game.

In this example, you can see that player 2 won this round
with a swarm size of 5.

In the event of a draw, both players receive one victory point each,
and the `winner` tag does not include a team:

```xml
<winner regular="true" reason="Beide Spieler sind gleichauf"/>
```