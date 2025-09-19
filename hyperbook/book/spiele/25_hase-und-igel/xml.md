---
name: XML-Dokumentation
---

# XML-Elemente des Spiels Hase und Igel

Diese Dokumentation beschreibt die spielspezifischen Elemente des [XML-Protokolls](/xml/protokoll)
für das Spiel Hase und Igel.

## Spielstatus

Die folgende XML-Struktur beschreibt den regelmäßig mitgeteilten Spielstatus,
der ein Spielfeld aus Feldern, die in einer Spirale angeordnet sind,
sowie die darauf verorteten Spieler enthält.
Die Felder werden implizit nummeriert,
wobei das erste Feld (START) den index 0 erhält.

```xml
<room roomId="ROOM_ID">
    <data class="memento">
        <state class="state" startTeam="ONE" turn="0">
            <board>
                <field>START</field>
                <field>CARROTS</field>
                <field>SALAD</field>
                <field>POSITION_1</field>
                <field>POSITION_2</field>
                <field>HEDGEHOG</field>
                <field>MARKET</field>
                <field>HARE</field>
                ...
                <field>GOAL</field>
            </board>
            <hare team="ONE" position="1" salads="5" carrots="68">
                <lastAction class="advance" distance="1"/>
                <cards/>
            </hare>
            <hare team="TWO" position="2" salads="5" carrots="68">
                <lastAction class="advance" distance="2"/>
                <cards/>
            </hare>
            <lastMove class="advance" distance="2"/>
        </state>
    </data>
</room>
```

## Spiel betreten ohne Reservierungscode

Betritt ein beliebiges offenes Spiel:

```xml
<join gameType="swc_2025_hase_und_igel"/>
```

Sollte kein Spiel offen sein, wird so ein neues erstellt.
Je nachdem ob `paused` in `server.properties` true oder false ist,
wird das Spiel pausiert gestartet oder nicht.

## Spielzug

Folgende Arten von Zügen sind möglich:

```xml
<room roomId="ROOM_ID">
  <data class="fallback"/>
</room>
```

```xml
<room roomId="ROOM_ID">
  <data class="eatsalad"/>
</room>
```

```xml
<room roomId="ROOM_ID">
  <data class="exchangecarrots" amount="-10"/>
</room>
```

```xml
<room roomId="ROOM_ID">
  <data class="advance" distance="3"/>
</room>
```

```xml
<room roomId="ROOM_ID">
  <data class="advance" distance="5">
    <card>HURRY_AHEAD</card>
    <card>FALL_BACK</card>
    <card>EAT_SALAD</card>
  </data>
</room>
```

Für einen Vorwärtszug können Karten angegeben werden, 
die in der gegebenen Reihenfolge ausgespielt werden.

Falls die einzige oder letzte Karte auf einem Marktfeld angegeben wird,
wird diese Karte stattdessen gekauft.

## Spielergebnis

```xml
<room roomId="ROOM_ID">
    <data class="result">
        <definition>
            <fragment name="Siegpunkte">
                <aggregation>SUM</aggregation>
                <relevantForRanking>true</relevantForRanking>
            </fragment>
            <fragment name="Feldnummer">
                <aggregation>AVERAGE</aggregation>
                <relevantForRanking>true</relevantForRanking>
            </fragment>
            <fragment name="Karotten">
                <aggregation>AVERAGE</aggregation>
                <relevantForRanking>true</relevantForRanking>
            </fragment>
        </definition>
        <scores>
            <entry>
                <player name="Spieler 1" team="ONE"/>
                <score>
                    <part>0</part>
                    <part>0</part>
                    <part>0</part>
                </score>
            </entry>
            <entry>
                <player name="Spieler 2" team="TWO"/>
                <score>
                    <part>2</part>
                    <part>63</part>
                    <part>0</part>
                </score>
            </entry>
        </scores>
        <winner team="TWO" regular="true" reason="Spieler 2 ist weiter vorne."/>
    </data>
</room>
```
