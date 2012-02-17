/**
 * We're going to create an infinite scrollable list. In this case, we're going to show a date. When you swipe left,
 * you'll see yesterday. Then the day before yesterday, and so on. Swiping right shows you tomorrow, and so on.
 */
// var win = Ti.UI.currentWindow;
var isAndroid = Ti.Platform.osname === 'android';
/**
 * Track where we are in the infinite scrollable views, and define how large of a step goes between each view.
 */
//if(!Ti.App.Properties.hasProperty('imageCount')){
Ti.App.Properties.setInt('imageCount', 2);
//}
/**
 * Create our UI elements.
 */
var scrollable = Ti.UI.createScrollableView({ currentPage: 1, top:50, bottom:0 }),
        containers = [
            Ti.UI.createView({ backgroundColor:'#000', top: 0, right: 0, bottom: 0, left: 0 }),
            Ti.UI.createView({ backgroundColor:'#000', top: 0, right: 0, bottom: 0, left: 0 }),
            Ti.UI.createView({ backgroundColor:'#000', top: 0, right: 0, bottom: 0, left: 0 })
        ];
//win.add(scrollable);
scrollable.views = containers;

/**
 * Loads data into the specified view based on the specified date.
 * @param view
 * @param date
 */
function loadView(view, count) {
    // empty out any children
    if (view.children) {
        for (var c = view.children.length - 1; c >= 0; c--) {
            view.remove(view.children[c]);
        }
    }
    
    var scroll = Ti.UI.createScrollView({
			top:0,
			bottom:0,
			left:0,
			right:0,
			contentHeight:'auto',
			contentWidth:'auto',
			minZoomScale:1.0,
			maxZoomScale:3.0,
			zoomScale:1.0,
			height:Ti.Platform.displayCaps.platformHeight,
			width:Ti.Platform.displayCaps.platformWidth
		});
    // add new children
    var label = Ti.UI.createImageView({
        image: 'http://www.winewebdesign.com/reddinglive/lowpng/mag'+count+'.png',
        top:0,
		defaultImage:'loading.png',
		hiRes:true
    });
    scroll.add(label);
    view.add(scroll);
}

/**
 * Whenever we scroll, manipulate our views so that the user is back to viewing the "middle" view with a buffer view on
 * either side, then make sure the buffer views are actually loaded and ready to go.
 */
function scrollListener(evt) {
    // what is our current page?
    switch (evt.currentPage) {
        case 0: // scrolled to the left
        	if(Ti.App.Properties.getInt('imageCount')>0){
        	Ti.App.Properties.setInt('imageCount', Ti.App.Properties.getInt('imageCount')-1);
        	} else {
        		Ti.App.Properties.setInt('imageCount',1);
        	}
            // so pop a view off the end, and put it at the start
           
            
            if (isAndroid) {
                // temporarily remove our event listener (for Android's sake...)
                scrollable.removeEventListener('scroll', scrollListener);
            }
            // reset the counter so we are back in the middle
          
            // reset our views array
            scrollable.views = containers;
            if (isAndroid) {
                // now we can add the event listener again
                scrollable.addEventListener('scroll', scrollListener);
            }
            // take a day from our currentDate
            //currentDate.setDate(currentDate.getDate() - 1);
            // and now buffer load the view we reset
            loadView(containers[0], Ti.App.Properties.getInt('imageCount'));
            containers.unshift(containers.pop());
           
            break;
        case 1:
            // they didn't go anywhere; should only happen the first time around
            break;
        case 2: // scrolled to the right
            if( Ti.App.Properties.getInt('imageCount')<Ti.App.Properties.getInt('maglength')+1){
            Ti.App.Properties.setInt('imageCount', Ti.App.Properties.getInt('imageCount')+1);
            } else {
            	Ti.App.Properties.setInt('imageCount', Ti.App.Properties.getInt('maglength'));
            }
            // so shift a view off the start, and put it at the end
            //alert( Ti.App.Properties.getInt('imageCount'));
           // 
            if (isAndroid) {
                // temporarily remove our event listener (for Android's sake...)
                scrollable.removeEventListener('scroll', scrollListener);
            }
            // reset the counter so we are back in the middle
           
            // reset our views array
            scrollable.views = containers;
            if (isAndroid) {
                // now we can add the event listener again
                scrollable.addEventListener('scroll', scrollListener);
            }
            // add a day to our currentDate
            //currentDate.setDate(currentDate.getDate() + 1);
            // and now buffer load the view we reset
            loadView(containers[2], Ti.App.Properties.getInt('imageCount'));
            containers.push(containers.shift());
            
            break;
    }
   scrollable.currentPage = 1;
}
scrollable.addEventListener('scroll', scrollListener);

/**
 * Set up our initial views.
 */
loadView(containers[0], 1);
loadView(containers[1], 2);
loadView(containers[2], 3);

/**
 * That's it, we just need to open the window! Hope you enjoyed this.
 */
// win.open();