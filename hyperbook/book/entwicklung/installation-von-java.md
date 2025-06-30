---
name: Installation von Java
index: 5
---

# Installation von Java

Die meisten Programme, die von der Software-Challenge zur Verfügung gestellt werden,
sind für eine Java-Umgebung geschrieben.
Diese Anleitung soll die Beschaffung und Installation von Java erleichtern.

## Grundsätzliches

Java gibt es in zwei verschiedenen Paketen: 
Das *Java Runtime Environment (JRE)* und das *Java Development Kit (JDK)*.
Zum Entwickeln eigener Programme wird das JDK benötigt, dass auch das JRE enthält.

## Installation

### Windows

Das JDK 11 kann auf einem Windows-System
mit folgendem `winget`-Befehl im Windows Terminal installiert werden:

```bash
winget install -e --id EclipseAdoptium.Temurin.11.JDK
```

### Installation über Paketquellen (Linux)

Meistens ist das JDK (`openjdk`) direkt von den Paketquellen der Linux-Distribution installierbar.
Sofern möglich, wird diese Art der Installation empfohlen, da es oft noch Paketabhängigkeiten gibt, die dann automatisch mit installiert werden.