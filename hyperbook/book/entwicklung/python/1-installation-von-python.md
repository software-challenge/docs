---
name: Installation von Python
index: 1
---

# Installation von Python

Um einen Computerspieler für die Software-Challenge in Python entwickeln zu können,
müssen einige Vorraussetzungen erfüllt sein.
Diese Anleitung soll die Vorbereitung und Installation erleichtern.

## Grundsätzliches

Wir bieten die Abgabe eines Python Computerspieler in den Python-Versionen 3.10.x und 3.12.x an
(dabei steht x für eine beliebige Unterversion).

In den folgenden Abschnitten wird hauptsächlich die neuere Version 3.12.x gezeigt, aber wenn bei gewissen Befehlen
`312` oder `3.12` verwendet wird, kann analog für Version 3.10.x auch `310` bzw `3.10` verwendet werden.
Wenn es größere Unterschiede zwischen den Versionen gibt, wird das detailliert erklärt.

## Installation

Der Download des Python-Installers geschieht über die offizielle Seite der
[Python Organisation](https://www.python.org/downloads/).
Dort kann man weiter unten in einer Tabelle die neueste Unterversion von Python 3.12 heraussuchen
und diese herunterladen.

![Beispiel für Download](/images/python/download.png)

Man wählt dann auf der Download-Seite den Installer für das eigene System und führt diesen nach dem Download aus.
Im (Windows-)Installer hat man dann die Möglichkeit python.exe zu den Umgebungsvariablen (PATH) hinzuzufügen,
was zu empfehlen ist. Dann kann man die einfache Installation starten.
Dabei wird auch der Paket-Manager pip installiert, welcher in Zukunft noch gebraucht wird.

### Überprüfung

Nach der Installation kann man mit dem Terminal überprüfen, ob die Installation erfolgreich war.
Dafür fragt man die Versionen der Programme Python und pip mit folgenden Befehlen ab:

```bash
python --version
```

```bash
pip --version
```

Bei Python sollte die ausgewählte Version ausgegeben werden und für pip müsste irgendeine Version vorhanden sein,
die mit einem Dateipfad auf den Ordner der installierten Python-Version verweist.

Wenn das geklappt hat, ist man bereit für den nächsten Step.

### socha-Paket

Um nun auf die bereitgestellte Schnittstelle für einen Python Computerspieler zugreifen zu können,
muss das entsprechende Paket mit Hilfe von pip und folgendem Befehl über ein Terminal installiert werden:

```bash
pip install socha
```

Dabei sollte automatisch die neueste Version verwendet werden,
welche in der Release Übersicht des offiziellen [Github-Repository](https://github.com/software-challenge/player-python/)
zur Python Schnittstelle gefunden werden kann:

![Release Übersicht](/images/python/socha-releases.png)

Falls nicht die aktuelleste Version installiert wurde, kann man den Befehl auch erweitern,
um eine spezielle Version auszuwählen (natürlich Version entsprechend anpassen):

```bash
pip install socha==3.6.2
```