
// var time = 1;
// var effects = "ease-in-out"
// var beforeX = 30;
// var beforeY = 40;
// var afterX = 0;
// var afterY = 0;

var selectElement = (name) => {
    var selectedEl = document.querySelectorAll(name);
    return selectedEl;
};
var initialize = (beforeY, time, effects)=> {
    var wrap = selectElement('.tobeanimate');
    wrap.forEach(i => {
        i.style.opacity = "0";
        i.style.transition = `all ${time}s ${effects}`;
        i.style.WebkitTransform = `translateY(${beforeY}px)`;
        i.style.msTransform = `translateY(${beforeY}px)`;
        i.style.transform = `translateY(${beforeY}px)`;
    });
    return wrap;
};

var slideInEffects = (afterY) => {
    var slideIn = selectElement('.slideIn');
    slideIn.forEach( each => {
        each.style.opacity = "1";
        each.style.WebkitTransform = `translateY(${afterY}px)`;
        each.style.msTransform = `translateY(${afterY}px)`;
        each.style.transform = `translateY(${afterY}px)`;
    })
}


var scroller = function (beforeY = 50,afterY = 0, time = 1, effects = "ease-in-out") {
    initialize(beforeY, time, effects);
    var wrap = initialize('.tobeanimate');
    window.onscroll = function () {
        var scrollY = window.scrollY;
        var minIndex = 0;
        wrap.forEach(function (i, j) {
            if (Math.abs(i.offsetTop - scrollY) < Math.abs(wrap[minIndex].offsetTop - scrollY)) {
                minIndex = j;
            };
        })
        wrap[minIndex].classList.add('slideIn');
        slideInEffects(afterY);
    }
}



