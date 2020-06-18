import React, {Component} from 'react';
import './styles.css';

class Filter extends Component {

    handleFilter = (e) => {
        let filter = e.target.value;
        this.props.filterData(filter);
    }

    render() {
        return(
            <div className="input-group mb-3 input-filter">
                <input type="text" className="form-control" placeholder="Filter by country name" aria-label="country name filter" aria-describedby="button-addon2" onChange={this.handleFilter}/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Filter</button>
                </div>
            </div>
        )
    }
}

export default Filter;