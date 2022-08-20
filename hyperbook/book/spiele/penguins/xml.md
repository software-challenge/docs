---
name: XML-Schnittstelle
---

# Die Schnittstelle zum Server (XML)

Der :t[Spielleiter]{#server} kommuniziert mit den Computerspielern über eine Netzwerkverbindung. Dadurch ist man aus technischer Sicht komplett flexibel, was die Wahl der Programmiersprache angeht. Die :t[Computerspieler]{#player} müssen lediglich das Kommunikationsprotokoll erfüllen.

Anfängern wird allerdings davon abgeraten, einen komplett eigenen :t[Computerspieler]{#player} zu schreiben. Es ist deutlich einfacher, auf einem bereitgestellten Simpleclient aufzubauen, da man sich dabei nur um die Strategie und nicht um die Kommunikation kümmern muss. Außerdem wird vom Institut für Informatik die beste Unterstützung für Java/Kotlin geboten.

## Hinweise

Im Verlauf des Wettbewerbes können Elemente zur Kommunikationsschnittstelle hinzugefügt werden, die in dieser Dokumentation nicht aufgeführt sind. Um auch bei solchen Änderungen sicher zu sein, dass ein :t[Computerspieler]{#player} fehlerfrei mit dem Server kommunizieren kann, sollten beim Auslesen des :t[XML]{#xml} jegliche Daten verworfen werden, die hier nicht weiter definiert sind.

Die bereitgestellten Programme 
(:t[Server]{#server}, :t[Java-Spieler]{#player}) nutzen eine Bibliothek,
um Java-Objekte direkt in :t[XML]{#xml} zu konvertieren und umgekehrt.
Dabei werden XML-Nachrichten nicht unbedingt mit einem Zeilenumbruch abgeschlossen.

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

- **ROOM_ID**
  - Identifikationscode der Spielpartie

### Spielverlauf

#### Start

Der Server eröffnet das Spiel mit einer Begrüßung und dem initialen Spielstatus sobald beide Spieler verbunden sind.

- **ROOM_ID**
  - Identifikationscode der Spielpartie

- **TEAMNUMBER**
  - Spielernummer, eg. `ONE`, `TWO`

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
	</list>
	<list>
	  <field>2</field>
	  <field>3</field>
	</list>
  </board>
  <fishes>
	<int>0</int>
	<int>0</int>
  </fishes>
</state>
```

Es enthält die Zugnummer in ``turn``, das anfangende Team in ``startTeam``, eine Liste an Feldern in ``board`` und die Anzahl Fishe jedes Spielers in ``fishes``.
In `board` entsprechen die Positionen der Felder auf dem Spielfeld ihrer Positionen in der Liste => `x` Koordinate und der Position ihrer Liste im Board => `y` Koordinate. Die Zahl innerhalb der `field` objekte steht für die Anzahl Fishe auf dem Feld.

#### Spielablauf

Der erste Spieler erhält dann eine Zugaufforderung:

```xml
<room roomId="ROOM_ID">
  <data class="moveRequest" />
</room>
```

Worauf dieser innerhalb der gesetzten Zeitbeschränkung mit einem [[Zug]](spiele/penguins_xml#zug) antwortet:

```xml
<room roomId="ROOM_ID">
  <data class="move">
    ZUG
  </data>
</room>
```

#### Zug

Ein Zug besteht aus einem ``from`` und einem ``to`` Vektor, welche beide `x` und `y` Werte enthalten.

Beispiel:
```xml
<from x="0" y="7"/>
<to x="17" y="5"/>
```

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

- **cause**
  - Beitrag des Spielers zum Spielende (`REGULAR`, `LEFT`, `RULE_VIOLATION`, `SOFT_TIMEOUT`, `HARD_TIMEOUT`).
- **reason**
  - Erklärung zu `cause`.
- **part**
  - Siegpunkte des Spielers (0 verloren, 1 unentschieden, 2 gewonnen) und weitere Punkteinträge entsprechend `definition`.
- **winner**
  - Gibt das Gewinner-Team an, wenn es eines gibt.

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

Mit einem authentifizierten :t[Computerspieler]{#player} kann man den Server steuern.

### Verbindungsaufbau

Zuerst muss sich ein :t[Computerspieler]{#player} mit dem entsprechenden Passwort aus `server.properties` authentifizieren:

```xml
<protocol><authenticate password="examplepassword"/>
```

Ein authentifizierter AdminClient wird benachrichtigt, wenn sich ein :t[Computerspieler]{#player} über ein `JoinRoomRequest` verbindet:

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

- **pluginId**
  - identifiziert das Spiel (für Hey, Danke für dne Fisch: `swc_2023_pengins`)

### Servereinstellungen

Die Servereinstellungen liegen in der `server.properties` Datei, die zusammen mit dem Server heruntergeladen wird. In ihr können folgende Werte konfiguriert werden:

- **password**
  - lokales Administratorpasswort (standardmäßig auf `examplepassword`)

- **paused**
  - ob ein automatisch angelegtes Spiel anfangs pausiert sein soll oder nicht (standardmäßig pausiert)
