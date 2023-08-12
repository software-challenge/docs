---
name: Wettkampfmodalitäten
index: 2
---

# Wettkampfmodalitäten

Die Software-Challenge wird in drei Phasen ausgespielt.

## Die Meisterschaftsphase

In dieser ersten Phase (Anfang März bis Anfang April)
wird in Gruppen mit je ca. 20 Teams gespielt.

Die Meisterschaft ist in Spieltagen organisiert.
An jedem Spieltag hat jedes Team eine Begegnung mit einem anderen Team.
Bei einer ungeraden Teamanzahl in einer der Gruppen setzt an jedem Spieltag eines der Teams aus.

Vor Beginn des ersten Spieltages soll jedes Team einen funktionsfähigen
:t[Computerspieler]{#player} über das Online-Abgabesystem eingeschickt haben. Zwischen den
Spieltagen besteht die Möglichkeit, Clients ebenfalls über dieses System
zu aktualisieren. Über das Online-Abgabesystem werden auch die
Ergebnisse, Ranglisten etc. veröffentlicht.

Eine Begegnung gewinnt derjenige Spieler mit den meisten gewonnen
Spielen in dieser Begegnung. Bei gleich vielen Siegen endet die
Begegnung unentschieden. Eine gewonnene Begegnung zählt für die
Rangliste zwei Punkte, ein Unentschieden einen Punkt, eine verlorene
Begegnung null Punkte.

In der Rangliste wird als nachrangiges Kriterium ausschließlich die
Anzahl der Siegpunkte aus den bisherigen Spielen verwendet.
Wenn am Ende einer Meisterschaft zwei Teams denselben Platz belegen,
entscheidet das Los.

## Die Champions League

In diese zweite Phase (Mitte April bis Mitte Mai)
kommen die besten acht Teams einer jeden Gruppe aus der ersten Phase.
Die Champions League wird nach dem gleichen Schema wie eine Meisterschaft ausgespielt.

## Das Final Eight

An der dritten Phase, dem Final Eight, das im Juni in Kiel stattfindet,
nehmen die besten acht Mannschaften aus der Champions League teil.
Viertelfinale, Halbfinale, Kleines Finale (= Spiel um den 3. Platz)
und Finale werden im K.O.-System gespielt.

Anders als bei den vorherigen Phasen kann es beim Final Eight keine Begegnung geben,
die Unentschieden endet.
Haben beide Teams in einer Begegnung gleich viele Siege errungen,
wird als nachrangiges Kriterium ausschließlich die Anzahl der am Spielende erreichten Punkte berücksichtigt,
um den Sieger einer Begegnung zu ermitteln.

Im Übrigen gelten beim Final Eight die bekannten Regeln der beiden vorherigen Phasen.
Es wird dabei auch dieselbe Hardware eingesetzt.

## Die Begegnungen

Jede Begegnung besteht aus jeweils sechs Spielen,
wobei das Recht des ersten Zuges abwechselt.

Die Zugzeit ist für jeden Zug auf zwei Sekunden begrenzt.
Dabei gilt für die Rechenzeit die im Institut verwendete Hardware als Referenz.
Jeder :t[Computerspieler]{#player} wird dabei auf einer eigenen virtuellen Maschine
mit unten stehenden Spezifikationen ausgeführt.

Sollte ein Spieler einen ungültigen Zug setzen oder die maximale Zugzeit überschreiten,
so hat dieser Spieler verloren.
In allen anderen Fällen wird das Spiel gemäß der Spielregeln zu Ende gespielt
und der Gewinner ermittelt.

## Die Probespieltage

Anfang März, unmittelbar vor der ersten Phase,
finden Probespieltage statt,
die den reibungslosen Ablauf der Meisterschaft gewährleisten sollen.

## Technische Daten für die Ausführung der Computerspieler

Bei allen im :t[Wettkampfsystem]{#contest} ausgetragenen Spielen
laufen die :t[Computerspieler]{#player} auf den Servern des Wettkampfsystems.

|                  |                                                   |
|------------------|---------------------------------------------------|
| Betriebssystem:  | 64 Bit Linux                                      |
| Prozessor:       | Ein Kern von einem [Intel Xeon E5-2620 v4, 2,1 GHz](https://ark.intel.com/de/products/92986/Intel-Xeon-Processor-E5-2620-v4-20M-Cache-2_10-GHz) |
| Arbeitsspeicher: | 1,5 GB                                            |

### Log-Ausgabe

Die :t[Computerspieler]{#player} laufen im :t[Wettkampfsystem]{#contest} ohne eine grafische Oberfläche,
sie können also keine Fenster oder ähnliches anzeigen.
Der Versuch eines Computerspielers, so etwas trotzdem zu tun,
wird wahrscheinlich zum Absturz des Computerspielers führen.

Die :t[Computerspieler]{#player} können jedoch Text auf die beiden
Standard-Ausgabedatenströme "stdout" und "stderr" schreiben.
Diese Ausgaben finden sich dann in den Log-Dateien wieder,
die nach Beenden eines Spiels über das :t[Wettkampfsystem]{#contest} verfügbar sind.

### Lesen von Daten

Zugriff auf das Internet ist nicht möglich.
Schreiben auf die Festplatte ist möglich,
es kann jedoch nicht auf Daten, die in früheren Spielen geschrieben wurden,
zugegriffen werden.

### Weitere Ausführungsumgebung

Der :t[Computerspieler]{#player} wird in einem Docker container ausgeführt,
welcher die verfügbaren Bibliotheken und Programme bestimmt.
Die verfügbaren Container-Vorlagen sind im Wettkampfsystem einsehbar,
unter anderem:

| Bezeichnung        | Image-Name                                                                                   | Beschreibung                                                                                                               |
| ------------------ | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Java 11             | [openjdk:11-ea-jre](https://hub.docker.com/_/openjdk/)                                       | Open Source Java Platform, Standard Edition, Version 1.8.0. Für alle :t[Computerspieler]{#player} auf Basis des Java Zufallsspielers.     |
| Ruby 2             | [ruby:2.4.2](https://hub.docker.com/_/ruby/) mit installiertem Software-Challenge-Computerspieler-Gem | Ruby Interpreter, Version 2.4.2. Für alle :t[Computerspieler]{#player} auf Basis des Ruby Zufallsspielers.                                |
| Python 3           | [python:3.6.3](https://hub.docker.com/_/python/)                                             | Python Interpreter, Version 3.6.3. Für selbst entwickelte :t[Computerspieler]{#player} in Python.                                       |
| Mono 5.4 (C# .NET) | [mono:5.4.1.6](https://hub.docker.com/_/mono/)                                               | Mono Laufzeitumgebung, Version 5.4.1.6. Für selbst entwickelte :t[Computerspieler]{#player} basierend auf dem Microsoft .NET Framework. |

Wenn Ihr :t[Computerspieler]{#player} eine speziellere Umgebung benötigt
(zum Beispiel ein hier nicht angebotener Interpreter),
nehmen Sie bitte mit uns Kontakt auf (<tech@software-challenge.de>).
Wir stellen gern weitere Images zur Verfügung.
