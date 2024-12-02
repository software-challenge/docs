---
name: Sauberer Programmierstil
index: 4
---

# Der saubere Programmierstil

Eventuell hat manche(r) schon erlebt, dass man von einer/m Bekannten ein
Stück Programmcode bekommen hat, den man gar nicht versteht. Oft
versteht man sogar nach einiger Zeit seine eigenen Codezeilen nicht
mehr. Meistens liegt das gar nicht an den komplizierten Algorithmen,
sondern an einem schlechten Programmierstil. Deshalb gibt es für alle
Programmiersprachen sog. Style Guides, also Regeln für den Aufbau von
Quelltexten.

Mit den *Java Code Conventions* stammt der bekannteste Style Guide für
Java von seinen Entwicklern. Dieser soll hier ein wenig näher gebracht
werden.

## Allgemeiner Dokumentaufbau

-   Keine Zeile sollte länger als 80 Zeichen sein. Gerade in Zeiten
    großer Breitbildschirme ist das wohl eine der schwierigsten Regeln
    überhaupt. Man muss aber davon ausgehen, dass nicht jeder, der den
    Code lesen will, auch einen ähnlich breiten Bildschirm hat. Außerdem
    ist meistens die Schriftgröße zum Drucken so eingestellt, dass
    höchstens 80 Zeichen in eine Zeile passen

-   In einer Klasse sollten immer als Erstes die globalen Variablen,
    dann die Konstruktoren und als Letztes die Methoden auftauchen

-   Klassennamen sollten im *CamelCase* geschrieben werden, also jedes
    Teilwort wird mit einem Großbuchstaben geschrieben (z.B.
    `GameHandler`)

-   Für Variablen- und Methodennamen wird der *lower CamelCase*
    verwendet, bei dem nur das erste Teilwort mit einem kleinen
    Buchstaben beginnt (z.B. `eigenerSpieler`)

-   Für Konstantenbezeichner werden ausschließlich große Buchstaben
    benutzt (z.B. `int ANZAHL_SPIELER = 2;`)

-   Jede Zeile sollte nur eine Anweisung enthalten.

## Klammerungsregeln

Grundsätzlich sollte jeder Schleifenrumpf und jede `if`-Anweisung
geklammert werden, auch wenn nur ein Befehl darin steht. Die öffnende
Klammer wird dabei ans Ende der Zeile geschrieben
(*Kernighan&Ritchie-Stil*, bzw. *K&R-Style*). Der Code im Rumpf wird
dabei eingerückt. Die schließende Klammer befindet sich in der ersten
Zeile, die nicht mehr eingerückt ist.

```java
    for (int i = 0; i < 110; i++) {
         x = x + 2;
         ...
    }
```

Bei einem if schreibt man das zugehörige `else` direkt hinter die
schließende Klammer:

```java
    if (bedingung) {
         ...
    } else {
         ...
    }
```

Mehrere geschachtelte `if`-Anweisungen werden zusammen geschmolzen:

```java
    if (bedingung) {
         ...
    } else if (begingung2) {
         ...
    } else if (bedingung3) {
         ...
    } else {
         ...
    }
```

## Die Switch-Anweisung

Bei einem `switch` sollte die folgende Form gewahrt werden:

```java
    switch (variable) {
    case 1 :
        ...
        /* fällt durch */
    case 2 :
        ...
        break;
    case 3 :
        ...
        break;
    default :
        ...
        break;
    }
```

Wenn nach einem `case`-Fall nicht aus dem `switch` herausgesprungen
wird, soll das durch einen Kommentar gekennzeichnet werden. Wenn ein
`default` benutzt wird, wird dieses als letzte Klausel geschrieben.