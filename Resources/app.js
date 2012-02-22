// this sets the background color of the master UIView (when there are no windows/tab groups on it)
var color1 = '#f3c4d8';
var color2 = '#001199';

Titanium.UI.setBackgroundColor(color1);
webcheck(1);

if(!Ti.App.Properties.hasProperty('magazineVersion')){
	Ti.App.Properties.setString('magazineVersion', "1.0");
}

Ti.App.Properties.setInt('urlCount', 2);

if(!Ti.App.Properties.hasProperty('couponsVersion')){
	Ti.App.Properties.setString('couponsVersion', "1.0");
}
if(!Ti.App.Properties.hasProperty('settingsVersion')){
	Ti.App.Properties.setString('settingsVersion', "1.0");
}
if(!Ti.App.Properties.hasProperty('maglength')){
	Ti.App.Properties.setInt('maglength', 116);
}
if(!Ti.App.Properties.hasProperty('magmonth')){
	Ti.App.Properties.setString('magmonth', 'Mar. 2012');
}

if(!Ti.App.Properties.hasProperty('cardURL')){
	Ti.App.Properties.setString('cardURL', 'card.jpg');
}

if(!Ti.App.Properties.hasProperty('mainText')){
	Ti.App.Properties.setString('mainText', 'Spring into the season and save with Brag. Each issue with Brag Book Magazine you can use your shop with Brag card around the greater Oklahoma City area and save at your favorite boutiques, home decor stores and dozens of other local businesses. Remember each card is good till the next issue comes out.\n\nEnjoy!');
}

if(!Ti.App.Properties.hasProperty('magURL')){
	Ti.App.Properties.setString('magURL', 'http://www.bragbookmagazine.com/app/mag');
}

