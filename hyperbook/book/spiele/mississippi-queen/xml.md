---
name: XML-Schnittstelle
---

# Die Schnittstelle zum Server (XML)

Der :t[Spielleiter]{#server} kommuniziert mit den Computerspielern über eine Netzwerkverbindung. Dadurch ist man aus technischer Sicht komplett flexibel, was die Wahl der Programmiersprache angeht. Die :t[Computerspieler]{#player} müssen lediglich das Kommunikationsprotokoll erfüllen.

Anfängern wird allerdings davon abgeraten, einen komplett eigenen Computerspieler zu schreiben.
Es ist deutlich einfacher, auf einer bereitgestellten Spielervorlage aufzubauen,
da man sich dabei nur um die Strategie und nicht um die Kommunikation kümmern muss.
Außerdem wird vom Institut für Informatik die beste Unterstützung für Java/Kotlin geboten.

:::alert{warn}
Im Verlauf des Wettbewerbes können Elemente zur Kommunikationsschnittstelle hinzugefügt werden,
die in dieser Dokumentation nicht aufgeführt sind.
Damit ein Computerspieler auch bei solchen Änderungen fehlerfrei mit dem Server kommunizieren kann,
sollten beim Auslesen des :t[XML]{#xml} jegliche Daten verworfen werden,
die hier nicht weiter definiert sind.
:::

:::alert{info}
Die bereitgestellten Programme
(Server, Java-Spieler) nutzen eine Bibliothek namens XStream,
um Java-Objekte direkt in :t[XML]{#xml} zu konvertieren und umgekehrt.
Dabei werden XML-Nachrichten nicht unbedingt mit einem Zeilenumbruch abgeschlossen.
:::

## Der Aufbau

:::plantuml
@startuml
node "Server" as server {
    artifact "Spielleiter" as serverApp
}
node "Spieler 1" as client1 {
    artifact "Spielervorlage" as client1App
}
node "Spieler 2" as client2 {
    artifact "Spielervorlage" as client2App
}
serverApp --> client1App : Sendet Status und Anfragen in XML
serverApp --> client2App : Sendet Status und Anfragen in XML
client1App --> serverApp : Sendet Zug in XML
client2App --> serverApp : Sendet Zug in XML
@enduml
:::

Die Darstellung skizziert die Architektur unseres Spielsystems,
bestehend aus dem Server als :t[Spielleiter]{#server} und zwei Spielern.
Der Server verwaltet das Spielgeschehen
und interagiert über das XML-Protokoll mit den beiden Spielern,
die jeweils auf einer Spielervorlage aufbauen.

## Das Spielprotokoll

In diesem Abschnitt wird die spielunabhängige Kommunikationsschnittstelle für Spieler festgehalten,
um das Schreiben eines komplett eigenen Clients zu ermöglichen.

### Spiel betreten

```xml
<protocol>
```

Dieses Tag eröffnet die Kommunikation mit dem Server. Dann gibt es drei Möglichkeiten, einer Spielpartie beizutreten.

#### Beliebige Partie

Betritt eine beliebige offene Spielpartie:

```xml
<join />
```

Sollte kein Spiel offen sein, wird automatisch ein neues erstellt. Abhängig von der Einstellung `paused` in `server.properties` wird das Spiel pausiert, gestartet oder nicht.

#### Bestimmte Partie

Einer bestimmten, bereits offenen, aber noch nicht gestarteten Partie kann durch Angabe der `ROOM_ID` beigetreten werden:

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
Folgend werden die spiel spezifischen Punkte des XML-Protokolls erläutert, welche sich in jedem Jahr ändern und auch am Anfang der Saison noch Änderungen unterliegen kann.
#### Start

Der Server eröffnet das Spiel mit einer Begrüßung und dem initialen Spielstatus, sobald beide Spieler verbunden sind.

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
    SPIELSTATUS
  </data>
</room>
```

#### Spielablauf

Der erste Spieler erhält dann eine Zugaufforderung:

```xml
<room roomId="ROOM_ID">
  <data class="moveRequest" />
</room>
```

Worauf dieser innerhalb der erlaubten Zeitspanne mit einem spielspezifischen Zug antwortet.

#### Spielstatus

Die folgende XML-Struktur beschreibt den regelmäßig mitgeteilten Spielstatus,
der ein Spielfeld aus hexagonalen Feldern mittels [kubischer Koordinaten](https://www.redblobgames.com/grids/hexagons/#coordinates-cube) sowie eine Liste der darauf verorteten Schiffe beschreibt.
Das Spielfeld wird in Segmente unterteilt, wobei jedes Segment durch eine Richtung und ein Zentrum charakterisiert wird.
Die Cube-Koordinaten ($q$, $r$ und $s$) ermöglichen die eindeutige Positionierung der Segmente im hexagonalen Raster und eine einfache Nutzung verschiedener Algorithmen innerhalb dieses Systems.


```xml
<state turn="0" currentTeam="ONE">
	<board nextDirection="RICHTUNG">
		<segments>
			<segment direction="RICHTUNG">
				<center q="INT" r="INT" s="INT" />
				<fields>
					<array>
						<water/>
						<island/>
						<passenger direction="RICHTUNG" passenger="INT"/>
						<!-- usw. für andere Felder -->
					</array>
					<!-- usw. für andere Arrays -->
				</fields>
			</segment>
			<!-- usw. für andere Segmente -->
		</segments>
	</board>
	<ships>
		<ship team="TEAM" points="INT" direction="RICHTUNG" speed="INT" coal="INT" passengers="INT" freeTurns="INT">
			<position q="INT" r="INT" s="INT" />
		</ship>
		<!-- usw. für das andere Schiff -->
	</ships>
</state>
```

- Die ``<state>``-Ebene gibt Auskunft über den aktuellen Spielzustand, einschließlich des Spielzugs (``turn``) und des Teams (``currentTeam``), das gerade am Zug ist.
- Die ``<board>``-Ebene enthält Informationen über das Spielfeld, darunter die Richtung des nächsten Segments (``nextDirection``), um die Strömung zuverlässig zu kalkulieren.
- Die ``<segments>``-Ebene enthält eine Liste von Segmenten, die jeweils eine bestimmte Richtung und ein Zentrum haben. Jedes Segment kann verschiedene Feldtypen enthalten, wie Wasser, Inseln, Passagiere usw., die in Arrays organisiert sind.

:::alert{info}
Das Passagier-Feld nimmt eine besondere Stellung gegenüber den anderen Feldern ein,
da dieses eine Richtung und eine Passagieranzahl hat.
:::

- Die ``<ship>``-Ebene enthält Informationen über Schiffe im Spiel. Jedes Schiff wird durch Teamzugehörigkeit (``team``), Punktzahl (``points``), Blickrichtung (``direction``), Geschwindigkeit (``speed``), Kohlebestand (``coal``), Anzahl der Passagiere (``passengers``) und verbleibende Runden mit freier Bewegung (freeTurns) charakterisiert. Die Position des Schiffs wird durch Cube-Koordinaten ($q$, $r$ und $s$) angegeben.

##### Richtungen

Da Mississippi-Queen auf einem hexagonalen Spielfeld gespielt wird,
folgen daraus die sechs Richtungen:
- RIGHT      : q+1, r+0, s-1
- DOWN_RIGHT : q+0, r+1, s-1
- DOWN_LEFT  : q-1, r+1, s+0
- LEFT       : q-1, r+0, s+1
- UP_LEFT    : q+0, r-1, s+1
- UP_RIGHT   : q+1, r-1, s+0

##### Spielzug
Ein Zug kann beispielhaft wie folgt aussehen:
```xml
<room roomId="ROOM_ID">
  <move>
      <actions>
          <acceleration acc="1" />
          <advance distance="2" />
          <push direction="RIGHT" />
          <turn direction="DOWN_RIGHT" />
      </actions>
  </move>
</room>
```

Ein Zug besteht immer aus einer Liste aus Aktionen.
Die Reihenfolge dieser Liste bestimmt auch, in welcher Reihenfolge die Aktionen ausgeführt werden.
Insbesondere muss die Beschleunigungsaktion immer als **erstes** kommen.

### Weiterführende Informationen

:t[Einführung in XML]{#xml}

:t[Administration der Spiele mit XML]{#xml-administration.md}
