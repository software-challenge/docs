---
name: Introduction to Object-Oriented Programming
index: 2
---

# Introduction to Object-Oriented Programming

"If you buy a computer today, it will be outdated tomorrow."
Hardly any other rumor persists as strongly in computer science
as that about short-livedness.
However, especially in the area of software development,
there are programming techniques and concepts
that have lost none of their relevance for decades.
One example is object orientation.
It was developed in the mid-1980s
and is still the basic concept of modern programming languages today.

## Idea of Object Orientation

The idea of object orientation is to bundle the data
and the functions that access this data in one component.
The data can only be accessed via the corresponding functions
(called *methods*).

### Approach without object orientation

If you wanted to write an account without object orientation,
for example,
you need an integer variable `int balance = 0;`
that provides information about the available balance (e.g., in cents).
Deposits and withdrawals can be made by direct assignments:
`balance = balance + 30;`.
So far so good, but how are withdrawals handled?
A withdrawal should only be possible
if the account has sufficient funds:
```java
    // Example to withdraw 40 currency units
    if (balance >= 40) {
        balance = balance - 40;
    }
```
Every time money is to be withdrawn,
it must first be checked whether the account has sufficient funds.
If you forget the if query in just one place,
you run the risk that the balance becomes negative,
which should not be possible.

But there are other problems as well:
By `balance = balance + (-25);`
you can drive the balance into negative
by depositing a negative amount, so to speak.
This is critical in two ways,
because on the one hand the account balance can become negative
and on the other hand there should be no negative deposits.
Therefore, deposits must also be checked for validity.

Another problem could arise,
for example,
if you want to grant the account holder an overdraft facility.
Then you have to add the overdraft amount in every if query.
If this is forgotten in one place,
you might not be able to withdraw anything,
even though the overdraft has not been fully used.

### Working object‑oriented

If you want to represent an account in an object‑oriented way,
you first write a *class*, which is a kind of blueprint:

```java
    public class Account {
        private int balance;

        public Account() {
            balance = 0;
        }

        public void deposit(int amount) {
            if (amount > 0) {
                balance = balance + amount;
            }
        }

        public boolean withdraw(int amount) {
            if (balance >= amount) {
                balance = balance - amount;
                return true;
            }
            return false;
        }

        public int getBalance() {
            return balance;
        }
    }
```

The word `private` before the variable for the balance
means that access to it is only permitted within the class,
while `public` allows access from anywhere.
So if you want to deposit or withdraw money,
you have to use the corresponding methods.

With the keyword `new` you can create an object from the blueprint
(i.e., the class):

```java
    Account account1 = new Account(); // Creates an Account object and stores it in the variable account1
    Account account2 = new Account(); // Creates another account and stores it in a different variable
```

The `new` executes the constructor
(`public Account() { balance = 0; }`).
So every newly created account initially has a balance of 0 currency units.
A constructor must always have the class name
and may not have a return value (not even `void`).
Analogous to methods, you can also pass arguments to a constructor.

To deposit or withdraw money,
you call the methods with the so‑called dot operator:

```java
    Account account1 = new Account();            // account1: 0 currency units (CU)
    Account account2 = new Account();            // account2: 0 CU

    account1.deposit(100);                       // account1: 100 CU, account2: 0 CU
    account2.deposit(50);                         // account1: 100 CU, account2: 50 CU

    boolean success = account1.withdraw(30);      // account1: 70 CU, account2: 50 CU, success: true
    success = account2.withdraw(90);               // account1: 70 CU, account2: 50 CU, success: false
```

Extending the class to include the overdraft facility
also proves to be very simple,
because only changes within the class are necessary:

