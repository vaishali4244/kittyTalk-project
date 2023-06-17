import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchEngine from '../components/SearchEngine';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      kitten: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => {
      return response.json();
    }).then(users => this.setState({ kitten: users }));
  }
  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value })
  }
  render() {
    const { kitten, searchField } = this.state;
    const filteredKitty = kitten.filter(kitten => {
      return kitten.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return !kitten.length ?
      <h1>Loading</h1> :
      (
        <div className="tc f2">
          <h1>KittyTalk</h1>
          <SearchEngine searchChange={this.onSearchChange} />
          <Scroll>
            <CardList kitten={filteredKitty} />
          </Scroll>
        </div>
      )
  }
}
export default App;
