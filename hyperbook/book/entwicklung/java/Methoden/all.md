---
name: Alle Methoden
index: 1
---

# Methodendokumentation - Alle wichtigen Java Methoden für Blockus <!-- omit in toc -->

Hier findest du alle wichtigen Methoden, die von uns für das aktuelle Spiel zur Verfügung gestellt werden.

## Inhaltsverzeichnis <!-- omit in toc -->

- [GameState (Spielstand)](#gamestate-spielstand)
  - [**clone()**](#clone)
  - [**equals(Object)**](#equalsobject)
  - [**getBoard()**](#getboard)
  - [**getCurrentColor()**](#getcurrentcolor)
  - [**getCurrentTeam()**](#getcurrentteam)
  - [**getLastMove()**](#getlastmove)
  - [**getLastMoveMono()**](#getlastmovemono)
  - [**getOrderedColors()**](#getorderedcolors)
  - [**getOtherTeam()**](#getotherteam)
  - [**getPointsForTeam(ITeam)**](#getpointsforteamiteam)
  - [**getRound()**](#getround)
  - [**getSensibleMoves()**](#getsensiblemoves)
  - [**getStartPiece()**](#getstartpiece)
  - [**getStartTeam()**](#getstartteam)
  - [**getTurn()**](#getturn)
  - [**getWinCondition()**](#getwincondition)
  - [**hasValidColors()**](#hasvalidcolors)
  - [**isOver()**](#isover)
  - [**isValidColor(Color)**](#isvalidcolorcolor)
  - [**performMove(Move)**](#performmovemove)
  - [**performMoveDirectly(Move)**](#performmovedirectlymove)
  - [**roundFromTurn(int)**](#roundfromturnint)
  - [**setLastMove(Move)**](#setlastmovemove)
  - [**setTurn(int)**](#setturnint)
  - [**setTurnAndRound(int)**](#setturnandroundint)
  - [**teamStats()**](#teamstats)
  - [**undeployedPieceShapes()**](#undeployedpieceshapes)
- [Board-Methoden (über getBoard() erreichbar)](#board-methoden-über-getboard-erreichbar)
  - [**clone()** (für Board)](#clone-für-board)
  - [**get(int x, int y)**](#getint-x-int-y)
  - [**getTeam(Coordinates)**](#getteamcoordinates)
  - [**isObstructed(Coordinates)**](#isobstructedcoordinates)
- [GameRuleLogic-Methoden](#gamerulelogic-methoden)
  - [**bordersOnColor(Board, Field)**](#bordersoncolorboard-field)
  - [**cornersOnColor(Board, Field)**](#cornersoncolorboard-field)
  - [**getColoredFields(GameState)**](#getcoloredfieldsgamestate)
  - [**getPossibleMoves(GameState)**](#getpossiblemovesgamestate)
  - [**getPossibleMovesForShape**](#getpossiblemovesforshape)
  - [**getRandomStartPentomino()**](#getrandomstartpentomino)
  - [**getValidFields(Board, Color)**](#getvalidfieldsboard-color)
  - [**isOnBorder(Coordinates)**](#isonbordercoordinates)
- [Field-Methoden](#field-methoden)
  - [**clone()** (für Field)](#clone-für-field)
  - [**equals(Object)** (Field)](#equalsobject-field)
  - [**getContent()**](#getcontent)
  - [**getCoordinates()**](#getcoordinates)
- [Coordinates-Methoden](#coordinates-methoden)
  - [**equals(Object)** (Coordinates)](#equalsobject-coordinates)
  - [**getDiagonalNeighbors()**](#getdiagonalneighbors)
  - [**getNeighbors()**](#getneighbors)
  - [**getX()**](#getx)
  - [**getY()**](#gety)
  - [**minus(IVector)**](#minusivector)
  - [**minus(Coordinates)**](#minuscoordinates)
  - [**plus(IVector)**](#plusivector)
- [Vector-Methoden](#vector-methoden)
  - [**equals(Object)** (Vector)](#equalsobject-vector)
  - [**getDx()**](#getdx)
  - [**getDy()**](#getdy)
  - [**times(int)**](#timesint)

---

## GameState (Spielstand)

Der `gameState` enthält alle wichtigen Parameter, die für Berechnungen benötigt werden. Auf ihm können verschiedene Methoden aufgerufen werden, um diese Parameter abzurufen.

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

### **equals(Object)**

Vergleicht den Spielstand mit einem anderen Objekt.

- **Rückgabetyp:** `Boolean`

```java
.equals(object)
```

Das ganze Konstrukt:

```java
gameState.equals(otherState)
```

Hier ein Code-Beispiel:

```java
boolean areEqual = gameState.equals(otherState);
```

---

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

### **getCurrentColor()**

Gibt die Farbe zurück, die gerade am Zug ist.

- **Rückgabetyp:** `Color`

```java
.getCurrentColor()
```

Das ganze Konstrukt:

```java
gameState.getCurrentColor()
```

Hier ein Code-Beispiel:

```java
Color currentColor = gameState.getCurrentColor();
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

### **getLastMoveMono()**

Gibt eine Map zurück, die für jede Farbe angibt, ob sie den letzten Zug ausgeführt hat (Monochrom-Information).

- **Rückgabetyp:** `HashMap<Color, Boolean>`

```java
.getLastMoveMono()
```

Das ganze Konstrukt:

```java
gameState.getLastMoveMono()
```

Hier ein Code-Beispiel:

```java
HashMap<Color, Boolean> lastMoveMono = gameState.getLastMoveMono();
```

---

### **getOrderedColors()**

Gibt die Farben in ihrer Zugreihenfolge zurück.

- **Rückgabetyp:** `List<Color>`

```java
.getOrderedColors()
```

Das ganze Konstrukt:

```java
gameState.getOrderedColors()
```

Hier ein Code-Beispiel:

```java
List<Color> orderedColors = gameState.getOrderedColors();
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

### **getPointsForTeam(ITeam)**

Gibt die Punkte für das angegebene Team zurück.

- **Rückgabetyp:** `int`

```java
.getPointsForTeam(ITeam team)
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

### **getRound()**

Gibt die aktuelle Runde zurück.

- **Rückgabetyp:** `int`

```java
.getRound()
```

Das ganze Konstrukt:

```java
gameState.getRound()
```

Hier ein Code-Beispiel:

```java
int currentRound = gameState.getRound();
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

### **getStartPiece()**

Gibt die Start-PieceShape (Start-Spielstein) zurück.

- **Rückgabetyp:** `PieceShape`

```java
.getStartPiece()
```

Das ganze Konstrukt:

```java
gameState.getStartPiece()
```

Hier ein Code-Beispiel:

```java
PieceShape startPiece = gameState.getStartPiece();
```

---

### **getStartTeam()**

Gibt das Team zurück, das das Spiel beginnt.

- **Rückgabetyp:** `Team`

```java
.getStartTeam()
```

Das ganze Konstrukt:

```java
gameState.getStartTeam()
```

Hier ein Code-Beispiel:

```java
Team startTeam = gameState.getStartTeam();
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

### **getWinCondition()**

Gibt die Gewinnbedingung des Spiels zurück.

- **Rückgabetyp:** `WinCondition`

```java
.getWinCondition()
```

Das ganze Konstrukt:

```java
gameState.getWinCondition()
```

Hier ein Code-Beispiel:

```java
WinCondition winCondition = gameState.getWinCondition();
```

---

### **hasValidColors()**

Überprüft, ob alle Farben im Spiel gültig sind.

- **Rückgabetyp:** `boolean`

```java
.hasValidColors()
```

Das ganze Konstrukt:

```java
gameState.hasValidColors()
```

Hier ein Code-Beispiel:

```java
boolean valid = gameState.hasValidColors();
```

---

### **isOver()**

Überprüft, ob das Spiel beendet ist.

- **Rückgabetyp:** `boolean`

```java
.isOver()
```

Das ganze Konstrukt:

```java
gameState.isOver()
```

Hier ein Code-Beispiel:

```java
boolean gameOver = gameState.isOver();
```

---

### **isValidColor(Color)**

Überprüft, ob eine gegebene Farbe im Spiel gültig ist.

- **Rückgabetyp:** `boolean`

```java
.isValidColor(Color color)
```

Das ganze Konstrukt:

```java
gameState.isValidColor(color)
```

Hier ein Code-Beispiel:

```java
boolean isValid = gameState.isValidColor(redColor);
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

### **roundFromTurn(int)**

Berechnet die Runde aus einer gegebenen Zugnummer.

- **Rückgabetyp:** `int`

```java
.roundFromTurn(int turn)
```

Das ganze Konstrukt:

```java
gameState.roundFromTurn(turn)
```

Hier ein Code-Beispiel:

```java
int round = gameState.roundFromTurn(42);
```

---

### **setLastMove(Move)**

Setzt den letzten Zug.

- **Rückgabetyp:** `void`

```java
.setLastMove(Move move)
```

Das ganze Konstrukt:

```java
gameState.setLastMove(move)
```

Hier ein Code-Beispiel:

```java
gameState.setLastMove(newMove);
```

---

### **setTurn(int)**

Setzt die aktuelle Zugnummer.

- **Rückgabetyp:** `void`

```java
.setTurn(int turn)
```

Das ganze Konstrukt:

```java
gameState.setTurn(turn)
```

Hier ein Code-Beispiel:

```java
gameState.setTurn(5);
```

---

### **setTurnAndRound(int)**

Setzt Zugnummer und Runde.

- **Rückgabetyp:** `void`

```java
.setTurnAndRound(int turn)
```

Das ganze Konstrukt:

```java
gameState.setTurnAndRound(turn)
```

Hier ein Code-Beispiel:

```java
gameState.setTurnAndRound(10);
```

---

### **teamStats()**

Gibt eine Liste von Statistiken für alle Teams zurück.

- **Rückgabetyp:** `List<Stat>`

```java
.teamStats()
```

Das ganze Konstrukt:

```java
gameState.teamStats()
```

Hier ein Code-Beispiel:

```java
List<Stat> stats = gameState.teamStats();
```

---

### **undeployedPieceShapes()**

Gibt eine Sammlung der noch nicht eingesetzten PieceShapes zurück.

- **Rückgabetyp:** `Collection<PieceShape>`

```java
.undeployedPieceShapes()
```

Das ganze Konstrukt:

```java
gameState.undeployedPieceShapes()
```

Hier ein Code-Beispiel:

```java
Collection<PieceShape> remainingPieces = gameState.undeployedPieceShapes();
```

---

## Board-Methoden (über getBoard() erreichbar)

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

### **get(int x, int y)**

Gibt das Feld an der angegebenen Position zurück.

- **Rückgabetyp:** `Field`

```java
.get(int x, int y)
```

Das ganze Konstrukt:

```java
gameState.getBoard().get(x, y)
```

Hier ein Code-Beispiel:

```java
Field field = gameState.getBoard().get(2, 3);
```

---

### **getTeam(Coordinates)**

Gibt das Team zurück, zu dem der Spielstein an den gegebenen Koordinaten gehört.

- **Rückgabetyp:** `Team`

```java
.getTeam(Coordinates position)
```

Das ganze Konstrukt:

```java
gameState.getBoard().getTeam(position)
```

Hier ein Code-Beispiel:

```java
Team pieceTeam = gameState.getBoard().getTeam(coordinates);
```

---

### **isObstructed(Coordinates)**

Überprüft, ob das Feld an den gegebenen Koordinaten blockiert ist.

- **Rückgabetyp:** `Boolean`

```java
.isObstructed(Coordinates position)
```

Das ganze Konstrukt:

```java
gameState.getBoard().isObstructed(position)
```

Hier ein Code-Beispiel:

```java
boolean obstructed = gameState.getBoard().isObstructed(coordinates);
```

---

## GameRuleLogic-Methoden

### **bordersOnColor(Board, Field)**

Überprüft, ob ein Feld an eine bestimmte Farbe angrenzt.

- **Rückgabetyp:** `boolean`

```java
.bordersOnColor(Board board, Field field)
```

Das ganze Konstrukt:

```java
GameRuleLogic.bordersOnColor(board, field)
```

Hier ein Code-Beispiel:

```java
boolean borders = GameRuleLogic.bordersOnColor(currentBoard, field);
```

---

### **cornersOnColor(Board, Field)**

Überprüft, ob ein Feld an eine bestimmte Farbe in den Ecken angrenzt.

- **Rückgabetyp:** `boolean`

```java
.cornersOnColor(Board board, Field field)
```

Das ganze Konstrukt:

```java
GameRuleLogic.cornersOnColor(board, field)
```

Hier ein Code-Beispiel:

```java
boolean corners = GameRuleLogic.cornersOnColor(currentBoard, field);
```

---

### **getColoredFields(GameState)**

Gibt eine Liste von SetMoves für alle gefärbten Felder zurück.

- **Rückgabetyp:** `List<SetMove>`

```java
.getColoredFields(GameState gameState)
```

Das ganze Konstrukt:

```java
GameRuleLogic.getColoredFields(gameState)
```

Hier ein Code-Beispiel:

```java
List<SetMove> coloredFields = GameRuleLogic.getColoredFields(currentState);
```

---

### **getPossibleMoves(GameState)**

Gibt eine Liste aller möglichen Züge für den aktuellen Spielstand zurück.

- **Rückgabetyp:** `List<SetMove>`

```java
.getPossibleMoves(GameState gameState)
```

Das ganze Konstrukt:

```java
GameRuleLogic.getPossibleMoves(gameState)
```

Hier ein Code-Beispiel:

```java
List<SetMove> moves = GameRuleLogic.getPossibleMoves(currentState);
```

---

### **getPossibleMovesForShape**

Gibt die möglichen Züge für eine bestimmte PieceShape zurück.

```java
.getPossibleMovesForShape(GameState gameState, PieceShape shape, Set<Coordinates> validFields)
```

Das ganze Konstrukt:

```java
GameRuleLogic.getPossibleMovesForShape(gameState, shape, fields)
```

Hier ein Code-Beispiel:

```java
Set<SetMove> shapeMoves = GameRuleLogic.getPossibleMovesForShape(gameState, shape, fields);
```

---

### **getRandomStartPentomino()**

Gibt das zufällige Start-Pentomino (PieceShape) zurück.

- **Rückgabetyp:** `PieceShape`

```java
.getRandomStartPentomino()
```

Das ganze Konstrukt:

```java
GameRuleLogic.getRandomStartPentomino()
```

Hier ein Code-Beispiel:

```java
PieceShape startPentomino = GameRuleLogic.getRandomStartPentomino();
```

---

### **getValidFields(Board, Color)**

Gibt die Menge aller gültigen Felder für eine bestimmte Farbe zurück.

- **Rückgabetyp:** `Set<Coordinates>`

```java
.getValidFields(Board board, Color color)
```

Das ganze Konstrukt:

```java
GameRuleLogic.getValidFields(board, color)
```

Hier ein Code-Beispiel:

```java
Set<Coordinates> validFields = GameRuleLogic.getValidFields(currentBoard, redColor);
```

---

### **isOnBorder(Coordinates)**

Überprüft, ob die angegebenen Koordinaten auf dem Spielfeldrand liegen.

- **Rückgabetyp:** `boolean`

```java
.isOnBorder(Coordinates position)
```

Das ganze Konstrukt:

```java
GameRuleLogic.isOnBorder(position)
```

Hier ein Code-Beispiel:

```java
boolean onBorder = GameRuleLogic.isOnBorder(coordinates);
```

---

## Field-Methoden

Das `Field` repräsentiert ein einzelnes Feld auf dem Spielfeld.

---

### **clone()** (für Field)

Erstellt eine Kopie des Feldes.

- **Rückgabetyp:** `Field`

```java
.clone()
```

Das ganze Konstrukt:

```java
field.clone()
```

Hier ein Code-Beispiel:

```java
Field copiedField = field.clone();
```

---

### **equals(Object)** (Field)

Vergleicht das Feld mit einem anderen Objekt.

- **Rückgabetyp:** `boolean`

```java
.equals(object)
```

Das ganze Konstrukt:

```java
field.equals(otherField)
```

Hier ein Code-Beispiel:

```java
boolean areEqual = field.equals(otherField);
```

---

### **getContent()**

Gibt den Inhalt des Feldes zurück (z.B. Farbe, Spielstein).

- **Rückgabetyp:** `FieldContent`

```java
.getContent()
```

Das ganze Konstrukt:

```java
field.getContent()
```

Hier ein Code-Beispiel:

```java
FieldContent content = field.getContent();
```

---

### **getCoordinates()**

Gibt die Koordinaten des Feldes zurück.

- **Rückgabetyp:** `Coordinates`

```java
.getCoordinates()
```

Das ganze Konstrukt:

```java
field.getCoordinates()
```

Hier ein Code-Beispiel:

```java
Coordinates position = field.getCoordinates();
```

---

## Coordinates-Methoden

`Coordinates` repräsentiert zweidimensionale Koordinaten auf dem Spielfeld.

---

### **equals(Object)** (Coordinates)

Vergleicht die Koordinaten mit einem anderen Objekt (normalerweise anderen Koordinaten).

- **Rückgabetyp:** `boolean`

```java
.equals(other)
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

### **getDiagonalNeighbors()**

Gibt die Koordinaten aller diagonalen Nachbarfelder zurück.

- **Rückgabetyp:** `Collection<Coordinates>`

```java
.getDiagonalNeighbors()
```

Das ganze Konstrukt:

```java
coordinates.getDiagonalNeighbors()
```

Hier ein Code-Beispiel:

```java
Collection<Coordinates> diagonalNeighbors = coordinates.getDiagonalNeighbors();
```

---

### **getNeighbors()**

Gibt die Koordinaten aller orthogonalen Nachbarfelder zurück.

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

### **minus(IVector)**

Subtrahiert einen Vektor von den Koordinaten und gibt das Ergebnis als neue Koordinaten zurück.

- **Rückgabetyp:** `Coordinates`

```java
.minus(IVector vector)
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

### **minus(Coordinates)**

Berechnet den Vektor zwischen zwei Koordinaten (Differenz).

- **Rückgabetyp:** `Vector`

```java
.minus(Coordinates other)
```

Das ganze Konstrukt:

```java
coordinates.minus(otherCoordinates)
```

Hier ein Code-Beispiel:

```java
Vector difference = coordinates.minus(otherCoordinates);
```

---

### **plus(IVector)**

Addiert einen Vektor zu den Koordinaten und gibt das Ergebnis als neue Koordinaten zurück.

- **Rückgabetyp:** `Coordinates`

```java
.plus(IVector vector)
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

## Vector-Methoden

`Vector` repräsentiert eine zweidimensionale Bewegung mit X- und Y-Komponenten.

---

### **equals(Object)** (Vector)

Vergleicht den Vektor mit einem anderen Objekt (normalerweise einem anderen Vektor).

- **Rückgabetyp:** `boolean`

```java
.equals(other)
```

Das ganze Konstrukt:

```java
vector.equals(otherVector)
```

Hier ein Code-Beispiel:

```java
boolean areEqual = vector.equals(new Vector(1, 0));
```

---

### **getDx()**

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

### **getDy()**

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

### **times(int)**

Multipliziert den Vektor mit einem Skalar und gibt einen neuen Vektor zurück.

- **Rückgabetyp:** `Vector`

```java
.times(int scalar)
```

Das ganze Konstrukt:

```java
vector.times(scalar)
```

Hier ein Code-Beispiel:

```java
Vector scaledVector = vector.times(3);
```