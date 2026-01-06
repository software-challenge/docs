# Methodendokumentation - Coordinates <!-- omit in toc -->

## Inhaltsverzeichnis <!-- omit in toc -->
- [Coordinates-Methoden](#coordinates-methoden)
  - [**getX()**](#getx)
  - [**getY()**](#gety)
  - [**getNeighbors()**](#getneighbors)
  - [**plus(Vector)**](#plusvector)
  - [**minus(Vector)**](#minusvector)
  - [**equals(Object)** (Coordinates)](#equalsobject-coordinates)


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