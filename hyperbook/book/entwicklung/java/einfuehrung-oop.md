---
name: Objektorientierte Programmierung
index: 3
---

# Einführung in die objektorientierte Programmierung

"Wenn man heute einen Computer kauft, ist er morgen schon veraltet".
Kaum ein anderes Gerücht hält sich so stark in der Informatik, wie das
über die Kurzlebigkeit. Jedoch gibt es gerade im Bereich der
Softwareentwicklung Programmiertechniken und -konzepte, die seit
Jahrzehnten nichts von ihrer Aktualität eingebüßt haben. Ein Beispiel
dafür ist die Objektorientierung. Sie wurde bereits Mitte der 80er Jahre
entwickelt und ist auch heute noch das Grundkonzept moderner
Programmiersprachen.

## Idee der Objektorientierung

Die Idee der Objektorientierung ist, die Daten und die Funktionen, die
auf diese Daten zugreifen, in einer Komponente zu bündeln. Auf die Daten
kann man nur über die entsprechenden Funktionen (die man *Methoden*
nennt) zugreifen.

### Vorgehensweise ohne Objektorientierung

Möchte man zum Beispiel ein Konto ohne Objektorientierung schreiben, so
braucht man eine Integer-Variable `int kontostand = 0;`, die Auskunft
über den verfügbaren Saldo (z.B. in Cent) gibt. Ein- und Auszahlungen
lassen sich durch direkte Wertzuweisungen vornehmen:
`kontostand = kontostand + 30;`. Soweit sogut, aber wie werden
Auszahlungen gehandhabt? Eine Auszahlung soll nur möglich sein, wenn das
Konto ausreichend gedeckt ist:
```java
    // Beispiel um 40 Geldeinheiten abzuheben
    if (kontostand >= 40) {
        kontostand = kontostand - 40;
    }
```
Jedes Mal, wenn Geld abgehoben werden soll, muss erst überprüft werden,
ob das Konto ausreichend gedeckt ist. Sollte man die if-Abfrage nur an
einer Stelle vergessen, läuft man Gefahr, dass der Saldo negativ wird,
was nicht möglich sein soll.

Es gibt aber noch weitere Probleme: Durch
`kontostand = kontostand + (-25);` kann man quasi durch Einzahlung eines
negativen Betrages den Saldo ins Negative treiben. Dies ist in
zweifacher Weise kritisch, da zum einen der Kontostand negativ werden
kann und es zum anderen keine negativen Einzahlungen geben soll. Also
müssen auch Einzahlungen auf ihre Gültigkeit überprüft werden.

Ein weiteres Problem könnte z.B. entstehen, wenn man dem Kontoinhaber
einen Dispokredit einräumen will. Dann muss man in jeder if-Abfrage den
Dispobetrag hinzufügen. Sollte das an einer Stelle vergessen werden,
kann man unter Umständen nichts abheben, obwohl der Dispo noch nicht
voll genutzt ist.

### Objektorientiert arbeiten

Möchte man ein Konto objektorientiert darstellen, schreibt man zunächst
eine *Klasse*, die eine Art Bauplan ist:

```java
    public class Konto {
        private int kontostand;

        public Konto() {
            kontostand = 0;
        }

        public void einzahlen(int betrag) {
            if (betrag > 0) {
                kontostand = kontostand + betrag;
            }
        }

        public boolean abheben(int betrag) {
            if (kontostand >= betrag) {
                kontostand = kontostand - betrag;
                return true;
            }
            return false;
        }

        public int getKontostand() {
            return kontostand;
        }
    }
```

Das Wort `private` vor der Variablen für den Kontostand bedeutet, dass
der Zugriff darauf nur innerhalb der Klasse gestattet ist, während
`public` Zugriff von überall erlaubt. Möchte man also Geld einzahlen
oder abheben, muss man die entsprechenden Methoden nehmen.

Mit dem Schlüsselwort `new` kann man aus dem Bauplan (also der Klasse)
ein Objekt erzeugen:

```java
    Konto konto1 = new Konto(); // Erzeugt ein Konto-Objekt und speichert es in der Variablen konto1
    Konto konto2 = new Konto(); // Erzeugt noch ein Konto und speichert es in einer anderen Variablen
```

Das `new` führt den Konstruktor aus
(`public Konto() { kontostand = 0; }`). Also hat jedes neu erstellte
Konto zunächst Kontostand von 0 Geldeinheiten. Ein Konstruktor muss
immer den Klassennamen tragen und darf keinen Rückgabewert (nicht einmal
`void`) haben. Analog zu Methoden kann man auch einem Konstruktor
Argumente übergeben.

Um Geld einzuzahlen oder abzuheben, ruft man die Methoden mit dem sog.
Punktoperator auf:

```java
    Konto konto1 = new Konto();            // konto: 0 Geldeinheiten (GE)
    Konto konto2 = new Konto();            // konto2: 0 GE

    konto1.einzahlen(100);                 // konto1: 100 GE, konto2: 0  GE
    konto2.einzahlen(50);                  // konto1: 100 GE, konto2: 50 GE

    boolean erfolg = konto1.auszahlen(30); // konto1: 70 GE, konto2: 50 GE, erfolg: true
    erfolg = konto2.auszahlen(90);         // konto1: 70 GE, konto2: 50 GE, erfolg: false
```
Die Erweiterung der Klasse um den Dispokredit erweist sich auch als sehr
einfach, da nur noch Änderungen in der Klasse notwendig sind:

```java
    class Konto {
         private int kontostand;
         private int dispo; 

         public Konto() {
             kontostand = 0;
             dispo = 500; 
         }

         public void einzahlen(int betrag) {
             if (betrag > 0) {
                 kontostand = kontostand + betrag;
             }
         }

         public boolean abheben(int betrag) {
             if ((kontostand + dispo) >= betrag) { 
                 kontostand = kontostand - betrag;
                 return true;
             }
             return false;
         }

         public int getKontostand() {
             return kontostand;
         }
    }
```
-   Neue private Variable um den Kreditrahmen zu speichern.

