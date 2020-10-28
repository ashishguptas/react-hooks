import React, { createContext, useReducer } from 'react';
import './App.css';
import UseMemo from './components/UseMemo';
import UseRef from './components/UseRef';
import UseRefTwo from './components/UseRefTwo';
// import ComponentsC from './components/ComponentsC';
// import HookMouse from './components/HookMouse';
// import MouseContainer from './components/MouseContainer';
// import UseEffectOne from './components/UseEffectOne';
// import UseReducerOne from './components/UseReducerOne';
// import UseReducerThree from './components/UseReducerThree';
// import UseReducerTwo from './components/UseReducerTwo';
// import Usestate from './components/Usestate';
// import UseState2 from './components/UseState2';
// import UseState3 from './components/UseState3';
// import UseState4 from './components/UseState4';
// import DataFetching from './DataFetching';
// import IntervalHooksCounter from './IntervalHooksCounter';
// import AFirst from './components/AFirst';
// import BSecond from './components/BSecond';
// import CThird from './components/CThird';
// import UseReducerDataFetch from './components/UseReducerDataFetch';
// import UseReducerDataFetchTwo from './components/UseReducerDataFetchTwo';
import ParentComponent from './usecallbackHook/ParentComponent';
import CutomHook from './components/CutomHook';
import CutomHookTwo from './components/CutomHookTwo';

export const UserContext = createContext();
export const ChannelContext = createContext();

export const CounterContext = createContext();

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increnment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState    
        default:
            return state
    }
}

function App() {

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="app">
      {/* UseState*/}

      {/* 
        <Usestate />
        <UseState2 />
        <UseState3 />
        <UseState4 />
      */}

      {/* UseEffect */}

      {/*
        <UseEffectOne />      
        <HookMouse />
        <MouseContainer />
        <IntervalHooksCounter />
        <DataFetching />
      */}

      {/*
        context API
        <UserContext.Provider value={'Ashish'}>
          <ChannelContext.Provider value={'Ashg21'}>
            <ComponentsC />
          </ChannelContext.Provider>
        </UserContext.Provider>
      */}

      {/* useReucer 
        <UseReducerOne />
        <UseReducerTwo />
        <UseReducerThree />      
        <CounterContext.Provider value={{countState: count, CountDispatch: dispatch}}>
          <div>Count - {count}</div>
          <AFirst />
          <BSecond />
          <CThird />
        </CounterContext.Provider>
        <UseReducerDataFetch />
        <UseReducerDataFetchTwo />
      */}

      {
        /*
          usecallback 
          <ParentComponent />
          <UseMemo />
          <UseRef />
          <UseRefTwo />
        */
      }

      <CutomHook />
      <CutomHookTwo />



    </div>
  );
}

export default App;
