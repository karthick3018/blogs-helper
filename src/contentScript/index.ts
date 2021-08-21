// If your extension doesn't need a content script, just leave this file empty

// This is an example of a script that will run on every page. This can alter pages
// Don't forget to change `matches` in manifest.json if you want to only change specific webpages
printAllPageLinks();



// This needs to be an export due to typescript implementation limitation of needing '--isolatedModules' tsconfig
export function printAllPageLinks() {
  const allLinks = Array.from(document.querySelectorAll('a')).map(
    link => link.href
  );

  console.log('-'.repeat(30));
  console.log(
    `These are all ${allLinks.length} links on the current page that have been printed by the Sample Create React Extension`
  );
  console.log(allLinks);
  console.log('-'.repeat(30));

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
