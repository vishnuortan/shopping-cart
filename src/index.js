import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Createaccount from './createaccount.js';
import * as serviceWorker from './serviceWorker';
import Nav from './nav.js';
import store from './store.js';
import Trimmer from './component/trimmer.js';
import Cart from './cart.js';
import Watches from './component/watches.js';
import Earphones from './component/earphones.js';
import Lg from './component/lg.js';
import Samsung from './component/samsung.js';
import Sony from './component/sony.js';
import Sonyphone from './component/sonyphone.js';
import Samsungphone from './component/samsungphone.js';
import Redmi from './component/redmi.js';
import Lenovo from './component/lenovo.js';
import Hp from './component/hp.js';
import Acer from './component/acer.js';
import Searchitem from './search.js';
 const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={Nav} />
	  <Route exact path="/createaccount" component={Createaccount} />
	   <Route exact path="/cart" component={Cart} />
	   <Route exact path="/search" component={Searchitem} />
	  <Route exact path="/trimmer" component={Trimmer} />
	  <Route exact path="/watches" component={Watches} />
	   <Route exact path="/earphones" component={Earphones} />
	    <Route exact path="/lg" component={Lg} />
		<Route exact path="/samsung" component={Samsung} />
		<Route exact path="/lg" component={Lg} />
	  <Route exact path="/sony" component={Sony} />
	  <Route exact path="/sonyphone" component={Sonyphone} />
	  <Route exact path="/samsungphone" component={Samsungphone} />
	  <Route exact path="/redmi" component={Redmi} />
	  <Route exact path="/lenovo" component={Lenovo} />
	  <Route exact path="/hp" component={Hp} />
	  <Route exact path="/acer" component={Acer} />
    </Switch>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));
				

serviceWorker.unregister();
