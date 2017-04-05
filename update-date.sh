#!/bin/bash
last_commit_date=$(git log -1 --format=%cd | cut -c5- | cut -c-6)
formatted_date=$(date -d"$last_commit_date" +%Y-%m-%d)
sed -i.bak "/[0-9]{4}-[0-9]{2}-[0-9]{2}$/c\\$formatted_date" index.adoc
