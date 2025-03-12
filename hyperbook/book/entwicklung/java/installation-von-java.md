---
name: Installation von Java
index: 1
---

# Installation von Java

Die meisten Programme, die von der Software-Challenge zur Verfügung gestellt werden,
sind für eine Java-Umgebung geschrieben.
Diese Anleitung soll die Beschaffung und Installation von Java erleichtern.

## Grundsätzliches

Java gibt es in zwei verschiedenen Paketen: Das *Java Runtime Environment (JRE)* und das *Java Development Kit (JDK)*.
Zum Entwickeln eigener Programme wird das JDK benötigt, dass auch das JRE enthält.

## Installation

Die Installation des JDK 17 auf einem Windows-System erfolgt mit folgendem `winget`-Befehl im Windows Terminal:

```bash
winget install -e --id AdoptOpenJDK.OpenJDK.17
```

### Installation über Paketquellen (Linux)

Meistens ist das JDK (`openjdk`) in den Paketquellen der Linux-Distributionen enthalten, sodass man es einfach über den Paketmanager installieren kann.
Sofern möglich, wird diese Art der Installation empfohlen, da es oft noch Paketabhängigkeiten gibt, die dann automatisch mit installiert werden.
