import  React,{ lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorBoundary from './errorboundary.js';
import * as serviceWorker from './serviceWorker';
import './css/suspense.css';

const  Home = lazy(() => import( './home.js'));
const Createaccount  = lazy(() => import( './createaccount.js'));
const  Nav = lazy(() => import('./nav.js'));
const store  = lazy(() => import( './store.js'));
const  Trimmer = lazy(() => import('./component/trimmer.js'));
const Cart = lazy(() => import('./cart.js'));
const Watches = lazy(() => import('./component/watches.js'));
const Earphones = lazy(() => import('./component/earphones.js'));
const Lg = lazy(() => import('./component/lg.js'));
const Samsung = lazy(() => import('./component/samsung.js'));
const  Sony = lazy(() => import( './component/sony.js'));
const Sonyphone  = lazy(() => import( './component/sonyphone.js'));
const  Samsungphone  = lazy(() => import('./component/samsungphone.js'));
const Redmi  = lazy(() => import( './component/redmi.js'));
const Lenovo  = lazy(() => import( './component/lenovo.js'));
const Hp  = lazy(() => import( './component/hp.js'));
const Acer  = lazy(() => import( './component/acer.js'));
const Searchitem  = lazy(() => import( './search.js'));



 const routing = (
  <Router>
    <Switch>
		<Suspense fallback={<div class="suspense">Loading Please Wait....</div>}>
		<ErrorBoundary>
			<Route exact path="/" component={Nav} />
		</ErrorBoundary>
		
		<ErrorBoundary>
			<Route exact path="/createaccount" component={Createaccount} />
		</ErrorBoundary>
		
		<ErrorBoundary>
			<Route exact path="/cart" component={Cart} />
		</ErrorBoundary>
		
		<ErrorBoundary>
			<Route exact path="/search" component={Searchitem} />
		</ErrorBoundary>	
		
		<ErrorBoundary>
			<Route exact path="/trimmer" component={Trimmer} />
		</ErrorBoundary>
		
		<ErrorBoundary>
			<Route exact path="/watches" component={Watches} />
		</ErrorBoundary>
		
		<ErrorBoundary>
			<Route exact path="/earphones" component={Earphones} />
		</ErrorBoundary>
		
		<ErrorBoundary>
			<Route exact path="/lg" component={Lg} />
		</ErrorBoundary>
		
		<ErrorBoundary>
			<Route exact path="/samsung" component={Samsung} />
		</ErrorBoundary>
		
		<ErrorBoundary>
			<Route exact path="/lg" component={Lg} />
		</ErrorBoundary>
		
		<ErrorBoundary>
			<Route exact path="/sony" component={Sony} />
		</ErrorBoundary>
		
		<ErrorBoundary>
			<Route exact path="/sonyphone" component={Sonyphone} />
		</ErrorBoundary>
		
		<ErrorBoundary>
			<Route exact path="/samsungphone" component={Samsungphone} />
		</ErrorBoundary>
		
		<ErrorBoundary>
			<Route exact path="/redmi" component={Redmi} />
		</ErrorBoundary>	
	
		<ErrorBoundary>
			<Route exact path="/lenovo" component={Lenovo} />
		</ErrorBoundary>
		
		<ErrorBoundary>
			<Route exact path="/hp" component={Hp} />
		</ErrorBoundary>
		
		<ErrorBoundary>
			<Route exact path="/acer" component={Acer} />
		</ErrorBoundary>
		</Suspense>
    </Switch>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));
				

serviceWorker.unregister();
