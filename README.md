# scroller.js
A Light Scrolling Animation Library

## How to Use It?
### Download the script as a local file, attach the script;
` <script type="text/javascript" src="scroller.js"></script> `

### Just One Single Line Javascript Code to start!
` scroller() `

That's it! Isn't it neat?

By default, the animation is *from bottom to up*, and takes 1 second, the timing function by default is 'ease-in-out' for smooth transition effects, which, translated to CSS, is from `transform: translate(50px)` to `transform: translate(0px)`, and `transition: 1s ease-in-out;`.

*but you could specify your preferred parameters*
For example:
 `scroller(100, 20, 2, linear)`

The above example code means the element will transform *100px down from the bottom relative to its original position* in the browser, to *20px down from the bottom*, which will take *2 second*, and the timing function will be *linear*.

### The Last Important step!
Add the classname `tobeanimate` on the element you want to animate when scroll to its position.

### And it's done, you're ready to go.