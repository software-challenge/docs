---
name: Installation von Java
index: 1
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

Alternativ kann das JDK auch mit UI mit einem Installer installiert werden:
[https://www.oracle.com/java/technologies/downloads/#java11-windows](https://www.oracle.com/java/technologies/downloads/#java11-windows)

### Linux

Meistens ist das JDK (`openjdk`) direkt von den Paketquellen der Linux-Distribution 
installierbar. Sofern möglich, wird diese Art der Installation empfohlen, da es oft 
noch Paketabhängigkeiten gibt, die dann automatisch mit installiert werden.

Hier sind ein paar Befehle zum Installieren von Java für die gängigsten 
Distributionen:

#### Debian, Ubuntu, Linux Mint, Kali Linux
```bash
sudo apt update
sudo apt install openjdk-11-jdk
```

#### Fedora, Red Hat, CentOS, AlmaLinux
```bash
sudo dnf install java-11-openjdk-devel
```

#### Arch Linux, Manjaro, EndeavourOS
```bash
sudo pacman -S jdk11-openjdk
```

#### openSUSE (Leap & Tumbleweed)
```bash
sudo zypper install java-11-openjdk-devel
```

### macOS

Auf macOS kann das JDK 11 am einfachsten mit dem Paketmanager Homebrew installiert werden.
Voraussetzung: Homebrew ist installiert (siehe https://brew.sh).

```bash
brew install --cask temurin@11
```