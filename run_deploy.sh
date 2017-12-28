[ -d ./bk ] || mkdir ./bk
mv ./edico ./bk

git clone https://github.com/slam9z/edico.git

cd edico

npm install
ng build
ng start
