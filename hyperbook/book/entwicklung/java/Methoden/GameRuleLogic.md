---
name: GameRuleLogic Methoden
index: 4
---

# Methodendokumentation <!-- omit in toc -->

## Inhaltsverzeichnis <!-- omit in toc -->
- [GameRuleLogic-Methoden](#gamerulelogic-methoden)
  - [**targetCoordinates(Board, Move)**](#targetcoordinatesboard-move)
  - [**greatestSwarmSize(Board, Team)**](#greatestswarmsizeboard-team)
  - [**greatestSwarmSize(Map\<Coordinates, Integer\>)**](#greatestswarmsizemapcoordinates-integer)
  - [**greatestSwarm(Map\<Coordinates, Integer\>)**](#greatestswarmmapcoordinates-integer)
  - [**isSwarmConnected(Board, Team)**](#isswarmconnectedboard-team)
  - [**possibleMovesFor(Board, Coordinates)**](#possiblemovesforboard-coordinates)


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