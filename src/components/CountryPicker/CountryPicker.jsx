import React,{useState,useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import Styles from './CountryPicker.module.css';
import {fetchingCountries} from '../../api/index';


 const CountryPicker = ({handleChange}) => {
     const [fetchCountries,setFetchedCountries]=useState([]);

     useEffect(()=>{
        const CountriesFetched=async () =>{
            setFetchedCountries(await fetchingCountries());
        }
        
        CountriesFetched();
     },[setFetchedCountries])
     
    return (

        
            <FormControl className={Styles.formControl}>
                <NativeSelect defaultValue="" 
                onChange={(e)=>handleChange(e.target.value)}>
                    <option value=''>
                        Global
                    </option>
                    {fetchCountries.map((country,i)=><option key={i} 
                    value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        
    )
}
export default CountryPicker;