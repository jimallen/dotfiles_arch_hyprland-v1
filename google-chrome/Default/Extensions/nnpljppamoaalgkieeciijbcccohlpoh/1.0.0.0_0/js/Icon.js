var Icon = (function(){
  var exports = {};

  var _badgeBgColor = '#333';


  var init = function( settings ){
    if (settings.badgeBgColor) _badgeBgColor = settings.badgeBgColor;
  };


  /**
   * Set icon img, badge and title globally
   * @param {object} params:
   *        {mixed} path|imageData (optional)
   *        {text}  badge (optional)
   *        {text}  title (optional)
   */
  var setGlobal = function(params){
    if (params.path) chrome.browserAction.setIcon({path: params.path});
    else if (params.imageData) chrome.browserAction.setIcon({
      imageData: params.imageData
    });

    if (params.badge) {
      chrome.browserAction.setBadgeText({text: params.badge.toString()});
      chrome.browserAction.setBadgeBackgroundColor({color: _badgeBgColor});
    }

    if (params.title) chrome.browserAction.setTitle({title: params.title});
  };


  /**
   * Set icon img, badge and title for separate tab
   * @param {integer} tabId
   * @param {object} params:
   *        {mixed} path|imageData (optional)
   *        {text}  badge (optional)
   *        {text}  badgeBgColor
   *        {text}  title (optional)
   */
  var setTab = function( tabId, params ){
    if (params.path) chrome.browserAction.setIcon({
      tabId: tabId,
      path: params.path
    });
    else if (params.imageData) chrome.browserAction.setIcon({
      tabId: tabId,
      imageData: params.imageData
    });

    if (params.badge) {
      chrome.browserAction.setBadgeText({
        tabId: tabId,
        text: params.badge.toString()
      });
      chrome.browserAction.setBadgeBackgroundColor({
        tabId: tabId,
        color: params.badgeBgColor || _badgeBgColor
      });
    }
    if (params.title) chrome.browserAction.setTitle({
      tabId: tabId,
      title: params.title
    });
  };


  exports = {
    init: init,
    setTab: setTab,
    setGlobal: setGlobal
  };
  return exports;
})();

