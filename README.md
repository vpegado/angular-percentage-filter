angular-percentage-directive
============================

Percentage filter for angular.js


1. Include the `percentage.js` script into your app.
2. Add `percentage` as a module dependency to your app.
3. Insert the `percentage` filter:
    
        <span>{{ 2/3 | percentage}}</span>
        <span>{{ 0.2 | percentage}}</span>
        <span>{{ (items | filter:{done: true}).length/items.length | percentage}}</span>
