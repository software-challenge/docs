# Software-Challenge Endbenutzer-Dokumentation 

In diesem Repository befindet sich die Endbenutzer-Dokumentation 
für die [Software-Challenge](https://software-challenge.de).
Zielgruppe sind Schüler und Lehrer,
die an der Software-Challenge teilnehmen.

Ziel dieser Dokumentation ist es,
alle Informationen über die Software-Challenge an einer Stelle zu bündeln.
Hier können sich Lehrer und Kursleiter über den Zweck der Software-Challenge informieren.
Für die teilnehmenden Teams ist hier alles dokumentiert,
was für die Teilnahme am Wettbewerb benötigt wird.

## Beitragen

Wir freuen uns über sämtliche Verbesserungsvorschläge.  
Die Dokumentation kann direkt hier auf [GitHub](https://github.com/software-challenge/docs/blob/main/hyperbook/book) editiert werden,
einzige Voraussetzung ist eine kostenlose Registrierung bei GitHub.
Ist man angemeldet,
kann man ein Dokument auswählen 
und dann auf den Stift oben rechts klicken.
Die relevanten Dokumente finden sich im Verzeichnis [hyperbook/book](./hyperbook/book).
Damit wird von GitHub automatisch ein Fork 
und ein dazugehöriges Pull Request erstellt.  
Alternativ auch gerne per E-Mail an <tech@software-challenge.de> 
oder als Nachricht im [Discord](https://discord.gg/jhyF7EU).

## Konventionen

-   Die Hauptdatei ist `index.md` im Wurzelverzeichnis.

-   Dateinamen und Verzeichnisnahmen sollten nur die Zeichen `a` bis `z`
    sowie Bindestriche (`-`) enthalten.

-   Sprache für Dateinamen, Verzeichnisnamen sowie Inhalt ist Deutsch.
    Sprache für Attribute und sonstige Interna ist Englisch.

-   Als Endung für Markdown wird `.md` benutzt.

-   Zeilenumbrüche jeweils am Ende von Sätzen bzw. semantischen Grenzen,
    orientiert an [Semantic Line Breaks](https://sembr.org).

-   Commitnachrichten wird der Dateipfad der geänderten Datei oder des Ordners vorangestellt, 
    ggf. gekürzt um überflüssige Elemente (z.B. 'blokus/' statt 'spiele/blokus/').
    Ansonsten guten Stil beachten: https://cbea.ms/git-commit/


## Hyperbook
Die Dokumentation wird mit der Software [Hyperbook](https://hyperbook.openpatch.org/) bereitgestellt.
Die einzelnen Seiten sind im Ordner `hyperbook` in der Auszeichnungssprache "Markdown" hinterlegt 
und können mit einem entsprechenden Editor bearbeitet werden.
In diesem Ordner sollte auch jeder folgende Befehl ausgeführt werden.

### Node.js und NPM
Um Hyperbook zu HTML zu konvertieren, 
muss die Laufzeitumgebung [Node.js](https://nodejs.org/en/) installiert sein.
Dies geht unter Debian-basierten Distributionen mit `sudo apt install nodejs npm`.
Unter Arch: `sudo pacman -S npm`

Anschließend installiere die Abhängigkeiten mit 
`npx hyperbook setup`.

### Live-Preview
Eine Vorschau lokaler Änderungen kann direkt mit dem Befehl `npx hyperbook dev` 
aus dem Ordner `hyperbook` generiert werden.
Dies startet einen Entwicklungsserver,
dessen Ergebnisse unter `http://localhost:3000/` einsehbar sind.

### Build
Um das Hyperbook zu veröffentlichen,
generiert `npx hyperbook build` die Website in `./hyperbook/.hyperbook/out`.
Diese kann zum Beispiel mit *nginx* veröffentlicht werden.
Ein Beispiel findet sich im `Dockerfile`.

## Veröffentlichung

Die [öffentliche Seite](https://docs.software-challenge.de) 
wird automatisch bei jedem push in den `main`-Branch von GitHub aktualisiert.
Dies geschieht durch einen GitHub Actions Workflow,
siehe `.github/workflows/auto-publish.yml`. 
Der Workflow speichert die generierten Seiten im `live` branch des Repositories,
welcher nach Benachrichtigung durch einen Webhook im gepullt wird.
