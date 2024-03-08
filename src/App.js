import './App.css';
import Users from './components/Users';
import Userclass from './components/Userclass';
import Nestedcomponent from './components/Nestedcomponent';
import Clickevent from './components/Clickevent';
import State from './components/State';
import Stateclass from './components/Stateclass';
import Props from './components/Props';
import { useState } from 'react';
import Propsclass from './components/Propsclass';
import GetValue from './components/GetValue';
import HideShow from './components/HideShow';
import Form from './components/Form';
import Condition from './components/Condition';
import PassFunctionProps from './components/PassFunctionProps';
import Parentcomponent from './components/Parentcomponent';
import ComponentDidMount from './components/lifecycleMethods/ComponentDidMount';
import ComponentDidUpdate from './components/lifecycleMethods/ComponentDidUpdate';
import ShouldComponentUpdate from './components/lifecycleMethods/ShouldComponentUpdate';
import ComponentWillUnmount from './components/lifecycleMethods/ComponentWillUnmount';
import UseEffectDemo from './components/hooks/UseEffect';
import StyleType from './components/styleTypes/StyleType';
import Map from './components/handleArray/Map';
import NestedList from './components/handleArray/NestedList';
import ReuseComponent from './components/handleArray/ReuseComponent';
import Students from './components/handleArray/Students';
import LiftingState from './components/liftingStateUp/LiftingState';
import PureComponent from './components/pureComponent/PureClassComponent';

//import WithoutJSX from './components/WithoutJSX.js';


function App() {
  const [name, setName] = useState("Sofy");
  const passFunction = () => {
    alert("I'm function passed as a props")
  }

  return (
    <div className="App">
      <Users />
      <Userclass />
      <Nestedcomponent />
      <Clickevent />
      <State />
      <Props name={name} email="Sofy@gmail.com" other={{ address: "surat", mobile: "0000" }} />
      <button onClick={() => setName("Max")}>Update</button>
      <Propsclass name="Sweta" />
      <GetValue />
      <HideShow />
      <Form />
      <Stateclass />
      <Condition />
      <PassFunctionProps  data= {passFunction}/>
      <Parentcomponent/>
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
     <LiftingState/>
     <PureComponent />
    </div>
  );
}

export default App;
