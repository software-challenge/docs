#!/bin/bash

# This script upates the last update date in the header of the docs and commits
# all changes, which triggers the publish script (post-commit-hook).

# Update the date to the date of the last commit (which is the current date)
formatted_date=$(date +%Y-%m-%d)
sed --regexp-extended -i "/[0-9]{4}-[0-9]{2}-[0-9]{2}$/c\\$formatted_date" index.adoc
git add index.adoc
git commit
