// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function noop() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
(function(b,n){function c(a,d){this.subMenuTimer=this.subMenuActive=this.animating=this.active=!1;this.menuItems=b(a).find("li");this.element=a;this.config=b.extend({},p,d);this.init()}var p={subMenuAnimation:"fade",subMenuAnimationSpeed:200,subMenuCloseSpeed:200,menuClass:"ms-menu",moreMenuClass:"ms-more-menu",moreLinkClass:"ms-more-link",subMenuClass:"ms-sub-menu",minWidth:!1,maxWidth:!1,sliceMethod:"height",whiteList:!1};c.prototype.init=function(){var a=this;b(a.element).addClass(a.config.menuClass);
a.buildMenu();b(n).on("resize",function(){a.buildMenu()});b("."+a.config.menuClass).on("click","."+a.config.moreLinkClass,function(b){a.subMenuDisplay(b)});b("."+a.config.menuClass).on("mouseenter","."+a.config.moreMenuClass,function(){a.subMenuMouseOver()});b("."+a.config.menuClass).on("mouseleave","."+a.config.moreMenuClass,function(){a.subMenuMouseLeave()})};c.prototype.buildMenu=function(){this.setWidth();this.setHeight();"width"===this.config.sliceMethod?this.config.maxWidth&&this.config.containerWidth>
this.config.maxWidth?this.active&&this.resetMenu():this.config.minWidth&&this.config.containerWidth<this.config.minWidth?this.active&&this.resetMenu():this.createMenu():this.createMenu();this.subMenuActive&&this.subMenuClose()};c.prototype.createMenu=function(){var a=b(this.element),d=this.menuItems,e=[],e=0,f,h;a.html("");f=b("<li>",{"class":this.config.moreMenuClass});h=b("<a/>",{href:"#",alt:"More...",title:"More...","class":this.config.moreLinkClass,html:"More..."});f.append(h);if("width"===this.config.sliceMethod)a.append(f),
e+=f.outerWidth(),f.remove(),e=this.config.whiteList?this.sortWhiteList(d,f,e):this.sortWidth(d,e),0<e.length&&this.createSubMenu(e,f),this.active=!0;else{var c,g=b("<div/>",{style:"clear: both;"}),e=0;for(h=d.length;e<h;++e)if(a.append(d[e]),a.append(g),c=a.height(),g.remove(),c>this.elementHeight){e=this.config.whiteList?this.sortWhiteList(d,f):this.sortList(d,f);0<e.length&&this.createSubMenu(e,f);break}}};c.prototype.resetMenu=function(){var a=b(this.element),d=this.menuItems,e,f;a.html("");e=
0;for(f=d.length;e<f;++e)a.append(d[e]);this.active=!1};c.prototype.subMenuDisplay=function(a){this.subMenuActive?this.subMenuClose():this.subMenuOpen();a.preventDefault()};c.prototype.subMenuShow=function(){"fade"===this.config.subMenuAnimation?(b("."+this.config.subMenuClass).stop(),b("."+this.config.subMenuClass).css({display:"block",opacity:1}),this.subMenuActive=!0,this.animating=!1):"slide"===this.config.subMenuAnimation&&(b("."+this.config.subMenuClass).stop(),b("."+this.config.subMenuClass).css({height:"",
"margin-top":"","margin-bottom":"",overflow:"","padding-top":"","padding-bottom":""}),this.subMenuActive=!0,this.animating=!1)};c.prototype.subMenuOpen=function(){var a=this,d=b.Deferred();a.animating||(a.animating=!0,"fade"===a.config.subMenuAnimation?b("."+a.config.subMenuClass).css({display:"block",opacity:"0"}).animate({opacity:1},a.config.subMenuAnimationSpeed,function(){d.resolve()}):"slide"===a.config.subMenuAnimation?b("."+a.config.subMenuClass).slideToggle(a.config.subMenuAnimationSpeed,
function(){d.resolve()}):(b("."+a.config.subMenuClass).css("display","block"),d.resolve()),d.done(function(){a.subMenuActive=!0;a.animating=!1}))};c.prototype.subMenuClose=function(){var a=this,d=b.Deferred();a.animating||(a.animating=!0,"fade"===a.config.subMenuAnimation?b("."+a.config.subMenuClass).animate({opacity:0},a.config.subMenuAnimationSpeed,function(){b(this).css("display","none");d.resolve()}):"slide"===a.config.subMenuAnimation?b("."+a.config.subMenuClass).slideToggle(a.config.subMenuAnimationSpeed,
function(){d.resolve()}):(b("."+a.config.subMenuClass).css("display","none"),d.resolve()),d.done(function(){a.subMenuActive=!1;a.animating=!1}))};c.prototype.subMenuMouseOver=function(){this.subMenuTimer&&clearTimeout(this.subMenuTimer);this.subMenuActive?this.subMenuShow():this.subMenuOpen()};c.prototype.subMenuMouseLeave=function(){var a=this;a.subMenuTimer=setTimeout(function(){a.subMenuClose()},a.config.subMenuCloseSpeed)};c.prototype.setWidth=function(){this.config.containerWidth=b(this.element).width()};
c.prototype.setHeight=function(){var a=b(this.element),d=b("<div/>",{style:"clear: both;"});a.html("");a.append(this.menuItems.first());a.append(d);this.elementHeight=a.height();d.remove();this.resetMenu()};c.prototype.sortList=function(a,d){var e=b(this.element),f=[],h,c=b("<div/>",{style:"clear: both;"}),g,j;e.html("");g=0;for(j=a.length;g<j;++g)e.append(a[g]),e.append(d),e.append(c),h=e.height(),c.remove(),d.remove(),h>this.elementHeight&&(b(a[g]).remove(),f.push(a[g]));return f};c.prototype.sortWhiteList=
function(a,d,e){var f=b(this.element),h=this.config.whiteList,c=[],g,j,l,k;f.html("");g=0;for(j=a.length;g<j;++g){k=!1;for(l in h)h[l]===a[g].id&&(k=!0);if(k)if(f.append(a[g]),"width"===this.config.sliceMethod)e+=b(a[g]).outerWidth(!0),e>=this.config.containerWidth&&(b(a[g]).remove(),e-=b(a[g]).outerWidth(!0),c.push(a[g]));else{var m=b("<div/>",{style:"clear: both;"});f.append(d);f.append(m);k=f.height();m.remove();b(d).remove();k>this.elementHeight&&(b(a[g]).remove(),c.push(a[g]))}else c.push(a[g])}return c};
c.prototype.sortWidth=function(a,d){var e=b(this.element),f=[],c,i;c=0;for(i=a.length;c<i;++c)e.append(a[c]),d+=b(a[c]).outerWidth(!0),d>=this.config.containerWidth&&(b(a[c]).remove(),d-=b(a[c]).outerWidth(!0),f.push(a[c]));return f};c.prototype.createSubMenu=function(a,d){var c=b(this.element),f,h,i;f=b("<ul>",{"class":this.config.subMenuClass});h=0;for(i=a.length;h<i;++h)f.append(a[h]);d.append(f);c.append(d)};b.fn.menuSlicer=function(a){return this.each(function(){new c(this,a)})}})(jQuery,window);