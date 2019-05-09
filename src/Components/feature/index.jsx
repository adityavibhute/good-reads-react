import React, { Component } from 'react';
import GoodReads from 'react-goodreads';

export default class Feature extends React.Component{
	render(){
		return(
			<div>
				<header className="App-header">
        <GoodReads apikey="Pb2Zij8eYqMWcts1hMo44g"/>
        </header>			
			</div>
		) 
	}
}