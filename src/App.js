import { Route } from 'react-router-dom';

// Import modules
import Home from '../src/pages/home/home';
import Seo from '../src/pages/seo/seo';

import './App.css';

const App = () => {
  return (
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/seo' component={Seo} />
    </div>
  )
}

export default App;