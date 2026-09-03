---
name: XML Dokumentation
index: 2
permaid: xml
---

# XML-Elemente des Spiels Blokus

Diese Dokumentation beschreibt die spielspezifischen Elemente des [XML-Protokolls](/xml/protokoll) für das Spiel Blokus.

## Spielstatus

Die folgende XML-Struktur beschreibt den regelmäßig mitgeteilten Spielstatus.
Gesendet wird diese Nachricht immer dann,
wenn sich etwas am Spielfeld ändert.
Er wird außerdem vor der ersten Zugaufforderung gesendet.

In dem Status sind folgende Informationen enthalten:
- Das Team, welches als Erstes [zum Zug aufgefordert wird](/spiele/27_blokus/xml#aufforderung)
- Wie viele Züge gemacht wurden
- Welcher Stein im ersten Zug gelegt werden muss
- Die wievielte Runde es ist
- Das aktuelle Spielfeld
- Welche Steine welche Farbe noch zur Verfügung hat

Das Spielfeld enthält für jede Koordinaten, die belegt ist, ein ``field``-Element mit den Koordinaten und der Farbe die an der Stelle ist. 
Der Koordinatenursprung ``(0,0)`` liegt oben-links.
Der zuletzt im Spiel gespielte Zug `lastMove` ist wie ein gewöhnlicher [Zug](/spiele/27_blokus/xml#zug-senden) aufgebaut.

:::alert
Das Element ``<lastMove>...</lastMove>`` ist nur enthalten,
wenn bereits ein Zug gemacht wurde.
Der erste Spielstatus enthält es garantiert nicht.
:::

```xml
<room roomId="ROOM_ID">
    <data class="memento">
      <state class="state" startTeam="ONE" turn="1" startPiece="PENTO_X" round="1">
        <lastMove class="sc.plugin2027.SetMove">
          <piece color="BLUE" kind="PENTO_X" rotation="NONE" isFlipped="false">
            <position x="6" y="17"/>
          </piece>
        </lastMove>
        <board>
          <field x="7" y="17" content="BLUE"/>
          <field x="6" y="18" content="BLUE"/>
          <field x="7" y="18" content="BLUE"/>
          <field x="8" y="18" content="BLUE"/>
          <field x="7" y="19" content="BLUE"/>
        </board>
        <lastMoveMono/>
        <blueShapes>
          <shape>MONO</shape>
          <shape>DOMINO</shape>
          <shape>TRIO_L</shape>
          <shape>TRIO_I</shape>
          <shape>TETRO_O</shape>
          <shape>TETRO_T</shape>
          <shape>TETRO_I</shape>
          <shape>TETRO_L</shape>
          <shape>TETRO_Z</shape>
          <shape>PENTO_L</shape>
          <shape>PENTO_T</shape>
          <shape>PENTO_V</shape>
          <shape>PENTO_S</shape>
          <shape>PENTO_Z</shape>
          <shape>PENTO_I</shape>
          <shape>PENTO_P</shape>
          <shape>PENTO_W</shape>
          <shape>PENTO_U</shape>
          <shape>PENTO_R</shape>
          <shape>PENTO_Y</shape>
        </blueShapes>
        <yellowShapes>
          <shape>MONO</shape>
          <shape>DOMINO</shape>
          <shape>TRIO_L</shape>
          <shape>TRIO_I</shape>
          <shape>TETRO_O</shape>
          <shape>TETRO_T</shape>
          <shape>TETRO_I</shape>
          <shape>TETRO_L</shape>
          <shape>TETRO_Z</shape>
          <shape>PENTO_L</shape>
          <shape>PENTO_T</shape>
          <shape>PENTO_V</shape>
          <shape>PENTO_S</shape>
          <shape>PENTO_Z</shape>
          <shape>PENTO_I</shape>
          <shape>PENTO_P</shape>
          <shape>PENTO_W</shape>
          <shape>PENTO_U</shape>
          <shape>PENTO_R</shape>
          <shape>PENTO_X</shape>
          <shape>PENTO_Y</shape>
        </yellowShapes>
        <redShapes>
          <shape>MONO</shape>
          <shape>DOMINO</shape>
          <shape>TRIO_L</shape>
          <shape>TRIO_I</shape>
          <shape>TETRO_O</shape>
          <shape>TETRO_T</shape>
          <shape>TETRO_I</shape>
          <shape>TETRO_L</shape>
          <shape>TETRO_Z</shape>
          <shape>PENTO_L</shape>
          <shape>PENTO_T</shape>
          <shape>PENTO_V</shape>
          <shape>PENTO_S</shape>
          <shape>PENTO_Z</shape>
          <shape>PENTO_I</shape>
          <shape>PENTO_P</shape>
          <shape>PENTO_W</shape>
          <shape>PENTO_U</shape>
          <shape>PENTO_R</shape>
          <shape>PENTO_X</shape>
          <shape>PENTO_Y</shape>
        </redShapes>
        <greenShapes>
          <shape>MONO</shape>
          <shape>DOMINO</shape>
          <shape>TRIO_L</shape>
          <shape>TRIO_I</shape>
          <shape>TETRO_O</shape>
          <shape>TETRO_T</shape>
          <shape>TETRO_I</shape>
          <shape>TETRO_L</shape>
          <shape>TETRO_Z</shape>
          <shape>PENTO_L</shape>
          <shape>PENTO_T</shape>
          <shape>PENTO_V</shape>
          <shape>PENTO_S</shape>
          <shape>PENTO_Z</shape>
          <shape>PENTO_I</shape>
          <shape>PENTO_P</shape>
          <shape>PENTO_W</shape>
          <shape>PENTO_U</shape>
          <shape>PENTO_R</shape>
          <shape>PENTO_X</shape>
          <shape>PENTO_Y</shape>
        </greenShapes>
        <validColors>
          <color>BLUE</color>
          <color>YELLOW</color>
          <color>RED</color>
          <color>GREEN</color>
        </validColors>
      </state>
    </data>
  </room>

```

## Spiel betreten ohne Reservierungscode

Betritt ein beliebiges offenes Spiel:

```xml
<join gameType="swc_2027_blokus"/>
```

Sollte kein Spiel offen sein, wird so ein neues erstellt.
Je nachdem ob `paused` in `server.properties` true oder false ist,
wird das Spiel pausiert gestartet oder nicht.

## Spielzug

### Aufforderung

Wenn der eigene Client am Zug ist, folgt nach dem Spielstatus diese
Aufforderung, dass der Server einen Zug erwartet:

```xml
<room roomId="ROOM_ID">
    <data class="moveRequest"/>
</room>
```

### Zug senden

Beim ersten Zug muss ein Stein platziert werden.
Danach gibt es immer die Option zu passen.

#### Passen

Ein Passen-Zug sieht wie folgt aus:
```xml
<room roomId="ROOM_ID">
  <data class="sc.plugin2027.SkipMove">
    <color>TEAM_FARBE</color>
  </data>
</room>
```

Die Teamfarbe muss angegeben werden wie im Memento angegeben in validColors,
also ``BLUE``, ``YELLOW``, ``RED`` oder ``GREEN``.
Hier muss die Farbe eingetragen werden,
die eigentlich dran wäre,
aber passt.  

#### Setzen

Ein Zug im Spiel Blokus besteht immer aus einem Stein (`kind`),
einer Farbe (`color`),
ob und wie der Stein rotiert ist (`rotation`),
ob der Stein gespiegelt ist (`isFlipped`)
und Koordinaten an die der Stein platziert werden soll (`position`):

```xml
<room roomId="ROOM_ID">
    <data class="sc.plugin2027.SetMove">
        <piece color="BLUE" kind="PENTO_U" rotation="NONE" isFlipped="false">
            <position x="0" y="0"/>
        </piece>
    </data> 
</room>",
            
```

Die Koordinaten geben hierbei die Ecke oben-links vom Stein an.
An der Koordinate muss nicht zwingend ein Stück des Steins liegen ([Beispiel: Pento-X](/spiele/27_blokus/regeln#spielmaterial)).
Die Farbe muss nach den Regeln angegeben sein.
Wenn Spieler 1 anfängt,
muss er im ersten Zug also `BLUE`angeben,
dann Spieler 2 im zweiten Zug `YELLOW`,
dann Spieler 1 im dritten Zug `RED`
und dann Spieler 2 im vierten Zug `GREEN`.
Die Rotation kann mit folgenden Werten angegeben werden:
- `RIGHT`
- `MIRROR`
- `LEFT`
- `NONE`
Die Spiegelung ist auf der vertikalen-Achse und wird mit `true` oder `false` angegeben.
Die Steine haben die gleichen Namen wie in der Anleitung,
müssen aber wie folgt geschrieben sein:
- `MONO`
- `DOMINO`
- `TRIO_L`
- `TRIO_I`
- `TETRO_O`
- `TETRO_T`
- `TETRO_I`
- `TETRO_L`
- `TETRO_Z`
- `PENTO_L`
- `PENTO_T`
- `PENTO_V`
- `PENTO_S`
- `PENTO_Z`
- `PENTO_I`
- `PENTO_P`
- `PENTO_W`
- `PENTO_U`
- `PENTO_R`
- `PENTO_X`
- `PENTO_Y`

## Spielergebnis

Wenn das Spiel vorbei ist,
erhalten die Clients das Ergebnis der Partie:

```xml
<room roomId="ROOM_ID">
  <data class="result">
    <definition>
      <fragment name="Siegpunkte">
        <aggregation>SUM</aggregation>
        <relevantForRanking>true</relevantForRanking>
      </fragment>
      <fragment name="Punkte">
        <aggregation>AVERAGE</aggregation>
        <relevantForRanking>true</relevantForRanking>
      </fragment>
    </definition>
    <scores>
      <entry>
        <player name="Spieler 1" team="ONE"/>
        <score>
          <part>2</part>
          <part>137</part>
        </score>
      </entry>
      <entry>
        <player name="Spieler 2" team="TWO"/>
        <score>
          <part>0</part>
          <part>74</part>
        </score>
      </entry>
    </scores>
    <winner team="ONE" regular="true" reason="Spieler 1 hat am meisten Punkte erzielt."/>
  </data>
</room>
```

Unter `scores` werden jeweils die beiden Spieler mit den erreichten Punkten aufgezählt.
Was genau die Werte in `part` bedeuten,
steht in der `definition`.
Für Blokus ist das die Anzahl der Siegpunkte,
die im Wettkampfsystem angerechnet werden 
und die am Ende des Spiels belegten Felder plus extra Punkte, wie in der [Wertung](/spiele/27_blokus/regeln#wertung) beschrieben.

In diesem Beispiel sieht man,
dass Spieler 1 mit 137 Punkten dieses Spiel gewonnen hat.

Bei einem Unentschieden erhalten beide Spieler jeweils einen Siegpunkt und der `winner`-Tag führt kein Team:

```xml
<winner regular="true" reason="Beide Spieler sind gleichauf"/>
```