if(!Ti.App.Properties.hasProperty('coupons')){
	// var file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "coupons.json");
	// var blob = file.read();
	// var couponText = blob.text;
	// Ti.App.Properties.setString('coupons',couponText);
	 //Ti.API.info("1********"+Ti.App.Properties.getString('coupons'));
// 	
	Ti.App.Properties.setString('coupons',JSON.stringify([{"title":"1st Dibs","deal":"10% off one item per visit with Brag Card","exception":"","latitude":35.622841,"longitude":-97.506997,"address":"15020 Bristol Park Place, Edmond, OK 73013","phone":"405-753-4466","email":"anne@1stdibsedmond.com","website":"http://www.1stdibsedmond.com"},{"title":"42nd Street Candy","deal":"10% off in store purchase","exception":"","latitude":35.513697,"longitude":-97.529821,"address":"4200 N Western Ave # A,Oklahoma City, OK 73118","phone":"405-521-8337","email":"chocolateistheanswer@msn.com","website":""},{"title":"Anabelle’s Galleria","deal":"20% off one regular priced item with Brag Card ","exception":"*excludes waxing poetic","latitude":35.653011,"longitude":-97.53335,"address":"1201 NW 178th Suite 112,Edmond, OK  73012","phone":"405-359-1189","email":"","website":""},{"title":"Art and Soul Photography, By Angel Porch","deal":"2 free digital files with Brag Card ($50 value)","exception":"","latitude":"","longitude":"","address":"","phone":"405-401-3714","email":"","website":"http://www.angelporchphotography.com"},{"title":"Artsy Phartsy Photography","deal":"10% off with Brag Card","exception":"","latitude":"","longitude":"","address":"","phone":"405-488-4719","email":"erinkanske@cox.net","website":""},{"title":"Bella Blu Maternity","deal":"10% off store wide with Brag Card","exception":"","latitude":35.65276,"longitude":-97.465659,"address":"323 S. Blackwelder Ave.,Edmond, OK  73034","phone":"405-285-9003","email":"","website":"http://www.bellablumaternity.com"},{"title":"Blessings and Blooms","deal":"15% off one regular priced item with Brag Card","exception":"*excludes furniture","latitude":35.507908,"longitude":-97.749342,"address":"419 W. Main,Yukon, OK","phone":"405-577-6790","email":"","website":"http://www.blessingsnblooms.com"},{"title":"Blush (Campus Corner)","deal":"15% off one regular priced item with Brag Card","exception":"","latitude":35.211803,"longitude":-97.444643,"address":"566 Buchanan Ave. Suite E,Norman, OK  73069","phone":"405-701-8600","email":"","website":"http://www.blushnorman.com"},{"title":"Brock's Photography","deal":"free 8x8 collage ","exception":"*One per booking. Must mention at time of booking","latitude":"","longitude":"","address":"","phone":"405-863-7705","email":"","website":"http://www.brocksphotography.com"},{"title":"Cadence Yoga","deal":"Buy one class get one free","exception":"","latitude":35.475226,"longitude":-97.519303,"address":"801 N. Hudson,Oklahoma City, OK 73102","phone":"405-601-8537","email":"mandy@cadenceyoga.com","website":"http://www.cadenceyoga.com"},{"title":"Closet Moxie","deal":"10% off entire purchase with Brag Card","exception":"","latitude":35.591897,"longitude":-97.567181,"address":"12036 N. May Ave. (Northpark Mall),Oklahoma City, OK 73120","phone":"405-286-3760","email":"","website":"http://www.closetmoxie.com"},{"title":"Courtyard Antiques","deal":"10% off with Brag Card","exception":"","latitude":35.622394,"longitude":-97.487149,"address":"3314 S. Broadway,Edmond, OK 73013","phone":"405-359-2719","email":"","website":"http://www.courtyardantiquemarket.com"},{"title":"The Culinary Kitchen","deal":"20% off one regular priced piece of Fotunata Italian Dishware with Brag Card","exception":"","latitude":35.545625,"longitude":-97.529761,"address":"7302 N. Western Ave. ,Oklahoma City, OK  73116","phone":"405-418-4884","email":"culinarykitchenokc@yahoo. Com","website":""},{"title":"Designer Rugs","deal":"20% off one regular priced Jonathan Adler Pillow with Brag Card","exception":"","latitude":35.543415,"longitude":-97.529767,"address":"7118 N. Western Ave.,Oklahoma City, OK  73116","phone":"405-842-9000","email":"info@designerrugsokc.com","website":""},{"title":"Designer 's Brew","deal":"20% off custom order rugs with Brag Card, 15% off lamps with Brag Card, 20% off one regular priced item with Brag Card","exception":"","latitude":35.650223,"longitude":-97.496017,"address":"610 S. Kelly, Ste J, Edmond, OK 73003","phone":"405-562-8848","email":"brett@designersbrew.com","website":"http://www.designersbrew.com"},{"title":"Extreme Animals Inc.","deal":"$10 off with Brag Card","exception":"","latitude":35.2862,"longitude":-97.750516,"address":"318 Red Rock Rd., Tuttle, OK 73089","phone":"405-413-3174","email":"","website":"http://www.extremeanimals.org"},{"title":"Fashion Boutique","deal":"20% off one regular priced item with Brag Card","exception":"","latitude":35.654086,"longitude":-97.481382,"address":"104 S. Broadway, Edmond, OK 73034","phone":"405-330-3357","email":"","website":"http://www.fashionboutiqueedmond.com"},{"title":"Funky Monkey","deal":"20% off one regular priced item with Brag Card","exception":"","latitude":35.614454,"longitude":-97.567172,"address":"14101 N. May Ave., Suite 113,Oklahoma City, OK  73134","phone":"405-748-7066","email":"","website":"http://www.shopfunkymonkeyclothes.com"},{"title":"Imatch Franchise (Grand Opening of 3 locations in May 2012!)","deal":"10% off the first month of your Senior Care Services with Brag Card","exception":"","latitude":"","longitude":"","address":"","phone":"405-314-7713 ","email":"adam@imatchfranchise.com","website":"http://www.imatchfranchise.com"},{"title":"Holder Brothers Beef","deal":"Buy 6 steaks and receive a lb. of ground beef for free with Brag Card","exception":"","latitude":35.625092,"longitude":-97.531391,"address":"15220 N. Western,Edmond, OK","phone":"405-715-2334","email":"","website":"http://www.holderbrothersbeef.com"},{"title":"Jump Zone","deal":"$2 off admission during open play hours with Brag Card","exception":"*one child per family","latitude":35.38256,"longitude":-97.524781,"address":"Palagio Shopping Center,Oklahoma City, OK  73139","phone":"405-200-1691","email":"","website":"http://www.jumpzoneparty.com"},{"title":"Kamdyn’s Kloset","deal":"Use your Brag Card online code: BRAG20","exception":"","latitude":35.878042,"longitude":-97.425677,"address":"124 W. Oklahoma Ave.,Guthrie, OK  73044","phone":"405-293-9718","email":"","website":"http://www.kamdynskloset.com"},{"title":"Kindermusik-OCU Performing Arts Academy","deal":"Waived registration for new member $20 for individual $30 for family with Brag Card","exception":"","latitude":35.494322,"longitude":-97.538767,"address":"2501 N. Blackwelder,Oklahoma City, OK  73106","phone":"405-208-5410","email":"","website":""},{"title":"Kristin Cook Photography","deal":"15% off of print order with Brag Card","exception":"","latitude":"","longitude":"","address":"","phone":"405-217-2496","email":"kcook@kristincookphotography.com","website":"http://www.kristincookphotography.com"},{"title":"KS Design","deal":"10% off in store purchase with Brag Card ","exception":"","latitude":35.51376,"longitude":-97.529837,"address":"4209 North Western Ave, Okc, OK 73118","phone":"405-524-7868","email":"ksdesign4207@gmail.com","website":"http://www.ksdesignokc.com"},{"title":"Lindsey Brooks Photography","deal":"10% off your print order with Brag Card","exception":"","latitude":35.290932,"longitude":-97.72452,"address":"5002 E. Highway 37,Tuttle, OK  73089","phone":"405-408-8625","email":"","website":"http://www.lindseybrooksphotography.com"},{"title":"Loabi","deal":"15% off one regular priced item ","exception":"*excludes furniture","latitude":35.507892,"longitude":-97.749803,"address":"454 W. Main,Yukon, OK","phone":"405-494-7447","email":"","website":"http://www.loabiboutique.com"},{"title":"Lori Hansen, MD","deal":" $1500 for DOT co2 laser (regularly $3000) with Brag Card","exception":"","latitude":35.606127,"longitude":-97.602955,"address":"13313 N. Meridian Suite A-3,Oklahoma City, OK  73120","phone":"405-753.9600","email":"","website":"http://www.LoriHansenMD.com"},{"title":"Marissa’s Room","deal":"10% off entire purchase with Brag Card","exception":"","latitude":35.624309,"longitude":-97.485771,"address":"3224 S. Broadway Suite 124,Edmond, OK  73013","phone":"405-285-7777","email":"","website":"http://www.marissasroom.com"},{"title":"Monticello Cabinets & Doors","deal":"10% off of cabinets and doors with Brag Card","exception":"","latitude":35.462178,"longitude":-97.521396,"address":"512 SW 3rd, Oklahoma City, OK 73109","phone":"405-228-4900","email":"mark@monticellocabinets.com","website":"monticellocabinets.com"},{"title":"Morrison Supply Co.","deal":"Purchase an aquatic tub and receive free shipping with Brag Card","exception":"","latitude":35.594555,"longitude":-97.503067,"address":"501 NE 122nd Suite C,Oklahoma City, OK  73114","phone":"405-752-0142","email":"","website":"http://www.morsco.com"},{"title":"Occasions Paper","deal":"20% off of baby memory albums and free printing on note cards with Brag Card","exception":"","latitude":35.218467,"longitude":-97.470457,"address":"2001 W. Main St., Suite 119,Norman, OK  73069","phone":"405-217-8467","email":"","website":"http://www.occasionspaper.com"},{"title":"Oklahoma Child Proofers, LLC","deal":"$10 off your in-home safety evaluation with your Shop with Brag Card ","exception":"","latitude":35.522304,"longitude":-97.59952,"address":"4430 NW 50th Street Suite 11, Okc, OK 73112","phone":"405-625-6670","email":"","website":"http://www.oklahomachildproofers.com"},{"title":"Paint Your Art Out","deal":"$5 off adult painting session with Brag Card","exception":"","latitude":35.656445,"longitude":-97.481066,"address":"100 N. Broadway, Suite 160,Edmond, OK  73034","phone":"405-513-5333","email":"fun@paintyourartout.net","website":"http://www.paintyourartout.net"},{"title":"Pink Swirls","deal":"10% off event packages held at any pink swirl location with Brag Card, Spend over $1500 for off-site catering and receive free unlimited yogurt with Brag Card","exception":"","latitude":35.467859,"longitude":-97.53392,"address":"1232 West Main Street, Oklahoma City, OK  73106","phone":"405-471-7888","email":"","website":"http://www.pink-swirls.com"},{"title":"Seyoung Kim, DC","deal":"Free examination and evaluation with Brag Card","exception":"","latitude":35.546531,"longitude":-97.611979,"address":"5583 NW Expressway,Oklahoma City, OK  73132","phone":"405-773-3131","email":"drseyoungkim@att.net","website":"http://www.kimchiropractic.com"},{"title":"Sterling's Home Décor and Gifts","deal":"20% off one regular priced item with Brag Card","exception":"","latitude":35.654102,"longitude":-97.481398,"address":"105 S. Broadway, Edmond, OK 73034","phone":"405-844-7465","email":"sterlingsedmond@att.net","website":"http://www.sterlingshomedecorandgifts.com"},{"title":"Storkland & Kids Too","deal":"$10 off $50 purchase on regular priced merchandise with Brag Card","exception":"","latitude":35.541189,"longitude":-97.565687,"address":"6917 N. May Ave.,Oklahoma City, OK  73116","phone":"405-767-1234","email":"","website":"http://www.storkland.com"},{"title":"Sugar Cakes (W. Gray St.)","deal":"Complimentary 2 pack of cupcakes with Brag Card","exception":"","latitude":35.220837,"longitude":-97.44639,"address":"230 W. Gray St.,Norman, OK  73069","phone":"","email":"","website":"http://www.oksugar.com"},{"title":"Sugar Cakes (Western Ave.)","deal":"Complimentary 2 pack of cupcakes with Brag Card","exception":"","latitude":35.54148,"longitude":-97.529771,"address":"6900 Western Ave.,Oklahoma City, OK","phone":"405-701-3598","email":"","website":"http://www.oksugar.com"},{"title":"The Tulip Tree","deal":"15% off one regular priced item with Brag Card","exception":"","latitude":35.222843,"longitude":-97.476683,"address":"360 24th Ave. NW, #100,Norman, OK  73069","phone":"405-329-1060","email":"","website":"http://www.tuliptree.biz"},{"title":"Tulips","deal":"15% off one regular priced item with Brag Card","exception":"","latitude":35.211744,"longitude":-97.444644,"address":"570 Buchanan Ave.,Norman, OK  73069","phone":"405-217-9322","email":"","website":"http://www.tulipshome.com"},{"title":"Uniquely U Photography","deal":"1 free photo sheet with any purchase with Brag Card","exception":"","latitude":35.49314,"longitude":-97.289569,"address":"13444 NE 23rd St.,Choctaw, OK  73020","phone":"405-769-9422","email":"","website":"http://www.uniquelyuphotography.com"},{"title":"Uptown Kids","deal":"15% off one regular priced clothing item","exception":"*not valid with any other offers","latitude":35.53314,"longitude":-97.532517,"address":"5840 N. Classen Blvd., Suite 3, Oklahoma City, OK  73118","phone":"405-418-8881","email":"","website":"http://www.uptownkidsstyle.com"}]
	));
}

