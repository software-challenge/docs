---
name: XML Protocol
index: 2
---

# The XML Interface to the Server

The :t[game server]{#server} communicates with the computer players
via a network connection.
From a technical perspective,
this gives you complete flexibility
regarding the choice of programming language.
The :t[computer players]{#player} only need to comply
with the communication protocol.

Beginners are advised not to write a completely own computer player.
It is much easier to build on a provided player template,
because then you only have to worry about the strategy
and not about the communication.
In addition, the Institute of Computer Science
offers the best support for Java/Kotlin and Python.

:::alert{warn}
During the course of the competition,
elements may be added to the communication interface
that are not listed in this documentation.
So that a computer player can communicate with the server
without errors even with such changes,
any data not further defined here
should be discarded when parsing the XML.
:::

:::alert{info}
The provided programs
(server, Java player) use a library called XStream
to convert Java objects directly to XML and vice versa.
XML messages are not necessarily terminated with a line break.
:::

Game‑specific elements are documented in the
[XML documentation of the current game](/@/xml).

## The Structure

:::plantuml
@startuml
node "Server" as server {
    artifact "Game Server" as serverApp
}
node "Player 1" as client1 {
    artifact "Player Template" as client1App
}
node "Player 2" as client2 {
    artifact "Player Template" as client2App
}
serverApp --> client1App : Sends status and requests in XML
serverApp --> client2App : Sends status and requests in XML
client1App --> serverApp : Sends move in XML
client2App --> serverApp : Sends move in XML
@enduml
:::

The illustration outlines the architecture of our game system,
consisting of the server as the game server and two players.
The server manages the game process
and interacts via the XML protocol with the two players,
each building on a player template.

## The Game Protocol

This section records the game‑independent communication interface
for players to enable writing a completely own client.

### Joining a Game

```xml
<protocol>
```

This tag opens the communication with the server.
Then there are three ways to join a game.

#### Any Game

Joins any open game:

```xml
<join />
```

If no game is open, a new one is created automatically.
Depending on the `paused` setting in `server.properties`,
the game starts paused or not.

#### Specific Game

A specific, already open but not yet started game
can be joined by specifying the `ROOM_ID`:

```xml
<joinRoom roomId="ROOM_ID" />
```

#### With Reservation

By specifying a reservation code,
you can take a reserved place in a planned game:

```xml
<joinPrepared reservationCode="RESERVATION" />
```

#### Response after Connection

The server responds to a successful game join with:

```xml
<joined roomId="ROOM_ID" />
```

- **ROOM_ID**
  - Identification code of the game

### Game Progress

The following explains the game‑specific points of the XML protocol,
which change each year
and may also be subject to changes at the beginning of the season.

#### Start

The server opens the game with a welcome message
and the initial game state as soon as both players are connected.

- **ROOM_ID**
  - Identification code of the game

- **TEAMNUMBER**
  - Player number, e.g., `ONE`, `TWO`

#### Syntax of the Welcome Message

```xml
<room roomId="ROOM_ID">
  <data class="welcomeMessage" color="TEAMNUMBER"></data>
</room>
<room roomId="ROOM_ID">
  <data class="memento">
    GAME_STATE
  </data>
</room>
```

#### Game Flow

The first player then receives a move request:

```xml
<room roomId="ROOM_ID">
  <data class="moveRequest" />
</room>
```

To which they must respond within the allowed time
with a game‑specific move.
