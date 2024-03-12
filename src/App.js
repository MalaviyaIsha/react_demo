import "./App.css";
import Users from "./components/Users";
import Userclass from "./components/Userclass";
import Nestedcomponent from "./components/Nestedcomponent";
import Clickevent from "./components/Clickevent";
import State from "./components/State";
import Stateclass from "./components/Stateclass";
import Props from "./components/Props";
import { useState } from "react";
import Propsclass from "./components/Propsclass";
import GetValue from "./components/GetValue";
import HideShow from "./components/HideShow";
import Form from "./components/Form";
import Condition from "./components/Condition";
import PassFunctionProps from "./components/PassFunctionProps";
import Parentcomponent from "./components/Parentcomponent";
import Childcomponent from "./components/Childcomponent";
import ComponentDidMount from "./components/lifecycleMethods/ComponentDidMount";
import ComponentDidUpdate from "./components/lifecycleMethods/ComponentDidUpdate";
import ShouldComponentUpdate from "./components/lifecycleMethods/ShouldComponentUpdate";
import ComponentWillUnmount from "./components/lifecycleMethods/ComponentWillUnmount";
import UseEffectDemo from "./components/hooks/UseEffect";
import StyleType from "./components/styleTypes/StyleType";
import Map from "./components/handleArray/Map";
import NestedList from "./components/handleArray/NestedList";
import ReuseComponent from "./components/handleArray/ReuseComponent";
import Students from "./components/handleArray/Students";
import LiftingState from "./components/liftingStateUp/LiftingState";
import PureComponent from "./components/pureComponent/PureClassComponent";
import UseMemoDemo from "./components/hooks/UseMemo";
import UseMemoPractice from "./components/hooks/UseMemoPractice";
import UseMemoList from "./components/hooks/UseMemoWithList";
import RefClassComponent from "./components/hooks/RefClassComponent";
import UseRefDemo from "./components/hooks/useRef";
import ForwardRefDemo from "./components/hooks/ForwardRef";
// import ControlledComponent from './components/controlledComponent/Controlled';
import UncontrolledComponent from "./components/controlledComponent/Uncontrolled";
import HighOrderComponent from "./components/highOrderComponent/HighOrderComponent";
import Routing from "./components/routingDemo/Routing";
import UseEffectList from "./components/hooks/UseEffectWithList";
import UseMemoDiff from "./components/diff_useeffect_usememo/useMemoDiff";
import UseEffectDiff from "./components/diff_useeffect_usememo/UseEffectDiff";
import Counter from "./components/highOrderComponent/Conter";
import Button from "./components/highOrderComponent/Button";
//import { Routes , Route } from "react-router-dom";
import Navbar from "./components/routingDemo/Navbar";
import Home from "./components/routingDemo/Home";
import About from "./components/routingDemo/About";
import RoutesDemo from "./components/routingDemo/RoutesDemo";
import { BrowserRouter as Router} from "react-router-dom";
import { UserListRouting } from "./components/routingDemo/UserListRouting";
import { GetData } from "./components/apiCall/GetData";
import { ReactMemo } from "./components/reactMemo/ReactMemo";


function App() {
  const [name, setName] = useState("Sofy");
  const passFunction = () => {
    alert("I'm function passed as a props");
  };

  return (
    <div className="App">
      {/* <Users />
      <Userclass />
      <Nestedcomponent />
      <Clickevent />
      <State />
      <Props
        name={name}
        email="Sofy@gmail.com"
        other={{ address: "surat", mobile: "0000" }}
      />
      <button onClick={() => setName("Max")}>Update</button>
      <Propsclass name="Sweta" />
      <GetValue />
      <HideShow />
      <Form />
      <Stateclass />
      <Condition />
      <PassFunctionProps data={passFunction} />
      <Parentcomponent />
      <ComponentDidMount />
      <ComponentDidUpdate />
      <ShouldComponentUpdate />
      <ComponentWillUnmount />
      <UseEffectDemo />
      <StyleType />
      <Map />
      <NestedList />
      <ReuseComponent />
      <Students />
      <LiftingState />
      <PureComponent />
      <UseMemoDemo />
      <UseMemoPractice />   
      <RefClassComponent />
      <UseRefDemo />
      <ForwardRefDemo />
      <ControlledComponent/>
      <UncontrolledComponent />
      <HighOrderComponent /> */}
      {/* <UseMemoList /> */}
      {/* <UseEffectList/> */}
      {/* <UseMemoDiff/> */}
      {/* <UseEffectDiff/> */}
      {/* <Counter/> */}
      {/* <Button/> */}

      {/* <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>}>
        </Route>
        <Route path="/about" element={<About />}>
        </Route>
      </Routes>  */}
      {/* <Routing/>*/}
        {/* <RoutesDemo /> */}
    {/* <UserListRouting/> */}
    <GetData/>
    {/* <ReactMemo/> */}
   
    </div>
  );
}

export default App;