var data = [];

function parse(e){
	data =[];
	var json = JSON.parse(Ti.App.Properties.getString('coupons'));
	data = json;
	
	//Ti.API.info(data);
	//alert(data);
	
	// for(var i=0; i<json.length; i++){
		// alert(json[i].Name);
		// data.push({title:json[i].Name,  
					// phone: json[i].Phone, 
					// website:json[i].Website, 
					// email:json[i].Email,
					// address:json[i].Address,
					// deal: json[i].Deal,
					// expiration: json[i].Exception,
					// latitude:json[i].Latitude,
					// longitude:json[i].Longitude,
					// page:i
				// });
// 				
	// };
}

parse();

function cacheImage(image, URL) {
			var ImageStore = Ti.Filesystem.applicationDataDirectory + '/CachedImages';
			var dir = Ti.Filesystem.getFile(ImageStore);
			if (!dir.exists()) {
			    dir.createDirectory();
			}
		    var imageURL = Ti.App.Properties.getString(URL);
		  //  alert(imageURL);
		    if (imageURL) {
		   
		         var hashedSource = Ti.Utils.md5HexDigest(imageURL + '') + '.' + imageURL.split('.').pop();
 		        
		         var localImage = Ti.Filesystem.getFile(ImageStore, hashedSource);
		       	
		        if (localImage.exists()) {
		   
		            image.image = localImage.nativePath;
					//image.height = image.toImage().height;
		            //image.width = image.toImage().width;
		            Ti.App.Properties.setString(URL, localImage.nativePath);
		        }
		        else {
					
		            image.image = Ti.App.Properties.getString(URL);
		            image.addEventListener('load', function() {
		                //alert('load');
		                image.left = 2000;
		                image.opacity = 1;
		                image.visible = true;
		                localImage.write(image.toImage());
		                image.opacity = 0.01;
		                image.visible = false;
		                image.left = 0;
		            });
		            
		        }
		        
		        
		    }
};
var annotations = [];

