import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state = {
    tours : [],
    regions : []
  }

  myHeaders = new Headers({
    "Authorization": "Token token=f2b15a0105d45",
    "Content-Type": "application/json"
  });
  
  myInit = {
    method: 'GET',
    headers: this.myHeaders
  };

  getPackagesData = () => {
    fetch('https://turismoi.pe/api/v1/packages.json?per_page=50', this.myInit)
    .then(rpta => rpta.json())
    .then(resultado => this.setState({tours: resultado.packages}))
    // .then(res => console.log(res.packages))
      // const arrTours = [];
      // res.packages.forEach(element => {
      //   arrTours.push(element);
      // });
      // console.log(arrTours);
      // res.packages.map(elem => console.log(elem));

      // const filtrar = (arr, nameRegion) => {
      //   let arrFiltType = [];
      //   arr.packages.filter(elem => elem.city_names.includes(nameRegion) ? arrFiltType.push(elem) : console.log(':('))
      //   console.log(arrFiltType);
      // };

      // filtrar(res, 'Cajamarca');
  }
  
  getRegionsData = () => {
    fetch('https://turismoi.pe/api/v1/regions.json?only_with_packages=1', this.myInit)
    .then(rpta => rpta.json())
    // .then(res => console.log(res.regions));
    .then(resultado => this.setState({regions: resultado.regions}))
  }

  getIdRegion = (id) => {
    console.log(id);
  }

  render() {
    this.getRegionsData();
    this.getPackagesData();
    const regions = this.state.regions;
    const tours = this.state.tours;
    if(regions.length === 0) return null;
    return (
      <React.Fragment>
        <div>
          <select>
            {regions.map(region => (
              <option value={region.id} onChange={this.getIdRegion(region.id)}>{region.name}</option>
            ))}
          </select>
        </div>
        <div className="card">
          {tours.map(tour => (
            <img src={tour.principal_photo} className="card-img-top" alt="tour-foto-principal" />
            <h5 className="card-title">{tour.name}</h5>
            <p className="card-text">S/ {tour.price}</p>
            <p className="card-text">{tour.days_and_nights}</p>
          ))}
        </div>
      </React.Fragment>
    )
  }
}


export default App;
