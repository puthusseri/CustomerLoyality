var MobMenu = {
	body : false,
	on : false,
	init : function (){
		this.body = document.getElementsByTagName('header')[0];
	},
	show : function(){
		if(!this.body) this.init();
		this.on = true;
		this.body.className = 'show-mob-menu';
	},
	hide:function(){
		if(!this.body) this.init();
		this.on = false;
		this.body.className = '';
	},
	action: function(){
		var act = this.on ? 'hide' : 'show';
		MobMenu[act]();
	}
};
var C = { // Cookie
	set: function (name, value, exdays){
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires="+d.toUTCString();
		document.cookie = name + "=" + value + "; " + expires;
	},
	get: function (cname){
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i=0; i<ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1);
			if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
		}
		return false;
	}
}
var currentLang = {
	name : null,
	init : function(){
		var lang = '';
		var url = window.location.href;
		var langs = ['ar','de','es','fa','fr','jp','ko','pt','ru','tr','vi','zh'];
		for(var i in langs){
			if(url.indexOf('/'+langs[i]+'/') >= 0){
				lang = langs[i];
				break;
			}
		}
		this.name = lang;
	},
	get : function(){
		if(this.name === null) this.init();
		return this.name;
	}
};

var GEO = {
	country : 'ALL',
	init : function(){
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'https://geoip.nekudo.com/api?callback=GEO.response&tm='+(new Date().getTime());
		document.getElementsByTagName('head')[0].appendChild(script);
	},
	response : function(obj){
		if(obj != undefined && obj.country.code != undefined) {
			this.country = obj.country.code;
			//this.country = 'SD';
			ga('send', 'event', 'A/B/C Chrome Extension (testing)', this.country);
		}
		Download.creatLink();
	},
	direct : function(){
		Download.creatLink()
		ga('send', 'event', 'A/B/C Chrome Extension (testing)', this.country);
	}

};

var BtnConfig = {
	init : function(){
		// up download button on Homepage at top
		var buttonIndexTop = document.getElementById('free_download_btn_homepage');
		if(buttonIndexTop) this.onClickUpdate(buttonIndexTop, 'top');

		// up download button on Homepage at bottom
		var buttonIndexBottom = document.getElementById('free_download_btn_homepage_bottom');
		if(buttonIndexBottom) this.onClickUpdate(buttonIndexBottom, 'bottom');

		// up download button on Landing pages at right side
		var buttonLandingPageRight = document.getElementById('free_download_btn_lp_right');
		if(buttonLandingPageRight) this.onClickUpdate(buttonLandingPageRight, 'right');

		// up download button on Landing pages at bottom side
		var buttonLandingPageBottom = document.getElementById('free_download_btn_lp_bottom');
		if(buttonLandingPageBottom) this.onClickUpdate(buttonLandingPageBottom, 'LP bottom');
	},
	onClickUpdate : function(element, position){
		element.setAttribute('onclick', "srartDownload(this, '"+position+"'); return false;");
	}
};

var srartDownload = function(element, position){
	// user action
	var oldClass = element.className;
	element.className = 'activeDownloadBtn '+oldClass;
	element.setAttribute('onclick', "return false;");
	Download.init(position);
};

