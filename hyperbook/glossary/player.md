---
name: Computerspieler
index: 1
---

# Der Computerspieler

Der Computerspieler ist ein Programm, 
dass sich mit dem :t[Spielleiter]{#server} verbindet 
und die gestellte Aufgabe selbständig löst.
Die Aufgabe der Schülerinnen und Schüler ist es,
sich eine Strategie zu überlegen und zu implementieren,
mit der sie gegen die Spieler der anderen Schulen gewinnen können.

Der Computerspieler kann in einer beliebigen Programmiersprache geschrieben sein,
für einige Sprachen werden aber bereits Muster-Computerspieler 
im [Downloadbereich der Software-Challenge Website](https://software-challenge.de/dokumentation-und-material) bereitgestellt,
die für Neulinge sehr zu empfehlen sind,
da so die :t[XML-Schnittstelle]{#xml} nicht beachtet werden muss.

**Hinweis:** Das :t[Spielleiter-Programm]{#server} benötigt :t[Java]{#java}.
Deshalb muss auf den ausführenden Rechnern 
auch das [Java SDK installiert](entwicklung/installation-von-java) sein.

## Der Zufallsspieler

Der Zufallsspieler ist ein Computerspieler, den das Institut für
Informatik ins Rennen schickt. Er stellt zwar eine korrekte Lösung der
gestellten Aufgabe dar, ist aber nicht besonders intelligent. Neben dem
eigentlichen Programm ist auch der Quellcode des Zufallsspielers
verfügbar. Auf diese Weise können sich die Schülerinnen und Schüler 
anschauen und lernen, wie man die gestellte Aufgabe lösen kann. Außerdem 
darf der Code um die eigene Strategie erweitert werden. Auf diese Weise 
müssen die Schülerinnen und Schüler nicht den ganzen Computerspieler 
selbst entwickeln, sondern können sich auf den Entwurf und die 
Implementierung ihrer eigenen Strategie konzentrieren.

## Der Fortgeschrittene Spieler

Wenn die aktuelle Saison der Software-Challenge etwas weiter
fortgeschritten ist, stellt das Institut einen stärkeren Computerspieler
zur Verfügung: den Fortgeschrittenen Spieler. Das ist ein Spieler, der eine
effizientere Strategie zur Lösung der Aufgabe als der Zufallsspieler
verfolgt und dadurch nicht mehr so leicht zu schlagen ist. Dieser
Spieler wird ohne den Quellcode veröffentlicht, so dass die 
Schülerinnen und Schüler den Fortgeschrittenen Spieler zwar als 
Gegenspieler für Testspiele nehmen, jedoch nicht den Quellcode für den 
eigenen Spieler weiterverwenden können.
