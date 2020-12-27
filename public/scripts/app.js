'use strict';

console.log('app.js is running!');

// in Command line: babel  src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// JSX - JavaScript XML extension of javascript exstension provided by react
//OL is ordered List, li is list item

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indeciscion App'
    ),
    React.createElement(
        'p',
        null,
        ' This is some stupid information'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    ),
    React.createElement(
        'p',
        null,
        ' This is my second paragraph'
    )
);

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Michael Gotcher'
    ),
    React.createElement(
        'p',
        null,
        'Age: 23'
    ),
    React.createElement(
        'p',
        null,
        'Location: San Antonio, TX'
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