var tempWin = Ti.UI.createWindow({backgroundColor:'#000', opacity:0.8});

var actInd = Titanium.UI.createActivityIndicator({ 
		height:50,
		width:50,
		style:Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN,
		color:'white',
		message:'Updating App Info...'
});
tempWin.add(actInd);

var	fade_in = Ti.UI.createAnimation({
	opacity:1,
	duration:350
});

var	fade_out = Ti.UI.createAnimation({
	opacity:0,
	duration:350
});

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Shop Brag',
    navBarHidden:true,
    layout:'vertical'
});

var openLabel = Ti.UI.createLabel({
	text:Ti.App.Properties.getString('mainText'),
	top:70,
	width:'80%',
	height:'auto',
	font:{fontFamily:'Georgia', fontSize:18},
	textAlign:'center'
});
win1.add(openLabel);
var tab1 = Titanium.UI.createTab({  
    title:'Shop',
    window:win1
});

var card = Ti.UI.createImageView({
	image:Ti.App.Properties.getString('cardURL'),
	visible:false,
	top:0, 
	bottom:0,
	left:0, 
	right:0,
	opacity:0.01,
	preventDefaultImage:true
});

//cacheImage(card,'cardURL');

var cardButton = Ti.UI.createImageView({
	image:'button.png',
	backgroundColor:'transparent',
	width:200,
	height:50,
	top:60
});

win1.add(cardButton);

cardButton.addEventListener('touchStart', function(){
	cardButton.image = 'buttonDOWN.png';
});

cardButton.addEventListener('touchEnd', function(){
	cardButton.image = 'button.png';
});

var Border = Ti.UI.createImageView({
	image:'bg.png',
	touchEnabled:false,
	width:Ti.Platform.displayCaps.platformWidth,
	height:Ti.Platform.displayCaps.platformHeight,
	top:0
});
tabGroup.add(Border);
tabGroup.add(card);


//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Shopping Map',
    navBarHidden:true
});
var tab2 = Titanium.UI.createTab({  
    title:'Map',
    window:win2
});

var latitude = 35.650000;
var longitude=-97.500000;

var mapview = Titanium.Map.createView({
	mapType: Titanium.Map.STANDARD_TYPE,
    regionFit:true,
    region:{latitude:latitude,longitude:longitude,latitudeDelta:0.222, longitudeDelta:0.222},
	top:35,
	bottom:0,
	left:5,
	right:5,
    animate:true
   // userLocation:true,
    //annotations:annotations
});

Ti.Geolocation.purpose="Geolocation is used to find participating businesses near you.";
var directionsURL = 'http://maps.google.com/maps?q='
Titanium.Geolocation.getCurrentPosition(function(e)
{
	
	var latDelta = 0.22;
	var longDelta = 0.22;

if(e.success){

	var userLat=e.coords.latitude;
	var userLon=e.coords.longitude;
	directionsURL = 'http://maps.google.com/maps?saddr='+userLat+','+userLon+'&daddr='

	//mapview.region={latitude:latitude,longitude:longitude,latitudeDelta:latDelta, longitudeDelta:longDelta};
}
if(e.error){
	
	alert('We are having trouble getting your location.  Please ensure your GPS is enabled.');
}
});

win2.add(mapview);

mapview.addEventListener('click', function(e){
	//alert(e.annotation.title);
	//mapview.region={latitude:e.annotation.latitude, longitude:e.annotation.longitude, latitudeDelta:0.22, longitudeDelta:0.22}
	if(e.clicksource == 'rightButton'){
		var mapDialog = Titanium.UI.createAlertDialog({
		    title: 'Open Map Application?',
		    message: 'This will leave the Shop Brag App and take you to your maps application.',
		    buttonNames: ['Ok','Cancel'],
		    cancel:1
		});
		mapDialog.show();
		mapDialog.addEventListener('click', function(x){
			if(x.index == 0){
				Ti.Platform.openURL(directionsURL+e.annotation.address);
			}
		});
		
	 } else if (e.clicksource == 'leftButton'){
		createCoupons(e.annotation.i).open(fade_in);
		// scrollableView.scrollToView(e.annotation.page);
		// tabGroup.setActiveTab(tabGroup.tabs[0]); 
	 }
});

// var win2Border = Ti.UI.createImageView({
	// image:'bg.png',
	// touchEnabled:false,
	// width:Ti.Platform.displayCaps.platformWidth,
	// height:Ti.Platform.displayCaps.platformHeight,
	// top:0
// });
// win2.add(win2Border);

//
// create controls tab and root window
//
var win3 = Titanium.UI.createWindow({  
    title:'Shopping List',
    navBarHidden:true
});
var tab3 = Titanium.UI.createTab({  
    title:'List',
    window:win3
});
var search = Ti.UI.createSearchBar();

var tableView = Titanium.UI.createTableView({
    backgroundColor:color1, 
    search:search,
    top:40,
    left:10,
    right:10,
    data:data
});

tableView.addEventListener('click', function(e)
{
	
	if (e.rowData.title)
	{
		createCoupons(e.index).open(fade_in);
		//scrollableView.scrollToView(e.rowData.page);
		//tabGroup.setActiveTab(tabGroup.tabs[0]); 
	}
});

win3.add(tableView);
// var win3Border = Ti.UI.createImageView({
	// image:'bg.png',
	// touchEnabled:false,
	// width:Ti.Platform.displayCaps.platformWidth,
	// height:Ti.Platform.displayCaps.platformHeight,
	// top:0
// });
// win3.add(win3Border);

var win4 = Titanium.UI.createWindow({  
    title:'Brag Magazine',
    navBarHidden:true,
    backgroundColor:'black'
});
var tab4 = Titanium.UI.createTab({  
    title:'Read',
    window:win4
});

win4.addEventListener('focus', function(){
	
	Border.animate(fade_out);
});

win4.addEventListener('blur', function(){
	
	Border.opacity = 1;
});

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2); 
tabGroup.addTab(tab3); 
tabGroup.addTab(tab4); 

