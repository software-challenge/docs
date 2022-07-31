[PDF-Version dieses Dokumentes](regeln.pdf)

Wir freuen uns über sämtliche Verbesserungsvorschläge.  
Die Dokumentation kann [direkt auf
GitHub](https://github.com/software-challenge/docs) editiert werden,
einzige Voraussetzung ist eine kostenlose Registrierung bei GitHub. Ist
man angemeldet, kann man ein Dokument auswählen (ein guter Startpunkt
ist die Datei
[index.md](https://github.com/software-challenge/docs/blob/main/index.md)
welche Verweise auf alle Sektionen der Dokumentation enthält) und dann
auf den Stift oben rechts klicken. Damit wird von GitHub automatisch ein
Fork und ein Pull Request erstellt.  
Alternativ auch gern eine E-Mail an <info@software-challenge.de> oder
eine Nachricht im [Discord](https://discord.gg/jhyF7EU).

Das Spielfeld ist ein Aquarium (10x10 Schachbrett mit Spalten A-J und
Zeilen 0-9), ein Spieler spielt die roten, der andere die blauen Fische.

# Anfangsaufstellung

-   8 rote Fische auf den (Schachbrett-)Feldern A1-A8

-   8 rote Fische auf den Feldern J1-J8

-   8 blaue Fische auf den Feldern B0-I0

-   8 blaue Fische auf den Feldern B9-I9

Auf dem Spielfeld gibt es im inneren 6x6-Bereich zwei zufällig
generierte Kraken-Felder, die zwar durchschwommen werden können, auf
denen jedoch kein Zug enden darf. Diese Felder behindern also die
Schwarmbildung. Die beiden zufällig generierten Felder befinden sich
weder in derselben Zeile noch in derselben Spalte, noch in derselben
Diagonale.

# Ziel des Spieles

Alle Fische der eigenen Farbe sollen zu einem Schwarm verbunden werden,
sie sollen also auf einem zusammenhängenden Gebiet auf dem Spielfeld
stehen, wobei senkrecht, waagerecht und diagonal nebeneinanderliegende
Felder als zusammenhängend gelten.

# Züge

Es wird abwechselnd gezogen, wobei Rot beginnt. Jede Runde macht jeder
Spieler einen Zug. In jedem Zug muss man einen eigenen Fisch auf einer
senkrechten, waagerechten oder diagonalen Linie genau so viele Felder in
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

Falls beim Spielende die Fische nur eines Spielers zu einem einzigen
zusammenhängenden Schwarm verbunden sind, hat dieser Spieler gewonnen;
anderenfalls derjenige Spieler mit dem größeren Schwarm. Falls nach den
vorgenannten Kriterien kein Gewinner ermittelt werden kann, endet das
Spiel unentschieden.

Nachrangiges Kriterium für das Ranking im Wettkampfsystem: Anzahl der
Fische im größten Schwarm des Spielers.

Beim Final Eight gibt es kein nachrangiges Kriterium. Beim Final Eight
gewinnt derjenige Spieler eine Begegnung, der nach einer geraden Anzahl
von Spielen (mindestens 6) mehr Spiele als der Gegner gewonnen hat.
