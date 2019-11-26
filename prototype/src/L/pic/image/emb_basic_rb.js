/*ver.2016-02-24 - 4:12 */function init_survey(){}function getURLParams(a){var b={};return(null==a||void 0===a)&&(a=window.location.search),
a.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(a,c,d){b[c]=d}),b}function loggingEnabled(){
return null!=getURLParams().enableJSLogging}function LOG(a,b,c){if(loggingEnabled()){
var d="at "+(new Date).toISOString()+": "+a;"error"==c?(d="	***** ERROR *****\n"+d+"\n",
"undefined"!=typeof b?debugConsole.error(d,b):debugConsole.error(d)):"undefined"!=typeof b?debugConsole.log(d,b):debugConsole.log(d);
}}function LOG_ERR(a,b){"undefined"!=typeof b?LOG(a,b,"error"):LOG(a,void 0,"error");
}function stripUrlToHandle(a){if("string"!=typeof a)return LOG_ERR("daimler_basic.js#stripUrlToHandle(url) will not work without a string."),
null;var b=a.replace(/^[^\/]*\/\/[^\/]*\//,"/").replace(/\..*/,"");return"/"!=b.charAt(0)&&(b="/"+b),
b}function json2string(a){if(null==a)return"null";var b=typeof a;if("string"==b)return'"'+a+'"';
if("number"==b||"boolean"==b)return a.toString();var c=["{","}"],d=a instanceof Array;
d&&(c=["[","]"]);var e=c[0];for(var f in a)d||(e+='"'+f+'":'),e+=json2string(a[f]),
e+=",";return e.length>1&&(e=e.substring(0,e.length-1)),e+=c[1]}function setPositions(){
var a=getLayer("ms-footer");a&&(a.style.display="block")}function handleScroll(){}
function setDocumentPosition(){}function initPage(a){setStatusText(escape(a))}function showModel(a,b){
try{null!=showroomTo&&clearTimeout(showroomTo),showroomTo=setTimeout("showNewModel('"+a+"', '"+b+"')",100);
}catch(c){}}function showNewModel(a,b){try{getLayer("showroom$initial").style.display="none",
getLayer("showroom$img").style.display="block",showroomImg[a]||(showroomImg[a]=new Image(480,255),
showroomImg[a].src=b),getLayer("showroom$img").getElementsByTagName("img")[0].src=showroomImg[a].src,
getLayer("showroom$facts").style.display="block",getLayer("showroom$factsinner").innerHTML=getLayer(a).innerHTML;
}catch(c){}}function setApplicationType(a){document.all&&!window.opera?embflashlayer=getLayer("embflashie"):embflashlayer=getLayer("embflash"),
null!=a&&""!=a&&"hpc"==a&&(ishpc=!0,-1!=location.href.indexOf(".skipintro")?(embflashlayer.SetVariable("nowelcome",!0),
embflashlayer.setVariableFl10("nowelcome",!0)):(embflashlayer.SetVariable("nowelcome",!1),
embflashlayer.setVariableFl10("nowelcome",!1)),addEvent(embflashlayer,"mouseover",ms_restartFlash));
}function setStatusText(a){window.status=unescape(a),window.defaultStatus=unescape(a);
}function openChild(a,b,c){a&&(c=c||DEF_POPUP_ATTR,b=b||DEF_POPUP_NAME,popUps[b]&&1!=popUps[b].closed?(popUps[b].close(),
popUps[b]=window.open(a,b,c)):window.open(a,b,c))}function jsCallFromFlash(flashcall){
if(null!=flashcall&&""!=flashcall){var flashcall=flashcall.replace("return false;","");
if(eval(flashcall),flashcall.indexOf("window.open")>=0&&neww)if(document.all&&!window.opera)var embFlashLayer=getLayer("embflashie");else var embFlashLayer=getLayer("embflash");
embFlashLayer.stopChapter(),focusTimeout=window.setTimeout("addFocusEvent()",500);
}}function addFocusEvent(){window.clearTimeout(focusTimeout),addEvent(window,"focus",resumeChapter);
}function resumeChapter(){if(removeEvent(window,"focus",resumeChapter),document.all&&!window.opera)var a=getLayer("embflashie");else var a=getLayer("embflash");
a.playChapter()}function jsCall(a){if(document.all&&!window.opera)var b=getLayer("embflashie");else var b=getLayer("embflash");
"stop"==a?b.stopChapter():b.playChapter()}function getLayer(a){return document.all&&!window.opera?document.all[a]:document.getElementById(a);
}function setClass(a,b){null!=a&&null!=b&&(document.all&&!window.opera?a.className=b:a.setAttribute("class",b));
}function removeClass(a){null!=a&&(document.all&&!window.opera?a.className="":a.removeAttribute("class"));
}function getClassName(a){if(null==a)return"";var b=document.all&&!window.opera?a.className:a.getAttribute("class");
return null==b?"":b}function addEvent(a,b,c,d){if(a&&b&&c){if(a.addEventListener)return a.addEventListener(b,c,d),
!0;if(a.attachEvent){var e=a.attachEvent("on"+b,c);return e}return!1}return!1}function removeEvent(a,b,c,d){
if(a&&b&&c){if(a.removeEventListener)return a.removeEventListener(b,c,d),!0;if(a.detachEvent){
var e=a.detachEvent("on"+b,c);return e}return!1}return!1}function initFooterIE(){
window.onscroll=positionFooter,window.onresize=positionFooter,positionFooter()}function positionFooter(){
try{var a=0;if(getLayer("cms_position")&&getLayer("CFCToolBarDiv")&&(a=getLayer("CFCToolBarDiv").offsetHeight),
getLayer("ms-footer")&&(ms_footer=getLayer("ms-footer")),getLayer("nav5")&&(ms_footer=getLayer("nav5")),
"undefined"!=typeof ms_footer&&null!=ms_footer){var b=document.documentElement.clientHeight+document.documentElement.scrollTop-ms_footer.offsetHeight-a;
ms_footer.style.position="absolute",ms_footer.style.display="block",null!=getLayer("CFCToolBarDiv")&&null==MSFlyoutTruck&&(b-=44),
ms_footer.style.top=b,ms_footer.style.visibility="visible"}}catch(c){LOG_ERR(c.toString());
}}function positionMBTitle(){var a=getLayer("ms-mb-title"),b=getLayer("ms-navi-home"),c=0;
void 0!=a&&void 0!=b&&(c+=b.offsetLeft,c+=b.offsetWidth,b.style.position="absolute",
b.style.cssFloat="none",a.style.position="absolute",a.style.cssFloat="none",a.style.left=c+"px",
a.style.top="8px")}function ms_checkFlashstop(){document.all&&!window.opera?embflashlayer=getLayer("embflashie"):embflashlayer=getLayer("embflash"),
window.ms_setT998Cookie||(null!=embflashlayer&&embflashlayer?window.ms_update||ms_stopFlash():ms_openT998Popup());
}function ms_stopFlash(){document.all&&!window.opera?embflashlayer=getLayer("embflashie"):embflashlayer=getLayer("embflash");
try{if(100!=embflashlayer.PercentLoaded())return void setTimeout("ms_checkFlashstop()",500);
}catch(a){}ms_openT998Popup()&&(embflashlayer.StopPlay(),ms_checkPopupClose())}function ms_openT998Popup(){
if(window.set_cookie){var a=document.cookie;if(null==a)return!1;new Date;return set_cookie("$ms_externalFlash","none",864e5,"/content"),
a=a.match(/\$ms_externalFlash=[^;]+/),null!=a&&""!=a&&a.length?(a=a[0].match(/=.+/)[0].substr(1),
"none"==a?!1:(window.$ms_extPopup=window.open(unescape(a),"daimler"),!0)):!1}}function ms_checkPopupClose(){
return window.$ms_extPopup&&!window.$ms_extPopup.closed?void setTimeout("ms_checkPopupClose()",500):void ms_restartFlash();
}function ms_restartFlash(){document.all&&!window.opera?embflashlayer=getLayer("embflashie"):embflashlayer=getLayer("embflash"),
null!=embflashlayer&&embflashlayer&&(ishpc||embflashlayer.Play())}function changeBackground(a,b){
-1!=navigator.appVersion.toLowerCase().indexOf("msie 6")&&(1==b?document.getElementById(a).style.backgroundImage="url(/css/css_ng/btn_PCN2lightBlue.gif)":document.getElementById(a).style.backgroundImage="url(/css/css_ng/btn_PCN2blue.gif)");
}function checkForEnter(a,b){return!a||13!=a.which&&13!=a.keyCode?!0:void b.submit();
}function flashLinkInternal(a,b){""!=b&&embTrackingManager().sendLinkEvent(b),location.href=a;
}function flashLinkExternal(a,b,c,d){""!=d&&embTrackingManager().sendLinkEvent(d);
var e=window.open(a,c,b);e&&e.focus()}function flashLinkExternalLayer(a,b){window.embGetLayerManager().loadNewLayer(a);
}function mergeURLParameters(a,b){var c=function(a){var b=a.indexOf("?");if(0!=b&&b>0)throw"Parameter list contains illegal prefix for a merge: "+a;
var c=a.indexOf("#");if(c>=0)throw"Parameter list may not contain an URL fragment: "+a;
};c(a),c(b);var d=!1,e=function(a){return-1!=a.indexOf("?")?(d=!0,a.replace(/\?/,"")):a;
};a=e(a),b=e(b);var f={},g=a.split(/&/),h=b.split(/&/),i=function(a,b){var c,d,e;for(var f in b)if(e=b[f].split(/=/),
e&&(c=e[0],d=e[1]),c&&d){if(a[c]&&a[c]!=d)throw"Invalid values for key '"+c+"'! Value 1: '"+a[c]+"', value 2: '"+d+"'!";
a[c]=d}};i(f,g),i(f,h);var j=d?"?":"";for(var k in f)j+=k+"="+f[k]+"&";return j.substring(0,j.length-1);
}function addOnLoadEvent(a){var b=window.onload;"function"!=typeof window.onload?window.onload=a:window.onload=function(){
b&&b(),a()}}function closeEMBWindow(){jQuery.browser.safari&&"standalone"in window.navigator&&window.navigator.standalone?window.history.back():window.close();
}function AJAXConnector(){this.sendRequest=function(a,b,c,e,f){if((this._p_funcData||!this._p_handleData())&&(b||(b=""),
isNaN(c)&&(c=AJAXConnector.REQUEST_GET),this._p_xmlHttp&&this._p_xmlHttp.readyState&&(this._p_stopMonitor(!1),
this._p_xmlHttp=!1),this._p_xmlHttp||(this._p_getReqObject(),this._p_xmlHttp))){(b.length&&"&"==b.substr(0,1)||"?"==b.substr(0,1))&&(b=b.substring(1,b.length)),
this._p_isFile=!1;var g=/http(s)?:\/\/.*/,i=/file:.*/;if(g.test(b)||i.test(window.location.href)&&(this._p_isFile=!0),
a.indexOf(".ngrb.")<=0&&a.indexOf(".html")>0&&msMetaInfo.isRebrush&&(a=a.replace(".html",".ngrb.html")),
window.msSltLinkRewriter&&window.msSltLinkRewriter.getSltTargetUrl){var j="<a href='"+a+"'>domElement</a>",k=document.createElement("div");
k.innerHTML=j,window.msSltLinkRewriter.replaceSltLinksStartingFrom(k.firstChild),
a=a!=k.firstChild.getAttribute("href")?k.firstChild.getAttribute("href"):window.msSltLinkRewriter.getSltTargetUrl(a);
}var l=b?b:a;switch(c){case AJAXConnector.REQUEST_POST:this._p_xmlHttp.open("POST",a,!0),
f||f["Content-Type"]||this._p_xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),
this._p_xmlHttp.setRequestHeader("Content-length",b.length);break;case AJAXConnector.REQUEST_HEAD:
this._p_xmlHttp.open("HEAD",a,!0),b=null;break;case AJAXConnector.REQUEST_GET:var m=a+(b?"?"+b:"");
this._p_xmlHttp.open("GET",m,!0),b=null}if(f)for(h in f)this._p_xmlHttp.setRequestHeader(h,f[h]);
this._p_param=null,e&&(this._p_param=e);var n=this;this._p_xmlHttp.onreadystatechange=function(){
n._p_processResponse()};try{this._p_intTimeout&&this._p_startMonitor(),this._p_xmlHttp.send(b);
}catch(o){this._p_handleData(null,null,AJAXConnector.ERRID_SEND,d)}return l}},this._p_funcData,
this.registerDataHandler=function(a){this._p_funcData=a},this._p_funcProgress=null,
this.registerProgressHandler=function(a){this._p_funcProgress=a},this._p_intTimeout=0,
this.setMaxRequestTime=function(a){this._p_intTimeout=a},this._p_xmlHttp=null,this._p_getReqObject=function(){
try{this._p_xmlHttp=new XMLHttpRequest}catch(a){for(var c=5;c;c--)try{2==c?this._p_xmlHttp=new ActiveXObject("Microsoft.XMLHTTP"):c>2?this._p_xmlHttp=new ActiveXObject("Msxml2.XMLHTTP."+c+".0"):this._p_handleError(null,null,AJAXConnector.ERRID_LOAD,b);
break}catch(d){}}},this._p_processResponse=function(){if(this._p_funcProgress)try{
this._p_funcProgress(this._p_xmlHttp.readyState,this._p_param)}catch(b){b=null}switch(this._p_xmlHttp.readyState){
case 0:case 1:case 2:case 3:break;case 4:var c=this._p_xmlHttp.status,e=this._p_isFile,f=!e&&(200==c||304==c);
0==c&&(f=e&&this._p_xmlHttp.responseText),f?(this._p_stopMonitor(!1,!0),this._p_xmlHttp.responseXML&&this._p_xmlHttp.responseXML.childNodes.length?this._p_handleData(this._p_xmlHttp.responseXML,AJAXConnector.RESPONSE_XML,AJAXConnector.SUCCID_LOAD,a):this._p_handleData(this._p_xmlHttp.responseText,AJAXConnector.RESPONSE_TEXT,AJAXConnector.SUCCID_LOAD,a)):this._p_xmlHttp.status?this._p_handleData(null,null,this._p_xmlHttp.status,this._p_xmlHttp.statusText):this._p_handleData(null,null,AJAXConnector.ERRID_SEND,d);
}},this._p_handleData=function(a,b,d,e){this._p_funcData?this._p_funcData(d,a,this._p_param,b,e):alert("Error-ID: "+AJAXConnector.ERRID_NOHANDLER+"\nError-Message: "+c);
},this._p_startMonitor=function(){var a=this;this._p_to=setTimeout(function(){a._p_stopMonitor(!0);
},this._p_intTimeout)},this._p_stopMonitor=function(a,b){b||(this._p_xmlHttp.onreadystatechange=function(){},
this._p_xmlHttp.abort()),a&&this._p_xmlHttp&&this._p_xmlHttp.readyState?this._p_handleData(null,null,AJAXConnector.ERRID_TIMEOUT,e):this._p_to&&(clearTimeout(this._p_to),
this._p_to=null)};var a="Fetching of data successfully finished",b="Unable to instantiate XMLRequestObject",c="No Data-Handler registered",d="Unable to send data. Is your Computer connected to the internet?",e="Operation timed out.";
}function Flyout2Bean(){this.data=null,this.headlineSrc="",this.headlineAlt="",this.subHeadline="",
this.links=new Array,this.readData=function(a){if(a&&void 0!=a){for(var b=a.getElementsByTagName("component"),c=0;c<b.length;c++)if(b[c].getAttribute("name")==Flyout2Bean.COMPONENT_ID){
this.data=b[c];break}if(this.data&&null!=this.data){for(var d=!1,c=0;c<this.data.childNodes.length;c++){
var e=this.data.childNodes[c];if(e.nodeName==Flyout2Bean.BORDER_TAG){d=!0,this.data=e;
break}}for(var c=0;c<this.data.childNodes.length;c++){var e=this.data.childNodes[c];
if(1==e.nodeType)if(e.nodeName==Flyout2Bean.HEADLINE_TAG&&"corenavigation2-headline"==e.getAttribute("type"))e.firstChild&&(this.headlineSrc=e.firstChild.getAttribute("src"),
e.firstChild.firstChild&&(this.headlineAlt=e.firstChild.firstChild.data));else if(e.nodeName==Flyout2Bean.HEADLINE_TAG&&"corenavigation2-subheadline"==e.getAttribute("type"))e.firstChild&&(this.subHeadline=e.firstChild.data);else if(e.nodeName==Flyout2Bean.LIST_TAG)for(var f=e.getElementsByTagName(Flyout2Bean.ITEM_TAG),g=0;g<f.length;g++){
this.links[g]=new Object;for(var h=f[g],i=0;i<h.childNodes.length;i++){var j=h.childNodes[i];
if(1==j.nodeType)if(j.nodeName==Flyout2Bean.REFERENCE_TAG)this.links[g][Flyout2Bean.REFERENCE_TAG+"_href"]=j.getAttribute("href"),
this.links[g][Flyout2Bean.REFERENCE_TAG+"_onclick"]=j.getAttribute("onclick"),j.firstChild&&(this.links[g][Flyout2Bean.REFERENCE_TAG+"_text"]=j.firstChild.data);else if(j.nodeName==Flyout2Bean.HEADLINE_TAG)j.firstChild&&(this.links[g][Flyout2Bean.HEADLINE_TAG]=j.firstChild.data);else if(j.nodeName==Flyout2Bean.PARAGRAPH_TAG)for(var k=0;k<j.childNodes.length;k++){
var l=j.childNodes[k];1==l.nodeType&&"linebreak"==l.nodeName?this.links[g][Flyout2Bean.PARAGRAPH_TAG]?this.links[g][Flyout2Bean.PARAGRAPH_TAG]+="<br/>":this.links[g][Flyout2Bean.PARAGRAPH_TAG]="<br/>":3==l.nodeType&&(this.links[g][Flyout2Bean.PARAGRAPH_TAG]?this.links[g][Flyout2Bean.PARAGRAPH_TAG]+=l.data:this.links[g][Flyout2Bean.PARAGRAPH_TAG]=l.data);
}else if(j.nodeName==Flyout2Bean.MEDIA_TAG){var m=j.getElementsByTagName(Flyout2Bean.IMAGE_TAG)[0];
this.links[g][Flyout2Bean.IMAGE_TAG+"_src"]=m.getAttribute("src"),m.firstChild&&(this.links[g][Flyout2Bean.IMAGE_TAG+"_alt"]=m.firstChild.data);
}}}}window.msSltLinkRewriter&&window.msSltLinkRewriter.replaceSltLinks()}}}}function MSFlyout(a,b){
return LOG("MSFlyout: called constructor. id: "+a+", type: "+b),this.id=a,this.type=b,
this.active=!1,a&&(this.flyout=getLayer(a)),this.flyout&&void 0!=this.flyout?(MSFlyout.flyouts[b]||(MSFlyout.flyouts[b]=new Array),
MSFlyout.flyouts[b][a]=this,LOG("MSFlyout: flyout is available,  id: "+a+"   type: "+b),
addEvent(this.flyout,"mouseover",function(c){MSFlyout.flyouts[b][a].activate(c)},!0),
void addEvent(this.flyout,"mouseout",function(c){MSFlyout.flyouts[b][a].deactivate(c);
},!0)):(LOG("MSFlyout: no flyout,  id: "+a+"   type: "+b),!1)}function getIEVersion(){
try{if("Microsoft Internet Explorer"==navigator.appName&&navigator.appVersion.indexOf("MSIE")>0){
var a=navigator.appVersion,b=parseInt(a.indexOf("MSIE"))+5,c=a.indexOf(".",b),d=parseInt(a.substring(b,c));
return d}return 0}catch(e){}}function getAbsTop(a){return a.offsetParent?a.offsetTop+getAbsTop(a.offsetParent):a.offsetTop;
}function MSFlyoutTruck(a,b){return a&&""!=a?(this.$me=jQuery("#"+a),LOG("MSFlyoutTruck: constructor: id: "+a+", type: "+b),
MSFlyout.call(this,a,b),MSFlyoutTruck.$getCoreNav1Containers().click(this.highlightActive),
void this.identifyPermanentFlyout(a)):void LOG_ERR("MSFlyoutTruck: NO ID!")}function set_cookie(a,b,c,d,e,f){
String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"");
});var g=b.trim();if(!g||0==g.length||!containsAllowedChars(b))return void debugConsole.log("Could not to set Cookie with non ASCII chars or the cookie value is empty: "+a+"="+b);
var h=a+"="+escape(b);if(c){var i=new Date,j=new Date(i.getTime()+c);h+="; expires="+j.toGMTString();
}d&&(h+="; path="+escape(d)),e&&(h+="; domain="+escape(e)),f&&(h+="; secure"),debugConsole.log("Setting Cookie '"+h),
document.cookie=h}function delete_cookie(a,b){set_cookie(a,"",-1,b);var c=get_cookie_info(a);
c&&(debugConsole.log("Cookie '"+a+"' was not deleted, cookie_info: "+c),b||delete_cookie(a,"/"));
}function get_cookie_info(a){var b=document.cookie.match(a+"=(.*?)(;|$)");return b?unescape(b[1]):null;
}function get_cookie(a){var b=document.cookie.match(a+"=(.*?)(;|$)");return b?unescape(b[1]):null;
}function get_cookie_list(){var a=new Array;results=document.cookie.split(";");for(var b in results){
var c=String(results[b])+";",d=c.match(/([^\s]*?)=(.*?)(;|$)/);null!=d&&a.push(d[1]);
}return a}function checkCookieAvailability(a,b){set_cookie("dccookieenabled","enabled","","/","",""),
get_cookie("dccookieenabled")?a():b(),delete_cookie("dccookieenabled")}function getLinkWithLoginLayer(){
var a=window.location.href,b=parseInt(a.indexOf("errorstate"));b>0?a=a.substring(0,b+11)+"ll3"+a.substring(b+15):a+=a.indexOf("?")>0?"&errorstate=ll3":"?errorstate=ll3",
window.location.href=a}function containsAllowedChars(a){for(var b=0,c=a.length;c>b;b++)if(a.charCodeAt(b)>255||a.charCodeAt(b)<32)return!1;
return!0}function getUniquePageId(){if(""==uniquePageId){var a=new Date;uniquePageId=a.getMilliseconds()+"1000"+Math.floor(8999*Math.random());
}return uniquePageId}function getHandle(){var a,b=-1,c=document.location.toString(),d=c.lastIndexOf("/");
if(-1==d)d=0;else for(var e=100;e>0;){if(b++,e--,b=c.indexOf("/",b),-1==b){b=0;break;
}if(!(b+2<c.length))break;if("///"==c.substr(b,3))b+=3;else{if("//"!=c.substr(b,2))break;
b+=2}}var f=c.indexOf(".",d);return-1==f&&(f=c.length),a=c.substring(b,f)}function stWinLocHash(a){
try{jQuery.historyLoad(a)}catch(b){}}function HistoryManager(){function a(a){try{
window.document.getElementById(b.flashId1)&&window.document.getElementById(b.flashId1).gth(a);
}catch(c){}}var b=this;$.browser.msie?b.flashId1="embflashie":b.flashId1="embflash",
this.ckWinLocHash=function(){return jQuery(document).ready(function(){jQuery.historyInit(a),
location.hash||a()}),!0}}function adjustProtocol(a){var b=window.location.protocol.indexOf("https")>-1?"https":"http";
return a=a.replace(/^https?/,b),a.match(/^https?/)||(a=b+"://"+a),a}function insertFlash(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
(null==d||""==d)&&(d="Opaque"),(null==e||""==e)&&(e="noscale"),(null==f||""==f)&&(f="true"),
(null==l||""==l)&&(l=""),(null==n||""==n)&&(n=!1);var p=o?' id="embflashie"':"",q=o?' id="embflash"':"",r=o?' swliveconnect="true"':"",s="<object"+p+' classid="'+g+'" codebase="'+adjustProtocol(h)+'" ',t="";
s+=' width="'+b+'" height="'+c+'">',s+='<param name="movie" value="'+a+'" />',s+='<param name="quality" value="high" />',
s+='<param name="play" value="'+f+'" />',s+='<param name="wmode" value="'+d+'" />',
s+='<param name="scale" value="'+e+'" />',s+='<param name="menu" value="false" />',
null==k&&(k="");try{""!=k&&(window.cms_sltpath||top.cms_sltpath)&&(k+="&"),window.cms_sltpath?k+="cms_sltpath="+window.cms_sltpath:top.cms_sltpath&&(k+="cms_sltpath="+top.cms_sltpath);
}catch(u){debugConsole.log("Cross domain collision: "+u.message)}if(null!=m&&""!=m)for(var v=m.split("&"),w=0;w<v.length;w++){
var x=v[w].split("=");1==x.length?(s+='<param name="'+x[0]+'" value="" />',t+=" "+x[0]+'="" '):2==x.length&&(s+='<param name="'+x[0]+'" value="'+x[1]+'" />',
t+=" "+x[0]+'="'+x[1]+'" ')}return null!=k&&""!=k&&(s+='<param name="FlashVars" value="'+k+'" />'),
null!=j&&""!=j&&(s+='<param name="align" value="'+j+'" />'),null!=i&&""!=i&&(s+='<param name="bgcolor" value="'+i+'" />'),
s+="<embed"+q+r+' src="'+a+'" width="'+b+'" height="'+c+'" wmode="'+d+'" play="'+f+'" scale="'+e+'" menu="false"',
s+=' bgcolor="#FFFFFF"',null!=t&&""!=t&&(s+=t),null!=k&&""!=k&&(s+=' FlashVars="'+k+'"'),
null!=j&&""!=j&&(s+=' align="'+j+'"'),s+=' quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash">',
s+="</embed>",s+="</object>",n?s:void(""!=l&&document.getElementById(l)?document.getElementById(l).innerHTML=s:document.write(s));
}function flash_versioncheck(a){var b=[0,0,0];if("undefined"!=typeof navigator.plugins&&"object"==typeof navigator.plugins["Shockwave Flash"]){
var c=navigator.plugins["Shockwave Flash"].description;!c||"undefined"!=typeof navigator.mimeTypes&&navigator.mimeTypes["application/x-shockwave-flash"]&&!navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin||(c=c.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),
b[0]=parseInt(c.replace(/^(.*)\..*$/,"$1"),10),b[1]=parseInt(c.replace(/^.*\.(.*)\s.*$/,"$1"),10),
b[2]=/[a-zA-Z]/.test(c)?parseInt(c.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0)}else{
if("undefined"==typeof ActiveXObject)return!1;try{var d=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
d&&(c=d.GetVariable("$version"),c&&(c=c.split(" ")[1].split(","),b=[parseInt(c[0],10),parseInt(c[1],10),parseInt(c[2],10)]));
}catch(e){return debugConsole.log("No ActiveX functionality in IE."),!1}}return b[0]>=parseInt(a,10)?!0:!1;
}function insertQuickTime(a,b,c,d,e,f,g,h,i,j){(null==e||""==e)&&(e="TOFIT"),(null==f||""==f)&&(f="true"),
(null==g||""==g)&&(g="true");var k='<object classid="'+h+'" codebase="'+i+'" ';k+='width="'+c+'" height="'+d+'" ',
k+='id="'+b+'">',k+='<param name="src" value="'+a+'"/>',k+='<param name="AUTOPLAY" value="'+f+'" />',
k+='<param name="CONTROLLER" value="'+g+'" />',k+='<param name="SCALE" value="'+e+'" />',
k+='<embed src="'+a+'" type="video/quicktime" pluginspace="http://www.apple.com/quicktime/download/" width="'+c+'" height="'+d+'" ',
k+='scale="'+e+'" autoplay="'+f+'" controller="'+g+'" name="'+b+'" >',k+="</embed></object>",
""!=j&&document.getElementById(j)?document.getElementById(j).innerHTML=k:document.write(k);
}function insertRealVideo(a,b,c,d,e,f,g,h,i,j){(null==b||""==b)&&(b="realmovie"),
(null==e||""==e)&&(e="true"),(null==f||""==f)&&(f="false"),(null==g||""==g)&&(g="ImageWindow");
var k='<object classid="'+h+'" codebase="'+i+'" ';k+='width="'+c+'" height="'+d+'">',
k+='<param name="src" value="'+a+'"/>',k+='<param name="console" value="'+b+'"/>',
k+='<param name="controls" value="'+g+'" />',k+='<param name="center" value="'+e+'" />',
k+='<param name="autostart" value="'+f+'" />',k+="</object>",""!=j&&document.getElementById(j)?document.getElementById(j).innerHTML=k:document.write(k);
}function insertApplet(a,b,c,d,e,f,g,h){(null==e||""==e)&&(e="baseline");var i='<object classid="'+f+'" codebase="'+g+'" ';
i+='width="'+c+'" height="'+d+'" align="'+e+'" code="'+a+'">',i+='<param name="code" value="'+a+'"/>',
i+='<param name="type" value="application/x-java-applet"/>',i+="</object>",""!=h&&document.getElementById(h)?document.getElementById(h).innerHTML=i:document.write(i);
}function ms_foldingtable_handleRequest(a,b,c,d,e){a==AJAXConnector.SUCCID_LOAD&&d==AJAXConnector.RESPONSE_TEXT?(LOG("foldingtable#ms_foldingtable_handleRequest: status"+a+" param: "+c+"type: "+d+" statusmsg:"+e),
ms_foldingtable_printEntry(c,b)):LOG("foldingtable#ms_foldingtable_handleRequest: No AJAX Request here"),
jQuery("a.tooltip").each(function(){jQuery(this).enableTooltipBehaviour()})}function ms_foldingtable_handleRequestForAutomaticallyCalledEntries(a,b,c,d,e){
if(ms_foldingtable_handleRequest(a,b,c,d,e),ms_foldingtable_automaticRequestsPending>0&&(ms_foldingtable_automaticRequestsPending--,
0==ms_foldingtable_automaticRequestsPending)){var f=window.location.hash;if(f=f.replace("#",""),
""!=f){var g=jQuery("div[name*='"+f+"']");jQuery(window).scrollTop(g.offset().top),
LOG("Scrolltop done for param: "+c)}}}function ms_foldingtable_toggleTableEntry(a){
for(a||(a=window.event),elem=a.target?a.target:a.srcElement;elem.nodeName&&"div"!=elem.nodeName.toLowerCase();)elem=elem.parentNode;
var b=elem.id.split("@"),c=b[0],d=b[1];ms_foldingtable_loadEntryData(c,d),ms_foldingtable_doToggle(c);
}function ms_foldingtable_highlightTableEntry(a){var b="highlight";for(a||(a=window.event),
elem=a.target?a.target:a.srcElement;elem.nodeName&&"tr"!=elem.nodeName.toLowerCase();)elem=elem.parentNode;
var c="";c=elem.className,c=c.split(" ");for(var d=!1,e=0;e<c.length;e++)c[e]==b&&(d=!0);
d||c.push(b),c=c.join(" "),elem.className=c}function ms_foldingtable_unhighlightTableEntry(a){
var b="highlight";for(a||(a=window.event),elem=a.target?a.target:a.srcElement;elem.nodeName&&"tr"!=elem.nodeName.toLowerCase();)elem=elem.parentNode;
var c="";c=elem.className,c=c.split(" ");for(var d=0;d<c.length;d++)c[d]==b&&(c[d]="");
c=c.join(" "),elem.className=c}function ms_foldingtable_loadEntryData(a,b,c){if(b&&""!=b&&void 0==ms_foldingtable_elementsLoaded[a]){
var d=new AJAXConnector;c?(ms_foldingtable_automaticRequestsPending++,d.registerDataHandler(ms_foldingtable_handleRequestForAutomaticallyCalledEntries)):d.registerDataHandler(ms_foldingtable_handleRequest),
d.setMaxRequestTime(5e3),d.sendRequest(b+".ajaxtemplate.foldingtable_t62_ng.html","",AJAXConnector.REQUEST_GET,a);
}}function ms_foldingtable_printEntry(elementId,data){if(ms_foldingtable_elementsLoaded[elementId]="true",
void 0!=getLayer(elementId)){var div=getLayer(elementId);try{for(var pattern=/<script[^>]*>([\w\W]*?)<\/script>/gi,arrFlash=new Array;result=pattern.exec(data);)-1==result[1].indexOf("insertFlash")?eval(result[1]):arrFlash[arrFlash.length]=result[1];
data=data.replace(pattern,"")}catch(e){}div.innerHTML=data;for(var i=0;i<arrFlash.length;i++)eval(arrFlash[i]);
embGetFootnoteManager().showFootnotesIn("ms-footnote-dyn",div),"object"==typeof window.msSltLinkRewriter&&window.msSltLinkRewriter.replaceSltLinksStartingFrom(div),
$(".tablewithmediaelements",$(div)).each(function(){$(this).initMsT62_NG()})}}function ms_foldingtable_doToggle(a){
getLayer(a+"TR")&&("none"==getLayer(a).style.display?ms_foldingtable_show(a):"block"==getLayer(a).style.display&&ms_foldingtable_hide(a));
}function ms_foldingtable_show(a){if(getLayer(a+"TR")&&"none"==getLayer(a).style.display){
var b=getLayer(a+"TR");ms_foldingtable_tdimage[a]=b.lastChild.innerHTML,b.removeChild(b.lastChild),
b.firstChild.setAttribute("colSpan","2"),ms_foldingtable_tdclass[a]=b.className,b.className="ms-tb3-row-active";
}if(getLayer(a)){var c=getLayer(a).style;"none"==c.display&&(c.display="block")}}
function ms_foldingtable_hide(a){if(getLayer(a+"TR")&&"block"==getLayer(a).style.display){
var b=getLayer(a+"TR");b.firstChild.removeAttribute("colSpan"),b.className=ms_foldingtable_tdclass[a];
var c=document.createElement("td");c.innerHTML=ms_foldingtable_tdimage[a],b.appendChild(c);
}if(getLayer(a)){var d=getLayer(a).style;"block"==d.display&&(d.display="none")}}
function imageChange(a,b,c,d){null==b&&(b=0),ActiveID[a]||(ActiveID[a]=0),c?ActiveID[a]=b:ActiveID[a]+=b,
ms_foldingtable_maxSize[a]||(ms_foldingtable_maxSize[a]=1);for(var e=0;e<ms_foldingtable_maxSize[a];e++){
var f="medienelementImage"+e+a;getLayer(f)&&(getLayer(f).style.display="none");var g="bigImageIcon"+e+a;
getLayer(g)&&(getLayer(g).style.display="none")}ActiveID[a]==ms_foldingtable_maxSize[a]?ActiveID[a]=0:-1==ActiveID[a]&&(ActiveID[a]=ms_foldingtable_maxSize[a]-1);
var f="medienelementImage"+ActiveID[a]+a;if(ms_foldingtable_maxSize[a]>0){var h=getLayer(f);
if(h){h.style.display="block";var g="bigImageIcon"+ActiveID[a]+a;getLayer(g)&&(getLayer(g).style.display="inline");
var i=getElement("UL",h,"ms-agc");if(setActiveIcon(i,ActiveID[a]),!d){var j="medienelementBigImage"+ActiveID[a]+a;
setActiveIcon(getLayer(j),ActiveID[a])}}}}function setActiveIcon(a,b){if(null!=a){
var a="DIV"==a.nodeName?a.getElementsByTagName("ul")[0]:a,c=getClassName(a);if("ms-agc"==c)for(var d=a.getElementsByTagName("li"),e=0,f=0;e<d.length;e++){
var g=getClassName(d[e]);(""==g||"ms-active"==g)&&(f!=b?removeClass(d[e]):setClass(d[e],"ms-active"),
f++)}}}function toggleOverlay(a){var b=document.getElementById("ms-overlay");b&&null!=b||(b=document.createElement("div"),
b.id="ms-overlay",b.style.display="none",document.body.insertBefore(b,document.body.firstChild)),
1==a?(b.style.height="100%",/\bMSIE 6/.test(navigator.userAgent)&&!window.opera&&(b.style.height=embUtils().fullHeight(window.document)-1+"px"),
b.style.display="block"):b.style.display="none"}function bigImage(a,b,c,d){if(d){
var e=document.getElementById(d);0>b&&e.mouseleave()}void 0==ActiveID[a]&&(ActiveID[a]=1),
null==b&&(b=0),c?ActiveBigID[a]=b:ActiveBigID[a]+=b;for(var f=0;f<ms_foldingtable_maxSize[a];f++){
var g="medienelementBigImage"+f+a;if(getLayer(g)){getLayer(g).style.display="none";
var h="medienelementBigImageLayer"+f+a,i=getLayer(h).innerHTML;getLayer(h).innerHTML=i;
}}if(-2==ActiveBigID[a])return 1==$("body > div").hasClass("ms-rb-pageContainer")&&$("body > .ms-modallayer, body > div.ms-overlay-ie7-helper").remove(),
toggleOverlay(!1),void $("body").removeClass("keep-tooltip-open");toggleOverlay(!0),
ActiveBigID[a]==ms_foldingtable_maxSize[a]&&(ActiveBigID[a]=0),-1==ActiveBigID[a]&&(ActiveBigID[a]=ms_foldingtable_maxSize[a]-1),
imageChange(a,b,c,!0);var g="medienelementBigImage"+ActiveBigID[a]+a,j=getLayer(g);
if(null==j)return void toggleOverlay(!1);$("body").addClass("keep-tooltip-open");var k=4,l=4,m=j.getElementsByTagName("div");
m&&m.length>0&&(j.style.display="block",l+=m[0].offsetHeight,j.style.display="none"),
m&&m.length>4&&(j.style.display="block",l+=m[5].offsetHeight,j.style.display="none");
var n=j.getElementsByTagName("object")[0];n&&(l+=parseInt(n.height),k+=parseInt(n.width),
bigImageUpdate(j,a,l,k));var o=j.getElementsByTagName("img")[0];if(o)if(o.naturalHeight)j.style.display="block",
l+=parseInt(o.naturalHeight),k+=parseInt(o.naturalWidth),j.style.display="none",bigImageUpdate(j,a,l,k);else{
var p=new Image;p.onload=function(){l+=parseInt(this.height),k+=parseInt(this.width),
bigImageUpdate(j,a,l,k)},p.src=o.src}}function bigImageUpdate(a,b,c,d){var e="medienelementBigImageModalLayerP-"+ActiveBigID[b]+b,f="medienelementBigImageModalLayerUL-"+ActiveBigID[b]+b,g=a.getElementsByTagName("object")[0];
g||(g=a.getElementsByTagName("img")[0]);var h=document.getElementById(e),i=document.getElementById(f),j=30,k=3,l=50,m=10;
if(g&&h&&i){a.style.display="block";var n=g.offsetWidth,o=h.offsetWidth+j+k,p=i.offsetWidth+l+m;
if(o+p>n){var q=300,r=parseInt(n-p-j-k-10);q>r&&(r=q),h.style.width=r+"px"}a.style.display="none";
}var s=window.innerHeight?window.innerHeight:document.documentElement.clientHeight;
c>s&&(s=c);var t=Math.ceil((s-c)/2);/\bMSIE 6/.test(navigator.userAgent)&&!window.opera&&(t+=window.pageYOffset?window.pageYOffset:document.documentElement.scrollTop),
a.style.width=d+"px",a.style.left="50%",a.style.marginLeft=-$(a).width()/2+"px",a.style.top=t+"px";
try{var u=a.getElementsByTagName("IFRAME")[0];u.style.height=c-4+"px",u.style.width=d+"px";
}catch(v){}var w=document.getElementById("ms-overlay-content");w&&null!=w&&a.parentNode!=w&&w.appendChild(a),
setActiveIcon(a,ActiveBigID[b]),a.style.display="block"}function getElement(a,b,c){
for(var d=b.nextSibling;null!=d&&d.nodeName!=a;)d=d.nextSibling;var e=getClassName(d);
return e==c||e.indexOf(" "+c)||e.indexOf(c+" ")?d:null}function foldingTableInit(){
var a=window.location.hash;if(a=a.replace("#",""),""!=a&&a.indexOf("fold")>-1){var b=jQuery("div[name*='"+a+"']"),c=b[0].id.split("@"),d=c[0],e=c[1];
ms_foldingtable_loadEntryData(d,e),ms_foldingtable_show(d);var f=b.closest("div.ms-tb3-row-content").attr("id");
f&&ms_foldingtable_show(f),jQuery(window).scrollTop(b.offset().top),LOG("Scrolling done for anchor "+a);
}jQuery(".tablewithmediaelements").size()&&jQuery(".tablewithmediaelements").each(function(){
jQuery(this).initMsT62_NG()})}function PageQuery(a){if(a.length>1?this.q=a.substring(1,a.length):this.q=null,
this.keyValuePairs=new Array,this.q)for(var b=this.q.split("&"),c=0;c<b.length;c++)this.keyValuePairs[c]=b[c];
this.getKeyValuePairs=function(){return this.keyValuePairs},this.getValue=function(a){
for(var b=0;b<this.keyValuePairs.length;b++)if(this.keyValuePairs[b].split("=")[0]==a)return this.keyValuePairs[b].split("=")[1];
return!1},this.getParameters=function(){for(var a=new Array(this.getLength()),b=0;b<this.keyValuePairs.length;b++)a[b]=this.keyValuePairs[b].split("=")[0];
return a},this.getLength=function(){return this.keyValuePairs.length}}function queryString(a){
var b=new PageQuery(window.location.search);return unescape(b.getValue(a))}function getCurrentLanguage(){
return embCurrentLanguage}function getDesiredLanguage(){var a=queryString("locale"),b=a.substring(0,2);
return b}function redirectToURL(a){window.location.replace(a)}function embCheckLanguage(){
var a=getDesiredLanguage();if(getCurrentLanguage()!=a){var b=embLangUrlArray[a];null!=b&&redirectToURL(b);
}}function ms_corenav_handleRequest(a,b,c,d,e){a==AJAXConnector.SUCCID_LOAD&&d==AJAXConnector.RESPONSE_TEXT&&ms_corenav_printFlyout(c,b);
}function ms_corenav_loadFlyoutData(a,b){b&&""!=b&&void 0==ms_corenav_elementsLoaded[a]&&(ajaxConnector.registerDataHandler(ms_corenav_handleRequest),
ajaxConnector.setMaxRequestTime(1e4),ajaxConnector.sendRequest(b+".ajax.component.corenavigation2.corenavigation2_Single.corenavigation2.html","",AJAXConnector.REQUEST_GET,a));
}function ms_corenav_printFlyout(a,b){if(void 0!=getLayer(a)){b=b.replace(/{elementId}/g,a),
getLayer(a).innerHTML=b;var c=getLayer(a).getElementsByTagName("ul")[0].childNodes.length;
ms_corenav_elementsLoaded[a]=c;var d=getLayer(a).getElementsByTagName("li");d[0].firstChild&&(ms_corenav_changeFlyout(d[0].firstChild,a,0),
ms_corenav_resetFlyout(d[0].firstChild,a,0))}}function ms_corenav_resetFlyout(a,b,c){
var d=ms_corenav_elementsSelected[b];document.all&&(d.className="ms-hover")}function ms_corenav_changeFlyout(a,b,c){
var d=ms_corenav_elementsSelected[b];if(!(0>c)&&d!=a){void 0!=d&&(d.className?d.className="":d.removeAttribute("class")),
a.className?a.className="ms-hover":a.setAttribute("class","ms-hover"),ms_corenav_elementsSelected[b]=a;
for(var e=0;e<=ms_corenav_elementsLoaded[b]+10;e++)layerR=getLayer(b+"-r"+e),layerB=getLayer(b+"-b"+e),
layerR&&(layerR.style.display="none"),layerB&&(layerB.style.display="none");getLayer(b+"-r"+c).style.display="block",
getLayer(b+"-b"+c).style.display="block"}}function ms_setIFrameHeight(a){if(window.attachEvent&&!window.opera&&!window.XMLHttpRequest&&""!=a){
var b=document.getElementById(a),c=b.getElementsByTagName("IFRAME")[0];if(c){var d=b.getElementsByTagName("UL")[0];
if(d){var e=b.getElementsByTagName("UL");if(e){for(var f=0,g=0;g<e.length;g++)f+=e.item(g).offsetHeight;
if(b.style.display="",!ms_setIFrameHeight_stopper)return ms_setIFrameHeight_stopper=!0,
void setTimeout("ms_setIFrameHeight('"+a+"')",25);ms_setIFrameHeight_stopper&&(ms_setIFrameHeight_stopper=!1),
"ms-navi-main-fly-v2-1"==c.parentNode.className?c.style.height=f+18+"px":"ms-navi-main-fly-v1-1"==c.parentNode.className?c.style.height="390px":c.parentNode.parentNode.className&&-1!=c.parentNode.parentNode.className.indexOf("ms-navi-main-fly-v3")?c.style.height="395px":c.style.height=f+"px";
}}}}}function getCorrectMetaNav(a){ms_updateMetaNav=!0;var b=document.getElementById("cs-salutation");
if(b){var c=document.getElementById("cs-salutation").innerHTML,d=buildGreetingString(a);
b.innerHTML=c+d}updateMetaNavigation()}function updateMetaNavigation(){if(ms_updateMetaNav){
var a=embGetProfileManager(),b=a.isLoggedIn();a.isSoftLoggedIn();if(b){var c;c=document.getElementById("loggedoutul"),
c&&(c.style.display="none"),c=document.getElementById("loggedinul"),c&&(c.style.display="block");
}else{var c;c=document.getElementById("loggedinul"),c&&(c.style.display="none"),c=document.getElementById("loggedoutul"),
c&&(c.style.display="block")}}}function getCorrectNav3(a,b){ms_updateNavigation3=!0,
ms_correctNav3ShowDF=a,ms_correctNav3ShowDMBP=b,updateNavigation3()}function updateNavigation3(){
if(ms_updateNavigation3){var a=embGetProfileManager(),b=(a.isLoggedIn(),!a.isUnregistered()),c=a.getFavoriteBmCode()&&a.getFavoriteBmCode().length>0,d=a.getDealerName1()&&a.getDealerName1().length>0;
if(b){var e=a.getDealerName1()+"<br>";e=e+a.getDealerName2()+"<br>",e=e+a.getDealerStreet()+"<br>",
e=e+a.getDealerZIP()+" ",e+=a.getDealerCity();var f=a.getFavoriteImgSmallUrl(),g=a.getFavoriteName();
if(document.getElementById("showifnotloggedin").style.display="none",document.getElementById("showifnotloggedin").parentNode.style.display="none",
ms_correctNav3ShowDF&&c){var h=document.getElementById("crm-favorite-static");h&&h.parentNode.removeChild(h),
document.getElementById("loggedinpic").firstChild?(document.getElementById("loggedinpic").firstChild.removeAttribute("src"),
document.getElementById("loggedinpic").firstChild.setAttribute("src",f)):document.getElementById("loggedinpic").innerHTML="<img src='"+f+"' />",
document.getElementById("loggedinfav").innerHTML=g}else{var h=document.getElementById("crm-favorite-dynamic");
h&&h.parentNode.removeChild(h)}if(ms_correctNav3ShowDMBP&&d){var h=document.getElementById("crm-mbpartner-static");
h&&h.parentNode.removeChild(h),document.getElementById("loggedindealer").innerHTML=e;
}else{var h=document.getElementById("crm-mbpartner-dynamic");h&&h.parentNode.removeChild(h);
}document.getElementById("showifloggedin").style.display="block"}else document.getElementById("showifloggedin").style.display="none",
document.getElementById("showifloggedin").parentNode.style.display="none",document.getElementById("showifnotloggedin").style.display="block";
}}function getCorrectNav3CRM2(){ms_updateNavigation3CRM2=!0,updateNavigation3CRM2();
}function updateNavigation3CRM2(){if(ms_updateNavigation3CRM2){var a=embGetProfileManager(),b=a.isLoggedIn(),c=a.isUnregistered(),d=a.isSoftLoggedIn(),e=a.getFavoriteBmCode()&&a.getFavoriteBmCode().length>0,f=(a.getVehicles()&&a.getVehicles().length>0,
a.getDealerName1()&&a.getDealerName1().length>0,a.getConfiguredVehiclesCount()),g=a.getOwnedVehiclesCount(),h=a.getOwnedMainVehicleName(),i=a.getOwnedMainVehicleName()&&a.getOwnedMainVehicleName().length>0&&a.getOwnedMainVehicleByCustomer().length>0&&"true"==a.getOwnedMainVehicleByCustomer(),j=a.getOwnedMainVehicleBmCode(),k="";
a.getOwnedMainVehicleBmCode()&&j.length>0&&(k=document.location.pathname.replace(".redirect",""),
k=k.replace(".flash",""),k=k.replace(".https",""),k=k.replace(".html",".redirect.html")+"?symbolictarget=12");
var l=a.getFavoriteImgSmallUrl(),m=a.getOwnedMainVehicleImgSmallUrl(),n=a.getSingleConfiguredVehicleName(),o=a.getSingleConfiguredVehicleImgSmallUrl(),p=a.getSingleOwnedVehicleName(),q=a.getSingleOwnedVehicleImgSmallUrl(),r="",s=a.getSingleOwnedVehicleBmCode(),t=a.getOwnedMainVehicleByCustomer().length>0&&"true"==a.getOwnedMainVehicleByCustomer()||!q&&!p;
if(a.getSingleOwnedVehicleBmCode()&&s.length>0&&(r=document.location.pathname.replace(".redirect",""),
r=r.replace(".flash",""),r=r.replace(".https",""),r=r.replace(".html",".redirect.html")+"?symbolictarget=12"),
c)document.getElementById("showifloggedin_crm2").style.display="none",document.getElementById("showifloggedin_crm2").parentNode.style.display="none",
document.getElementById("showifunregistered").style.display="block";else{document.getElementById("showifunregistered").style.display="none",
document.getElementById("showifunregistered").parentNode.style.display="none";var u=a.getDealerName1()+"<br>";
u=u+a.getDealerName2()+"<br>",u=u+a.getDealerStreet()+"<br>",u=u+a.getDealerZIP()+" ",
u+=a.getDealerCity();var v=(a.getFavoriteImgSmallUrl(),a.getFavoriteName());0==g||void 0==g?(document.getElementById("no_veh_hl").style.display="block",
document.getElementById("no_veh_link").style.display="block"):1==g&&d?(document.getElementById("one_veh_soft_hl").style.display="block",
document.getElementById("one_veh_soft_link").style.display="block"):1==g&&b&&!t?(document.getElementById("one_veh_soft_hl").style.display="block",
document.getElementById("loggedinpic_one_veh_soft").innerHTML="<img src='"+q+"' />",
document.getElementById("loggedinpic_one_veh_soft").style.display="block",r.length>0&&(document.getElementById("one_veh_soft_link").innerHTML="<li><a href='"+r+"'>"+p+"</a></li>",
document.getElementById("one_veh_soft_link").style.display="block")):g>1&&d?(document.getElementById("sev_veh_hl").style.display="block",
document.getElementById("sev_veh_link").style.display="block"):1==g&&b&&t?(document.getElementById("sev_veh_hl").style.display="block",
document.getElementById("sev_veh_link").style.display="block"):g>1&&b&&i?(document.getElementById("main_veh_hl").style.display="block",
document.getElementById("loggedinpic_main_veh").innerHTML="<img src='"+m+"' />",k.length>0&&(document.getElementById("main_veh_link").innerHTML="<li><a href='"+k+"'>"+h+"</a></li>",
document.getElementById("main_veh_link").style.display="block"),document.getElementById("loggedinpic_main_veh").style.display="block"):g>1&&b&&!i&&(document.getElementById("no_main_veh_hl").style.display="block",
document.getElementById("no_main_veh_link").style.display="block"),0==f||void 0==f?(document.getElementById("no_conf_hl").style.display="block",
document.getElementById("no_conf_link").style.display="block"):f>0&&e?(document.getElementById("conf_w_fav_hl").style.display="block",
document.getElementById("loggedinpic_conf_w_fav").innerHTML="<img src='"+l+"' />",
document.getElementById("loggedinpic_conf_w_fav").style.display="block",document.getElementById("loggedinfav_conf_w_fav").innerHTML=v,
document.getElementById("loggedinfav_conf_w_fav").style.display="block",document.getElementById("conf_w_fav_link").style.display="block"):1!=f||e?f>1&&!e&&(document.getElementById("se_conf_wout_fav_hl").style.display="block",
document.getElementById("se_conf_wout_fav_link").style.display="block"):(document.getElementById("one_conf_wout_fav_hl").style.display="block",
document.getElementById("loggedinpic_one_conf_wout_fav").innerHTML="<img src='"+o+"' />",
document.getElementById("loggedinpic_one_conf_wout_fav").style.display="block",document.getElementById("loggedinfav_one_conf_wout_fav").innerHTML=n,
document.getElementById("loggedinfav_one_conf_wout_fav").style.display="block",document.getElementById("one_conf_wout_fav_link").style.display="block"),
document.getElementById("showifloggedin_crm2").style.display="block"}}}function buildGreetingString(a){
var b=embGetProfileManager(),c=a.toString();if(c=c.replace(/%a/,b.getSalutation()),
-1!=c.indexOf("%t")){var d=b.getTitle();c=d&&d.length>0?c.replace(/%t/,d):c.replace(/%t/,"");
}if(c=c.replace(/%f/,b.getFirstName()),-1!=c.indexOf("%m")){var e=b.getSecondFirstName();
c=e&&e.length>0?c.replace(/%m/,e):c.replace(/%m/,"")}if(c=c.replace(/%l/,b.getLastName()),
-1!=c.indexOf("%s")){var f=b.getSecondLastName();c=f&&f.length>0?c.replace(/%s/,f):c.replace(/%s/,"");
}return c}function setHighlightNavi(a,b){if(-1!=location.href.indexOf(b)){var c=window.location.href.substr(window.location.href.indexOf("/content/"),window.location.href.length),d=c.split("/"),e=9;
if(b==d[e]){var f=document.getElementById(a);f.className="ms-active"}}}function EmbRedirectManager(){
var a,b,c,d,e,f,g=0,h="redirect",i="login",j="logout",k="updateprofileref",l="bmcode",m="targeturl",n="returnurl",o="symbolictarget",p="st",q="currenturl",r="state",s="fromsecurepage",t="layername",u="addparams",v="locale",w="_pr",x=function(a,c,d,e,f,g,i,j){
var k=b+"."+h+".html?";if(k+=o+"="+a,k+="&"+s+"="+d,e?k+="&"+l+"="+e:(a==EmbRedirectManager.CONFIGURATOR||a==EmbRedirectManager.PRODUCT_ENTRY)&&window.console&&window.console.log&&window.console.log("*** missing bmCode in redirect ***"),
f&&(k+="&"+t+"="+f),g&&(k+="&"+m+"="+encodeURIComponent(g)),i&&(k+="&"+r+"="+i),j&&"/"==j.charAt(0)&&"/"!=j.charAt(1)&&(k+="&"+n+"="+encodeURIComponent(j)),
c||a==EmbRedirectManager.CURRENT){var p="";if(c)for(var q in c)p+=q+"="+encodeURIComponent(c[q])+"&";
var v="";if(a==EmbRedirectManager.CURRENT){var w=window.location.search;w.length>1&&(w=w.substring(1),
p+=w,v=window.location.hash)}k+="&"+u+"="+encodeURIComponent(p),v.length>1&&!v.startsWith("#layer")&&(k+=v);
}return k},y=function(a,b,c,e,g,h,i){if(f&&""!=f&&a==EmbRedirectManager.PRODUCT_ENTRY)location.href=f+".html";else{
var j=x(a,b,d,c,e,g,h,i);location.href=j}},z=function(b,d,e){var f=(e?"":c)+a+"."+b+".html?";
for(var g in d)f+=g+"="+encodeURIComponent(d[g])+"&";location.href=f};this.redirectToLogin=function(a,b,c){
this.redirectToLoginOptions(a,{state:b,layerName:c})},this.redirectToLoginOptions=function(a,b){
b=b||{},y(g,b.params,b.bmCode,b.layerName,a,b.state,b.returnUrl)},this.getPathForCmsPage=function(a,b){
return b=b||{},x(a,b.params,d,b.bmCode,b.layerName,b.targetPath)},this.redirectToCMSPage=function(a,b,c,d,e){
y(a,d,b,c,e)},this.updateProfileRef=function(a,c,f,g,h,i){a&&"null"!=a&&set_cookie(w,a,void 0,"/",void 0,d);
var j=new Object;j[m]=x(c,h,!1,f,g,i),j[q]=b,j[v]=e,z(k,j,!0)},this.updateProfileRefQuick=function(a){
if(window.console&&window.console.log)try{window.console.log("Please dont use updateProfileRefQuick");
}catch(b){}a&&"null"!=a&&set_cookie(w,a,void 0,"/",void 0,d),embGetProfileManager()&&embGetProfileManager().updateProfile(function(){
updateMetaNavigation(),updateNavigation3()})},this.login=function(a,c,d,f,g){var h=new Object;
if(h[p]=a,h[v]=e,h[q]=b+".html",!c)if(location.search&&-1!=location.search.indexOf("targeturl=")){
var j=location.search,k=j.indexOf("targeturl="),l=j.indexOf("&",k+1);-1==l&&(l=j.length),
c=decodeURIComponent(j.substring(k+"targeturl=".length,l))}else c=EmbRedirectManager.REGISTRATION_SUCCESS;
c&&(c.indexOf&&-1!=c.indexOf("/")?h[m]=c:h[m]=x(c,g,!1,d,f)),z(i,h)},this.logout=function(a,b){
var c=new Object;c[q]=document.logoutform.currenturl.value,c[m]=x(a,b,!1),z(j,c)},
this.init=function(f,g,h,i){c=f,a=g,b=h,e=i,d="https:"==location.protocol?!0:!1},
this.setRSIPesHandle=function(a){f=a};var A=null;this.showLogin=function(a){var b,c,d=embGetLayerManager();
if(""!=document.getElementById("loginlayer-notification-text").innerHTML)return b=document.getElementById("loginlayer-notification-text"),
void d.openNotification("ok",b.innerHTML);if(A||(b=document.getElementById("login-layer"))&&(c=document.forms.layerloginform.targeturl.value,
document.forms.layerloginform.targeturl.value="login-xyzzy-login",A=b.innerHTML,b.innerHTML=""),
A){var e,f=function(){if(location.search&&-1!=location.search.indexOf("returnurl=")){
var a=location.search,b=a.indexOf("returnurl="),c=a.indexOf("&",b+1);-1==c&&(c=a.length);
var d=decodeURIComponent(a.substring(b+"returnurl=".length,c));d&&"/"==d.charAt(0)&&"/"!=d.charAt(1)&&(location.href=d);
}return!1};e=a?A.replace(/login-xyzzy-login/,a):A.replace(/login-xyzzy-login/,c),
d.showLayer("flexlayer flex395",e,"Login",f)}}}!function(a,b){function c(a){return J.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1;
}function d(a){if(!sb[a]){var b=G.body,c=J("<"+a+">").appendTo(b),d=c.css("display");
c.remove(),("none"===d||""===d)&&(ob||(ob=G.createElement("iframe"),ob.frameBorder=ob.width=ob.height=0),
b.appendChild(ob),pb&&ob.createElement||(pb=(ob.contentWindow||ob.contentDocument).document,
pb.write((J.support.boxModel?"<!doctype html>":"")+"<html><body>"),pb.close()),c=pb.createElement(a),
pb.body.appendChild(c),d=J.css(c,"display"),b.removeChild(ob)),sb[a]=d}return sb[a];
}function e(a,b){var c={};return J.each(vb.concat.apply([],vb.slice(0,b)),function(){
c[this]=a}),c}function f(){rb=b}function g(){return setTimeout(f,0),rb=J.now()}function h(){
try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function i(){try{return new a.XMLHttpRequest;
}catch(b){}}function j(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d,e,f,g,h,i,j,k,l=a.dataTypes,m={},n=l.length,o=l[0];
for(d=1;n>d;d++){if(1===d)for(e in a.converters)"string"==typeof e&&(m[e.toLowerCase()]=a.converters[e]);
if(g=o,o=l[d],"*"===o)o=g;else if("*"!==g&&g!==o){if(h=g+" "+o,i=m[h]||m["* "+o],
!i){k=b;for(j in m)if(f=j.split(" "),(f[0]===g||"*"===f[0])&&(k=m[f[1]+" "+o])){j=m[j],
j===!0?i=k:k===!0&&(i=j);break}}!i&&!k&&J.error("No conversion from "+h.replace(" "," to ")),
i!==!0&&(c=i?i(c):k(j(c)))}}return c}function k(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;
for(f in k)f in d&&(c[k[f]]=d[f]);for(;"*"===j[0];)j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));
if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{
for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}return g?(g!==j[0]&&j.unshift(g),
d[g]):void 0}function l(a,b,c,d){if(J.isArray(b))J.each(b,function(b,e){c||Sa.test(a)?d(a,e):l(a+"["+("object"==typeof e?b:"")+"]",e,c,d);
});else if(c||"object"!==J.type(b))d(a,b);else for(var e in b)l(a+"["+e+"]",b[e],c,d);
}function m(a,c){var d,e,f=J.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);
e&&J.extend(!0,a,e)}function n(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;for(var h,i=a[f],j=0,k=i?i.length:0,l=a===fb;k>j&&(l||!h);j++)h=i[j](c,d,e),
"string"==typeof h&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=n(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=n(a,c,d,e,"*",g)),
h}function o(a){return function(b,c){if("string"!=typeof b&&(c=b,b="*"),J.isFunction(c))for(var d,e,f,g=b.toLowerCase().split(bb),h=0,i=g.length;i>h;h++)d=g[h],
f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)};
}function p(a,b,c){var d="width"===b?a.offsetWidth:a.offsetHeight,e="width"===b?1:0,f=4;
if(d>0){if("border"!==c)for(;f>e;e+=2)c||(d-=parseFloat(J.css(a,"padding"+Oa[e]))||0),
"margin"===c?d+=parseFloat(J.css(a,c+Oa[e]))||0:d-=parseFloat(J.css(a,"border"+Oa[e]+"Width"))||0;
return d+"px"}if(d=Da(a,b),(0>d||null==d)&&(d=a.style[b]),Ka.test(d))return d;if(d=parseFloat(d)||0,
c)for(;f>e;e+=2)d+=parseFloat(J.css(a,"padding"+Oa[e]))||0,"padding"!==c&&(d+=parseFloat(J.css(a,"border"+Oa[e]+"Width"))||0),
"margin"===c&&(d+=parseFloat(J.css(a,c+Oa[e]))||0);return d+"px"}function q(a){var b=G.createElement("div");
return Ca.appendChild(b),b.innerHTML=a.outerHTML,b.firstChild}function r(a){var b=(a.nodeName||"").toLowerCase();
"input"===b?s(a):"script"!==b&&"undefined"!=typeof a.getElementsByTagName&&J.grep(a.getElementsByTagName("input"),s);
}function s(a){("checkbox"===a.type||"radio"===a.type)&&(a.defaultChecked=a.checked);
}function t(a){return"undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName("*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll("*"):[];
}function u(a,b){var c;1===b.nodeType&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),
c=b.nodeName.toLowerCase(),"object"===c?b.outerHTML=a.outerHTML:"input"!==c||"checkbox"!==a.type&&"radio"!==a.type?"option"===c?b.selected=a.defaultSelected:"input"===c||"textarea"===c?b.defaultValue=a.defaultValue:"script"===c&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),
b.value!==a.value&&(b.value=a.value)),b.removeAttribute(J.expando),b.removeAttribute("_submit_attached"),
b.removeAttribute("_change_attached"))}function v(a,b){if(1===b.nodeType&&J.hasData(a)){
var c,d,e,f=J._data(a),g=J._data(b,f),h=f.events;if(h){delete g.handle,g.events={};
for(c in h)for(d=0,e=h[c].length;e>d;d++)J.event.add(b,c,h[c][d])}g.data&&(g.data=J.extend({},g.data));
}}function w(a,b){return J.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a;
}function x(a){var b=oa.split("|"),c=a.createDocumentFragment();if(c.createElement)for(;b.length;)c.createElement(b.pop());
return c}function y(a,b,c){if(b=b||0,J.isFunction(b))return J.grep(a,function(a,d){
var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return J.grep(a,function(a,d){
return a===b===c});if("string"==typeof b){var d=J.grep(a,function(a){return 1===a.nodeType;
});if(ka.test(b))return J.filter(b,d,!c);b=J.filter(b,d)}return J.grep(a,function(a,d){
return J.inArray(a,b)>=0===c})}function z(a){return!a||!a.parentNode||11===a.parentNode.nodeType;
}function A(){return!0}function B(){return!1}function C(a,b,c){var d=b+"defer",e=b+"queue",f=b+"mark",g=J._data(a,d);
g&&("queue"===c||!J._data(a,e))&&("mark"===c||!J._data(a,f))&&setTimeout(function(){
!J._data(a,e)&&!J._data(a,f)&&(J.removeData(a,d,!0),g.fire())},0)}function D(a){for(var b in a)if(("data"!==b||!J.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;
return!0}function E(a,c,d){if(d===b&&1===a.nodeType){var e="data-"+c.replace(N,"-$1").toLowerCase();
if(d=a.getAttribute(e),"string"==typeof d){try{d="true"===d?!0:"false"===d?!1:"null"===d?null:J.isNumeric(d)?+d:M.test(d)?J.parseJSON(d):d;
}catch(f){}J.data(a,c,d)}else d=b}return d}function F(a){var b,c,d=K[a]={};for(a=a.split(/\s+/),
b=0,c=a.length;c>b;b++)d[a[b]]=!0;return d}var G=a.document,H=a.navigator,I=a.location,J=function(){
function c(){if(!h.isReady){try{G.documentElement.doScroll("left")}catch(a){return void setTimeout(c,1);
}h.ready()}}var d,e,f,g,h=function(a,b){return new h.fn.init(a,b,d)},i=a.jQuery,j=a.$,k=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,l=/\S/,m=/^\s+/,n=/\s+$/,o=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,p=/^[\],:{}\s]*$/,q=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,r=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,s=/(?:^|:|,)(?:\s*\[)+/g,t=/(webkit)[ \/]([\w.]+)/,u=/(opera)(?:.*version)?[ \/]([\w.]+)/,v=/(msie) ([\w.]+)/,w=/(mozilla)(?:.*? rv:([\w.]+))?/,x=/-([a-z]|[0-9])/gi,y=/^-ms-/,z=function(a,b){
return(b+"").toUpperCase()},A=H.userAgent,B=Object.prototype.toString,C=Object.prototype.hasOwnProperty,D=Array.prototype.push,E=Array.prototype.slice,F=String.prototype.trim,I=Array.prototype.indexOf,J={};
return h.fn=h.prototype={constructor:h,init:function(a,c,d){var e,f,g,i;if(!a)return this;
if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if("body"===a&&!c&&G.body)return this.context=G,
this[0]=G.body,this.selector=a,this.length=1,this;if("string"==typeof a){if(e="<"!==a.charAt(0)||">"!==a.charAt(a.length-1)||a.length<3?k.exec(a):[null,a,null],
e&&(e[1]||!c)){if(e[1])return c=c instanceof h?c[0]:c,i=c?c.ownerDocument||c:G,g=o.exec(a),
g?h.isPlainObject(c)?(a=[G.createElement(g[1])],h.fn.attr.call(a,c,!0)):a=[i.createElement(g[1])]:(g=h.buildFragment([e[1]],[i]),
a=(g.cacheable?h.clone(g.fragment):g.fragment).childNodes),h.merge(this,a);if(f=G.getElementById(e[2]),
f&&f.parentNode){if(f.id!==e[2])return d.find(a);this.length=1,this[0]=f}return this.context=G,
this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a);
}return h.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),
h.makeArray(a,this))},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length;
},toArray:function(){return E.call(this,0)},get:function(a){return null==a?this.toArray():0>a?this[this.length+a]:this[a];
},pushStack:function(a,b,c){var d=this.constructor();return h.isArray(a)?D.apply(d,a):h.merge(d,a),
d.prevObject=this,d.context=this.context,"find"===b?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),
d},each:function(a,b){return h.each(this,a,b)},ready:function(a){return h.bindReady(),
f.add(a),this},eq:function(a){return a=+a,-1===a?this.slice(a):this.slice(a,a+1)},
first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){
return this.pushStack(E.apply(this,arguments),"slice",E.call(arguments).join(","));
},map:function(a){return this.pushStack(h.map(this,function(b,c){return a.call(b,c,b);
}))},end:function(){return this.prevObject||this.constructor(null)},push:D,sort:[].sort,
splice:[].splice},h.fn.init.prototype=h.fn,h.extend=h.fn.extend=function(){var a,c,d,e,f,g,i=arguments[0]||{},j=1,k=arguments.length,l=!1;
for("boolean"==typeof i&&(l=i,i=arguments[1]||{},j=2),"object"!=typeof i&&!h.isFunction(i)&&(i={}),
k===j&&(i=this,--j);k>j;j++)if(null!=(a=arguments[j]))for(c in a)d=i[c],e=a[c],i!==e&&(l&&e&&(h.isPlainObject(e)||(f=h.isArray(e)))?(f?(f=!1,
g=d&&h.isArray(d)?d:[]):g=d&&h.isPlainObject(d)?d:{},i[c]=h.extend(l,g,e)):e!==b&&(i[c]=e));
return i},h.extend({noConflict:function(b){return a.$===h&&(a.$=j),b&&a.jQuery===h&&(a.jQuery=i),
h},isReady:!1,readyWait:1,holdReady:function(a){a?h.readyWait++:h.ready(!0)},ready:function(a){
if(a===!0&&!--h.readyWait||a!==!0&&!h.isReady){if(!G.body)return setTimeout(h.ready,1);
if(h.isReady=!0,a!==!0&&--h.readyWait>0)return;f.fireWith(G,[h]),h.fn.trigger&&h(G).trigger("ready").off("ready");
}},bindReady:function(){if(!f){if(f=h.Callbacks("once memory"),"complete"===G.readyState)return setTimeout(h.ready,1);
if(G.addEventListener)G.addEventListener("DOMContentLoaded",g,!1),a.addEventListener("load",h.ready,!1);else if(G.attachEvent){
G.attachEvent("onreadystatechange",g),a.attachEvent("onload",h.ready);var b=!1;try{
b=null==a.frameElement}catch(d){}G.documentElement.doScroll&&b&&c()}}},isFunction:function(a){
return"function"===h.type(a)},isArray:Array.isArray||function(a){return"array"===h.type(a);
},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a);
},type:function(a){return null==a?String(a):J[B.call(a)]||"object"},isPlainObject:function(a){
if(!a||"object"!==h.type(a)||a.nodeType||h.isWindow(a))return!1;try{if(a.constructor&&!C.call(a,"constructor")&&!C.call(a.constructor.prototype,"isPrototypeOf"))return!1;
}catch(c){return!1}var d;for(d in a);return d===b||C.call(a,d)},isEmptyObject:function(a){
for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){
return"string"==typeof b&&b?(b=h.trim(b),a.JSON&&a.JSON.parse?a.JSON.parse(b):p.test(b.replace(q,"@").replace(r,"]").replace(s,""))?new Function("return "+b)():void h.error("Invalid JSON: "+b)):null;
},parseXML:function(c){if("string"!=typeof c||!c)return null;var d,e;try{a.DOMParser?(e=new DOMParser,
d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",
d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&h.error("Invalid XML: "+c),
d},noop:function(){},globalEval:function(b){b&&l.test(b)&&(a.execScript||function(b){
a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(y,"ms-").replace(x,z);
},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase();
},each:function(a,c,d){var e,f=0,g=a.length,i=g===b||h.isFunction(a);if(d)if(i){for(e in a)if(c.apply(a[e],d)===!1)break;
}else for(;g>f&&c.apply(a[f++],d)!==!1;);else if(i){for(e in a)if(c.call(a[e],e,a[e])===!1)break;
}else for(;g>f&&c.call(a[f],f,a[f++])!==!1;);return a},trim:F?function(a){return null==a?"":F.call(a);
}:function(a){return null==a?"":(a+"").replace(m,"").replace(n,"")},makeArray:function(a,b){
var c=b||[];if(null!=a){var d=h.type(a);null==a.length||"string"===d||"function"===d||"regexp"===d||h.isWindow(a)?D.call(c,a):h.merge(c,a);
}return c},inArray:function(a,b,c){var d;if(b){if(I)return I.call(b,a,c);for(d=b.length,
c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){
var d=a.length,e=0;if("number"==typeof c.length)for(var f=c.length;f>e;e++)a[d++]=c[e];else for(;c[e]!==b;)a[d++]=c[e++];
return a.length=d,a},grep:function(a,b,c){var d,e=[];c=!!c;for(var f=0,g=a.length;g>f;f++)d=!!b(a[f],f),
c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],i=0,j=a.length,k=a instanceof h||j!==b&&"number"==typeof j&&(j>0&&a[0]&&a[j-1]||0===j||h.isArray(a));
if(k)for(;j>i;i++)e=c(a[i],i,d),null!=e&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),
null!=e&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){
if("string"==typeof c){var d=a[c];c=a,a=d}if(!h.isFunction(a))return b;var e=E.call(arguments,2),f=function(){
return a.apply(c,e.concat(E.call(arguments)))};return f.guid=a.guid=a.guid||f.guid||h.guid++,
f},access:function(a,c,d,e,f,g,i){var j,k=null==d,l=0,m=a.length;if(d&&"object"==typeof d){
for(l in d)h.access(a,c,l,d[l],1,g,e);f=1}else if(e!==b){if(j=i===b&&h.isFunction(e),
k&&(j?(j=c,c=function(a,b,c){return j.call(h(a),c)}):(c.call(a,e),c=null)),c)for(;m>l;l++)c(a[l],d,j?e.call(a[l],l,c(a[l],d)):e,i);
f=1}return f?a:k?c.call(a):m?c(a[0],d):g},now:function(){return(new Date).getTime();
},uaMatch:function(a){a=a.toLowerCase();var b=t.exec(a)||u.exec(a)||v.exec(a)||a.indexOf("compatible")<0&&w.exec(a)||[];
return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c);
}h.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,
a.sub=this.sub,a.fn.init=function(c,d){return d&&d instanceof h&&!(d instanceof a)&&(d=a(d)),
h.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(G);return a},browser:{}
}),h.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){
J["[object "+b+"]"]=b.toLowerCase()}),e=h.uaMatch(A),e.browser&&(h.browser[e.browser]=!0,
h.browser.version=e.version),h.browser.webkit&&(h.browser.safari=!0),l.test(" ")&&(m=/^[\s\xA0]+/,
n=/[\s\xA0]+$/),d=h(G),G.addEventListener?g=function(){G.removeEventListener("DOMContentLoaded",g,!1),
h.ready()}:G.attachEvent&&(g=function(){"complete"===G.readyState&&(G.detachEvent("onreadystatechange",g),
h.ready())}),h}(),K={};J.Callbacks=function(a){a=a?K[a]||F(a):{};var c,d,e,f,g,h,i=[],j=[],k=function(b){
var c,d,e,f;for(c=0,d=b.length;d>c;c++)e=b[c],f=J.type(e),"array"===f?k(e):"function"===f&&(!a.unique||!m.has(e))&&i.push(e);
},l=function(b,k){for(k=k||[],c=!a.memory||[b,k],d=!0,e=!0,h=f||0,f=0,g=i.length;i&&g>h;h++)if(i[h].apply(b,k)===!1&&a.stopOnFalse){
c=!0;break}e=!1,i&&(a.once?c===!0?m.disable():i=[]:j&&j.length&&(c=j.shift(),m.fireWith(c[0],c[1])));
},m={add:function(){if(i){var a=i.length;k(arguments),e?g=i.length:c&&c!==!0&&(f=a,
l(c[0],c[1]))}return this},remove:function(){if(i)for(var b=arguments,c=0,d=b.length;d>c;c++)for(var f=0;f<i.length&&(b[c]!==i[f]||(e&&g>=f&&(g--,
h>=f&&h--),i.splice(f--,1),!a.unique));f++);return this},has:function(a){if(i)for(var b=0,c=i.length;c>b;b++)if(a===i[b])return!0;
return!1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this;
},disabled:function(){return!i},lock:function(){return j=b,(!c||c===!0)&&m.disable(),
this},locked:function(){return!j},fireWith:function(b,d){return j&&(e?a.once||j.push([b,d]):(!a.once||!c)&&l(b,d)),
this},fire:function(){return m.fireWith(this,arguments),this},fired:function(){return!!d;
}};return m};var L=[].slice;J.extend({Deferred:function(a){var b,c=J.Callbacks("once memory"),d=J.Callbacks("once memory"),e=J.Callbacks("memory"),f="pending",g={
resolve:c,reject:d,notify:e},h={done:c.add,fail:d.add,progress:e.add,state:function(){
return f},isResolved:c.fired,isRejected:d.fired,then:function(a,b,c){return i.done(a).fail(b).progress(c),
this},always:function(){return i.done.apply(i,arguments).fail.apply(i,arguments),
this},pipe:function(a,b,c){return J.Deferred(function(d){J.each({done:[a,"resolve"],
fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c,e=b[0],f=b[1];J.isFunction(e)?i[a](function(){
c=e.apply(this,arguments),c&&J.isFunction(c.promise)?c.promise().then(d.resolve,d.reject,d.notify):d[f+"With"](this===i?d:this,[c]);
}):i[a](d[f])})}).promise()},promise:function(a){if(null==a)a=h;else for(var b in h)a[b]=h[b];
return a}},i=h.promise({});for(b in g)i[b]=g[b].fire,i[b+"With"]=g[b].fireWith;return i.done(function(){
f="resolved"},d.disable,e.lock).fail(function(){f="rejected"},c.disable,e.lock),a&&a.call(i,i),
i},when:function(a){function b(a){return function(b){g[a]=arguments.length>1?L.call(arguments,0):b,
i.notifyWith(j,g)}}function c(a){return function(b){d[a]=arguments.length>1?L.call(arguments,0):b,
--h||i.resolveWith(i,d)}}var d=L.call(arguments,0),e=0,f=d.length,g=Array(f),h=f,i=1>=f&&a&&J.isFunction(a.promise)?a:J.Deferred(),j=i.promise();
if(f>1){for(;f>e;e++)d[e]&&d[e].promise&&J.isFunction(d[e].promise)?d[e].promise().then(c(e),i.reject,b(e)):--h;
h||i.resolveWith(i,d)}else i!==a&&i.resolveWith(i,f?[a]:[]);return j}}),J.support=function(){
var b,c,d,e,f,g,h,i,j,k,l,m=G.createElement("div");G.documentElement;if(m.setAttribute("className","t"),
m.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",
c=m.getElementsByTagName("*"),d=m.getElementsByTagName("a")[0],!c||!c.length||!d)return{};
e=G.createElement("select"),f=e.appendChild(G.createElement("option")),g=m.getElementsByTagName("input")[0],
b={leadingWhitespace:3===m.firstChild.nodeType,tbody:!m.getElementsByTagName("tbody").length,
htmlSerialize:!!m.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),
hrefNormalized:"/a"===d.getAttribute("href"),opacity:/^0.55/.test(d.style.opacity),
cssFloat:!!d.style.cssFloat,checkOn:"on"===g.value,optSelected:f.selected,getSetAttribute:"t"!==m.className,
enctype:!!G.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==G.createElement("nav").cloneNode(!0).outerHTML,
submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,
inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0
},J.boxModel=b.boxModel="CSS1Compat"===G.compatMode,g.checked=!0,b.noCloneChecked=g.cloneNode(!0).checked,
e.disabled=!0,b.optDisabled=!f.disabled;try{delete m.test}catch(n){b.deleteExpando=!1;
}if(!m.addEventListener&&m.attachEvent&&m.fireEvent&&(m.attachEvent("onclick",function(){
b.noCloneEvent=!1}),m.cloneNode(!0).fireEvent("onclick")),g=G.createElement("input"),
g.value="t",g.setAttribute("type","radio"),b.radioValue="t"===g.value,g.setAttribute("checked","checked"),
g.setAttribute("name","t"),m.appendChild(g),h=G.createDocumentFragment(),h.appendChild(m.lastChild),
b.checkClone=h.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=g.checked,
h.removeChild(g),h.appendChild(m),m.attachEvent)for(k in{submit:1,change:1,focusin:1
})j="on"+k,l=j in m,l||(m.setAttribute(j,"return;"),l="function"==typeof m[j]),b[k+"Bubbles"]=l;
return h.removeChild(m),h=e=f=m=g=null,J(function(){var c,d,e,f,g,h,j,k,n,o,p,q,r=G.getElementsByTagName("body")[0];
!r||(j=1,q="padding:0;margin:0;border:",o="position:absolute;top:0;left:0;width:1px;height:1px;",
p=q+"0;visibility:hidden;",k="style='"+o+q+"5px solid #000;",n="<div "+k+"display:block;'><div style='"+q+"0;display:block;overflow:hidden;'></div></div><table "+k+"' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>",
c=G.createElement("div"),c.style.cssText=p+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",
r.insertBefore(c,r.firstChild),m=G.createElement("div"),c.appendChild(m),m.innerHTML="<table><tr><td style='"+q+"0;display:none'></td><td>t</td></tr></table>",
i=m.getElementsByTagName("td"),l=0===i[0].offsetHeight,i[0].style.display="",i[1].style.display="none",
b.reliableHiddenOffsets=l&&0===i[0].offsetHeight,a.getComputedStyle&&(m.innerHTML="",
h=G.createElement("div"),h.style.width="0",h.style.marginRight="0",m.style.width="2px",
m.appendChild(h),b.reliableMarginRight=0===(parseInt((a.getComputedStyle(h,null)||{
marginRight:0}).marginRight,10)||0)),"undefined"!=typeof m.style.zoom&&(m.innerHTML="",
m.style.width=m.style.padding="1px",m.style.border=0,m.style.overflow="hidden",m.style.display="inline",
m.style.zoom=1,b.inlineBlockNeedsLayout=3===m.offsetWidth,m.style.display="block",
m.style.overflow="visible",m.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=3!==m.offsetWidth),
m.style.cssText=o+p,m.innerHTML=n,d=m.firstChild,e=d.firstChild,f=d.nextSibling.firstChild.firstChild,
g={doesNotAddBorder:5!==e.offsetTop,doesAddBorderForTableAndCells:5===f.offsetTop
},e.style.position="fixed",e.style.top="20px",g.fixedPosition=20===e.offsetTop||15===e.offsetTop,
e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",
g.subtractsBorderForOverflowNotVisible=-5===e.offsetTop,g.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,
a.getComputedStyle&&(m.style.marginTop="1%",b.pixelMargin="1%"!==(a.getComputedStyle(m,null)||{
marginTop:0}).marginTop),"undefined"!=typeof c.style.zoom&&(c.style.zoom=1),r.removeChild(c),
h=m=c=null,J.extend(b,g))}),b}();var M=/^(?:\{.*\}|\[.*\])$/,N=/([A-Z])/g;J.extend({
cache:{},uuid:0,expando:"jQuery"+(J.fn.jquery+Math.random()).replace(/\D/g,""),noData:{
embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){
return a=a.nodeType?J.cache[a[J.expando]]:a[J.expando],!!a&&!D(a)},data:function(a,c,d,e){
if(J.acceptData(a)){var f,g,h,i=J.expando,j="string"==typeof c,k=a.nodeType,l=k?J.cache:a,m=k?a[i]:a[i]&&i,n="events"===c;
if((!m||!l[m]||!n&&!e&&!l[m].data)&&j&&d===b)return;return m||(k?a[i]=m=++J.uuid:m=i),
l[m]||(l[m]={},k||(l[m].toJSON=J.noop)),("object"==typeof c||"function"==typeof c)&&(e?l[m]=J.extend(l[m],c):l[m].data=J.extend(l[m].data,c)),
f=g=l[m],e||(g.data||(g.data={}),g=g.data),d!==b&&(g[J.camelCase(c)]=d),n&&!g[c]?f.events:(j?(h=g[c],
null==h&&(h=g[J.camelCase(c)])):h=g,h)}},removeData:function(a,b,c){if(J.acceptData(a)){
var d,e,f,g=J.expando,h=a.nodeType,i=h?J.cache:a,j=h?a[g]:g;if(!i[j])return;if(b&&(d=c?i[j]:i[j].data)){
J.isArray(b)||(b in d?b=[b]:(b=J.camelCase(b),b=b in d?[b]:b.split(" ")));for(e=0,
f=b.length;f>e;e++)delete d[b[e]];if(!(c?D:J.isEmptyObject)(d))return}if(!c&&(delete i[j].data,
!D(i[j])))return;J.support.deleteExpando||!i.setInterval?delete i[j]:i[j]=null,h&&(J.support.deleteExpando?delete a[g]:a.removeAttribute?a.removeAttribute(g):a[g]=null);
}},_data:function(a,b,c){return J.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){
var b=J.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b;
}return!0}}),J.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){
if(this.length&&(k=J.data(i),1===i.nodeType&&!J._data(i,"parsedAttrs"))){for(f=i.attributes,
h=f.length;h>j;j++)g=f[j].name,0===g.indexOf("data-")&&(g=J.camelCase(g.substring(5)),
E(i,g,k[g]));J._data(i,"parsedAttrs",!0)}return k}return"object"==typeof a?this.each(function(){
J.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",J.access(this,function(c){
return c===b?(k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=J.data(i,a),
k=E(i,a,k)),k===b&&d[1]?this.data(d[0]):k):(d[1]=c,void this.each(function(){var b=J(this);
b.triggerHandler("setData"+e,d),J.data(this,a,c),b.triggerHandler("changeData"+e,d);
}))},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){
J.removeData(this,a)})}}),J.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",J._data(a,b,(J._data(a,b)||0)+1));
},_unmark:function(a,b,c){if(a!==!0&&(c=b,b=a,a=!1),b){c=c||"fx";var d=c+"mark",e=a?0:(J._data(b,d)||1)-1;
e?J._data(b,d,e):(J.removeData(b,d,!0),C(b,c,"mark"))}},queue:function(a,b,c){var d;
return a?(b=(b||"fx")+"queue",d=J._data(a,b),c&&(!d||J.isArray(c)?d=J._data(a,b,J.makeArray(c)):d.push(c)),
d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=J.queue(a,b),d=c.shift(),e={};
"inprogress"===d&&(d=c.shift()),d&&("fx"===b&&c.unshift("inprogress"),J._data(a,b+".run",e),
d.call(a,function(){J.dequeue(a,b)},e)),c.length||(J.removeData(a,b+"queue "+b+".run",!0),
C(a,b,"queue"))}}),J.fn.extend({queue:function(a,c){var d=2;return"string"!=typeof a&&(c=a,
a="fx",d--),arguments.length<d?J.queue(this[0],a):c===b?this:this.each(function(){
var b=J.queue(this,a,c);"fx"===a&&"inprogress"!==b[0]&&J.dequeue(this,a)})},dequeue:function(a){
return this.each(function(){J.dequeue(this,a)})},delay:function(a,b){return a=J.fx?J.fx.speeds[a]||a:a,
b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d);
}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){
function d(){--i||f.resolveWith(g,[g])}"string"!=typeof a&&(c=a,a=b),a=a||"fx";for(var e,f=J.Deferred(),g=this,h=g.length,i=1,j=a+"defer",k=a+"queue",l=a+"mark";h--;)(e=J.data(g[h],j,b,!0)||(J.data(g[h],k,b,!0)||J.data(g[h],l,b,!0))&&J.data(g[h],j,J.Callbacks("once memory"),!0))&&(i++,
e.add(d));return d(),f.promise(c)}});var O,P,Q,R=/[\n\t\r]/g,S=/\s+/,T=/\r/g,U=/^(?:button|input)$/i,V=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea)?$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,Y=J.support.getSetAttribute;
J.fn.extend({attr:function(a,b){return J.access(this,J.attr,a,b,arguments.length>1);
},removeAttr:function(a){return this.each(function(){J.removeAttr(this,a)})},prop:function(a,b){
return J.access(this,J.prop,a,b,arguments.length>1)},removeProp:function(a){return a=J.propFix[a]||a,
this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){
var b,c,d,e,f,g,h;if(J.isFunction(a))return this.each(function(b){J(this).addClass(a.call(this,b,this.className));
});if(a&&"string"==typeof a)for(b=a.split(S),c=0,d=this.length;d>c;c++)if(e=this[c],
1===e.nodeType)if(e.className||1!==b.length){for(f=" "+e.className+" ",g=0,h=b.length;h>g;g++)~f.indexOf(" "+b[g]+" ")||(f+=b[g]+" ");
e.className=J.trim(f)}else e.className=a;return this},removeClass:function(a){var c,d,e,f,g,h,i;
if(J.isFunction(a))return this.each(function(b){J(this).removeClass(a.call(this,b,this.className));
});if(a&&"string"==typeof a||a===b)for(c=(a||"").split(S),d=0,e=this.length;e>d;d++)if(f=this[d],
1===f.nodeType&&f.className)if(a){for(g=(" "+f.className+" ").replace(R," "),h=0,
i=c.length;i>h;h++)g=g.replace(" "+c[h]+" "," ");f.className=J.trim(g)}else f.className="";
return this},toggleClass:function(a,b){var c=typeof a,d="boolean"==typeof b;return J.isFunction(a)?this.each(function(c){
J(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if("string"===c)for(var e,f=0,g=J(this),h=b,i=a.split(S);e=i[f++];)h=d?h:!g.hasClass(e),
g[h?"addClass":"removeClass"](e);else("undefined"===c||"boolean"===c)&&(this.className&&J._data(this,"__className__",this.className),
this.className=this.className||a===!1?"":J._data(this,"__className__")||"")})},hasClass:function(a){
for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(R," ").indexOf(b)>-1)return!0;
return!1},val:function(a){var c,d,e,f=this[0];return arguments.length?(e=J.isFunction(a),
this.each(function(d){var f,g=J(this);1===this.nodeType&&(f=e?a.call(this,d,g.val()):a,
null==f?f="":"number"==typeof f?f+="":J.isArray(f)&&(f=J.map(f,function(a){return null==a?"":a+"";
})),c=J.valHooks[this.type]||J.valHooks[this.nodeName.toLowerCase()],c&&"set"in c&&c.set(this,f,"value")!==b||(this.value=f));
})):f?(c=J.valHooks[f.type]||J.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,
"string"==typeof d?d.replace(T,""):null==d?"":d)):void 0}}),J.extend({valHooks:{option:{
get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{
get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i="select-one"===a.type;
if(0>f)return null;for(c=i?f:0,d=i?f+1:h.length;d>c;c++)if(e=h[c],e.selected&&(J.support.optDisabled?!e.disabled:null===e.getAttribute("disabled"))&&(!e.parentNode.disabled||!J.nodeName(e.parentNode,"optgroup"))){
if(b=J(e).val(),i)return b;g.push(b)}return i&&!g.length&&h.length?J(h[f]).val():g;
},set:function(a,b){var c=J.makeArray(b);return J(a).find("option").each(function(){
this.selected=J.inArray(J(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},
attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){
var f,g,h,i=a.nodeType;return a&&3!==i&&8!==i&&2!==i?e&&c in J.attrFn?J(a)[c](d):"undefined"==typeof a.getAttribute?J.prop(a,c,d):(h=1!==i||!J.isXMLDoc(a),
h&&(c=c.toLowerCase(),g=J.attrHooks[c]||(X.test(c)?P:O)),d!==b?null===d?void J.removeAttr(a,c):g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,""+d),
d):g&&"get"in g&&h&&null!==(f=g.get(a,c))?f:(f=a.getAttribute(c),null===f?b:f)):void 0;
},removeAttr:function(a,b){var c,d,e,f,g,h=0;if(b&&1===a.nodeType)for(d=b.toLowerCase().split(S),
f=d.length;f>h;h++)e=d[h],e&&(c=J.propFix[e]||e,g=X.test(e),g||J.attr(a,e,""),a.removeAttribute(Y?e:c),
g&&c in a&&(a[c]=!1))},attrHooks:{type:{set:function(a,b){if(U.test(a.nodeName)&&a.parentNode)J.error("type property can't be changed");else if(!J.support.radioValue&&"radio"===b&&J.nodeName(a,"input")){
var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){
return O&&J.nodeName(a,"button")?O.get(a,b):b in a?a.value:null},set:function(a,b,c){
return O&&J.nodeName(a,"button")?O.set(a,b,c):void(a.value=b)}}},propFix:{tabindex:"tabIndex",
readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",
cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",
contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;return a&&3!==h&&8!==h&&2!==h?(g=1!==h||!J.isXMLDoc(a),
g&&(c=J.propFix[c]||c,f=J.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&null!==(e=f.get(a,c))?e:a[c]):void 0;
},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):V.test(a.nodeName)||W.test(a.nodeName)&&a.href?0:b;
}}}}),J.attrHooks.tabindex=J.propHooks.tabIndex,P={get:function(a,c){var d,e=J.prop(a,c);
return e===!0||"boolean"!=typeof e&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b;
},set:function(a,b,c){var d;return b===!1?J.removeAttr(a,c):(d=J.propFix[c]||c,d in a&&(a[d]=!0),
a.setAttribute(c,c.toLowerCase())),c}},Y||(Q={name:!0,id:!0,coords:!0},O=J.valHooks.button={
get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(Q[c]?""!==d.nodeValue:d.specified)?d.nodeValue:b;
},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=G.createAttribute(c),
a.setAttributeNode(d)),d.nodeValue=b+""}},J.attrHooks.tabindex.set=O.set,J.each(["width","height"],function(a,b){
J.attrHooks[b]=J.extend(J.attrHooks[b],{set:function(a,c){return""===c?(a.setAttribute(b,"auto"),
c):void 0}})}),J.attrHooks.contenteditable={get:O.get,set:function(a,b,c){""===b&&(b="false"),
O.set(a,b,c)}}),J.support.hrefNormalized||J.each(["href","src","width","height"],function(a,c){
J.attrHooks[c]=J.extend(J.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);
return null===d?b:d}})}),J.support.style||(J.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b;
},set:function(a,b){return a.style.cssText=""+b}}),J.support.optSelected||(J.propHooks.selected=J.extend(J.propHooks.selected,{
get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),
null}})),J.support.enctype||(J.propFix.enctype="encoding"),J.support.checkOn||J.each(["radio","checkbox"],function(){
J.valHooks[this]={get:function(a){return null===a.getAttribute("value")?"on":a.value;
}}}),J.each(["radio","checkbox"],function(){J.valHooks[this]=J.extend(J.valHooks[this],{
set:function(a,b){return J.isArray(b)?a.checked=J.inArray(J(a).val(),b)>=0:void 0;
}})});var Z=/^(?:textarea|input|select)$/i,$=/^([^\.]*)?(?:\.(.+))?$/,_=/(?:^|\s)hover(\.\S+)?\b/,aa=/^key/,ba=/^(?:mouse|contextmenu)|click/,ca=/^(?:focusinfocus|focusoutblur)$/,da=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,ea=function(a){
var b=da.exec(a);return b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)")),
b},fa=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value));
},ga=function(a){return J.event.special.hover?a:a.replace(_,"mouseenter$1 mouseleave$1");
};J.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q;if(3!==a.nodeType&&8!==a.nodeType&&c&&d&&(g=J._data(a))){
for(d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=J.guid++),i=g.events,
i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return"undefined"==typeof J||a&&J.event.triggered===a.type?b:J.event.dispatch.apply(h.elem,arguments);
},h.elem=a),c=J.trim(ga(c)).split(" "),j=0;j<c.length;j++)k=$.exec(c[j])||[],l=k[1],
m=(k[2]||"").split(".").sort(),q=J.event.special[l]||{},l=(f?q.delegateType:q.bindType)||l,
q=J.event.special[l]||{},n=J.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,
selector:f,quick:f&&ea(f),namespace:m.join(".")},o),p=i[l],p||(p=i[l]=[],p.delegateCount=0,
q.setup&&q.setup.call(a,e,m,h)!==!1||(a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h))),
q.add&&(q.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?p.splice(p.delegateCount++,0,n):p.push(n),
J.event.global[l]=!0;a=null}},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r=J.hasData(a)&&J._data(a);
if(r&&(m=r.events)){for(b=J.trim(ga(b||"")).split(" "),f=0;f<b.length;f++)if(g=$.exec(b[f])||[],
h=i=g[1],j=g[2],h){for(n=J.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,
p=m[h]||[],k=p.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null,
l=0;l<p.length;l++)q=p[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||"**"===d&&q.selector)&&(p.splice(l--,1),
q.selector&&p.delegateCount--,n.remove&&n.remove.call(a,q));0===p.length&&k!==p.length&&((!n.teardown||n.teardown.call(a,j)===!1)&&J.removeEvent(a,h,r.handle),
delete m[h])}else for(h in m)J.event.remove(a,h+b[f],c,d,!0);J.isEmptyObject(m)&&(o=r.handle,
o&&(o.elem=null),J.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,
setData:!0,changeData:!0},trigger:function(c,d,e,f){if(!e||3!==e.nodeType&&8!==e.nodeType){
var g,h,i,j,k,l,m,n,o,p,q=c.type||c,r=[];if(ca.test(q+J.event.triggered))return;if(q.indexOf("!")>=0&&(q=q.slice(0,-1),
h=!0),q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),(!e||J.event.customEvent[q])&&!J.event.global[q])return;
if(c="object"==typeof c?c[J.expando]?c:new J.Event(q,c):new J.Event(q),c.type=q,c.isTrigger=!0,
c.exclusive=h,c.namespace=r.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,
l=q.indexOf(":")<0?"on"+q:"",!e){g=J.cache;for(i in g)g[i].events&&g[i].events[q]&&J.event.trigger(c,d,g[i].handle.elem,!0);
return}if(c.result=b,c.target||(c.target=e),d=null!=d?J.makeArray(d):[],d.unshift(c),
m=J.event.special[q]||{},m.trigger&&m.trigger.apply(e,d)===!1)return;if(o=[[e,m.bindType||q]],
!f&&!m.noBubble&&!J.isWindow(e)){for(p=m.delegateType||q,j=ca.test(p+q)?e:e.parentNode,
k=null;j;j=j.parentNode)o.push([j,p]),k=j;k&&k===e.ownerDocument&&o.push([k.defaultView||k.parentWindow||a,p]);
}for(i=0;i<o.length&&!c.isPropagationStopped();i++)j=o[i][0],c.type=o[i][1],n=(J._data(j,"events")||{})[c.type]&&J._data(j,"handle"),
n&&n.apply(j,d),n=l&&j[l],n&&J.acceptData(j)&&n.apply(j,d)===!1&&c.preventDefault();
return c.type=q,!f&&!c.isDefaultPrevented()&&(!m._default||m._default.apply(e.ownerDocument,d)===!1)&&("click"!==q||!J.nodeName(e,"a"))&&J.acceptData(e)&&l&&e[q]&&("focus"!==q&&"blur"!==q||0!==c.target.offsetWidth)&&!J.isWindow(e)&&(k=e[l],
k&&(e[l]=null),J.event.triggered=q,e[q](),J.event.triggered=b,k&&(e[l]=k)),c.result;
}},dispatch:function(c){c=J.event.fix(c||a.event);var d,e,f,g,h,i,j,k,l,m,n=(J._data(this,"events")||{})[c.type]||[],o=n.delegateCount,p=[].slice.call(arguments,0),q=!c.exclusive&&!c.namespace,r=J.event.special[c.type]||{},s=[];
if(p[0]=c,c.delegateTarget=this,!r.preDispatch||r.preDispatch.call(this,c)!==!1){
if(o&&(!c.button||"click"!==c.type))for(g=J(this),g.context=this.ownerDocument||this,
f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0){for(i={},k=[],g[0]=f,
d=0;o>d;d++)l=n[d],m=l.selector,i[m]===b&&(i[m]=l.quick?fa(f,l.quick):g.is(m)),i[m]&&k.push(l);
k.length&&s.push({elem:f,matches:k})}for(n.length>o&&s.push({elem:this,matches:n.slice(o)
}),d=0;d<s.length&&!c.isPropagationStopped();d++)for(j=s[d],c.currentTarget=j.elem,
e=0;e<j.matches.length&&!c.isImmediatePropagationStopped();e++)l=j.matches[e],(q||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))&&(c.data=l.data,
c.handleObj=l,h=((J.event.special[l.origType]||{}).handle||l.handler).apply(j.elem,p),
h!==b&&(c.result=h,h===!1&&(c.preventDefault(),c.stopPropagation())));return r.postDispatch&&r.postDispatch.call(this,c),
c.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){
return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{
props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
filter:function(a,c){var d,e,f,g=c.button,h=c.fromElement;return null==a.pageX&&null!=c.clientX&&(d=a.target.ownerDocument||G,
e=d.documentElement,f=d.body,a.pageX=c.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),
a.pageY=c.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),
!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?c.toElement:h),!a.which&&g!==b&&(a.which=1&g?1:2&g?3:4&g?2:0),
a}},fix:function(a){if(a[J.expando])return a;var c,d,e=a,f=J.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;
for(a=J.Event(e),c=g.length;c;)d=g[--c],a[d]=e[d];return a.target||(a.target=e.srcElement||G),
3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey),
f.filter?f.filter(a,e):a},special:{ready:{setup:J.bindReady},load:{noBubble:!0},focus:{
delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){
J.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null);
}}},simulate:function(a,b,c,d){var e=J.extend(new J.Event,c,{type:a,isSimulated:!0,
originalEvent:{}});d?J.event.trigger(e,null,b):J.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault();
}},J.event.handle=J.event.dispatch,J.removeEvent=G.removeEventListener?function(a,b,c){
a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c);
},J.Event=function(a,b){return this instanceof J.Event?(a&&a.type?(this.originalEvent=a,
this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?A:B):this.type=a,
b&&J.extend(this,b),this.timeStamp=a&&a.timeStamp||J.now(),this[J.expando]=!0,void 0):new J.Event(a,b);
},J.Event.prototype={preventDefault:function(){this.isDefaultPrevented=A;var a=this.originalEvent;
!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){
this.isPropagationStopped=A;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),
a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=A,
this.stopPropagation()},isDefaultPrevented:B,isPropagationStopped:B,isImmediatePropagationStopped:B
},J.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){J.event.special[a]={
delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;
f.selector;return(!e||e!==d&&!J.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),
a.type=b),c}}}),J.support.submitBubbles||(J.event.special.submit={setup:function(){
return J.nodeName(this,"form")?!1:void J.event.add(this,"click._submit keypress._submit",function(a){
var c=a.target,d=J.nodeName(c,"input")||J.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(J.event.add(d,"submit._submit",function(a){
a._submit_bubble=!0}),d._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,
this.parentNode&&!a.isTrigger&&J.event.simulate("submit",this.parentNode,a,!0))},
teardown:function(){return J.nodeName(this,"form")?!1:void J.event.remove(this,"._submit");
}}),J.support.changeBubbles||(J.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(J.event.add(this,"propertychange._change",function(a){
"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),J.event.add(this,"click._change",function(a){
this._just_changed&&!a.isTrigger&&(this._just_changed=!1,J.event.simulate("change",this,a,!0));
})),!1):void J.event.add(this,"beforeactivate._change",function(a){var b=a.target;
Z.test(b.nodeName)&&!b._change_attached&&(J.event.add(b,"change._change",function(a){
this.parentNode&&!a.isSimulated&&!a.isTrigger&&J.event.simulate("change",this.parentNode,a,!0);
}),b._change_attached=!0)})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0;
},teardown:function(){return J.event.remove(this,"._change"),Z.test(this.nodeName);
}}),J.support.focusinBubbles||J.each({focus:"focusin",blur:"focusout"},function(a,b){
var c=0,d=function(a){J.event.simulate(b,a.target,J.event.fix(a),!0)};J.event.special[b]={
setup:function(){0===c++&&G.addEventListener(a,d,!0)},teardown:function(){0===--c&&G.removeEventListener(a,d,!0);
}}}),J.fn.extend({on:function(a,c,d,e,f){var g,h;if("object"==typeof a){"string"!=typeof c&&(d=d||c,
c=b);for(h in a)this.on(h,c,d,a[h],f);return this}if(null==d&&null==e?(e=c,d=c=b):null==e&&("string"==typeof c?(e=d,
d=b):(e=d,d=c,c=b)),e===!1)e=B;else if(!e)return this;return 1===f&&(g=e,e=function(a){
return J().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=J.guid++)),this.each(function(){
J.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){
if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;return J(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),
this}if("object"==typeof a){for(var f in a)this.off(f,c,a[f]);return this}return(c===!1||"function"==typeof c)&&(d=c,
c=b),d===!1&&(d=B),this.each(function(){J.event.remove(this,a,d,c)})},bind:function(a,b,c){
return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){
return J(this.context).on(a,this.selector,b,c),this},die:function(a,b){return J(this.context).off(a,this.selector||"**",b),
this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){
return 1==arguments.length?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){
return this.each(function(){J.event.trigger(a,b,this)})},triggerHandler:function(a,b){
return this[0]?J.event.trigger(a,b,this[0],!0):void 0},toggle:function(a){var b=arguments,c=a.guid||J.guid++,d=0,e=function(c){
var e=(J._data(this,"lastToggle"+a.guid)||0)%d;return J._data(this,"lastToggle"+a.guid,e+1),
c.preventDefault(),b[e].apply(this,arguments)||!1};for(e.guid=c;d<b.length;)b[d++].guid=c;
return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a);
}}),J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){
J.fn[b]=function(a,c){return null==c&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b);
},J.attrFn&&(J.attrFn[b]=!0),aa.test(b)&&(J.event.fixHooks[b]=J.event.keyHooks),ba.test(b)&&(J.event.fixHooks[b]=J.event.mouseHooks);
}),function(){function a(a,b,c,d,f,g){for(var h=0,i=d.length;i>h;h++){var j=d[h];if(j){
var k=!1;for(j=j[a];j;){if(j[e]===c){k=d[j.sizset];break}if(1===j.nodeType)if(g||(j[e]=c,
j.sizset=h),"string"!=typeof b){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){
k=j;break}j=j[a]}d[h]=k}}}function c(a,b,c,d,f,g){for(var h=0,i=d.length;i>h;h++){
var j=d[h];if(j){var k=!1;for(j=j[a];j;){if(j[e]===c){k=d[j.sizset];break}if(1===j.nodeType&&!g&&(j[e]=c,
j.sizset=h),j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}d[h]=k}}}var d=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,e="sizcache"+(Math.random()+"").replace(".",""),f=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;
[0,0].sort(function(){return i=!1,0});var m=function(a,b,c,e){c=c||[],b=b||G;var f=b;
if(1!==b.nodeType&&9!==b.nodeType)return[];if(!a||"string"!=typeof a)return c;var h,i,j,k,l,n,q,r,t=!0,u=m.isXML(b),v=[],x=a;
do if(d.exec(""),h=d.exec(x),h&&(x=h[3],v.push(h[1]),h[2])){k=h[3];break}while(h);
if(v.length>1&&p.exec(a))if(2===v.length&&o.relative[v[0]])i=w(v[0]+v[1],b,e);else for(i=o.relative[v[0]]?[b]:m(v.shift(),b);v.length;)a=v.shift(),
o.relative[a]&&(a+=v.shift()),i=w(a,i,e);else if(!e&&v.length>1&&9===b.nodeType&&!u&&o.match.ID.test(v[0])&&!o.match.ID.test(v[v.length-1])&&(l=m.find(v.shift(),b,u),
b=l.expr?m.filter(l.expr,l.set)[0]:l.set[0]),b)for(l=e?{expr:v.pop(),set:s(e)}:m.find(v.pop(),1!==v.length||"~"!==v[0]&&"+"!==v[0]||!b.parentNode?b:b.parentNode,u),
i=l.expr?m.filter(l.expr,l.set):l.set,v.length>0?j=s(i):t=!1;v.length;)n=v.pop(),
q=n,o.relative[n]?q=v.pop():n="",null==q&&(q=b),o.relative[n](j,q,u);else j=v=[];if(j||(j=i),
j||m.error(n||a),"[object Array]"===g.call(j))if(t)if(b&&1===b.nodeType)for(r=0;null!=j[r];r++)j[r]&&(j[r]===!0||1===j[r].nodeType&&m.contains(b,j[r]))&&c.push(i[r]);else for(r=0;null!=j[r];r++)j[r]&&1===j[r].nodeType&&c.push(i[r]);else c.push.apply(c,j);else s(j,c);
return k&&(m(k,f,c,e),m.uniqueSort(c)),c};m.uniqueSort=function(a){if(u&&(h=i,a.sort(u),
h))for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1);return a},m.matches=function(a,b){
return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0;
},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;f>e;e++)if(h=o.order[e],
(g=o.leftMatch[h].exec(a))&&(i=g[1],g.splice(1,1),"\\"!==i.substr(i.length-1)&&(g[1]=(g[1]||"").replace(j,""),
d=o.find[h](g,b,c),null!=d))){a=a.replace(o.match[h],"");break}return d||(d="undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName("*"):[]),
{set:d,expr:a}},m.filter=function(a,c,d,e){for(var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);a&&c.length;){
for(h in o.filter)if(null!=(f=o.leftMatch[h].exec(a))&&f[2]){if(k=o.filter[h],l=f[1],
g=!1,f.splice(1,1),"\\"===l.substr(l.length-1))continue;if(s===r&&(r=[]),o.preFilter[h])if(f=o.preFilter[h](f,s,d,r,e,t)){
if(f===!0)continue}else g=i=!0;if(f)for(n=0;null!=(j=s[n]);n++)j&&(i=k(j,f,n,s),p=e^i,
d&&null!=i?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){if(d||(s=r),a=a.replace(o.match[h],""),
!g)return[];break}}if(a===q){if(null!=g)break;m.error(a)}q=a}return s},m.error=function(a){
throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){
var b,c,d=a.nodeType,e="";if(d){if(1===d||9===d||11===d){if("string"==typeof a.textContent)return a.textContent;
if("string"==typeof a.innerText)return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a);
}else if(3===d||4===d)return a.nodeValue}else for(b=0;c=a[b];b++)8!==c.nodeType&&(e+=n(c));
return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){
return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{
"+":function(a,b){var c="string"==typeof b,d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());
for(var f,g=0,h=a.length;h>g;g++)if(f=a[g]){for(;(f=f.previousSibling)&&1!==f.nodeType;);
a[g]=e||f&&f.nodeName.toLowerCase()===b?f||!1:f===b}e&&m.filter(b,a,!0)},">":function(a,b){
var c,d="string"==typeof b,e=0,f=a.length;if(d&&!l.test(b)){for(b=b.toLowerCase();f>e;e++)if(c=a[e]){
var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}else{for(;f>e;e++)c=a[e],
c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(b,d,e){
var g,h=f++,i=a;"string"==typeof d&&!l.test(d)&&(d=d.toLowerCase(),g=d,i=c),i("parentNode",d,h,b,g,e);
},"~":function(b,d,e){var g,h=f++,i=a;"string"==typeof d&&!l.test(d)&&(d=d.toLowerCase(),
g=d,i=c),i("previousSibling",d,h,b,g,e)}},find:{ID:function(a,b,c){if("undefined"!=typeof b.getElementById&&!c){
var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if("undefined"!=typeof b.getElementsByName){
for(var c=[],d=b.getElementsByName(a[1]),e=0,f=d.length;f>e;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);
return 0===c.length?null:c}},TAG:function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a[1]):void 0;
}},preFilter:{CLASS:function(a,b,c,d,e,f){if(a=" "+a[1].replace(j,"")+" ",f)return a;
for(var g,h=0;null!=(g=b[h]);h++)g&&(e^(g.className&&(" "+g.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(g):c&&(b[h]=!1));
return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase();
},CHILD:function(a){if("nth"===a[1]){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");
var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even"===a[2]&&"2n"||"odd"===a[2]&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);
a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);return a[0]=f++,a},ATTR:function(a,b,c,d,e,f){
var g=a[1]=a[1].replace(j,"");return!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),
"~="===a[2]&&(a[4]=" "+a[4]+" "),a},PSEUDO:function(a,b,c,e,f){if("not"===a[1]){if(!((d.exec(a[3])||"").length>1||/^\w/.test(a[3]))){
var g=m.filter(a[3],b,c,!0^f);return c||e.push.apply(e,g),!1}a[3]=m(a[3],null,null,b);
}else if(o.match.POS.test(a[0])||o.match.CHILD.test(a[0]))return!0;return a},POS:function(a){
return a.unshift(!0),a}},filters:{enabled:function(a){return a.disabled===!1&&"hidden"!==a.type;
},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0;
},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0;
},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},
has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName);
},text:function(a){var b=a.getAttribute("type"),c=a.type;return"input"===a.nodeName.toLowerCase()&&"text"===c&&(b===c||null===b);
},radio:function(a){return"input"===a.nodeName.toLowerCase()&&"radio"===a.type},checkbox:function(a){
return"input"===a.nodeName.toLowerCase()&&"checkbox"===a.type},file:function(a){return"input"===a.nodeName.toLowerCase()&&"file"===a.type;
},password:function(a){return"input"===a.nodeName.toLowerCase()&&"password"===a.type;
},submit:function(a){var b=a.nodeName.toLowerCase();return("input"===b||"button"===b)&&"submit"===a.type;
},image:function(a){return"input"===a.nodeName.toLowerCase()&&"image"===a.type},reset:function(a){
var b=a.nodeName.toLowerCase();return("input"===b||"button"===b)&&"reset"===a.type;
},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b;
},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){
return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return 0===b;
},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0;
},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){
return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b;
}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);
if("contains"===e)return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;
if("not"===e){for(var g=b[3],h=0,i=g.length;i>h;h++)if(g[h]===a)return!1;return!0;
}m.error(e)},CHILD:function(a,b){var c,d,f,g,h,i,j=b[1],k=a;switch(j){case"only":
case"first":for(;k=k.previousSibling;)if(1===k.nodeType)return!1;if("first"===j)return!0;
k=a;case"last":for(;k=k.nextSibling;)if(1===k.nodeType)return!1;return!0;case"nth":
if(c=b[2],d=b[3],1===c&&0===d)return!0;if(f=b[0],g=a.parentNode,g&&(g[e]!==f||!a.nodeIndex)){
for(h=0,k=g.firstChild;k;k=k.nextSibling)1===k.nodeType&&(k.nodeIndex=++h);g[e]=f;
}return i=a.nodeIndex-d,0===c?0===i:i%c===0&&i/c>=0}},ID:function(a,b){return 1===a.nodeType&&a.getAttribute("id")===b;
},TAG:function(a,b){return"*"===b&&1===a.nodeType||!!a.nodeName&&a.nodeName.toLowerCase()===b;
},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1;
},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):null!=a[c]?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];
return null==d?"!="===f:!f&&m.attr?null!=d:"="===f?e===g:"*="===f?e.indexOf(g)>=0:"~="===f?(" "+e+" ").indexOf(g)>=0:g?"!="===f?e!==g:"^="===f?0===e.indexOf(g):"$="===f?e.substr(e.length-g.length)===g:"|="===f?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1;
},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];return f?f(a,c,b,d):void 0}}
},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),
o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));
o.match.globalPOS=p;var s=function(a,b){return a=Array.prototype.slice.call(a,0),
b?(b.push.apply(b,a),b):a};try{Array.prototype.slice.call(G.documentElement.childNodes,0)[0].nodeType;
}catch(t){s=function(a,b){var c=0,d=b||[];if("[object Array]"===g.call(a))Array.prototype.push.apply(d,a);else if("number"==typeof a.length)for(var e=a.length;e>c;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);
return d}}var u,v;G.documentElement.compareDocumentPosition?u=function(a,b){return a===b?(h=!0,
0):a.compareDocumentPosition&&b.compareDocumentPosition?4&a.compareDocumentPosition(b)?-1:1:a.compareDocumentPosition?-1:1;
}:(u=function(a,b){if(a===b)return h=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;
var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;
if(!i)return 1;for(;j;)e.unshift(j),j=j.parentNode;for(j=i;j;)f.unshift(j),j=j.parentNode;
c=e.length,d=f.length;for(var k=0;c>k&&d>k;k++)if(e[k]!==f[k])return v(e[k],f[k]);
return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;for(var d=a.nextSibling;d;){
if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=G.createElement("div"),c="script"+(new Date).getTime(),d=G.documentElement;
a.innerHTML="<a name='"+c+"'/>",d.insertBefore(a,d.firstChild),G.getElementById(c)&&(o.find.ID=function(a,c,d){
if("undefined"!=typeof c.getElementById&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||"undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[];
}},o.filter.ID=function(a,b){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");
return 1===a.nodeType&&c&&c.nodeValue===b}),d.removeChild(a),d=a=null}(),function(){
var a=G.createElement("div");a.appendChild(G.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){
var c=b.getElementsByTagName(a[1]);if("*"===a[1]){for(var d=[],e=0;c[e];e++)1===c[e].nodeType&&d.push(c[e]);
c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&"undefined"!=typeof a.firstChild.getAttribute&&"#"!==a.firstChild.getAttribute("href")&&(o.attrHandle.href=function(a){
return a.getAttribute("href",2)}),a=null}(),G.querySelectorAll&&function(){var a=m,b=G.createElement("div"),c="__sizzle__";
if(b.innerHTML="<p class='TEST'></p>",!b.querySelectorAll||0!==b.querySelectorAll(".TEST").length){
m=function(b,d,e,f){if(d=d||G,!f&&!m.isXML(d)){var g=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
if(g&&(1===d.nodeType||9===d.nodeType)){if(g[1])return s(d.getElementsByTagName(b),e);
if(g[2]&&o.find.CLASS&&d.getElementsByClassName)return s(d.getElementsByClassName(g[2]),e);
}if(9===d.nodeType){if("body"===b&&d.body)return s([d.body],e);if(g&&g[3]){var h=d.getElementById(g[3]);
if(!h||!h.parentNode)return s([],e);if(h.id===g[3])return s([h],e)}try{return s(d.querySelectorAll(b),e);
}catch(i){}}else if(1===d.nodeType&&"object"!==d.nodeName.toLowerCase()){var j=d,k=d.getAttribute("id"),l=k||c,n=d.parentNode,p=/^\s*[+~]/.test(b);
k?l=l.replace(/'/g,"\\$&"):d.setAttribute("id",l),p&&n&&(d=d.parentNode);try{if(!p||n)return s(d.querySelectorAll("[id='"+l+"'] "+b),e);
}catch(q){}finally{k||j.removeAttribute("id")}}}return a(b,d,e,f)};for(var d in a)m[d]=a[d];
b=null}}(),function(){var a=G.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;
if(b){var c=!b.call(G.createElement("div"),"div"),d=!1;try{b.call(G.documentElement,"[test!='']:sizzle");
}catch(e){d=!0}m.matchesSelector=function(a,e){if(e=e.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']"),
!m.isXML(a))try{if(d||!o.match.PSEUDO.test(e)&&!/!=/.test(e)){var f=b.call(a,e);if(f||!c||a.document&&11!==a.document.nodeType)return f;
}}catch(g){}return m(e,null,null,[a]).length>0}}}(),function(){var a=G.createElement("div");
if(a.innerHTML="<div class='test e'></div><div class='test'></div>",a.getElementsByClassName&&0!==a.getElementsByClassName("e").length){
if(a.lastChild.className="e",1===a.getElementsByClassName("e").length)return;o.order.splice(1,0,"CLASS"),
o.find.CLASS=function(a,b,c){return"undefined"==typeof b.getElementsByClassName||c?void 0:b.getElementsByClassName(a[1]);
},a=null}}(),G.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0);
}:G.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(16&a.compareDocumentPosition(b));
}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;
return b?"HTML"!==b.nodeName:!1};var w=function(a,b,c){for(var d,e=[],f="",g=b.nodeType?[b]:b;d=o.match.PSEUDO.exec(a);)f+=d[0],
a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;i>h;h++)m(a,g[h],e,c);
return m.filter(f,e)};m.attr=J.attr,m.selectors.attrMap={},J.find=m,J.expr=m.selectors,
J.expr[":"]=J.expr.filters,J.unique=m.uniqueSort,J.text=m.getText,J.isXMLDoc=m.isXML,
J.contains=m.contains}();var ha=/Until$/,ia=/^(?:parents|prevUntil|prevAll)/,ja=/,/,ka=/^.[^:#\[\.,]*$/,la=Array.prototype.slice,ma=J.expr.match.globalPOS,na={
children:!0,contents:!0,next:!0,prev:!0};J.fn.extend({find:function(a){var b,c,d=this;
if("string"!=typeof a)return J(a).filter(function(){for(b=0,c=d.length;c>b;b++)if(J.contains(d[b],this))return!0;
});var e,f,g,h=this.pushStack("","find",a);for(b=0,c=this.length;c>b;b++)if(e=h.length,
J.find(a,this[b],h),b>0)for(f=e;f<h.length;f++)for(g=0;e>g;g++)if(h[g]===h[f]){h.splice(f--,1);
break}return h},has:function(a){var b=J(a);return this.filter(function(){for(var a=0,c=b.length;c>a;a++)if(J.contains(this,b[a]))return!0;
})},not:function(a){return this.pushStack(y(this,a,!1),"not",a)},filter:function(a){
return this.pushStack(y(this,a,!0),"filter",a)},is:function(a){return!!a&&("string"==typeof a?ma.test(a)?J(a,this.context).index(this[0])>=0:J.filter(a,this).length>0:this.filter(a).length>0);
},closest:function(a,b){var c,d,e=[],f=this[0];if(J.isArray(a)){for(var g=1;f&&f.ownerDocument&&f!==b;){
for(c=0;c<a.length;c++)J(f).is(a[c])&&e.push({selector:a[c],elem:f,level:g});f=f.parentNode,
g++}return e}var h=ma.test(a)||"string"!=typeof a?J(a,b||this.context):0;for(c=0,
d=this.length;d>c;c++)for(f=this[c];f;){if(h?h.index(f)>-1:J.find.matchesSelector(f,a)){
e.push(f);break}if(f=f.parentNode,!f||!f.ownerDocument||f===b||11===f.nodeType)break;
}return e=e.length>1?J.unique(e):e,this.pushStack(e,"closest",a)},index:function(a){
return a?"string"==typeof a?J.inArray(this[0],J(a)):J.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1;
},add:function(a,b){var c="string"==typeof a?J(a,b):J.makeArray(a&&a.nodeType?[a]:a),d=J.merge(this.get(),c);
return this.pushStack(z(c[0])||z(d[0])?d:J.unique(d))},andSelf:function(){return this.add(this.prevObject);
}}),J.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null;
},parents:function(a){return J.dir(a,"parentNode")},parentsUntil:function(a,b,c){
return J.dir(a,"parentNode",c)},next:function(a){return J.nth(a,2,"nextSibling")},
prev:function(a){return J.nth(a,2,"previousSibling")},nextAll:function(a){return J.dir(a,"nextSibling");
},prevAll:function(a){return J.dir(a,"previousSibling")},nextUntil:function(a,b,c){
return J.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return J.dir(a,"previousSibling",c);
},siblings:function(a){return J.sibling((a.parentNode||{}).firstChild,a)},children:function(a){
return J.sibling(a.firstChild)},contents:function(a){return J.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:J.makeArray(a.childNodes);
}},function(a,b){J.fn[a]=function(c,d){var e=J.map(this,b,c);return ha.test(a)||(d=c),
d&&"string"==typeof d&&(e=J.filter(d,e)),e=this.length>1&&!na[a]?J.unique(e):e,(this.length>1||ja.test(d))&&ia.test(a)&&(e=e.reverse()),
this.pushStack(e,a,la.call(arguments).join(","))}}),J.extend({filter:function(a,b,c){
return c&&(a=":not("+a+")"),1===b.length?J.find.matchesSelector(b[0],a)?[b[0]]:[]:J.find.matches(a,b);
},dir:function(a,c,d){for(var e=[],f=a[c];f&&9!==f.nodeType&&(d===b||1!==f.nodeType||!J(f).is(d));)1===f.nodeType&&e.push(f),
f=f[c];return e},nth:function(a,b,c,d){b=b||1;for(var e=0;a&&(1!==a.nodeType||++e!==b);a=a[c]);
return a},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);
return c}});var oa="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",pa=/ jQuery\d+="(?:\d+|null)"/g,qa=/^\s+/,ra=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,sa=/<([\w:]+)/,ta=/<tbody/i,ua=/<|&#?\w+;/,va=/<(?:script|style)/i,wa=/<(?:script|object|embed|option|style)/i,xa=new RegExp("<(?:"+oa+")[\\s/>]","i"),ya=/checked\s*(?:[^=]|=\s*.checked.)/i,za=/\/(java|ecma)script/i,Aa=/^\s*<!(?:\[CDATA\[|\-\-)/,Ba={
option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],
thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],
col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],
_default:[0,"",""]},Ca=x(G);Ba.optgroup=Ba.option,Ba.tbody=Ba.tfoot=Ba.colgroup=Ba.caption=Ba.thead,
Ba.th=Ba.td,J.support.htmlSerialize||(Ba._default=[1,"div<div>","</div>"]),J.fn.extend({
text:function(a){return J.access(this,function(a){return a===b?J.text(this):this.empty().append((this[0]&&this[0].ownerDocument||G).createTextNode(a));
},null,a,arguments.length)},wrapAll:function(a){if(J.isFunction(a))return this.each(function(b){
J(this).wrapAll(a.call(this,b))});if(this[0]){var b=J(a,this[0].ownerDocument).eq(0).clone(!0);
this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){for(var a=this;a.firstChild&&1===a.firstChild.nodeType;)a=a.firstChild;
return a}).append(this)}return this},wrapInner:function(a){return J.isFunction(a)?this.each(function(b){
J(this).wrapInner(a.call(this,b))}):this.each(function(){var b=J(this),c=b.contents();
c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=J.isFunction(a);return this.each(function(c){
J(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){
J.nodeName(this,"body")||J(this).replaceWith(this.childNodes)}).end()},append:function(){
return this.domManip(arguments,!0,function(a){1===this.nodeType&&this.appendChild(a);
})},prepend:function(){return this.domManip(arguments,!0,function(a){1===this.nodeType&&this.insertBefore(a,this.firstChild);
})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){
this.parentNode.insertBefore(a,this)});if(arguments.length){var a=J.clean(arguments);
return a.push.apply(a,this.toArray()),this.pushStack(a,"before",arguments)}},after:function(){
if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling);
});if(arguments.length){var a=this.pushStack(this,"after",arguments);return a.push.apply(a,J.clean(arguments)),
a}},remove:function(a,b){for(var c,d=0;null!=(c=this[d]);d++)(!a||J.filter(a,[c]).length)&&(!b&&1===c.nodeType&&(J.cleanData(c.getElementsByTagName("*")),
J.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c));return this},empty:function(){
for(var a,b=0;null!=(a=this[b]);b++)for(1===a.nodeType&&J.cleanData(a.getElementsByTagName("*"));a.firstChild;)a.removeChild(a.firstChild);
return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){
return J.clone(this,a,b)})},html:function(a){return J.access(this,function(a){var c=this[0]||{},d=0,e=this.length;
if(a===b)return 1===c.nodeType?c.innerHTML.replace(pa,""):null;if("string"==typeof a&&!va.test(a)&&(J.support.leadingWhitespace||!qa.test(a))&&!Ba[(sa.exec(a)||["",""])[1].toLowerCase()]){
a=a.replace(ra,"<$1></$2>");try{for(;e>d;d++)c=this[d]||{},1===c.nodeType&&(J.cleanData(c.getElementsByTagName("*")),
c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length);
},replaceWith:function(a){return this[0]&&this[0].parentNode?J.isFunction(a)?this.each(function(b){
var c=J(this),d=c.html();c.replaceWith(a.call(this,b,d))}):("string"!=typeof a&&(a=J(a).detach()),
this.each(function(){var b=this.nextSibling,c=this.parentNode;J(this).remove(),b?J(b).before(a):J(c).append(a);
})):this.length?this.pushStack(J(J.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){
return this.remove(a,!0)},domManip:function(a,c,d){var e,f,g,h,i=a[0],j=[];if(!J.support.checkClone&&3===arguments.length&&"string"==typeof i&&ya.test(i))return this.each(function(){
J(this).domManip(a,c,d,!0)});if(J.isFunction(i))return this.each(function(e){var f=J(this);
a[0]=i.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){if(h=i&&i.parentNode,
e=J.support.parentNode&&h&&11===h.nodeType&&h.childNodes.length===this.length?{fragment:h
}:J.buildFragment(a,this,j),g=e.fragment,f=1===g.childNodes.length?g=g.firstChild:g.firstChild,
f){c=c&&J.nodeName(f,"tr");for(var k=0,l=this.length,m=l-1;l>k;k++)d.call(c?w(this[k],f):this[k],e.cacheable||l>1&&m>k?J.clone(g,!0,!0):g);
}j.length&&J.each(j,function(a,b){b.src?J.ajax({type:"GET",global:!1,url:b.src,async:!1,
dataType:"script"}):J.globalEval((b.text||b.textContent||b.innerHTML||"").replace(Aa,"/*$0*/")),
b.parentNode&&b.parentNode.removeChild(b)})}return this}}),J.buildFragment=function(a,b,c){
var d,e,f,g,h=a[0];return b&&b[0]&&(g=b[0].ownerDocument||b[0]),g.createDocumentFragment||(g=G),
1===a.length&&"string"==typeof h&&h.length<512&&g===G&&"<"===h.charAt(0)&&!wa.test(h)&&(J.support.checkClone||!ya.test(h))&&(J.support.html5Clone||!xa.test(h))&&(e=!0,
f=J.fragments[h],f&&1!==f&&(d=f)),d||(d=g.createDocumentFragment(),J.clean(a,g,d,c)),
e&&(J.fragments[h]=f?d:1),{fragment:d,cacheable:e}},J.fragments={},J.each({appendTo:"append",
prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"
},function(a,b){J.fn[a]=function(c){var d=[],e=J(c),f=1===this.length&&this[0].parentNode;
if(f&&11===f.nodeType&&1===f.childNodes.length&&1===e.length)return e[b](this[0]),
this;for(var g=0,h=e.length;h>g;g++){var i=(g>0?this.clone(!0):this).get();J(e[g])[b](i),
d=d.concat(i)}return this.pushStack(d,a,e.selector)}}),J.extend({clone:function(a,b,c){
var d,e,f,g=J.support.html5Clone||J.isXMLDoc(a)||!xa.test("<"+a.nodeName+">")?a.cloneNode(!0):q(a);
if(!(J.support.noCloneEvent&&J.support.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||J.isXMLDoc(a)))for(u(a,g),
d=t(a),e=t(g),f=0;d[f];++f)e[f]&&u(d[f],e[f]);if(b&&(v(a,g),c))for(d=t(a),e=t(g),
f=0;d[f];++f)v(d[f],e[f]);return d=e=null,g},clean:function(a,b,c,d){var e,f,g,h=[];
b=b||G,"undefined"==typeof b.createElement&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||G);
for(var i,j=0;null!=(i=a[j]);j++)if("number"==typeof i&&(i+=""),i){if("string"==typeof i)if(ua.test(i)){
i=i.replace(ra,"<$1></$2>");var k,l=(sa.exec(i)||["",""])[1].toLowerCase(),m=Ba[l]||Ba._default,n=m[0],o=b.createElement("div"),p=Ca.childNodes;
for(b===G?Ca.appendChild(o):x(b).appendChild(o),o.innerHTML=m[1]+i+m[2];n--;)o=o.lastChild;
if(!J.support.tbody){var q=ta.test(i),s="table"!==l||q?"<table>"!==m[1]||q?[]:o.childNodes:o.firstChild&&o.firstChild.childNodes;
for(g=s.length-1;g>=0;--g)J.nodeName(s[g],"tbody")&&!s[g].childNodes.length&&s[g].parentNode.removeChild(s[g]);
}!J.support.leadingWhitespace&&qa.test(i)&&o.insertBefore(b.createTextNode(qa.exec(i)[0]),o.firstChild),
i=o.childNodes,o&&(o.parentNode.removeChild(o),p.length>0&&(k=p[p.length-1],k&&k.parentNode&&k.parentNode.removeChild(k)));
}else i=b.createTextNode(i);var t;if(!J.support.appendChecked)if(i[0]&&"number"==typeof(t=i.length))for(g=0;t>g;g++)r(i[g]);else r(i);
i.nodeType?h.push(i):h=J.merge(h,i)}if(c)for(e=function(a){return!a.type||za.test(a.type);
},j=0;h[j];j++)if(f=h[j],d&&J.nodeName(f,"script")&&(!f.type||za.test(f.type)))d.push(f.parentNode?f.parentNode.removeChild(f):f);else{
if(1===f.nodeType){var u=J.grep(f.getElementsByTagName("script"),e);h.splice.apply(h,[j+1,0].concat(u));
}c.appendChild(f)}return h},cleanData:function(a){for(var b,c,d,e=J.cache,f=J.event.special,g=J.support.deleteExpando,h=0;null!=(d=a[h]);h++)if((!d.nodeName||!J.noData[d.nodeName.toLowerCase()])&&(c=d[J.expando])){
if(b=e[c],b&&b.events){for(var i in b.events)f[i]?J.event.remove(d,i):J.removeEvent(d,i,b.handle);
b.handle&&(b.handle.elem=null)}g?delete d[J.expando]:d.removeAttribute&&d.removeAttribute(J.expando),
delete e[c]}}});var Da,Ea,Fa,Ga=/alpha\([^)]*\)/i,Ha=/opacity=([^)]*)/,Ia=/([A-Z]|^ms)/g,Ja=/^[\-+]?(?:\d*\.)?\d+$/i,Ka=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,La=/^([\-+])=([\-+.\de]+)/,Ma=/^margin/,Na={
position:"absolute",visibility:"hidden",display:"block"},Oa=["Top","Right","Bottom","Left"];
J.fn.css=function(a,c){return J.access(this,function(a,c,d){return d!==b?J.style(a,c,d):J.css(a,c);
},a,c,arguments.length>1)},J.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Da(a,"opacity");
return""===c?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,
lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":J.support.cssFloat?"cssFloat":"styleFloat"
},style:function(a,c,d,e){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var f,g,h=J.camelCase(c),i=a.style,j=J.cssHooks[h];
if(c=J.cssProps[h]||h,d===b)return j&&"get"in j&&(f=j.get(a,!1,e))!==b?f:i[c];if(g=typeof d,
"string"===g&&(f=La.exec(d))&&(d=+(f[1]+1)*+f[2]+parseFloat(J.css(a,c)),g="number"),
null==d||"number"===g&&isNaN(d))return;if("number"===g&&!J.cssNumber[h]&&(d+="px"),
!(j&&"set"in j&&(d=j.set(a,d))===b))try{i[c]=d}catch(k){}}},css:function(a,c,d){var e,f;
return c=J.camelCase(c),f=J.cssHooks[c],c=J.cssProps[c]||c,"cssFloat"===c&&(c="float"),
f&&"get"in f&&(e=f.get(a,!0,d))!==b?e:Da?Da(a,c):void 0},swap:function(a,b,c){var d,e,f={};
for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];
return d}}),J.curCSS=J.css,G.defaultView&&G.defaultView.getComputedStyle&&(Ea=function(a,b){
var c,d,e,f,g=a.style;return b=b.replace(Ia,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),
""===c&&!J.contains(a.ownerDocument.documentElement,a)&&(c=J.style(a,b))),!J.support.pixelMargin&&e&&Ma.test(b)&&Ka.test(c)&&(f=g.width,
g.width=c,c=e.width,g.width=f),c}),G.documentElement.currentStyle&&(Fa=function(a,b){
var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;return null==f&&g&&(e=g[b])&&(f=e),
Ka.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),
g.left="fontSize"===b?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d)),
""===f?"auto":f}),Da=Ea||Fa,J.each(["height","width"],function(a,b){J.cssHooks[b]={
get:function(a,c,d){return c?0!==a.offsetWidth?p(a,b,d):J.swap(a,Na,function(){return p(a,b,d);
}):void 0},set:function(a,b){return Ja.test(b)?b+"px":b}}}),J.support.opacity||(J.cssHooks.opacity={
get:function(a,b){return Ha.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":"";
},set:function(a,b){var c=a.style,d=a.currentStyle,e=J.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";
c.zoom=1,b>=1&&""===J.trim(f.replace(Ga,""))&&(c.removeAttribute("filter"),d&&!d.filter)||(c.filter=Ga.test(f)?f.replace(Ga,e):f+" "+e);
}}),J(function(){J.support.reliableMarginRight||(J.cssHooks.marginRight={get:function(a,b){
return J.swap(a,{display:"inline-block"},function(){return b?Da(a,"margin-right"):a.style.marginRight;
})}})}),J.expr&&J.expr.filters&&(J.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;
return 0===b&&0===c||!J.support.reliableHiddenOffsets&&"none"===(a.style&&a.style.display||J.css(a,"display"));
},J.expr.filters.visible=function(a){return!J.expr.filters.hidden(a)}),J.each({margin:"",
padding:"",border:"Width"},function(a,b){J.cssHooks[a+b]={expand:function(c){var d,e="string"==typeof c?c.split(" "):[c],f={};
for(d=0;4>d;d++)f[a+Oa[d]+b]=e[d]||e[d-2]||e[0];return f}}});var Pa,Qa,Ra=/%20/g,Sa=/\[\]$/,Ta=/\r?\n/g,Ua=/#.*$/,Va=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Wa=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,Xa=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,Ya=/^(?:GET|HEAD)$/,Za=/^\/\//,$a=/\?/,_a=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,ab=/^(?:select|textarea)/i,bb=/\s+/,cb=/([?&])_=[^&]*/,db=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,eb=J.fn.load,fb={},gb={},hb=["*/"]+["*"];
try{Pa=I.href}catch(ib){Pa=G.createElement("a"),Pa.href="",Pa=Pa.href}Qa=db.exec(Pa.toLowerCase())||[],
J.fn.extend({load:function(a,c,d){if("string"!=typeof a&&eb)return eb.apply(this,arguments);
if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var f=a.slice(e,a.length);
a=a.slice(0,e)}var g="GET";c&&(J.isFunction(c)?(d=c,c=b):"object"==typeof c&&(c=J.param(c,J.ajaxSettings.traditional),
g="POST"));var h=this;return J.ajax({url:a,type:g,dataType:"html",data:c,complete:function(a,b,c){
c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),h.html(f?J("<div>").append(c.replace(_a,"")).find(f):c)),
d&&h.each(d,[c,b,a])}}),this},serialize:function(){return J.param(this.serializeArray());
},serializeArray:function(){return this.map(function(){return this.elements?J.makeArray(this.elements):this;
}).filter(function(){return this.name&&!this.disabled&&(this.checked||ab.test(this.nodeName)||Wa.test(this.type));
}).map(function(a,b){var c=J(this).val();return null==c?null:J.isArray(c)?J.map(c,function(a,c){
return{name:b.name,value:a.replace(Ta,"\r\n")}}):{name:b.name,value:c.replace(Ta,"\r\n")
}}).get()}}),J.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){
J.fn[b]=function(a){return this.on(b,a)}}),J.each(["get","post"],function(a,c){J[c]=function(a,d,e,f){
return J.isFunction(d)&&(f=f||e,e=d,d=b),J.ajax({type:c,url:a,data:d,success:e,dataType:f
})}}),J.extend({getScript:function(a,c){return J.get(a,b,c,"script")},getJSON:function(a,b,c){
return J.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?m(a,J.ajaxSettings):(b=a,
a=J.ajaxSettings),m(a,b),a},ajaxSettings:{url:Pa,isLocal:Xa.test(Qa[1]),global:!0,
type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,
async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",
json:"application/json, text/javascript","*":hb},contents:{xml:/xml/,html:/html/,
json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,
"text html":!0,"text json":J.parseJSON,"text xml":J.parseXML},flatOptions:{context:!0,
url:!0}},ajaxPrefilter:o(fb),ajaxTransport:o(gb),ajax:function(a,c){function d(a,c,d,g){
if(2!==x){x=2,i&&clearTimeout(i),h=b,f=g||"",y.readyState=a>0?4:0;var l,n,o,v,w,z=c,A=d?k(p,y,d):b;
if(a>=200&&300>a||304===a)if(p.ifModified&&((v=y.getResponseHeader("Last-Modified"))&&(J.lastModified[e]=v),
(w=y.getResponseHeader("Etag"))&&(J.etag[e]=w)),304===a)z="notmodified",l=!0;else try{
n=j(p,A),z="success",l=!0}catch(B){z="parsererror",o=B}else o=z,(!z||a)&&(z="error",
0>a&&(a=0));y.status=a,y.statusText=""+(c||z),l?s.resolveWith(q,[n,z,y]):s.rejectWith(q,[y,z,o]),
y.statusCode(u),u=b,m&&r.trigger("ajax"+(l?"Success":"Error"),[y,p,l?n:o]),t.fireWith(q,[y,z]),
m&&(r.trigger("ajaxComplete",[y,p]),--J.active||J.event.trigger("ajaxStop"))}}"object"==typeof a&&(c=a,
a=b),c=c||{};var e,f,g,h,i,l,m,o,p=J.ajaxSetup({},c),q=p.context||p,r=q!==p&&(q.nodeType||q instanceof J)?J(q):J.event,s=J.Deferred(),t=J.Callbacks("once memory"),u=p.statusCode||{},v={},w={},x=0,y={
readyState:0,setRequestHeader:function(a,b){if(!x){var c=a.toLowerCase();a=w[c]=w[c]||a,
v[a]=b}return this},getAllResponseHeaders:function(){return 2===x?f:null},getResponseHeader:function(a){
var c;if(2===x){if(!g)for(g={};c=Va.exec(f);)g[c[1].toLowerCase()]=c[2];c=g[a.toLowerCase()];
}return c===b?null:c},overrideMimeType:function(a){return x||(p.mimeType=a),this},
abort:function(a){return a=a||"abort",h&&h.abort(a),d(0,a),this}};if(s.promise(y),
y.success=y.done,y.error=y.fail,y.complete=t.add,y.statusCode=function(a){if(a){var b;
if(2>x)for(b in a)u[b]=[u[b],a[b]];else b=a[y.status],y.then(b,b)}return this},p.url=((a||p.url)+"").replace(Ua,"").replace(Za,Qa[1]+"//"),
p.dataTypes=J.trim(p.dataType||"*").toLowerCase().split(bb),null==p.crossDomain&&(l=db.exec(p.url.toLowerCase()),
p.crossDomain=!(!l||l[1]==Qa[1]&&l[2]==Qa[2]&&(l[3]||("http:"===l[1]?80:443))==(Qa[3]||("http:"===Qa[1]?80:443)))),
p.data&&p.processData&&"string"!=typeof p.data&&(p.data=J.param(p.data,p.traditional)),
n(fb,p,c,y),2===x)return!1;if(m=p.global,p.type=p.type.toUpperCase(),p.hasContent=!Ya.test(p.type),
m&&0===J.active++&&J.event.trigger("ajaxStart"),!p.hasContent&&(p.data&&(p.url+=($a.test(p.url)?"&":"?")+p.data,
delete p.data),e=p.url,p.cache===!1)){var z=J.now(),A=p.url.replace(cb,"$1_="+z);p.url=A+(A===p.url?($a.test(p.url)?"&":"?")+"_="+z:"");
}(p.data&&p.hasContent&&p.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",p.contentType),
p.ifModified&&(e=e||p.url,J.lastModified[e]&&y.setRequestHeader("If-Modified-Since",J.lastModified[e]),
J.etag[e]&&y.setRequestHeader("If-None-Match",J.etag[e])),y.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+hb+"; q=0.01":""):p.accepts["*"]);
for(o in p.headers)y.setRequestHeader(o,p.headers[o]);if(p.beforeSend&&(p.beforeSend.call(q,y,p)===!1||2===x))return y.abort(),
!1;for(o in{success:1,error:1,complete:1})y[o](p[o]);if(h=n(gb,p,c,y)){y.readyState=1,
m&&r.trigger("ajaxSend",[y,p]),p.async&&p.timeout>0&&(i=setTimeout(function(){y.abort("timeout");
},p.timeout));try{x=1,h.send(v,d)}catch(B){if(!(2>x))throw B;d(-1,B)}}else d(-1,"No Transport");
return y},param:function(a,c){var d=[],e=function(a,b){b=J.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b);
};if(c===b&&(c=J.ajaxSettings.traditional),J.isArray(a)||a.jquery&&!J.isPlainObject(a))J.each(a,function(){
e(this.name,this.value)});else for(var f in a)l(f,a[f],c,e);return d.join("&").replace(Ra,"+");
}}),J.extend({active:0,lastModified:{},etag:{}});var jb=J.now(),kb=/(\=)\?(&|$)|\?\?/i;
J.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return J.expando+"_"+jb++}
}),J.ajaxPrefilter("json jsonp",function(b,c,d){var e="string"==typeof b.data&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);
if("jsonp"===b.dataTypes[0]||b.jsonp!==!1&&(kb.test(b.url)||e&&kb.test(b.data))){
var f,g=b.jsonpCallback=J.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h=a[g],i=b.url,j=b.data,k="$1"+g+"$2";
return b.jsonp!==!1&&(i=i.replace(kb,k),b.url===i&&(e&&(j=j.replace(kb,k)),b.data===j&&(i+=(/\?/.test(i)?"&":"?")+b.jsonp+"="+g))),
b.url=i,b.data=j,a[g]=function(a){f=[a]},d.always(function(){a[g]=h,f&&J.isFunction(h)&&a[g](f[0]);
}),b.converters["script json"]=function(){return f||J.error(g+" was not called"),
f[0]},b.dataTypes[0]="json","script"}}),J.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){
return J.globalEval(a),a}}}),J.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),
a.crossDomain&&(a.type="GET",a.global=!1)}),J.ajaxTransport("script",function(a){
if(a.crossDomain){var c,d=G.head||G.getElementsByTagName("head")[0]||G.documentElement;
return{send:function(e,f){c=G.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),
c.src=a.url,c.onload=c.onreadystatechange=function(a,e){(e||!c.readyState||/loaded|complete/.test(c.readyState))&&(c.onload=c.onreadystatechange=null,
d&&c.parentNode&&d.removeChild(c),c=b,e||f(200,"success"))},d.insertBefore(c,d.firstChild);
},abort:function(){c&&c.onload(0,1)}}}});var lb,mb=a.ActiveXObject?function(){for(var a in lb)lb[a](0,1);
}:!1,nb=0;J.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&i()||h();
}:i,function(a){J.extend(J.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(J.ajaxSettings.xhr()),
J.support.ajax&&J.ajaxTransport(function(c){if(!c.crossDomain||J.support.cors){var d;
return{send:function(e,f){var g,h,i=c.xhr();if(c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async),
c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),
!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{
for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),
d=function(a,e){var h,j,k,l,m;try{if(d&&(e||4===i.readyState))if(d=b,g&&(i.onreadystatechange=J.noop,
mb&&delete lb[g]),e)4!==i.readyState&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),
l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}
try{j=i.statusText}catch(n){j=""}h||!c.isLocal||c.crossDomain?1223===h&&(h=204):h=l.text?200:404;
}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async&&4!==i.readyState?(g=++nb,mb&&(lb||(lb={},
J(a).unload(mb)),lb[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1);
}}}});var ob,pb,qb,rb,sb={},tb=/^(?:toggle|show|hide)$/,ub=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,vb=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];
J.fn.extend({show:function(a,b,c){var f,g;if(a||0===a)return this.animate(e("show",3),a,b,c);
for(var h=0,i=this.length;i>h;h++)f=this[h],f.style&&(g=f.style.display,!J._data(f,"olddisplay")&&"none"===g&&(g=f.style.display=""),
(""===g&&"none"===J.css(f,"display")||!J.contains(f.ownerDocument.documentElement,f))&&J._data(f,"olddisplay",d(f.nodeName)));
for(h=0;i>h;h++)f=this[h],f.style&&(g=f.style.display,(""===g||"none"===g)&&(f.style.display=J._data(f,"olddisplay")||""));
return this},hide:function(a,b,c){if(a||0===a)return this.animate(e("hide",3),a,b,c);
for(var d,f,g=0,h=this.length;h>g;g++)d=this[g],d.style&&(f=J.css(d,"display"),"none"!==f&&!J._data(d,"olddisplay")&&J._data(d,"olddisplay",f));
for(g=0;h>g;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:J.fn.toggle,
toggle:function(a,b,c){var d="boolean"==typeof a;return J.isFunction(a)&&J.isFunction(b)?this._toggle.apply(this,arguments):null==a||d?this.each(function(){
var b=d?a:J(this).is(":hidden");J(this)[b?"show":"hide"]()}):this.animate(e("toggle",3),a,b,c),
this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({
opacity:b},a,c,d)},animate:function(a,b,c,e){function f(){g.queue===!1&&J._mark(this);
var b,c,e,f,h,i,j,k,l,m,n,o=J.extend({},g),p=1===this.nodeType,q=p&&J(this).is(":hidden");
o.animatedProperties={};for(e in a)if(b=J.camelCase(e),e!==b&&(a[b]=a[e],delete a[e]),
(h=J.cssHooks[b])&&"expand"in h){i=h.expand(a[b]),delete a[b];for(e in i)e in a||(a[e]=i[e]);
}for(b in a){if(c=a[b],J.isArray(c)?(o.animatedProperties[b]=c[1],c=a[b]=c[0]):o.animatedProperties[b]=o.specialEasing&&o.specialEasing[b]||o.easing||"swing",
"hide"===c&&q||"show"===c&&!q)return o.complete.call(this);p&&("height"===b||"width"===b)&&(o.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],
"inline"===J.css(this,"display")&&"none"===J.css(this,"float")&&(J.support.inlineBlockNeedsLayout&&"inline"!==d(this.nodeName)?this.style.zoom=1:this.style.display="inline-block"));
}null!=o.overflow&&(this.style.overflow="hidden");for(e in a)f=new J.fx(this,o,e),
c=a[e],tb.test(c)?(n=J._data(this,"toggle"+e)||("toggle"===c?q?"show":"hide":0),n?(J._data(this,"toggle"+e,"show"===n?"hide":"show"),
f[n]()):f[c]()):(j=ub.exec(c),k=f.cur(),j?(l=parseFloat(j[2]),m=j[3]||(J.cssNumber[e]?"":"px"),
"px"!==m&&(J.style(this,e,(l||1)+m),k=(l||1)/f.cur()*k,J.style(this,e,k+m)),j[1]&&(l=("-="===j[1]?-1:1)*l+k),
f.custom(k,l,m)):f.custom(k,c,""));return!0}var g=J.speed(b,c,e);return J.isEmptyObject(a)?this.each(g.complete,[!1]):(a=J.extend({},a),
g.queue===!1?this.each(f):this.queue(g.queue,f))},stop:function(a,c,d){return"string"!=typeof a&&(d=c,
c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){function b(a,b,c){
var e=b[c];J.removeData(a,c,!0),e.stop(d)}var c,e=!1,f=J.timers,g=J._data(this);if(d||J._unmark(!0,this),
null==a)for(c in g)g[c]&&g[c].stop&&c.indexOf(".run")===c.length-4&&b(this,g,c);else g[c=a+".run"]&&g[c].stop&&b(this,g,c);
for(c=f.length;c--;)f[c].elem===this&&(null==a||f[c].queue===a)&&(d?f[c](!0):f[c].saveState(),
e=!0,f.splice(c,1));(!d||!e)&&J.dequeue(this,a)})}}),J.each({slideDown:e("show",1),
slideUp:e("hide",1),slideToggle:e("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"
},fadeToggle:{opacity:"toggle"}},function(a,b){J.fn[a]=function(a,c,d){return this.animate(b,a,c,d);
}}),J.extend({speed:function(a,b,c){var d=a&&"object"==typeof a?J.extend({},a):{complete:c||!c&&b||J.isFunction(a)&&a,
duration:a,easing:c&&b||b&&!J.isFunction(b)&&b};return d.duration=J.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in J.fx.speeds?J.fx.speeds[d.duration]:J.fx.speeds._default,
(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(a){
J.isFunction(d.old)&&d.old.call(this),d.queue?J.dequeue(this,d.queue):a!==!1&&J._unmark(this);
},d},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+.5;
}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{};
}}),J.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),
(J.fx.step[this.prop]||J.fx.step._default)(this)},cur:function(){if(null!=this.elem[this.prop]&&(!this.elem.style||null==this.elem.style[this.prop]))return this.elem[this.prop];
var a,b=J.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?b&&"auto"!==b?b:0:a;
},custom:function(a,c,d){function e(a){return f.step(a)}var f=this,h=J.fx;this.startTime=rb||g(),
this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(J.cssNumber[this.prop]?"":"px"),
e.queue=this.options.queue,e.elem=this.elem,e.saveState=function(){J._data(f.elem,"fxshow"+f.prop)===b&&(f.options.hide?J._data(f.elem,"fxshow"+f.prop,f.start):f.options.show&&J._data(f.elem,"fxshow"+f.prop,f.end));
},e()&&J.timers.push(e)&&!qb&&(qb=setInterval(h.tick,h.interval))},show:function(){
var a=J._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||J.style(this.elem,this.prop),
this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom("width"===this.prop||"height"===this.prop?1:0,this.cur()),
J(this.elem).show()},hide:function(){this.options.orig[this.prop]=J._data(this.elem,"fxshow"+this.prop)||J.style(this.elem,this.prop),
this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=rb||g(),f=!0,h=this.elem,i=this.options;
if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),
i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(f=!1);
if(f){if(null!=i.overflow&&!J.support.shrinkWrapBlocks&&J.each(["","X","Y"],function(a,b){
h.style["overflow"+b]=i.overflow[a]}),i.hide&&J(h).hide(),i.hide||i.show)for(b in i.animatedProperties)J.style(h,b,i.orig[b]),
J.removeData(h,"fxshow"+b,!0),J.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,
d.call(h))}return!1}return i.duration==1/0?this.now=e:(c=e-this.startTime,this.state=c/i.duration,
this.pos=J.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),
this.update(),!0}},J.extend(J.fx,{tick:function(){for(var a,b=J.timers,c=0;c<b.length;c++)a=b[c],
!a()&&b[c]===a&&b.splice(c--,1);b.length||J.fx.stop()},interval:13,stop:function(){
clearInterval(qb),qb=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){
J.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&null!=a.elem.style[a.prop]?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now;
}}}),J.each(vb.concat.apply([],vb),function(a,b){b.indexOf("margin")&&(J.fx.step[b]=function(a){
J.style(a.elem,b,Math.max(0,a.now)+a.unit)})}),J.expr&&J.expr.filters&&(J.expr.filters.animated=function(a){
return J.grep(J.timers,function(b){return a===b.elem}).length});var wb,xb=/^t(?:able|d|h)$/i,yb=/^(?:body|html)$/i;
wb="getBoundingClientRect"in G.documentElement?function(a,b,d,e){try{e=a.getBoundingClientRect();
}catch(f){}if(!e||!J.contains(d,a))return e?{top:e.top,left:e.left}:{top:0,left:0
};var g=b.body,h=c(b),i=d.clientTop||g.clientTop||0,j=d.clientLeft||g.clientLeft||0,k=h.pageYOffset||J.support.boxModel&&d.scrollTop||g.scrollTop,l=h.pageXOffset||J.support.boxModel&&d.scrollLeft||g.scrollLeft,m=e.top+k-i,n=e.left+l-j;
return{top:m,left:n}}:function(a,b,c){for(var d,e=a.offsetParent,f=a,g=b.body,h=b.defaultView,i=h?h.getComputedStyle(a,null):a.currentStyle,j=a.offsetTop,k=a.offsetLeft;(a=a.parentNode)&&a!==g&&a!==c&&(!J.support.fixedPosition||"fixed"!==i.position);)d=h?h.getComputedStyle(a,null):a.currentStyle,
j-=a.scrollTop,k-=a.scrollLeft,a===e&&(j+=a.offsetTop,k+=a.offsetLeft,J.support.doesNotAddBorder&&(!J.support.doesAddBorderForTableAndCells||!xb.test(a.nodeName))&&(j+=parseFloat(d.borderTopWidth)||0,
k+=parseFloat(d.borderLeftWidth)||0),f=e,e=a.offsetParent),J.support.subtractsBorderForOverflowNotVisible&&"visible"!==d.overflow&&(j+=parseFloat(d.borderTopWidth)||0,
k+=parseFloat(d.borderLeftWidth)||0),i=d;return("relative"===i.position||"static"===i.position)&&(j+=g.offsetTop,
k+=g.offsetLeft),J.support.fixedPosition&&"fixed"===i.position&&(j+=Math.max(c.scrollTop,g.scrollTop),
k+=Math.max(c.scrollLeft,g.scrollLeft)),{top:j,left:k}},J.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){
J.offset.setOffset(this,a,b)});var c=this[0],d=c&&c.ownerDocument;return d?c===d.body?J.offset.bodyOffset(c):wb(c,d,d.documentElement):null;
},J.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return J.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(J.css(a,"marginTop"))||0,
c+=parseFloat(J.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){
var d=J.css(a,"position");"static"===d&&(a.style.position="relative");var e,f,g=J(a),h=g.offset(),i=J.css(a,"top"),j=J.css(a,"left"),k=("absolute"===d||"fixed"===d)&&J.inArray("auto",[i,j])>-1,l={},m={};
k?(m=g.position(),e=m.top,f=m.left):(e=parseFloat(i)||0,f=parseFloat(j)||0),J.isFunction(b)&&(b=b.call(a,c,h)),
null!=b.top&&(l.top=b.top-h.top+e),null!=b.left&&(l.left=b.left-h.left+f),"using"in b?b.using.call(a,l):g.css(l);
}},J.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=yb.test(b[0].nodeName)?{
top:0,left:0}:b.offset();return c.top-=parseFloat(J.css(a,"marginTop"))||0,c.left-=parseFloat(J.css(a,"marginLeft"))||0,
d.top+=parseFloat(J.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(J.css(b[0],"borderLeftWidth"))||0,
{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){
for(var a=this.offsetParent||G.body;a&&!yb.test(a.nodeName)&&"static"===J.css(a,"position");)a=a.offsetParent;
return a})}}),J.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,d){
var e=/Y/.test(d);J.fn[a]=function(f){return J.access(this,function(a,f,g){var h=c(a);
return g===b?h?d in h?h[d]:J.support.boxModel&&h.document.documentElement[f]||h.document.body[f]:a[f]:void(h?h.scrollTo(e?J(h).scrollLeft():g,e?g:J(h).scrollTop()):a[f]=g);
},a,f,arguments.length,null)}}),J.each({Height:"height",Width:"width"},function(a,c){
var d="client"+a,e="scroll"+a,f="offset"+a;J.fn["inner"+a]=function(){var a=this[0];
return a?a.style?parseFloat(J.css(a,c,"padding")):this[c]():null},J.fn["outer"+a]=function(a){
var b=this[0];return b?b.style?parseFloat(J.css(b,c,a?"margin":"border")):this[c]():null;
},J.fn[c]=function(a){return J.access(this,function(a,c,g){var h,i,j,k;return J.isWindow(a)?(h=a.document,
i=h.documentElement[d],J.support.boxModel&&i||h.body&&h.body[d]||i):9===a.nodeType?(h=a.documentElement,
h[d]>=h[e]?h[d]:Math.max(a.body[e],h[e],a.body[f],h[f])):g===b?(j=J.css(a,c),k=parseFloat(j),
J.isNumeric(k)?k:j):void J(a).css(c,g)},c,a,arguments.length,null)}}),a.jQuery=a.$=J,
"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){
return J})}(window);var debugConsole=window.console;if(window.console)debugConsole.error||(debugConsole.error=debugConsole.log);else{
debugConsole={log:function(){},error:function(){},debug:function(){},print:function(){},
isDummy:!0};try{window.console=debugConsole}catch(e){}}var showroomImg=new Object,showroomTo=null,ishpc=!1,popUps=new Array,DEF_POPUP_ATTR="width=440,height=550,left=20,top=20,scrollbars=yes,resizable=no,status=no",DEF_POPUP_NAME="emb_popup",focusTimout;
if(document.all&&!window.opera)try{if("Microsoft Internet Explorer"==navigator.appName&&navigator.appVersion.indexOf("MSIE")>0){
var str=navigator.appVersion,ind=parseInt(str.indexOf("MSIE"))+5,dot=str.indexOf(".",ind),ver=parseInt(str.substring(ind,dot));
7>ver&&addEvent(window,"load",initFooterIE)}}catch(e){}addEvent(window,"load",ms_checkFlashstop),
function(){function LayerException(a,b){return this.msg=a,this.context=b,this}function EmbLayerManager(){
this._textMap={loading:"Bitte haben Sie einen Moment Geduld. Die Seite wird geladen.",
ok:"OK",cancel:"Abbrechen",close:"Schliessen",server_error:"Diese Funktion steht leider zur Zeit nicht zur Verfuegung. Versuchen Sie es bitte spaeter erneut."
}}function EmbUtils(){}function LayerGroup(a){if(a){var b=a.getElementsByTagName("div");
this.children=b,this.coverLayer=b[0],this.dialogLayer=b[1],this._element=a}}function x$(a){
return document.getElementById(a)}function xheight(a){return x$(a)&&x$(a).offsetHeight?x$(a).offsetHeight:0;
}function isNumber(a){try{var b=Number(a);return!!b}catch(c){return!1}}function _addOnload(a,b){
var c=window.onload;window.onload=function(){b&&a(),c&&c(),b||a()}}function styleOptions(a,b){
var c={"class":a};return b&&(c.style="width:"+b+"px;margin-left:"+Math.max(Math.round(-b/2),-480)+"px;"),
c}function evalScripts(scripts){for(var i=0;i<scripts.length;i++){var s=scripts[i];
try{eval(s)}catch(e){debugConsole.log("error in eval: "+e+" evaluating [["+s+"]]");
}}}function extractScripts(a){var b={html:a,script:[]};try{for(var c,d=/<script[^>]*>([\w\W]*?)<\/script>/gi;c=d.exec(a);){
var e=c[1];e=e.replace(/^\s*<!--/,""),b.script[b.script.length]=e}"function"==typeof a.replace&&(b.html=a.replace(d,""));
}catch(f){debugConsole.log("error in extractScripts: "+f)}return b}function getScrollHeight(){
var a=window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop;
return a?a:0}function getScrollWidth(){var a=window.pageXOffset||document.body.scrollLeft||document.documentElement.scrollLeft;
return a?a:0}function updateLayerPositions(){for(var a=embUtils().viewSize(document),b=jQuery(document).height(),c=jQuery(document).width(),d=getScrollHeight(),e=getScrollWidth(),f=0;f<dialogs.length;f++){
var g=dialogs[f],h=g.childNodes[0],i=jQuery(h).height()+27,j=jQuery(h).width();if(i){
var k=Math.min(a.ech-i,32);if(k>=0)h.style.paddingBottom="0px",debugConsole.log("top="+k+" scrollHeight="+d);else{
if(b==a.ech)k=b-i;else{var l=d/(b-a.ech);k=l*(a.ech-i),debugConsole.log("rp="+l+" top="+k+" scrollHeight="+d);
}var m=-k+3;h.style.paddingBottom=m+"px"}g.style.top=Math.round(k)+"px",i>b-m?g.style.position="absolute":g.style.position="fixed";
}if(j){var n=0;if(a.ecw<j){var l=e/(c-a.ecw);n=l*(a.ecw-j),debugConsole.log("rp="+l+" left="+n+" scrollWidth="+e);
}g.style.left=Math.round(n)+"px"}}}function _index(a,b){for(i in a)if(a[i]===b)return i;
return null}function _contains(a,b){return null!=_index(a,b)}function _add(a,b){_contains(a,b)||(a[a.length]=b);
}function _remove(a,b){var c=_index(a,b),d=a.length-1;c&&c!=a.length-1&&(a[c]=a[d]),
a.length=d}function xmltext2dom(a){if(window.ActiveXObject){var b=new ActiveXObject("Microsoft.XMLDOM");
b.loadXML(a)}else if(document.implementation)var b=(new DOMParser).parseFromString(a,"text/xml");
return b}function unpackContents(a){for(var b=null,c=a.firstChild;c;){var d=c.nodeName;
"#text"==d||"#cdata-section"==d?b?b+=c.nodeValue:b=c.nodeValue:debugConsole.log("unexpected node type in unpackContents: "+d),
c=c.nextSibling}return b}var embLayerManager;window.embGetLayerManager=function(){
return embLayerManager||(embLayerManager=new EmbLayerManager),embLayerManager};var debugConsole=window.console;
if(!window.console){debugConsole={log:function(){},debug:function(){},print:function(){},
isDummy:!0};try{window.console=debugConsole}catch(e){}}EmbUtils.prototype={fullHeight:function(a){
var b=a.body,c=a.documentElement;return Math.max(Math.max(b.scrollHeight,c.scrollHeight),Math.max(b.offsetHeight,c.offsetHeight),Math.max(b.clientHeight,c.clientHeight));
},docElem:function(a){var b;return((b=document.documentElement)||(b=document.body.parentNode))&&isNumber(b[a])?b:document.body;
},viewSize:function(a){var b={w:window.innerWidth,h:window.innerHeight},c=this.docElem("clientWidth"),d=document.body;
return isNumber(document.clientWidth)?b={w:document.clientWidth,h:document.clientHeight
}:Math.max(c.clientWidth,d.clientWidth)>window.innerWidth||Math.max(c.clientHeight,d.clientHeight)>window.innerHeight?b={
w:Math.min(c.clientWidth,d.clientWidth,window.innerWidth),h:Math.min(c.clientHeight,d.clientHeight,window.innerHeight)
}:c===d?b={w:d.clientWidth,h:d.clientHeight}:isNumber(d.clientWidth)?b={w:d.clientWidth,
h:d.clientHeight}:isNumber(c.clientWidth)&&(b={w:c.clientWidth,h:c.clientHeight}),
b.dcw=document.clientWidth,b.dch=document.clientHeight,b.ecw=c.clientWidth,b.ech=c.clientHeight,
b.bcw=d.clientWidth,b.bch=d.clientHeight,b.ww=window.innerWidth,b.wh=window.innerHeight,
b}},EmbUtils.prototype.debugString=function(a,b){b=b||/.*/;var c="";for(var d in a)if(b.test(d)&&"function"!=typeof a[d])try{
c+="~"+d+":"+a[d]}catch(e){}return c},EmbUtils.prototype.addHandler=function(a,b,c){
var d=a[b],e=c;"function"==typeof old&&(e=function(){try{d()}catch(a){}try{c()}catch(a){}
}),a[b]=e},window.embDebugSession=EmbUtils.prototype.createDebugConsole=function(){
debugConsole.isDummy?(debugConsole={_consoleWindow:null,embInit:function(){if(!this._consoleWindow||this._consoleWindow.closed){
var a=this._consoleWindow=window.open("/mt.html","embDebugConsole","left=10,top=10,width=500,height=500,toolbar=no,location=no,scrollbars=yes,resizable=yes");
a.blur()}},_log:function(a){this.embInit();for(var b=0;b<a.length;++b){var c=this._consoleWindow.document,d=c.createElement("div");
d.appendChild(c.createTextNode(a[b])),c.body.appendChild(d)}},log:function(){this._log(arguments);
},debug:function(){this._log(arguments)},print:function(){this._log(arguments)}},
window.console=debugConsole):debugConsole.log("embDebugSession(): reuse existing console");
};var _embUtils,embUtils=window.embUtils=function(){return _embUtils||(_embUtils=new EmbUtils),
_embUtils},userAgent=navigator.userAgent.toLowerCase(),browser={version:(userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[])[1],
mozilla:/mozilla/.test(userAgent)&&!/(compatible|webkit)/.test(userAgent),safari:/webkit/.test(userAgent),
opera:/opera/.test(userAgent),msie:/msie/.test(userAgent)&&!/opera/.test(userAgent)
},styleFloat=browser.msie?"styleFloat":"cssFloat",boxModel=!browser.msie||"CSS1Compat"==document.compatMode,browserMapping;
browserMapping=browser.msie?{"class":".className","for":".htmlFor","float":".styleFloat",
cssFloat:".styleFloat",styleFloat:".styleFloat",readonly:"readOnly",maxlength:"maxLength",
cellspacing:"cellSpacing",style:".style.cssText"}:{"float":".cssFloat",cssFloat:".cssFloat",
styleFloat:".cssFloat"};var _isDomObj=function(a){return!!a.nodeType},_isString=function(a){
return"string"==typeof a},DOM={_flatten1:function(a){for(var b=void 0,c=0;c<a.length;++c){
var d=a[c];if(d&&d.length&&d[d.length-1]&&!_isDomObj(d)&&!_isString(d)){b=new Array;
break}}if(b){for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.length&&d[d.length-1])for(var e=0;e<d.length;++e)b[b.length]=d[e];else d&&(b[b.length]=d);
}return b}return a},_add:function(elem,args){args=this._flatten1(args);for(var i=0;i<args.length;++i){
var x=args[i],tx=typeof x;if("undefined"==tx||null==x);else if("object"==tx&&_isDomObj(x))elem.appendChild(x);else if("object"==tx)for(var z in x){
var y=browserMapping[z]||z;"."==y.substr(0,1)?-1<y.indexOf(".",1)?eval("elem"+y+"='"+x[z]+"';"):elem[y.substr(1)]=x[z]:"on"==y.substr(0,2)&&"function"==typeof x[z]?elem[y]=x[z]:elem.setAttribute(y,x[z]);
}else if("string"==tx){var tn=document.createTextNode(x);elem.appendChild(tn)}}},
_createElement:function(a,b){var c;if(b&&b.name&&!_isDomObj(b))try{c=document.createElement("<"+a+' name="'+b.name+'" >'),
c.name||(c=null)}catch(d){}return c||(c=document.createElement(a)),c},_make_tagfun:function(a){
this[a]=function(){var b=this._createElement(a,arguments[0]);return this._add(b,arguments),
b}},append2DOM:function(){for(var a=this._flatten1(arguments),b=a[0],c=1;c<a.length;++c)b&&b.appendChild(a[c]);
},set2DOM:function(){for(var a=this._flatten1(arguments),b=a[0];b.childNodes.length;)b.removeChild(b.childNodes[0]);
this.append2DOM(a)}};!function(){var a="a|p|div|span|ol|ul|li|dl|dt|dd|input|select|button|label|img|script|style|form|iframe".split("|");
for(var b in a)DOM._make_tagfun(a[b])}(),window.embUtils().dom=function(){return DOM;
},LayerGroup.prototype.equals=function(a){return a?this._element==a._element:!1},
EmbLayerManager.prototype.primitives={init:function(a){this.elem=x$(a),embUtils().addHandler(window,"onresize",updateLayerPositions),
embUtils().addHandler(window,"onscroll",updateLayerPositions)},n:0,newLayerGroup:function(){
var a=2001+this.n;this.n+=4;var b=DOM.div({"class":"embCoverLayer"});b.style.zIndex=a+1,
browser.msie&&0==browser.version.indexOf("6")?b.style.height=embUtils().fullHeight(window.document)-1+"px":(b.style.position="fixed",
b.style.top="0",b.style.bottom="0");var c=DOM.div({"class":"embDialogLayer"});c.style.display="none",
c.style.zIndex=a+2;var d=DOM.div({"class":"embLayerGroup",id:"embLayerGroup"},b,c);
return d.style.zIndex=a,DOM.append2DOM(this.elem,d),new LayerGroup(d)},currentLayerGroup:function(){
var a;return this.elem&&(a=this.elem.lastChild),a?new LayerGroup(a):void 0},removeLayerGroup:function(a){
this.elem.removeChild(a._element)}};var setSelectVisibility=function(a,b){if(b=b&&b._element||document,
browser.msie&&0==browser.version.indexOf("6")){a=a&&"visible"||"hidden",selects=b.getElementsByTagName("select");
for(var c=0;c<selects.length;c++)selects[c].style.visibility=a}},jsPattern=/^\s*javascript:([\w\W]*)$/,makeAction=function(a){
if(!a)return function(){};if("function"==typeof a)return a;var b=jsPattern.exec(a);
if(!b)return function(){window.location.href=a};try{return new Function(b[1])}catch(c){
return debugConsole.log(c+" in "+b[1]),function(){}}};EmbLayerManager.prototype.notifications={
_button:function(a,b,c){var d=b[a],e=d&&d.length>1&&d[1]?d[1]:embGetLayerManager().getText(a),c=d&&d.length>0&&d[0]?d[0]:c;
return c=makeAction(c),DOM.div({"class":"button"},DOM.a({href:"javascript:void(0);",
onclick:c},DOM.div(e)))},_ok_cancel_dialog:function(a,b,c,d,e,f,g){b||(b={}),c||(c=function(){
embGetLayerManager().closeLayer()});var h=null;if(f){var i=[],j=[],k={},l="lyopt"+Math.round(3456*Math.random());
for(var m in b.options){var n=b.options[m],o=l+"_"+m;i[m]=DOM.input({type:"radio",
name:l,id:o,".value":"v"+m}),j[m]=DOM.li(i[m],DOM.label({"for":o},n.text)),k[o]=makeAction(n.action);
}if(i.length){var p=DOM.form({name:"optionsForm",action:"#",method:"POST"},DOM.ul(j));
h=DOM.div({"class":"options"},p);var q=function(){for(var a in i){var b=i[a];if(b.checked)return k[b.id](),
!0}return!1};if(b.ok){var r=makeAction(b.ok[0]);b.ok[0]=function(){q()||r()}}else b.ok=[q];
}}var s=new Array;d&&(s[s.length]=this._button("ok",b,c)),e&&(s[s.length]=this._button("cancel",b,c));
var t=null;if(g){var u=[];for(var m in b.options){var n=b.options[m];u[u.length]=DOM.li(DOM.a({
href:n.href},n.text))}u.length&&(t=DOM.div({"class":"links"},DOM.ul(u)))}return[DOM.div({
"class":"content",".innerHTML":a}),t,h,DOM.div({"class":"buttons"},s)]},ok:function(a,b,c){
return this._ok_cancel_dialog(a,b,c,!0,!1,!1,!1)},ok_cancel:function(a,b,c){return this._ok_cancel_dialog(a,b,c,!0,!0,!1,!1);
},ok_cancel_options:function(a,b,c){return this._ok_cancel_dialog(a,b,c,b.ok,b.cancel,!0,!1);
},linklist:function(a,b,c){return this._ok_cancel_dialog(a,b,c,b.ok,b.cancel,!1,!0);
},progress:function(a,b,c){return[DOM.div({"class":"progress"},DOM.img({src:"/css/css_ng/layer/loadingAni.gif"
})),DOM.div({"class":"progressContent",".innerHTML":a})]}},EmbLayerManager.prototype.initDiv=function(){
document.write('<div id="embLayerCollection"></div>');var a=this;_addOnload(function(){
a.init()})},EmbLayerManager.prototype.init=function(a){a||(a="embLayerCollection"),
this.primitives.init(a)},EmbLayerManager.prototype.getText=function(a){var b=this._textMap[a];
return b||(b=a+' <span title="missing replacement text">*</span>'),b},EmbLayerManager.prototype.addTextMap=function(a){
for(i in a)this._textMap[i]=a[i]},EmbLayerManager.prototype.openProgress=function(a,b,c,d){
d=d||{},c&&(d.icon=c),this.openNotification("progress",b,d)},EmbLayerManager.prototype.closeProgress=function(){
this.closeLayer()},EmbLayerManager.prototype._createFrame=function(a,b,c,d,e){var f=void 0;
if(d){var g=this;d=makeAction(d);var h=function(){var a=g.primitives.currentLayerGroup();
return d(),a.equals(g.primitives.currentLayerGroup())&&g.closeLayer(),!1};theHref=location.href,
idx=theHref.indexOf("lyUrl"),-1!=idx&&(theHref=theHref.substr(0,idx-1));var i={"class":"close",
href:""+theHref,onclick:h};f=DOM.a(i)}var j=[];return j[j.length]=DOM.div({"class":"title"
},DOM.div({"class":"titleC"},DOM.div(c),f)),"string"==typeof b?j[j.length]=DOM.div({
"class":"contents"},DOM.div({"class":"contentsC",".innerHTML":b})):j[j.length]=DOM.div({
"class":"contents"},DOM.div({"class":"contentsC"},b,DOM.div({"class":"contentsE"}))),
j[j.length]=DOM.div({"class":"bottom"},DOM.div({"class":"bottomC"})),DOM.div(styleOptions(a,e),j);
};var dialogs=[];EmbLayerManager.prototype._setLayer=function(a,b,c,d,e,f){var g=a.dialogLayer,h=extractScripts(c);
DOM.set2DOM(g,this._createFrame(b,h.html,d,e,f)),g.style.display="block",browser.msie&&0==browser.version.indexOf("6")||(g.style.position="fixed"),
evalScripts(h.script),_add(dialogs,g),updateLayerPositions()};var closeHooks=[];EmbLayerManager.prototype.showLayer=function(a,b,c,d,e){
setSelectVisibility(!1,this.primitives.currentLayerGroup()),closeHooks[closeHooks.length]=null;
var f=this.primitives.newLayerGroup();this._setLayer(f,a,b,c,d,e)},EmbLayerManager.prototype.replaceLayer=function(a,b,c,d,e){
closeHooks[closeHooks.length-1]=null;var f=this.primitives.currentLayerGroup();this._setLayer(f,a,b,c,d,e);
},EmbLayerManager.prototype.setLayerCloseHook=function(a){"function"!=typeof a&&debugConsole.log("unsupported hook type in setLayerCloseHook: "+typeof a),
closeHooks[closeHooks.length-1]=a},EmbLayerManager.prototype.closeLayer=function(a){
var b=this.primitives.currentLayerGroup();if(b&&closeHooks[closeHooks.length-1]&&!a){
var c=closeHooks[closeHooks.length-1];closeHooks[closeHooks.length-1]=null,c()||(b=null);
}return b?(b.dialogLayer.style.display="none",this.primitives.removeLayerGroup(b),
setSelectVisibility(!0,this.primitives.currentLayerGroup()),dialogs&&dialogs.length>0&&_remove(dialogs,b.dialogLayer),
closeHooks.length=closeHooks.length-1,!0):!1},EmbLayerManager.prototype.openNotification=function(a,b,c){
c=c||{},this.notifications[a]||(a="ok",b=b+"\r\n\r\n(unknown notification style: "+a+")");
var d=this.notifications[a](b,c),e=null;c.closeAction&&(e=c.closeAction),!e&&c.cancel&&c.cancel[0]&&(e=c.cancel[0]),
!e&&"ok"==a&&c.ok&&c.ok[0]&&(e=c.ok[0]),this.showLayer("notification",d,c.title,e);
},EmbLayerManager.prototype._handleReadyStateChange=function(a){debugConsole.log("readystate: "+a);
},EmbLayerManager.prototype._handleData=function(a,b,c,d,e,f){if(a==AJAXConnector.SUCCID_LOAD){
var g=b;d==AJAXConnector.RESPONSE_TEXT&&(g=xmltext2dom(b)),this._processResponse(g,f);
}else debugConsole.log(e+" "+b),this.closeProgress(),this.openNotification("ok",this.getText("server_error"));
},EmbLayerManager.prototype._processResponse=function(doc,layerfun){var layer=doc.documentElement;
if(layer){var head=layer.getElementsByTagName("head"),body=layer.getElementsByTagName("body"),script=layer.getElementsByTagName("script"),redirected=!1,onload=layer.getElementsByTagName("onload");
if(onload)for(var i=0;i<onload.length;++i){var onloadFunction=unpackContents(onload[i]);
if(onloadFunction)try{eval(onloadFunction),redirected=!0}catch(exception){return this.closeProgress(),
void this.openNotification("ok",this.getText("server_error"))}}if(head&&1===head.length&&body&&1===body.length){
var bodyContents=body[0].childNodes,bcn=bodyContents[0].nodeName;"#cdata-section"==bcn&&(bodyContents=bodyContents[0].data);
var flashConstraint=head[0].getElementsByTagName("flash");if(flashConstraint[0]){
var flashMinVersion=flashConstraint[0].getAttribute("min_version"),isFlashAvailable=flash_versioncheck(flashMinVersion);
if(!isFlashAvailable)return this.closeProgress(),void this.openNotification("linklist",this.getText("multimedialayerfallbacktext"),{
closeAction:function(){},ok:[null,"close"],title:this.getText("multimedialayerfallbackwintitle"),
options:[{href:this.getText("multimedialayerfallbackextlink"),text:this.getText("multimedialayerfallbacklinktext")
}]})}var title=head[0].getElementsByTagName("title"),titleContents="";title&&1<=title.length&&(titleContents=unpackContents(title[0]));
var layout=head[0].getElementsByTagName("layout"),layoutContents="";layout&&1<=layout.length&&(layoutContents=unpackContents(layout[0]));
var width=head[0].getElementsByTagName("width"),widthContents=void 0;if(width&&1<=width.length)try{
widthContents=4+parseInt(unpackContents(width[0]))}catch(e){debugConsole.log("Not a valid width: "+e);
}var closeAction=head[0].getElementsByTagName("close-action"),closeActionContents="";
closeAction&&1<=closeAction.length&&(closeActionContents=unpackContents(closeAction[0]));
var styles=head[0].getElementsByTagName("style"),scripts=head[0].getElementsByTagName("script"),headRef=document.getElementsByTagName("head").item(0),fileref="",numStyles=styles.length;
for(styleIndex=0;styleIndex<numStyles;styleIndex++){var href=styles[styleIndex].firstChild.nodeValue;
0==jQuery('link[href="'+href+'"]').length&&(fileref=document.createElement("link"),
fileref.setAttribute("rel","stylesheet"),fileref.setAttribute("type","text/css"),
fileref.setAttribute("href",href),jQuery(fileref).load(function(){updateLayerPositions();
}),headRef.appendChild(fileref))}var numScripts=scripts.length;for(scriptIndex=0;scriptIndex<numScripts;scriptIndex++)fileref=document.createElement("script"),
fileref.setAttribute("type","text/javascript"),fileref.setAttribute("src",scripts[scriptIndex].firstChild.nodeValue),
headRef.appendChild(fileref);var forceNewLayer=!1;if(body&&body.length>0){var attr=body[0].getAttribute("forceNewLayer");
if(attr&&"true"==attr){var me=this;layerfun=function(a,b,c,d,e){me.showLayer(a,b,c,d,e);
}}}this.closeProgress(),layerfun(layoutContents,bodyContents,titleContents,closeActionContents,widthContents);
}else this.closeProgress(),redirected||this.openNotification("ok","<div>Got bad response: "+doc+"</div>");
}},EmbLayerManager.prototype._loadLayer=function(a,b,c){c=c||{};var d=new AJAXConnector,e=typeof b,f=this;
if("string"!=e)throw new LayeringException("Illegal argument: source must be string, not '"+e+"'");
c.silentLoading||d.registerProgressHandler(function(a){f._handleReadyStateChange(a);
}),d.registerDataHandler(function(b,c,d,e,g){f._handleData(b,c,d,e,g,a)});var g=AJAXConnector.REQUEST_GET,h="";
if(c.method)if("POST"==c.method||"post"==c.method){g=AJAXConnector.REQUEST_POST;var j=typeof c.vars;
if("object"==j){h="";for(i in c.vars)h+=i,h+="=",h+=encodeURIComponent(c.vars[i]),
h+="&"}else"string"==j?h=encodeURI(c.vars):debugConsole.log("unexpected type in props.vars: "+j);
var k=document.characterSet||"utf-8";c.headers=c.headers||{},c.headers["Content-Type"]="application/x-www-form-urlencoded;charset="+k;
}else("HEAD"==c.method||"head"==c.method)&&(g=AJAXConnector.REQUEST_HEAD);if(c.bp&&(c.headers=c.headers||{},
c.bu=c.bu||window.location.href,c.headers["X-Bypass-Path"]=c.bp,c.headers["X-Base-Url"]=c.bu,
0==c.bu.indexOf("https://")&&(c.headers["X-Other-Protocol"]=c.bu),c.be&&(c.headers["X-Bypass-Encoding"]=c.be)),
!c.silentLoading){var l=c.progressMsg||this.getText("loading");this.openProgress("",l,"",c);
}d.sendRequest(encodeURI(b),h,g,null,c.headers)},EmbLayerManager.prototype.loadNewLayer=function(a,b){
var c=this;return this._loadLayer(function(a,b,d,e,f){c.showLayer(a,b,d,e,f)},a,b);
},EmbLayerManager.prototype.loadIntoLayer=function(a,b){var c=this;return this._loadLayer(function(a,b,d,e,f){
c.replaceLayer(a,b,d,e,f)},a,b)},EmbLayerManager.prototype.maybeOpenNamedLayer=function(a){
debugConsole.log("maybeOpenNamedLayer"+a);var b=this,c=function(){window.setTimeout(function(){
b.openNamedLayer(a)},200)};_addOnload(c)},EmbLayerManager.prototype.openNamedLayer=function(a){
debugConsole.log("openNamedLayer"+a);var b=getLocationHash(location);if(b&&0==b.indexOf("#layer_")){
b=b.substr(1);var c="",d=b.indexOf("?");d&&-1!=d&&(c=b.substring(d),b=b.substring(0,d));
var e=null,f=null,g=a[b];if(!g)for(k in a)if(0==k.indexOf(b)){g=a[k];break}if(g||(g=getLocationHash(location).substring("#layer_".length).split("|")),
g&&2<=g.length&&(e=g[0],f=g[1]),c&&e&&(e+=-1==e.indexOf("?")?c:"&"+c.substring(1)),
e){debugConsole.log("Opening layer: "+e+" "+f);var h=new Array;h.bp=f,window.embGetLayerManager().loadNewLayer(e,h);
}}},EmbLayerManager.prototype.setUrlWithNamedLayer=function(a,b,c,d,e){var f=window.location.href;
if(c&&c.length>0&&0==!f.indexOf(c)){var g=f.indexOf("://");g=f.indexOf("/",g+3),f=c+f.substring(g);
}var h=-1;if(d&&d.length>0)for("string"==typeof d&&(d=[d]),h=findIndexOfFileextension(f),
i=0;i<d.length;i++){var j=d[i];"."!=j.charAt(0)&&(j="."+j),"."==j.charAt(j.length-1)&&(j=j.substring(0,j.length-1));
var k=f.indexOf(j+".");-1!=k&&h>k||(f=f.substring(0,h)+j+f.substring(h),h+=j.length);
}if(e&&e.length>0)for("string"==typeof e&&(e=[e]),-1==h&&(h=findIndexOfFileextension(f)),
i=0;i<e.length;i++){var j=e[i];"."!=j.charAt(0)&&(j="."+j);var k=f.indexOf(j+".");
-1!=k&&k<=h-j.length&&(f=f.substring(0,k)+f.substring(k+j.length,f.length))}0==!b.indexOf("#")&&(b="#"+b);
var l=f.indexOf("#");-1!=l&&(f=f.substring(0,l)),f+=b;var m=!1,n=f.substring(0,f.indexOf("#")),o=window.location.href,k=o.indexOf("#");
-1!=k&&(o=o.substring(0,k)),o==n&&(m=!0),window.location.href=f,m&&window.embGetLayerManager().openNamedLayer(a);
};var findIndexOfFileextension=function(a){var b=a.indexOf("?");return-1==b&&(b=a.indexOf("#")),
-1==b&&(b=a.length),a.lastIndexOf(".",b)},getLocationHash=function(a){var b=a.hash,c=a.href.indexOf(b);
return-1!=c&&c+b.length<a.href.length&&(b=a.href.substring(c)),decodeURI(b)}}(),function(){
function a(){function a(a){return void 0==a||null==a?"":a}function b(b,c){if(c=a(c),
!b||""==b||""==c)return c;var d=b;return 0!=c.indexOf("/")&&b.lastIndexOf("/")!=b.length-1&&(d+="/"),
d+=c}function c(a){return b(g.crmServiceBypass,a)}var d=[],e=[];this.MODEL_COOKIE="model",
this.PROFILE_REF_COOKIE="_pr",this.CMA_PROFILES_COOKIE="cma_profiles",this.COOKIE_LAST_CC_BM_CODE="lastCCBmCode";
var f=new Object,g=new Object,h=!1;this.PROFILE_REF_COOKIE_VALUE=get_cookie(this.PROFILE_REF_COOKIE),
this.CMA_PROFILES_COOKIE_VALUE=get_cookie(this.CMA_PROFILES_COOKIE),this.secureHost="",
this.signonHandle="",this.locale="",f.isLoggedIn=!1,f.isSoftLoggedIn=!1,this.addUpdateCallback=function(a,b){
if(a){var c=b?e:d;c[c.length]=a,!b&&h&&a()}},this.removeUpdateCallback=function(a){
d.remove(a),e.remove(a)},this.updateCallbacks=function(){for(var a in d)try{d[a]();
}catch(b){}for(var a in e)try{e[a]()}catch(b){}e=[]},this.updateProfile=function(a){
var b;if(b=get_cookie(this.PROFILE_REF_COOKIE),b&&(this.PROFILE_REF_COOKIE_VALUE=b),
b=get_cookie(this.CMA_PROFILES_COOKIE),b&&(this.CMA_PROFILES_COOKIE_VALUE=b),this.PROFILE_REF_COOKIE_VALUE&&this.secureHost&&this.signonHandle&&this.locale){
this.addUpdateCallback(a,!0);var c=document.createElement("script"),d=document.createAttribute("src");
d.nodeValue=this.secureHost+this.signonHandle+".profiledata."+this.PROFILE_REF_COOKIE_VALUE+".js?locale="+this.locale,
c.setAttributeNode(d),document.getElementsByTagName("head")[0].appendChild(c)}},this.setUserData=function(a){
f=a,h=!0,this.updateCallbacks()},this.setMetaData=function(a){g=a},this.fixNumberFormatting=function(a){
var b=a,c=a.lastIndexOf("."),d=a.lastIndexOf(",");return c>d&&(b=b.replace(",","."),
b=b.substring(0,c)+","+b.substring(c+1,b.length)),b},this.getUserId=function(){return f.userId;
},this.isLoggedIn=function(){return f.isLoggedIn&&!f.isSoftLoggedIn?!0:!1},this.isSoftLoggedIn=function(){
return f.isLoggedIn&&f.isSoftLoggedIn?!0:!1},this.hasFavorite=function(){return f&&f.favoriteName?!0:!1;
},this.isUnregistered=function(){return f.isLoggedIn||f.isSoftLoggedIn?!1:!0},this.getFirstName=function(){
return a(f.firstName)},this.getSecondFirstName=function(){return a(f.secondFirstName);
},this.getLastName=function(){return a(f.lastName)},this.getSecondLastName=function(){
return a(f.secondLastName)},this.getTitle=function(){return a(f.title)},this.getSalutation=function(){
return a(f.salutation)},this.getDealerName1=function(){return a(f.dealerName1)},this.getDealerName2=function(){
return a(f.dealerName2)},this.getDealerStreet=function(){return a(f.dealerStreet);
},this.getDealerZIP=function(){return a(f.dealerZIP)},this.getDealerCity=function(){
return a(f.dealerCity)},this.getZipCode=function(){return a(f.zipCode)},this.getBirthday=function(){
return a(f.birthday)},this.getFavoriteName=function(){return a(f.favoriteName)},this.getVehicles=function(){
return a(f.Vehicles)},this.getConfiguredBmCode=function(){return a(f.configuredBmCode);
},this.getFavoriteBmCode=function(){return a(f.favoriteBmCode)},this.getFavoritePrice=function(){
return this.fixNumberFormatting(a(f.favoritePrice))},this.getFavoriteCurrency=function(){
return a(f.favoriteCurrency)},this.getFavoriteRate=function(){return""},this.getFavoriteDate=function(){
return a(f.favoriteDate)},this.getConfiguredVehiclesCount=function(){return a(f.configuredVehiclesCount);
},this.getOwnedVehiclesCount=function(){return a(f.ownedVehiclesCount)},this.getOwnedMainVehicleByCustomer=function(){
return a(f.ownedMainVehicleByCustomer)},this.getOwnedMainVehicleName=function(){return a(f.ownedMainVehicleName);
},this.getOwnedMainVehicleBmCode=function(){return a(f.ownedMainVehicleBmCode)},this.getSingleOwnedVehicleName=function(){
return f.singleOwnedVehicleName},this.getSingleOwnedVehicleBmCode=function(){return a(f.singleOwnedVehicleBmCode);
},this.getSingleOwnedVehicleImgSmallUrl=function(){var a=c(f.singleOwnedVehicleImgSmallUrl);
return a},this.getSingleConfiguredVehicleName=function(){return a(f.singleConfiguredVehicleName);
},this.getSingleConfiguredVehicleBmCode=function(){return a(f.singleConfiguredVehicleBmCode);
},this.getSingleConfiguredVehicleImgSmallUrl=function(){var a=c(f.singleConfiguredVehicleImgSmallUrl);
return a},this.getOwnedMainVehicleImgSmallUrl=function(){var a=c(f.ownedMainVehicleImgSmallUrl);
return a},this.getStageImageUrl=function(){var a=c(f.stageImageUrl);return a},this.getFavoritePriceLabel=function(){
return void 0==f.favoritePriceLabel||null==f.favoritePriceLabel?"":f.favoritePriceLabel;
},this.getFavoriteRateLabel=function(){return""},this.getConfigurationBmCode=function(){
return get_cookie(get_cookie(this.COOKIE_LAST_CC_BM_CODE)?this.COOKIE_LAST_CC_BM_CODE:this.MODEL_COOKIE);
},this.getFavoriteImgSmallUrl=function(){var a=c(f.favoriteImgSmallUrl);return a},
this.getFavoriteImgLargeUrl=function(){var a=c(f.favoriteImgLargeUrl);return a},this.getCCiUrl=function(){
return"/cci"},this.getSavedVehiclesUrl=function(){return"/saved_vehicles"},this.getVehicleInterestBmCode=function(){
return get_cookie(this.MODEL)},this.getGroups=function(){var b=a(f.groups);return b[0];
},this.getFlGroups=function(){var b=a(f.flgroups);return b[0]},this.getWPCampaignCodes=function(){
var b=a(f.wpcampaignCodes);return b[0]},this.getCampaignCodes=function(){var b=a(f.campaignCodes);
return b[0]},this.getBusinessUnitType=function(){var b=a(f.businessUnitType);return b;
},this.isBusinessUnitCar=function(){var a=!1,b=this.getBusinessUnitType();return"PassengerCar"===b&&(a=!0),
a},this.isBusinessUnitVan=function(){var a=!1,b=this.getBusinessUnitType();return"PrivateVan"===b&&(a=!0),
a},this.loadData=function(a,b,c,d){if(this.addUpdateCallback(d),this.secureHost=a,
this.signonHandle=b,this.locale=c,this.PROFILE_REF_COOKIE_VALUE=get_cookie(this.PROFILE_REF_COOKIE),
this.CMA_PROFILES_COOKIE_VALUE=get_cookie(this.CMA_PROFILES_COOKIE),this.PROFILE_REF_COOKIE_VALUE&&"null"!=this.PROFILE_REF_COOKIE_VALUE){
var e=this.secureHost+this.signonHandle+".profiledata."+this.PROFILE_REF_COOKIE_VALUE+".js?locale="+this.locale,f="<script src='"+e+"' type='text/javascript'></script>";
document.write(f)}}}var b=new a;window.embGetProfileManager=function(){return b}}(),
function(a){var b=function(a,b){a.is("SPAN")?a.html(b):a.is("IMG")?(a.attr("src",b),
a.show()):a.hasClass("apply_salutation_template")&&a.html(b)},c={keepSelectors:!0,
contentMappings:{set_favorite_name:function(){return embGetProfileManager().getFavoriteName();
},set_favorite_date:function(){return embGetProfileManager().getFavoriteDate()},set_favorite_price:function(){
return embGetProfileManager().getFavoritePrice()},set_favorite_price_label:function(){
return embGetProfileManager().getFavoritePriceLabel()},set_favorite_currency:function(){
return embGetProfileManager().getFavoriteCurrency()},set_favorite_small_img:function(){
return embGetProfileManager().getFavoriteImgSmallUrl()},apply_salutation_template:function(){
var b=a(".apply_salutation_template").html().toString(),c=embGetProfileManager();return b=b.replace(/%a/g,c.getSalutation()).replace(/%t/g,c.getTitle()).replace(/%f/g,c.getFirstName()).replace(/%m/g,c.getSecondFirstName()).replace(/%l/g,c.getLastName()).replace(/%s/g,c.getSecondLastName());
}},log:LOG,log_err:LOG_ERR};a.hideInvalidLogInStates=function(b){var c=a.extend({},a.hideInvalidLogInStates.defaults,b),d=a();
if("function"!=typeof c.hidden||"function"!=typeof c.visible)return c.log_err("userProfileDataDisplayer#hideInvalidLogInStates: The options 'hidden' and 'visible' are required to be functions."),
d;var e=c.hidden();c.log("userProfileDataDisplayer#hideInvalidLogInStates: Will hide elements with this selector: "+e);
var f=c.visible();return c.log("userProfileDataDisplayer#hideInvalidLogInStates: Will show elements with this selector: "+f),
d.add(a(e).hide()),d.add(a(f).show()),d},a.hideInvalidLogInStates.defaults={visible:function(){
return""},hidden:function(){return""},log:c.log,log_err:c.log_err},a.fn.displayUserData=function(c){
var d=this.selector;return this.each(function(e){var f=a.extend({},a.fn.displayUserData.defaults,c),g=a(this),h=null,i=d.slice(1);
return f.log("userProfileDataDisplayer#displayUserData: selector: "+d),h=f.globalOpts.contentMappings[i],
"function"==typeof h&&(f.log("userProfileDataDisplayer#displayUserData: replacementCursor is a function"),
h=h()),"string"==typeof h?(f.log("userProfileDataDisplayer#displayUserData: "+h),
b(g,h)):h?f.log_err("userProfileDataDisplayer#displayUserData: As replacement object only functions returning strings or literal strings are permitted."):f.log("userProfileDataDisplayer#displayUserData: replacementCursor is null, false or undefined."),
f.keepSelector?g:g.removeClass(i)})},a.fn.displayUserData.defaults={keepSelector:!1,
globalOpts:c,log:c.log,log_err:c.log_err},a.globallyDisplayUserData=function(b){var c=a(),d=a.extend(!0,{},a.globallyDisplayUserData.defaults,b),e=null;
for(var f in d.contentMappings)d.log("userProfileDataDisplayer#globallyDisplayUserData: key: "+f),
e=a("."+f).displayUserData({keepSelector:d.keepSelectors,globalOpts:d}),c=c.add(e);
return c},a.globallyDisplayUserData.defaults=c}(jQuery),function(a){var b=new Array;
a.ngrbInitReady=function(a){b[b.length]=a},a.ngrbFireInitReady=function(){for(var a=b.length,c=0;a>c;c++)try{
b[c]()}catch(d){(console.error||console.log).call(console,d.stack||d)}}}(jQuery),
jQuery(window).load(function(){if(jQuery(".ms-rb-isShowMode").length>0||jQuery(".ms-rb-isEditMode").length>0||(jQuery("#ms-header, #ms-mainnav, #ms-rb-modelSelBarContainer").addClass("page-ready"),
jQuery("#ms-website").delay(500).addClass("page-ready"),jQuery("#ms-footer, .ms-rb-footer").addClass("page-ready"),
window.msMetaInfo.isRebrush&&jQuery("#ms-mainnav").hide()),jQuery("#ms-rb-carouselButtonList li").click(function(a){
a.preventDefault();var b=this.id.charAt(20);jQuery("#ms-rb-carouselImageList ul").hide(),
jQuery("#content_"+b).show(),jQuery("#ms-rb-carouselButtonList ul a").removeClass("ms-active"),
jQuery("#ms-rb-carouselButtonList #ms-rb-carouselButton"+b+" a").addClass("ms-active");
}),jQuery("#ms-page-pms-flash, #ms-page-pms-html").length>0){var a=35;jQuery(".ms-rb-isEditMode").length>0&&(a=63);
var b=jQuery("#ms-stage").height(),c=b-a;jQuery("#pcnContainer, #pcnContainerFlash, #ms-pcn").length>0&&jQuery("#ms-f-left-2").css("margin-top","-"+c+"px");
}jQuery("ul.ms-rb-modelFlyoutBackgroundsList img").each(function(a){var b=this.getAttribute("data-src");
b&&this.setAttribute("src",b)}),jQuery.ngrbFireInitReady()}),AJAXConnector.REQUEST_GET=0,
AJAXConnector.REQUEST_POST=2,AJAXConnector.REQUEST_HEAD=1,AJAXConnector.RESPONSE_XML=1,
AJAXConnector.RESPONSE_TEXT=2,AJAXConnector.SUCCID_LOAD=0,AJAXConnector.ERRID_LOAD=1,
AJAXConnector.ERRID_NOHANDLER=2,AJAXConnector.ERRID_SEND=3,AJAXConnector.ERRID_TIMEOUT=4;
var DynamicSubnavigation=function(a){this.flyoutId=a,this.subnavItems=new Array,this.addItem=function(a,c,d,e){
var f=d.split(",");for(bmcodeId in f){var g=jQuery.trim(f[bmcodeId]);subnavItem=new b(a,c,g,e),
this.subnavItems.push(subnavItem)}},this.updateNavigation=function(){var a=jQuery("#"+this.flyoutId).find("span[class^='bmcode']");
LOG("DynamicSubnavigation#updateNavigation: Updating flyout with this html id: #"+this.flyoutId);
for(var b=this.subnavItems,c=0;c<a.length;c++){var d=jQuery(a[c]);if(d.length>0){
var e=d.attr("class").substring("bmcode".length);for(var f in b)if(0==e.indexOf(b[f].bmcode)||""==b[f].bmcode){
var g=b[f].isActive(c)?"<li><a class='ms-active' href=\"":'<li><a href="';g+=b[f].href.replace(/(\.\w+)$/,".dynav"+c+"$1"),
g+='">'+b[f].title+"</a></li>",g="LI"==d.parent().get(0).tagName?d.parent().after(g):d.before(g),
b[f].isActive(c)&&(LOG("DynamicSubnavigation#updateNavigation: Found active item. Title: "+b[f].title+", href: "+b[f].href),
jQuery("#"+this.flyoutId+" p a").addClass("ms-active"),g.parents("li").children("a").addClass("ms-active"),
g.parents(".ms93-sn-fly-v1-2").removeClass("ms93-sn-fly-v1-l2-inactive").addClass("ms93-sn-fly-v1-l2-active"),
g.parents(".ms93-sn-fly-v1-1").removeClass("ms93-sn-fly-v1-l1-inactive").addClass("ms93-sn-fly-v1-l1-active"));
}}}var h=stripUrlToHandle(jQuery("#"+this.flyoutId).find("p[class^='ms93-sn-button']").children("a").attr("href")),i=stripUrlToHandle(document.location.pathname);
0==i.indexOf(h)&&jQuery("#"+this.flyoutId).find(".ms93-sn-fly-v1-1").removeClass("ms93-sn-fly-v1-l1-inactive").addClass("ms93-sn-fly-v1-l1-active");
};var b=function(a,b,c,d){this.title=a,this.href=b,this.bmcode=c,this.active=d,this.isActive=function(a){
var b=window.location.href.match(/\.dynav([^\.]+)\..+$/),c=null;return b&&(c=b[1]),
c?this.active&&c==a?!0:!1:this.active?!0:!1}}};Flyout2Bean.COMPONENT_ID="/apps/emb/ComponentsNG/corenavigation2",
Flyout2Bean.BORDER_TAG="border",Flyout2Bean.LIST_TAG="list",Flyout2Bean.ITEM_TAG="item",
Flyout2Bean.HEADLINE_TAG="heading",Flyout2Bean.PARAGRAPH_TAG="paragraph",Flyout2Bean.REFERENCE_TAG="reference",
Flyout2Bean.MEDIA_TAG="media",Flyout2Bean.IMAGE_TAG="image",MSFlyout.TYPE_CORENAV1=1,
MSFlyout.TYPE_CORENAV2=2,MSFlyout.TYPE_PCN_BUTTON=3,MSFlyout.TYPE_PCN_MENU=4,MSFlyout.TYPE_METANAVLOGIN=5,
MSFlyout.TYPE_METANAVRSI=6,MSFlyout.TYPE_PCN_BUTTON_2=3,MSFlyout.TYPE_PCN_BUTTON_3=3,
MSFlyout.ACTIVATION_TIMEOUT=new Array,MSFlyout.ACTIVATION_TIMEOUT[MSFlyout.TYPE_CORENAV1]=200,
MSFlyout.ACTIVATION_TIMEOUT[MSFlyout.TYPE_CORENAV2]=500,MSFlyout.ACTIVATION_TIMEOUT[MSFlyout.TYPE_PCN_BUTTON]=100,
MSFlyout.ACTIVATION_TIMEOUT[MSFlyout.TYPE_PCN_BUTTON_2]=100,MSFlyout.ACTIVATION_TIMEOUT[MSFlyout.TYPE_PCN_BUTTON_3]=100,
MSFlyout.ACTIVATION_TIMEOUT[MSFlyout.TYPE_PCN_MENU]=50,MSFlyout.ACTIVATION_TIMEOUT[MSFlyout.TYPE_METANAVLOGIN]=250,
MSFlyout.ACTIVATION_TIMEOUT[MSFlyout.TYPE_METANAVRSI]=250,MSFlyout.DEACTIVATION_TIMEOUT=new Array,
MSFlyout.DEACTIVATION_TIMEOUT[MSFlyout.TYPE_CORENAV1]=200,MSFlyout.DEACTIVATION_TIMEOUT[MSFlyout.TYPE_CORENAV2]=200,
MSFlyout.DEACTIVATION_TIMEOUT[MSFlyout.TYPE_PCN_BUTTON]=100,MSFlyout.DEACTIVATION_TIMEOUT[MSFlyout.TYPE_PCN_BUTTON_2]=100,
MSFlyout.DEACTIVATION_TIMEOUT[MSFlyout.TYPE_PCN_BUTTON_3]=100,MSFlyout.DEACTIVATION_TIMEOUT[MSFlyout.TYPE_PCN_MENU]=50,
MSFlyout.DEACTIVATION_TIMEOUT[MSFlyout.TYPE_METANAVLOGIN]=200,MSFlyout.DEACTIVATION_TIMEOUT[MSFlyout.TYPE_METANAVRSI]=200,
MSFlyout.CSS_CLASS_ACTIVE="ms-active",MSFlyout.CSS_CLASS_HOVER="ms-fly-hover",MSFlyout.flyouts=new Array,
MSFlyout.openFlyout=new Array,MSFlyout.changeTimeout=new Array,MSFlyout.closeTimeout=new Array,
MSFlyout.change=function(a,b){LOG("MSFlyout in change():  type: "+b+"   id: "+a),
MSFlyout.openFlyout[b]&&MSFlyout.openFlyout[b].handleDeactivate(),MSFlyout.flyouts[b][a]&&MSFlyout.flyouts[b][a].handleActivate();
},MSFlyout.closeAll=function(a){for(var b in MSFlyout.flyouts[a])MSFlyout.flyouts[a][b].active&&MSFlyout.flyouts[a][b].handleDeactivate();
LOG("MSFlyout in CloseAll():  type: "+a),MSFlyout.openFlyout[a]=void 0},MSFlyout.pushClass=function(a,b){
var c=getClassName(a);return-1==c.indexOf(b)&&(c+=" "+b),setClass(a,c),!0},MSFlyout.pushClassMN=function(a){
a.style.display="block"},MSFlyout.popClass=function(a,b){var c=getClassName(a),d=c.indexOf(b);
-1!=d&&(c=d+b.length<c.length?c.substring(0,d)+c.substring(d+b.length):c.substring(0,d)),
setClass(a,c)},MSFlyout.popClassMN=function(a){a.style.display="none"},MSFlyout.readInnerFlyoutListMarginBottom=function(a){
var b=jQuery(a).find("ul"),c=b.css("margin-bottom");try{return c=c.replace("px",""),
c=Number(c),LOG("MSFlyout#readInnerFlyoutListMarginBottom: ",c),c}catch(d){LOG_ERR("MSFlyout#readInnerFlyoutListMarginBottom: Failed!",d);
}return LOG("MSFlyout#readInnerFlyoutListMarginBottom#returnValue (default): 0"),
0},MSFlyout.prototype.activate=function(a){LOG("MSFlyout in activate(): flyout id:"+this.id),
clearTimeout(MSFlyout.changeTimeout[this.type]),clearTimeout(MSFlyout.closeTimeout[this.type]);
for(var b in MSFlyout.openFlyout){var c=!0;switch(this.type){case MSFlyout.TYPE_CORENAV1:
case MSFlyout.TYPE_CORENAV2:c=b!=MSFlyout.TYPE_CORENAV1&&b!=MSFlyout.TYPE_CORENAV2;
break;case MSFlyout.TYPE_PCN_BUTTON:case MSFlyout.TYPE_PCN_BUTTON_2:case MSFlyout.TYPE_PCN_BUTTON_3:
case MSFlyout.TYPE_PCN_MENU:c=b!=MSFlyout.TYPE_PCN_BUTTON&&b!=MSFlyout.TYPE_PCN_BUTTON_2&&b!=MSFlyout.TYPE_PCN_BUTTON_3&&b!=MSFlyout.TYPE_PCN_MENU;
break;case MSFlyout.TYPE_METANAVLOGIN:break;case MSFlyout.TYPE_METANAVRSI:}c&&MSFlyout.openFlyout[b]&&b!=this.type&&(LOG("MSFlyout call CloseAll(): flyout id:"+this.id+",   isIndependend: "+c+",  type: "+b+",   This type: "+this.type),
MSFlyout.closeAll(b))}void 0==MSFlyout.openFlyout[this.type]?(LOG("MSFlyout: This type: "+this.type+"     call handleActivate() in activate"),
this.handleActivate()):MSFlyout.openFlyout[this.type]!=this&&(LOG("MSFlyout: This type: "+this.type+"    setTimeout->change() in activate"),
MSFlyout.changeTimeout[this.type]=setTimeout('MSFlyout.change("'+this.id+'", "'+this.type+'")',MSFlyout.ACTIVATION_TIMEOUT[this.type]));
},MSFlyout.prototype.handleActivate=function(){if(this.type==MSFlyout.TYPE_CORENAV2){
var a=this.id.split("@"),b=a[0],c=a[1];ms_corenav_loadFlyoutData(b,c)}else ms_setIFrameHeight(this.flyout.id);
if(this.type==MSFlyout.TYPE_METANAVLOGIN?(this.active=!0,MSFlyout.pushClassMN(this.flyout)):(this.active=!0,
MSFlyout.pushClass(this.flyout,MSFlyout.CSS_CLASS_HOVER)),MSFlyout.openFlyout[this.type]=this,
LOG("MSFlyout in handleActivate():  type: "+this.type+"   id: "+this.id),(this.type==MSFlyout.TYPE_PCN_BUTTON||this.type==MSFlyout.TYPE_PCN_BUTTON_2||this.type==MSFlyout.TYPE_PCN_BUTTON_3||this.type==MSFlyout.TYPE_PCN_MENU)&&this.flyout&&this.flyout.getElementsByTagName("div")&&this.flyout.getElementsByTagName("div").length>0){
var d=document.all&&!window.opera,e=0,f=this.flyout.getElementsByTagName("div")[0];
if(f.lastChild&&f.lastChild.childNodes.length>0)for(var g=f.lastChild.childNodes,h=0;h<g.length;h++)"LI"==g[h].nodeName&&(e+=g[h].offsetHeight);
var i=getAbsTop(this.flyout);try{var j=getLayer("ms-footer").offsetHeight}catch(k){}
if(d)var l=document.documentElement.clientHeight-j,m=document.documentElement.scrollTop;else var l=window.innerHeight-j,m=window.pageYOffset;
var n=i+e-m;n>l?(f.style.bottom="0px",f.style.top="auto",d&&getIEVersion()>0&&getIEVersion()<7&&this.flyout&&(this.flyout.style.height=this.flyout.offsetHeight+"px")):d?(f.style.removeAttribute("bottom",!1),
f.style.removeAttribute("position",!1),f.style.removeAttribute("top",!1)):(f.style.bottom="",
f.style.position="",f.style.top="")}"undefined"!=typeof msMetaInfo&&msMetaInfo.isRebrush&&this.adjustFlyoutTopPositionToViewPort();
},MSFlyout.prototype.adjustFlyoutTopPositionToViewPort=function(){LOG("MSFlyout.adjustFlyoutTopPositionToViewPort: called for id: "+this.flyout.id);
try{if("undefined"==typeof msMetaInfo||!msMetaInfo.isRebrush)throw"MSFlyout.adjustFlyoutTopPositionToViewPort() was called, which is used on rebrush pages only.";
var a=jQuery(this.flyout),b=a.find("div").first(),c=b.hasClass("ms93-sn-fly-v1-l1-inactive");
if(b.hasClass("ms93-sn-fly-v1-l1-active")||b.hasClass("ms93-sn-fly-v1-l2-active"))return void LOG("MSFlyout.adjustFlyoutTopPositionToViewPort: Repositioning stopped. Not in flyout state.");
var d=a.offset().top,e=d+a.outerHeight();LOG("MSFlyout.adjustFlyoutTopPositionToViewPort: menuItemTop: "+d),
LOG("MSFlyout.adjustFlyoutTopPositionToViewPort: menuItemBottom: "+e);var f=b.height();
LOG("MSFlyout.adjustFlyoutTopPositionToViewPort: menuItemFlyoutHeight: "+f),document.all&&!window.opera&&getIEVersion()>0&&getIEVersion()<=7&&this.flyout&&(f-=4,
b.height(f),LOG("IE7: menuItemFlyoutHeight corrected to: "+b.height()));var g=jQuery(window).scrollTop(),h=jQuery(window).height();
if(d+f>g+h){LOG("MSFlyout.adjustFlyoutTopPositionToViewPort: will adjust position");
var i=jQuery("#ms-website").offset().top,j=c?b.position().top:0,k=MSFlyout.readInnerFlyoutListMarginBottom(b),l=e+k+j-f,m=Math.max(i,l);
LOG("MSFlyout.adjustFlyoutTopPositionToViewPort: menuItemFlyoutTop: "+m),b.offset({
top:m})}}catch(n){LOG_ERR("MSFlyout.adjustFlyoutTopPositionToViewPort failed",n)}
},MSFlyout.prototype.deactivate=function(a){LOG("MSFlyout in deactivate() set CloseAll: flyout id:"+this.id+",   This type: "+this.type),
MSFlyout.closeTimeout[this.type]=setTimeout('MSFlyout.closeAll("'+this.type+'")',MSFlyout.DEACTIVATION_TIMEOUT[this.type]);
},MSFlyout.prototype.handleDeactivate=function(){LOG("MSFlyout in handleDeactivate(): flyout id:"+this.id+",   This type: "+this.type),
this.type!=MSFlyout.TYPE_METANAVLOGIN||overMsNaviMeta||hasInputFocus?(this.active=!1,
MSFlyout.popClass(this.flyout,MSFlyout.CSS_CLASS_HOVER)):(this.active=!1,MSFlyout.popClassMN(this.flyout));
},MSFlyoutTruck.prototype=new MSFlyout,MSFlyoutTruck.TYPE_CORENAV1=MSFlyout.TYPE_CORENAV1,
MSFlyout.ACTIVATION_TIMEOUT[MSFlyout.TYPE_CORENAV1]=250,LOG("MSFlyoutTruck: MSFlyout.ACTIVATION_TIMEOUT: "+MSFlyout.ACTIVATION_TIMEOUT[MSFlyout.TYPE_CORENAV1]),
MSFlyout.DEACTIVATION_TIMEOUT[MSFlyout.TYPE_CORENAV1]=2e3,LOG("MSFlyoutTruck: MSFlyout.DEACTIVATION_TIMEOUT: "+MSFlyout.DEACTIVATION_TIMEOUT[MSFlyout.TYPE_CORENAV1]),
MSFlyoutTruck.Z_DELTA=1,MSFlyoutTruck.Z=40,MSFlyoutTruck.$selected=void 0,MSFlyoutTruck.$getCoreNav1Containers=function(){
return jQuery("#ms-navi-main").find('[id*="ms-corenav"]')},MSFlyoutTruck.prototype.handleActivate=function(){
MSFlyout.prototype.handleActivate.apply(this),this.$me.find("div").css("display","block");
},MSFlyoutTruck.prototype.handleDeactivate=function(){MSFlyout.prototype.handleDeactivate.apply(this);
var a=this.$me.attr("id");if(MSFlyoutTruck.$selected){var b=MSFlyoutTruck.$selected.attr("id");
if(LOG("MSFlyoutTruck#handleDeactivate (id: "+a+"): Selected flyout found: "+b),b==a)return void LOG("MSFlyoutTruck#handleDeactivate (id: "+a+"): The selected item will not be hidden.");
MSFlyoutTruck.$selected.find("div").css("display","block")}LOG("MSFlyoutTruck#handleDeactivate (id: "+a+"): Hiding the flyout."),
this.$me.find("div").css("display","none")},MSFlyoutTruck.prototype.identifyPermanentFlyout=function(a){
var b=this.$me,c=this;result=jQuery(function(){var d=MSFlyoutTruck.Z,e=function(){
d=MSFlyoutTruck.Z-MSFlyoutTruck.Z_DELTA,MSFlyoutTruck.$selected=b,MSFlyout.openFlyout[c.type]=c;
var e=new Object;e.currentTarget=b[0],LOG("MSFlyoutTruck: dummyEvent.currentTarget (id: "+a+"): "+e.currentTarget),
c.highlightActive(e)},f=stripUrlToHandle(location.pathname);LOG("MSFlyoutTruck#isThisPagesFlyout: The current locations's handle (id: "+a+"): "+f);
var g=jQuery("#"+a+" > a");if(LOG("MSFlyoutTruck#isThisPagesFlyout: # of 'a' tags (id: "+a+"): "+g.length),
g&&g.length>0?(g=stripUrlToHandle(g[0].pathname),LOG("MSFlyoutTruck#isThisPagesFlyout: Cursor's handle (id: "+a+"): "+g)):(LOG("MSFlyoutTruck#isThisPagesFlyout (id: "+a+"): No 'a' tags found."),
result=!1),LOG("MSFlyoutTruck#isThisPagesFlyout: (id: "+a+"): "+g),f==g)LOG("MSFlyoutTruck#isThisPagesFlyout (id: "+a+"): currentLoc == cursor"),
e();else{var h=g.length<=f.length?f.substring(0,g.length):f,i=h.length<f.length?f.charAt(h.length):"";
g==h&&"/"==i&&(LOG("MSFlyoutTruck#isThisPagesFlyout (id: "+a+"): cursor == currentPrefix && charAfterPrefix == '/'"),
e())}LOG("MSFlyoutTruck#isThisPagesFlyout (id: "+a+"): No match."),b.find("div").css("z-index",d),
LOG("MSFlyoutTruck: new z-index: "+b.find("div").css("z-index"))})},MSFlyoutTruck.prototype.highlightActive=function(a){
var b=null,c=null;if(MSFlyoutTruck.$selected){b=MSFlyoutTruck.$selected.find("div");
var d=b.css("z-index");c="number"==typeof d?parseInt(d):MSFlyoutTruck.Z,LOG("MSFlyoutTruck: increase z-index: "+c+" + "+MSFlyoutTruck.Z_DELTA),
b.css("z-index",c+MSFlyoutTruck.Z_DELTA),MSFlyoutTruck.$selected.removeClass(MSFlyout.CSS_CLASS_ACTIVE),
jQuery(MSFlyoutTruck.$selected.find("a")[0]).removeClass(MSFlyout.CSS_CLASS_ACTIVE);
}MSFlyoutTruck.$selected=jQuery(a.currentTarget),MSFlyoutTruck.$selected.addClass(MSFlyout.CSS_CLASS_ACTIVE),
jQuery(MSFlyoutTruck.$selected.find("a")[0]).addClass(MSFlyout.CSS_CLASS_ACTIVE),
b=MSFlyoutTruck.$selected.find("div"),c=parseInt(b.css("z-index")),LOG("MSFlyoutTruck: decrease z-index: "+c+" - "+MSFlyoutTruck.Z_DELTA),
b.css("z-index",c-MSFlyoutTruck.Z_DELTA),b.show()};var msSltLinkRewriter=function(){
this.handle=window.location.pathname,this.sltLinks=new Array,this.domReady=!1,this.currentSltHandle="",
this.currentTargetHandle="",this.addSltLink=function(a,b){var c=this.sltLinks.length;
this.sltLinks[c]=new Object,this.sltLinks[c].slt=a,this.sltLinks[c].target=b},this.getRelativeURL=function(a,b,c){
for(var d=0,e=0;e<b.length&&!(e>=a.length)&&a.charAt(e)==b.charAt(e);e++)"/"==a.charAt(e)&&(d=e);
if(0==d)return b;for(var f=a.substring(d+1),g=b.substring(d+1),h="",e=0;e<f.length;e++)"/"==f.charAt(e)&&(h+="../");
return c?h+=g:-1!=g.lastIndexOf("/")&&(h+=g.substring(0,g.lastIndexOf("/"))),h},this.replaceSltLinks=function(){
this.replaceSltLinksStartingFrom(document)},this.replaceSltLinksStartingFrom=function(a){
var b=a.getElementsByTagName("a");for(i=0;i<b.length;i++){var c=b[i].getAttribute("href");
if(c){var d=b[i].hostname;if(-1!=c.indexOf(d)){var e=c.indexOf(d)+d.length;c=c.substring(e);
}for(j=0;j<this.sltLinks.length;j++){var f=this.sltLinks[j].slt,g=this.sltLinks[j].target;
if(c.length>=g.length){if(c.substring(0,g.length)!=g)continue;var h=this.getRelativeURL(this.handle,f,!1),k=this.getRelativeURL(g,c,!0),l=(""!=h?h+"/":"")+k;
l=l.replace(/\/\//,"/"),b[i].setAttribute("href",l);break}}}}},this.getSltTargetUrl=function(a){
var b=this.getRelativeURL(this.handle,this.currentSltHandle,!1),c=this.getRelativeURL(this.currentTargetHandle,a,!0),d=c;
return"http://"!=c.substring(0,7)&&"https://"!=c.substring(0,8)&&(d=(""!=b?b+"/":"")+c,
d=d.replace(/\/\//,"/")),d}};!function(){var a=void 0,b=void 0;callConnectService=function(a){
var b=emb.connect_checker_vars.url+"/"+a+"/"+emb.connect_checker_vars.market+"/";jQuery.ajax({
type:"GET",beforeSend:function(a,b){a.setRequestHeader("Content-Type","application/json"),
a.setRequestHeader("X-MME-Application-Id",emb.connect_checker_vars.appid)},url:b,
crossDomain:!0,dataType:"json",success:function(a,b,c){_parseInput(c.responseText);
},error:function(a,b,c){_parseInput(a.responseText)}})},_parseInput=function(a){if(!a)return void jQuery(".initial-cc-layer").removeClass("emb-cc-error-notfound").addClass("emb-cc-error-vinerror").removeClass("emb-cc-error-vinwrong");
var b=jQuery.parseJSON(a),c=b.vehicleType,d=b.responseCode;if(!c&&!d)return void jQuery(".initial-cc-layer").removeClass("emb-cc-error-notfound").addClass("emb-cc-error-vinerror").removeClass("emb-cc-error-vinwrong");
if(0!=d)1==d?jQuery(".initial-cc-layer").addClass("emb-cc-error-notfound").removeClass("emb-cc-error-vinerror").removeClass("emb-cc-error-vinwrong"):7==d?jQuery(".initial-cc-layer").removeClass("emb-cc-error-notfound").removeClass("emb-cc-error-vinerror").addClass("emb-cc-error-vinwrong"):(99==d||106==d||5==d)&&jQuery(".initial-cc-layer").removeClass("emb-cc-error-notfound").addClass("emb-cc-error-vinerror").removeClass("emb-cc-error-vinwrong");else if("ADAPTER_VEHICLE"==c||"NONE"==c){
var e=_getLayerLink().replace(".html",".incompatible.html");renderConnectCheckerLayer(e,"emb-cc-dialog-incompatible");
}else if("CONNECT_VEHICLE"==c){var e=_getLayerLink().replace(".html",".compatible.html");
renderConnectCheckerLayer(e,"emb-cc-dialog-compatible")}},_getLayerLink=function(){
return a},window.removeLayer=function(a){a&&jQuery("."+a).hide()},window.renderConnectCheckerLayer=function(c,d){
if(removeLayer(b),d||(d="emb-cc-dialog-entry"),b=d,a||(a=c),jQuery("."+d).length)_resetEntryLayer(d),
jQuery("."+d).show();else{var e=c.replace(".html",".ajaxtemplate.html");location.host&&(e=location.protocol+"//"+location.host+e),
jQuery.ajax({url:e}).success(function(a){_renderLayer(a,d)})}},_resetEntryLayer=function(a){
"emb-cc-dialog-entry"==a&&(jQuery(".initial-cc-layer").removeClass("emb-cc-error-notfound").removeClass("emb-cc-error-vinerror").removeClass("emb-cc-error-vinwrong"),
jQuery("#input-fin").val(""))},_checkFIN=function(){var a=jQuery("#input-fin")[0].value;
a&&callConnectService(a)},_renderLayer=function(a,b){embGetLayerManager().showLayer("",a,"","",480),
embGetLayerManager().primitives.currentLayerGroup()._element.className+=" "+b,jQuery(".btn-link").click(function(){
_checkFIN()}),jQuery("#input-fin").keyup(function(a){13===a.keyCode&&_checkFIN()});
}}(),function(){jQuery.ajaxSetup({cache:!0});var a=function(){var a=window.location.protocol+"//"+emb.cookie_vars.endPoint+"/js/cookiepolicy-client.js";
jQuery.getScript(a,function(){emb.cookiepolicy.init({context:{lang:emb.cookie_vars.lang,
market:emb.cookie_vars.market,dealer:emb.cookie_vars.dealer,consentValidity:emb.cookie_vars.consentValidity
},app:{id:"ms",tag:emb.cookie_vars.tag},stylesheet:emb.cookie_vars.stylesheet,endpoint:a,
onConsent:function(a,b){jQuery("#ms_cookie_link").attr("onclick",""),jQuery("#ms_cookie_link").removeAttr("onclick"),
jQuery("#ms_cookie_link").bind("click",{cookieContext:a},function(a){var b=a&&a.data&&a.data.cookieContext;
return emb&&emb.cookiepolicy&&b?(emb.cookiepolicy.getCookieInfoUrls(b,function(a){
if(!a||1!=a.length&&0!=a.length)a&&a.length>1&&emb.cookiepolicy.renderLayer(b);else{
var c=a[0];c||(c=jQuery("#ms_cookie_link").attr("href"));var d=window.open(c,"cs_popup","left=20,top=20,toolbars=0,scrollbars=1,location=0,statusbars=0,menubars=1,resizable=0,width=440,height=550");
d&&d.focus()}}),a.stopPropagation(),!1):void 0})},onError:function(a){window.console||(window.console={
log:function(){}}),console.log(a)}})})};msMetaInfo.isRebrush&&jQuery.ngrbInitReady?jQuery.ngrbInitReady(a):addOnLoadEvent(a);
}();var debugConsole=window.console;if(!window.console){debugConsole={log:function(){},
debug:function(){},print:function(){},isDummy:!0};try{window.console=debugConsole;
}catch(e){}}!function(){function a(a){this.accountId="",this.pageName="",this.data={},
this.msData={},this.postTrackingHTML=new Array,this.suppressSendData=!1,this.scope=a,
this.initialized=!1}var b="_default_scope_",c={};window.embTrackingManager=function(d){
return d&&""!=d||(d=b),c[d]||(c[d]=new a(d)),c[d]};var d=window.console;if(!window.console){
d={log:function(){},debug:function(){},print:function(){},isDummy:!0};try{window.console=d;
}catch(e){}}a.prototype.init=function(a,b){this.initialized?d.log("EmbTrackingManager("+this.scope+") -> init: skipped -> EmbTrackingManager already initialized"):(a&&""!=a&&(this.accountId=evaluateAccount(a)),
b&&""!=b&&(this.pageName=b),this.data={},this.postTrackingHTML=new Array,this.initialized=!0,
this.suppressSendData=!1,d.log("EmbTrackingManager("+this.scope+") -> init: called with accountId="+this.accountId+" and pageName="+b));
},a.prototype.isInitialized=function(){return this.initialized},a.prototype.setAccountId=function(a){
this.initialized?(a&&""!=a&&(this.accountId=evaluateAccount(a)),d.log("EmbTrackingManager("+this.scope+") -> setAccountId: called with accountId="+this.accountId)):d.log("EmbTrackingManager("+this.scope+") -> setAccountId: skipped -> EmbTrackingManager not initialized");
},a.prototype.setPageName=function(a){this.initialized?(a&&""!=a&&(this.pageName=a),
d.log("EmbTrackingManager("+this.scope+") -> setPageName: called with pageName="+a)):d.log("EmbTrackingManager("+this.scope+") -> setPageName: skipped -> EmbTrackingManager not initialized");
},a.prototype.addData=function(a){try{if(this.initialized){a||(a={});for(var b in a)"pageName"!=b?this.data[b]=a[b]:d.log("EmbTrackingManager("+this.scope+") -> addData: Skipped reserved parameter pageName");
}else d.log("EmbTrackingManager("+this.scope+") -> addData: skipped -> EmbTrackingManager not initialized");
}catch(c){d.log("ERROR in EmbTrackingManager("+this.scope+") -> addData: "+c)}},a.prototype.addPostTrackingHTML=function(a){
try{this.initialized?a&&(this.postTrackingHTML.push(a),d.log("EmbTrackingManager("+this.scope+") -> addPostTrackingHTML: called with htmlSnippet="+a)):d.log("EmbTrackingManager("+this.scope+") -> addPostTrackingHTML: skipped -> EmbTrackingManager not initialized");
}catch(b){d.log("ERROR in EmbTrackingManager("+this.scope+") -> addPostTrackingHTML: "+b);
}},a.prototype.setSuppressSendData=function(a){d.log("EmbTrackingManager("+this.scope+") -> setSuppressSendData("+a+")"),
this.suppressSendData=a},a.prototype.sendData=function(a){try{if(this.initialized)if(this.suppressSendData)d.log("EmbTrackingManager("+this.scope+") -> sendData: skipped -> suppressSendData is set.");else{
var b=this.getEmptyDataObject();b.pageName=this.pageName;for(var c in this.data)b[c]=this.data[c];
if("object"==typeof a)for(var c in a)b[c]=a[c];var e=b.t();if(e&&""!=e){document.write(e);
for(var f in this.postTrackingHTML)document.write(this.postTrackingHTML[f])}this.data=this.extend({},this.msData),
this.postTrackingHTML=new Array,d.log("EmbTrackingManager("+this.scope+") -> sendData");
}else d.log("EmbTrackingManager("+this.scope+") -> sendData: skipped -> EmbTrackingManager not initialized");
}catch(g){d.log("ERROR in EmbTrackingManager("+this.scope+") -> sendData: "+g)}},
a.prototype.sendLinkEvent=function(a,b){try{if(this.initialized){var c=this.getDataObject();
c.prop19=a;var e="prop19";c.linkTrackEvents="None";for(var f in b)"pageName"==f?d.log("EmbTrackingManager("+this.scope+") -> addData: Skipped reserved parameter pageName"):"events"==f?(c.linkTrackEvents=b[f],
c[f]=b[f]):(c[f]=b[f],"prop26"==f&&(c.prop26=this.pageName),e=e+","+f);c.linkTrackVars=e,
c.tl(this,"o",a),c.linkTrackVars="None",d.log("EmbTrackingManager("+this.scope+") -> sendLinkEvent: called with linkName="+a+", data="+b);
}else d.log("EmbTrackingManager("+this.scope+") -> sendLinkEvent: skipped -> EmbTrackingManager not initialized");
}catch(g){d.log("ERROR in EmbTrackingManager("+this.scope+") -> sendLinkEvent: "+g);
}},a.prototype.sendLinkEventMS=function(a,b,c){try{if(this.initialized){var e=this.getDataObject();
"e"==c?e.linkTrackVars="pageName":e.linkTrackVars="pageName,eVar6",e.linkTrackEvents="None",
"e"!=c&&(e.eVar6=linkname),e.tl(!0,c,a),e.linkTrackVars="None",d.log("EmbTrackingManager("+this.scope+") -> sendLinkEvent: called with linkName="+a);
}else d.log("EmbTrackingManager("+this.scope+") -> sendLinkEvent: skipped -> EmbTrackingManager not initialized");
}catch(f){d.log("ERROR in EmbTrackingManager("+this.scope+") -> sendLinkEvent: "+f);
}},a.prototype.sendCCFlashEvent=function(a){try{if(this.initialized){var b=this.getDataObject();
b.linkTrackVars="prop19,prop26",b.linkTrackEvents="None",b.prop19=a,b.prop26=this.pageName,
b.tl(this,"o",a),b.linkTrackVars="None",d.log("EmbTrackingManager("+this.scope+") -> sendCCFlashEvent: called with flashtag="+a);
}else d.log("EmbTrackingManager("+this.scope+") -> sendCCFlashEvent: skipped -> EmbTrackingManager not initialized");
}catch(c){d.log("ERROR in EmbTrackingManager("+this.scope+") -> sendCCFlashEvent: "+c);
}},a.prototype.sendEmbFlashEvent=function(a,b){try{if(this.initialized){var c=this.getDataObject(),e=c.pageName;
b&&""!=b&&(e=e.replace(new RegExp(b+"$"),"")),c.linkTrackVars="prop1",c.linkTrackEvents="None",
c.prop1="eMBflash:"+e+":"+a,c.tl(this,"o","eMBflash:"+e+":"+a),c.linkTrackVars="None",
d.log("EmbTrackingManager("+this.scope+") -> sendFlashEvent: called with flashTag="+a+" and pageNameSuffix="+pageNameSuffix);
}else d.log("EmbTrackingManager("+this.scope+") -> sendFlashEvent: skipped -> EmbTrackingManager not initialized");
}catch(f){d.log("ERROR in EmbTrackingManager("+this.scope+") -> sendFlashEvent: "+f);
}},a.prototype.getDataObject=function(){var a={};try{a=s_gi(this.accountId)}catch(b){
d.log("ERROR in EmbTrackingManager("+this.scope+") -> getDataObject: "+b)}return a;
},a.prototype.getEmptyDataObject=function(){var a={};try{a=s_gi(this.accountId);var b=["prop","eVar","hier","list","events","eventList","products","productsList","channel","purchaseID","transactionID","state","zip","campaign"];
b.forEach(function(b){for(var c in a)0==c.indexOf(b)&&delete a[c]})}catch(c){d.log("ERROR in EmbTrackingManager("+this.scope+") -> getEmptyDataObject: "+c);
}return a},a.prototype.msInitDone=function(){this.msData=this.extend({},this.data);
},a.prototype.extend=function(a,b){a=a||{};for(var c=1;c<arguments.length;c++)for(var d in arguments[c])"object"==typeof arguments[c][d]?a[d]=this.extend(a[d],arguments[c][d]):a[d]=arguments[c][d];
return a}}(),function(){"use strict";function a(){}function b(a,b){function c(a,b){
var c=/(^( )?(var|if|for|else|switch|case|break|{|}|;))(.*)?/g;return b?a.match(c)?a+"\n":"r.push("+a+");\n":""!=a?'r.push("'+a.replace(/"/g,'\\"')+'");\n':"";
}for(var d,e,f=/<%(.+?)%>/g,g="with(obj) { var r=[];\n",h=0;e=f.exec(a);)g+=c(a.slice(h,e.index)),
g+=c(e[1],!0),h=e.index+e[0].length;g+=c(a.substr(h,a.length-h)),g=(g+'return r.join(""); }').replace(/[\r\t\n]/g,"");
try{d=new Function("obj",g).apply(b,[b])}catch(i){console.error("'"+i.message+"'"," in \n\nCode:\n",g,"\n");
}return d}function c(a){"undefined"!=typeof console&&console.log&&console.log("emb.fontloader - "+a);
}function d(){return e?e:void(e=this)}a.prototype.indexOf=function(a,b){null==b?b=0:0>b&&(b=Math.max(0,this.length+b));
for(var c=b,d=this.length;d>c;c++)if(this[c]===a)return c;return-1},a.prototype.forEach=function(a,b){
var c,d;if(null==this)throw new TypeError(" this is null or not defined");var e=Object(this),f=e.length>>>0;
if("function"!=typeof a)throw new TypeError(a+" is not a function");for(1<arguments.length&&(c=b),
d=0;f>d;){var g;d in e&&(g=e[d],a.call(c,g,d,e)),d++}},Array.prototype.forEach||(window.Array.prototype.forEach=a.prototype.forEach),
Array.prototype.indexOf||(window.Array.prototype.indexOf=a.prototype.indexOf);var e,f={
c:'@font-face { \r\n        font-family: "<% this.font_family %>"; \r\n        src: url("<% this.font_file %>.eot"); \r\n        src: local("?"), \r\n             url("<% this.font_file %>.eot?#iefix") format("embedded-opentype"), \r\n             url("<% this.font_file %>.woff2") format("woff2"), \r\n             url("<% this.font_file %>.woff") format("woff"), \r\n             url("<% this.font_file %>.ttf") format("truetype"); \r\n            <% if(this.font_weight) {%>  \r\n                 font-weight: <% this.font_weight %>; \r\n            <%}%> \r\n            <% if(this.font_italic) {%>  \r\n                font-style: italic; \r\n            <%}%> \r\n        }',
host:"//e-services.mercedes-benz.com",path:"/static/webfonts/",lang_file_map:{eu:"-eu",
me:"-me",se:"-se",ch:"-eu",jp:"-eu",ko:"-eu",undefined:"eu",ar:"me",zh:"ch",th:"se"
},webfont:{"Daimler-Corpo-S":{file_name:"Daimler-CS",weights:{400:1,700:1},weights_x:{
200:1,400:1,600:1,700:1,900:1},hasItalic:1},"Daimler-Corpo-A":{file_name:"Daimler-CA",
weights:{400:1},weights_x:{400:1,700:1},hasItalic:0},"Daimler-Corpo-AC":{file_name:"Daimler-CAC",
weights:{400:1},weights_x:{400:1,700:1},hasItalic:0},"Daimler-Corpo-E":{file_name:"Daimler-CE",
weights:{400:1},weights_x:{400:1,700:1},hasItalic:0}},weights:{100:"Light",200:"Light",
300:"Reg",400:"Reg",500:"Reg",600:"Demi",700:"Bold",800:"Bold",900:"ExtraBold",normal:"Reg",
regular:"Reg",bold:"Bold"}};d.prototype.a={},d.prototype.b=function(a,d,e,g,h){if(h=jQuery.extend({},f,h),
h.webfont[a]){var i=h.webfont[a];e&&e.length&&0!=e.length?"string"==typeof e&&(e=[e]):e=$.map(i.weights,function(a,b){
return[b]}),e=e.join("|").toLowerCase().split("|"),d&&(d=""+d.toLowerCase());for(var j=""+h.lang_file_map[d];"-"!=j.slice(0,1);)j=""+h.lang_file_map[j];
d=[];for(var k in i.weights)if(Object.prototype.hasOwnProperty.call(i.weights,k)&&-1!=e.indexOf(k)){
var l=h.host+h.path+i.file_name+"-"+h.weights[k];i.hasItalic&&g&&(l+="Italic");var l=l+j,m=""+e[e.indexOf(k)];
this.a[h.customFamily||a]&&l==this.a[h.customFamily||a]?c("CSS ALREADY injected!  Font file skipped: "+l+" | weight: "+m):(this.a[h.customFamily||a]=l,
c("Used font file: "+l+" | weight: "+m),d.push(b(h.c,{font_file:l,font_family:h.customFamily||a,
font_weight:m,font_italic:g?"Italic":""})))}else c("Font '"+a+"' has *not* the weight: "+k);
d.forEach(function(a,b){c("Generated CSS ["+b+"]:"+a)}),a=document.createElement("style");
var n;a.setAttribute("type","text/css"),document.getElementsByTagName("head")[0].appendChild(a),
n=a.styleSheet?a.styleSheet:a.sheet,d.forEach(function(a){"function"==typeof n.insertRule?n.insertRule(a,0):"string"==typeof n.cssText&&(n.cssText=a);
})}else console.error("The webfont "+a+"is undefined. Fontloading Aborted.")},window.embFontLoader=d,
window.embFontLoader.prototype.injectCSS=d.prototype.b}();var uniquePageId="",Base64={
_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_|~",encode:function(a){
var b,c,d,e,f,g,h,i="",j=0;for(a=Base64._utf8_encode(a);j<a.length;)b=a.charCodeAt(j++),
c=a.charCodeAt(j++),d=a.charCodeAt(j++),e=b>>2,f=(3&b)<<4|c>>4,g=(15&c)<<2|d>>6,h=63&d,
isNaN(c)?g=h=64:isNaN(d)&&(h=64),i=i+this._keyStr.charAt(e)+this._keyStr.charAt(f)+this._keyStr.charAt(g)+this._keyStr.charAt(h);
return i},_utf8_encode:function(a){a=a.replace(/\r\n/g,"\n");for(var b="",c=0;c<a.length;c++){
var d=a.charCodeAt(c);128>d?b+=String.fromCharCode(d):d>127&&2048>d?(b+=String.fromCharCode(d>>6|192),
b+=String.fromCharCode(63&d|128)):(b+=String.fromCharCode(d>>12|224),b+=String.fromCharCode(d>>6&63|128),
b+=String.fromCharCode(63&d|128))}return b}};!function(){var a;window.getHistoryManager=function(){
return a||(a=new HistoryManager),a}}(),function(){var a=new Object,b=embGetProfileManager(),c=".LOGGED_OUT_NO_FAVORITE",d=".LOGGED_IN_NO_FAVORITE",e=".LOGGED_IN_FAVORITE_STORED",f=c+" "+d+" "+e,g=function(){
return b.isLoggedIn()&&!b.hasFavorite()?d:(b.isLoggedIn()||b.isSoftLoggedIn())&&b.hasFavorite()?e:c;
},h=function(a){return f.replace(a,"").replace(/^ +/,"").replace(/ *$/,"").replace(/ +/g,", ");
};window.getFavoriteTeaser2Scripts=function(){return a},a.determineHiddenSelector=function(){
var a=g();return LOG("favoriteteaser2.js#determineHiddenSelector: currentState: "+a),
h(a)},a.determineVisibleSelector=function(){var a=g();return LOG("favoriteteaser2.js#determineVisibleSelector: currentState: "+a),
a},a.initTeasers=function(){a.initialized||(jQuery.globallyDisplayUserData(),jQuery.hideInvalidLogInStates({
hidden:window.getFavoriteTeaser2Scripts().determineHiddenSelector,visible:window.getFavoriteTeaser2Scripts().determineVisibleSelector
}),jQuery("#newcrmteaser-wrapper").show()),a.initialized=!0},jQuery(document).ready(function(){
var b=jQuery("#newcrmteaser-wrapper").length>0;b&&(embGetProfileManager().addUpdateCallback(a.initTeasers,!1),
a.initialized||a.initTeasers())})}();var ms_foldingtable_elementsLoaded=new Object,ms_foldingtable_maxSize=new Object,ms_foldingtable_tdimage=new Object,ms_foldingtable_tdclass=new Object,ActiveBigID=new Object,ActiveID=new Object,ms_foldingtable_automaticRequestsPending=0;
!function(a,b,c){a.fn.initMsT62_NG=function(){var b=this;a("p.ms-link-enlarge a",b).each(function(){
var b=a(this),c=b.attr("href");c=c.substr(c.indexOf("bigImage('")+10),c=c.substr(0,c.indexOf("'"));
var d=a("#medienelementImage0"+c+" img").attr("src"),e=a("#medienelementImage0"+c+" img").attr("title"),f=a("#medienelementImage0"+c+" img").attr("alt"),g='<div class="ms-modallayer" style="display:none" id="medienelementBigImage0'+c+'"><div class="ms-modallayer-t"><div class="ms-modallayer-t-c"><p class="ms-btn6"><a href="javascript:bigImage(\''+c+'\', -2, true);">Close</a></p></div></div><div class="ms-modallayer-m"><div class="ms-modallayer-m-c" id="medienelementBigImageLayer0'+c+'"><p id="medienelementBigImageLayerP0'+c+'"></p><img src="'+d+'" alt="'+f+'" title="'+e+'" /></div></div><div class="ms-modallayer-b"><div class="ms-modallayer-b-c"><div class="ms-modallayer-b-c-2"></div><div class="ms-clearer"></div></div></div></div>';
a("#ms-overlay-content").append(a(g))}),b.each(function(){if(a(this).hasClass("tablewithmediaelements")&&a("body:not(.ms-cq-edit)").size()){
var b=a(this),c=0;c=b.height(),c=c<b.find(".mediawithcaption").height()?b.find(".mediawithcaption").height()+40:c,
b.css("height",c+"px")}else if(a(this).hasClass("tablewithmediaelements")){var b=a(this),c=0,d=b.find(".productdatatable-left").parent();
c=d.height(),c=c<b.find(".mediawithcaption").height()?b.find(".mediawithcaption").height()+40:c,
d.css("height",c+"px")}})}}(jQuery,window),jQuery(document).ready(function(){msMetaInfo.isRebrush?jQuery.ngrbInitReady(foldingTableInit):foldingTableInit();
}),function(){function a(a,b){return b.replace(/%ref%/g,a)}function b(a,b){return b=b.replace(/%ref%/g,a.ref),
b=b.replace(/%txt%/g,a.text)}function c(){return"ms-footnote-dyn"}function d(){return"dummy-footnotes-id";
}function e(a){for(result="";a--;)result+="*";return result}function f(){function b(b,c){
return{text:b,ref:c,refhtml:a(c,i.templates.ref)}}var f={},g={},h={},i=this,j={};this.templates={
note:'<p class="ms-text ms-tx3" id="note+%ref%">%ref% %txt%</p>',ref:'<span class="footnoteref">%ref%</span>'
},this.containerDefs=new Object,this.containerDefs[c()]={id:c(),cssclass:"ms-footnote-dyn",
parent:{cssclass:"ms-footnote",parent:{id:"ms-f-right-2",parent:{id:"ms-f-right",
parent:{id:"ms-wrapper-f",parent:{id:"ms-wrapper"}}}}}},this.setFCNoteCustomStarred=function(a){
var b=jQuery("#ms-footnote-asterisk p").toArray(),c=/^[ \s]*(\*+) *(.*)/,d=!1;for(var e in b){
var f=c.exec(b[e].innerHTML);if(f){var g=1==f[1].length?a:f[2];this._addNote(g,"custom",f[1].length,"ms-footnote-asterisk"),
d=!0}}d&&embGetFootnoteManager().showFootnotesIn("ms-footnote-asterisk")},this.incStartId=function(a,b){
var d=c();return b&&(d=b),j[d]||(j[d]=0),a?j[d]+=a:j[d]+=1,j[d]},this.getCurrentStartId=function(a){
var b=c();return a&&(b=a),j[b]||(j[b]=0),j[b]},this.custom={mode:"custom",notes:[],
createNote:function(a,d,f){f||(f=c()),this.notes[f]||(this.notes[f]=[]);var g=this.notes[f][d];
return g?-1==g.text.indexOf(a)&&(g.text+=" "+a):g=b(a,e(d)),this.notes[f][d]=g,g}
},this.starred={mode:"starred",notes:[],createNote:function(a,c){"undefined"==typeof c&&(c=this.notes.length,
0==c&&(c=1));var d=b(a,e(c+1));return this.notes[c]=d,d}},this.numbered={mode:"numbered",
notes:{},createNote:function(a,c,d){c||(c=i.getCurrentStartId(d));var e=b(a,"["+(c+1)+"]");
return this.notes[d]||(this.notes[d]=[]),this.notes[d][c]=e,i.incStartId(null,d),
e}},this.defaultMode=this.numbered,this._autoCreateHTMLContainer=function(a,b){LOG("FootnoteManager#_autoCreateHTMLContainer(id, containerdef):",[a,b]);
var c=null,d=null,e=function(a,b,c){LOG("FootnoteManager#_autoCreateHTMLContainer#buildAndInsertContainer(newid, newcssclass, $parent)",[a,b,c]);
var d="<div"+(a?' id="'+a+'"':"")+(b?' class="'+b+'"></div>':"></div>");return d=jQuery(d),
c.append(d),d};if(a&&this.containerDefs[a]&&!b?c=this.containerDefs[a]:b?c=b:LOG_ERR("Container definition id missing!"),
c&&(c.parent?(c.parent.id&&(d=jQuery("#"+c.parent.id)),(null==d||d.size()<1)&&c.parent.cssclass&&(d=jQuery("."+c.parent.cssclass))):d=jQuery("#ms-website"),
(null==d||d.size()<1)&&(d=this._autoCreateHTMLContainer(null,c.parent)),null!=d&&d.size()>0))try{
return e(c.id,c.cssclass,d)}catch(f){LOG_ERR("Container creation failed!",f)}return jQuery();
},this._addNote=function(a,b,c,e){var i=d();e&&(i=e);var j=f[i]?f[i][a]:null;if(j?LOG("FootnoteManager#_addNote(): Found an existing footnote (container: "+i+"): ",j.text):LOG("FootnoteManager#_addNote(): New footnote (container: "+i+"): ",a),
!j||void 0!==c){var k=this.defaultMode;this[b]&&this[b].createNote&&(k=this[b]),j=k.createNote(a,c,i),
f[i]||(f[i]={}),f[i][a]=j,g[i]||(g[i]={}),g[i][j.ref]=j,h[i]||(h[i]={}),h[i][j.refhtml]=j;
}return j},this._replaceNote=function(a,b){var c=h[a];return c||(c=g[a]),c&&(c.text=b),
c},this._getFootnotes=function(a){var b=a;a||(b=c(),LOG("FootnoteManager#_getFootnotes(fnContainerId): ",b));
var d=[];return this.numbered.notes[b]&&(d=d.concat(this.numbered.notes[b])),this.custom.notes[b]&&(d=d.concat(this.custom.notes[b])),
d=d.concat(this.starred.notes)},this.setFCNote=function(a){_addNote(a,"starred",0).refhtml;
},this.placeholderID=("footnoteplaceholder"+Math.random()).replace(".","_")}f.prototype={
addStarredNote:function(a){return this._addNote(a,"starred").refhtml},addNumberedNote:function(a){
return this._addNote(a,"numbered").refhtml},addNote:function(a){return this._addNote(a).refhtml;
},getFootnoteHtml:function(a,c){a||(a=this.templates.note);var d="",e=this._getFootnotes(c);
for(var f in e)if(e[f]){var g=e[f];d+=b(g,a)}return d},getFootnotePlaceholderHtml:function(a){
return'<span id="'+this.placeholderID+'"></span>'},_collectInnerFootnotes:function(a,b){
var c=jQuery("span.footnote",a);c.removeClass("footnote");var d=this,e=b;return c.each(function(){
var a=void 0,b=jQuery(this);b.hasClass("fn-starred")&&(a="starred"),b.hasClass("fn-numbered")&&(a="numbered");
var c=d._addNote(this.innerHTML,a,void 0,e);c&&d._collectInnerFootnotes(this,e)&&(c.text=this.innerHTML),
b.replaceWith(c.refhtml)}),c.length},_collectFootnotes:function(a,b){var c=a;a||(c=jQuery("body")[0]),
this._collectInnerFootnotes(c,b)},_printFootnotes:function(a){var b="";return a?(b=this.getFootnoteHtml(null,a),
void jQuery("#"+a).html(b)):(b=this.getFootnoteHtml(null,d()),void jQuery("#"+this.placeholderID).replaceWith(b));
},printFootnotes:function(){this.showFootnotesHere()},_finishFootnotes:function(a,b){
var c=this;jQuery(function(){c._collectFootnotes(a,b),c._printFootnotes(b)})},showFootnotesHere:function(){
return document.write(this.getFootnotePlaceholderHtml()),this._finishFootnotes(),
!0},showFootnotesIn:function(a,b){LOG("FootnoteManager#showFootnotesIn(id): ",a);var c=this,d=b,e=this;
try{jQuery(function(){var b=jQuery("#"+a);return b.size()<1&&(b=c._autoCreateHTMLContainer(a)),
b.size()<1?(LOG_ERR("FootnoteManager#showFootnotesIn(id): No container available!"),
!1):(e._finishFootnotes(d,a),$xParent=jQuery(".ms-footnote"),void($xParent.offset()&&$xParent.offset().left&&"number"==typeof $xParent.offset().left&&275!=$xParent.offset().left&&(LOG('FootnoteManager#showFootnotesIn(id): adjusting offset for selector ".ms-footnote" for footnote id: ',a),
$xParent.addClass("ms-distance-l"))))}),LOG("FootnoteManager#showFootnotesIn(id): Footnotes finished for id:",a);
}catch(f){LOG_ERR("FootnoteManager#showFootnotesIn(id): Insertion of footnotes failed for id:",[a,f]);
}return!0},collectFootnotes:function(){}};var g;window.embGetFootnoteManager=function(){
return g||(g=new f),g},window.footnote=function(a){return embGetFootnoteManager().addNote(a);
}}(),function(a){a.fn.hoverIntent=function(b,c){var d={sensitivity:7,interval:100,
timeout:0};d=a.extend(d,c?{over:b,out:c}:b);var e,f,g,h,i=function(a){e=a.pageX,f=a.pageY;
},j=function(b,c){return c.hoverIntent_t=clearTimeout(c.hoverIntent_t),Math.abs(g-e)+Math.abs(h-f)<d.sensitivity?(a(c).unbind("mousemove",i),
c.hoverIntent_s=1,d.over.apply(c,[b])):(g=e,h=f,c.hoverIntent_t=setTimeout(function(){
j(b,c)},d.interval),void 0)},k=function(a,b){return b.hoverIntent_t=clearTimeout(b.hoverIntent_t),
b.hoverIntent_s=0,d.out.apply(b,[a])},l=function(b){for(var c=("mouseover"==b.type?b.fromElement:b.toElement)||b.relatedTarget;c&&c!=this;)try{
c=c.parentNode}catch(b){c=this}if(c==this)return!1;var e=jQuery.extend({},b),f=this;
f.hoverIntent_t&&(f.hoverIntent_t=clearTimeout(f.hoverIntent_t)),"mouseover"==b.type?(g=e.pageX,
h=e.pageY,a(f).bind("mousemove",i),1!=f.hoverIntent_s&&(f.hoverIntent_t=setTimeout(function(){
j(e,f)},d.interval))):(a(f).unbind("mousemove",i),1==f.hoverIntent_s&&(f.hoverIntent_t=setTimeout(function(){
k(e,f)},d.timeout)))};return this.mouseover(l).mouseout(l)}}(jQuery),jQuery.extend({
historyCurrentHash:void 0,historyCallback:void 0,historyIframeSrc:void 0,historyNeedIframe:jQuery.browser.msie&&(jQuery.browser.version<8||document.documentMode<8),
historyInit:function(a,b){jQuery.historyCallback=a,b&&(jQuery.historyIframeSrc=b);
var c=location.hash.replace(/\?.*$/,"");if(jQuery.historyCurrentHash=c,jQuery.historyNeedIframe){
""==jQuery.historyCurrentHash&&(jQuery.historyCurrentHash="#"),jQuery("body").prepend('<iframe id="jQuery_history" style="display: none;" src="javascript:false;"></iframe>');
var d=jQuery("#jQuery_history")[0],e=d.contentWindow.document;e.open(),e.close(),
e.location.hash=c}else jQuery.browser.safari&&(jQuery.historyBackStack=[],jQuery.historyBackStack.length=history.length,
jQuery.historyForwardStack=[],jQuery.lastHistoryLength=history.length,jQuery.isFirst=!0);
c&&jQuery.historyCallback(c.replace(/^#/,"")),setInterval(jQuery.historyCheck,100);
},historyAddHistory:function(a){jQuery.historyBackStack.push(a),jQuery.historyForwardStack.length=0,
this.isFirst=!0},historyCheck:function(){if(jQuery.historyNeedIframe){var a=jQuery("#jQuery_history")[0],b=a.contentDocument||a.contentWindow.document,c=b.location.hash.replace(/\?.*$/,"");
c!=jQuery.historyCurrentHash&&(location.hash=c,jQuery.historyCurrentHash=c,jQuery.historyCallback(c.replace(/^#/,"")));
}else if(jQuery.browser.safari){if(jQuery.lastHistoryLength==history.length&&jQuery.historyBackStack.length>jQuery.lastHistoryLength&&jQuery.historyBackStack.shift(),
!jQuery.dontCheck){var d=history.length-jQuery.historyBackStack.length;if(jQuery.lastHistoryLength=history.length,
d){if(jQuery.isFirst=!1,0>d)for(var e=0;e<Math.abs(d);e++)jQuery.historyForwardStack.unshift(jQuery.historyBackStack.pop());else for(var e=0;d>e;e++)jQuery.historyBackStack.push(jQuery.historyForwardStack.shift());
var f=jQuery.historyBackStack[jQuery.historyBackStack.length-1];void 0!=f&&(jQuery.historyCurrentHash=location.hash.replace(/\?.*$/,""),
jQuery.historyCallback(f))}else if(void 0==jQuery.historyBackStack[jQuery.historyBackStack.length-1]&&!jQuery.isFirst){
if(location.hash){var c=location.hash;jQuery.historyCallback(location.hash.replace(/^#/,""));
}else{var c="";jQuery.historyCallback("")}jQuery.isFirst=!0}}}else{var c=location.hash.replace(/\?.*$/,"");
c!=jQuery.historyCurrentHash&&(jQuery.historyCurrentHash=c,jQuery.historyCallback(c.replace(/^#/,"")));
}},historyLoad:function(a){var b;if(a=decodeURIComponent(a.replace(/\?.*$/,"")),jQuery.browser.safari?b=a:(b="#"+a,
location.hash=b),jQuery.historyCurrentHash=b,jQuery.historyNeedIframe){var c=jQuery("#jQuery_history")[0],d=c.contentWindow.document;
d.open(),d.close(),d.location.hash=b,jQuery.lastHistoryLength=history.length,jQuery.historyCallback(a);
}else if(jQuery.browser.safari){jQuery.dontCheck=!0,this.historyAddHistory(a);var e=function(){
jQuery.dontCheck=!1};window.setTimeout(e,200),jQuery.historyCallback(a),location.hash=b;
}else jQuery.historyCallback(a)}}),jQuery(document).ready(function(){function a(a,b){
var c=window.location.href.substr(window.location.href.indexOf("/content/")),d=stripUrlToHandle(c),e=d.split("/");
e[a]&&(9==a?jQuery("ul.ms-rb-mainNav1st > li.ms-rb-highlight-"+e[a]).addClass(b):10==a?jQuery("li.ms-rb-highlight-"+e[a-1]+" ul.ms-rb-mainNav2nd > li.ms-rb-highlight-"+e[a]).addClass(b):11==a?jQuery("ul.ms-rb-modelNavList > li.ms-rb-highlight-"+e[a]).addClass(b):jQuery(".ms-rb-highlight-"+e[a]).addClass(b));
}jQuery("ul.ms-rb-bodyStyleList > li").hover(function(){var a=jQuery(this),b=a.index()+1;
a.addClass("hover").siblings("li").removeClass("hover"),a.closest("div.ms-rb-modelFlyout").find("div.ms-rb-modelFlyoutBackgrounds ul li:nth-child("+b+")").addClass("active").siblings("li").removeClass("active");
}),jQuery(".ms-rb-search #search").focus(function(){jQuery(".ms-rb-search").addClass("focus");
}).blur(function(a){jQuery(".ms-rb-search").removeClass("focus")}),a(9,"highlight"),
a(10,"highlight"),a(11,"highlight")});var ms_corenav_elementsLoaded=new Object,ms_corenav_elementsSelected=new Object,ajaxConnector=new AJAXConnector,ms_setIFrameHeight_stopper=!1,ms_updateMetaNav=!1,ms_updateNavigation3=!1,ms_correctNav3ShowDF=!1,ms_correctNav3ShowDMBP=!1,ms_updateNavigation3CRM2=!1;
jQuery(document).ready(function(){var a=/^(.*\/([^\.]*)\.[^#\?]*)(#[^\?]*)?(\?.*)?$/;
if("undefined"!=typeof linkTypeMap)for(var b in linkTypeMap)for(var c in tagsAndTagProperties){
var d=tagsAndTagProperties[c],e=jQuery(linkTypeMap[b]+" "+c),f=60;for(var g in e){
var h=e[g][d],i=e[g].innerHTML;if(h&&(h.indexOf(window.location.host)>-1||0==h.indexOf("/"))){
var j=a.exec(h);if(void 0!=j[3]&&""!=j[3]);else{var k="#"+prefix+productWorld+":"+page+":"+b+":"+j[2];
k.length>f&&(k=k.substring(0,f));var l=j[1]+(void 0==j[4]?"":j[4])+k;e[g][d]=l,i&&"undefined"!==i&&""!=i&&"a"==c&&(e[g].innerHTML=i);
}}}}});var appendOmniturePidAnchor=function(a,b){return b.hash&&a.indexOf(!1)&&(a+=b.hash),
a};!function(){var a=new EmbRedirectManager;window.embGetRedirectManager=function(){
return a}}(),String.prototype.startsWith=function(a){return this.match("^"+a)==a},
EmbRedirectManager.INFO_AND_OVERVIEW=1,EmbRedirectManager.CONFIGURATOR=2,EmbRedirectManager.PRODUCT_ENTRY=3,
EmbRedirectManager.CURRENT=4,EmbRedirectManager.SHOWROOM=5,EmbRedirectManager.MYFAVORITE=6,
EmbRedirectManager.SHOWROOM_CC=7,EmbRedirectManager.HOME_PASSENGER_CARS=8,EmbRedirectManager.LANDING_PAGE=9,
EmbRedirectManager.REGISTRATION_SUCCESS=10,EmbRedirectManager.SAVED_VEHICLES=11,EmbRedirectManager.OWNED_VEHICLES=12,
EmbRedirectManager.VEHICLE_SERVICE=13,EmbRedirectManager.MY_MB_PARTNER=14,EmbRedirectManager.GENERAL_REQUEST=15,
EmbRedirectManager.SERVICE_REQUEST=16,EmbRedirectManager.SERVICE_CENTER=17,EmbRedirectManager.STATE_NORMAL="",
EmbRedirectManager.STATE_NO_TOKEN="ll1",EmbRedirectManager.STATE_TIMEOUT="ll2",EmbRedirectManager.STATE_EMAIL_VERIFICATION="ll6",
EmbRedirectManager.STATE_EMAIL_REVERIFICATION="ll7",EmbRedirectManager.LAYER_MYPROFILE="LayerMyProfile",
EmbRedirectManager.LAYER_REGISTRATION_ADDED_VALUE="LayerRegistrationAddValue",EmbRedirectManager.LAYER_REGISTRATION="LayerRegistration",
EmbRedirectManager.LAYER_EMAIL_VERIFICATION_REQUIRED="LayerEmailVerificationRequired",
EmbRedirectManager.LAYER_FORGOTTEN_PASSWORD="LayerLostPassword",EmbRedirectManager.LAYER_SAVEDVEHICLES="LayerSavedVehicles",
EmbRedirectManager.LAYER_OPT_OUT="LayerOptOut",EmbRedirectManager.LAYER_OPT_IN="LayerEmailVerification",
EmbRedirectManager.LAYER_KDV_OFF="LayerKdvOff",EmbRedirectManager.LAYER_COI_CHANGE_DSE_VARIANT="LayerCOIChangeDSEVariant",
EmbRedirectManager.LAYER_INVALID_CONFIGURATION="LayerInvalidConfiguration",function(a){
function b(b,c){var d='<div class="ms-tel offscreen"><div class="ms-tooltip"><div class="ms-tooltip-head"><div class="ms-tooltip-head-inner"></div></div><div class="ms-tooltip-body"><div class="ms-tooltip-body-inner">'+b+'<div class="ms-footnote"><div id="'+c+'" class="ms-footnote-dyn"></div></div></div></div><div class="ms-tooltip-foot"><div class="ms-tooltip-foot-inner"></div></div></div><img class="ms-tooltip-arrow" src="" alt="" /></div>';
return a(d)}function c(b){var c=a(b);if(c.length<1){var d='<div id="'+b.replace(/#/,"")+'" style="left: 0; top: 0; width: 100%; z-index: 1900;" />';
c=a(d),c.appendTo("body")}}function d(a){if(a&&a.indexOf("/content")>0){var b=a.indexOf("/content");
a=a.substring(b)}return a}function e(e,f,g){c(f),e=d(e),document.tooltips[e]||(document.tooltips[e]="loading...",
window.embGetLayerManager()._loadLayer(function(c,d,g,h,i){++p;var j="ms-footnote-dyn-"+p,k=b(d,j);
if(k.appendTo(f),embGetFootnoteManager().showFootnotesIn(j,k[0]),k.initMsT62_NG(),
"object"==typeof window.msSltLinkRewriter){var l=a(f)[0];l&&window.msSltLinkRewriter.replaceSltLinksStartingFrom(l);
}k?document.tooltips[e]=k:document.tooltips[e]=!1},e,{silentLoading:!0}))}function f(b){
tooltip=a(b.currentTarget),tooltip.data("tooltip-open",!0),tooltip.data("timerId")&&(window.clearTimeout(tooltip.data("timerId")),
tooltip.data("timerId",null)),tooltip.data("href")&&!tooltip.data("href").hasClass("tooltipHover")&&tooltip.data("href").addClass("tooltipHover");
}function g(b){tooltip=a(b.currentTarget),tooltip.data("tooltip-open",!1),tooltip.data("href")&&tooltip.data("href").hasClass("tooltipHover")&&tooltip.data("href").removeClass("tooltipHover");
var c=tooltip.data("tooltip-closedelay");c||(c=2e3);var d=window.setTimeout(function(){
tooltip.data("tooltip-open")||(tooltip.addClass("offscreen"),o==tooltip&&(o=null));
},c);tooltip.data("timerId",d),a("body.keep-tooltip-open").size()&&tooltip.data("tooltip-open",!0);
}function h(b,c){var d=c.standardWidth,e=b.find(".ms-tooltip-body-inner");if(parseInt(b[0].innerHTML.indexOf("marker__T62_NG__template"))>1){
var f={standardWidth:704,maxWidth:704,tooltipType:"tooltip"};c=a.extend({},c,f)}if("small-tooltip"==c.tooltipType){
var g=e.find("img");0==g.length&&(g=e.find("object")),g.length>0&&(d=g.width(),d>c.maxWidth?d=c.maxWidth:d<c.minWidth&&(d=c.minWidth));
}else d=c.standardWidth;e.width(d),a.browser.msie&&"7.0"==a.browser.version&&(b.find(".ms-tooltip-head-inner").width(d+29),
b.find(".ms-tooltip-foot-inner").width(d+21)),a.browser.msie&&"6.0"==a.browser.version&&b.find(".ms-tooltip").width(d+37);
}function i(b){var c=a(b.currentTarget);b.currentTarget=document.tooltips[d(c.attr("href"))],
g(b)}function j(b){o&&(o.unbind(),o.data("timerId")&&(window.clearTimeout(o.data("timerId")),
o.data("timerId",null)),o.data("href")&&o.data("href").hasClass("tooltipHover")&&o.data("href").removeClass("tooltipHover"),
o.data("tooltip-open",!1),o.addClass("offscreen"));var c=a(b.currentTarget),e=document.tooltips[d(c.attr("href"))],i=c.data("tooltip-options");
if(e.data){e.data("tooltip-open",!0),e.data("tooltip-closedelay",i.closeDelay),e.data("href",c),
e.bind("mouseout",g),e.bind("mouseover",f),c.addClass("tooltipHover"),h(e,i),a.browser.msie&&"6.0"==a.browser.version&&(e.find(".ms-tooltip-head-inner").css("marginBottom","-5px"),
e.find(".ms-tooltip-body").css("background-image","url(/img/tt-body.gif)"),e.find(".ms-tooltip-head").css("background-image","url(/img/tt-top.gif)"),
e.find(".ms-tooltip-foot").css("background-image","url(/img/tt-bottom.gif)"),e.find(".ms-tooltip-head-inner").css("background-image","url(/img/tt-top-end.gif)"),
e.find(".ms-tooltip-foot-inner").css("background-image","url(/img/tt-bottom-end.gif)"));
var j=k(c,e),p=e.find(".ms-tooltip");j?p.css({"padding-top":"","padding-bottom":""
}):p.css({"padding-top":"","padding-bottom":""});var q=l(c,e),r=m(c,e);e.css({top:q,
left:r}),e.removeClass("offscreen"),o=e;var s=e.find(".ms-tooltip-arrow"),t=n(c,e);
j?(a.browser.msie&&"6.0"==a.browser.version?s.attr("src","/img/tel_arrowd.gif"):s.attr("src","/img/tel_arrowd.png"),
s.css({top:"",bottom:i.arrowHeight-52,left:t})):(a.browser.msie&&"6.0"==a.browser.version?s.attr("src","/img/tel_arrowu.gif"):s.attr("src","/img/tel_arrowu.png"),
s.css({top:-i.arrowHeight+9,bottom:"",left:t})),e.find(".tablewithmediaelements")&&e.find(".tablewithmediaelements").each(function(){
var b=a(this),c=0;c=b.height(),c=c<b.find(".mediawithcaption").height()?b.find(".mediawithcaption").height()+40:c,
b.css("height",c+"px")})}}function k(b,c){var d=b.offset().top-a(window).scrollTop(),e=a(window).height()-d-b.height();
return d>e&&b.offset().top>c.height()}function l(a,b){var c=a.data("tooltip-options"),d=0;
return d=k(a,b)?a.offset().top-b.height()-18:a.offset().top+a.height()-c.arrowHeight+54;
}function m(a,b){var c=a.width()/2+a.offset().left-b.width()/2;return 0>c?c=0:c>1005-b.width()&&(c=1005-b.width()),
c}function n(a,b){var c=a.data("tooltip-options"),d=a.offset().left+a.width()/2-b.offset().left-c.arrowWidth;
return d}document.tooltips={};var o=null,p=0;a.fn.enableTooltipBehaviour=function(b){
var c=a(this),f=a.extend({},a.fn.enableTooltipBehaviour.defaults,b);c.data("tooltip-options",f),
c.bind("mouseover",j),c.bind("mouseout",i);try{-1==c.attr("href").indexOf(".layerxml.")&&c.attr("href",c.attr("href").replace(/\.html/gi,".layerxml.html")),
e(c.attr("href"),f.layerAppender,c)}catch(g){"undefined"!=typeof console&&console.log&&console.log("Error loading tooltip "+g);
var h=d(c.attr("href"));document.tooltips[h]&&(document.tooltips[h]="tooltip was not found...");
}},a.fn.enableTooltipBehaviour.defaults={minWidth:38,standardWidth:241,maxWidth:465,
arrowWidth:32,arrowHeight:32,closeDelay:1500,layerAppender:"#ms-tooltip-veil",tooltipType:"small-tooltip"
},a.getCurrentTooltipCount=function(){return p}}(jQuery),jQuery(function(){jQuery("a.tooltip").each(function(){
jQuery(this).enableTooltipBehaviour()})}),jQuery(document).ready(function(){var a=jQuery("ul.ms-rb-divisionChanger");
if(a.length>0){var b=jQuery("li.ms-rb-currentDivisionImage"),c=jQuery("li.ms-rb-currentDivisionText"),d=jQuery("li.ms-rb-divisions"),e=jQuery("ul.ms-rb-divisions"),f=(jQuery("div.ms-rb-divisionChanger"),
jQuery("li.ms-rb-currentDivisionText span")),g=jQuery("ul.ms-rb-divisionChanger li.ms-rb-currentDivisionText span");
a.unbind("mouseenter"),a.unbind("mouseleave"),b.unbind("click"),c.unbind("click"),
d.hide(),e.show();var h=!1,i=!1,j=(b.width(),c.height()+b.height(),"ms-rb-foldState"),k="ms-rb-unfoldState";
f.addClass(j);var l=function(a){h=!0,f.removeClass(j),f.addClass(k),b.stop(!0,!0).slideUp(700),
d.stop(!0,!0).slideDown(700,function(){h=!1})},m=function(){i||(i=!0,f.removeClass(k),
f.addClass(j),b.stop(!0,!0).slideDown(700,function(){i=!1}),d.stop(!0,!0).slideUp(700,function(){
i=!1}))},n={sensitivity:3,interval:50,over:l,timeout:701,out:m};jQuery(a).hoverIntent(n),
g.click(function(a){1==$(this).hasClass("ms-rb-unfoldState")?(a.stopPropagation(),
i=!0,f.removeClass(k),f.addClass(j),b.stop(!0,!0).slideDown(700,function(){i=!1}),
d.stop(!0,!0).slideUp(700,function(){i=!1})):(a.stopPropagation(),h=!0,f.removeClass(j),
f.addClass(k),b.stop(!0,!0).slideUp(700),d.stop(!0,!0).slideDown(700,function(){h=!1;
}))})}});