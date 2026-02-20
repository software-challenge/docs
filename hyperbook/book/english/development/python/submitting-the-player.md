---
name: Submit player for the competition
index: 7
---

# Submit player for the competition

So that the self‑designed program can be uploaded to the competition server
and executed to compete against other teams,
a few preparations must be made,
which are explained here.

## Packaging the computer player

As explained [here](/entwicklung/abgabe.md),
each player is executed in a Docker container,
which is why it has no internet access.
This means specifically for a Python player
that all used modules and packages
must be downloaded and submitted together with the player's source code.
Furthermore, a start file must then exist
so that the server can execute the bot.

### Automatic packaging

This relatively complex process
can be accelerated by a function of the interface,
so that you immediately get a zip folder
that is ready for upload.

First, you have to create a file named `requirements.txt`
that lists all the dependencies
that the player needs and that must be downloaded.
Every bot naturally needs `socha` in the appropriate version.
Furthermore, `setuptools` must be added
in version 58.1.0 for Python 3.10
or 75.8.0 for Python 3.12.
All packages are written with the syntax `<package>==<version>`,
each on its own line.
This requirements file must be in the same directory as the Python file.

The command in the terminal that then triggers the packaging is:

`python <script>.py --build --directory <folder_name> --architecture <architecture> --python-version <3.xx>`

Replace
- `<script>` with the name of the computer player file
- `<folder_name>` with the name that the player should have after packaging
- `<architecture>` with the system architecture for which it should be packaged.
  For the competition system, this is `manylinux2014_x86_64`.
- `<3.xx>` with the Python version in which the player is written,
  either 3.10 or 3.12.

When the program is finished,
a folder `socha_builds` is created,
in which a folder with a timestamp is generated for each packaging.
The zip file inside it is the finished player for upload.

### Manual packaging

The player can also be packaged manually,
but this involves significantly more effort
and, with the automatic packaging function, no longer really makes sense.

If you are still interested,
you can read the
[Readme](https://github.com/software-challenge/player_python/blob/master/README.md)
in the repository of the interface more closely,
as this process is still described there.

## Uploading the player

Now the finished computer player can be uploaded
in the competition system.
We have already described the general process in detail
[here](/grundlagen/contest#computerspieler),
so it does not need to be explained further in this section.

## Happy coding!

With this guide at hand,
we now wish you every success
in developing a computer player in Python
for the Software‑Challenge Germany.

If problems or questions still remain,
feel free to contact your tutor at any time,
ask on our [Discord](https://discord.gg/jhyF7EU),
or create an issue on Github in the repository
of the [interface](https://github.com/software-challenge/player_python)
or [this documentation](https://github.com/software-challenge/docs).