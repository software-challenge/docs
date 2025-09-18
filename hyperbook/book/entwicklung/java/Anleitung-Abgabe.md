---
name: Anleitung für Abgabe
index: 9
---

# Computerspieler abgabefertig machen (Anleitung für Export aus der IDE für Java)

Im folgenden findet ihr eine Anleitung, 
für den Export eures Computerspielers aus der Entwicklungsumgebung,
um ihn im Wettkampfsystem hochzuladen.

## Grundsätzliches
Der Export des Projektes funktioniert für Java bei unserem Projekt über Gradle. 
Hierbei wird die Gradle Task "shadowJar" verwendet. </br>
Wie genau das aussieht wird für Eclipse und IntelliJ im Folgenden beschrieben. 

## Eclipse
Um den Export in Eclipse durchzuführen, 
muss man die Übersicht der Gradle Tasks öffnen. 
Um dies zu tun gibt es zwei Wege:

1. Der erste Weg, die Übersicht zu Öffnen, 
   ist das Gradle-Symbol (Elefant) am linken Rand. 
   Es kann sein, dass das Symbol im dunklen Modus schwer zu erkennen ist.

2. Ist das Symbol nicht auffindbar, 
   kann die Übersicht auch geöffnet werden, 
   in dem man oben auf Window/Show view/Other.../Gradle/Gradle Tasks geht 
   und dann einen Doppelklick darauf macht oder es auswählt und unten auf "open" klickt.
   </br></br>
   
Wenn die Gradle Tasks geöffnet sind, müssen folgende Schritte ausgeführt werden:
1. Öffne den Ordner mit dem Namen des Projekts.
   Dieser ist standardmäßig "player-*Spielkürzel*-src"

   >Falls dort ein X an dem Ordner ist, müssen die Gradle Tasks einmal 
    neugeladen werden. </br> Dies geschieht durch den Button "Refresh Tasks for 
    all Projects" (Rechts oben am Fensterrand)

2. Öffne den Ordner mit dem Namen "shadow"

3. In dem Ordner "shadow" befindet sich eine Task, die shadowJar heißt. 
   Durch einen Doppelklick wird der Export gestartet.


Der Export wird in dem Ordner des Projektes gespeichert. 
Der Name dieser Jar ist standardmäßig auf "Spielkürzel_Jahreszahl_client" kann 
aber nach dem Export beliebig geändert werden. 
Man kann den Namen auch vor dem Export anpassen, 
wenn man in dem Projekt "build.gradle.kts" öffnet 
und unter "tasks.shadowJar" den "archiveBaseName" ändert.


## IntelliJ
Um den Export in IntelliJ durchzuführen, 
muss man die Übersicht der Gradle Tasks öffnen. 
Dies geschieht, in dem man auf das Gradle-Symbol (Elefant) am rechten Rand klickt. 
Nun kann die Gradle Task unterschiedlich ausgeführt werden. 
Im folgenden werden beide Varianten erläutert:

1. Die kurze Variante über die Konsole:
   1. Klick auf das Konsolen-Symbol (Execute Gradle Task)
   2. In der offenen Konsole gibt man nun "shadowJar" ein
   3. Man drückt auf Enter

2. Die lange Variante
   1. Man geht auf dem Ordner mit dem Namen des Projekts. 
      Dieser ist standardmäßig "player-Spielkürzel-src"
   2. Unter dem nun angezeigten Inhalt öffnet man den Ordner "shadow".
   3. In dem Ordner "shadow" befindet sich eine Task, die shadowJar heißt. 
      Durch einen Doppelklick wird der Export gestartet.

Der Export wird in dem Ordner des Projektes gespeichert.
Der Name dieser Jar ist standardmäßig auf "Spielkürzel_Jahreszahl_client", 
kann aber nach dem Export beliebig geändert werden. 
Der Namen kann auch vor dem Export anpassen, 
wenn man in dem Projekt "build.gradle.kts" öffnet 
und unter "tasks.shadowJar" den "archiveBaseName" ändert.