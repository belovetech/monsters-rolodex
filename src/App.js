import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
 constructor() {
   super();


   this.state = {
     monsters: [],
     searchField: ''
   };

  //  this.handleChange = this.handleChange.bind(this);
 }


 componentDidMount() {
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(users => this.setState({ monsters: users }))
 }
  
       
 handleChnage = e => {
  this.setState({ searchField : e.target.value });
}

// handleChnage (e) {
//   this.setState({ searchField : e.target.value });
// }

  render() {
    const {monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()) 
      );

    return (
      <div className="App">
        <h1>MONSTERS ROLODEX</h1>
         <SearchBox 
            placeholder="Search Monster"
            handleChange = {this.handleChnage}
         />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

/*

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [
       {
         name: 'Frankenstein',
         id: 'monst1'
       },
       {
         name: 'Dracula',
         id: 'monst2'
       },
       {
         name: 'Zombie',
         id: 'monst3'
       },
      ]
    }
  }
   
   render() {
     return (
       <div className="App">
          {
            this.state.monsters.map( monster => (
              <h1 key={monster.id}> {monster.name} </h1>
            ))}
       </div>
     );
   }
 }

*/ 


export default App;
