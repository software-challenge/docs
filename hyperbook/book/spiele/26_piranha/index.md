---
name: Piranhas
expanded: true
---

Das Spielfeld ist ein Aquarium (10x10 Schachbrett mit Spalten A-J und
Zeilen 0-9), ein Spieler spielt die roten, der andere die blauen Fische.
Die Fische haben eunterschiedliche Gewichte und zwar 1, 2 oder 3.


# Ziel des Spieles

Alle Fische der eigenen Farbe sollen zu einem Schwarm verbunden werden,
sie sollen also auf einem zusammenhängenden Gebiet auf dem Spielfeld
stehen, wobei senkrecht, waagerecht und diagonal nebeneinanderliegende
Felder als zusammenhängend gelten.


# Anfangsaufstellung

-   8 rote Fische auf den (Schachbrett-)Feldern A1-A8

-   8 rote Fische auf den Feldern J1-J8

-   8 blaue Fische auf den Feldern B0-I0

-   8 blaue Fische auf den Feldern B9-I9

Jeder Spieler hat zu Beginn 6 bis 10 1er, 3 bis 7 2er und 1 bis 5 3er Fische
an zufällig gewählten Positionen.

Auf dem Spielfeld gibt es im inneren 6x6-Bereich zwei zufällig
generierte Kraken-Felder, die zwar durchschwommen werden können, auf
denen jedoch kein Zug enden darf. Diese Felder behindern also die
Schwarmbildung. Die beiden zufällig generierten Felder befinden sich
weder in derselben Zeile noch in derselben Spalte, noch in derselben
Diagonale. 

Um die Fairness zu gewährleisten, werden jeweils 2 Spiele mit gleicher 
Anfangsverteilung von Fischen und Kraken nacheinander gespielt,
wobei jeder Spieler einmal mit rot und einmal mit blau spielt.


# Züge

Es wird abwechselnd gezogen, wobei Rot beginnt. Jede Runde macht jeder
Spieler einen Zug. In jedem Zug muss man einen eigenen Fisch auf einer
senkrechten, waagerechten oder diagonalen Linie genauso viele Felder in
eine Richtung bewegen, wie insgesamt Fische (beider Farben) auf dieser
Linie sind.

Dabei muss man auf einem leeren Feld oder auf einem vom Gegner besetzten
Feld landen. Beim Zug darf man Felder mit eigenen Fischen sowie Kraken
überspringen, nicht aber Felder mit gegnerischen Fischen. Sollte ein
gegnerischer Fisch im Weg sein, ist der entsprechende Zug ungültig. Bei
der Anzahl der zu ziehenden Felder werden übersprungene Felder
mitgezählt. Wenn man auf einem Feld ankommt, auf dem ein gegnerischer
Fisch schwimmt, wird dieser gefressen (ersatzlos vom Spielfeld
entfernt).

Zum Beispiel kann Rot im 1. Zug einen beliebigen roten Fisch zwei Felder
in Richtung der Spielfeldmitte bewegen, z.B. von A4 nach C4. Eine andere
Möglichkeit für den 1. Zug wäre, einen Fisch von A1 nach A9 zu ziehen.
Man könnte auch mit dem Fisch auf A2 den gegnerischen Fisch auf C0
fressen.

# Spielende

Das Spiel endet, wenn am Ende einer Runde alle auf dem Spielfeld
verbliebenen Fische einer Farbe zu einem einzigen zusammenhängenden
Schwarm verbunden sind, spätestens jedoch nach 30 Runden. (Blau könnte
also einen roten Schwarm noch in der 2. Hälfte einer Runde wieder
zerstören.) Das Spiel endet ebenfalls, wenn einer der Spieler keinen
regulären Zug machen kann. In diesem Fall hat dieser Spieler verloren.

# Gewinner

Der Spieler gewinnt, der am Ende des Spiels den schwersten zusammenhängenden Schwarm besitzt, 
wobei es sich auch um einen Teilschwarm handeln kann.
Dafür wird für jeden Schwarm jeweils die Summe der Gewichte aller Fische 
in dem Schwarm gebildet. Ist der schwerste Schwarm von Rot genauso schwer,
wie der schwerste Schwarm von Blau, gewinnt der Spieler, der während des
Spiels zuerst einen Schwarm (kein Teilschwarm) gebildet hat, unabhängig davon,
ob es ein eigener oder der des Gegners ist. Falls dies auch nicht der der Fall ist,
gibt es ein Unentschieden.

Als Beispiel für diese Regel:

-   Der 1. Spieler (rot) vereint alle seine Fische zu einem Schwarm. 
    Dieser Schwarm wird von dem 2. Spieler (blau) in seinem Zug wieder geteilt.
    Die Runde ist also nicht beendet (außer es war Runde 30) und bei einem Gleichstand,
    würde rot gewinnen, da durch ihn in einer Runde ein Schwarm entstanden ist.

-   Rot schlägt einen blauen Fisch und somit sind alle blauen Fische in einem Schwarm.
    Blau muss jedoch noch einen Zug machen und dadurch wird sein Schwarm wieder geteielt.
    Die Runde ist also nicht beendet (außer es war Runde 30) und bei einem Gleichstand,
    würde rot gewinnen, da durch ihn in einer Runde ein Schwarm entstanden ist.
    (Egal ob es ein Schwarm seiner Farbe oder der des Gegners ist)


Beim Final Eight gibt es kein nachrangiges Kriterium. Beim Final Eight
gewinnt derjenige Spieler eine Begegnung, der nach einer geraden Anzahl
von Spielen (mindestens 6) mehr Spiele als der Gegner gewonnen hat.
