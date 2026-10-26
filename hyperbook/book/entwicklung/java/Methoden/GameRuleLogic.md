---
name: GameRuleLogic Methoden
index: 4
---

# Methodendokumentation - GameRuleLogic <!-- omit in toc -->

Die `GameRuleLogic`-Methoden sind statische Hilfsmethoden, die Spiellogik für Blockus bereitstellen.

## Inhaltsverzeichnis <!-- omit in toc -->

- [**bordersOnColor(Board, Field)**](#bordersoncolorboard-field)
- [**cornersOnColor(Board, Field)**](#cornersoncolorboard-field)
- [**getColoredFields(GameState)**](#getcoloredfieldsgamestate)
- [**getPossibleMoves(GameState)**](#getpossiblemovesgamestate)
- [**getPossibleMovesForShape**](#getpossiblemovesforshape)
- [**getRandomStartPentomino()**](#getrandomstartpentomino)
- [**getValidFields(Board, Color)**](#getvalidfieldsboard-color)
- [**isOnBorder(Coordinates)**](#isonbordercoordinates)

---

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
- **Rückgabetyp:** `Set<SetMove>`

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
