#!/bin/sh
set -e

# The args from action.yml arrive as positional parameters.
who="$1"

figlet -w 100 "Hi $who"

. /etc/os-release
greeting="Hello, $who! (Docker action on $PRETTY_NAME)"
echo "$greeting"
echo "Working directory inside the container: $(pwd)"

# The output file is mounted into the container, so this works just as it does on the runner.
echo "greeting=$greeting" >> "$GITHUB_OUTPUT"