var nav = Ti.UI.createView({bottom:0,height:55, layout:'horizontal', width:'auto', backgroundImage:'bottom.png',touchEnabled:false});
for (var i=0; i<tabGroup.tabs.length; i++){

	var tabView = Ti.UI.createView({left:0,bottom:0,width:Ti.Platform.displayCaps.platformWidth/4, height:55});
	var tabImage = Ti.UI.createImageView({
		image:'tab.png',
		bottom:0,
		height:'auto',
		width:'auto'
	});
	//alert(tabGroup.tabs[i].title);
	var tabLabel= Ti.UI.createLabel({
		text:tabGroup.tabs[i].title,
		//minimumFontSize:8,
		textAlign:'center',
		font:{fontSize:14},
		color:'#000',
		height:'auto',
		bottom:3
	});
	if(i==0){
		tabImage.image = 'tabBG.png';
	}
	tabView.add(tabImage);
	tabView.add(tabLabel);
	nav.add(tabView);	
	
}

tabGroup.add(nav);

cardButton.addEventListener('touchstart', function(){
	cardButton.image = 'buttonDOWN.png';
});

cardButton.addEventListener('touchend', function(){
	
	card.visible = true;
	card.show();
	card.animate(fade_in);
	nav.animate(fade_out);
	cardButton.image = 'button.png';
	
});

card.addEventListener('click', function(){
	
	card.animate(fade_out);
	nav.animate(fade_in);
});
win1.addEventListener('focus', function(){
	//alert('focus');
	nav.children[0].children[0].image = 'tabBG.png';
});
win2.addEventListener('focus', function(){
	nav.children[1].children[0].image = 'tabBG.png';
});
win3.addEventListener('focus', function(){
	nav.children[2].children[0].image = 'tabBG.png';
});
win4.addEventListener('focus', function(){
	nav.children[3].children[0].image = 'tabBG.png';
	internetAlert();
	if(Ti.App.Properties.getInt('urlCount')===2){
		var magDialog = Ti.UI.createAlertDialog({
			title:'Free from Brag!',
			message:'Brag Book Magazine is provided for FREE in this version of the Shop Brag App!',
			buttonNames:['Thanks!']
		});
		magDialog.show();
		Ti.App.Properties.setInt('urlCount', 3);
	}
	
});

win1.addEventListener('blur', function(){
	nav.children[0].children[0].image = 'tab.png';
});
win2.addEventListener('blur', function(){
	nav.children[1].children[0].image = 'tab.png';
});
win3.addEventListener('blur', function(){
	nav.children[2].children[0].image = 'tab.png';
});
win4.addEventListener('blur', function(){
	nav.children[3].children[0].image = 'tab.png';
});

// open tab group
tabGroup.open();


function internetAlert(){
	if(!Ti.Network.online){
	var alertDialog = Titanium.UI.createAlertDialog({
		    title: 'Brag Book Magazine',
		    message: 'Sorry, you need an internet connection to view the magazine.',
		    buttonNames: ['OK','Try Again'],
		    cancel:0
		});
		alertDialog.show();
		alertDialog.addEventListener('click', function(e){
			if(e.index == 1){
				buildMagazine();
			}
		});
	}
}

function buildAnnotations(e){
	if(e){
			for (i=0; i<e.length; i++){
	      if(e[i].latitude){
	        var annotation = Titanium.Map.createAnnotation({
		        latitude:e[i].latitude,
		        longitude:e[i].longitude,
		        title:e[i].title,
		        subtitle:e[i].deal,
		        address:e[i].address,
		        animate:true,
		        pincolor: Titanium.Map.ANNOTATION_PURPLE,
		       // page:data[i].page,
		        rightButton:'images/directions.png',
		        leftButton:'images/money.png',
		        i:i
		        //image:
	        });
	        
	        annotations.push(annotation);
	      }
	}
	mapview.annotations = annotations;
	Ti.App.fireEvent('UpdateComplete');
	}
}

buildAnnotations(data);

function buildMagazine(){

	
	if(Ti.Network.online){
	if (win4.children) {
        for (var c = win4.children.length - 1; c >= 0; c--) {
            win4.remove(win4.children[c]);
        }
    }

	// if(win4.children){
		// //alert('remove');
		// win4.remove(win4.children[0]);
		// win4.remove(win4.children[1]);
		// win4.remove(win4.children[2]);
		// win4.remove(win4.children[3]);
		// win4.remove(win4.children[4]);
	// }
	var scrollable = Ti.UI.createScrollableView({top:50, bottom:0, left:0, right:0, cacheSize:7 });
	var magInd = Ti.UI.createActivityIndicator({
		bottom:40,
		message:'Loading Pages...',
		color:'white',
		height:'auto',
		width:'auto'
	});
	if(Ti.Network.networkType == Ti.Network.NETWORK_MOBILE){
		scrollable.cacheSize = 4;
	}
	var sviews = [];

	var loadingImage = Ti.UI.createImageView({
			image:'loading.png',
			top:0,
			defaultImage:'loading.png',
			hiRes:true
		});
	win4.add(loadingImage);
	win4.add(magInd);
	magInd.show();
	for (var i = 1; i<Ti.App.Properties.getInt('maglength'); i++){
	
		var magview = Ti.UI.createImageView({
			image:Ti.App.Properties.getString('magURL')+'/mag'+i+'.png',
			top:0,
			preventDefaultImage:true,
			hiRes:true
		});
		var scroll = Ti.UI.createScrollView({
			top:0,
			bottom:0,
			left:0,
			right:0,
			contentHeight:Ti.Platform.displayCaps.platformHeight,
			contentWidth:Ti.Platform.displayCaps.platformWidth,
			minZoomScale:1.0,
			maxZoomScale:3.0,
			zoomScale:1.0,
			height:Ti.Platform.displayCaps.platformHeight,
			width:Ti.Platform.displayCaps.platformWidth
		});
		
		scroll.add(magview);
		sviews.push(scroll);
	}
	scrollable.views = sviews;
	//Ti.include('scroll.js');
	win4.add(scrollable);
	var header = Ti.UI.createImageView({
		image:'top.png',
		top:0,
		height:'50',
		width:'auto',
		touchEnabled:false
	});
	win4.add(header);
	
	var month = Ti.UI.createLabel({
		text:Ti.App.Properties.getString('magmonth'),
		textAlign:'left',
		color:'white',
		height:'auto',
		top:15,
		left:10,
		font:{fontStyle:'italic'}
	});
	win4.add(month);
	
	var pages = Ti.UI.createLabel({
		text:'1 of '+Ti.App.Properties.getInt('maglength'),
		textAlign:'right',
		color:'white',
		height:'auto',
		top:15,
		right:10,
		font:{fontStyle:'italic'}
	});
	win4.add(pages);
	scrollable.addEventListener('scroll', function(e){
		
		if(e.currentPage){
			var page = e.currentPage+1;
			pages.text = page+' of '+Ti.App.Properties.getInt('maglength');
		}
		if(e.currentPage > 2){
			//alert('cut');
			//scrollable.views[0].remove( scrollable.views[0].children[0]);
			scrollable.views[e.currentPage-2].children[0]=null;
		}
	});
	Ti.App.fireEvent('UpdateComplete');
	} else {
		internetAlert();
	}
}
buildMagazine();



