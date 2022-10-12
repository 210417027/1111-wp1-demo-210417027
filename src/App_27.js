import React, { useState, useEffect } from 'react'
import List_27 from './components/List_27'
import Alert_27 from './components/Alert_27'

const App_27 = () => {
  const [name , setName] = useState('');
  const [list , setList] = useState([]);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: ''
  });

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({show, msg, type });
  };

  const handleSubmit = (e) => {
     e.preventDefault();
     if (!name){
      showAlert(true, 'please enter value', 'danger');
      //
     } else {
      showAlert(true, 'value changed', 'success');
      const newItem = {
        id: new Date().getTime().toString(),
        title: name
      };
      setList([...list, newItem]);
      setName('');
};

  };

  return (
  <>
    <section className="section-center">
      <form className="grocery-from" onSubmit={handleSubmit}>
        <h3>Grocery Bud - 210417027</h3>
        <div className="form-control">
          <input type="text" className="grocery" placeholder="e.g.eggs" value={name} onChange={(e) => {setName(e.target.value)}}/>
          <button type="submit" className="submit-btn" >submit</button>
        </div>
      </form>
    </section>
  </>
  )
}

export default App_27
