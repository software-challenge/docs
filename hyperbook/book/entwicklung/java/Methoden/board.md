---
name: Board Methoden
index: 3
---

# Methodendokumentation - Board-Methoden <!-- omit in toc -->

Die `Board`-Methoden sind über `gameState.getBoard()` erreichbar und liefern Informationen über das Spielfeld.

## Inhaltsverzeichnis <!-- omit in toc -->

- [**clone()**](#clone)
- [**get(int x, int y)**](#getint-x-int-y)
- [**getTeam(Coordinates)**](#getteamcoordinates)
- [**isObstructed(Coordinates)**](#isobstructedcoordinates)

---

### **clone()**

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