function createCoupons(i){
	
        if (Ti.Platform.osname != 'android'){
			var height = Ti.Platform.displayCaps.platformHeight-80;
			var width = Ti.Platform.displayCaps.platformWidth-40;
		} else {
			var height = Ti.Platform.displayCaps.platformHeight-(Ti.Platform.displayCaps.platformHeight/5);
			var width = Ti.Platform.displayCaps.platformWidth/2;
		}
        
		
        var scrollView = Ti.UI.createView({
            left:20,
            right:20,
            top:60,
            bottom:20,
            borderRadius:20,
            borderWidth:4,
            borderColor:'white',
            //backgroundGradient: {type:'linear',colors:[{color:'#d4d4d4',position:0.0},{color:'#c4c4c4',position:0.50},{color:'#b4b4b4',position:1.0}]},
            backgroundColor:color1,
           // backgroundImage:'images/bg.png',
           // contentWidth:'300',
    		//contentHeight:'300',
    		width:width,
    		height:height
        });
    	 
    	var view = Ti.UI.createView({
    		//height:height
    	});
     	var dealview = Ti.UI.createView({
     		layout:'vertical',
     		top:50,
     		bottom:70
     	});
        var name = Ti.UI.createLabel({
        	text:data[i].title,
        	top:0,
        	left:5,
        	right:5,
        	textAlign:'center',
        	font:{fontSize:30, fontStyle:'italic'},
        	width:'auto',
        	height:'auto',
        	color:'#000'
        });
        
        dealview.add(name);
        
        var deal = Ti.UI.createLabel({
        	text: data[i].deal,
            width:'auto',
            height:'auto',
            textAlign:'center',
            //top:(Ti.Platform.displayCaps.platformHeight/3),
            
            top:30,
            left:5,
            right:5,
            font:{fontSize:24},
           // minimumFontSize:18,
            color:'#000'
        });
        dealview.add(deal);
        var exception = Ti.UI.createLabel({
        	text:data[i].exception,
        	top:20,
        	width:'auto',
            height:'auto',
            textAlign:'center',
            font:{fontSize:16, fontStyle:'italic'},
        })
        
        dealview.add(exception);
		view.add(dealview);
		var buttonview = Ti.UI.createView({
			left:0,
			right:0,
			bottom:10,
			height:50,
			layout:'horizontal'
		});
        var phoneIcon = Ti.UI.createImageView({
    		image:'images/call.png', 
    		height:'50', 
    		width:'50', 
    		type:'tel', 
    		phone:data[i].phone, 
    		//left:25,
    		//bottom:20
    	});
        
      	var webIcon = Ti.UI.createImageView({
  			image:'images/safari.png', 
  			height:'50', 
  			width:'50', 
  			type:'web',
  			website:data[i].website,
  			//bottom:20,
  			//left:100,
  			name:data[i].title
  		});
        
        var mapIcon = Ti.UI.createImageView({
        	image:'images/map.png', 
        	height:'50', 
        	width:'50', 
        	type:'map',
        	map:data[i].address, 
        	name:data[i].title,
            latitude:data[i].latitude,
            longitude:data[i].longitude,
        	//right:25,
        	//bottom:20
        });
        
        var mailIcon = Ti.UI.createImageView({
        	image:'images/mail.png', 
        	height:'50', 
        	width:'50', 
        	type:'map',
        	email:data[i].email,
        	//right:100,
        	//bottom:20
        });
        var widthCount =0;
        if(data[i].phone != ""){
        	widthCount=1
        }
        if(data[i].website.length > 8){
        	widthCount+=1;
        }
        if(data[i].address.length>5){
        	widthCount+=1;
        }
        if(data[i].email.length>4){
        	widthCount+=1;
        }
      //  var buttonLeft = ((Ti.Platform.displayCaps.platformWidth/2)/widthCount)-25;
        var buttonLeft = (((Ti.Platform.displayCaps.platformWidth-40)-(widthCount*50))/(widthCount+1));
        

        if(data[i].phone != ""){ 
        	phoneIcon.left = buttonLeft;
        	buttonview.add(phoneIcon); }
        
        if(data[i].website.length > 8)
        { webIcon.left = buttonLeft;
        	buttonview.add(webIcon); }
		
		if(data[i].address.length>5){ 
			mapIcon.left = buttonLeft;
			buttonview.add(mapIcon); }
		
		if(data[i].email.length>4){ 
			mailIcon.left = buttonLeft;
			buttonview.add(mailIcon); }
        
        view.add(buttonview);
        //view.add(expDate);
        scrollView.add(view);
        
        var close = Ti.UI.createView({
        	top:10,
        	right:10,
        	backgroundImage:'images/close.png',
        	height:30,
        	width:30,
        	opacity:0.7
        	
        });
        
        view.add(close);
        close.addEventListener('click', function(){
        	close.opacity = 0.4;
        	couponwin.close(fade_out);
        })
        var bgview = Ti.UI.createView({
        	backgroundColor:'#000',
        	opacity:0.8
        });
        var couponwin = Ti.UI.createWindow({opacity:0.1});
        couponwin.add(bgview);
        couponwin.add(scrollView);
        
        mailIcon.addEventListener('click', function(e){
        	couponwin.close();
        	var emailDialog = Titanium.UI.createEmailDialog()
			emailDialog.subject = "Shop Brag Deal Inquiry";
			emailDialog.toRecipients = [e.source.email];
			emailDialog.barColor = color1;
			
			emailDialog.open();
        })
        
        mapIcon.addEventListener('click', function(e){
        	couponwin.close();
            tabGroup.setActiveTab(tabGroup.tabs[1]);
            mapview.deselectAnnotation(e.source.name);
            setTimeout(function(){
            	mapview.setLocation({latitude:e.source.latitude,longitude:e.source.longitude,latitudeDelta:0.01, longitudeDelta:0.01});
            	mapview.selectAnnotation(e.source.name,true);
            },500);
        });
        webIcon.addEventListener('click', function(e){
            couponwin.close();
            var webwin = Ti.UI.createWindow({navBarHidden:false, barColor:color1, title: e.source.name, modal:true, modalTransitionStyle: Ti.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL});
            var webview = Ti.UI.createWebView({url:e.source.website});
            var safari = Ti.UI.createButton({title:'Web', color:'black'});
            var closeWeb = Ti.UI.createButton({title:'Close', color:'black'});
            closeWeb.addEventListener('click', function(){
            	webwin.close();
            })
            webwin.rightNavButton = safari;
            webwin.leftNavButton = closeWeb;
	
            safari.addEventListener ('click', function(){
                Ti.Platform.openURL(e.source.website);
            });
            webwin.add(webview);
            //tab1.open(webwin,{animated:true});
            webwin.open();
        });
        
        phoneIcon.addEventListener('click', function(e){
            Ti.Platform.openURL('tel:'+e.source.phone);
        });
        return couponwin;  
}
function webcheck(url){
		xhr = null;
		var today = new Date();
		var update = new Date();
		//update.setDate(today.getDate()+7);
		//Ti.App.Properties.setString('update',update.getTime());
	if(Ti.Network.online){
		
		var xhr = Titanium.Network.createHTTPClient();
		xhr.timeout = 10000;
		xhr.onload = function()
		{
			
			try
			  {
			  	
			  // var updateMessage = 'Updating App Info...';
			   
			   var version = JSON.parse(this.responseText);
			
			 if(version.magazine != Ti.App.Properties.getString('magazineVersion')||version.coupons != Ti.App.Properties.getString('couponsVersion')||version.settings != Ti.App.Properties.getString('settingsVersion')){
			 		
			 		tempWin.open();
					actInd.show();
			 		// if(version.magazine != Ti.App.Properties.getString('magazineVersion')){
				 		// updateMessage+='Brag Magazine\n'
// 				 		
				 	// }
// 				 	
				 	// if(version.coupons != Ti.App.Properties.getString('couponsVersion')){
				 		// updateMessage+='Brag Businesses\n'
				 	// }
// 				 	
				 	// if(version.settings != Ti.App.Properties.getString('settingsVersion')){
				 		// updateMessage+='App Settings\n'
				 	// }
			 	
			 	// var updateOpt = Ti.UI.createAlertDialog({
			 		// title:'Updated Information Available!', message: "Brag Book Magazine has released updated information for the Shop Brag App.  Would you like to update the following data now?\n"+updateMessage, buttonNames:['Yes', 'Not Now'], cancel:1
			 	// });
			 	// updateOpt.show();
// 			 	
			 	// updateOpt.addEventListener('click', function(e){
			 	// if(e.index == 0){
					Ti.App.Properties.setInt('updateLength',0);
			 		if(version.magazine != Ti.App.Properties.getString('magazineVersion')){
				 		//alert(Ti.App.Properties.getInt('updateLength'));
				 		var magazineCount = Ti.App.Properties.getInt('updateLength')+1;
				 		Ti.App.Properties.setInt('updateLength',magazineCount);
				 		//alert(Ti.App.Properties.getInt('updateLength'));
				 		UpdateMagazine(version);
				 		
				 		
				 	}
				 	
				 	if(version.coupons != Ti.App.Properties.getString('couponsVersion')){
				 		//alert(Ti.App.Properties.getInt('updateLength'));
				 		var couponCount = Ti.App.Properties.getInt('updateLength')+1;
				 		Ti.App.Properties.setInt('updateLength',couponCount);
				 		//alert(Ti.App.Properties.getInt('updateLength'));
				 		UpdateCoupons(version);
				 		
				 	}
				 	
				 	if(version.settings != Ti.App.Properties.getString('settingsVersion')){
				 		//alert(Ti.App.Properties.getInt('updateLength'));
				 		var settingCount = Ti.App.Properties.getInt('updateLength')+1;
				 		Ti.App.Properties.setInt('updateLength',settingCount);
				 		//alert(Ti.App.Properties.getInt('updateLength'));
				 		//Utils.Parse.tips(version.tips);
				 		UpdateSettings(version);
				 		
				 	}
				 
					
					
			
				 	
				 //}
				// });
				 	
			 	}
			 	
			 	version = null;
					//xhr = null;
					var xhr = Titanium.Network.createHTTPClient();
			 }
			  
			catch(err)
			  {
			  
			  }
			  //Global
			  xhr = null;
		};
		
		xhr.onerror = function(e)
		{
			
		};
		
		// open the client
		xhr.open('GET','http://bragbookmagazine.com/app/version.json?'+url);
		//xhr.open('GET','http://winewebdesign.com/appcelerator/version.json ');
		// send the data
		xhr.send();
	}
};
		
