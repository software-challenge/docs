---
name: Coordinates Methoden
index: 6
---

# Methodendokumentation - Coordinates <!-- omit in toc -->

`Coordinates` repräsentiert zweidimensionale Koordinaten auf dem Spielfeld.

## Inhaltsverzeichnis <!-- omit in toc -->

- [**equals(Object)**](#equalsobject)
- [**getDiagonalNeighbors()**](#getdiagonalneighbors)
- [**getNeighbors()**](#getneighbors)
- [**getX()**](#getx)
- [**getY()**](#gety)
- [**minus(IVector)**](#minusivector)
- [**minus(Coordinates)**](#minuscoordinates)
- [**plus(IVector)**](#plusivector)

---

### **equals(Object)**

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
