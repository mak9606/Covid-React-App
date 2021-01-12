import React from 'react';
import Cards from './components/Cards/Cards';
import Chart  from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Styles from './App.module.css';
import {fetchData} from './api/index';
import coronaImage from './images/Covid-19.png'


class App extends React.Component {
  
  state={
    data:{},
    country:''
  }

  async componentDidMount() {
   const fetchedData=await fetchData();
   this.setState({data:fetchedData});
 };

 handleCountryChange= async (country)=>{
  const fetchedData=await fetchData(country);
  this.setState({data:fetchedData,country:country});
 }

 render() {
  return (
    
    <div className={Styles.container}>
      <img className={Styles.image} src={coronaImage} alt="corona virus"/>
      <Cards data={this.state.data}/>
      <CountryPicker handleChange={this.handleCountryChange}/>
      <Chart  data={this.state.data} country={this.state.country}/>


    </div>
  );
}
}

export default App;
