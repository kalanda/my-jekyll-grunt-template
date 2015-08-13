#!/bin/sh

echo "--- Cleaning"
rm -rf node_modules dist .jekyll .tmp .sass_cache
npm cache clean
bower cache clean
