#!/bin/bash

version=$(grep '"version"' package.json | sed -re 's/[^0-9.]+//g')
echo "Building and packaging v$version in 5 seconds"
sleep 5

quasar b -m electron

cd dist/electron/Packaged

echo "Zipping Win32 build in 3s"
sleep 3
zip -r Questling-win-$version.zip 'Questling-win32-x64'

echo "Tarring Linux build in 3s"
sleep 3
tar czvf Questling-linux-$version.tar.gz 'Questling-linux-x64'

echo "Tarring Mac build in 3s"
sleep 3
tar czvf Questling-OSX-$version.tar.gz 'Questling-darwin-x64'
