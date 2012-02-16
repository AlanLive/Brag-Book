// this sets the background color of the master UIView (when there are no windows/tab groups on it)


var data = [{title:'1st Dibs',deal:'10% off one item per visit with Brag Card',exception:'',latitude:35.622841,longitude:-97.506997,address:'15020 Bristol Park Place, Edmond, Oklahoma, 73013', phone:'405-753-4466',email:'anne@1stdibsedmond.com',website:'http://www.1stdibsedmond.com'},
{title:'42nd Street Candy',deal:'10% off in store purchase',exception:'',latitude:35.513697,longitude:-97.529821,address:'4200 N Western Ave # A,Oklahoma City, Oklahoma, 73118', phone:'405-521-8337',email:'chocolateistheanswer@msn.com',website:'http:// '},
{title:'Anabelle’s Galleria',deal:'20% off one regular priced item with Brag Card ',exception:'*excludes waxing poetic',latitude:35.653011,longitude:-97.53335,address:'1201 NW 178th Suite 112,Edmond, Oklahoma, 73012', phone:'405-359-1189',email:' ',website:'http:// '},
{title:'Art and Soul Photography, By Angel Porch',deal:'2 free digital files with Brag Card ($50 value)',exception:'',latitude: '',longitude: '',address:'', phone:'405-401-3714',email:'',website:'http://www.angelporchphotography.com'},
{title:'Artsy Phartsy Photography',deal:'10% off with Brag Card',exception:'',latitude:'',longitude:'',address:'', phone:'405-488-4719',email:'erinkanske@cox.net',website:'http://'},
{title:'Bella Blu Maternity',deal:'10% off storewide with Brag Card',exception:'',latitude:35.65276,longitude:-97.465659,address:'323 S. Blackwelder Ave.,Edmond, Oklahoma, 73034', phone:'405-285-9003',email:' ',website:'http://www.bellablumaternity.com'},
{title:'Blessings and Blooms',deal:'15% off one regular priced item with Brag Card',exception:'*excludes furniture',latitude:35.507908,longitude:-97.749342,address:'419 W. Main,Yukon, OK', phone:'405-577-6790',email:' ',website:'http://www.blessingsnblooms.com'},
{title:'Blush\n(Campus Corner)',deal:'15% off one regular priced item with Brag Card',exception:'',latitude:35.211803,longitude:-97.444643,address:'566 Buchanan Ave. Suite E,Norman, Oklahoma, 73069', phone:'405-701-8600',email:' ',website:'http://www.blushnorman.com'},
{title:"Brock's Photography",deal:'$65 off any 16x20 or larger fine linen prints with Brag Card',exception:'',latitude:'',longitude:'',address:'', phone:'405-863-7705',email:'',website:'http://www.brocksphotography.com'},
{title:'Candence Yoga',deal:'Buy one class get one free',exception:'',latitude:35.475226,longitude:-97.519303,address:'801 N. Hudson,Oklahoma City, Oklahoma, 73102', phone:'405-601-8537',email:'mandy@cadenceyoga.com',website:'http://www.cadenceyoga.com'},
{title:'Closet Moxie',deal:'10% off entire purchase with Brag Card',exception:'',latitude:35.591897,longitude:-97.567181,address:'12036 N. May Ave. (Northpark Mall),Oklahoma City, Oklahoma, 73120', phone:'405-286-3760',email:' ',website:'http://www.closetmoxie.com'},
{title:'Courtyard Antiques',deal:'10% off with Brag Card',exception:'',latitude:35.622394,longitude:-97.487149,address:'3314 S. Broadway,Edmond, Oklahoma, 73013', phone:'405-359-2719',email:' ',website:'http://www.courtyardantiquemarket.com'},
{title:'The Culinary Kitchen',deal:'20% off one regular priced piece of Fotunata Italian Dishware with Brag Card',exception:'',latitude:35.545625,longitude:-97.529761,address:'7302 N. Western Ave. ,Oklahoma City, Oklahoma, 73116', phone:'405-418-4884',email:' culinarykitchenokc@yahoo. Com',website:'http:// '},
{title:'Designer Rugs',deal:'20% off one regular priced Jonathan Adler Pillow with Brag Card',exception:'',latitude:35.543415,longitude:-97.529767,address:'7118 N. Western Ave.,Oklahoma City, Oklahoma, 73116', phone:'405-842-9000',email:'info@designerrugsokc.com',website:'http://'},
{title:"Designer's Brew",deal:'20% off custom order rugs with Brag Card, 15% off lamps with Brag Card, 20% off one regular priced item with Brag Card',exception:'',latitude:35.650223,longitude:-97.496017,address:'610 S. Kelly, Ste J, Edmond, Oklahoma, 73003', phone:'405-562-8848',email:'brett@designersbrew.com',website:'http://www.designersbrew.com'},
{title:'Extreme Animals Inc.',deal:'$10 off with Brag Card',exception:'',latitude:35.2862,longitude:-97.750516,address:'318 Red Rock Rd., Tuttle, Oklahoma, 73089', phone:'405-413-3174',email:'',website:'http://www.extremeanimals.org'},
{title:'Fashion Boutique',deal:'20% off one regular priced item with Brag Card',exception:'',latitude:35.654086,longitude:-97.481382,address:'104 S. Broadway, Edmond, Oklahoma, 73034', phone:'405-330-3357',email:'',website:'http://www.fashionboutiqueedmond.com'},
{title:'Funky Monkey',deal:'20% off one regular priced item with Brag Card',exception:'',latitude:35.614454,longitude:-97.567172,address:'14101 N. May Ave., Suite 113,Oklahoma City, Oklahoma, 73134', phone:'405-748-7066',email:' ',website:'http://www.shopfunkymonkeyclothes.com'},
{title:'Holder Brothers Beef',deal:'Buy 6 steaks and receive a lb. of ground beef for free with Brag Card',exception:'',latitude:35.625092,longitude:-97.531391,address:'15220 N. Western,Edmond, OK', phone:'405-715-2334',email:' ',website:'http://www.holderbrothersbeef.com'},
{title:'Jump Zone',deal:'$2 off admission during open play hours with Brag Card',exception:'*one child per family',latitude:35.38256,longitude:-97.524781,address:'Palagio Shopping Center,Oklahoma City, Oklahoma, 73139', phone:'405-200-1691',email:' ',website:'http://www.jumpzoneparty.com'},
{title:'Kamdyn’s Kloset',deal:'Use your Brag Card online code: BRAG20',exception:'',latitude:35.878042,longitude:-97.425677,address:'124 W. Oklahoma Ave.,Guthrie, Oklahoma, 73044', phone:'405-293-9718',email:' ',website:'http://www.kamdynskloset.com'},
{title:'Kindermusik-OCU Performing Arts Academy',deal:'Waived registration for new member $20 for individual $30 for family with Brag Card',exception:'',latitude:35.494322,longitude:-97.538767,address:'2501 N. Blackwelder,Oklahoma City, Oklahoma, 73106', phone:'405-208-5410',email:' ',website:'http:// '},
{title:'Kristin Cook Photography',deal:'15% off of print order with Brag Card',exception:'',latitude:'',longitude:'',address:'', phone:'405-217-2496',email:'kcook@kristincookphotography.com',website:'http://www.kristincookphotography.com'},
{title:'KS Design',deal:'10% off in store purchase with Brag Card ',exception:'',latitude:35.51376,longitude:-97.529837,address:'4209 North Western Ave, Okc, Oklahoma, 73118', phone:'405-524-7868',email:'ksdesign4207@gmail.com',website:'http://www.ksdesignokc.com'},
{title:'Lindsey Brooks Photography',deal:'10% off your print order with Brag Card',exception:'',latitude:35.290932,longitude:-97.72452,address:'5002 E. Highway 37,Tuttle, Oklahoma, 73089', phone:'405-408-8625',email:' ',website:'http://www.lindseybrooksphotography.com'},
{title:'Loabi',deal:'15% off one regular priced item ',exception:'*excludes furniture',latitude:35.507892,longitude:-97.749803,address:'454 W. Main,Yukon, OK', phone:'405-494-7447',email:' ',website:'http://www.loabiboutique.com'},
{title:'Lori Hansen, MD',deal:' $1500 for DOT co2 laser (regularly $3000) with Brag Card',exception:'',latitude:35.606127,longitude:-97.602955,address:'13313 N. Meridian Suite A-3,Oklahoma City, Oklahoma, 73120', phone:'405-753.9600',email:' ',website:'http://www.LoriHansenMD.com'},
{title:'Marissa’s Room',deal:'10% off entire purchase with Brag Card',exception:'',latitude:35.624309,longitude:-97.485771,address:'3224 S. Broadway Suite 124,Edmond, Oklahoma, 73013', phone:'405-285-7777',email:' ',website:'http://www.marissasroom.com'},
{title:'Monticello Cabinets & Doors',deal:'10% off of cabinets and doors with Brag Card',exception:'',latitude:35.462178,longitude:-97.521396,address:'512 SW 3rd, Oklahoma City, Oklahoma, 73109', phone:'405-228-4900',email:'mark@monticellocabinets.com',website:'http://monticellocabinets.com'},
{title:'Morrison Supply Co.',deal:'Purchase an aquatic tub and receive free shipping with Brag Card',exception:'',latitude:35.594555,longitude:-97.503067,address:'501 NE 122nd Suite C,Oklahoma City, Oklahoma, 73114', phone:'405-752-0142',email:' ',website:'http://www.morsco.com'},
{title:'Occasions Paper',deal:'20% off of baby memory albums and free printing on notecards with Brag Card',exception:'',latitude:35.218467,longitude:-97.470457,address:'2001 W. Main St., Suite 119,Norman, Oklahoma, 73069', phone:'405-217-8467',email:' ',website:'http://www.occasionspaper.com'},
{title:'Paint Your Art Out',deal:'$5 off adult painting session with Brag Card',exception:'',latitude:35.656445,longitude:-97.481066,address:'100 N. Broadway, Suite 160,Edmond, Oklahoma, 73034', phone:'405-513-5333',email:'fun@paintyourartout.net',website:'http://www.paintyourartout.net'},
{title:'Pink Swirls',deal:'10% off event packages held at any pink swirl location with Brag Card, Spend over $1500 for off-site catering and receive free unlimited yogurt with Brag Card',exception:'',latitude:35.467859,longitude:-97.53392,address:'1232 West Main Street, Oklahoma City, Oklahoma, 73106', phone:'405-471-7888',email:'',website:'http://www.pink-swirls.com'},
{title:'Seyoung Kim, DC',deal:'Free examination and evaluation with Brag Card',exception:'',latitude:35.546531,longitude:-97.611979,address:'5583 NW Expressway,Oklahoma City, Oklahoma, 73132', phone:'405-773-3131',email:'drseyoungkim@att.net',website:'http:// '},
{title:"Sterling's Home Décor and Gift",deal:'20% off one regular priced item with Brag Card',exception:'',latitude:35.654102,longitude:-97.481398,address:'105 S. Broadway, Edmond, Oklahoma, 73034', phone:'405-844-7465',email:'sterlingsedmond@att.net',website:'http://www.sterlingshomedecorandgifts.com'},
{title:'Storkland & Kids Too',deal:'$10 off $50 purchase on regular priced merchandise with Brag Card',exception:'',latitude:35.541189,longitude:-97.565687,address:'6917 N. May Ave.,Oklahoma City, Oklahoma, 73116', phone:'405-767-1234',email:' ',website:'http://www.storkland.com'},
{title:'Sugar Cakes\nGray St',deal:'Complimentary 2 pack of cupcakes with Brag Card',exception:'',latitude:35.220837,longitude:-97.44639,address:'230 W. Gray St.,Norman, Oklahoma, 73069', phone:' ',email:' ',website:'http://www.oksugar.com'},
{title:'Sugar Cakes\Western Ave.',deal:'Complimentary 2 pack of cupcakes with Brag Card',exception:'',latitude:35.54148,longitude:-97.529771,address:'6900 Western Ave.,Oklahoma City, OK', phone:'405-701-3598',email:' ',website:'http://www.oksugar.com'},
{title:'The Tulip Tree',deal:'20% off one regular priced piece of Fotunata Italian Dishware with Brag Card',exception:'',latitude:35.545625,longitude:-97.529761,address:'7302 N. Western Ave. ,Oklahoma City, Oklahoma, 73116', phone:'405-418-4884',email:' culinarykitchenokc@yahoo. Com',website:'http:// '},
{title:'Tulips',deal:'15% off one regular priced item with Brag Card',exception:'',latitude:35.222843,longitude:-97.476683,address:'360 24th Ave. NW, #100,Norman, Oklahoma, 73069', phone:'405-329-1060',email:' ',website:'http://www.tuliptree.biz'},
{title:'Uniquely U Photography',deal:'15% off one regular priced item with Brag Card',exception:'',latitude:35.211744,longitude:-97.444644,address:'570 Buchanan Ave.,Norman, Oklahoma, 73069', phone:'405-217-9322',email:' ',website:'http://www.tulipshome.com'},
{title:'Uptown Kids',deal:'1 free photo sheet with any purchase with Brag Card',exception:'',latitude:35.49314,longitude:-97.289569,address:'13444 NE 23rd St.,Choctaw, Oklahoma, 73020', phone:'405-769-9422',email:' ',website:'http://www.uniquelyuphotography.com'}
];

