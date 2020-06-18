import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/index';
import Card from './components/Card/index';
import Filter from './components/Filter/index';
import {getAllCountries} from './http/index';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filter: ''
    }

  }

  componentDidMount() {
    this.getCountries();
  }

  getCountries = () => {
    getAllCountries().then(res => {
      this.setState({data: res.data})
    })
  }

  onFilterData = (filter) => {
    this.setState({filter: filter});
  }


  render() {

    const { filter, data } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = data.filter(item => {
      let countryName = item.name.toLowerCase();
      return countryName.startsWith(lowercasedFilter)
    });
   
    return (
      <div className="container-fluid">
        <Header/>
        <Filter filterData={this.onFilterData}/>
        <div className="cards-container">
          {filteredData.map((obj, key) => {
            return(
              <Card key={key} data={obj}/>
            )
            })
          }
        </div>
           
      </div>
     );
  }
}

export default App;
