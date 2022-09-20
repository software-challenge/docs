---
name: Spielregeln
index: 1
---

# Hey, Danke für den Fisch! - Spielregeln der Software-Challenge 2023

## Spielaufbau

Hey, Danke für den Fisch ist ein Brettspiel, welches mit Figuren auf einem Hexagonal-Feld (8x8) gespielt wird.
Am Anfang werden Fische zufällig auf alle hexagonalen Eisschollen verteilt, wobei es immer mindestens einen Fisch auf jeder Eisscholle gibt.

:::alert{info}
Für die Erstellung des Spielbretts gelten folgende Bedingungen:

- Die Seitenlänge des zweidimensionalen Spielbretts, ist dann $8$ Felder.
- Das Spielbrett ist damit $64$ Felder groß.
- Auf dem Spielbrett können maximal $134$ Fische platziert werden.
    - Es kann $0$ oder mehr Felder geben, 
    welche am Anfang keine Fische haben,
    wobei es wahrscheinlicher ist, 
    dass diese Felder zu der Mitte hin auftauchen.
    - Es werden nur auf einer Hälfte des $64$ Felder großen Spielbretts die Fische zufällig gelegt, wobei es an den Rändern mehr Fisch gibt als zu der Mitte hin.
    - Auf jedem Feld können $0$ bis $4$ Fische sein.
    - Damit das Spielbrett symmetrisch ist, 
    wird diese Hälfte dupliziert, 
    um $180°$ gedreht und den restlichen $32$ Feldern hinzugefügt.
:::

## Spielablauf

#### Die ersten 8 Züge

Zuerst werden nur Pinguine gelegt. Neben strategisch günstiger Positionierung ist zu beachten, dass Pinguine nur auf Felder mit nicht mehr als einem Fisch gelegt werden dürfen!
Nach den 8 ersten Zügen haben beide Spieler jeweils 4 Pinguine auf dem Spielfeld.

#### Das weitere Spiel

Pinguine können in geraden Bahnen über die 3 Achsen des hexagonalen Feldes beliebig weit gezogen werden, nur über Felder ohne Eisschollen oder über andere Pinguine können sie nicht rutschen. Sie können jederzeit anhalten.

![Spielfeld](/images/spiele/penguins/penguins_spielfeld.png "Spielfeld")

Wenn ein Pinguin von einem Feld herunterrutscht, sammelt er die Fische des Felds automatisch auf. Dabei zerfällt die Eisscholle auf dem Feld. Das gilt allerdings nur für Felder, von denen aus man einen Zug startet und *nicht* für Felder, über die ein Pinguin rutscht / zieht.

:::alert{info}
Auf dem Spielserver ist der Zug so implementiert, dass Fische bereits eingesammelt werden sobald ein Pinguin auf das Feld zieht.
:::

Dieses Mal gibt es kein Rundenlimit, aber da bei jedem Zug genau eine Eisscholle zerstört wird, kann es nie mehr Züge als Eisschollen geben.

## Wertung

Das Spiel endet, sobald beide Spieler nicht mehr ziehen können, da alle Eisschollen um die Pinguine herum zerstört sind.

Es gewinnt der Spieler, der im Laufe des Spiels mehr Fische gesammelt hat.
