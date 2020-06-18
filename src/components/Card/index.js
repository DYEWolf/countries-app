import React, {Component} from 'react';
import './styles.css';

class Card extends Component {
    
    render() {
        return(
            <div className="card">
            <img src={this.props.data.flag} className="card-img-top" alt={"flag of " + this.props.data.name}></img>
                <div className="card-body">
                    <h5 className="card-title">{this.props.data.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Capital: {this.props.data.capital}</h6>
                    <p className="card-text">Code: {this.props.data.currencies[0].code}</p>
                    <p className="card-text">Name: {this.props.data.currencies[0].name}</p>
                    <p className="card-text">Symbol: {this.props.data.currencies[0].symbol}</p>
                </div>
            </div>
        )
    }
}

export default Card;