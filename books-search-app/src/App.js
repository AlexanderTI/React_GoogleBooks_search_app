import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header"
import List from "./components/List";
import axios from "axios";

class App extends Component {
    state = {
        receivedBooks: [],
        addedBooks: []
    };

    searchQuery = title => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?maxResults=5&q=test%20${title}`)
            .then(res => this.setState({receivedBooks: res.data.items}))
    };

    moveItem = (id, array) => {
        switch (array) {
            case "searchResult":
                this.setState({
                    addedBooks: [...this.state.addedBooks,
                        this.state.receivedBooks.find(el => el.id === id)],
                    receivedBooks: this.state.receivedBooks.filter(el => el.id !== id)
                });
                break;
            case "myList":
                this.setState({
                    receivedBooks: [...this.state.receivedBooks,
                        this.state.addedBooks.find(el => el.id === id)],
                    addedBooks: this.state.addedBooks.filter(el => el.id !== id)
                });
                break;
        }
    };

    render() {
        return (
            <div className="App">
                <Header searchQuery={this.searchQuery}/>
                <main>
                    <List receivedBooks={this.state.receivedBooks}
                          containerType="searchResult"
                          heading="Search result:"
                          buttonText="Add"
                          moveItem={this.moveItem}/>
                    <List receivedBooks={this.state.addedBooks}
                          containerType="myList"
                          heading="My list:"
                          buttonText="Remove"
                          moveItem={this.moveItem}/>
                </main>
            </div>
        )
    }
}

export default App;
