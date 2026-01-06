# Methodendokumentation - Vector <!-- omit in toc -->

## Inhaltsverzeichnis <!-- omit in toc -->
- [Vector-Methoden](#vector-methoden)
  - [**getDx()**](#getdx)
  - [**getDy()**](#getdy)
  - [**equals(Object)**](#equalsobject)

---

## Vector-Methoden
`Vector` repräsentiert eine zweidimensionale Bewegung mit X- und Y-Komponenten.

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

### **equals(Object)** 
Vergleicht den Vektor mit einem anderen Objekt (normalerweise einem anderen Vektor).
- **Rückgabetyp:** `boolean`

```java
.equals(object)
```

Das ganze Konstrukt:

```java
vector.equals(otherVector)
```

Hier ein Code-Beispiel:

```java
boolean areEqual = vector.equals(new Vector(1, 0));
```