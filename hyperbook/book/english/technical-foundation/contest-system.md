---
name: Competition System
index: 3
next: /@/current_game_start
---

# The Competition System

The competition system is the platform
on which the [computer players](/grundlagen/player)
of the individual schools compete against each other.
Teams can measure themselves against their opponents
not only in the competition,
but also in friendly matches.
In addition,
it provides all information about the competition,
such as the results of the individual match days
or the number of members in the individual teams.

## The Web Interface

![The start page of the web interface](/images/wettkampfsystem_neu_startseite.png)

The web interface is available at the URL <https://contest.software-challenge.de>.
All information concerning the course of the competition
(e.g., schedule, news, or ranking list)
is also available without logging in.
You only need to log in to the system
if you want to access your course or your computer player.
The entire competition management takes place in the competition system.
Here, clients can be submitted, tested, and activated,
and the current competition status
(ranking list, match days, etc.) can be accessed.

### Selection

By default, the most recent season is active in the system.
Via the button in the top bar,
you can see all available seasons
and, once you have selected one,
you also see the associated groups.
You can then view the information.

### Teams

#### All Teams

![The team table](/images/wettkampfsystem_neu_teams.png)

Here, the participating teams are listed in a table
along with their contacts and tutors.

#### My Teams

Logged-in users can find here an overview of teams
of the current season that they are involved with.

## Freely Available Information

### News

Here you can view all news about the competition.
All important information about the competition appears here.

### Groups

![Screenshot of the groups](/images/wettkampfsystem_neu_gruppe.png)

The teams of each competition season are divided into groups
in the first championship phase.
On a group's page, you can access the individual match days
and see the current ranking list.

### Match Day

![Screenshot of the match day overview](/images/wettkampfsystem_neu_spieltag.png)

On this page you can see which schools meet on that match day.
If the match day has already taken place,
you can view the results and the course of the individual games.

### Final

Here you will find the overview of the final participants.
This is only available once the participants have been determined.

## Only Available with Login

### Members

![Dialog](/images/wettkampfsystem_neu_mitglieder.png)

Here, all members of the team are listed.
With the buttons to the right of the team members,
you can remove them from the team.

#### Adding Members

New members can be invited
via the "Invite existing user" button at the bottom.
Tutors can add both teachers and pupils,
while teachers may only add pupils.
Pupils have no rights in this regard.

**Note:** Not every pupil needs to be registered
and receive login credentials.
It is sufficient if the team members
who upload the computer player can log in to the server.

If you want to add a new person to the team,
you can invite a person already known in the system.

In addition, you can enter the number of pupils in the team.
This also includes pupils who do not have their own login credentials
for the competition system.
This number is needed both for the press and for statistical purposes
and should definitely be correct.

##### Notifications

For persons with login credentials,
you can set next to their personal details
under what circumstances these persons should receive an email
with a corresponding notification.
The following options are available:

-   A match day has been played

-   In one of your teams there is no playable computer player yet
    for the upcoming match day

-   There is news about the competition

-   One of your tickets has been changed

### Computer Players

In this section, you can upload and manage computer players.
Before uploading a computer player,
it must be [made ready for submission](/entwicklung/abgabe).

![Overview of submitted computer players](/images/wettkampfsystem_neu_hochladen.png)

At the top right edge is the button
to add new computer players.
This leads to a form
with which you can upload the ZIP archive of the computer player.

You can give the player a **name**
so that you can recognize it better later in the list of uploaded players.
You can also specify additional **parameters**
that are passed to the computer player when it starts.
This is useful
if the computer player supports different game strategies
and you can select them via parameters.
Then you only need to upload the computer player once
(the parameters can also be changed later).
Providing a name and parameters is optional.

Finally, you must choose the environment (the **Docker image**)
in which the computer player should be executed on the competition system.
If the computer player uses one of the two officially supported
programming languages Java or Ruby,
you can simply select the corresponding one here.
Otherwise, it depends on the chosen programming language
whether a suitable environment is offered.
If none can be found,
please contact [technical support](mailto:tech@software-challenge.de).

Once a player has been successfully uploaded,
it appears in the list of all players of the team.
Here you can use the "Test" link to check its tournament suitability.
The player then plays twice against the random player.
A checkmark in a green circle indicates a successful test.
The log of the test run can be accessed via the "Logs" link.
Under certain circumstances,
the correct start file may still need to be set.
To do this, click on the corresponding link
in the "Main file" column on the right
and select the correct start file in the following file menu.

With the '+' you can attach a comment to the computer player
so that you can better distinguish it from the others.

With the "Activate" link, you mark the player as the one
that should play the next game on the competition system.
This can be a friendly match or a game of the competition.

**Note:** The currently active computer player
takes part in the match day.
The deadline for activating a client
that is to participate in a match day
ends on the match day at 00:00.
With later activation, it cannot be guaranteed
that the new client will participate on the match day.
If no computer player is activated on a match day,
the team does not participate in that match day's encounter
and the relevant games count as lost.

## Friendly Matches

To get an impression of your own team's strength
even before the competition,
you can play friendly matches against your opponents.

There are two ways to play a friendly match:
You challenge one (or all) opponents,
or you accept a challenge.

By clicking on the result of a played friendly match,
you can view it in detail.

## Available Interfaces

Below you can find interfaces
with which you can interact with the competition system.

### Replays

You can find a link directly under "Download Replay"
on the respective match page,
which looks like, for example:
`…​/wettbewerb/2010/spieltage/XXXX/matches/XXXX/rounds/XXXX`
With a normal GET request,
you receive the replay archive (i.e., a GZip archive).
To use the replays, for example, in your own application,
you can also have the server return XML files
that are already unpacked and adapted to the format of the replay viewer.
This can be done either by an XML header of the request
or simply by appending the extension `.xml` to the above-mentioned link.

If larger quantities of replays are needed,
we recommend preferring the standard archives
and then unpacking them locally,
since these are already packaged on the server
and can thus be provided faster and with less load on the system.