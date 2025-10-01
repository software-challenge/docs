---
name: XML Dokumentation
permaid: xml
---

# XML-Elemente des Spiels Piranhas

Diese Dokumentation beschreibt die spielspezifischen Elemente des [XML-Protokolls](/xml/protokoll)
für das Spiel Piranhas.

## Spielstatus

Die folgende XML-Struktur beschreibt den regelmäßig mitgeteilten Spielstatus.
Gesendet wird diese Nachricht immer dann, wenn sich was am Spielfeld ändert,
d.h. wenn ein Spieler einen Zug gespielt hat.

Ein Status enthält das aktuelle Spielfeld und den zuletzt gespielten Zug.
Das Spielbrett ist ein 2-Dimensionales Grid an Feldern,
mit dem Koordinatenursprung (0 , 0) unten links in der Ecke.
Entsprechend überträgt der Server das Spielfeld aufgeteilt
in die einzelnen Reihen und beginnt dabei mit der untersten Reihe.
Die Reihen werden von links nach rechts beschrieben.
Der zuletzt im Spiel gespielte Zug `lastMove` ist wie ein gewöhnlicher 
[Zug](/spiele/26_piranhas/xml#zug-senden) aufgebaut.

```xml
<room roomId="ROOM_ID">
    <data class="memento">
        <state class="state" startTeam="ONE" turn="19">
            <lastMove>
                <from x="7" y="6"/>
                <direction>UP_RIGHT</direction>
            </lastMove>
            <board>
                <row>
                    <field>TWO_S</field>
                    <field>TWO_S</field>
                    <field>TWO_S</field>
                    <field>EMPTY</field>
                    <field>EMPTY</field>
                    <field>EMPTY</field>
                    <field>EMPTY</field>
                    <field>TWO_L</field>
                    <field>TWO_M</field>
                    <field>EMPTY</field>
                </row>
                <row>
                    <field>ONE_S</field>
                    <field>EMPTY</field>
                    <field>EMPTY</field>
                    <field>EMPTY</field>
                    <field>SQUID</field>
                    <field>EMPTY</field>
                    <field>EMPTY</field>
                    <field>ONE_M</field>
                    <field>EMPTY</field>
                    <field>EMPTY</field>
                </row>
                ...
                <row>
                    <field>EMPTY</field>
                    <field>TWO_M</field>
                    ...
                    <field>TWO_M</field>
                    <field>EMPTY</field>
                </row>
            </board>
        </state>
    </data>
</room>
```

### Felder

Die Felder werden wie folgt codiert:

- Leeres Feld: `EMPTY`
- Krakenfeld: `SQUID`
- Feld mit Fisch: `TEAM_GRÖßE` (z.B. `ONE_S` für den kleinen Fisch des Spielers 1, meist Rot)
  - wobei TEAM `ONE` oder `TWO` ist
  - und GRÖßE `S`, `M` oder `L` ist, der Größe des Fisches

## Spiel betreten ohne Reservierungscode

Betritt ein beliebiges offenes Spiel:

```xml
<join gameType="swc_2026_piranhas"/>
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

Ein Zug im Spiel Pirnhas besteht immer aus einer Startposition,
auf dem ein Fisch des eigenen Teams liegen muss
und einer Richtung, in welcher sich dieser Fisch bewegen soll:

```xml
<room roomId="ROOM_ID">
    <data class="move">
        <from x="9" y="3"/>
        <direction>LEFT</direction>
    </data>
</room>
```

Die Richtung ist codiert als einer der folgenden acht Optionen:

`UP` `UP_RIGHT` `RIGHT` `DOWN_RIGHT` `DOWN` `DOWN_LEFT` `LEFT` `UP_LEFT`

## Spielergebnis

Wenn das Spiel vorbei ist, erhalten die Clients das Ergebnis der Partie:

```xml
<room roomId="ROOM_ID">
    <data class="result">
        <definition>
            <fragment name="Siegpunkte">
                <aggregation>SUM</aggregation>
                <relevantForRanking>true</relevantForRanking>
            </fragment>
            <fragment name="Schwarmgr..e">
                <aggregation>AVERAGE</aggregation>
                <relevantForRanking>true</relevantForRanking>
            </fragment>
        </definition>
    <scores>
        <entry>
            <player name="Spieler 1" team="ONE"/>
            <score>
                <part>0</part>
                <part>2</part>
            </score>
        </entry>
        <entry>
            <player name="Spieler 2" team="TWO"/>
            <score>
                <part>2</part>
                <part>5</part>
            </score>
        </entry>
    </scores>
    <winner team="TWO" regular="true" reason="Spieler 2 hat den groesseren zusammenhaengenden Schwarm"/>
    </data>
</room>
```

Unter `scores` werden jeweils die beiden Spieler mit den erreichten Punkten aufgezählt.
Was genau die Werte in `part` bedeuten, steht in der `definition`.
Für Piranhas ist das die Anzahl der Siegpunkte,
die im Wettkampfsystem angerechnet werden
und die am Ende des Spiel erreichte Schwarmgröße.

In diesem Beispiel sieht man, dass Spieler 2 mit einer Schwarmgröße von 5 diese Runde gewonnen hat.

Bei einem Unentschieden erhalten beide Spieler jeweils einen Siegpunkt und der `winner`-Tag führt kein Team:

```xml
<winner regular="true" reason="Beide Spieler sind gleichauf"/>
```