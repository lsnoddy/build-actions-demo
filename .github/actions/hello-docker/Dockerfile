# The image is the action's whole environment, so pin the base version.
FROM alpine:3.22

# figlet is not on GitHub's runners, but this image brings it along.
RUN apk add --no-cache figlet

# Use an absolute path: GitHub mounts the workspace over the working directory.
COPY entrypoint.sh /entrypoint.sh

# The web editor can't set the executable bit, so set it while building.
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
