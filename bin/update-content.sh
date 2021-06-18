#!/bin/sh

# This script updates the content inside the running docker container. It should be executed by the caddy webserver as response to a webhook request.

echo "Updating content..."
cd /srv
git fetch origin live --depth 1
git reset --hard origin/live
echo "Done"
