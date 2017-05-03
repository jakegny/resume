#!/bin/bash

npm run build

rm -rf ~/githubio
cp -R ./build ~/githubio/

cd ~/githubio
git init
git remote add origin https://github.com/jakegny/jakegny.github.io.git
git add .
git commit -m "updating - auto deploy"
git push -f -u origin master
