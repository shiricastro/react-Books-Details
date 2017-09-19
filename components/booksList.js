import React from 'react';
import axios from 'axios'; 
import{
	Link
} from 'react-router-dom';

export default class BooksList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data:[]

		}
	}

	componentDidMount(){
		this.getBooks();
	}
	getBooks(){
		axios.get('http://localhost:3000/books').then(response => {
			const dataVal = response.data;
			this.setState({
				data:dataVal			
			})
		})		
	}
	currentBook(currentBook){
		this.props.currentBook(currentBook);
	}
	deleteBook(bookId){
		console.log(bookId);
		axios.delete('http://localhost:3000/books/'+bookId+'/').then(response => {
			console.log(response);
			this.getBooks();
		})		
	}
	render(){
		return(<div className="bookList">
			<header className="listTitle">
				<span>My List Of Books:</span>
				<Link to="/newBook">Add Book</Link>
			</header>
			<div className="booksListwrap">
			{this.state.data.map((x,idx)=>(
				<div className="book bookClick" key={idx} onClick={(e)=> {if(e.target.className !== 'deleteButton'){return this.currentBook(x.bookName)}}}>
					<button className="deleteButton" onClick={()=> this.deleteBook(x._id)}>X</button>
					<span>{x.bookName}</span>
					<div className="wrapBook">
						<p>{x.description}</p>
						<img src={x.img} />
					</div>
				</div>
			))}	
			</div>
		</div>);
	}
}
