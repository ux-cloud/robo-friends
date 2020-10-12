import React from 'react';
//import logo from './logo.svg';
import './App.css';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'

class App extends React.Component {


constructor()
{
super();
this.state = {
searchfield :'',
robots: []

}

}

 onSearchChange =(event) => {
this.setState({searchfield:event.target.value});

}

componentDidMount(){

  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({robots:users}))


}

  render (){

    const {robots,searchfield} = this.state;
    const  filteredRobots = robots.filter(robot =>{
    console.log(this.state.searchfield)

          return (robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase()))
    

    })
    console.log(filteredRobots)
    
    
        return ((!robots.length)? "Loading"  :

              <div className="tc">
                <header className="f1 pa2">
                     Robo Friends
                </header>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                  <ErrorBoundary>
                      <CardList robots={filteredRobots}/>
                  </ErrorBoundary>
                 
                </Scroll>
               
            </div>
         )
  }
}
    export default App;
