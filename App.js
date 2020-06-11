import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';

class App extends React.Component{
	constructor(){
		super()
		this.state={
			robots: [],
			searchF: ''
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users=>this.setState({robots: users}));
		
	}

	onSearchChange=(event)=>{
		this.setState({searchF: event.target.value})
		
	}
	render(){
		const filteredRobots= this.state.robots.filter(robots=>{
			return robots.name.toLowerCase().includes(this.state.searchF.toLowerCase());
		})
		if(this.state.robots.length===0){
			return <h1>Loading</h1>
		} else {
			return(
				<div className='tc'>
				<h1 className='f1'>Robo Friends</h1>
				<SearchBox searchC={this.onSearchChange}/>
				<Scroll>
				<CardList robots= { filteredRobots}/>
				</Scroll>
				</div>
				);
		}

		
	}
	
}

export default App;