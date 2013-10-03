angular-percentage-filter
============================

Percentage filter for angular.js

1. `bower install angular-percentage-filter`
2. Include the `percentage.js` script into your app.
3. Add `percentage` as a module dependency to your app.
4. Insert the `percentage` filter:
    
        <span>{{ 2/3 | percentage}}</span>
        <span>{{ 0.2 | percentage}}</span>
        <span>{{ (items | filter:{done: true}).length/items.length | percentage}}</span>
