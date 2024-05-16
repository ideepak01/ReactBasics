import "./App.css";
import First from "./Components/first/first.jsx";
import Second from "./Components/second/second.jsx";
import CondRend from "./Components/conditional_rendering/condRend.jsx";
import List from "./Components/listRender/list.jsx";
import ListProps from "./Components/listRender/listProps.jsx";
import Button from "./Components/clickEvents/button.jsx"
import UseState from "./Components/useStates/useState.jsx";
import OnChangeEvent from "./Components/onChangeEventHandler/onChangeEvent.jsx";
import ColorPicker from "./Components/onChangeEventHandler/colorPickerApp.jsx";
import UpdaterFunc from "./Components/updaterFunctions/updaterFunc.jsx";
import UpdateObj from "./Components/updateObjectsInState/updateObj.jsx";
import UpdateArray from "./Components/updateObjectsInState/updateArray.jsx";
import UpdateArrayOfObj from "./Components/updateObjectsInState/updateArrayOfObj.jsx";
import ToDoList from "./Components/ToDoList/toDoList.jsx";

function App() {
  const mobileList = [
    { id: 2, name: "Xiaomi" },
    { id: 3, name: "Realme" },
    { id: 1, name: "OnePlus" },
    { id: 4, name: "Apple" },
  ];
  const laptopList = [
    { id: 2, name: "Lenovo" },
    { id: 3, name: "MacBook" },
    { id: 1, name: "Asus" },
    { id: 4, name: "Dell" },
  ];

  return (
    <>
      <First></First>
      <Second name="Deepak"></Second>

      <h3>Conditional Rendering</h3>
      <CondRend isLogged={false} />
      <CondRend isLogged={true} username="User" />

      <h3>List Rendering</h3>
      <List />

      <h5>Reusable List props</h5>
      <ListProps item={mobileList} category="mobiles" />
      <ListProps item={laptopList} category="laptops" />
      <ListProps  />

      <h5>Click Events</h5>
      <Button></Button>

      <h5>useStates</h5>
      <UseState />

      <h5>on change event</h5>
      <OnChangeEvent/>

      <h5 style={{marginLeft:"9em", fontSize:"1em"}}>Color Picker App</h5>
      <ColorPicker></ColorPicker>

      <h3 style={{textAlign:"center"}}>Counter and Updater Function</h3>
      <UpdaterFunc/>

      <h3>Update Objects</h3>
      <UpdateObj></UpdateObj>
      <UpdateArray/>
      <UpdateArrayOfObj></UpdateArrayOfObj>

      {/* <h3>To Do List</h3> */}
      <ToDoList></ToDoList>


    </>
  );
}

export default App;
