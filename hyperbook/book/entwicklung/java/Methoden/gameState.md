---
name: GameState Methoden
index: 2
---

# Methodendokumentation - GameState (Spielstand) <!-- omit in toc -->

Der `gameState` enthält alle wichtigen Parameter, die für Berechnungen benötigt werden. Auf ihm können verschiedene Methoden aufgerufen werden, um diese Parameter abzurufen.

## Inhaltsverzeichnis <!-- omit in toc -->

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