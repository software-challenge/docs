In diesem Repository befindet sich die Endbenutzer-Dokumentation für die
Software-Challenge. Zielgruppe sind Schüler und Lehrer, die an der
Software-Challenge teilnehmen.

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

-   Die Hauptdatei ist `index.md` im Wurzelverzeichnis. Alle anderen
    Dateien werden per `include`-Anweisung in die Hauptdatei
    eingebunden.

-   Dateinamen und Verzeichnisnahmen sollten nur die Zeichen `a` bis `z`
    sowie Bindestriche (`-`) enthalten.

-   Sprache für Dateinamen, Verzeichnisnamen sowie Inhalt ist Deutsch.
    Sprache für Attribute und sonstige Interna ist Englisch.

-   Als Endung für Asciidoc wird `.md` benutzt.

-   Es wird des ATX-Format für Überschriften verwendet (also `=`, `==`,
    `===` etc.)

-   Zeilenumbrüche jeweils am Ende von Sätzen bzw. semantischen Grenzen,
    orientiert an [Semantic Line Breaks](https://sembr.org).

-   Commitnachrichten wird der Dateipfad der geänderten Datei oder des
    Ordners vorangestellt, ggf. gekürzt um überflüssige Elemente (z.B.
    'blokus/' statt 'spiele/blokus/').

# Konvertierung

Um schnell starten zu können, existiert ein setup-skript. Es installiert
die benötigten Ruby-Gems anhand des `Gemfile`:

    ./docs setup

Um alles in HTML zu Übersetzen, sollte folgender Befehl verwendet
werden:

    ./docs generate

Wenn zusätzlich die Option `pdf` angehängt wird, wird auch
asciidoctor-pdf aufgerufen. Aus Geschwindigkeitsgründen wird darauf
standardmäßig verzichtet.

Intern wird `asciidoctor` verwendet:

    asciidoctor -D out index.md

Die fertige HTML-Version befindet sich dann unter `out/index.html`.

Bei Bedarf kann die Dokumentation auch in ein anderes Format konvertiert
werden, Details hierzu finden sich in der [AsciiDoctor
Dokumentation](http://asciidoctor.org/docs/user-manual/#processing-your-content).

## Live-Preview

> Noch nicht vollständig getestet. Im Moment sehr langsam, da alles neu
> übersetzt wird.

Einen Live-Preview-Mode gibt es leider nicht direkt, aber es gibt
[verschiedene Wege um ein Live-Preview zu
bekommen](http://asciidoctor.org/docs/editing-asciidoc-with-live-preview/).
Einer ist die Nutzung von `guard`. Dies kann durch folgenden Aufruf
installiert werden:

    ./docs setup live

Dies installiert dann die folgenden Gems:
`guard guard-shell guard-livereload yajl-ruby`

Ein passendes `Guardfile` liegt schon im Repository, man kann `guard`
also einfach mittels `guard start` starten, und die Ausgabe im
Verzeichnis `out` wird aktualisiert, sobald man etwas an den Quellen
ändert.

Um die Browseransicht automatisch zu aktualisieren, installiere
zusätzlich [die LiveReload
extension](http://livereload.com/extensions/).

# Quickstart

-   [AsciiDoc Syntax Quick
    Reference](http://asciidoctor.org/docs/asciidoc-syntax-quick-reference/)

-   [AsciiDoc Writer’s
    Guide](http://asciidoctor.org/docs/asciidoc-writers-guide/)

-   [AsciiDoctor User Manual](http://asciidoctor.org/docs/user-manual/)

-   [AsciiDoc Style
    Guide](http://asciidoctor.org/docs/asciidoc-recommended-practices/)

Es werden häufig Links zu anderen Teilen des Dokumentes genutzt (die
Dokumentation ist ein einzelnes großes Dokument). Diese haben folgenden
Syntax:

    <<Sektionslabel,anzuzeigender Linktext>>

Sektionslabel stehen über allen Überschriften und werden mit doppelten
eckigen Klammern definiert:

    [[labelname]]

# Deployment

Die [öffentliche Seite](https://docs.software-challenge.de) wird
automatisch bei jedem push in den main-Branch von GitHub aktualisiert.
Dies geschieht durch einen GitHub Actions Workflow, siehe
`.github/workflows/auto-publish.yml`. Der Workflow speichert die
generierten Seiten im `live` branch des Repositories, welcher nach
Benachrichtigung durch einen Webhook im gepullt wird.