function UpdateMagazine (e){
		var xhr2 = Titanium.Network.createHTTPClient();
		actInd.message = 'Downloading New Magazine Info...'
		xhr2.timeout = 10000;
		xhr2.onload = function()
		{
			actInd.message = 'Updating Magazine Info...';
			try
			  {
			  	//Global.modalWin.open();
			var json = JSON.parse(this.responseText);
			//alert(json);
			Ti.App.Properties.setInt('maglength', json.maglength);
			//maglength = json.maglength;
			//alert(maglength);
			Ti.App.Properties.setString('magmonth',json.magmonth); 
			//magmonth = json.magmonth;
			//alert(magmonth);
			Ti.App.Properties.setString('magURL',json.magURL);
			//magURL = json.magURL;
			//alert(magURL);
			Ti.App.Properties.setString('magazineVersion',e.magazine);
			buildMagazine();
			xhr2 = null;
			e=null;
			
			} 
			catch(err) {
				Ti.App.Properties.setInt('updateLength',0);
				tempWin.close();
				//actInd.message = null;
			}
		}
		xhr2.onerror = function(e)
		{
			Ti.App.Properties.setInt('updateLength',0);
			tempWin.close();
			//actInd.message = null;
		};
		
		// open the client
		xhr2.open('GET',e.magazineURL+'?'+Ti.App.Properties.getInt('urlCount'));
		
		// send the data
		xhr2.send();
				
}

