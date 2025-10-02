---
name: Spielregeln
index: 1
permaid: current_game_start
prev: /grundlagen/contest
next: /entwicklung
---

# Spielregeln "Piranhas" für die Software-Challenge 2026

Das Spielfeld ist ein Aquarium, 
ein 10x10 Schachbrett mit den Spalten A-J und Zeilen 0-9.
Ein Spieler spielt die roten, der andere die blauen Fische.

# Ziel des Spieles

Alle Fische der eigenen Farbe sollen zu einem Schwarm verbunden werden,
sich also auf einem zusammenhängenden Gebiet im Aquarium befinden.
Dabei gelten senkrecht, waagerecht und diagonal nebeneinanderliegende Felder als zusammenhängend.

# Anfangsaufstellung

Die Fische des roten Spielers beginnen links und rechts,
die des blauen oben und unten, genauer gesagt:

-   8 rote Fische auf den Feldern A1-A8
-   8 rote Fische auf den Feldern J1-J8
-   8 blaue Fische auf den Feldern B0-I0
-   8 blaue Fische auf den Feldern B9-I9

Beide Spieler starten mit einer symmetrischen Fischaufstellung
aus Fischen der Wertigkeit 1-3,
wobei es tendenziell mehr kleine als große Fische gibt.

Im inneren 6x6-Bereich befinden sich zwei zufällig generierte Kraken-Felder, 
die zwar durchschwommen werden können, auf denen jedoch kein Zug enden darf.
Diese Felder behindern also die Schwarmbildung.
Die beiden Kraken teilen keine Zeile, Spalte oder Diagonale miteinander.

![Spielfeld](/images/spiele/piranha/Piranha_Spielfeld.jpg)

# Züge

Es wird abwechselnd gezogen, wobei Rot beginnt. 
Jede Runde macht jeder Spieler einen Zug.
In jedem Zug bewegt man einen eigenen Fisch 
auf einer senkrechten, waagerechten oder diagonalen Linie 
genauso viele Felder in eine Richtung,
wie insgesamt Fische (beider Farben) auf dieser Linie sind.

Dabei muss man auf einem leeren Feld oder auf einem vom Gegner besetzten Feld landen.
Beim Zug darf man Felder mit eigenen Fischen sowie Kraken überspringen,
nicht aber Felder mit gegnerischen Fischen.
Sollte ein gegnerischer Fisch im Weg sein, ist der entsprechende Zug ungültig.
Bei der Anzahl der zu ziehenden Felder werden übersprungene Felder mitgezählt.
Wenn man auf einem Feld ankommt, auf dem ein gegnerischer Fisch schwimmt,
wird dieser gefressen (ersatzlos vom Spielfeld entfernt).

Zum Beispiel kann Rot im 1. Zug einen beliebigen roten Fisch zwei Felder
in Richtung der Spielfeldmitte bewegen, z.B. von A4 nach C4.
Eine andere Möglichkeit für den 1. Zug wäre, einen Fisch von A1 nach A9 zu ziehen.
Man könnte auch mit dem Fisch auf A2 den gegnerischen Fisch auf C0 fressen.

![Zugweite](/images/spiele/piranha/Piranha_Zugweite.jpg)

# Spielende

Das Spiel endet, wenn am Ende einer Runde
(Blau könnte also einen roten Schwarm noch in der 2. Hälfte einer Runde wieder zerstören)
alle auf dem Spielfeld verbliebenen Fische einer Farbe 
zu einem einzigen zusammenhängenden Schwarm verbunden sind,
spätestens jedoch nach 30 Runden.
Das Spiel endet ebenfalls, wenn einer der Spieler keinen regulären Zug machen kann.
In diesem Fall hat dieser Spieler verloren.

![Spielende](/images/spiele/piranha/Piranha_Ende_Schwarm.jpg)

# Gewinner

Der Spieler gewinnt, 
der am Ende des Spiels den schwersten zusammenhängenden Schwarm besitzt, 
wobei es sich auch um einen Teilschwarm handeln kann (Gewichtskriterium).
Dafür wird für jeden Schwarm jeweils die Summe der Gewichte aller Fische in dem Schwarm gebildet.
Ist der schwerste Schwarm von Rot genauso schwer,
wie der schwerste Schwarm von Blau, 
gewinnt der Spieler, der während des Spiels zuerst einen Schwarm (kein Teilschwarm) gebildet hat, 
unabhängig davon, ob es ein eigener oder der des Gegners ist.
Falls dies auch nicht der Fall ist, gibt es ein Unentschieden.

Ein Beispiel:
Durch einen Zug von Rot (Spieler 1) entsteht erstmals eine Situation,
in der alle Fische eines Spielers (egal ob Rot oder Blau) zu einem einzigen Schwarm verbunden sind
(indem Rot alle eigenen Fische vereint oder einen abseits befindlichen blauen Fisch frisst).
Blau (Spieler 2) muss jedoch noch einen Zug machen und teilt den Schwarm dadurch wieder
(weil es einen Fisch aus dem eigenen Schwarm entfernen muss oder einen roten Fisch aus der Mitte des Schwarms frisst).
Das Spiel ist also nicht beendet (außer es war Runde 30).
Liefert am Ende des Spiels das Gewichtskriterium keinen Gewinner,
gewinnt Rot, da Rot erstmals eine Situation herbeigeführt hat,
in der alle Fische eines Spielers zu einem Schwarm verbunden sind.

Während der Meisterschaft und der Champions League geht für beide Spieler das Gewicht des jeweils schwersten Schwarms als nachrangiges Kriterium in die Rangliste ein.
Beim Final Eight gibt es dieses nachrangige Kriterium für die Rangliste nicht.
Beim Final Eight gewinnt derjenige Spieler eine Begegnung,
der nach einer geraden Anzahl von Spielen (mindestens 6) 
mehr Spiele als der Gegner gewonnen hat.
