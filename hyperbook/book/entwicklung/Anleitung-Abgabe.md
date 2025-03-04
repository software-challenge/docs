---
name: Anleitung für Abgabe
index: 10
---

# Computerspieler abgabefertig machen (Anleitung für Export aus der IDE für Java)

Im folgenden findet ihr eine Anleitung wie man seinen fertigen Client aus seiner Entwicklungsumgebung exportieren kann, um ihn im Wettkampfsystem hochladen zu könen.

## Grundsätzliches
Der Export des Projektes funktioniert für Java bei unserem Projekt über Gradle. Hierbei verwenden wird die Gradle Task "shadowJar". Wie genau das aussieht wird für Eclipse und IntelliJ im Folgenden beschrieben. 

## Eclipse
Um den Export in Eclipse durchzuführen, muss man die Übersicht der Gradle Tasks öffnen. Um dies zu tun gibt es zwei Wege:

1. Man kann die Übersicht öffnen, in dem man auf das Gradle-Symbol (Elephant) klickt. Dieses Symbol findet man am linken Rand. Es kann sein, dass das Symbol im Darkmode sehr schwer zu erkennen ist.

2. Wenn man die Übersicht nicht finden kann oder das Symbol nicht existiert, kann man die Übersicht öffnen, in dem man oben auf Window/Show view/Other.../Gradle/Gradle Tasks geht und dann einen Doppelklick darauf macht oder es auswählt und unten auf "open" geht.
</br></br>
   
Wenn man nun die Gradle Tasks offen hat, tut mam folgendes:
1. Man geht auf dem Ordner mit dem Namen des Projekts. Dieser ist standardmäßig "player-Spielkürzel-src"
2. Unter dem nun angezeigten Inhalt ist ein Ordner der "shadow" heißt, den man nun öffnet
3. In dem Ordner "shadow" befindet sich eine Task, die shadowJar heißt. Wenn man dort nun einen Doppelklick drauf macht wird das Projekt in Form eines "Executable Jar File" exportiert.

Der Export wird in dem Ordner des Projektes gespeichert. Der Name dieser Jar ist standardmäßig auf "Spielkürzel_Jahreszahl_client" kann aber nach dem Export beliebig geändert werden. Man kann den Namen auch vor dem Export anpassen, wenn man in dem Projekt "build.gradle.kts" öffnet und unter "tasks.shadowJar" den "archiveBaseName" ändert.

## IntelliJ
Um den Export in IntelliJ durchzuführen, muss man die Übersicht der Gradle Tasks öffnen. Dies geschieht, in dem man auf das Gradle-Symbol (Elephant) am rechten Rand klickt. Nun kann man die Gradle Task unterschiedlich ausführen. Im folgenden werden beide Varianten erläutert:

1. Die kurze Variante über die Konsole:
   1. Man klickt auf das Konsolen-Symbol (Execute Gradle Task)
   2. In der offenen Konsole gibt man nun "shadowJar" ein
   3. Man druckt auf Enter

2. Die lange Variante
   1. Man geht auf dem Ordner mit dem Namen des Projekts. Dieser ist standardmäßig "player-Spielkürzel-src"
   2. Unter dem nun angezeigten Inhalt ist ein Ordner der "shadow" heißt, den man nun öffnet
   3. In dem Ordner "shadow" befindet sich eine Task, die shadowJar heißt. Wenn man dort nun einen Doppelklick drauf macht wird das Projekt in Form eines "Executable Jar File" exportiert.

Der Export wird in dem Ordner des Projektes gespeichert. Der Name dieser Jar ist standardmäßig auf "Spielkürzel_Jahreszahl_client" kann aber nach dem Export beliebig geändert werden. Man kann den Namen auch vor dem Export anpassen, wenn man in dem Projekt "build.gradle.kts" öffnet und unter "tasks.shadowJar" den "archiveBaseName" ändert.