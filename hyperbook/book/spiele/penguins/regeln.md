---
name: Spielregeln
index: 1
---

# Hey, Danke für den Fisch! - Spielregeln der Software-Challenge 2023

## Spielaufbau

Hey, Danke für den Fisch! wird mit Figuren 
auf einem 8x8 Hexagonal-Feld gespielt.
Jedes Feld ist entweder eine Eisscholle mit ein bis vier Fischen
(letzteres höchstselten) oder ein Loch.
Während es am Rand tendenziell mehr Fische gibt,
gibt es in der Mitte tendenziell mehr Löcher.

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
