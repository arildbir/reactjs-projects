import React from 'react';
import UserList from './containers/user-list';
import UserDetail from './containers/user-detail';
require ('../scss/style.scss');

//App er hovedbasen for vår app som vises ut i main index.js
const App = () => (
  <div>
    <h2>Venneliste:</h2>
      <UserList />
    <hr/>
    <h2>Detaljer om venn:</h2>
      <UserDetail />
  </div>
);//end of App

export default App;
