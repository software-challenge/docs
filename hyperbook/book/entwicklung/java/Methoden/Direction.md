# Methodendokumentation - Direction

## Inhaltsverzeichnis
- [Methodendokumentation - Direction](#methodendokumentation---direction)
  - [Inhaltsverzeichnis](#inhaltsverzeichnis)
  - [Direction-Methoden](#direction-methoden)
    - [**getDx()** (Direction)](#getdx-direction)
    - [**getDy()** (Direction)](#getdy-direction)
    - [**getVector()**](#getvector)
    - [**equals(Object)** (Direction)](#equalsobject-direction)


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