var Download = {
	browserChrome : null,
	systemIs : null,
	downloadLink : '/download/',
	thankyouLink : '/thankyou/',
	btnPosition : false, // Download button position on a page
	timer : false,
	version : false,
	lang : '',
	links : {
		download_link_windows : "http://mydati.com//download/hss-win2/HSS-773.exe",
		download_link_windows_a : "http://mydati.com//download/hss-win2/HSS-801.exe",
		download_link_windows_b : "http://mydati.com//download/hss-win2/HSS-802.exe",
		download_link_windows_c : "http://mydati.com//download/hss-win2/HSS-800.exe",
		download_link_winphone : "https://www.microsoft.com/store/apps/hotspot-shield-free-vpn/9wzdncrdfng7",
		download_link_mac : "http://mydati.com/download/hss-mac/444.dmg",
		download_link_ios : "http://j.mp/16LKf37",
		download_link_android : "http://j.mp/ZB7EA5"
	},
	spic_countrys : {ALL:1,HU:1,SD:1,CZ:1,KZ:1,SK:1,AF:1,OM:1,BD:1,LK:1,TT:1,SV:1,AL:1,PS:1,UZ:1,TN:1,BS:1,RS:1,MT:1,KE:1,LV:1,YE:1,LY:1,A1:1,HR:1,BG:1,BJ:1,BN:1,LT:1,KY:1,CM:1,GT:1,PR:1,CI:1,EE:1,GE:1,BB:1,MK:1,IS:1,AZ:1,SY:1,SI:1,AW:1,TC:1,HN:1,MU:1,MV:1,PY:1,AO:1,UY:1,AG:1,KH:1,GI:1,UG:1,DJ:1,BO:1,EU:1,AM:1,TM:1,GY:1,SN:1,TZ:1,RE:1,TJ:1,GG:1,ZW:1,BY:1,MD:1,TG:1,BM:1,SO:1,BA:1,NI:1,BZ:1,AN:1,DZ:1,VC:1,SX:1,KN:1,IM:1,DM:1,IO:1,MM:1,NA:1,MC:1,MG:1,VI:1,FO:1,VG:1,LC:1,HT:1,PG:1,BF:1,MW:1,GA:1,SR:1,CG:1,ZM:1,JE:1,NE:1,AS:1,NC:1,NP:1,GM:1,MQ:1,RW:1,LR:1,GU:1,CD:1,PM:1,GD:1,TK:1,SH:1,WS:1,KG:1,CW:1,AX:1,MN:1,BI:1,MR:1,SS:1,LA:1,PF:1,MP:1,SC:1,CV:1,GN:1,BT:1,GF:1,GL:1,FM:1,MO:1,LI:1,CU:1,ME:1,BW:1,A2:1,AI:1,BQ:1,VA:1,GP:1,ET:1,TL:1,ML:1,MZ:1,NR:1,KM:1,FJ:1,AD:1,TD:1,SL:1,GQ:1},
	init : function (position){
		this.btnPosition = position;
		this.lang = currentLang.get();

		// OS & Browser detection
		var agent = navigator.userAgent;
		if( /Android/i.test(agent)) {
			this.systemIs = "android";
		}else if(/iPhone|iPad|iPod/i.test(agent) ){
			this.systemIs = "ios";
		}else if(/IEMobile/i.test(agent) ){
			this.systemIs = "winphone";
		}else if(/Mac/i.test(agent) ){
			this.systemIs = "mac";
			this.browserChrome = /Chrome/i.test(agent) ? true : false;
		}else if(/Windows/i.test(agent) ){
			this.systemIs = "windows";
			this.browserChrome = /Chrome/i.test(agent) ? true : false;
		}else{
			this.systemIs = "default";
		}

		if('download_link_'+this.systemIs in this.links) {
			this.downloadLink = Download['links']['download_link_' + this.systemIs];
		}

		if(this.browserChrome && (this.systemIs == "windows" || this.systemIs == "mac")){
			// check cooke
			var old_thankyou_type = C.get('thankyou_type'); // thank_c || thank_a || thank_b
			var page_type = {
				thank_c: '/thankyou/?_c',
				thank_a: '/thankyou/?_a',
				thank_b: '/thankyou/?_b'
			};
			if (old_thankyou_type && (old_thankyou_type in page_type)) {
				// old user
				if(this.systemIs == "windows") {
					// for Windows users
					var type = {
						thank_c : 'windows_c',
						thank_a : 'windows_a',
						thank_b : 'windows_b'
					};
					this.downloadLink = Download['links']['download_link_' + type[old_thankyou_type]];
				}else{
					// for Mac users
					this.downloadLink = Download['links']['download_link_mac'];
				}
				this.thankyouLink = (this.lang == '' ? '' : '/' + this.lang) + page_type[old_thankyou_type];
				this.start();
			} else {
				// new user
				//GEO.init(); // get country
				GEO.direct();
				this.thankyouLink = (this.lang == '' ? '' : '/' + this.lang) + '/thankyou/';
				this.timer = setTimeout(function () {
					Download.creatLink();
				}, 1000);
			}
		}else{
			this.start();
		}
	},
	creatLink : function(){
		if(Download.timer){
			clearTimeout(Download.timer);
			this.timer = false;
		}else{
			ga('send', 'event', 'A/B/C Chrome Extension (GEO error)', 'too late, more than 1 sec');
			return;
		}
		if(GEO.country in this.spic_countrys){
			// spec country
			this.version = 'thank_c';
			var abc = Math.random();
			if (abc > 0.1) {
				this.version = 'thank_a';
			}
			//if (abc > 0.66) {
			//	this.version = 'thank_b';
			//} else if (abc > 0.33) {
			//	this.version = 'thank_a';
			//}
			// save a type of page to cooke
			C.set('thankyou_type', this.version, 10);
			if(this.systemIs == "windows"){
				// for WINDOW
				var type = {
					thank_c : 'windows_c',
					thank_a : 'windows_a',
					thank_b : 'windows_b'
				};
				this.downloadLink = Download['links']['download_link_' + type[this.version]];
			}else{
				this.downloadLink = Download['links']['download_link_mac'];
			}
			// for MAC
			var type = {
				thank_c : '/thankyou/',
				thank_a : '/thankyou/?_a',
				thank_b : '/thankyou/?_b'
			};
			this.thankyouLink = (this.lang == '' ? '':'/'+this.lang) + type[this.version];
		}
		this.start();
	},
	start : function (){
		if(this.systemIs == 'android' || this.systemIs == 'ios' || this.systemIs == 'winphone') {
			window.open(this.downloadLink, '_blank').focus();
		}else {
			window.location.href = this.downloadLink;
		}
		// track
		var type = {
			thank_c : 'click download (C /thankyou/?_c)',
			thank_a : 'click download (A /thankyou/?_a)',
			thank_b : 'click download (B /thankyou/?_b)'
		};
		if(this.version in type){
			ga('send', 'event', 'A/B/C Chrome Extension (download btn)', type[this.version], 'for ' + GEO.country + (this.lang == '' ? '':', lang='+this.lang) + ', ('+this.btnPosition+')');
		}
		ga('send','event','download button','click', this.btnPosition);
		setTimeout(function(){
			window.location.href = Download.thankyouLink;
		}, 3000);
	}
};

window.onload = function(){
	BtnConfig.init();
};