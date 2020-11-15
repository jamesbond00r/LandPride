import React from 'react';
import { Route, Link, BrowserRouter , Switch } from 'react-router-dom';
import NotFound from "../components/NotFound.js";
import App from "../App.js"


export default function Routes() {
  return (
      
      
      <BrowserRouter>
 <Switch>
 

	
		<Route exact path="/">
		<App/>
	
		</Route>
		

		<Route>
			<NotFound />
		</Route>
		</Switch>
		
 

 
</BrowserRouter>

		


	);
}