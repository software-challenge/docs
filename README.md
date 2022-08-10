>In diesem Repository befindet sich die Endbenutzer-Dokumentation für die
>Software-Challenge. Zielgruppe sind Schüler und Lehrer, die an der
>Software-Challenge teilnehmen.

# Beitragen

Wir freuen uns über sämtliche Verbesserungsvorschläge.  
Die Dokumentation kann direkt hier auf GitHub editiert werden, einzige
Voraussetzung ist eine kostenlose Registrierung bei GitHub. Ist man
angemeldet, kann man ein Dokument auswählen und dann auf den Stift oben
rechts klicken. Ein guter Startpunkt ist die Datei
[index.md](https://github.com/software-challenge/docs/blob/master/index.md),
die Verweise auf alle Sektionen der Dokumentation enthält. Damit wird
von GitHub automatisch ein Fork und ein dazugehöriges Pull Request
erstellt.  
Alternativ auch gern eine E-Mail an <svk@informatik.uni-kiel.de> oder
eine Nachricht im [Discord](https://discord.gg/jhyF7EU).

# Konventionen

-   Die Hauptdatei ist `index.md` im Wurzelverzeichnis.

-   Dateinamen und Verzeichnisnahmen sollten nur die Zeichen `a` bis `z`
    sowie Bindestriche (`-`) enthalten.

-   Sprache für Dateinamen, Verzeichnisnamen sowie Inhalt ist Deutsch.
    Sprache für Attribute und sonstige Interna ist Englisch.

-   Als Endung für Marcdown wird `.md` benutzt.

-   Zeilenumbrüche jeweils am Ende von Sätzen bzw. semantischen Grenzen,
    orientiert an [Semantic Line Breaks](https://sembr.org).

-   Commitnachrichten wird der Dateipfad der geänderten Datei oder des
    Ordners vorangestellt, ggf. gekürzt um überflüssige Elemente (z.B.
    'blokus/' statt 'spiele/blokus/').

# Hyperbook
Die Dokumentation wird mit der Software [Hyperbook](https://hyperbook.openpatch.org/) bereitgestellt und die einzelnen Seiten sind in der Repository in der Auszeichnungssprache "Markdown" hinterlegt und können mit einem entsprechenden Editor bearbeitet werden.
### Node.js und NPM
Um Hyperbook zu nutzen, muss die Laufzeitumgebung [Node.js](https://nodejs.org/en/) installiert sein. Dies kann unter Linux mit dem Kommando `sudo apt install nodejs npm` getan werden.

### Live-Preview
Wenn die eigenen Änderung bereits lokal betrachtet und getestet werden möchten, dann ist dies möglich.

Es kann in dem Ordner `./hyperbook`, das Kommando `npx hyperbook dev` ausgeführt werden, um den Entwicklungsserver zu starten. Dieser wird dann unter `http://localhost:3000/` zur Verfügung stehen.

### Build
Wenn Hyperbook deployt werden soll, dann ist vorher notwendig dieses zu bauen. Dies wird getan, indem zuerst das Kommando `npx --force hyperbook setup` und dann `npx hyperbook build` in dem Ordner `./hyperbook` ausgeführt wird.

Die Website wird dann in `./hyperbook/.hyperbook/out` ausgegeben und kann dann kopiert und zum Beispiel mit *nginx* deployt werden.
Ein Beispiel findet sich im `Dockerfile`.

# Deployment

Die [öffentliche Seite](https://docs.software-challenge.de) wird
automatisch bei jedem push in den main-Branch von GitHub aktualisiert.
Dies geschieht durch einen GitHub Actions Workflow, siehe
`.github/workflows/auto-publish.yml`. Der Workflow speichert die
generierten Seiten im `live` branch des Repositories, welcher nach
Benachrichtigung durch einen Webhook im gepullt wird.
