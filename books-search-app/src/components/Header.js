import React, {Component} from 'react';

class Header extends Component {
    state = {
        title: ""
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.searchQuery(this.state.title);
        this.setState({title: ''});
    };

    onChange = e => this.setState({title: e.target.value});

    render() {
        return (
            <header>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.onChange}/>
                    <button type="submit">Search</button>
                </form>
            </header>
        )
    }
}

export default Header