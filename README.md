# NBA App

The NBA app is a React on Rails application that allows the visualization of information provided by an [API](https://rapidapi.com/theapiguy/api/free-nba).

## Installation

Make sure yo have Node.js and yarn installed.

Install Ruby v2.6.5 and the Devkit from [here](https://github.com/oneclick/rubyinstaller2/releases/download/RubyInstaller-2.6.5-1/rubyinstaller-devkit-2.6.5-1-x64.exe).

Use gem to install Rails v6.0.2.1:

```bash
gem install bundler

gem install rails -v 6.0.2.1

gem install sqlite3 -v '1.4.2'

bundle install

yarn install --check-files
```

## Usage

To start the server use:

```bash
rails server
```

Then go to [http://localhost:3000/](http://localhost:3000/) to access the app.