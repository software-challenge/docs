# Der Computerspieler (Client)

Der Computerspieler ist ein Programm, dass sich mit dem Spielleiter
(siehe [???](#server)) verbindet und die gestellte Aufgabe selbständig
lösen kann. Die Aufgabe der Schüler ist es, sich eine Strategie zu
überlegen und zu implementieren, mit der sie gegen die Clients der
anderen Schulen gewinnen können.

Der Computerspieler kann in einer beliebigen Programmiersprache
geschrieben sein, jedoch gibt es Muster-Computerspieler nur in Java und
Ruby.

Die Muster-Computerspieler können im Downloadbereich der Software
Challenge Website (<http://www.software-challenge.de>) heruntergeladen
werden.

**Hinweis:** Das Spielleiter-Programm (siehe [???](#server)) benötigt
Java. Deshalb muss auf den ausführenden Rechnern auch das [Java SDK
installiert](#installation-java) sein.

## Der SimpleClient

Der SimpleClient ist ein Computerspieler, den das Institut für
Informatik ins Rennen schickt. Er stellt zwar eine korrekte Lösung der
gestellten Aufgabe dar, ist aber nicht besonders intelligent. Neben dem
eigentlichen Programm ist auch der Quellcode des SimpleClients
verfügbar. Auf diese Weise können sich die Schüler anschauen und lernen,
wie man die gestellte Aufgabe lösen kann. Außerdem darf der Code um die
eigene Strategie erweitert werden. Auf diese Weise müssen die Schüler
nicht den ganzen Computerspieler selbst entwickeln, sondern können sich
auf den Entwurf und die Implementierung ihrer eigenen Strategie
konzentrieren.

## Der NotSoSimpleClient

Wenn die aktuelle Saison der Software-Challenge etwas weiter
fortgeschritten ist, stellt das Institut einen stärkeren Computerspieler
zur Verfügung: den NotSoSimpleClient. Das ist ein Spieler, der eine
effizientere Strategie zur Lösung der Aufgabe als der SimpleClient
verfolgt und dadurch nicht mehr so leicht zu schlagen ist. Dieser
Spieler wird ohne den Quellcode veröffentlicht, so dass die Schüler den
NotSoSimpleClient zwar als Gegenspieler für Testspiele nehmen, jedoch
nicht den Quellcode für den eigenen Spieler weiterverwenden können.
