import React from 'react';
// import logo from './logo.svg';
import axios from 'axios';
import Loading from './Loading';

// function App() {
//   return (
//     <div className="App">
//       first react app
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  getUsers(){
    // this.setState({
    //   loading: true;
    // })
    axios('https://randomuser.me/api/?results=4')
      .then(response => this.setState({
        // users: response.data.results,
        users: [...this.state.users, ...response.data.results], //merge existing and new users data
        loading: false
      }));
  }

  componentWillMount() {
    this.getUsers();
  }

  clickHandler(e) {
    e.preventDefault();
    this.getUsers();
    console.log('clicked');
  }

  render() {
    const { users, loading } = this.state;
    return <div>
      <form onSubmit={this.clickHandler}>
        <input type="submit" value="submit"></input>
      </form>
      <button onClick={this.clickHandler}>new users</button>
      {/* <img src="https://faviconer.net/preloaders/35/Fading%20lines.gif" alt="loader" /> */}
      {loading 
        ? <Loading message="holy shit its loading"></Loading>
        : users.map(user => 
          <div key={user.id.value}>
            <h3 style={{color: 'red'}}>{user.name.first}</h3>
            <p style={{color: 'blue'}}>{user.email}</p>
            <p style={{color: 'green'}}>{user.cell}</p>
            <hr/>  
          </div>
        )
      }
    </div>
  }
}

export default App;