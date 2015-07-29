# my-jekyll-grunt-template

This is a project template for frontend developments using Jekyll and Grunt.

## Requirements

Before start you have to install:

* [RybyGems](https://rubygems.org/)
* [Node.js](http://nodejs.org/)
* [NPM](https://www.npmjs.com/)

## Installation

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

	$ ./install.sh


## Development

For development mode run:

	grunt serve

This will watch your files and automatically rebuild with livereload. 
Visit your app at [http://localhost:9000](http://localhost:9000)

## Build

To build a minified and optimized version into the `/dist/` directory run:

	grunt build


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
