---
name: Computerspieler abgabefertig machen
index: 9
---

# Computerspieler abgabefertig machen

Damit das :t[Wettkampfsystem]{#contest} mit dem :t[Computerspieler]{#player} arbeiten kann,
muss er als ausführbares Programm in ein ZIP-Archiv verpackt werden.

Je nach Programmiersprache, in der der Spieler entwickelt wurde,
sind unterschiedliche Schritte notwendig.

:::alert{info}
In der Regel enthält die Spielervorlage alle nötigen Instruktionen zum Packen.
:::

### Offizielle Spielervorlagen
- [Java](https://github.com/software-challenge/backend/blob/main/player/configuration/README.md)
- [Ruby](https://github.com/software-challenge/client-ruby/blob/main/README.md)

### Inoffizielle Spielervorlagen
- [C#](https://github.com/jnccd/socha-client-csharp/blob/master/README.md)
- [C++](https://github.com/Estugon/sc-penguins-cpp/blob/main/README.md)
- [Python](https://github.com/FalconsSky/socha-python-client/blob/master/README.md)
- [Rust](https://github.com/fwcd/socha-client-rust-2023/blob/main/README.md)
- [Swift](https://github.com/matthesjh/sc23-swift-client/blob/main/README.md)

Das Hochladen des Spielers im Wettkampfsystem wird detailliert 
unter :t[Wettkampfsystem->Computerspieler]{#contest.computerspieler} beschrieben.

## Andere Programmiersprache

Bei Computerspielern in einer anderen Programmiersprache 
muss das ZIP-Archiv ein Shell-Script 
mit genauen Instruktionen zum Start des Computerspielers enthalten.
Dieses muss nach dem Hochladen im Wettkampfystem 
als Hauptdatei ausgewählt werden.

Beachten Sie hierbei, dass diesem Script vom Wettkampfsystem Parameter übergeben werden,
die an Ihr Programm weitergegeben werden müssen.
Diese Parameter sind mindestens Host und Port des Spielservers 
sowie die Reservierungsnummer des Spiels, dem der Computerspieler beitreten soll.
Ein Aufruf sieht also in etwa wie folgt aus
(falls `start.sh` als Hauptdatei eingestellt ist):

    start.sh -h gameserver -p 13050 -r 590e5e6f-cf93-488e-a12d-5c194ecf95c2

Die Parameter folgen dabei den 
[GNU Getopt Konventionen](https://www.gnu.org/software/libc/manual/html_node/Argument-Syntax.html#Argument-Syntax).
Das heißt, die drei Parameter können in beliebiger Reihenfolge 
und als kurze oder lange Version übergeben werden.
Folgende Variante muss also auch von Ihrem Programm korrekt verarbeitet werden können:

    start.sh --reservation 590e5e6f-cf93-488e-a12d-5c194ecf95c2 --host gameserver --port 13050

Auch die grafische Oberfläche ruft Ihr Programm mit diesen Parametern auf.
Ihr Programm wird also nur von der grafischen Oberfläche richtig gestartet,
wenn es die Parameter richtig verarbeitet.

Für die meisten Programmiersprachen gibt es Bibliotheken,
die die Kommandozeilenparameter nach diesem Schema verarbeiten können,
Sie müssen diese Funktion also nicht unbedingt selbst implementieren.

Weiterhin ist es wichtig, den Interpreter in der ersten Zeile des Script anzugeben, 
da das Script nicht von einer Shell aufgerufen wird.
Ein `start.sh` Script sieht also in etwa so aus:

    #!/bin/sh
    chmod +x hauptprogramm_dateiname
    ./hauptprogramm_dateiname "$@"

-   Script soll von `/bin/sh` interpretiert werden, es ist also ein einfaches Shell-Script.
-   Die Binärdatei wird ausführbar gemacht (das ist nötig, da in einem ZIP-Archiv das Ausführbar-Attribut nicht gespeichert wird).
-   Die Binärdatei wird aufgerufen und alle Parameter, die das Script bekommen hat, werden weitergereicht (`"$@"`).

Die `start.sh` muss in UTF-8 und mit UNIX(LF) Zeilenenden kodiert sein.
Andere Kodierungen führen zu Fehlern bei der Ausführung auf dem Server.
In Notepad++ kann die Kodierung einfach in dem Tab `Kodierung` angepasst werden,
die Zeilenenden in `Bearbeiten > Format Zeilenende`.

Bei kompilierten Sprachen müssen die :t[Computerspieler]{#player} für 64bit Linux kompiliert werden,
bei interpretierten Sprachen muss ein passender Interpreter auf dem :t[Wettkampfsystem]{#contest} vorhanden sein.
Weiterhin müssen Abhängigkeiten wie z.B. genutzte Bibliotheken vorhanden sein
oder mitgeliefert werden.

## Technische Daten für die Ausführung der Computerspieler

Bei allen im :t[Wettkampfsystem]{#contest} ausgetragenen Spielen
laufen die :t[Computerspieler]{#player} auf den Servern des Wettkampfsystems.

|                  |                                                   |
|------------------|---------------------------------------------------|
| Betriebssystem:  | 64 Bit Linux                                      |
| Prozessor:       | Ein Thread eines [Intel Xeon E5-2620 v4, 2,1 GHz](https://ark.intel.com/de/products/92986/Intel-Xeon-Processor-E5-2620-v4-20M-Cache-2_10-GHz) |
| Arbeitsspeicher: | 1,5 GB                                            |

### Die Begegnungen

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

### Ausführungsumgebung

Der :t[Computerspieler]{#player} wird in einem Docker container ausgeführt,
welcher die verfügbaren Bibliotheken und Programme bestimmt.
Die verfügbaren Container-Vorlagen sind im Wettkampfsystem einsehbar,
und bieten unter anderem Java, Python, Ruby, Node.js, Swift, .NET, C++ Boost, Tensorflow
oft in mehreren Versionen.

| Bezeichnung        | Image-Name                                                                                   | Beschreibung                                                                                                               |
| ------------------ | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Java 17            | [openjdk:17](https://hub.docker.com/_/openjdk/)                                              | Open Source Java Platform, Standard Edition, Version 17 (bzw. 1.17). Für alle :t[Computerspieler]{#player} auf Basis des Java Zufallsspielers.     |
| Java 8             | [openjdk:8u151-jre](https://hub.docker.com/_/openjdk/)                                       | Open Source Java Platform, Standard Edition, Version 1.8.        |
| Java 18            | [openjdk:18](https://hub.docker.com/_/openjdk/)                                              | Open Source Java Platform, Standard Edition, Version 18 (bzw. 1.18)     |
| Ruby 2             | [ruby:2.7.5](https://hub.docker.com/_/ruby/) | Ruby Interpreter, Version 2.7.5 mit installiertem Software-Challenge-Gem. Für alle :t[Computerspieler]{#player} auf Basis des Ruby Zufallsspielers.                                |
| Python 3           | [python:3.10.1](https://hub.docker.com/_/python/)                                             | Python Interpreter, Version 3.10.1. Für selbst entwickelte :t[Computerspieler]{#player} in Python.                                       |
| .NET Runtime | [	mcr.microsoft.com/dotnet/runtime:6.0](https://hub.docker.com/_/microsoft-dotnet-runtime/)                                               | Offizielle Microsoft .NET Laufzeitumgebung, Version 6.0. Für selbst entwickelte :t[Computerspieler]{#player} basierend auf dem Microsoft .NET Framework. |
| Mono 5.4 (C# .NET) | [mono:6.12.0](https://hub.docker.com/_/mono/)                                               | Mono Laufzeitumgebung, Version 6.12.0. Für selbst entwickelte :t[Computerspieler]{#player} basierend auf dem Microsoft .NET Framework. |
| Swift 5.5.1 | [swift:5.5.1](https://hub.docker.com/_/swift/)                                               | Swift (core libraries), Version 5.1.3. Für selbst entwickelte :t[Computerspieler]{#player} in der Programmiersprache Swift. |
| Node.js 17.2.0 | [node:17.2.0](https://hub.docker.com/_/node/)                                               | Node.js, Version 17.2.0. Für selbst entwickelte :t[Computerspieler]{#player} in der Programmiersprache Javascript. |
| C++ Boost Library | cpp-boost basierend auf [ubuntu:20.04](https://hub.docker.com/_/ubuntu/)                                               | Container mit vorinstallierten C++ Boost Bibliotheken (libboost-program-options1.71.0, libboost-atomic1.71.0, libboost-system1.71.0) |
| Deep Learning | [floydhub/dl-docker](https://hub.docker.com/r/floydhub/dl-docker)                                               | Image mit Bibliotheken für diverse deep learning Ansätze (TensorFlow, Caffe, Theano, Keras, Lasagne und Torch). **Bitte das Wettkampfsystem nicht zum trainieren verwenden.** Das Image soll nur verhindern, dass die für den Betrieb des fertig trainierten Clients notwendigen Bibliotheken jedesmal mit hochgeladen werden müssen. |
| Python Tensorflow | [sc-tensorflow](https://github.com/software-challenge/client-docker-images/blob/master/tensorflow/Dockerfile)                                               | Python 3 mit Tensorflow Bibliotheken. **Bitte das Wettkampfsystem nicht zum trainieren verwenden.** Das Image soll nur verhindern, dass die für den Betrieb des fertig trainierten Clients notwendigen Bibliotheken jedesmal mit hochgeladen werden müssen. |
| PyPy | [pypy:3.9](https://hub.docker.com/_/pypy)                                               | PyPy is a fast, compliant alternative implementation of the Python language. Version 3.9 |

Wenn Ihr :t[Computerspieler]{#player} eine speziellere Umgebung benötigt
(zum Beispiel ein hier nicht angebotener Interpreter),
nehmen Sie bitte mit uns Kontakt auf (<tech@software-challenge.de>).
Wir stellen gern weitere Images zur Verfügung.
