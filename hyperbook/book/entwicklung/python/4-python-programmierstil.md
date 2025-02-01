---
name: Sauberer Programmierstil in Python
index: 4
---

# Sauberer Programmierstil in Python

Wenn man längere Zeit an einem Projekt programmiert, ist es besonders wichtig,
eine gute Struktur beizubehalten. Der/m einen oder anderen ist es womöglich
schon passiert, dass man fremden Programmcode gelesen hat, den man gar nicht
versteht. Häufiger liegt es dabei nicht daran, dass dieser unfassbar schwer ist,
sondern einfach umständlich zu lesen ist. Ein sehr ähnliches Phänomen kann
auch gut und gerne mal auftreten wenn man das eigene Programm betrachtet, wenn
dieses durcheinander geschrieben ist.

Dafür gibt es in den aller meisten Programmiersprache so genannte *Style Guides*,
in welchen Regeln für den Aufbau des Programmtextes verfasst sind.

Für Python ist dies der [PEP8 Style Guide](https://peps.python.org/pep-0008/), welcher
äußerst lesenswert ist, aber dennoch genauso ausführlich ist,
so dass hier im Folgenden die wichtigsten Punkte benannt werden:

## Allgemeine Regeln

Es wird womöglich auffallen, dass es für einige der Regeln immer noch mehrere
Möglichkeiten gibt, etwas umzusetzen. Dabei kann man sich das aussuchen,
was am ansprechendsten ist.
Wichtig ist dann nur, konsistent zu bleiben und sich ggf. mit Mitprogrammiern
abzusprechen.

### Einrückungen

Für Einrückungen im Programmtext sollten 4 Leerzeichen verwendet werden. \
Zeilen, die einen Umbruch nutzen, wenn z.B. viele Funktionsparamater
benutzt werden, sollten klar durch Einrückung vom restlichen Code getrennt
werden. Dafür können die Argumente entweder aufgeteilt werden und diese,
welche sich in einer neuen Zeile finden, sind auf die entsprechende Höhe
des ersten Arguments eingerückt. \
Anderenfalls kann man auch alle Argumente in die nächsten Zeilen schreiben,
wobei diese dann um die übliche Tiefe oder sogar mehr eingerückt sind.
Die schließende Klammer ist dabei wie gewöhnlich am Ende oder in einer
neuen Zeile, aber dann auf der selben Höhe wie das erste Zeichen der Zeile:

```python
def eine_funktion(arg_one, arg_two, arg_three, 
                    arg_four):
    return "Software-Challenge"

ergebnis = eine_funktion(
    "Hallo", "Welt", 
    "Wettbewerb", "Test123")

test = eine_funktion(
    "String1", "String2",
    "String3", "String4"
)

liste = [
    1, 2, 3,
    4, 5, 6
]
```

Es gäbe auch die Möglichkeit *Tab* für Einrückungen zu nutzen, wobei Leerzeichen
bevorzugt werden sollen.

### Whitespace

Als "Whitespace" werden z.B. Leerzeichen, Tab und leere Zeilen bezeichnet, also
Textteile in denen nichts steht.
Damit das Programm lesbarer wird, sollten diese unbedingt verwendet werden, aber
nur an den richtigen Stellen.

#### Leerzeichen

Leerzeichen werden in Ausdrücken verwendet, so wie es auch von der deutschen
Sprache bekannt ist. Das heißt, vor allem nach Kommas oder anderen "Satzzeichen" und
zwischen Operanden von Vergleichsoperationen und Rechenzeichen. \
Ausdrücklich **kein** extra Whitespace soll in diesen Situation verwendet werden:

-   Innerhalb Klammern, um den Inhalt von den Klammern zu trennen:

```python
# Richtig:
test(liste[1], {eintrag: 2})

# Falsch:
test( liste [ 1 ], { eintrag: 2 } )
```

-   *Vor* Kommas, Doppelpunkten und Semikolons:

```python
# Richtig:
if x == 4: print(x, y); x, y = y, x

# Falsch:
if x == 4 : print(x , y) ; x , y = y , x
```

-   Direkt vor Klammern eines Funktionsaufruf oder einem Listen-Indexing:

```python
# Richtig:
test(1)
buch["string"] = liste[0]

# Falsch:
test (1)
buch ["string"] = liste [0]
```

-   Viel Whitespace vor Variablenzuweisungen, um diese auf die selbe Höhe zu bringen:

```python
# Richtig:
x = 0
y = 1
lange_variable = 2

# Falsch:
x              = 0
y              = 1
lange_variable = 2
```

#### Leere Zeilen

Auch leere Zeilen können zur Übersicht beitragen, indem man wie in einem Fließtext gewisse
Teile von anderen inhaltlich trennt.

Funktionen und Klassen, die global definiert sind,
können gerne von zwei leeren Zeilen umgeben sein, um sie klar vom Rest zu trennen. 
Methoden, die in einer Klasse definiert sind, werden jedoch nur von einer Zeile getrennt.

Extra leere Zeilen können manchmal auch noch genutzt werden,
um Gruppen an zusammen gehörenden Funktionen besser von einander zu trennen.
Wenn eine Reihe von Ein-Zeilern zusammengehört, können leere Zeile hier gerne komplett
weggelassen werden.
Innerhalb von Funktionen können durch vereinzelte leere Zeilen ebenfalls logisch zusammenhängende
Abschnitte gekennzeichnet werden. 

### Zeilenlänge

Keine Zeile im Programm sollte eine Länge von 80 Zeichen überschreiten.
Das trägt auch zur Lesbarkeit bei. Früher war die Bildschirmbreite häufig
ein limitierender Faktor, heute kann man dafür in der Regel zwei verschiedene
Programmdateien nebeneinander offen haben, wobei natürlich keine Zeile
die Breite des Editors überschreiten sollte.

### Bezeichner

Bezeichner sind sozusagen Namen für Variablen, Funktionen, Klassen und vieles Weitere.
Um diesen Dingen Namen zu geben, gibt es viele verschiedene Styles und hier sind einmal
die wichtigsten aufgelistet:

- `b` (einzelne Kleinbuchstaben)
  
- `B` (einzelne Großbuchstaben)

- `klein` (Worte aus Kleinbuchstaben)

- `klein_mit_unterstrichen` (mehrere kleine Worte mit Unterstrichen getrennt - auch *snake_case* genannt)

- `GROSS` (Worte aus Großbuchstaben)

- `GROSS_MIT_UNTERSTRICHEN` (mehrere große Worte mit Unterstrichen getrennt)

- `GrosseAnfangsbuchstaben` (mehrere Worte mit großen Anfangsbuchstaben - auch *CamelCase* genannt)

Gewisse Buchstaben wie l (kleines el), I (großes Ih) oder O (großes Oh) sollten aus Gründen der
Verwechslungsgefahr nicht verwendet werden. Außerdem sind nur Zeichen aus dem
[ASCII Format](https://de.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange)
vorgesehen, das bedeutet insb. keine Umlaute und auch kein ß.

Wenn man das nun alles weiß, werden verschiedene Arten von Bezeichnern so benannt:

-   Funktionen und Variablen im snake_case Format
-   Klassen hingegen, überlicherweise im CamelCase
-   Konstanten, die man sich definiert, komplett groß geschrieben mit Unterstrichen

Außerdem ist es sehr sinnvoll den eigenen Bezeichnern richtige Namen zu geben,
die nicht, wie in der Mathematik üblich, nur aus einem Buchstaben bestehen,
sondern die Bedeutung des Objektes kurz erklären. Einzelne Buchstaben können jedoch
als Variable für Iteratoren verwendet werden:

```python
# Richtig:
liste_woerter = ["Software-Challenge", "Test"]
anzahl_buchstaben = 22

for w in liste_woerter:
    print(w)

# Falsch:
x = ["Software-Challenge", "Test"]
y = 22

for z in x:
    print(z)
```

### Kommentare

Zu guter Letzt sind Kommentare bei sauberer Programmierarbeit womöglich das wichtigste, um Code
verständlicher zu machen. Gleichzeitig bringen sie aber nur etwas, wenn diese auch korrekt verfasst sind:

-   Alle Kommentare beschreiben auch tatsächlich das, was passiert. Eine falsche Beschreibung ist
    noch schlimmer als gar keine. Bei Updates am Code sollten also auch die Kommentare angepasst werden.

-   Ein Kommentar besteht aus einem oder mehreren vollständigen Sätzen.
    Dazu gehört wie üblich vor allem Groß- & Kleinschreibung, das Benutzen von Satzzeichen
    und speziell in der Programmierung, dass Bezeichner **genau** so geschrieben sind, wie im Code.

-   Kommentare werden in der Regel als *Block-Kommentar* verfasst. Diese beziehen sich auf den folgenden
    Abschnitt des Codes und sind auf die selbe Höhe wie dieser eingerückt.

-   Kommentare können auch mit genug Abstand in die selbe Zeile hinter den Code geschrieben werden,
    auch wenn diese dort häufiger eher ablenkend und unnötig sind.

-   Um einen Kommentar zu beginnen, wird in Python das Zeichen `#` verwendet. Darauf folgt dann ein Leerzeichen
    und danach der Text, den man schreiben will.

-   Wenn man einen Kommentar schreibt ist außerdem darauf zu achten, dass nicht einfach das nacherzählt wird,
    was offensichtlich im Code passiert, sondern was der Teil des Progammes bewirkt.

Ein paar Beispiele zu Kommentaren:

```python
# Richtig:
# Lege eine 4x4 2-Dimensionale Liste an, die an jeder Stelle das Element 0 enthält.
# Diese stellt eine Karte des Spieles da.
karte = [[0] * 4 for i in range(4)]

# Falsch:
# mache eine Liste
karte = [[0] * 4 for i in range(4)]
```

```python
# Richtig:
x += 100        # Nutze eine höhere Gewichtung.

# Falsch:
x += 100        # erhöhe x
```
    