---
name: Spieler für den Wettbewerb abgeben
index: 7
---

# Spieler für den Wettbewerb abgeben

Damit das selbstentworfene Programm auf dem Wettkampfserver hochgeladen
und ausgeführt werden kann, um gegen andere Teams anzutreten,
müssen ein paar Vorbereitungen getroffen werden, die hier erklärt werden.

## Computerspieler packen

Wie [hier](/entwicklung/abgabe.md) erklärt ist, wird jeder Spieler in einem
Docker Container ausgeführt, weshalb er keinen Zugriff zum Internet hat.
Das bedeutet speziell für einen Python Spieler, dass alle benutzten
Module und Pakete heruntergeladen und zusammen mit dem Quellcode
vom Spieler abgegeben werden müssen.
Außerdem muss dann eine Start-Datei vorhanden sein, damit der Server
den Bot ausführen kann.

### Automatisch packen

Dieser relativ aufwendige Prozess kann durch eine Funktion der Schnittstelle
beschleunigt werden, so dass man sofort einen zip-Ordner erhält, der bereit für
den Upload ist.

Zuerst muss man selbst eine Datei namens `requirements.txt` erstellen, die alle
Abhängigkeiten auflistet, die der Spieler braucht und heruntergeladen werden müssen.
Jeder Bot benötigt natürlich `socha` in der entsprechenden Version.
Außerdem muss `setuptools` in der Version 58.1.0 für Python 3.10 bzw. 75.8.0 für Python
3.12 hinzugefügt werden.
Alle Pakete kommen mit der Syntax `<paket>==<version>` in jeweils eine Zeile.
Diese Requirementsdatei muss im selben Verzeichnis wie die Pythondatei liegen.

Der Befehl im Terminal, der das Packen dann auslöst, ist:

`python <skript>.py --build --directory <order_name> --architecture <architektur> --python-version <3.xx>`

Ersetze
- `<skript>` mit der Bezeichnung der Computerspielerdatei
- `<order_name>` mit dem Namen, wie der Spieler nach dem Packen heißen soll.
- `<architektur>` mit der System Architektur, für die gepackt werden soll.
  Für das Wettkampfsystem handelt es sich um `manylinux2014_x86_64`.
- `<3.xx>` mit der Pythonversion, in welcher der Spieler geschrieben ist.
  Entweder 3.10 oder 3.12.

Wenn das Programm fertig ist, wird ein Ordner `socha_builds` erstellt, in dem
für jedes Packen ein Ordner mit Timestamp erzeugt wird. Die zip-Datei darin
ist der fertige Spieler für den Upload.

### Manuell packen

Der Spieler kann auch manuell gepackt werden, was aber mit deutlich mehr Aufwand verbunden ist und
mit der automatischen Packfunktion keinen richtigen Sinn mehr hat.

Wer sich dafür trotzdem interessiert, kann sich die
[Readme](https://github.com/software-challenge/player_python/blob/master/README.md)
im Repository der Schnittstelle genauer durchlesen,
da dieser Prozess dort noch beschrieben ist.

## Spieler hochladen

Nun kann der fertige Computerspieler im Wettkampfsystem hochgeladen werden.
Den allgemeinen Prozess haben wir bereits [hier](/grundlagen/contest#computerspieler)
ausführlich beschrieben und muss deshalb in diesem Abschnitt
nicht mehr weiter erläutert werden.

## Frohes Schaffen!

Mit dieser Anleitung an der Hand wünschen wir nun
ganz viel Erfolg beim Entwickeln eines Comuterspielers in Python 
für die Software-Challenge Germany.

Wenn trotzdem noch Probleme oder Unklarheiten bestehen,
melde dich jederzeit bei deinem Tutor,
frag auf unserem [Discord](https://discord.gg/jhyF7EU)
oder erstell ein Issue auf Github im Repository
der [Schnittstelle](https://github.com/software-challenge/player_python)
oder [dieser Dokumentation](https://github.com/software-challenge/docs).
