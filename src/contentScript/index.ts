// If your extension doesn't need a content script, just leave this file empty

// This is an example of a script that will run on every page. This can alter pages
// Don't forget to change `matches` in manifest.json if you want to only change specific webpages
createAnIframe();



export function createAnIframe() {

  chrome.runtime.onMessage.addListener(function(msg, sender){
    if(msg === "toggle"){
      toggle();
    }
})

var iframe = document.createElement('iframe'); 
iframe.style.height = "100%";
iframe.style.width = "0px";
iframe.style.position = "fixed";
iframe.style.top = "70px";
iframe.style.right = "1px";
iframe.style.border = "none";
iframe.style.zIndex = "99";
iframe.src = chrome.extension.getURL("popup.html")

document.body.appendChild(iframe);

function toggle(){
    if(iframe.style.width === "0px"){
        iframe.style.width="350px";
    }
    else{
        iframe.style.width="0px";
    }
}
}
