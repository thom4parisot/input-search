# jQuery Input Search

[![Build Status](https://travis-ci.org/oncletom/input-search.png?branch=master)](https://travis-ci.org/oncletom/input-search)

This is a tested HTML5 polyfill for `input[type="search"]`.
Its goal is to provide a cross-browser *fully-featured `input` element* without extra-markup.

This project has been initiated within
[BBC IRFS](http://bbc.co.uk/rd/irfs.html) [Snippets project](http://www.bbc.co.uk/rd/projects/snippets).

## Features

So far, only one feature has been developed. We can be ambitious but the goal
is to serve the project first ;-)

### Cancel Button

![Cancel Button Example](https://raw.github.com/oncletom/input-search/master/misc/img/cancel-button.png)

The button enables the user to clear the field on the go.
This feature is natively implemented only in Webkit browsers so far (and
maybe several other mobile browser vendors so far).


## Install

The easier way to install and track upgrades is to use the [bower](https://github.com/twitter/bower) component manager:

```bash
bower install oncletom/input-search --save
```

It will copy the necessary files for a production use.
Include the files in your HTML documents or your frontend workflow.


## Usage

By default, every `input.textfield-as-searchfield` element will be polyfilled.
If you add the `main.css` in your HTML document, polyfilled features will be styled to be usable on the go.

### Example

```html
<input type="text" class="textfield-as-searchfield">
```

You can find various working examples in the `main.html` file. They deal with static/relative/absolute positionning
etc.

### DOM Structure

Once initialized with all the features enabled, the DOM will be modified to like this:

```html
<input type="text" class="textfield-as-searchfield">
  <div class="search-cancel-button"></div>
```


## Configure

The plugin is initialized with these defaults:

```javascript
$('input.textfield-as-searchfield').inputSearch({
  "focusAfterClear": true,
  "offsetRight": 5,
  "offsetTop": 0,
  "showCancel": true
});
```

**Notice**: The plugin uses event delegation to enhance fields only when necessary (on `focus blur keyup` input
events).
This is a way to keep high performance for users for 1 or 1000 HTML elements.


### `options.focusAfterClear`

If set to `true` (by default), the related `input` element will receive back
the focus after the user has clicked on the cancel button.

It is another to say the focus is lost when the user hit the cancel button.

### `options.offsetRight`

A convenient way to choose how many display pixels you need as a righ gap between
the cancel button and the rightmost boundary of the input element.

### `options.offsetTop`

A convenient way to choose how many display pixels you need as a top gap between
the cancel button and the topmost boundary of the input element.

### `options.showCancel`

If set to `true` (by default), will display a cancel button after the input
has been focused. The button will appear only if the input element has a
non-empty value.

## Contribute

Feel free to report a bug, submit an idea or propose a pull-request.
New features won't be shipped without tests (if you don't write them, I will).
