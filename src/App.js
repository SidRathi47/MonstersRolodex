import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import React from "react";

class App extends React.Component {
	constructor() {
		super();

		//State object
		this.state = {
			monsters: [],
			searchField: "",
		};
	}

	handleChange = (e) => {
		this.setState({ searchField: e.target.value });
	}

	// Fetch sample users from api when when app.js is mounted
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => this.setState({monsters: users}));
	}

	render() {
		// filter out searched monsters
		const {monsters, searchField} = this.state;
		const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchField.toLowerCase()));

		return (
			<div className="App">
				<h1>Monsters Rolodex</h1>
				
				<SearchBox placeholder={ 'Monster name' } handleChange={this.handleChange}/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
