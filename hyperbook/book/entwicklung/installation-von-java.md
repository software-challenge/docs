---
name: Installation von Java
index: 5
---

# Installation von Java

Die meisten Programme, die vom Institut für Informatik zur Verfügung
gestellt werden, sind in der Programmiersprache Java geschrieben. Diese
Anleitung soll die Beschaffung und Installation von Java erleichtern.

## Grundsätzliches

Java gibt es in zwei verschiedenen Paketen: Das *Java Runtime Environment (JRE)*
und das *Java Development Kit (JDK)*.
Möchte man lediglich Java-Programme starten, also nicht selber entwickeln,
dann reicht das JRE vollkommen aus. Möchte man auch eigene Programme schreiben,
muss das JDK auf jeden Fall installiert sein. Da im JDK auch das JRE integriert ist,
kann man aber immer ohne Bedenken gleich zum JDK greifen.

## Installation

Um Java 11 JRE auf einem Windows-System mit `winget` zu installieren, führen Sie den folgenden Befehl im Windows Terminal aus:

```bash
winget install -e --id EclipseAdoptium.Temurin.11.JRE
```

Dieser Befehl sucht nach dem Paket mit der ID `EclipseAdoptium.Temurin.11.JRE`,
das die Java Runtime Environment (JRE) für Java 11 bereitstellt, und installiert es auf dem Computer.

### Installation über Paketquellen (Linux)

Meistens ist das Java JDK in den Paketquellen der Linux-Distributionen
enthalten, sodass man es einfach über den Paketmanager installieren
kann. Sofern möglich, wird diese Art der Installation empfohlen, da es
oft noch Paketabhängigkeiten gibt, die dann automatisch mit installiert
werden.
