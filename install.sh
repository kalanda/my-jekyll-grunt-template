#! /bin/bash

echo "--- Cleaning"
rm -rf node_modules dist .jekyll .tmp .sass_cache
npm cache clean

echo "--- Installing"
bundle install
bower install
npm install
