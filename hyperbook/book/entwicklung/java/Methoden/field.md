---
name: Field Methoden
index: 5
---

# Methodendokumentation - Field <!-- omit in toc -->

Das `Field` repräsentiert ein einzelnes Feld auf dem Spielfeld.

## Inhaltsverzeichnis <!-- omit in toc -->

- [**clone()**](#clone)
- [**equals(Object)**](#equalsobject)
- [**getContent()**](#getcontent)
- [**getCoordinates()**](#getcoordinates)

---

### **clone()**

Erstellt eine Kopie des Feldes.
- **Rückgabetyp:** `Field`

```java
.clone()
```

Das ganze Konstrukt:

```java
field.clone()
```

Hier ein Code-Beispiel:

```java
Field copiedField = field.clone();
```

---

### **equals(Object)**

Vergleicht das Feld mit einem anderen Objekt.
- **Rückgabetyp:** `boolean`

```java
.equals(object)
```

Das ganze Konstrukt:

```java
field.equals(otherField)
```

Hier ein Code-Beispiel:

```java
boolean areEqual = field.equals(otherField);
```

---

### **getContent()**

Gibt den Inhalt des Feldes zurück (z.B. Farbe, Spielstein).
- **Rückgabetyp:** `FieldContent`

```java
.getContent()
```

Das ganze Konstrukt:

```java
field.getContent()
```

Hier ein Code-Beispiel:

```java
FieldContent content = field.getContent();
```

---

### **getCoordinates()**

Gibt die Koordinaten des Feldes zurück.
- **Rückgabetyp:** `Coordinates`

```java
.getCoordinates()
```

Das ganze Konstrukt:

```java
field.getCoordinates()
```

Hier ein Code-Beispiel:

```java
Coordinates position = field.getCoordinates();
```