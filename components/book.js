import React from 'react';
import axios from 'axios'; 

export default class Book extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data:[]
		}
	}
	componentWillReceiveProps(nextProps){
		if(this.props.currentBook !== nextProps.currentBook){
			axios.get('http://localhost:3000/books/'+nextProps.currentBook+'/').then(response=>{
				this.setState({
					data:response.data
				})
			})
		}
	}

	render(){
		const data = this.state.data;
		if(data[0] !== undefined){
			return(<div className="book" id="bookCont">
				<span>{data[0].bookName}</span>				
				<p>{data[0].description}</p>
				<img src={data[0].img}/>
			</div>);			
		}else{
			return <div className="contentEmpty"></div>
		}

	}
}
