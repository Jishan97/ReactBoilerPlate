import React from 'react';
import ReactDOM from 'react-dom/client';

/////// REDUX
// import Provider from react-redux
// import { Provider } from "react-redux";

// import global store from store folder
// const store = configureStore();

// store.subscribe(() => {
//   console.log(store.getState());
// });



import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <Provider store={store}> */}
    <App />
  {/* </Provider> */}
  </React.StrictMode>
);
