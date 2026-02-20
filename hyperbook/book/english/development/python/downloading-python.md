---
name: Installation of Python
index: 1
---

# Installation of Python

To be able to develop a computer player for the Software-Challenge in Python,
some prerequisites must be fulfilled.
This guide is intended to make the preparation and installation easier.

## Basics

We offer the submission of a Python computer player
in Python versions 3.10.x and 3.12.x
(where x stands for any sub‑version).

In the following sections,
the newer version 3.12.x is mainly shown,
but if certain commands use `312` or `3.12`,
`310` or `3.10` can be used analogously for version 3.10.x.
If there are major differences between the versions,
this will be explained in detail.

## Installation

The download of the Python installer is done via the official website
of the [Python organization](https://www.python.org/downloads/).
There, further down in a table,
you can look for the latest sub‑version of Python 3.12
and download it.

![Example for download](/images/python/download.png)

Then, on the download page,
choose the installer for your system
and run it after the download.
In the (Windows) installer,
you then have the option to add python.exe to the environment variables (PATH),
which is recommended.
Then you can start the simple installation.
This will also install the package manager pip,
which will be needed in the future.

### Verification

After installation,
you can use the terminal to check whether the installation was successful.
To do this, query the versions of the programs Python and pip
with the following commands:

```bash
python --version
```

```bash
pip --version
```

For Python, the selected version should be output,
and for pip, some version should be present
that points with a file path to the folder of the installed Python version.

If that worked,
you are ready for the next step.

### socha package

To be able to access the provided interface for a Python computer player,
the corresponding package must be installed
using pip and the following command in a terminal:

```bash
pip install socha
```

This should automatically use the latest version,
which can be found in the release overview
of the official [GitHub repository](https://github.com/software-challenge/player-python/)
for the Python interface:

![Release overview](/images/python/socha-releases.png)

If the very latest version was not installed,
you can also extend the command
to select a specific version
(adjust the version accordingly, of course):

```bash
pip install socha==4.1.0
```