var annotations = [];
var	fade_in = Ti.UI.createAnimation({
	opacity:1,
	duration:500
});

var	fade_out = Ti.UI.createAnimation({
	opacity:0,
	duration:500
});

for (i=0; i<data.length; i++){
      if(data[i].latitude){
        var annotation = Titanium.Map.createAnnotation({
	        latitude:data[i].latitude,
	        longitude:data[i].longitude,
	        title:data[i].title,
	        subtitle:data[i].address,
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

// create tab group
var tabGroup = Titanium.UI.createTabGroup();
var color1 = '#f3c4d8';
var color2 = '#001199';

Titanium.UI.setBackgroundColor(color1);
//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Shop Brag',
    navBarHidden:true
});
var tab1 = Titanium.UI.createTab({  
    icon:'tab1.png',
    title:'Shop',
    window:win1
});

var card = Ti.UI.createView({
	backgroundImage:'card.png',
	visible:false,
	top:0, 
	bottom:0,
	left:0, 
	right:0,
	opacity:0.01
});

var cardButton = Ti.UI.createButton({
	title:'Show Card',
	width:200,
	height:50
});

win1.add(cardButton);


cardButton.addEventListener('click', function(){
	card.visible = true;
	card.show();
	card.animate({opacity:1.0, duration:300});
	
})

card.addEventListener('click', function(){
	card.animate({opacity:0.01, duration:300});
	setTimeout(function(){
		card.hide();
	},300);
})
var win1Border = Ti.UI.createImageView({
	image:'bg.png',
	touchEnabled:false,
	width:Ti.Platform.displayCaps.platformWidth,
	height:Ti.Platform.displayCaps.platformHeight,
	top:0
});
win1.add(win1Border);
tabGroup.add(card);
//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Shopping Map',
    navBarHidden:true
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Map',
    window:win2
});

