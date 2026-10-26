---
name: Alle Methoden
index: 2
---

# Methodendokumentation - Alle wichtigen Java Methoden für Piranhas <!-- omit in toc -->

Hier findest du alle Methoden,
 die von uns für das aktuelle Spiel zur Verfügung gestellt werden.
## Inhaltsverzeichnis <!-- omit in toc -->

- [GameState (Spielstand)](#gamestate-spielstand)
  - [**getLastMove()**](#getlastmove)
  - [**getCurrentTeam()**](#getcurrentteam)
  - [**getOtherTeam()**](#getotherteam)
  - [**getTurn()**](#getturn)
  - [**getPointsForTeam(Team)**](#getpointsforteamteam)
  - [**getSensibleMoves()**](#getsensiblemoves)
  - [**clone()**](#clone)
  - [**performMove(Move)**](#performmovemove)
  - [**performMoveDirectly(Move)**](#performmovedirectlymove)
- [Board-Methoden (über getBoard() erreichbar)](#board-methoden-über-getboard-erreichbar)
  - [**getBoard()**](#getboard)
  - [**getTeam(Coordinates)**](#getteamcoordinates)
  - [**get(x, y) / get(Coordinates) / get(Object Key)**](#getx-y--getcoordinates--getobject-key)
  - [**clone()** (für Board)](#clone-für-board)
  - [**fieldsForTeam(Team)**](#fieldsforteamteam)
- [GameRuleLogic-Methoden](#gamerulelogic-methoden)
  - [**targetCoordinates(Board, Move)**](#targetcoordinatesboard-move)
  - [**greatestSwarmSize(Board, Team)**](#greatestswarmsizeboard-team)
  - [**greatestSwarmSize(Map\<Coordinates, Integer\>)**](#greatestswarmsizemapcoordinates-integer)
  - [**greatestSwarm(Map\<Coordinates, Integer\>)**](#greatestswarmmapcoordinates-integer)
  - [**isSwarmConnected(Board, Team)**](#isswarmconnectedboard-team)
  - [**possibleMovesFor(Board, Coordinates)**](#possiblemovesforboard-coordinates)
- [FieldState-Methoden](#fieldstate-methoden)
  - [**getSize()**](#getsize)
  - [**getTeam()**](#getteam)
  - [**isEmpty()**](#isempty)
- [Direction-Methoden](#direction-methoden)
  - [**getDx()** (Direction)](#getdx-direction)
  - [**getDy()** (Direction)](#getdy-direction)
  - [**getVector()**](#getvector)
  - [**equals(Object)** (Direction)](#equalsobject-direction)
- [Coordinates-Methoden](#coordinates-methoden)
  - [**getX()**](#getx)
  - [**getY()**](#gety)
  - [**getNeighbors()**](#getneighbors)
  - [**plus(Vector)**](#plusvector)
  - [**minus(Vector)**](#minusvector)
  - [**equals(Object)** (Coordinates)](#equalsobject-coordinates)
- [Vector-Methoden](#vector-methoden)
  - [**getDx()** (Vector)](#getdx-vector)
  - [**getDy()** (Vector)](#getdy-vector)
  - [**equals(Object)** (Vector)](#equalsobject-vector)



## GameState (Spielstand)
Der `gameState` enthält alle wichtigen Parameter, die für Berechnungen benötigt werden. Auf ihm können verschiedene Methoden aufgerufen werden, um diese Parameter abzurufen.

---

### **getLastMove()**
Gibt den letzten Zug des Gegners zurück.
- **Rückgabetyp:** `Move`

```java
.getLastMove()
```

Das ganze Konstrukt:

```java
gameState.getLastMove()
```

Hier ein Code-Beispiel:

```java
Move lastMove = gameState.getLastMove();
```

---

### **getCurrentTeam()**
Gibt das Team zurück, das gerade am Zug ist.
- **Rückgabetyp:** `Team`

```java
.getCurrentTeam()
```

Das ganze Konstrukt:

```java
gameState.getCurrentTeam()
```

Hier ein Code-Beispiel:

```java
Team currentTeam = gameState.getCurrentTeam();
```

---

### **getOtherTeam()**
Gibt das Team zurück, das gerade nicht am Zug ist.
- **Rückgabetyp:** `Team`

```java
.getOtherTeam()
```

Das ganze Konstrukt:

```java
gameState.getOtherTeam()
```

Hier ein Code-Beispiel:

```java
Team otherTeam = gameState.getOtherTeam();
```

---

### **getTurn()**
Gibt die aktuelle Runde zurück.
- **Rückgabetyp:** `int`

```java
.getTurn()
```

Das ganze Konstrukt:

```java
gameState.getTurn()
```

Hier ein Code-Beispiel:

```java
int currentTurn = gameState.getTurn();
```

---

### **getPointsForTeam(Team)**
Gibt die Punkte für das angegebene Team zurück.
- **Rückgabetyp:** `int`

```java
.getPointsForTeam(Team team)
```

Das ganze Konstrukt:

```java
gameState.getPointsForTeam(team)
```

Hier ein Code-Beispiel:

```java
int teamPoints = gameState.getPointsForTeam(blueTeam);
```

---

### **getSensibleMoves()**
Gibt alle möglichen Züge für das aktuelle Team zurück.
- **Rückgabetyp:** `List<Move>`

```java
.getSensibleMoves()
```

Das ganze Konstrukt:

```java
gameState.getSensibleMoves()
```

Hier ein Code-Beispiel:

```java
List<Move> possibleMoves = gameState.getSensibleMoves();
```

---

### **clone()**
Erstellt eine tiefe Kopie des Spielstands.
- **Rückgabetyp:** `GameState`

```java
.clone()
```

Das ganze Konstrukt:

```java
gameState.clone()
```

Hier ein Code-Beispiel:

```java
GameState copiedState = gameState.clone();
```

---

### **performMove(Move)**
Führt einen ausgewählten Zug aus und gibt einen neuen Spielstand zurück.
- **Rückgabetyp:** `GameState`

```java
.performMove(Move move)
```

Das ganze Konstrukt:

```java
gameState.performMove(move)
```

Hier ein Code-Beispiel:

```java
GameState newState = gameState.performMove(selectedMove);
```

---

### **performMoveDirectly(Move)**
Führt einen ausgewählten Zug aus und verändert dabei den aktuellen Spielstand.
- **Rückgabetyp:** `void`

```java
.performMoveDirectly(Move move)
```

Das ganze Konstrukt:

```java
gameState.performMoveDirectly(move)
```

Hier ein Code-Beispiel:

```java
gameState.performMoveDirectly(selectedMove);
```

---

## Board-Methoden (über getBoard() erreichbar)

### **getBoard()**
Gibt das Spielfeld aus dem Spielstand zurück.
- **Rückgabetyp:** `Board`

```java
.getBoard()
```

Das ganze Konstrukt:

```java
gameState.getBoard()
```

Hier ein Code-Beispiel:

```java
Board currentBoard = gameState.getBoard();
```

---

### **getTeam(Coordinates)**
Gibt das Team zurück, zu dem der Fisch an den gegebenen Koordinaten gehört.
- **Rückgabetyp:** `Team`

```java
.getTeam(Coordinates coords)
```

Das ganze Konstrukt:

```java
gameState.getBoard().getTeam(coords)
```

Hier ein Code-Beispiel:

```java
Team fishTeam = gameState.getBoard().getTeam(coordinates);
```

---

### **get(x, y) / get(Coordinates) / get(Object Key)**
Gibt den Status des Feldes an der angegebenen Position zurück (z.B. leer, Blue3 usw.).
- **Rückgabetyp:** `FieldState`

```java
.get(int x, int y)
.get(Coordinates coords)
.get(Object key)
```

Das ganze Konstrukt:

```java
gameState.getBoard().get(x, y)
gameState.getBoard().get(coords)
gameState.getBoard().get(key)
```

Hier ein Code-Beispiel:

```java
FieldState fieldStatus = gameState.getBoard().get(2, 3);
```

---

### **clone()** (für Board)
Erstellt eine Kopie des Boards.
- **Rückgabetyp:** `Board`

```java
.clone()
```

Das ganze Konstrukt:

```java
gameState.getBoard().clone()
```

Hier ein Code-Beispiel:

```java
Board copiedBoard = gameState.getBoard().clone();
```

---

### **fieldsForTeam(Team)**
Gibt eine Map mit den Koordinaten der Fische des angegebenen Teams und deren Punktwerten zurück.
- **Rückgabetyp:** `Map<Coordinates, Integer>`

```java
.fieldsForTeam(Team team)
```

Das ganze Konstrukt:

```java
gameState.getBoard().fieldsForTeam(team)
```

Hier ein Code-Beispiel:

```java
Map<Coordinates, Integer> teamFields = gameState.getBoard().fieldsForTeam(redTeam);
```

---

## GameRuleLogic-Methoden

### **targetCoordinates(Board, Move)**
Gibt die Zielkoordinaten eines Zuges zurück.
- **Rückgabetyp:** `Coordinates`

```java
.targetCoordinates(Board board, Move move)
```

Das ganze Konstrukt:

```java
GameRuleLogic.targetCoordinates(board, move)
```

Hier ein Code-Beispiel:

```java
Coordinates target = GameRuleLogic.targetCoordinates(currentBoard, move);
```

---

### **greatestSwarmSize(Board, Team)**
Gibt die Größe des größten Teilschwarms des angegebenen Teams zurück.
- **Rückgabetyp:** `int`

```java
.greatestSwarmSize(Board board, Team team)
```

Das ganze Konstrukt:

```java
GameRuleLogic.greatestSwarmSize(board, team)
```

Hier ein Code-Beispiel:

```java
int largestSwarmSize = GameRuleLogic.greatestSwarmSize(board, blueTeam);
```

---

### **greatestSwarmSize(Map<Coordinates, Integer>)**
Gibt die Größe des größten Teilschwarms basierend auf einer Map von Koordinaten und Werten zurück.
- **Rückgabetyp:** `int`

```java
.greatestSwarmSize(Map<Coordinates, Integer> swarmMap)
```

Das ganze Konstrukt:

```java
GameRuleLogic.greatestSwarmSize(swarmMap)
```

Hier ein Code-Beispiel:

```java
int swarmSize = GameRuleLogic.greatestSwarmSize(fishMap);
```

---

### **greatestSwarm(Map<Coordinates, Integer>)**
Gibt den größten Teilschwarm als Map zurück.
- **Rückgabetyp:** `Map<Coordinates, Integer>`

```java
.greatestSwarm(Map<Coordinates, Integer> swarmMap)
```

Das ganze Konstrukt:

```java
GameRuleLogic.greatestSwarm(swarmMap)
```

Hier ein Code-Beispiel:

```java
Map<Coordinates, Integer> largestSwarm = GameRuleLogic.greatestSwarm(fishMap);
```

---

### **isSwarmConnected(Board, Team)**
Überprüft, ob der Schwarm eines Teams vollständig verbunden ist.
- **Rückgabetyp:** `boolean`

```java
.isSwarmConnected(Board board, Team team)
```

Das ganze Konstrukt:

```java
GameRuleLogic.isSwarmConnected(board, team)
```

Hier ein Code-Beispiel:

```java
boolean isConnected = GameRuleLogic.isSwarmConnected(board, redTeam);
```

---

### **possibleMovesFor(Board, Coordinates)**
Gibt eine Sammlung möglicher Züge für eine gegebene Position zurück.
- **Rückgabetyp:** `Collection<Move>`

```java
.possibleMovesFor(Board board, Coordinates coords)
```

Das ganze Konstrukt:

```java
GameRuleLogic.possibleMovesFor(board, coords)
```

Hier ein Code-Beispiel:

```java
Collection<Move> moves = GameRuleLogic.possibleMovesFor(board, position);
```

---

## FieldState-Methoden
Der `FieldState` beschreibt den Zustand eines Feldes im Spiel. Es handelt sich um ein Enum, das verschiedene Zustände wie Fische unterschiedlicher Größe und Teams oder leere Felder repräsentiert.

---

### **getSize()**
Gibt die Größe eines Fisches auf dem Feld zurück. Bei leeren Feldern oder der Krake kann die Rückgabe speziell behandelt werden (z.B. -1 oder 0).
- **Rückgabetyp:** `int`

```java
.getSize()
```

Das ganze Konstrukt:

```java
fieldState.getSize()
```

Hier ein Code-Beispiel:

```java
int fishSize = fieldState.getSize();
```

---

### **getTeam()**
Gibt die Teamzugehörigkeit eines Fisches auf dem Feld zurück. Bei leeren Feldern oder der Krake wird möglicherweise `null` oder ein spezieller Wert zurückgegeben.
- **Rückgabetyp:** `Team`

```java
.getTeam()
```

Das ganze Konstrukt:

```java
fieldState.getTeam()
```

Hier ein Code-Beispiel:

```java
Team fishTeam = fieldState.getTeam();
```

---

### **isEmpty()**
Überprüft, ob das Feld leer ist.
- **Rückgabetyp:** `boolean`

```java
.isEmpty()
```

Das ganze Konstrukt:

```java
fieldState.isEmpty()
```

Hier ein Code-Beispiel:

```java
boolean isEmpty = fieldState.isEmpty();
```

---

## Direction-Methoden
`Direction` ist ein Enum, das die möglichen Bewegungsrichtungen im Spiel definiert.

---

### **getDx()** (Direction)
Gibt den Wert für die X-Dimension der Bewegungsrichtung zurück (z.B. -1, 0 oder 1).
- **Rückgabetyp:** `int`

```java
.getDx()
```

Das ganze Konstrukt:

```java
direction.getDx()
```

Hier ein Code-Beispiel:

```java
int dx = direction.getDx();
```

---

### **getDy()** (Direction)
Gibt den Wert für die Y-Dimension der Bewegungsrichtung zurück (z.B. -1, 0 oder 1).
- **Rückgabetyp:** `int`

```java
.getDy()
```

Das ganze Konstrukt:

```java
direction.getDy()
```

Hier ein Code-Beispiel:

```java
int dy = direction.getDy();
```

---

### **getVector()**
Gibt den Vektor für eine Richtung zurück.
- **Rückgabetyp:** `Vector`

```java
.getVector()
```

Das ganze Konstrukt:

```java
direction.getVector()
```

Hier ein Code-Beispiel:

```java
Vector moveVector = direction.getVector();
```

---

### **equals(Object)** (Direction)
Vergleicht die Bewegungsrichtung mit einem anderen Objekt (normalerweise einer anderen Richtung).
- **Rückgabetyp:** `boolean`

```java
.equals(object)
```

Das ganze Konstrukt:

```java
direction.equals(otherDirection)
```

Hier ein Code-Beispiel:

```java
boolean areEqual = direction.equals(Direction.UP);
```

---

## Coordinates-Methoden
`Coordinates` repräsentiert zweidimensionale Koordinaten auf dem Spielfeld.

---

### **getX()**
Gibt den Wert der X-Koordinate zurück.
- **Rückgabetyp:** `int`

```java
.getX()
```

Das ganze Konstrukt:

```java
coordinates.getX()
```

Hier ein Code-Beispiel:

```java
int x = coordinates.getX();
```

---

### **getY()**
Gibt den Wert der Y-Koordinate zurück.
- **Rückgabetyp:** `int`

```java
.getY()
```

Das ganze Konstrukt:

```java
coordinates.getY()
```

Hier ein Code-Beispiel:

```java
int y = coordinates.getY();
```

---

### **getNeighbors()**
Gibt die Koordinaten aller Nachbarfelder zurück (in einer Collection).
- **Rückgabetyp:** `Collection<Coordinates>`

```java
.getNeighbors()
```

Das ganze Konstrukt:

```java
coordinates.getNeighbors()
```

Hier ein Code-Beispiel:

```java
Collection<Coordinates> neighbors = coordinates.getNeighbors();
```

---

### **plus(Vector)**
Addiert einen Vektor zu den Koordinaten und gibt das Ergebnis als neue Koordinaten zurück.
- **Rückgabetyp:** `Coordinates`

```java
.plus(vector)
```

Das ganze Konstrukt:

```java
coordinates.plus(vector)
```

Hier ein Code-Beispiel:

```java
Coordinates newCoordinates = coordinates.plus(moveVector);
```

---

### **minus(Vector)**
Subtrahiert einen Vektor von den Koordinaten und gibt das Ergebnis als neue Koordinaten zurück.
- **Rückgabetyp:** `Coordinates`

```java
.minus(vector)
```

Das ganze Konstrukt:

```java
coordinates.minus(vector)
```

Hier ein Code-Beispiel:

```java
Coordinates newCoordinates = coordinates.minus(moveVector);
```

---

### **equals(Object)** (Coordinates)
Vergleicht die Koordinaten mit einem anderen Objekt (normalerweise anderen Koordinaten).
- **Rückgabetyp:** `boolean`

```java
.equals(object)
```

Das ganze Konstrukt:

```java
coordinates.equals(otherCoordinates)
```

Hier ein Code-Beispiel:

```java
boolean areEqual = coordinates.equals(new Coordinates(2, 3));
```

---

## Vector-Methoden
`Vector` repräsentiert eine zweidimensionale Bewegung mit X- und Y-Komponenten.

---

### **getDx()** (Vector)
Gibt den Wert für die X-Dimension des Vektors zurück.
- **Rückgabetyp:** `int`

```java
.getDx()
```

Das ganze Konstrukt:

```java
vector.getDx()
```

Hier ein Code-Beispiel:

```java
int dx = vector.getDx();
```

---

### **getDy()** (Vector)
Gibt den Wert für die Y-Dimension des Vektors zurück.
- **Rückgabetyp:** `int`

```java
.getDy()
```

Das ganze Konstrukt:

```java
vector.getDy()
```

Hier ein Code-Beispiel:

```java
int dy = vector.getDy();
```

---

### **equals(Object)** (Vector)
Vergleicht den Vektor mit einem anderen Objekt (normalerweise einem anderen Vektor).
- **Rückgabetyp:** `boolean`

```java
.equals(object)
```

Das ganze Konstrukt:

```java
vector.equals(otherVector)
```

Hier ein Code-Beispiel:

```java
boolean areEqual = vector.equals(new Vector(1, 0));
```