-   Kreditrahmen im Konstruktor initialisieren.

-   Kreditrahmen beim Abheben mit berücksichtigen.

### Referenzierung von Objekten

Wenn man mit `Konto konto3 = new Konto()` ein neues Objekt erzeugt, wird
dieses im Arbeitsspeicher abgelegt und die Variable `konto3` enthält die
Speicheradresse zum entsprechenden Objekt. Mit dem Befehl
`Konto konto4 = konto3` wird der Variablen `konto4` die Speicheradresse
von `konto3` zugewiesen. Beide zeigen also auf dieselbe Speicheradresse
und somit auf das gleiche Objekt. Somit verändert `konto3.einzahlen(40)`
auch den Kontostand von `konto4`, weil beide auf dasselbe Objekt zeigen.
Statt *zeigen* sagt man oft auch *referenzieren*.

**Merkregel:** Neue Objekte erzeugt man nur mit dem Schlüsselwort
`new`!  

## Vererbung

Die Vererbung ist eine Technik, mit der man eine Klasse, durch
Hinzufügen von Methoden und Variablen, einen neuen Bauplan (Klasse)
erzeugt.

Möchte man zum Beispiel zusätzlich auch noch ein Premiumkonto anbieten,
auf dem der Kontostand verzinst wird, kann man die bestehende Klasse
nehmen und entsprechend erweitern:

```java
    public class PremiumKonto extends Konto {
         private double zinsbetrag;

         public PremiumKonto() {
             super();
             zinsbetrag = 2.5d; // 2.5% Zinsen
         }

         public void zinsenGutschreiben() {
             int saldo = getKontostand();
             if (saldo > 0) {
                 einzahlen(saldo * zinsbetrag / 100);
             }
         }
    }
```

Die Methoden zum Ein- und Auszahlen brauchen nicht neu geschrieben
werden, da diese von der Klasse Konto "kopiert" werden. Man kann eine
Methode aus einer Oberklasse neu schreiben. Dann wird immer die
geänderte Version genommen. Das Schlüsselwort `super()` ruft den
Konstruktor aus der Kontoklasse auf. In Java wird immer der leere
Konstruktor der Oberklasse aufgerufen, sodass diese Zeile auch
weggelassen werden darf.

Ein neues Objekt erzeugt man auf die gleiche Weise, wie bei einem
normalen Konto:

```java
    PremiumKonto premium = new PremiumKonto();

    premium.einzahlen(50); //geerbte Methode
    premium.zinsenGutschreiben();
```

### Casting von Objekten

Da ein Premiumkonto auch ein normales Konto ist, ist der folgende Aufruf
legal:

`Konto konto5 = new PremiumKonto();`

Weil `konto5` vom Typ `Konto` ist, dürfen auch nur die Methoden aus
dieser Klasse verwendet werden. Möchte man auch Zinsen gutschreiben
können, so muss aus dem Konto ein Premiumkonto gemacht werden:

`PremiumKonto konto6 = (PremiumKonto) konto5;`

Dieser Cast gelingt jedoch nur, wenn das Konto auch ein Premiumkonto
ist! Sonst wird eine Fehlermeldung geworfen. Mit dem Schlüsselwort
`instanceof` kann man abfragen, ob ein Objekt zu einer gewissen Klasse
gehört:

```java
    Konto konto7 = new PremiumKonto();

    if (konto6 instanceof PremiumKonto) {
        Premiumkonto premium2 = (PremiumKonto) konto7;
        premium2.zinsenGutschreiben();
    }
```

**Wichtig:** Es werden nur Methoden vererbt, jedoch keine Variablen!
Deshalb wird auf den Kontostand nur über die entsprechenden Methoden der
Oberklasse zugegriffen.

## Statische Variablen und Methoden

Gibt es Methoden oder Variablen, die für alle Objekte gültig sind, so
werden diese als statisch (`static`) deklariert. Statische Variablen und
Klassen werden von allen Objekten geteilt.

Soll zum Beispiel der Zinssatz beim Premiumkonto für alle Konten gleich
sein, kann man diesen als statisch deklarieren:

```java
    public class PremiumKonto extends Konto {
         private static double zinsbetrag = 2.5d; // 2.5% Zinsen

         ...

         public static double getZinsbetrag() {
             return zinsbetrag;
         }

         public static void setZinsbetrag(double wert) {
             zinsbetrag = wert;
         }
     }
```

Von außen kommt man an den Zinsbetrag über die Methode
`setZinsbetrag(double wert)`, die man entweder über das Objekt oder über
den Klassennamen aufrufen darf.

```java
    PremiumKonto.setZinsbetrag(3d); // Zinsen auf 3% erhöhen

    PremiumKonto premium3 = new PremiumKonto();
    premium3.setZinsbetrag(3d);
```

**Tipp:** Damit man besser erkennen kann, dass es sich um statische
Variablen oder Methoden handelt, sollte man auf diese immer über den
Klassennamen zugreifen.

## Weitere Aspekte

Die Objektorientierung bietet noch viele weitere Aspekte, wie zum
Beispiel die Polymorphie. Da es sich hier nur um eine Einführung
handelt, wurden solche fortgeschrittenen Themen allerdings nicht
behandelt.

## Weiterführende Informationen

-   [Eintrag aus der
    Wikipedia](http://de.wikipedia.org/wiki/Objektorientierte_Programmierung)

-   [Praxisbuch Objektorientierung
    (openbook)](http://openbook.rheinwerk-verlag.de/oop/)
