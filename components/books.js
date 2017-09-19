import React from 'react';
import BooksList from './booksList';
import Book from './book';

export default class Books extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			currentBook:""
		}
	}
	currentBook(currentBook){
		const newState = this.state;
		newState['currentBook']= currentBook;
		this.setState(newState);
	}

	render(){
		return(
		<div className="mainContainer">
			<h1>Books</h1>
			<div className="container" >
				<BooksList currentBook={currentBook=> this.currentBook(currentBook)}/>
				<Book currentBook={this.state.currentBook}/>
			</div>
		</div>);
	}
}

