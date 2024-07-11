import './App.css';

function App() {
  const numbers = [ 7, 8 ,9 , 4 , 5 , 6, 1 , 2 , 3 , 0 ]
  
  return (
    <div className='calculator-wrapper'>
      <div className='result'>
        <input type="text" name="input" className='form-control' id="" />
      </div>
      <div className='calculator'>
        <div className='calculator-numbers'>
          <div className='row'>
            <div className="">
              <button className='btn  number'>7</button>
              <button className='btn  number'>8</button>
              <button className='btn  number'>9</button>
              </div>
          </div>
          <div className='row'>
            <div className="col">
              <button className='btn  number'>4</button>
              <button className='btn  number'>5</button>
              <button className='btn  number'>6</button>
              </div>
          </div>
          <div className='row'>
            <div className="col">
              <button className='btn  number'>1</button>
              <button className='btn  number'>2</button>
              <button className='btn  number'>3</button>
              </div>
          </div>
          <div className="row">
            <div><button className='btn number'>0</button></div>
          </div>
        </div>
        <div className='calculator-keys'>
          <button className='operator'>X</button>
          <button className='operator'>%</button>
          <button className='operator'>+</button>
          <button className='operator'>-</button>
          <button className='operator'>=</button>
          <button className='operator'>.</button>
        </div>
      </div>
    </div>
  );
}

export default App;
