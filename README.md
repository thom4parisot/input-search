# jQuery Input Search

This is a tested HTML5 polyfill for `input[type="search"]`.
Its goal is to provide a cross-browser *fully-featured `input` element*.

This project has been initiated within a [BBC IRFS](http://bbc.co.uk/rd/irfs.html) internal project.

## Features

So far, only one feature has been developed. We can be ambitious but the goal
is to serve the project first ;-)

### Cancel Button

The button enables the user to clear the field on the go.
This feature is natively implemented only in Webkit browsers so far (and
maybe several other mobile browser vendors so far).

## Install

You can either use this repository as a submodule or download a static copy.
However the easier way to track upgrades is to use the [bower](https://github.com/twitter/bower) component manager:

```bash
bower install oncletom/input-search --save
```

This will copy the necessary files for a production use.
Include the files in your HTML documents or your frontend workflow.

## Configure

The plugin auto-registers event delegation to attach itself to the proper `input` elements.
By default, it will target every `input.searchfield-as-textfield` elements.

```javascript
$('input.searchfield-as-textfield').inputSearch({
  "focusAfterClear": true,
  "offsetRight": 5,
  "offsetTop": 0,
  "showCancel": true
});
```

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
