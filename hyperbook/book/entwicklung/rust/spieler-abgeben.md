---
name: Spieler für den Wettbewerb abgeben
index: 1
---

# Spieler für den Wettbewerb abgeben

Um euren fertigen Computerspieler abzugeben, müssen zusammengefasst folgende Dinge geschehen:
1. Für Linux kompilieren
2. Start-Shell-Skript schreiben
3. Kompiliertes Programm und Start-Shell-Skript packen
4. ZIP-Datei im Contest-System hochladen

Bis auf Punkt 4 kann dieser Vorgang automatisch durchgeführt werden.

## Computerspieler kompilieren und packen

### Automatisch

TBD

### Manuell packen

#### Kompilieren

Da die Spieler in einem Linux-Docker-Container laufen, muss der Spieler für Linux kompiliert werden.

Zuerst muss das Linux-Target hinzugefügt werden, falls es noch nicht vorhanden ist:
`rustup target add x86_64-unknown-linux-gnu`

Dann kann der Spieler mit folgendem Befehl kompiliert werden:
`cargo build --target x86_64-unknown-linux-gnu --release`

Der kompilierte Spieler kann dann in `target/x86_64-unknown-linux-gnu/` gefunden werden.
Der Name der Datei des kompilierten Spielers entspricht dem Wert von `name` in der `Cargo.toml`.

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
