/**
*Wrap everything in an IIFE (Immediately Invoked Function Expression)
*/

(function () {


/**************************************
* Package data and constructor objects
***************************************/

//Package data array

var data = [
  {
    name: 'Settings Sync',
    description: 'The Settings Sync extension synchronizes settings, snippets, themes, keybindings, workspaces, extensions and more across multiple         machines.',
    author: 'Shan Khan',
    url: 'https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync&_ga=2.148833207.1002324312.1585007513-715846044.1585007512',
    installs: 1502382,
    rating: 4.6,
    price: 0.00,
    selector: 'p1'
  },
  {
    name: 'Git Lens',
    description: 'The Git Lens extension enables you to visualize code authorship within VS Code, add a changes (diff) hover annotation and more.',
    author: 'Eric Amodio',
    url: 'https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens&_ga=2.244181637.1002324312.1585007513-715846044.1585007512',
    installs: 4658132,
    rating: 4.9,
    price: 0.00,
    selector: 'p2'
  },
  {
    name: 'Instant Markdown',
    description: 'The Instant Markdown extension lets you edit Markdown documents in VS Code and instantly previews them in a browser.',
    author: 'David Bankier',
    url: 'https://marketplace.visualstudio.com/items?itemName=dbankier.vscode-instant-markdown&_ga=2.250957318.1002324312.1585007513-715846044.1585007512',
    installs: 111339,
    rating: 3.4,
    price: 0.00,
    selector: 'p3'
  },


//VS Code Extensions constructor function

function Package(data) {
  this.name = data.name;
  this.description = data.description;
  this.author = data.author;
  this.url = data.url;
  this.installs = data.installs;
  this.rating = data.rating;
  this.price = data.price;
  this.selector = data.selector;

  this.getFormattedInstalls = function () {
    return this.installs.toLocaleString ();
  };

  this.getFormattedRating = function () {
    return this.rating.toLocaleString ();
  };

  this.getFormattedPrice = function () {
    return this.price.toLocaleString ();
  };
}



/**************************************
* Utility functions
***************************************/

//Returns today's date, formatted
var getTodaysDate = function() {
  var today = new Date();
  return today.toDateString();
};


//Returns DOM element by id
var getEl = function(id) {
  return document.getElementByID(id);
}


/**
 * Write the package object's data to the appropriate DOM elements
 * utilizing the package selector property.
 */

var writePackageInfo = function(package) {
  var selector = package.selector,
    nameEl = getEl(selector + '-name'),
    descEl = getEl(selector + '-description'),
    authEl = getEl(selector + '-author'),
    urlEl = getEl(selector + '-url'),
    instEl = getEl(selector + '-installs'),
    ratiEl = getEl(selector + '-rating'),
    pricEl = getEl(selector + '-price');

    nameEl.textContent = package.name;
    descEl.textContent = package.description;
    authEl.textContent = package.author;
    urlEl.textContent = package.url;
    instEl.textContent = package.getFormattedInstalls();
    ratiEl.textContent = package.getFormattedRating();
    pricEl.textContent = package.getFormattedPrice();
}


/**************************************
* Utilize package data and constructor objects
* to construct each package.
***************************************/


//Write date
dateEl = getEl('date');
dateEl.textContent = getTodaysDate();


//Write package data one-by-one

var settings = new Package(data[0]);
writePackageInfo(settings);

var git = new Package(data[1]);
writePackageInfo(git);

var instant = new Package(data[2]);
writePackageInfo(instant);

}{});

