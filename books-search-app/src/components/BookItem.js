import React, {Component} from 'react';

class BookItem extends Component {
    state = {
        id: this.props.item.id
    };

    onClick = e => {
        e.preventDefault();
        this.props.moveItem(this.state.id, this.props.containerType)
    };

    formatAuthors = array => (array ? array.join(",") : "");

    formatDescription = str => {
        if (str) {
            if (str.length >= 200) {
                return `${str.slice(0, 200)}...`
            } else return str
        } else return ""
    };

    formatSubtitle = str => (str ? str : "");

    formatDate = str => (str ? str.split("-").reverse().join(".") : "");

    render() {
        return (
            <article>
                <h5>{this.props.item.volumeInfo.title}</h5>
                <h6>{this.formatSubtitle(this.props.item.volumeInfo.subtitle)}</h6>
                <div className="article__content">
                    <img src={this.props.item.volumeInfo.imageLinks.smallThumbnail} alt=""/>
                    <div className="content__col">
                        <p className="content__long-descr">{this.formatDescription(this.props.item.volumeInfo.description)}</p>
                        <p className="content__cursive">{this.formatDate(this.props.item.volumeInfo.publishedDate)}</p>
                        <p className="content__cursive">{this.formatAuthors(this.props.item.volumeInfo.authors)}</p>
                        <button onClick={this.onClick}>{this.props.buttonText}</button>
                    </div>
                </div>
            </article>
        )
    }
}

export default BookItem