# sails-powered-by

Change or disable X-Powered-By in Sails.JS

<!-- [![build status](https://secure.travis-ci.org/yieme/sails-powered-by.png)](http://travis-ci.org/yieme/sails-powered-by) -->

## Installation

This module is installed via npm:

```sh
npm i sails-powered-by --save
```

## Example Usage

```js
var sailsPoweredBy = require('sails-powered-by')
var express = require('express')
var app = express()
app.use(sailsPoweredBy())
```

## Rights

Copyright (C) 2015 by yieme, License: MIT
