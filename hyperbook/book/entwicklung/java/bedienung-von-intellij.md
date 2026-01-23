---
name: Bedienung von IntelliJ
index: 5
---

# Bedienung von IntelliJ

Wenn man bisher noch nicht mit einer Entwicklungsumgebung gearbeitet
hat, mag der Anblick erschreckend unübersichtlich sein. Sobald man sich
jedoch etwas intensiver damit beschäftigt hat, möchte man den
Bedienkomfort eines solchen Entwicklertools gar nicht mehr missen.
Dieser Artikel stellt die wichtigsten Komponenten der
Entwicklungsumgebung IntelliJ vor. 

IntelliJ ist im vergleich zu Eclipse die modernere IDE mit mehr Features,
weshalb wir diese für neu beginnende empfelen würden. 

## Die Oberfläche

![Überblick über die wichtigsten Fenster in
IntelliJ](/images/java/intellij_important.png)

### Project Tool Window

Das Project Tool Window befindet sich standartgemäß ab linken Rand. 
In ihm sieht man die Ordnerstruktur und alle im Projektenhaltenen 
Dateien. Wenn man eine Datei doppelclickt, wird diese Datei im Editor 
geöffnet. Mit einem Rechtsklick auf eine Datei oder ein Verzeichnis 
bekommt man viele Optionen, mit denen sich das ausgewählte Objekt 
bearbeiten lässt.

### Editor

Der Editor ist die große Fläche in der Mitte des IntelliJ-Fensters. Am
oberen Rand befindet sich die Tab-Leiste, die alle geöffneten Dateien
beinhaltet.

### Problems

Das Problems Fenster ist standardgemäß nicht auf. Um es zu öffnen muss 
man unten links in der Tool Window Bar den Knopf dafür (Kreis mit ! in 
der Mitte) drücken. Hier werden sowohl Programmierfehler als auch 
Warnungen angezeigt. Mit einem Doppelklick auf einen Eintrag springt 
der Cursor im Editor an die entsprechende Codezeile.

### Console

**Fehlt noch im Bild**
Die Console ist nicht sofort sichtbar, sondern erscheint erst, nachdem
das erste Programm ausgeführt worden ist. Alternativ kann man die 
Console auch unten links in der Tool Window Bar (**Farbe einfügen und 
zum Bild hinzufügen**) öffnen. In der Console werden alle 
Systemausgaben angezeigt. Falls ein Fehler (Exception) geworfen wird,
kann man durch einen Klick auf den unterstrichenen blauen Teil der Fehlermeldung an die entsprechende Zeile im  Programmcode gelangen.

## Programme starten

**Dialog um die Starteinstellungen des Programms zu ändern**

![eclipse run configurations](/images/eclipse_run-configurations.jpg)

Ein Programm lässt sich starten, indem man im Package Explorer einen
Rechtsklick auf die Datei mit der Main-Methode macht und dann "Run As" →
"Java Application" ausführt.

Im Menü kann man unter "Run" → "Run Configurations" im Tab "Arguments"
noch Optionen angeben.  

## Tastaturkürzel

IntelliJ IDEA bietet ebenfalls zahlreiche Tastenkombinationen, mit denen sich Funktionen schneller aufrufen lassen. Die wichtigsten äquivalenten Shortcuts sind in der folgenden Tabelle aufgeführt:

| Aktion | Effekt |
| ------- | ------- |
| Shift+F10 | Führt die zuletzt ausgeführte Datei erneut aus |
| Cursor auf Variablen-, Klassen- oder Methodennamen, dann Shift+F6 | Benennt alle Vorkommen des Namens im ganzen Projekt um |
| Alt+Enter | Zeigt Verbesserungs- bzw. Reparaturvorschläge an, wenn der Cursor auf einem Fehler oder einer Warnung steht |
| Ctrl+Alt+I | Rückt den markierten Text sauber ein |
| Ctrl+/ | Kommentiert die markierten Zeilen ein, bzw. aus |
| Cursor auf Variablen-, Methoden- oder Klassennamen, dann Ctrl+B | Springt zu der Definition der Variable, Methode oder Klasse |
| Variablen- oder Klassenname teilweise eingegeben, dann Ctrl+Space | IntelliJ liefert Vorschläge zur Vervollständigung |
| Eingabe von `sout`, dann Tab oder Enter | Erzeugt `System.out.println` |
| Eingabe von `fori`, dann Tab oder Enter | Erzeugt die folgende `for`-Schleife: ```for (int i = 0; i < ; i++) {}``` |
| Eingabe von `ifn`, dann Tab oder Enter | IntelliJ erzeugt eine `if`-Struktur |

**Hinweis:** Unter macOS wird statt der **Strg**-Taste die **Command (⌘)**-Taste verwendet.
