console.log('app.js is running!')

// in Command line: babel  src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// JSX - JavaScript XML extension of javascript exstension provided by react
//OL is ordered List, li is list item

var template = ( 
    <div>
        <h1>Indeciscion App</h1> 
        <p> This is some stupid information</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
        <p> This is my second paragraph</p>
    </div>
);

var template2 = (
    <div>
        <h1>Michael Gotcher</h1>
        <p>Age: 23</p>
        <p>Location: San Antonio, TX</p>
        
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);