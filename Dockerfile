# note: never use the :latest tag in a production site
ARG version="2"
FROM caddy:${version}-builder AS builder

RUN xcaddy build \
   --with github.com/abiosoft/caddy-exec \
   --with github.com/awoodbeck/caddy-validate-github

FROM caddy:$version

RUN apk add --no-cache git

COPY --from=builder /usr/bin/caddy /usr/bin/caddy

COPY Caddyfile /etc/caddy/Caddyfile
#COPY hyperbook/.hyperbook/out /srv
RUN git clone https://github.com/software-challenge/docs.git -b live --depth 1 /srv

COPY bin/update-content.sh /

# used in the Caddyfile
ARG GITHUB_SECRET
ENV GITHUB_SECRET=$GITHUB_SECRET
