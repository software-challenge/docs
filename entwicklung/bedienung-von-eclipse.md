# Bedienung von Eclipse

Wenn man bisher noch nicht mit einer Entwicklungsumgebung gearbeitet
hat, mag der Anblick erschreckend unübersichtlich sein. Sobald man sich
jedoch etwas intensiver damit beschäftigt hat, möchte man den
Bedienkomfort eines solchen Entwicklertools gar nicht mehr missen.
Dieser Artikel stellt die wichtigsten Komponenten der
Entwicklungsumgebung Eclipse vor.

## Die Oberfläche

![Überblick über die wichtigsten Fenster in
Eclipse](eclipse_desktop.jpg)

### Package Explorer

Der Package Explorer befindet sich am linken Rand. Er verwaltet alle
importierten Projekte. Wenn man im Package Exlorer einen Doppelklick auf
eine Datei macht, wird diese im Editor angezeigt. Mit einem Rechtsklick
auf eine Datei oder ein Verzeichnis bekommt man viele Optionen, mit
denen sich das ausgewählte Objekt bearbeiten lässt.

### Editor

Der Editor ist die große Fläche in der Mitte des Eclipse-Fensters. Am
oberen Rand befindet sich die Tab-Leiste, die alle geöffneten Dateien
beinhaltet.

### Outline

Am rechten Bildschirmrand befindet sich die Outine. Sie zeigt alle
Variablen und Methoden der Klasse an, die gerade im Editor geöffnet ist.
Mit einem Doppelklick auf einen Eintrag springt der Cursor im Editor an
die entsprechende Stelle im Code.

### Problems

Der Tab Problems befindet sich im Fenster, das am unteren Bildschirmrand
zu sehen ist. Hier werden sowohl Programmierfehler, als auch Warnungen
angezeigt. Mit einem Doppelklick auf einen Eintrag springt der Cursor im
Editor an die entsprechende Codezeile.

### Console

Die Console ist nicht sofort sichtbar, sondern erscheint erst, nachdem
das erste Programm ausgeführt worden ist. In der Console werden alle
Systemausgaben angezeigt. Falls ein Fehler (Exception) geworfen wird,
kann man durch einen Klick darauf an die entsprechende Zeile im
Programmcode gelangen.

## Programme starten

**Dialog um die Starteinstellungen des Programms zu ändern**

![eclipse run configurations](eclipse_run-configurations.jpg)

Ein Programm lässt sich starten, indem man im Package Explorer einen
Rechtsklick auf die Datei mit der Main-Methode macht und dann "Run As" →
"Java Application" ausführt.

Im Menü kann man unter "Run" → "Run Configurations" im Tab "Arguments"
noch Optionen angeben.  

## Tastaturkürzel

Eclipse kennt viele Tastenkombinationen, mit Hilfe derer einige
Eclipse-Funktionen schneller aufgerufen werden können. Die wichtigsten
Shortcuts kann man der folgenden Tabelle entnehmen:

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th style="text-align: left;">Aktion</th>
<th style="text-align: left;">Effekt</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td style="text-align: left;"><p>Strg+Shift+F11</p></td>
<td style="text-align: left;"><p>Führt die zuletzt ausgeführte
Java-Datei erneut aus</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p>Cursor auf Variablen-, Klassen- oder
Methodennamen, dann Alt+Strg+R</p></td>
<td style="text-align: left;"><p>Bennennt alle Vorkommen des Namens im
ganzen Projekt um</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p>Strg+F1</p></td>
<td style="text-align: left;"><p>Wenn man diese Tasenkombination über
einen Fehler oder eine Warnung eingibt, kriegt man von Eclipse
Verbesserungs-, bzw. Reparaturvorschläge</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p>Strg+I</p></td>
<td style="text-align: left;"><p>Rückt den markierten Text sauber
ein</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p>Strg+F7</p></td>
<td style="text-align: left;"><p>Kommentiert die markierten Zeilen ein,
bzw. aus</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p>Cursor auf Variablen-, Methoden- oder
Klassennamen, dann F3</p></td>
<td style="text-align: left;"><p>Der Cursor springt zur der Stelle, wo
die Variable oder Klasse definiert wurde</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p>Variablen- oder Klassenname teilweise
eingegeben, dann Strg+Space</p></td>
<td style="text-align: left;"><p>Eclipse liefert Vorschläge zur
Vervollständigung</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p>Eingabe von <code>syso</code>, dann
Strg+Space</p></td>
<td style="text-align: left;"><p>Erzeugt
<code>System.out.println</code></p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p>Eingabe von <code>for</code>, dann
Strg+Space</p></td>
<td style="text-align: left;"><p>Eclipse liefert eine Auswahl an
beliebigen <code>for</code>-Schleifen</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p>Eingabe von <code>if</code>, dann
Strg+Space</p></td>
<td style="text-align: left;"><p>Liefert eine Auswahl an
<code>if</code>-Dialogen</p></td>
</tr>
</tbody>
</table>

**Hinweis:** Bei Mac OS X wird statt der Strg-Taste meistens die
Apple-Taste benutzt.
