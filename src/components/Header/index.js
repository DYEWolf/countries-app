import React, {Component} from 'react';
import './styles.css';

class Header extends Component {
    render() {
        return(
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Countries App</a>
            </nav>
        )
    }
}

export default Header;