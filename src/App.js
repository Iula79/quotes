import React, { Component } from 'react';
import './App.css';
import Quote from './Quote'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
        apiDataLoaded:false,
        favoriteQuote:null,
        quotes:[]
    }

  }

  componentDidMount(){
    fetch('https://hamilton-quotes-api.herokuapp.com/api/quotes')
    .then(quote => quote.json())
    .then((quote)=>{
      this.setState({quotes:quote.quotesData, apiDataLoaded:true })
      console.log(quote.quotesData)
   })
  }

  render() {
    return (
      <div className="App">
        <h1>Our own quotes app</h1>
        { this.state.apiDataLoaded &&
        this.state.quotes.map((quote) =>(<Quote key={quote.id} quote={quote}/>))
        }
      </div>
    );
  }
}

export default App;
