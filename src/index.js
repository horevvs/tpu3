import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Store from './Store'



const reducer = (state = Store, action) => {
  switch (action.type) {
    case 'close': {
      return { ...state, shows: !state.shows }
    }

    case 'add': {
      return {
        ...state, albums: state.albums.concat(
          action.payload,
        )
      }
    }

    case 'delete': {
      return {
        ...state, albums: state.albums.filter(item => item.id !== action.payload.id)
        
      }
    }

  
   
    default: return state
  }
};


const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>


);



