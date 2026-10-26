---
name: Vector Methoden
index: 7
---

# Methodendokumentation - Vector <!-- omit in toc -->

`Vector` repräsentiert eine zweidimensionale Bewegung mit X- und Y-Komponenten.

## Inhaltsverzeichnis <!-- omit in toc -->

- [**equals(Object)**](#equalsobject)
- [**getDx()**](#getdx)
- [**getDy()**](#getdy)
- [**times(int)**](#timesint)

---

### **equals(Object)**

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