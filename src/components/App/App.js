import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.searchYelp = this.searchYelp.bind(this);
        this.state = {
            businesses: []
        }
    }

    searchYelp(term, location, sortBy) {
        Yelp.search(term, location, sortBy)
            .then(businesses => {
                this.setState({businesses: businesses});
            })
    }

    render() {
        return (
            <div className="App">
                <h1 className="App-header">ravenous</h1>
                <SearchBar searchYelp={this.searchYelp}/>
                <BusinessList businesses={this.state.businesses}/>
            </div>
        )
    };
}

export default App;