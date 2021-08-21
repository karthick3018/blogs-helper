import { useEffect } from "react";
import { ResizableBox } from "react-resizable";

function App() {
  useEffect(() => {
    document.addEventListener("paste", function (e: ClipboardEvent) {
      e.preventDefault();

      let pastedText = "";

      if (e?.clipboardData?.getData) {
        pastedText = e.clipboardData.getData("text/html");
      }
      let editableDiv = document.getElementById("kr-edit") as HTMLDivElement;
      editableDiv.innerHTML = `${editableDiv?.innerHTML} ${pastedText}`;
    });

    return () => {
      document.removeEventListener("paste", ()=>{});
    }
  }, []);
  return (
    <div className="App">
      <ResizableBox
        width={200}
        height={200}
        minConstraints={[100, 100]}
        maxConstraints={[300, 300]}
      >
        <div className="editable-div" id="kr-edit" contentEditable>
          {" "}
          Karthick Blog extension
        </div>
      </ResizableBox>
    </div>
  );
}

export default App;
