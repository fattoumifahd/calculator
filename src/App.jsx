
import React, { useReducer } from 'react'
import "./App.css"


const ACTIONS = {
  ADD : 'add',
  DEL : "delete",
  OPERATE: "choose-operation",
  CLEAR : "clear",
  CALC : 'calc'
}
const reduce = (state , {type , payload}) => {
  switch (type) {
  case ACTIONS.ADD :
      if (payload == '0' && state.curentOperate == ""){
        return state
      }
      if (payload === '.' && state.curentOperate.includes('.')){
        return state
      }
        return {
          ...state, 
          curentOperate : `${state.curentOperate||""}${payload}`
        }
    case ACTIONS.OPERATE :
      if (state.curentOperate === "" && state.prevOperate === "") {
        return state
      }
      if (state.curentOperate === ""){
        return state
      }
      if (state.prevOperate !== "") {

      }
      return {
        prevOperate : `${state.curentOperate} ${payload}`,
        operation : payload
      }
      
      case ACTIONS.CALC :
        if (state.curentOperate === "" || state.prevOperate === "" || state.operation === null){
          return state
        }

        return {
          ...state,
          prevOperate : "",
          operation : "",
          curentOperate : calc(state.curentOperate, state.prevOperate , state.operation)
        }

      case ACTIONS.DEL :
        return {
          ...state,
          curentOperate : state.curentOperate.slice(0,-1)
        }
      
    
    case ACTIONS.CLEAR : 
    return {
      curentOperate : "",
      prevOperate : ""
    }
      
    default : 
    return state
  }
}


function calc(curentOperate , prevOperate , operation) {
  let pre = parseFloat(prevOperate)
  let cure = parseFloat(curentOperate)
  console.log(pre)
  console.log(cure)
  let result = "";
  switch(operation){
    case "*":
      result = pre * cure
      break
    case "/" : 
      result = pre / cure
      break
    case "-" : 
      result = pre - cure
      break
    case "+" : 
      result = pre + cure
      break
    case "%" : 
      result = pre % cure
      break
  }
  return result.toString()
}
export default function App() {
  const [state, dispatch ] = useReducer(reduce ,{curentOperate : "" , prevOperate : "" , operation : null})

  return (
    <div>
      <div className="wrapper">
        <div className="operations">
        <div className='preOperate'>{state.prevOperate || ""}</div>
        <div className='currentOperate'>{state.curentOperate || ""}</div>
        </div>
        <div className='body'>
          <div className='btn AC oper' onClick={()=> dispatch({type: "clear" })}>AC</div>
          <div className='btn oper' onClick={()=>dispatch({type:"delete"})}>DEL</div>
          <div className='btn oper' onClick={()=>dispatch({type : 'choose-operation' , payload : "/"})}>÷ </div>
          <br />
          <div className='btn digit' onClick={()=>dispatch({type: 'add' , payload : 7})}>7</div>
          <div className='btn digit' onClick={()=>dispatch({type: 'add' , payload : 8})}>8</div>
          <div className='btn digit' onClick={()=>dispatch({type: 'add' , payload : 9})}>9</div>

          <div className='btn oper' onClick={()=>dispatch({type : 'choose-operation' , payload : "*"})}>x</div>
          <div className='btn digit' onClick={()=>dispatch({type: 'add' , payload : 4})}>4</div>
          <div className='btn digit' onClick={()=>dispatch({type: 'add' , payload : 5})}>5</div>
          <div className='btn digit' onClick={()=>dispatch({type: 'add' , payload : 6})}>6</div>
          <div className='btn oper' onClick={()=>dispatch({type : 'choose-operation' , payload : "-"})}>-</div>
          <div className='btn digit' onClick={()=>dispatch({type: 'add' , payload : 1})}>1</div>
          <div className='btn digit' onClick={()=>dispatch({type: 'add' , payload : 2})}>2</div>
          <div className='btn digit' onClick={()=>dispatch({type: 'add' , payload : 3})}>3</div>
          <div className='btn oper' onClick={()=>dispatch({type : 'choose-operation' , payload : "+"})}>+</div>
          <div className='btn oper' onClick={()=>dispatch({type: 'add' , payload : '.'})}>.</div>
          <div className='btn digit' onClick={()=>dispatch({type: 'add' , payload : 0})}>0</div>
          <div className='btn oper' onClick={()=>dispatch({type : 'choose-operation' , payload : "%"})}>%</div>
          <div className='btn oper' onClick={()=>dispatch({type: 'calc'})}>=</div>
        </div>


      </div>
    </div>
  )
}
