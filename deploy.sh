#!/usr/bin/env sh

set -e

yarn build

cd dist

git init
git add -A
git commit -m 'deploy'

cd -