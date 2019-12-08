import React, {Component} from 'react';
import BookItem from "./BookItem";

class List extends Component {
    render() {
        return (
            <div key={this.props.containerType}>
                <h3>{this.props.heading}</h3>
                <div style={{border: "1px solid black"}}>
                    {this.props.receivedBooks.map((item) => (
                        <BookItem item={item}
                                  key={item.id}
                                  buttonText={this.props.buttonText}
                                  containerType={this.props.containerType}
                                  moveItem={this.props.moveItem}/>
                    ))}
                </div>

            </div>
        )
    }
}

export default List