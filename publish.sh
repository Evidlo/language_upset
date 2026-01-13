#!/bin/sh

# Exit immediately if a command exits with a non-zero status.
set -e

npm run build
npm run buildsets

mkdir -p dist/
cp bundle.js index.html sets.json combinations.json dist/
touch dist/.nojekyll

# copy contents of dist/ to root of publish branch
ghp-import -f -o -p -b publish dist/