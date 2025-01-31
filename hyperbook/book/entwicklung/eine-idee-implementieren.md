---
name: Idee implementieren
index: 2
---

# Eine Idee implementieren

Man hat einige Spiele absolviert und sich eine gute Strategie
ausgedacht. Damit hat man zwar schon einen wichtigen Teil der Arbeit
geleistet, aber irgendwie muss dem
[Computerspieler](/glossary/player) noch beigebracht werden, nach
dieser Strategie zu spielen.

Anhand einer kleinen Aufgabe soll gezeigt werden, wie man eine Idee
formal beschreiben und in ein Programm überführen kann. Dabei nehmen wir
an, dass wir einen Stapel mit Karten haben, der sortiert werden soll.

## Voraussetzungen

-   eine beliebige Anzahl an Spielkarten

-   eine Reihenfolge, in der die Spielkarten sortiert werden sollen

### Idee formalisieren

Als Erstes muss die Idee formal beschrieben werden. Oftmals kann man
zunächst beschreiben, wie man als Mensch vorgehen würde.

1.  Gehe den Stapel durch und merke die Position, an der sich die
    kleinste Karte befindet.

2.  Tausche die Position der kleinsten Karte mit der untersten Karte im
    Stapel.

3.  Die kleinste Karte ist jetzt an der richtigen Position.

4.  Führe die Schritte immer wieder für den Reststapel (ohne die sortierten
    Karten) aus.

### Idee implementieren

Nachdem man seine Idee formal niedergeschrieben hat, kann sie ganz
leicht in ein Programm überführt werden:

#### Java

```java
/**
 * Das Array a[] symbolisiert den Stapel der unsortierten Karten. Dabei steht
 * eine Zahl immer für eine spezielle Karte. Eine kleinere Zahl bedeutet,
 * dass es sich um eine kleinere Karte handelt.
 *
 * start gibt die Position an, wo der Reststapel beginnt (am Anfang: start = 0)
 */
public static void sortiere(int[] a, int start) {
    // Position der kleinsten Karte
    int pos = start;

    // Gehe Array durch und merke die Position der kleinsten Karte 
    for (int i = start+1; i < a.length; i++) {
        // Wenn eine kleinere Karte gefunden wurde...
        if (a[i] < a[pos]) {

            // ... neue Position merken
            pos = i;
        }
    }

    // kleinste Karte mit erster Karte des Reststapels tauschen  
    int temp = a[start]; // erste Karte merken
    a[start] = a[pos];   // kleinste Karte nach vorne bringen
    a[pos] = temp;       // gemerkte Karte in die Mitte des Stapels schreiben

    // Wenn es noch einen Reststapel gibt, soll dieser weitersortiert werden 
    if (start < a.length) {
        sortiere(a, start+1);
    }
}
```

#### Python

```python
# Die Liste a symbolisiert den Stapel der unsortieren Karten als Zahlen repräsentiert.
# Dabei steht eine immer für eine spezielle Karte. Eine kleinere Zahl bedeutet,
# dass es sich um eine kleinere Karte handelt.
#
# start gibt die Position an, wo der Reststapel beginnt (am Anfang: start = 0)
# 
# Beachte: in Python müssen Datentypen nicht explizit angegeben werden, es hilft aber
# möglicherweise bei der Entwicklung
def sortiere(a: list[int], start: int):
    # Position der kleinsten Karte
    pos = start
    
    # Gehe die Liste durch und merke die Position der kleinsten Karte 
    for i in range(start + 1, len(a)):
        # Wenn eine kleinere Karte gefunden wurde...
        if a[i] < a[pos]:

            # ... neue Position merken
            pos = i;

    # kleinste Karte mit erster Karte des Reststapels tauschen  
    temp = a[start];        # erste Karte merken
    a[start] = a[pos];      # kleinste Karte nach vorne zum sortierten Bereich bringen
    a[pos] = temp;          # gemerkte Karte in die Mitte des Stapels schreiben

    # Wenn es noch einen Reststapel gibt, soll dieser weitersortiert werden,
    # ansonsten gebe die sortierte Liste zurück
    if start < len(a) - 1:
        return sortiere(a, start+1);
    else:
        return a
```

## Weiterführende Links

Wir haben hier den Sortieralgorithmus [Selection Sort](https://de.wikipedia.org/wiki/Selectionsort)
rekursiv implementiert.