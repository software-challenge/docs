
# Methodendokumentation - GameState und Board <!-- omit in toc -->

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


