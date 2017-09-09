else if(e.target.id=="import") {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {file: "src/content_script.js"});
  });
}