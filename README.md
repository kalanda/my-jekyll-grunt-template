# my-jekyll-grunt-template

This is a project template for frontend developments using Jekyll and Grunt. 
You can install using Vagrant or install it locally. Go forward in this document to see how. 

After the installation of whatever of the two options, you can run `grunt serve` for development mode and visit your app at [http://localhost:9000](http://localhost:9000). This will watch your files for changes and automatically rebuild and reload in the browser.  

Also you can run `grunt build` to build a minified and optimized version into the `/dist/` directory.


## 1. Install using Vagrant

1. Install [Vagrant](https://www.vagrantup.com/downloads.html) and [VirtualBox](https://www.virtualbox.org/)
2. Then [download the template project](https://github.com/kalanda/my-jekyll-grunt-template/archive/master.zip) and unzip to some folder.
3. Open a terminal window and go to the new folder with `cd /path/to/folder`
4. Run `vagrant up` and take a coffee (or two). Don't care about red text and just wait the script to finish installing and provisioning the Vagrant box.
5. Run `vagrant ssh` to access the box 
6. Run `cd /vagrant`
6. Now you can use `grunt serve` or `grunt build`

## 2. Install locally

Before start you have to install:

* [RybyGems](https://rubygems.org/)
* [Node.js](http://nodejs.org/)
* [NPM](https://www.npmjs.com/)

First, install Grunt and Bower globally:

	$ npm install -g grunt-cli
	$ npm install -g bower

Clone this repository:

	$ git clone https://github.com/kalanda/my-jekyll-grunt-template.git

Change into the new directory:

	$ cd my-jekyll-grunt-template

Install Bundler

	$ sudo gem install bundler

Now run clean and install script:
	
	$ ./clean.sh
	$ ./install.sh

## License

The MIT License (MIT)

Copyright (c) 2015 kalanda

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
