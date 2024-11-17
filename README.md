# Software-Challenge Endbenutzer-Dokumentation 

In diesem Repository befindet sich die Endbenutzer-Dokumentation 
für die [Software-Challenge](https://software-challenge.de).
Zielgruppe sind Schülerinnen, Schüler und Lehrkräfte,
die an der Software-Challenge teilnehmen.

Ziel dieser Dokumentation ist es,
alle Informationen über die Software-Challenge an einer Stelle zu bündeln.
Hier können sich Lehrkräfte und Kursleiter über den Zweck der Software-Challenge informieren.
Für die teilnehmenden Teams ist hier alles dokumentiert,
was für die Teilnahme am Wettbewerb benötigt wird.

## Beitragen

Wir freuen uns über sämtliche Verbesserungsvorschläge.  
Die Dokumentation kann direkt hier 
auf [GitHub](https://github.com/software-challenge/docs/blob/main/hyperbook/book) editiert werden,
einzige Voraussetzung ist eine kostenlose Registrierung bei GitHub.
Nach der Anmeldung ein Dokument auswählen 
und dann auf den Stift oben rechts klicken.
Die relevanten Dokumente finden sich im Verzeichnis [hyperbook/book](./hyperbook/book).
Damit wird von GitHub automatisch ein Fork 
und ein dazugehöriges Pull Request erstellt.  
Alternativ auch gerne per E-Mail an <tech@software-challenge.de> 
oder als Nachricht im [Discord](https://discord.gg/jhyF7EU).

### Konventionen
- Zeilenumbrüche jeweils am Ende von Sätzen bzw. semantischen Grenzen,
  orientiert an [Semantic Line Breaks](https://sembr.org).
- Datei- und Verzeichnisnamen sollten nur die Zeichen `a` bis `z` 
  sowie Bindestriche (`-`) enthalten.
- Sprache für Dateinamen, Verzeichnisnamen sowie Inhalt ist Deutsch.
  Sprache für Attribute und sonstige Interna ist Englisch.

### Kollaborationsrichtlinien

Commitnachrichten wird der Dateipfad der geänderten Datei oder des Ordners vorangestellt, 
ggf. gekürzt um überflüssige Elemente (z.B. 'blokus/' statt 'spiele/blokus/').
Um bei den Branches die Übersicht zu behalten,
sollten diese ebenfalls nach der Konvention benannt werden.
Darüber hinaus guten Stil beachten: https://cbea.ms/git-commit/

Ansonsten folgend wir soweit sinnvoll der [Kull Konvention](https://kull.jfischer.org).

## Hyperbook
Die Dokumentation wird mit der Software [Hyperbook](https://hyperbook.openpatch.org/) bereitgestellt.
Die einzelnen Seiten sind im Ordner `hyperbook` im Markdown-Syntax hinterlegt 
und können mit einem entsprechenden Editor bearbeitet werden.
Im `hyperbook`-Ordner sollte auch jeder folgende Befehl ausgeführt werden.

### Node.js und NPM
Um Hyperbook zu HTML zu konvertieren, 
muss die Laufzeitumgebung [Node.js](https://nodejs.org/en/) installiert sein.
Dies geht unter Debian-basierten Distributionen mit `sudo apt install nodejs npm`.
Unter Arch: `sudo pacman -S npm`

### Live-Preview
Eine Vorschau lokaler Änderungen kann direkt mit dem Befehl `npx hyperbook dev` 
aus dem Ordner `hyperbook` generiert werden.
Dies startet einen Entwicklungsserver,
dessen Ergebnisse unter `http://localhost:8080/` einsehbar sind.

### Build
Um das Hyperbook zu veröffentlichen,
generiert `npx hyperbook build` die Website in `./hyperbook/.hyperbook/out`.

## Veröffentlichung

Die [öffentliche Seite](https://docs.software-challenge.de) 
wird automatisch bei jedem push in den `main`-Branch von GitHub aktualisiert.
Dies geschieht durch einen GitHub Actions Workflow,
siehe `.github/workflows/auto-publish.yml`. 
Der Workflow speichert die generierten Seiten im `live` branch des Repositories,
welcher nach Benachrichtigung durch einen Webhook von [caddy](./Caddyfile) gepullt wird.

Bei Änderungen am Caddyfile oder dem Docker image 
muss [push-production.sh](./bin/push-production.sh) mit dem GITHUB_SECRET des Webhooks ausgeführt werden
(bei credential-abfrage beliebigen Text eingeben).
Der Docker container lässt sich auch lokal mit [test-production.sh](./bin/test-production.sh) testen,
wobei der Caddy Webserver auf port 80 via [localhost](http://localhost) erreichbar wird.

TODO: Eigenes Caddyfile mit "debug" und Dockerfile mit lokalem build für testing
