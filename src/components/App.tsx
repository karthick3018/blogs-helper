import React,{useEffect} from 'react';

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
      <h1> Karthick Blog extension</h1>
    </div>
  );
}

export default App;