var latitude = 35.650000;
var longitude=-97.500000;


var mapview = Titanium.Map.createView({
	mapType: Titanium.Map.STANDARD_TYPE,
    regionFit:true,
    region:{latitude:latitude,longitude:longitude,latitudeDelta:0.222, longitudeDelta:0.222},
	width:'100%',
	height:'100%',
    animate:true,
   // userLocation:true,
    annotations:annotations
});

Ti.Geolocation.purpose="Geolocation is used to find participating businesses near you.";

Titanium.Geolocation.getCurrentPosition(function(e)
{
	var latDelta = 0.22;
	var longDelta = 0.22;

if(e.success){

	//latitude=e.coords.latitude;
	//longitude=e.coords.longitude;

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
		Ti.Platform.openURL('http://maps.google.com/maps?q='+e.annotation.subtitle);
	 } else if (e.clicksource == 'leftButton'){
		createCoupons(e.annotation.i).open(fade_in);
		// scrollableView.scrollToView(e.annotation.page);
		// tabGroup.setActiveTab(tabGroup.tabs[0]); 
	 }
});

var win2Border = Ti.UI.createImageView({
	image:'bg.png',
	touchEnabled:false,
	width:Ti.Platform.displayCaps.platformWidth,
	height:Ti.Platform.displayCaps.platformHeight,
	top:0
});
win2.add(win2Border);

