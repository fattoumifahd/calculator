
import React, { useReducer } from 'react'
import "./App.css"
const ACTIONS = {
  ADD : 'add',
  DEL : "delete",
  MULTI : "multiplay", 
  DIVIDE : "divide",
  CLEAR : "clear",
  CALC : 'calc'
}

// const reduce = (state , {type , payload}) => {
//   switch (type) {
//   case ACTIONS.CLEAR :
//      return (state == null) ? state : {}
//   case ACTIONS.ADD 
//   }
// }

export default function App() {
const [{curentOperate , prevOperate , operation}, dispatch ] = useReducer({})

  return (
    <div>
      <div className="wrapper">
        <div className="operations">
        <div className='preOperate'>{prevOperate || ""}</div>
        <div className='currentOperate'>{curentOperate || ""}</div>
        </div>
        <div className='body'>
          <div className='btn AC oper'>AC</div>
          <div className='btn oper'>DEL</div>
          <div className='btn oper' >÷ </div>
          <br />
          <div className='btn digit'>7</div>
          <div className='btn digit'>8</div>
          <div className='btn digit'>9</div>

          <div className='btn oper'>x</div>
          <div className='btn digit'>4</div>
          <div className='btn digit'>5</div>
          <div className='btn digit'>6</div>
          <div className='btn oper'>-</div>
          <div className='btn digit'>1</div>
          <div className='btn digit'>2</div>
          <div className='btn digit'>3</div>
          <div className='btn oper'>+</div>
          <div className='btn oper'>.</div>
          <div className='btn digit'>0</div>
          <div className='btn oper'>%</div>
          <div className='btn oper'>=</div>
        </div>


      </div>
    </div>
  )
}
