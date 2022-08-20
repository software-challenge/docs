---
name: XML-Schnittstelle
---

# Die Schnittstelle zum Server (XML)

Der Spielleiter kommuniziert mit den Computerspielern über eine Netzwerkverbindung. Dadurch ist man aus technischer Sicht komplett flexibel, was die Wahl der Programmiersprache angeht. Die Computerspieler müssen lediglich das Kommunikationsprotokoll erfüllen.

Anfängern wird allerdings davon abgeraten, einen komplett eigenen Client zu schreiben. Es ist deutlich einfacher, auf einem bereitgestellten Simpleclient aufzubauen, da man sich dabei nur um die Strategie und nicht um die Kommunikation kümmern muss. Außerdem wird vom Institut für Informatik die beste Unterstützung für Java/Kotlin geboten.

## Hinweise

Im Verlauf des Wettbewerbes können Elemente zur Kommunikationsschnittstelle hinzugefügt werden, die in dieser Dokumentation nicht aufgeführt sind. Um auch bei solchen Änderungen sicher zu sein, dass ein Client fehlerfrei mit dem Server kommunizieren kann, sollten beim Auslesen des XML jegliche Daten verworfen werden, die hier nicht weiter definiert sind.

Die bereitgestellten Programme 
(:t[Server]{#server}, :t[Java-Spieler]{#player}) nutzen eine Bibliothek,
um Java-Objekte direkt in XML zu konvertieren und umgekehrt.
Dabei werden XML-Nachrichten nicht unbedingt mit einem Zeilenumbruch abgeschlossen.

## Einführung in XML

Die Kommunikation zwischen [Spielleiter](https://docs.software-challenge.de/server.html) und [Computerspieler](https://docs.software-challenge.de/der-computerspieler.html) 
wird mittels XML-Nachrichten realisiert.
XML ist eine Auszeichnungssprache, d.h eine Sprache,
die nicht nur die Daten selbst, sondern auch Informationen über die Interpretation oder Bearbeitung liefert.
Der Vorteil dieser Sprache liegt darin,
dass sie sowohl vom Computer als auch vom Menschen gut gelesen werden kann.
Dieser Abschnitt gibt einen Einstieg in die Struktur von XML.

### Tags

Die Grundelemente von XML sind _Tags_. Ein Tag liefert Informationen über die Art der Daten, die verarbeitet werden sollen. In XML wird ein Tag gebildet, indem man den Tagnamen zwischen spitze Klammern setzt. Dabei kennt XML drei verschiedene Tag-Arten:

-   Öffnendes Tag: `<Tag>`
    
-   Schließendes Tag: `</Tag>`
    
-   Leeres Tag: `<Tag />`
    

Der Schrägstrich bedeuted, dass das Tag geschlossen wird. Durch den Schrägstrich am Ende wird das soeben geöffnete Tag direkt wieder geschlossen.

Zwischen den öffnenden und schliessenden Tag steht die Information, die mitgeteilt werden soll.

**Hinweis:** XML unterscheidet strikt zwischen Groß- und Kleinschreibung.

#### Bildungsregeln

Die Tags dürfen nicht beliebig in Dokumenten verwendet werden. Es gelten hier die folgenden Regeln:

-   Zu jedem öffnenden Tag muss ein schließendes Tag existieren.
    
-   Man kann Tags ineinander schachteln. Die einzelnen Tags dürfen sich jedoch nicht überkreuzen.
    
-   Es darf nur ein Root-Tag geben, d.h. es gibt auf oberster Ebene genau ein Tag, in dem alle anderen enthalten sind.
    

#### Beispiel für korrekte XML-Syntax

```xml
<addiere>
    <komplexe_zahl>
        <realteil>3.5</realteil>
        <imaginaerteil>4.2</imaginaerteil>
    </komplexe_zahl>
    <komplexe_zahl>
        <realteil>1</realteil>
        <imaginaerteil>6.9</imaginaerteil>
    </komplexe_zahl>
</addiere>
```

#### Beispiele für fehlerhafte XML-Syntax

-   Fehlerhaft, da es mehrere Elemente auf oberster Ebene gibt:
    

```xml
<ueberschrift>
    Beispieldokument
</ueberschrift>
<text>
    Dies ist ein <unterstrichen>Beispieltext</unterstrichen>
    <absatz />
    Noch mehr Text
</text>
```

-   Fehlerhaft, da Tags sich kreuzen:
    

```xml
<dokument>
    <ueberschrift>
        Beispieldokument
    </ueberschrift>
    <text>
        <kursiv>Dies <unterstrichen>ist </kursiv>ein Beispieltext</unterstrichen>
        <absatz />
        Noch mehr Text
    </text>
</dokument>
```

### Attribute

Man kann im Tag auch Attribute einfügen, in denen Informationen übertragen werden:

```xml
<Tag attribut="wert" />
```

Auf diese Weise lässt sich das Beispiel mit den komplexen Zahlen etwas übersichtlicher gestalten:

```xml
<addiere>
    <komplexe_zahl realteil="3.5" imaginaerteil="4.2" />
    <komplexe_zahl realteil="1" imaginaerteil="6.9" />
</addiere>
```

### Der Header

Wichtig ist auch die erste Zeile in einem XML-Dokument. Aus ihr kann das Computerprogramm erfahren, wie es mit den Daten umzugehen hat (z.B. welcher Zeichensatz benutzt wird). Dieser Header sieht einem Tag sehr ähnlich:

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no" ?>
```

Man nennt so ein Tag, auch _Verarbeitungsinformation_.

Theoretisch darf es in einem XML-Dokument mehrere Verarbeitungsinformationen geben, für die Software-Challenge muss man aber nur den Header kennen.

### Kommentare

Man kann in sein XML-Dokument auch Kommentare einfügen, die beim Einlesen dann ignoriert werden:

```xml
<!-- Ich bin ein XML-Kommentar -->
```

Es darf beliebig viele solcher Kommentare geben und sie dürfen nur zwischen Tags stehen.

### Weiterführende Informationen

-   [Wikipedia-Artikel über XML](https://de.wikipedia.org/wiki/Extensible_Markup_Language)

## Das Spielprotokoll

In diesem Abschnitt wird die spielunabhängige Kommunikationsschnittstelle für Spieler festgehalten, um das Schreiben eines komplett eigenen Clients zu ermöglichen.

### Spiel betreten

```xml
<protocol>
```

Dieses Tag eröffnet die Kommunikation mit dem Server. Dann gibt es drei Möglichkeiten, einer Spielpartie beizutreten.

#### Beliebige Partie

Betritt ein beliebige offene Spielpartie:

```xml
<join />
```

Sollte kein Spiel offen sein, wird automatisch ein neues erstellt. Abhängig von der Einstellung `paused` in `server.properties` wird das Spiel pausiert gestartet oder nicht.

#### Bestimmte Partie

Einer bestimmten, bereits offenen aber noch nicht gestarteten Partie kann durch Angabe der `ROOM_ID` beigetreten werden:

```xml
<joinRoom roomId="ROOM_ID" />
```

#### Mit Reservierung

Unter Angabe eines Reservierungscodes kann man einen reservierten Platz in einer geplanten Partie einnehmen:

```xml
<joinPrepared reservationCode="RESERVATION" />
```

#### Antwort nach der Verbindung

Der Server antwortet auf einen erfolgreichen Spielbeitritt mit:

```xml
<joined roomId="ROOM_ID" />
```

ROOM_ID

Identifikationscode der Spielpartie

### Spielverlauf

#### Start

Der Server eröffnet das Spiel mit einer Begrüßung und dem initialen Spielstatus sobald beide Spieler verbunden sind.

ROOM_ID

Identifikationscode der Spielpartie

TEAMNUMBER

Spielernummer, eg. `ONE`, `TWO`

#### Syntax der Willkommensnachricht


```xml
<room roomId="ROOM_ID">
  <data class="welcomeMessage" color="TEAMNUMBER"></data>
</room>
<room roomId="ROOM_ID">
  <data class="memento">
    STATUS
  </data>
</room>
```

#### Status nach der Willkommensnachricht

Der Status der oben in dem data memento objekt enthalten ist, ist beispielsweise der folgenden Form:
```xml
<state turn="0">
  <startTeam>ONE</startTeam>
  <board>
	<list>
	  <field>1</field>
	  <field>2</field>
	  <field>2</field>
	</list>
	<list>
	  <field>2</field>
	  <field>ONE</field>
	  <field>2</field>
	</list>
	<list>
	  <field>TWO</field>
	  <field>4</field>
	  <field>1</field>
	</list>
  </board>
  <fishes>
	<int>0</int>
	<int>0</int>
  </fishes>
</state>
```

Es enthält die Zugnummer in ``turn``, das anfangende Team in ``startTeam``, eine Liste an Feldern in ``board`` und die Anzahl Fishe beider Spielers in ``fishes``, zuerst die von ONE und danach die von TWO.

In `board` entsprechen die Positionen der Felder auf dem Spielfeld in [odd-r Koordinaten](https://www.redblobgames.com/grids/hexagons/#neighbors-offset) ihrer Positionen in der XML Struktur. Von oben bei null anfangend werden die `<list>` Objekte in `<board>` durchgezählt. Die Nummer der List in dem das Field Objekt ist, ist seine `y` Kooridnate.  Auf die gleiche Weise entspricht die `x` Koordinate eines Felds seiner Nummer innerhalb des `<list>` Objekts.  
Der Inhalt der `field` Objekte steht für die Anzahl Fishe auf dem Feld, oder für einen Pinguin eines Spielers. In ersterem Fall steht eine Zahl in dem XML-Objekt und in letzterem Fall der Name des Spielers der den Pinguin gehört.

`x`: `<field>` index in `<list>`

`y`: `<list>` index in `<board>`

Beachtet, dass der XML-Status [odd-r Koordinaten](https://www.redblobgames.com/grids/hexagons/#neighbors-offset) nutzt, und dass die Koordinaten in Zügen als [doubled Koordinaten](https://www.redblobgames.com/grids/hexagons/#neighbors-doubled) interpretiert werden.

#### Spielablauf

Der erste Spieler erhält dann eine Zugaufforderung:

```xml
<room roomId="ROOM_ID">
  <data class="moveRequest" />
</room>
```

Worauf dieser innerhalb der gesetzten Zeitbeschränkung mit einem der folgenden Zug-Typen antwortet:

##### Normaler Zug

```xml
<room roomId="ROOM_ID">
  <data class="move">
    <from x="0" y="7"/>
    <to x="4" y="5"/>
  </data>
</room>
```

Ein normaler Zug besteht aus einem ``from`` und einem ``to`` Vektor, welche beide `x` und `y` Werte in [doubled Koordinaten](https://www.redblobgames.com/grids/hexagons/#neighbors-doubled) enthalten.

##### Lege Zug

```xml
<room roomId="ROOM_ID">
  <data class="move">
    <to x="1" y="2"/>
  </data>
</room>
```

Ein Lege-Zug besteht aus einem ``to`` Vektor, welcher `x` und `y` Werte in [doubled Koordinaten](https://www.redblobgames.com/grids/hexagons/#neighbors-doubled) enthält.

##### Weiteres

Nach Erhalt des Zuges sendet der Server den neuen Spielstatus an alle Spieler 
und dem nächsten Spieler eine Zugaufforderung.
So geht es hin und her bis zum [Spielergebnis](#spielergebnis).

#### Ende der Kommunikation

Die letzte Nachricht des Servers endet mit:

```xml
</protocol>
```

Danach wird die Verbindung geschlossen.

### Spielergebnis

Zum Spielende erhält jeder Spieler das Ergebnis. Es beginnt mit einer `definition`, die die Interpretation der Ergebnisse erklärt. Für jeden Spieler gibt es einen Eintrag in `scores`. Der darin enthaltene `score` schlüsselt sich auf in:

cause

Beitrag des Spielers zum Spielende (`REGULAR`, `LEFT`, `RULE_VIOLATION`, `SOFT_TIMEOUT`, `HARD_TIMEOUT`)

reason

Erklärung zu `cause`

part

Siegpunkte des Spielers (0 verloren, 1 unentschieden, 2 gewonnen) und weitere Punkteinträge entsprechend `definition`

Wenn es einen Sieger gibt, endet es mit einem `winner`-Tag, welches das Gewinner-Team angibt.

Hier ein Beispiel:

```xml
<room roomId="ROOM_ID">
  <data class="result">
    <definition>
      <fragment name="Siegpunkte">
        <aggregation>SUM</aggregation>
        <relevantForRanking>true</relevantForRanking>
      </fragment>
      <fragment name="∅ Punkte">
        <aggregation>AVERAGE</aggregation>
        <relevantForRanking>true</relevantForRanking>
      </fragment>
    </definition>
    <scores>
      <entry>
        <player name="rad" team="ONE"/>
        <score cause="REGULAR" reason="">
          <part>2</part>
          <part>27</part>
        </score>
      </entry>
      <entry>
        <player name="blues" team="TWO"/>
        <score cause="LEFT" reason="Player left">
          <part>0</part>
          <part>15</part>
        </score>
      </entry>
    </scores>
    <winner team="ONE"/>
  </data>
</room>
```

## Administration

Mit einem authentifizierten Client kann man den Server steuern.

### Verbindungsaufbau

Zuerst muss sich ein Client mit dem entsprechenden Passwort aus `server.properties` authentifizieren:

```xml
<protocol><authenticate password="examplepassword"/>
```

Ein authentifizierter AdminClient wird benachrichtigt, wenn sich ein Client über ein `JoinRoomRequest` verbindet:

```xml
<joinedGameRoom roomId=ROOMID playerCount=X />
```

roomId

eine vom Server generierte Zeichenfolge, die die Partie identifiziert

playerCount

die Anzahl der Spieler im Raum nach dem Beitritt des neuen Spielers

### Aktionen in einem Raum

Ein AdminClient kann sich als Observer eines Raums anmelden, dadurch erhält er alle Nachrichten, die das Spiel betreffen:

```xml
<observe roomId=ROOMID />
```

Ein AdminClient kann ein Spiel pausieren oder fortsetzen:

```xml
<pause roomId=ROOMID pause="true/false" />
```

Ein AdminClient kann einen Zug in einem pausierten Spiel anfordern:

```xml
<step roomId=ROOMID />
```

Ein AdminClient kann ein Spiel abbrechen:

```xml
<cancel roomId=ROOMID />
```

Ein AdminClient kann ein Spiel vorbereiten:

```xml
<prepare gameType="pluginId" pause="true">
  <slot displayName="p1" canTimeout="true" reserved="true"/>
  <slot displayName="p2" canTimeout="true" reserved="true"/>
</prepare>
```

pluginId

identifiziert das Spiel (für Hey, Danke für dne Fisch: `swc_2023_pengins`)

### Servereinstellungen

Die Servereinstellungen liegen in der `server.properties` Datei, die zusammen mit dem Server heruntergeladen wird. In ihr können folgende Werte konfiguriert werden:

password

lokales Administratorpasswort (standardmäßig auf `examplepassword`)

paused

ob ein automatisch angelegtes Spiel anfangs pausiert sein soll oder nicht (standardmäßig pausiert)
