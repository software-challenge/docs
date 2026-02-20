---
name: All Methods
index: 2
---

# Method Documentation - All Important Java Methods for Piranhas <!-- omit in toc -->

Here you will find all methods
provided by us for the current game.

## Table of Contents <!-- omit in toc -->

- [GameState (game state) {#gamestate-spielstand}](#gamestate-game-state-gamestate-spielstand)
  - [**getLastMove()**](#getlastmove)
  - [**getCurrentTeam()**](#getcurrentteam)
  - [**getOtherTeam()**](#getotherteam)
  - [**getTurn()**](#getturn)
  - [**getPointsForTeam(Team)**](#getpointsforteamteam)
  - [**getSensibleMoves()**](#getsensiblemoves)
  - [**clone()**](#clone)
  - [**performMove(Move)**](#performmovemove)
  - [**performMoveDirectly(Move)**](#performmovedirectlymove)
- [Board methods (accessible via getBoard()) {#board-methoden-über-getboard-erreichbar}](#board-methods-accessible-via-getboard-board-methoden-über-getboard-erreichbar)
  - [**getBoard()**](#getboard)
  - [**getTeam(Coordinates)**](#getteamcoordinates)
  - [**get(x, y) / get(Coordinates) / get(Object Key)**](#getx-y--getcoordinates--getobject-key)
  - [**clone()** (for Board)](#clone-for-board)
  - [**fieldsForTeam(Team)**](#fieldsforteamteam)
- [GameRuleLogic methods {#gamerulelogic-methoden}](#gamerulelogic-methods-gamerulelogic-methoden)
  - [**targetCoordinates(Board, Move)**](#targetcoordinatesboard-move)
  - [**greatestSwarmSize(Board, Team)**](#greatestswarmsizeboard-team)
  - [**greatestSwarmSize(Map\<Coordinates, Integer\>)**](#greatestswarmsizemapcoordinates-integer)
  - [**greatestSwarm(Map\<Coordinates, Integer\>)**](#greatestswarmmapcoordinates-integer)
  - [**isSwarmConnected(Board, Team)**](#isswarmconnectedboard-team)
  - [**possibleMovesFor(Board, Coordinates)**](#possiblemovesforboard-coordinates)
- [FieldState methods {#fieldstate-methoden}](#fieldstate-methods-fieldstate-methoden)
  - [**getSize()**](#getsize)
  - [**getTeam()**](#getteam)
  - [**isEmpty()**](#isempty)
- [Direction methods {#direction-methoden}](#direction-methods-direction-methoden)
  - [**getDx()** (Direction)](#getdx-direction)
  - [**getDy()** (Direction)](#getdy-direction)
  - [**getVector()**](#getvector)
  - [**equals(Object)** (Direction)](#equalsobject-direction)
- [Coordinates methods {#coordinates-methoden}](#coordinates-methods-coordinates-methoden)
  - [**getX()**](#getx)
  - [**getY()**](#gety)
  - [**getNeighbors()**](#getneighbors)
  - [**plus(Vector)**](#plusvector)
  - [**minus(Vector)**](#minusvector)
  - [**equals(Object)** (Coordinates)](#equalsobject-coordinates)
- [Vector methods {#vector-methoden}](#vector-methods-vector-methoden)
  - [**getDx()** (Vector)](#getdx-vector)
  - [**getDy()** (Vector)](#getdy-vector)
  - [**equals(Object)** (Vector)](#equalsobject-vector)


## GameState (game state) {#gamestate-spielstand}

The `gameState` contains all important parameters
that are needed for calculations.
Various methods can be called on it
to retrieve these parameters.

---

### **getLastMove()**
Returns the opponent's last move.
- **Return type:** `Move`

```java
.getLastMove()
```

The whole construct:

```java
gameState.getLastMove()
```

Here is a code example:

```java
Move lastMove = gameState.getLastMove();
```

---

### **getCurrentTeam()**
Returns the team that is currently to move.
- **Return type:** `Team`

```java
.getCurrentTeam()
```

The whole construct:

```java
gameState.getCurrentTeam()
```

Here is a code example:

```java
Team currentTeam = gameState.getCurrentTeam();
```

---

### **getOtherTeam()**
Returns the team that is currently not to move.
- **Return type:** `Team`

```java
.getOtherTeam()
```

The whole construct:

```java
gameState.getOtherTeam()
```

Here is a code example:

```java
Team otherTeam = gameState.getOtherTeam();
```

---

### **getTurn()**
Returns the current round number.
- **Return type:** `int`

```java
.getTurn()
```

The whole construct:

```java
gameState.getTurn()
```

Here is a code example:

```java
int currentTurn = gameState.getTurn();
```

---

### **getPointsForTeam(Team)**
Returns the points for the specified team.
- **Return type:** `int`

```java
.getPointsForTeam(Team team)
```

The whole construct:

```java
gameState.getPointsForTeam(team)
```

Here is a code example:

```java
int teamPoints = gameState.getPointsForTeam(blueTeam);
```

---

### **getSensibleMoves()**
Returns all possible moves for the current team.
- **Return type:** `List<Move>`

```java
.getSensibleMoves()
```

The whole construct:

```java
gameState.getSensibleMoves()
```

Here is a code example:

```java
List<Move> possibleMoves = gameState.getSensibleMoves();
```

---

### **clone()**
Creates a deep copy of the game state.
- **Return type:** `GameState`

```java
.clone()
```

The whole construct:

```java
gameState.clone()
```

Here is a code example:

```java
GameState copiedState = gameState.clone();
```

---

### **performMove(Move)**
Executes a selected move and returns a new game state.
- **Return type:** `GameState`

```java
.performMove(Move move)
```

The whole construct:

```java
gameState.performMove(move)
```

Here is a code example:

```java
GameState newState = gameState.performMove(selectedMove);
```

---

### **performMoveDirectly(Move)**
Executes a selected move
and modifies the current game state directly.
- **Return type:** `void`

```java
.performMoveDirectly(Move move)
```

The whole construct:

```java
gameState.performMoveDirectly(move)
```

Here is a code example:

```java
gameState.performMoveDirectly(selectedMove);
```

---

## Board methods (accessible via getBoard()) {#board-methoden-über-getboard-erreichbar}

### **getBoard()**
Returns the game board from the game state.
- **Return type:** `Board`

```java
.getBoard()
```

The whole construct:

```java
gameState.getBoard()
```

Here is a code example:

```java
Board currentBoard = gameState.getBoard();
```

---

### **getTeam(Coordinates)**
Returns the team to which the fish at the given coordinates belongs.
- **Return type:** `Team`

```java
.getTeam(Coordinates coords)
```

The whole construct:

```java
gameState.getBoard().getTeam(coords)
```

Here is a code example:

```java
Team fishTeam = gameState.getBoard().getTeam(coordinates);
```

---

### **get(x, y) / get(Coordinates) / get(Object Key)**
Returns the state of the field at the specified position
(e.g., empty, Blue3, etc.).
- **Return type:** `FieldState`

```java
.get(int x, int y)
.get(Coordinates coords)
.get(Object key)
```

The whole construct:

```java
gameState.getBoard().get(x, y)
gameState.getBoard().get(coords)
gameState.getBoard().get(key)
```

Here is a code example:

```java
FieldState fieldStatus = gameState.getBoard().get(2, 3);
```

---

### **clone()** (for Board)
Creates a copy of the board.
- **Return type:** `Board`

```java
.clone()
```

The whole construct:

```java
gameState.getBoard().clone()
```

Here is a code example:

```java
Board copiedBoard = gameState.getBoard().clone();
```

---

### **fieldsForTeam(Team)**
Returns a map with the coordinates of the fish of the specified team
and their point values.
- **Return type:** `Map<Coordinates, Integer>`

```java
.fieldsForTeam(Team team)
```

The whole construct:

```java
gameState.getBoard().fieldsForTeam(team)
```

Here is a code example:

```java
Map<Coordinates, Integer> teamFields = gameState.getBoard().fieldsForTeam(redTeam);
```

---

## GameRuleLogic methods {#gamerulelogic-methoden}

### **targetCoordinates(Board, Move)**
Returns the target coordinates of a move.
- **Return type:** `Coordinates`

```java
.targetCoordinates(Board board, Move move)
```

The whole construct:

```java
GameRuleLogic.targetCoordinates(board, move)
```

Here is a code example:

```java
Coordinates target = GameRuleLogic.targetCoordinates(currentBoard, move);
```

---

### **greatestSwarmSize(Board, Team)**
Returns the size of the largest sub‑swarm of the specified team.
- **Return type:** `int`

```java
.greatestSwarmSize(Board board, Team team)
```

The whole construct:

```java
GameRuleLogic.greatestSwarmSize(board, team)
```

Here is a code example:

```java
int largestSwarmSize = GameRuleLogic.greatestSwarmSize(board, blueTeam);
```

---

### **greatestSwarmSize(Map<Coordinates, Integer>)**
Returns the size of the largest sub‑swarm
based on a map of coordinates and values.
- **Return type:** `int`

```java
.greatestSwarmSize(Map<Coordinates, Integer> swarmMap)
```

The whole construct:

```java
GameRuleLogic.greatestSwarmSize(swarmMap)
```

Here is a code example:

```java
int swarmSize = GameRuleLogic.greatestSwarmSize(fishMap);
```

---

### **greatestSwarm(Map<Coordinates, Integer>)**
Returns the largest sub‑swarm as a map.
- **Return type:** `Map<Coordinates, Integer>`

```java
.greatestSwarm(Map<Coordinates, Integer> swarmMap)
```

The whole construct:

```java
GameRuleLogic.greatestSwarm(swarmMap)
```

Here is a code example:

```java
Map<Coordinates, Integer> largestSwarm = GameRuleLogic.greatestSwarm(fishMap);
```

---

### **isSwarmConnected(Board, Team)**
Checks whether a team's swarm is completely connected.
- **Return type:** `boolean`

```java
.isSwarmConnected(Board board, Team team)
```

The whole construct:

```java
GameRuleLogic.isSwarmConnected(board, team)
```

Here is a code example:

```java
boolean isConnected = GameRuleLogic.isSwarmConnected(board, redTeam);
```

---

### **possibleMovesFor(Board, Coordinates)**
Returns a collection of possible moves for a given position.
- **Return type:** `Collection<Move>`

```java
.possibleMovesFor(Board board, Coordinates coords)
```

The whole construct:

```java
GameRuleLogic.possibleMovesFor(board, coords)
```

Here is a code example:

```java
Collection<Move> moves = GameRuleLogic.possibleMovesFor(board, position);
```

---

## FieldState methods {#fieldstate-methoden}

`FieldState` is an enum that describes the state of a field on the board.
It represents various states
such as fish of different sizes and teams,
or empty fields.

---

### **getSize()**
Returns the size of a fish on the field.
For empty fields or the octopus,
the return value may be handled specially (e.g., -1 or 0).
- **Return type:** `int`

```java
.getSize()
```

The whole construct:

```java
fieldState.getSize()
```

Here is a code example:

```java
int fishSize = fieldState.getSize();
```

---

### **getTeam()**
Returns the team affiliation of a fish on the field.
For empty fields or the octopus,
it may return `null` or a special value.
- **Return type:** `Team`

```java
.getTeam()
```

The whole construct:

```java
fieldState.getTeam()
```

Here is a code example:

```java
Team fishTeam = fieldState.getTeam();
```

---

### **isEmpty()**
Checks whether the field is empty.
- **Return type:** `boolean`

```java
.isEmpty()
```

The whole construct:

```java
fieldState.isEmpty()
```

Here is a code example:

```java
boolean isEmpty = fieldState.isEmpty();
```

---

## Direction methods {#direction-methoden}

`Direction` is an enum that defines the possible movement directions in the game.

---

### **getDx()** (Direction)
Returns the X component of the movement direction (e.g., -1, 0, or 1).
- **Return type:** `int`

```java
.getDx()
```

The whole construct:

```java
direction.getDx()
```

Here is a code example:

```java
int dx = direction.getDx();
```

---

### **getDy()** (Direction)
Returns the Y component of the movement direction (e.g., -1, 0, or 1).
- **Return type:** `int`

```java
.getDy()
```

The whole construct:

```java
direction.getDy()
```

Here is a code example:

```java
int dy = direction.getDy();
```

---

### **getVector()**
Returns the vector for a direction.
- **Return type:** `Vector`

```java
.getVector()
```

The whole construct:

```java
direction.getVector()
```

Here is a code example:

```java
Vector moveVector = direction.getVector();
```

---

### **equals(Object)** (Direction)
Compares the direction with another object (usually another direction).
- **Return type:** `boolean`

```java
.equals(object)
```

The whole construct:

```java
direction.equals(otherDirection)
```

Here is a code example:

```java
boolean areEqual = direction.equals(Direction.UP);
```

---

## Coordinates methods {#coordinates-methoden}

`Coordinates` represents two‑dimensional coordinates on the game board.

---

### **getX()**
Returns the X coordinate value.
- **Return type:** `int`

```java
.getX()
```

The whole construct:

```java
coordinates.getX()
```

Here is a code example:

```java
int x = coordinates.getX();
```

---

### **getY()**
Returns the Y coordinate value.
- **Return type:** `int`

```java
.getY()
```

The whole construct:

```java
coordinates.getY()
```

Here is a code example:

```java
int y = coordinates.getY();
```

---

### **getNeighbors()**
Returns the coordinates of all neighboring fields (as a collection).
- **Return type:** `Collection<Coordinates>`

```java
.getNeighbors()
```

The whole construct:

```java
coordinates.getNeighbors()
```

Here is a code example:

```java
Collection<Coordinates> neighbors = coordinates.getNeighbors();
```

---

### **plus(Vector)**
Adds a vector to the coordinates
and returns the result as new coordinates.
- **Return type:** `Coordinates`

```java
.plus(vector)
```

The whole construct:

```java
coordinates.plus(vector)
```

Here is a code example:

```java
Coordinates newCoordinates = coordinates.plus(moveVector);
```

---

### **minus(Vector)**
Subtracts a vector from the coordinates
and returns the result as new coordinates.
- **Return type:** `Coordinates`

```java
.minus(vector)
```

The whole construct:

```java
coordinates.minus(vector)
```

Here is a code example:

```java
Coordinates newCoordinates = coordinates.minus(moveVector);
```

---

### **equals(Object)** (Coordinates)
Compares the coordinates with another object (usually other coordinates).
- **Return type:** `boolean`

```java
.equals(object)
```

The whole construct:

```java
coordinates.equals(otherCoordinates)
```

Here is a code example:

```java
boolean areEqual = coordinates.equals(new Coordinates(2, 3));
```

---

## Vector methods {#vector-methoden}

`Vector` represents a two‑dimensional movement
with X and Y components.

---

### **getDx()** (Vector)
Returns the X component of the vector.
- **Return type:** `int`

```java
.getDx()
```

The whole construct:

```java
vector.getDx()
```

Here is a code example:

```java
int dx = vector.getDx();
```

---

### **getDy()** (Vector)
Returns the Y component of the vector.
- **Return type:** `int`

```java
.getDy()
```

The whole construct:

```java
vector.getDy()
```

Here is a code example:

```java
int dy = vector.getDy();
```

---

### **equals(Object)** (Vector)
Compares the vector with another object (usually another vector).
- **Return type:** `boolean`

```java
.equals(object)
```

The whole construct:

```java
vector.equals(otherVector)
```

Here is a code example:

```java
boolean areEqual = vector.equals(new Vector(1, 0));
```