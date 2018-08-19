chrome.runtime.onInstalled.addListener(function() {
    chrome.webNavigation.onCompleted.addListener(function() {
      console.log("Hi");
    }
);
});