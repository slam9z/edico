#!/bin/bash
TRIALNAME="run_deploy.sh"
chmod a+rwx $TRIALNAME

[ -d ./bk ] || mkdir ./bk
mv ./edico ./bk

git clone https://github.com/slam9z/edico.git

cd edico

npm install
npm run build
npm run start
