---
name: Spielmodalitäten im Wettkampfsystem
index: 10
---

# Technische Daten für die Ausführung der Computerspieler

Bei allen im :t[Wettkampfsystem]{#contest} ausgetragenen Spielen
laufen die :t[Computerspieler]{#player} auf den Servern des Wettkampfsystems.

|                  |                                                   |
|------------------|---------------------------------------------------|
| Betriebssystem:  | 64 Bit Linux                                      |
| Prozessor:       | Ein Kern von einem [Intel Xeon E5-2620 v4, 2,1 GHz](https://ark.intel.com/de/products/92986/Intel-Xeon-Processor-E5-2620-v4-20M-Cache-2_10-GHz) |
| Arbeitsspeicher: | 1,5 GB                                            |

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

## Log-Ausgabe

Die :t[Computerspieler]{#player} laufen im :t[Wettkampfsystem]{#contest} ohne eine grafische Oberfläche,
sie können also keine Fenster oder ähnliches anzeigen.
Der Versuch eines Computerspielers, so etwas trotzdem zu tun,
wird wahrscheinlich zum Absturz des Computerspielers führen.

Die :t[Computerspieler]{#player} können jedoch Text auf die beiden
Standard-Ausgabedatenströme "stdout" und "stderr" schreiben.
Diese Ausgaben finden sich dann in den Log-Dateien wieder,
die nach Beenden eines Spiels über das :t[Wettkampfsystem]{#contest} verfügbar sind.

## Lesen von Daten

Zugriff auf das Internet ist nicht möglich.
Schreiben auf die Festplatte ist möglich,
es kann jedoch nicht auf Daten, die in früheren Spielen geschrieben wurden,
zugegriffen werden.

## Ausführungsumgebung

Der :t[Computerspieler]{#player} wird in einem Docker container ausgeführt,
welcher die verfügbaren Bibliotheken und Programme bestimmt.
Die verfügbaren Container-Vorlagen sind im Wettkampfsystem einsehbar,
und bieten unter anderem Java, Python, Ruby, Node.js, Swift, .NET, C++ Boost, Tensorflow
oft in mehreren Versionen.

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
