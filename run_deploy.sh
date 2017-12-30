#!/bin/bash
TRIALNAME="run_deploy.sh"
chmod a+rwx $TRIALNAME

DATE_WITH_TIME=`date "+%Y%m%d-%H%M%S"`
echo "bk folder name: $DATE_WITH_TIME"

[ -d ./bk/$DATE_WITH_TIME ] || mkdir -p ./bk/$DATE_WITH_TIME
mv ./edico ./bk/$DATE_WITH_TIME/

git clone https://github.com/slam9z/edico.git

cd edico

# kill - stop current 4200
sudo kill $(sudo lsof -t -i:4200)

npm install
npm run build

forever start -c "npm start" ./
