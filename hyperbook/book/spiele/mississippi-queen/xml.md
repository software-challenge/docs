---
name: XML-Schnittstelle
---

# Die Schnittstelle zum Server (XML)

Der :t[Spielleiter]{#server} kommuniziert mit den Computerspielern über eine Netzwerkverbindung. Dadurch ist man aus technischer Sicht komplett flexibel, was die Wahl der Programmiersprache angeht. Die :t[Computerspieler]{#player} müssen lediglich das Kommunikationsprotokoll erfüllen.

Anfängern wird allerdings davon abgeraten, einen komplett eigenen Computerspieler zu schreiben. Es ist deutlich einfacher, auf einem bereitgestellten Zufallsspieler aufzubauen, da man sich dabei nur um die Strategie und nicht um die Kommunikation kümmern muss. Außerdem wird vom Institut für Informatik die beste Unterstützung für Java/Kotlin geboten.

:::alert{warn}
Im Verlauf des Wettbewerbes können Elemente zur Kommunikationsschnittstelle hinzugefügt werden, die in dieser Dokumentation nicht aufgeführt sind. Um auch bei solchen Änderungen sicher zu sein, dass ein Computerspieler fehlerfrei mit dem Server kommunizieren kann, sollten beim Auslesen des :t[XML]{#xml} jegliche Daten verworfen werden, die hier nicht weiter definiert sind.
:::
:::alert{info}
Die bereitgestellten Programme 
(Server, Java-Spieler) nutzen eine Bibliothek,
um Java-Objekte direkt in :XML zu konvertieren und umgekehrt.
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
Die Darstellung skizziert die Architektur unseres Spielsystems, bestehend aus einem Server, dem Spielleiter und zwei Spielern. Der Server verwaltet das Spielgeschehen mittels des XML-Protokolles und interagiert mit den beiden Spieler, welche die Spielervorlage nutzeb. Jeder Spieler stellt eine eigenständige Instanz des Spiels dar.



## Das Spielprotokoll

In diesem Abschnitt wird die spiel unabhängige Kommunikationsschnittstelle für Spieler festgehalten, um das Schreiben eines komplett eigenen Clients zu ermöglichen.

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
    STATUS
  </data>
</room>
```

#### Status nach der Willkommensnachricht

Das vorliegende XML-Protokoll definiert eine Struktur zur Darstellung eines Spielfelds mit hexagonalem Raster, wobei [Cube-Koordinaten](https://www.redblobgames.com/grids/hexagons/#coordinates-cube) verwendet werden. Das Spielfeld besteht aus verschiedenen Segmenten, die jeweils eine Richtung und ein Zentrum haben. Diese Segmente sind Teil eines übergeordneten Koordinatensystems und sind untereinander verbunden.
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

Das vorliegende XML-Protokoll stellt eine umfassende Struktur für die Darstellung eines hexagonalen Spielfelds mit  Cube-Koordinaten dar. Das Spielfeld wird in Segmente unterteilt, wobei jedes Segment durch eine Richtung und ein Zentrum charakterisiert wird. Die Cube-Koordinaten ($q$, $r$ und $s$) ermöglichen die eindeutige Positionierung der Segmente im hexagonalen Raster und eine einfache Nutzung von bestehenden Algorithmen mit diesem System.

- Die ``<state>``-Ebene gibt Auskunft über den aktuellen Spielzustand, einschließlich des Spielzugs (``turn``) und des Teams (``currentTeam``), das gerade am Zug ist.

- Die ``<board>``-Ebene enthält Informationen über das Spielfeld, darunter die erwartete nächste Richtung (``nextDirection``), in die ein Segment erweitert werden kann.

- Die ``<segments>``-Ebene enthält eine Liste von Segmenten, die jeweils eine bestimmte Richtung und ein Zentrum haben. Jedes Segment kann verschiedene Feldtypen enthalten, wie Wasser, Inseln, Passagiere usw., die in Arrays organisiert sind.
:::alert{info}
Das Passagier-Feld nimmt eine besondere Stellung gegenüber den anderen Feldern ein, da dieses eine Richtung und eine Anzahl und Passagieren hat. Dies ist nötig, um dem Spieler mitzuteilen, von wo aus dieser die Passagiere aufnehmen kann.
:::

- Die ``<ship>``-Ebene enthält Informationen über Schiffe im Spiel. Jedes Schiff wird durch Teamzugehörigkeit (``team``), Punktzahl (``points``), Blickrichtung (``direction``), Geschwindigkeit (``speed``), Kohlebestand (``coal``), Anzahl der Passagiere (``passengers``) und verbleibende Runden mit freier Bewegung (freeTurns) charakterisiert. Die Position des Schiffs wird durch Cube-Koordinaten ($q$, $r$ und $s$) angegeben.

Dieses XML-Protokoll bietet eine umfassende Struktur zur Modellierung eines hexagonalen Spielfelds mit Segmenten, die in einem übergeordneten Koordinatensystem platziert sind. Die Verwendung von Cube-Koordinaten ermöglicht eine präzise Positionierung und Navigation im Spielfeld.

##### Richtungen
Da Mississippi-Queen auf einem hexagonalen Spielfeld gespielt wird, 
folgen daraus die sechs Richtungen:
- `RIGHT(CubeCoordinates(+1, 0))`
- `DOWN_RIGHT(CubeCoordinates(0, +1))`
- `DOWN_LEFT(CubeCoordinates(-1, +1))`
- `LEFT(CubeCoordinates(-1, 0))`
- `UP_LEFT(CubeCoordinates(0, -1))`
- `UP_RIGHT(CubeCoordinates(+1, -1))`


#### Spielablauf

Der erste Spieler erhält dann eine Zugaufforderung:

```xml
<room roomId="ROOM_ID">
  <data class="moveRequest" />
</room>
```

Worauf dieser innerhalb der gesetzten Zeitbeschränkung mit einem der folgenden Zug-Typen antwortet:

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

Ein Zug besteht immer aus einer Liste aus Aktionen. Die Reihenfolge dieser Liste bestimmt auch, in welcher Reihenfolge die Aktionen ausgeführt werden. 
Insbesondere muss die Beschleunigungsaktion immer als **erstes** kommen.

### Weiterführende Informationen

:t[Einführung in XML]{#xml}

:t[Administration der Spiele mit XML]{#xml-administration.md}