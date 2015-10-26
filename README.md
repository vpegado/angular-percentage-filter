angular-percentage-filter
===========================

Percentage filter for angular.js

## Installation

Install with [Bower](http://bower.io/):
```bash
$ bower install angular-percentage-filter
```

## Usage

Include the library:
```html
<script src="/bower_components/angular-percentage-directive/percentage.js"></script>
```

Import it to the angular applicaiton:
```javascript
angular.module('myApp', ['percentage']);
```

Use it in the view:
```html
<span>{{ 2/3 | percentage }}</span>
<span>{{ 0.2 | percentage }}</span>
<span>{{ (items | filter:{done: true}).length/items.length | percentage }}</span>
```