```java
    class Account {
         private int balance;
         private int overdraft;

         public Account() {
             balance = 0;
             overdraft = 500;
         }

         public void deposit(int amount) {
             if (amount > 0) {
                 balance = balance + amount;
             }
         }

         public boolean withdraw(int amount) {
             if ((balance + overdraft) >= amount) {
                 balance = balance - amount;
                 return true;
             }
             return false;
         }

         public int getBalance() {
             return balance;
         }
    }
```
-   New private variable to store the credit limit.
-   Initialize the credit limit in the constructor.
-   Take the credit limit into account when withdrawing.

### Referencing objects

When you create a new object with `Account account3 = new Account()`,
it is stored in memory
and the variable `account3` contains the memory address
of the corresponding object.
With the command `Account account4 = account3`,
the variable `account4` is assigned the memory address of `account3`.
Both therefore point to the same memory address
and thus to the same object.
Thus `account3.deposit(40)` also changes the balance of `account4`,
because both point to the same object.
Instead of *point to*, one often says *reference*.

**Rule of thumb:** New objects are only created with the keyword `new`!

## Inheritance

Inheritance is a technique with which you can create a new blueprint (class)
from a class by adding methods and variables.

If, for example, you also want to offer a premium account
on which the balance earns interest,
you can take the existing class and extend it accordingly:

```java
    public class PremiumAccount extends Account {
         private double interestRate;

         public PremiumAccount() {
             super();
             interestRate = 2.5; // 2.5% interest
         }

         public void creditInterest() {
             int balance = getBalance();
             if (balance > 0) {
                 deposit(balance * interestRate / 100);
             }
         }
    }
```

The methods for depositing and withdrawing do not need to be rewritten,
because they are "copied" from the Account class.
You can rewrite a method from a superclass.
Then the modified version is always used.
The keyword `super()` calls the constructor from the account class.
In Java, the empty constructor of the superclass is always called,
so this line can also be omitted.

A new object is created in the same way as for a normal account:

```java
    PremiumAccount premium = new PremiumAccount();

    premium.deposit(50); // inherited method
    premium.creditInterest();
```

### Casting objects

Since a premium account is also a normal account,
the following call is legal:

`Account account5 = new PremiumAccount();`

Because `account5` is of type `Account`,
only the methods from this class may be used.
If you also want to be able to credit interest,
you have to turn the account into a premium account:

`PremiumAccount account6 = (PremiumAccount) account5;`

However, this cast only succeeds
if the account is also a premium account!
Otherwise an error message is thrown.
With the keyword `instanceof` you can query
whether an object belongs to a certain class:

```java
    Account account7 = new PremiumAccount();

    if (account7 instanceof PremiumAccount) {
        PremiumAccount premium2 = (PremiumAccount) account7;
        premium2.creditInterest();
    }
```

**Important:** Only methods are inherited, but not variables!
Therefore, the balance is accessed only via the corresponding methods
of the superclass.

## Static variables and methods

If there are methods or variables that are valid for all objects,
they are declared as `static`.
Static variables and classes are shared by all objects.

For example, if the interest rate for the premium account
should be the same for all accounts,
you can declare it as static:

```java
    public class PremiumAccount extends Account {
         private static double interestRate = 2.5; // 2.5% interest

         ...

         public static double getInterestRate() {
             return interestRate;
         }

         public static void setInterestRate(double value) {
             interestRate = value;
         }
     }
```

From the outside, you access the interest rate
via the method `setInterestRate(double value)`,
which you can call either via the object or via the class name.

```java
    PremiumAccount.setInterestRate(3); // increase interest to 3%

    PremiumAccount premium3 = new PremiumAccount();
    premium3.setInterestRate(3);
```

**Tip:** So that you can better recognize static variables or methods,
you should always access them via the class name.

## Further aspects

Object orientation offers many other aspects,
such as polymorphism.
Since this is only an introduction,
such advanced topics have not been covered.

## Further information

-   [Wikipedia article](http://en.wikipedia.org/wiki/Object-oriented_programming)
-   [Practice book on object orientation (openbook, in German)](http://openbook.rheinwerk-verlag.de/oop/)
