import React, { Component } from 'react';
import './App.css';
import Quote from './Quote'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
        apiDataLoaded:false,
        featured:null,
        quotes:[],
        background:"white"
    }
    this.favorite = this.favorite.bind(this)
  }

  favorite(id){
    this.setState({featured: `quote${id}`})
    
  }

  componentDidMount(){
    fetch('https://hamilton-quotes-api.herokuapp.com/api/quotes')
    .then(quote => quote.json())
    .then((quote)=>{
      this.setState({quotes:quote.quotesData, apiDataLoaded:true })
   })
  }

  render() {
    return (
      <div className="App">
      <div className="main">
       <header> <h1>Our own quotes app</h1></header>
        { this.state.apiDataLoaded &&
        this.state.quotes.map((quote) =>(<Quote key={quote.id} id={`quote${quote.id}`} quote={quote} featured={this.state.featured} favorite={this.favorite}/>))
        }
        </div>
      </div>
    );
  }
}

export default App;
