---
name: XML-Elemente
index: 2
---

# XML-Elemente des Spiels Mississippi Queen

Diese Dokumentation beschreibt die spielspezifischen Elemente des [XML-Protokolls](/xml/protokoll)
für das Spiel Mississippi Queen.

## Spielstatus

Die folgende XML-Struktur beschreibt den regelmäßig mitgeteilten Spielstatus,
der ein Spielfeld aus hexagonalen Feldern mittels [kubischer Koordinaten](https://www.redblobgames.com/grids/hexagons/#coordinates-cube)
sowie eine Liste der darauf verorteten Schiffe beschreibt.
Das Spielfeld wird in Segmente unterteilt, wobei jedes Segment durch eine Richtung und ein Zentrum charakterisiert wird.
Die Cube-Koordinaten ($q$, $r$ und $s$) ermöglichen die eindeutige Positionierung der Segmente im hexagonalen Raster
und eine einfache Nutzung verschiedener Algorithmen innerhalb dieses Systems.


```xml
<state turn="0" currentTeam="ONE">
  <board nextDirection="RICHTUNG">
    <segment direction="RICHTUNG">
      <center q="INT" r="INT" s="INT" />
      <field-array>
        <water/>
        <water/>
        <island/>
        <passenger direction="RICHTUNG" passenger="INT"/>
        <water/>
      </field-array>
      <!-- 3 weitere Spalten -->
    </segment>
    <!-- usw. für andere Segmente -->
  </board>
  <ships>
    <ship team="TEAM" points="INT" direction="RICHTUNG" speed="INT" coal="INT" passengers="INT" freeTurns="INT" stuck="BOOL">
      <position q="INT" r="INT" s="INT" />
    </ship>
    <!-- usw. für das andere Schiff -->
  </ships>
</state>
```

- Die ``<state>``-Ebene gibt Auskunft über den aktuellen Spielzustand, einschließlich des Spielzugs (``turn``) und des Teams (``currentTeam``), das gerade am Zug ist.
- Die ``<board>``-Ebene enthält Informationen über das Spielfeld, darunter die Richtung des nächsten Segments (``nextDirection``), um die Strömung zuverlässig zu kalkulieren.
- Die ``<segments>``-Ebene enthält eine Liste von Segmenten, die jeweils eine bestimmte Richtung und ein Zentrum haben.
  Jedes Segment enthält 4 Spalten zu je 5 Feldern aus den Feldtypen Wasser, Insel und Passagiere.
  Passagierfelder enhalten zusätzlich eine Richtung des Anliegers und eine Anzahl,
  letztere ändert sich durch Abholung vom Anlieger.
  Es gibt maximal ein Passagierfeld pro Segment.
- Die ``<ship>``-Ebene enthält Informationen über Schiffe im Spiel.
  Jedes Schiff wird durch Teamzugehörigkeit (``team``), Punktzahl (``points``), Blickrichtung (``direction``), Geschwindigkeit (``speed``), Kohlebestand (``coal``), Anzahl der Passagiere (``passengers``) und freie Derhungen im kommenden Zug (`freeTurns`) charakterisiert. Die Position des Schiffs wird durch Cube-Koordinaten ($q$, $r$ und $s$) angegeben. Der Wahrheitswert `stuck` gibt an, ob das Schiff festgefahren und damit ausgeschieden ist.

## Richtungen

Da Mississippi-Queen auf einem hexagonalen Spielfeld gespielt wird,
gibt es sechs Bewegungsrichtungen:

| Direction   |  q  |  r  |  s  |
|-------------|-----|-----|-----|
| RIGHT       | q+1 | r+0 | s-1 |
| DOWN_RIGHT  | q+0 | r+1 | s-1 |
| DOWN_LEFT   | q-1 | r+1 | s+0 |
| LEFT        | q-1 | r+0 | s+1 |
| UP_LEFT     | q+0 | r-1 | s+1 |
| UP_RIGHT    | q+1 | r-1 | s+0 |

## Spielzug

Ein Zug kann wie folgt aussehen:
```xml
<room roomId="ROOM_ID">
  <data class="move">
    <actions>
      <acceleration acc="1" />
      <advance distance="2" />
      <push direction="RIGHT" />
      <turn direction="DOWN_RIGHT" />
    <actions/>
  </data>
</room>
```

Ein Zug besteht immer aus einer Liste aus Aktionen.
Die Reihenfolge bestimmt, in welcher Reihenfolge die Aktionen ausgeführt werden.
Insbesondere muss die Beschleunigungsaktion immer als **erstes** kommen.

## Spielergebnis

```xml
<result>
  <definition>
    <fragment name="Siegpunkte">
      <aggregation>SUM</aggregation>
      <relevantForRanking>true</relevantForRanking>
    </fragment>
    <fragment name="Punkte">
      <aggregation>AVERAGE</aggregation>
      <relevantForRanking>true</relevantForRanking>
    </fragment>
    <fragment name="Passagiere">
      <aggregation>AVERAGE</aggregation>
      <relevantForRanking>true</relevantForRanking>
    </fragment>
  </definition>
  <scores>
    <entry>
      <player name="Alice" team="ONE"/>
      <score>
        <part>0</part>
        <part>0</part>
        <part>0</part>
      </score>
    </entry>
    <entry>
      <player name="Bob" team="TWO"/>
      <score>
        <part>2</part>
        <part>2</part>
        <part>0</part>
      </score>
    </entry>
  </scores>
  <winner team="TWO" regular="false" reason="Regelverletzung von Alice: Der Zug enthält keine Aktionen bei &apos;Move[]&apos;"/>
</result>
```

In diesem Beispiel erhält Alice aufgrund der Regelverletzung keine Punkte und Bob (Team Zwei) gewinnt.
Das Feld `winner.team` fehlt bei einem Unentschieden.
Ein nicht-Vorhandensein des `winner`-tags ist ebenfalls als Unentschieden zu werten.
