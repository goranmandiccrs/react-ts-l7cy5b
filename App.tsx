import * as React from 'react';
import './style.css';
import { useMst } from './store';
import { observer } from 'mobx-react';

export const App = observer(() => {
  const root = useMst();

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <input type="text" onChange={root.setSomeProp}></input>
    </div>
  );
});

export default App;
