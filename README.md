# fetch-factorized
[![npm version](https://img.shields.io/npm/v/fetch-factorized.svg?style=flat-square)](https://www.npmjs.com/package/fetch-factorized)
[![install size](https://badgen.net/packagephobia/install/fetch-factorized)](https://packagephobia.now.sh/result?p=fetch-factorized)
[![downloads](https://img.shields.io/npm/dm/fetch-factorized.svg?style=flat-square)](https://npm-stat.com/charts.html?package=fetch-factorized)


A set of handy functions to perform requests on an API very easily.

Features:

- Deadly simple
- Out-of-the-box json support and form-data
- Elegant error-handling
- Cross-Site requests
- CSRF protection

## Table of Contents
- [Install](#install)
- [Import](#import)
- [Usage](#usage)
    - [Requests](#requests)
        - [GET](#get)
        - [POST](#post)
        - [PUT](#put)
        - [PATCH](#patch)
        - [DELETE](#delete)
        - [OPTIONS](#options)
        - [HEAD](#head)
        - [TRACE](#trace)
    - [Configuring CSRF Token](#configuring-csrf-token)


## Install
```bash
// npm
npm install --save fetch-factorized

// yarn
yarn add fetch-factorized
```

## Import
- ES6 modules
```javascript
// using named imports
import { get, post, delete_ } from 'fetch-factorized'

// using default import
import request from 'fetch-factorized'
request.get(/* url */)
request.post(/* url */, /* body */)
request.delete(/* url */)
```
- CommonJS modules
```javascript
var request = require('fetch-factorized');
request.post(/* url */, /* body */);
request.delete(/* url */);
```

## Usage
### Requests
Making requests always follows the same pattern :
```
request_name(url, [body])
    .then(json => /* ... */)
    .catch(error => /* ... */)    
```
```json``` is always the body of the response parsed as a json.

```error``` is either :
- the error thrown by the fetch API
- the body of the response if it has an error HTTP status code

Here are some examples below :
#### GET
```javascript
import { get } from 'fetch-factorized'

get('/api/todos/')
    .then(todos => console.log(todos))
    .catch(error => console.log(error))
```
#### POST
```javascript
import { post } from 'fetch-factorized'

post('/api/todos/', {text:'Clean my room',done:false})
    .then(json => console.log(json))
    .catch(error => console.log(error))
```
#### PUT
```javascript
import { put } from 'fetch-factorized'

put('/api/todos/1', {text:'Clean my room',done:false})
    .then(json => console.log(json))
    .catch(error => console.log(error))
```
#### PATCH
```javascript
import { patch } from 'fetch-factorized'

patch('/api/todos/1', {done:true})
    .then(json => console.log(json))
    .catch(error => console.log(error))
```
#### DELETE
```javascript
import { delete_ } from 'fetch-factorized'

delete_('/api/todos/1')
    .then(json => console.log(json))
    .catch(error => console.log(error))
```
Note that ```delete``` is a reserved keyword in javascript so we named it ```delete_```. You can also use the default import to avoid that collision:
```javascript
import request from 'fetch-factorized'

request.delete('/api/todos/1')
    .then(json => console.log(json))
    .catch(error => console.log(error))
```

#### OPTIONS
```javascript
import { options } from 'fetch-factorized'

options('/api/todos/1')
    .then(json => console.log(json))
    .catch(error => console.log(error))
```
#### HEAD
```javascript
import { head } from 'fetch-factorized'

head('/api/todos/1')
    .then(json => console.log(json))
    .catch(error => console.log(error))
```
#### TRACE
```javascript
import { trace } from 'fetch-factorized'

trace('/api/todos/1')
    .then(json => console.log(json))
    .catch(error => console.log(error))
```

### Configuring CSRF Token
By default, all requests are performed with the ```XCSRF-Token``` header with ```csrftoken``` cookie as value. This makes it working nicely with a [Django](https://www.djangoproject.com) backend.

But if you're using another backend that handles the CSRF token in a different way, you can configure it like so :
```javascript
import {configure} from 'fetch-factorized'

const request = configure({
  csrfHeaderName: 'string' // default 'XCSRF-Token'
  csrfCookieName: 'string' // default 'csrftoken'
})

// now this requests will be made with a specific CSRF token :
request.post(/* arguments */)
request.put(/* arguments */)
/* ... */
```
If you don't use cookies to store the CSRF token, you can specify its value directly :
```javascript
import {configure} from 'fetch-factorized'

const request = configure({
  csrfHeaderName: 'string' // default 'XCSRF-Token',
  csrfHeaderValue: 'string' | () => 'string'
})
```

## Missing something ?
You'd want to add a feature ? Feel free to post an issue on Github.

## License
[MIT](https://couto.mit-license.org/)

## Authors
Exifers
