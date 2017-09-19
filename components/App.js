import React, { Component } from 'react';
import{
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import Books from './books';
import NewBook from './newBook';

export default class App extends Component {
  render() {
    return (
    	<Router>
    		<div>
    			<Route path="/books" component={Books}/>
    			<Route path="/newBook" component={NewBook} />
    		</div>
    	</Router>
    );
  }
}