function UpdateCoupons (e){
	var xhr2 = Titanium.Network.createHTTPClient();
	actInd.message = 'Downloading Business Info...'
	xhr2.timeout = 10000;
	xhr2.onload = function()
	{
		actInd.message = 'Updating Businesses...';
		try
		  {
		  	actInd.message = 'Updating Businesses...';
		  	//Global.modalWin.open();
		Ti.App.Properties.setString('coupons', this.responseText); 
		//var json = JSON.parse(''+this.responseText);
		parse();
		if(win3.children){
			
        for (var c = win3.children.length - 1; c >= 0; c--) {
            win3.remove(win3.children[c]);
        }
    
		
		var tableView = Titanium.UI.createTableView({
		    backgroundColor:color1, 
		    search:search,
		    top:40,
		    left:10,
		    right:10
		});
		
		tableView.addEventListener('click', function(e)
		{
			
			if (e.rowData.title)
			{
				createCoupons(e.index).open(fade_in);
				//scrollableView.scrollToView(e.rowData.page);
				//tabGroup.setActiveTab(tabGroup.tabs[0]); 
			}
		});
		win3.add(tableView);
		}
	// for(var i=0; i<json.length; i++){
		// //alert(json[i].Name);
		// data.push({title:json[i].Name,  
					// phone: json[i].Phone, 
					// website:json[i].Website, 
					// email:json[i].Email,
					// address:json[i].Address,
					// deal: json[i].Deal,
					// expiration: json[i].Exception,
					// latitude:json[i].Latitude,
					// longitude:json[i].Longitude,
					// page:i
				// });
// 				
	// };
		
		
		//alert(Ti.App.Properties.getList('magdata')); 
		//alert(data);
		 tableView.data = null;
		 tableView.data = data;
		 
		 buildAnnotations(data);
	     Ti.App.Properties.setString('couponsVersion',e.coupons);
		 xhr2 = null;
		 e=null;
		
		} 
		catch(err) {
			alert('err');
			Ti.App.Properties.setInt('updateLength',0);
			tempWin.close();
			//actInd.message = null;
		}
	}
	xhr2.onerror = function(e)
	{
		Ti.App.Properties.setInt('updateLength',0);
		tempWin.close();
		//actInd.message = null;
	};
	
	// open the client
	xhr2.open('GET',e.couponsURL+'?'+Ti.App.Properties.getInt('urlCount'));
	
	// send the data
	xhr2.send();
	
}

function UpdateSettings (e){
		var xhr2 = Titanium.Network.createHTTPClient();

		xhr2.timeout = 10000;
		xhr2.onload = function()
		{
			actInd.message = 'Updating App Info...';
			try
			  {
			  	//Global.modalWin.open();
			var json = JSON.parse(this.responseText);
			//alert(json);

			Ti.App.Properties.setString('cardURL', json.cardURL);

			Ti.App.Properties.setString('mainText', json.mainText);
			
			openLabel.text=Ti.App.Properties.getString('mainText');

			card.image=Ti.App.Properties.getString('cardURL');
			
			//cacheImage(card, 'cardURL');
			//magURL = json.magURL;
			//alert(magURL);
			Ti.App.Properties.setString('settingsVersion',e.settings);
			Ti.App.fireEvent('UpdateComplete');
			xhr2 = null;
			e=null;
			
			} 
			catch(err) {
				Ti.App.Properties.setInt('updateLength',0);
				tempWin.close();
				//actInd.message = null;
			}
		}
		xhr2.onerror = function(e)
		{
			Ti.App.Properties.setInt('updateLength',0);
			tempWin.close();
			//actInd.message = null;
		};
		
		// open the client
		xhr2.open('GET',e.settingsURL+'?'+Ti.App.Properties.getInt('urlCount'));
		
		// send the data
		xhr2.send();
				
}		

Ti.App.addEventListener('UpdateComplete', function(){

var countDown = Ti.App.Properties.getInt('updateLength')-1;

Ti.App.Properties.setInt('updateLength',countDown);
//alert(Ti.App.Properties.getInt('updateLength'));
	if(Ti.App.Properties.getInt('updateLength')==0){
		tempWin.close();
		//actInd.message = null;
	}
});
Ti.App.addEventListener('resume', function(){
	Ti.App.Properties.setInt('urlCount', Ti.App.Properties.getInt('urlCount')+1)
	webcheck(Ti.App.Properties.getInt('urlCount'));
});





