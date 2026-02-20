---
name: FieldState Methoden
index: 5
---

# Methodendokumentation - FieldState <!-- omit in toc -->

## Inhaltsverzeichnis <!-- omit in toc -->
- [FieldState-Methoden](#fieldstate-methoden)
  - [**getSize()**](#getsize)
  - [**getTeam()**](#getteam)
  - [**isEmpty()**](#isempty)

## FieldState-Methoden
Der `FieldState` beschreibt den Zustand eines Feldes im Spiel. Es handelt sich um ein Enum, das verschiedene Zustände wie Fische unterschiedlicher Größe und Teams oder leere Felder repräsentiert.

---

### **getSize()**
Gibt die Größe eines Fisches auf dem Feld zurück. Bei leeren Feldern oder der Krake kann die Rückgabe speziell behandelt werden (z.B. -1 oder 0).
- **Rückgabetyp:** `int`

```java
.getSize()
```

Das ganze Konstrukt:

```java
fieldState.getSize()
```

Hier ein Code-Beispiel:

```java
int fishSize = fieldState.getSize();
```

---

### **getTeam()**
Gibt die Teamzugehörigkeit eines Fisches auf dem Feld zurück. Bei leeren Feldern oder der Krake wird möglicherweise `null` oder ein spezieller Wert zurückgegeben.
- **Rückgabetyp:** `Team`

```java
.getTeam()
```

Das ganze Konstrukt:

```java
fieldState.getTeam()
```

Hier ein Code-Beispiel:

```java
Team fishTeam = fieldState.getTeam();
```

---

### **isEmpty()**
Überprüft, ob das Feld leer ist.
- **Rückgabetyp:** `boolean`

```java
.isEmpty()
```

Das ganze Konstrukt:

```java
fieldState.isEmpty()
```

Hier ein Code-Beispiel:

```java
boolean isEmpty = fieldState.isEmpty();
```

---