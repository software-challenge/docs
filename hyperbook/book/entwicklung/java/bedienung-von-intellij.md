---
name: Bedienung von IntelliJ
index: 5
---

# Bedienung von IntelliJ

Wenn man bisher noch nicht mit einer Entwicklungsumgebung gearbeitet hat,
mag der Anblick erschreckend unübersichtlich sein.
Sobald man sich jedoch etwas intensiver damit beschäftigt hat,
möchte man den Bedienkomfort eines solchen Entwicklertools gar nicht mehr missen.

Dieser Artikel stellt die wichtigsten Komponenten der Entwicklungsumgebung IntelliJ vor. 

IntelliJ ist im Vergleich zu Eclipse die modernere IDE mit mehr Features,
weshalb wir diese für neu Beginnende empfehlen würden. 

## Die Oberfläche

![Überblick über die wichtigsten Fenster in
IntelliJ](/images/java/intellij_important.png)

### Project Tool Window

Das Project Tool Window befindet sich standartgemäß am linken Rand.
In ihm sieht man die Ordnerstruktur und alle im Projekt enthaltenen Dateien.
Wenn man eine Datei doppelklickt,
wird diese Datei im Editor geöffnet.
Mit einem Rechtsklick auf eine Datei oder ein Verzeichnis bekommt man viele Optionen,
mit denen sich das ausgewählte Objekt bearbeiten lässt.

### Editor

Der Editor ist die große Fläche in der Mitte des IntelliJ-Fensters.
Am oberen Rand befindet sich die Tab-Leiste, die alle geöffneten Dateien beinhaltet.

### Problems

Das Problems Fenster ist standardgemäß nicht auf.
Um es zu öffnen,
muss man unten links in der Tool Window Bar den Knopf dafür (Kreis mit ! in der Mitte) drücken.
Hier werden sowohl Programmierfehler als auch  Warnungen angezeigt.

Mit einem Doppelklick auf einen Eintrag springt der Cursor im Editor an die entsprechende Codezeile die den Fehler oder die Warnung enthält.

### Console

Die Console ist nicht sofort sichtbar, sondern erscheint erst,
nachdem das erste Programm ausgeführt worden ist.
Alternativ kann man die Console auch unten links in der Tool Window Bar öffnen.

In der Console werden alle Systemausgaben angezeigt.
Falls ein Fehler (Exception) geworfen wird,
kann man durch einen Klick auf den blauen unterstrichenen Teil der Fehlermeldung an die entsprechende Zeile im Programmcode gelangen.

## Programme starten

Um eine Start-Konfiguration zum Starten der Spielervorlage zu erstellen,
musst man zuerst im Run/Debug Widget auf die aktuelle Buildeinstellung klicken (standard "Current File")
und in dem Dropdown Menü, welches sich dann öffnet, auf "Edit Configurations" klicken.

![intellij run configurations](/images/java/build1.png)

Anschließend musst du entweder auf das + oben links oder auf den Text 
"Add new...", falls noch keine Start-Konfigurationen existieren, im 
sich dann geöffneten Fenster clicken.

Dort öffnet sich dann eine Auswahl, in der du das Build Tool auswählen 
kannst. Hier musst du Gradle auswählen.

Dann öffnet sich ein Fenster, in dem du die Konfiguration einstellen 
kannst. Hier musst du, vorrausgesetzt, dass das Projekt richtig 
gelesen wurde, nur noch unter der Überschrift "Run" im Eingabefeld 
"run" schreiben.

Dann kannst du auf "Apply" und "OK" drücken.

![intellij run configurations](/images/java/build2.png)

Dannach sollte dann automatisch im Run/Debug Widget die neu erstelle 
Konfiguration ausgewählt sein. Den Spieler kannst du dann mit einem 
Klick auf das Startsymbol (grünes Dreieck) starten.

![intellij run configurations](/images/java/build3.png)

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
