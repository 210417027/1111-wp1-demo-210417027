import React, { useState, useEffect } from 'react'
import List_27 from './components/List_27'
import Alert_27 from './components/Alert_27'

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if(list) {
    return JSON.parse(localStorage.getItem('list'));
  } else {
    return [];
  }
}

const App_27 = () => {
  const [name , setName] = useState('');
  const [list , setList] = useState(getLocalStorage());
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: ''
  });

  useEffect( () => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

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

  const removeItem = (id) => {
    showAlert(true, 'item removed', 'danger');
    setList( list.filter( (item) => item.id !== id ));
  };

  const clearList = () => {
    showAlert(true, 'item removed', 'danger');
    setList([]);
  }

  return (
  <>
    <section className="section-center">
      <form className="grocery-from" onSubmit={handleSubmit}>
        { alert.show && <Alert_27 {...alert} removeAlert={showAlert} />}
        <h3>Grocery Bud - 210417027</h3>
        <div className="form-control">
          <input type="text" className="grocery" placeholder="e.g.eggs" value={name} onChange={(e) => {setName(e.target.value)}}/>
          <button type="submit" className="submit-btn" >submit</button>
        </div>
      </form>
      { list.length > 0 && (
        <div className="grocery-container">
          <List_27 items={list} removeItem= {removeItem} />
          <button className="clear-btn" onClick={clearList}>clear items</button>
        </div>
      )}
    </section>
  </>
  )
}

export default App_27