//
// create controls tab and root window
//
var win3 = Titanium.UI.createWindow({  
    title:'Shopping List',
    navBarHidden:true
});
var tab3 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
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
var win3Border = Ti.UI.createImageView({
	image:'bg.png',
	touchEnabled:false,
	width:Ti.Platform.displayCaps.platformWidth,
	height:Ti.Platform.displayCaps.platformHeight,
	top:0
});
win3.add(win3Border);


//////////////////////////////////////////////////

function createCoupons(i){

        if (Ti.Platform.osname != 'android'){
			var height = Ti.Platform.displayCaps.platformHeight-(Ti.Platform.displayCaps.platformHeight/3);
			var width = Ti.Platform.displayCaps.platformWidth/1.5;
		} else {
			var height = Ti.Platform.displayCaps.platformHeight-(Ti.Platform.displayCaps.platformHeight/5);
			var width = Ti.Platform.displayCaps.platformWidth/2;
		}
        
		
        var scrollView = Ti.UI.createScrollView({
            left:20,
            right:20,
            top:60,
            bottom:10,
            borderRadius:20,
            borderWidth:4,
            borderColor:'white',
            //backgroundGradient: {type:'linear',colors:[{color:'#d4d4d4',position:0.0},{color:'#c4c4c4',position:0.50},{color:'#b4b4b4',position:1.0}]},
            backgroundColor:color1,
           // backgroundImage:'images/bg.png',
            contentWidth:'100%',
    		contentHeight:'auto'
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
			left:5,
			right:0,
			bottom:10,
			height:50,
			layout:'horizontal'
		})
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
        var buttonLeft = ((Ti.Platform.displayCaps.platformWidth/2)/widthCount)-25;
        

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
            var webwin = Ti.UI.createWindow({navBarHidden:false, barColor:color1, title: e.source.name, modal:true});
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

//////////////////////////////////////////////////

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2); 
tabGroup.addTab(tab3); 


// open tab group
tabGroup.open();
