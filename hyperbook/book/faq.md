---
name: F.A.Q.
index: 4
---

# Häufig gestellte Fragen (F.A.Q.)
Hier sammeln wir einige häufig gestellten Fragen, 
die uns erreichen.
Wir versuchen diese stets auktuell
und ausführlich zu halten.

Wenn du dennoch nicht fündig wirst,
dann frage uns gerne auf unserem [Discord](https://discord.gg/jhyF7EU),
oder schreibe uns eine [E-Mail](mailto:tech@software-challenge.de).

## Technisch

### Mein Spieler überschreitet die Zwei-Sekunden-Begrenzung, was kann ich tun?

Eine grundlegende Regelung bei der Software-Challenge ist, 
dass ein jeder Spieler maximal zwei Sekunden Zeit hat, 
eine Antwort an den Spielleiter zu senden.

Die Zeit wird von Erhalt der Nachricht des Spielleiters
bis zum Erreichen der Antwort des Spielers gezählt.

#### Allgemein
Es kann nun versucht werden, den Algorithmus zu optimieren, 
welcher genutzt wird, um den Zug zu berechnen. 
Beachtet werden kann dabei, wo Schleifen durchlaufen werden, welche optimiert werden können. 
Des Weiteren ist es ganz gut zu schauen, 
ob der Spieler häufige redundante oder doppelnde Zugriffe auf Methoden, 
Objekte oder Variablen macht 
und ob diese reduziert oder gar komplett vermieden werden können. 
Dies kann bereits Zeit sparen, wenn der Code sehr un-optimiert war.

#### Algorithmen und Datenstrukturen
Darüber hinaus kann es Sinn ergeben,
sich mit bereits optimierten Datenstrukturen, 
wie zum Beispiel [Bitboards](https://de.wikipedia.org/wiki/Bitboard),
oder Algorithmen, 
wie zum Beispiel dem [Minimax](https://de.wikipedia.org/wiki/Minimax-Algorithmus)
zu beschäftigen.

:::alert{warn}
Die oben genannte Datenstruktur 
und der Algorithmus waren nur Beispiele 
und es gibt sicherlich viele andere Möglichkeiten. 
Diese sollen lediglich als Einstiegspunkt dienen, 
um sich weiter zu informieren. 

Darüber hinaus ist zu beachten, 
dass diese Themen durchaus sehr komplex sein Können und es ist vollkommen in Ordnung, 
sich seine eigenen Algorithmen auszudenken, 
welche die ausgedachten Strategien umsetzen. 
Dies kann ebenfalls hervorragende Ergebnisse erzielen.
:::

#### Garbage Collector
Die oben genannten [Möglichkeiten](#allgemein) können euren Spieler bereits erheblich schneller und auch besser machen, 
wenn es darum geht, gute Züge in kurzer Zeit zu finden. 
Allerdings kann selbst dies nicht zu dem gewünschten Ziel führen, 
unter den zwei Sekunden zu bleiben. 

Denn selbst wenn der Spieler bereits seinen Zug berechnet hat, 
kann noch Zeit vergehen, bis der Zug bei dem Spielleiter ankommt. 
Dies ist insbesondere der Fall bei Programmiersprachen, 
welche einen Garbage Collector *(z.D.: automatische Speicherbereinigung)* haben. 
Dies kann ebenfalls hervorragende Ergebnisse erzielen.

:::alert{info}
Dies ist zum Beispiel der Fall bei der Spielervorlage, 
welche von der Software-Challenge gestellt wird,
da diese in Java geschrieben wurde
und die Sprache einen Garbage Collector hat.
:::

Der [Garbage Collector](https://de.wikipedia.org/wiki/Garbage_Collection) ist ein System, welches den Speicher automatisch verwaltet, sodass kein manuelles Speichermanagement von Nöten ist. Das bedeutet, sobald zum Beispiel eine Variable, die zuvor initialisiert wurde, nicht mehr im Scope der Anwendung liegt, wird der Garbage Collector von Zeit zu Zeit anlaufen und den Speicher freigeben, welche diese Variable belegt hat.

##### Java
Allerdings kann in Java der Garbage Collector oft zu sehr unpassenden Zeiten anspringen, wie zum Beispiel bevor der Zug an den Spielleiter verschickt wird. 
Auch die Arbeit des Garbage Collector wird mit in die Zeit einberechnet, 
die der Spieler hat, um den Zug zu berechnen.

Um die Zeit, die der Garbage Collector braucht, zu optimieren,
kann man dem Spieler ein paar Startargumente mitgeben:

:::alert{warn}
Bitte beachte, dass die folgenden Argumente nicht allgemeingültig sind.
Für jeden Spieler kann eine etwas andere Kombination optimal sein.
:::

```shell
-XX:+ExplicitGCInvokesConcurrent
```
Der volle Effekt vom Garbage Collector von `System.gc()` wird gemildert,
da es kein *Stop the World Event* Garbage Collector ist.
Das bedeutet, dass alle Anwendungs-Threads angehalten würden, 
bis der Garbage Collector seine Arbeit getan hat.
```shell
-XX:NewRatio=1
```
Alternative Möglichkeit zur Angabe der Größe der jungen Generation. 
Legt das Verhältnis von junger zu alter Generation fest.
Dadurch *kann* der Garbage Collector im Einzelnen Durchlauf weniger zu tun haben.
```shell
-mx800m -ms800m
```
Verringert und fixiert die Speichergröße, 
so dass die Garbage Collection häufiger erfolgt und weniger Zeit in Anspruch nimmt.
```shell
-XX:-UseParNewGC
```
Deaktiviert die parallele Sammlung der jungen Generation. 
Dies ist sinnvoll,
da der Spieler nur einen Thread auf dem Wettkampfserver zu seiner Verfügung hat.

Für weitere Informationen, ist dieses Blatt sehr interessant.
:download[HotSpot JVM options cheatsheet]{src="/gc_cheatsheet.pdf"}
