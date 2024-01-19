---
name: Computerspieler Anführungsumgebung
index: 10
---

# Ausführungsumgebung

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
