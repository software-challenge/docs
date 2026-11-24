---
name: Spieler für den Wettbewerb abgeben
index: 1
---

# Spieler für den Wettbewerb abgeben

Um euren fertigen Computerspieler abzugeben müssen zusammengefasst folgende Dinge passieren:
1. Für Linux kompilieren
2. Start-Shell schreiben
3. Kompiliertes Programm und Start-Shell packen
4. Zip im Contest System hochladen

Bis auf Punkt 4 kann dieser Vorgang automatisch durchgeführt werden.

## Computerspieler kompilieren und packen

### Automatisch

TBD

### Manuell packen

#### Kompilieren

Da die Spieler in einem Linux Docker Container laufen, muss der Spieler für Linux kompiliert werden.

Zuerst muss das Linux Target hinzugefügt werden, falls es noch fehlt:
`rustup target add x86_64-unknown-linux-gnu`

Dann kann der Spieler mit folgendem Befehl kompiliert werden:
`cargo build --target x86_64-unknown-linux-gnu --release`

Der kompilierte Spieler kann dann in `target/x86_64-unknown-linux-gnu/` gefunden werden.
Der Name der Datei des kompilierten Spielers ist der gleiche wie bei `name` in der `cargo.toml` definiert.

#### Start-Shell

Es wird nun noch eine Start-Shell benötigt, damit das Contest System den Spieler ausführen kann.
Dazu kann einfach folgendes in eine neue Datei `start.sh` geschrieben werden:
```
#!/bin/sh
chmod +x [name]
./[name] "$@"
```
*Bei `[name]` muss der name von eurem Spieler eingetragen werden.*

#### Packen

Nun müssen beiden Dateien noch zusammen in eine Zip-Datei gepackt werden.

Unter Linux kann das mit folgendem Befehl gemacht werden:
`zip -j abgabe.zip target/x86_64-unknown-linux-gnu/release/[name] start.sh`

*Bei `[name]` muss der name von eurem Spieler eingetragen werden. Der Befehl funktioniert außerdem nur, wenn die start.sh im Projektstamm liegt und der Befehl vom Projektstamm ausgeführt wird.*

## Spieler hochladen

Nun kann der fertige Computerspieler im Wettkampfsystem hochgeladen werden.
Den allgemeinen Prozess haben wir bereits [hier](/grundlagen/contest#computerspieler)
ausführlich beschrieben und muss deshalb in diesem Abschnitt
nicht mehr weiter erläutert werden.
