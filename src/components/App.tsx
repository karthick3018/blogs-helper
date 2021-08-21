import React,{useEffect} from 'react';

const value = () => {
  var div = document.createElement("div");
  document.body.appendChild(div);
  div.innerText = "test123";
  document.body.style.height = "10%";
  document.body.style.width = "220px";
  document.body.style.top = "0px";
  document.body.style.right = "0px";
  document.body.style.zIndex = "9000000000000000000";
  document.body.style.backgroundColor = "orange";
  document.body.style.position = "fixed";
}

function App() {
  let color = "#3aa757";
  useEffect(() => {
    chrome.browserAction.onClicked.addListener(()=>{
      console.log("chrasdfsdome",chrome);
    }
    );
     chrome.runtime.onInstalled.addListener(() => {
       console.log(
         "Default background color set to %cgreen",
         `color: ${color}`
       );
       chrome.storage.sync.set({ color });
     });
  }, [])
  return (
    <div className="App">
      Karthick Blog extension
      {value()}
    </div>
  );
}

export default App;
