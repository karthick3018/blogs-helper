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
      document.removeEventListener("paste", () => {});
    };
  }, []);
  return (
    <ResizableBox
      width={300}
      height={200}
      minConstraints={[100, 100]}
      maxConstraints={[340, 700]}
    >
      <>
        <div className="icon-wrapper">
          <div className="icon red"></div>
          <div className="icon yellow"></div>
          <div className="icon green"></div>
        </div>

        <div className="editable-div" id="kr-edit" placeholder="...." contentEditable>
          {" "}
        </div>
      </>
    </ResizableBox>
  );
}

export default App;
