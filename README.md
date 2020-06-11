# Sample Javascript library like Jquery

## Getting started

npm install jquery-sample-lib --save


## Usage
```javascript

import $ from'jquery-lib-sample';

or

const $ = require('jquery-sample-lib');

// get HTML of element
console.log('html  ',$('h3').html());

// get ID
console.log('ID  ',$('h3').getId());

## get innerText
console.log('Inner Text  ',$('h3').getText());

## add events
$('h3').on('click',() => {
    alert('clicked!');
});

// hide element
$('h3').hide();

// show element
$('h3').show();

// get or set attribute
$('h3').attr('class','redh3');

// remove attribute
$('h3').removeAttr('class');

// set backround
$('h3').setBackground('red');

// remove background
$('h3').removeBackground();

// set color
$('h3').setColor('red');

// remove color
$('h3').removeColor();

//check element is disabled
$('#libtext').isDisabled();

//set disabled
$('#libtext').setDisabled();

//remove disabled
$('#libtext').removeDisabled();

//back to previous page
$().back();

//go to next page
$().forward();

//go to next page
$().go(-1);

//....and many more 

```

## Happy programming!!
