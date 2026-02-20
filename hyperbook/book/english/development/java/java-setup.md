---
name: Installation of Java
index: 1
---

# Installation of Java

Most programs provided by the Software-Challenge
are written for a Java environment.
This guide is intended to make obtaining and installing Java easier.

## Basics

Java comes in two different packages:
The *Java Runtime Environment (JRE)* and the *Java Development Kit (JDK)*.
For developing your own programs, the JDK is required,
which also contains the JRE.

## Installation

### Windows

JDK 11 can be installed on a Windows system
with the following `winget` command in the Windows Terminal:

```bash
winget install -e --id EclipseAdoptium.Temurin.11.JDK
```

Alternatively, the JDK can also be installed with a UI using an installer at:
[https://www.oracle.com/java/technologies/downloads/#java11-windows](https://www.oracle.com/java/technologies/downloads/#java11-windows)

### Linux

Usually, the JDK (`openjdk`) can be installed directly
from the package sources of the Linux distribution.
If possible, this type of installation is recommended,
as there are often package dependencies
that are then automatically installed as well.

Here are some commands for installing Java
for the most common distributions:

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

On macOS, JDK 11 can be installed most easily
with the package manager Homebrew.
Prerequisite: Homebrew is installed (see https://brew.sh).

```bash
brew install --cask temurin@11
```