/**
 * provides all check functions for the passenger cars home pages (see
 * http://www.elated.com/articles/javascript-and-cookies/)
 * 
 */

(function() {

var varDetections;

window.getDetections = function () {
	if (!varDetections) {
		varDetections = new Detections();
	  }
	  return varDetections;
};

function Detections()  {

}
//private variables
var selector = "";
var BANDWIDTH_COOKIE = "HighBandwidth";
var FLASH_SELECTOR = ".flash";
var minFlashVersion = 8;

var url;
var query;
var extension;
var anchor;

var fallbackRedirectUrl;
var noRedirectToFlash;

// variables relevant for bandwidth check
var thresholdDuration;
var fileLocation;
var cookieValidity;	


Detections.prototype.init = function(_minFlashVersion, _noRedirectToFlash, _fallbackRedirectUrl) {
	// real constructor code
	if (_minFlashVersion) {
		minFlashVersion = _minFlashVersion;
	}

	if (_fallbackRedirectUrl) {
		fallbackRedirectUrl = _fallbackRedirectUrl;
	}

	if (_noRedirectToFlash) {
		noRedirectToFlash = _noRedirectToFlash;
	}
	splitUrl();	
	
};  

//new detection instance var
Detections.prototype.doOnDOMReady = false;
Detections.prototype.session = false;

	// private methods
	/**
	 * splits url into part url (excluding extension, including selectors),
	 * extension and query
	 */
	var splitUrl = function /* void */() {
		/* String */url = window.location.href;
		/* String */query = "";
		/* String */extension = "";
		/* String */anchor = "";
		var /* int */start = url.indexOf('?');
		var /* int */startAnchor = url.indexOf('#');
		if (start > 0 && startAnchor == -1) {
			query = url.substring(start, url.length);
			url = url.substring(0, start);
			anchor = "";
		} else if (start > 0 && startAnchor > start) {
			query = url.substring(start, startAnchor);
			anchor = url.substring(startAnchor, url.length);
			url = url.substring(0, start);
		} else if (startAnchor > 0) {
			anchor = url.substring(startAnchor, url.length);
			url = url.substring(0, startAnchor);
		}
		// split extension
		start = url.lastIndexOf('.');
		if (start > 0) {
			extension = url.substring(start, url.length);
			url = url.substring(0, start);
		}
	};
	
	/**
	 * checks the downloading time of one image
	 * @param threshold loading time in ms
	 * @param fileLocation URL of the image file to load
	 * @param cookieExpiry expiration 
	 * 
	 */
	var checkBandwidth = function /* void */() {
		start = (new Date()).getTime();
		var img = new Image();
		img.onload = function() {
			bandwidthCheckFinished(start);
		};
		img.src = fileLocation + '?t=' + escape(start);
		return;
	}

	/**
	 * 
	 * @return true if session cookie is set, otherwise false (also sets the session cookie)
	 */
	Detections.prototype.hasSession = function /* boolean */() {
		return this.session;
	}
	
	Detections.prototype.checkSession = function /* boolean */() {
		var SESSIONCOOKIE = "session";
		if (get_cookie(SESSIONCOOKIE) == "true") {
			this.session = true; 
		} else {
			set_cookie(SESSIONCOOKIE, "true");
			this.session = false;
		}
	};	

	var isOnFlashPage = function () {
		var currenturl = window.location.href;
		var qMarkIndex = currenturl.indexOf('?');
		var hashIndex = currenturl.indexOf('#');
		if (qMarkIndex != -1 && (hashIndex == -1 || qMarkIndex < hashIndex)) {
			currenturl = currenturl.substring(0, qMarkIndex);
		} else if (hashIndex != -1 && (qMarkIndex == -1 || hashIndex < qMarkIndex)) {
			currenturl = currenturl.substring(0, hashIndex);
		}
		return currenturl.indexOf(FLASH_SELECTOR + ".") > -1;
	}
	

	/**
	 * callback which is called when the bandwidth check is finished
	 * 
	 * @param start
	 * @param threshold
	 * @param cookie_expiry
	 * @return
	 */
	var bandwidthCheckFinished = function /* void */(start) {
		var end = (new Date()).getTime();
		if (end - start < thresholdDuration) {
			// store result in cookie
			set_cookie(BANDWIDTH_COOKIE, "true", cookieValidity);
			redirect();
		}
	};

	/**
	 * redirect to another page we must rescue all previous selectors (contained
	 * in redirectHandle) and previous parameters
	 */
	var redirect = function /* void */() {
		replaceUrl(url + selector + extension + query + anchor);
	};
	
	/**
	 * redirect to the fallbackPage if one was given with the constructor
	 */
	var redirectToFallback = function /* void */() {
		if (fallbackRedirectUrl && fallbackRedirectUrl.length > 0) {
			replaceUrl(fallbackRedirectUrl);
		}
	};
	
	/**
	* replaces actual page with give url.
	*/
	var replaceUrl = function /* void */ (url) {
		// lets make sure, that the trackingManager does not send data after we have set the new location,
		// because we really did not visit this page...
		embTrackingManager().setSuppressSendData(true);
		//use location.replace instead of location.href, because we don't want the actual page to appear in history
		window.location.replace(url);
	};
	
	/**
	 * get best match of a key within a given associative array (which is not an empty string)
	 * best match is either:
	 * a) key is identical
	 * b) the beginning of key we are looking for is the complete key of one array item, and there is no better match
	 * (longer keyprefix which is equal to a complete key of another array item)
	 */
	var getBestMatch = function /*String */(key, list) {
		if (list[key] && list[key] != "") {
			return list[key]
		}
		
		var result;
		for (var item  in list) {
			if (key.indexOf(item) == 0) {
				if (!result || result.length < item.length) {
					if (list[item] != "") {
						result = list[item];
					}
				}
			}
		}
		return result;
	};
	
	var doFlashVersionCheck = function() {
		if (noRedirectToFlash) {
			return false;
		} else {
			return flash_versioncheck(minFlashVersion);
		}
	}
	
	
	
	// public methods
	Detections.prototype.doTouchDetection = function() {
		if (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
			jQuery(".unknown-touch").removeClass('unknown-touch').addClass('touch');
		} else {
			jQuery(".unknown-touch").removeClass('unknown-touch').addClass('non-touch');
		}
	};
	
	Detections.prototype.doFlashCheck = function () {
		if (isOnFlashPage())
			return;
		
		// flash is installed...
		if (doFlashVersionCheck()) {
			selector += FLASH_SELECTOR;
			redirect();
		} else {
			redirectToFallback();
		}
			
	};
	
	// public methods
	Detections.prototype.doFlashCheckNoRedirect = function () {	
		if (doFlashVersionCheck()) {
			jQuery(".unknown-flash").removeClass('unknown-flash').addClass('flash-available');			
		} else {
			jQuery(".unknown-flash").removeClass('unknown-flash').addClass('no-flash');
		}
	};

	Detections.prototype.doFavoriteCheck = function () {
		if  (isOnFlashPage())
			return;
		
		// flash is installed...
		if (doFlashVersionCheck()) {
			selector += FLASH_SELECTOR;
		
			// check favorite car of current user
			var favoriteBmCode = window.embGetProfileManager().getFavoriteBmCode();
			if (favoriteBmCode) {
				var item = getBestMatch(favoriteBmCode, favoritePages);
				if (item) {
					url = item;
				}
			}
			redirect();
			
		} else {
			redirectToFallback();
		}
	};
	
	/**
	 * 
	 */
	Detections.prototype.doExtendedChecks = function (/*int*/_thresholdDuration, /* String */_fileLocation, 
														/* int */_cookieValidity, /*boolean*/forceNoFlash) {
		
		thresholdDuration = _thresholdDuration;
		fileLocation = _fileLocation;
		cookieValidity = _cookieValidity;
		
		// check for flash
		if (forceNoFlash) {
			isFlashInstalled = false;
		} else {
			isFlashInstalled = doFlashVersionCheck();
		}
		alreadyOnFlashPage = isOnFlashPage();

		if (isFlashInstalled && !alreadyOnFlashPage) {
			selector += FLASH_SELECTOR;
		}

		// no adaptive pages without flash plugin
		// check for adaptive page
		var modelBmCodes = get_cookie("model");
		if (typeof oldModelBmCode != "undefined") modelBmCodes = oldModelBmCode;
		var businessUnitCode = get_cookie("unit");
		if (typeof oldBusinessUnitCode != "undefined") businessUnitCode = oldBusinessUnitCode;
		
		this.checkSession();
		// only use adaptive page if either there's no session or we are on the correct BU
		if (!this.session || (businessUnitCode == currentPageBUCode)) {
			if (modelBmCodes) {
				// we need to have an array with key = model, value = associated
				// adaptive home. Run through all BMCodes within the cookie and redirect
				// on the first match.
				var bmCodes = modelBmCodes.split(',');
				for (i = 0; i < bmCodes.length; i++) {
					var modelBmCode = bmCodes[i].replace (/^\s+/, '').replace (/\s+$/, '');
					if (adaptiveHomePages[modelBmCode]) {
						url = adaptiveHomePages[modelBmCode];
						redirect();
						return;
					}
				}
			}
			if (businessUnitCode) {
				// we need to have an array with key = unit, value = associated home
				// business unit page
				if (homeBusinessUnitPages[businessUnitCode]
						&& (businessUnitCode != currentPageBUCode)) {
					url = homeBusinessUnitPages[businessUnitCode];
					redirect();
					return;
				}
			}
		}

		if (isFlashInstalled && !alreadyOnFlashPage) {
			// check for bandwidth
			if (!get_cookie(BANDWIDTH_COOKIE)) {
				checkBandwidth();
			} else {
				redirect();
			}
		}
	};
	
})();