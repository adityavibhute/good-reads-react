import React from 'react';
import axios from 'axios';
import './style.css';

export default class About extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			dataMap : []
		};
	}
	componentDidMount(){
		const inst = this;
		// list : https://www.goodreads.com/author/list/18541?format=xml&key=Pb2Zij8eYqMWcts1hMo44g
		axios.get('https://www.goodreads.com/search/index.xml?key=Pb2Zij8eYqMWcts1hMo44g&q=The New Book of Middle Eastern Food')
		  .then(function (response) {
		    // handle success
		    console.log("book response ", response);
		  })
		  .catch(function (error) {
		    // handle error
		    console.log(error);
		  });
	}
	render(){
		return(
			<div>
				<div className="container">
				<h2>Users</h2>
				{
					this.state.dataMap && this.state.dataMap.map(function(item){
						return(
							<div key={item.id} className="col-md-4 col-sm-6 col-xs-12 userDetail">
								<a href={item.html_url} target="_blank"><img src={item.avatar_url} /></a>
							</div>
						)
					})
				}
				</div>
			</div>
		) 
	}
}