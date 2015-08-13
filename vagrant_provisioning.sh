#!/bin/sh

set -e # Exit script immediately on first error.
#set -x # Print commands and their arguments as they are executed.

echo "--- Provisioning"

# set timezone
# ln -sf /usr/share/zoneinfo/Europe/Madrid /etc/localtime

#update ubuntu
echo "-- Updating apt-get"
apt-get update -y

# install apt packages
echo "-- Installing apt packages"
apt-get install -y git
apt-get install -y ruby-dev
apt-get install -y nodejs-legacy
apt-get install -y npm

# install tools
echo "-- Installing Grunt and Bower"
npm install -g grunt-cli
npm install -g bower

# install bundler
echo "-- Installing Bundler"
gem install bundler

echo "-- Cleaning"
cd /vagrant
su -c '/vagrant/clean.sh' vagrant
su -c '/vagrant/install.sh' vagrant


