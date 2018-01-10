FROM node:9.2.0 AS build

ENV NODE_ENV=production
WORKDIR /portfolio
COPY \
     package.json \
     style.scss \
     tsconfig.json \
     yarn.lock \
     ./
COPY public public
COPY src src

RUN NODE_ENV=development yarn && \
    yarn browserify -- src/script.ts -o unuglified.js -p [ tsify --target es5 ] -t envify && \
    yarn uglifyjs -- unuglified.js -c -m -o  public/script.js && \
    yarn tsc && \
    yarn node-sass -- ./style.scss ./public/style.css

FROM node:9.2.0-alpine

ENV NODE_ENV=production
WORKDIR /portfolio

COPY --from=build /portfolio/public public
COPY --from=build /portfolio/dest dest
COPY --from=build \
  /portfolio/package.json \
  /portfolio/yarn.lock \
  ./
RUN yarn && yarn cache clean

ENV PORT 3000

CMD node dest/server/index.js
