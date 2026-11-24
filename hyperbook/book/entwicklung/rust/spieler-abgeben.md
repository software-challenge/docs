---
name: Spieler für den Wettbewerb abgeben
index: 1
---

# Spieler für den Wettbewerb abgeben

Um euren fertigen Computerspieler abzugeben, müssen folgende Dinge geschehen:

1. Für Linux kompilieren
2. Start-Shell-Skript schreiben
3. Kompiliertes Programm und Start-Shell-Skript packen
4. ZIP-Datei im Contest-System hochladen

Bis auf Punkt 4 kann dieser Vorgang automatisiert durchgeführt werden.

## Computerspieler kompilieren und packen

### Automatisch

TBD

### Manuell packen

#### Kompilieren

Das Vorgehen beim Kompilieren ist vom Betriebssystem abhängig.

##### Windows

Aktuell ist der beste Weg, das Windows-Subsystem für Linux (WSL) mit Debian oder Ubuntu zu installieren, Rust einzurichten und anschließend die Schritte für [Debian, Ubuntu, Fedora](#debian-ubuntu-fedora) zu befolgen.

##### Debian, Ubuntu, Fedora

Da die Spieler in einem Debian-Docker-Container laufen, muss der Spieler für Linux kompiliert werden.

Es muss das Linux-Target hinzugefügt werden, falls es noch nicht vorhanden ist:
`rustup target add x86_64-unknown-linux-gnu`

Dann kann der Spieler mit folgendem Befehl kompiliert werden:
`cargo build --target x86_64-unknown-linux-gnu --release`

Der kompilierte Spieler befindet sich anschließend in `target/x86_64-unknown-linux-gnu/`.
Der Dateiname des kompilierten Spielers entspricht dem Wert von `name` in der Datei `Cargo.toml`.

Das sollte normalerweise funktionieren.
Wenn beim Testen im Contest-System folgender Fehler auftritt:
```
# STDERR:
./start.sh: 3: ./playerrust1: not found
```
oder
```
start.sh: line 3: ./playerrust1: cannot execute: required file not found
```
oder ein ähnlicher Fehler auftritt, kompiliert den Spieler noch einmal mit folgendem Befehl:
`RUSTFLAGS="-C target-feature=+crt-static" cargo build --release --target x86_64-unknown-linux-gnu`

*In Fedora muss dafür noch `sudo dnf install glibc-static` ausgeführt werden.*

Danach sollte es funktionieren.

##### Andere Systeme

Wenn ihr ein Betriebssystem verwendet, das hier nicht aufgelistet ist und nicht von einem der aufgelisteten Systeme abstammt, solltet ihr eine virtuelle Maschine erstellen, darin eines der unterstützten Betriebssysteme installieren und anschließend die Schritte für dieses System befolgen.

Alternativ könnt ihr jeden anderen Weg zum Kompilieren verwenden, mit dem am Ende eine ausführbare Datei entsteht, die im Contest-System läuft.

Solltet ihr dabei Hilfe benötigen, wendet euch bitte an euren Tutor.

#### Start-Shell

Es wird nun noch eine Start-Shell benötigt, damit das Contest-System den Spieler ausführen kann.
Dazu kann einfach Folgendes in eine neue Datei `start.sh` geschrieben werden:
```
#!/bin/sh
chmod +x [name]
./[name] "$@"
```
*Bei `[name]` muss der Name eures Spielers eingetragen werden.*

#### Packen

Nun müssen beide Dateien zusammen in eine ZIP-Datei gepackt werden.

Unter Linux kann dies mit folgendem Befehl gemacht werden:
`zip -j abgabe.zip target/x86_64-unknown-linux-gnu/release/[name] start.sh`

*Bei `[name]` muss der Name eures Spielers eingetragen werden. Der Befehl funktioniert außerdem nur, wenn sich `start.sh` im Projektstamm befindet und der Befehl vom Projektstamm aus ausgeführt wird.*

## Spieler hochladen

Nun kann der fertige Computerspieler im Wettkampfsystem hochgeladen werden.
Den allgemeinen Prozess haben wir bereits [hier](/grundlagen/contest#computerspieler)
ausführlich beschrieben, deshalb wird er in diesem Abschnitt nicht noch einmal erläutert.
