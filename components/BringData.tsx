import axios from "axios";
import { useEffect, useState } from "react";

interface DataDefault {
active: number;
affectedCountries: number;
cases: number;
critical: number;
deaths: number;
population: number;
recovered: number;
todayCases: number;
todayDeaths: number;
todayRecovered: number;
}

export const BringData = () => {
   
    const [data,setData] = useState({} as DataDefault);

  useEffect(()=>{
    BringallData();
  },[])

  const BringallData = async () => {
    const res = await axios.get("https://disease.sh/v3/covid-19/all");
    const data = await res.data;
    setData(data);
    console.log(data);
    
  }

    return (
        <div>
            <div>Casos :{data.cases}</div>
            <div>Ativos : {data.active}</div>
            <div>Países afetados : {data.affectedCountries}</div>
            <div>Situação Crítica: {data.critical}</div>
            <div>Mortes: {data.deaths}</div>
            <div>População Total: {data.population}</div>
            <div>Recuperados: {data.recovered}</div>
            <div>Casos Hoje: {data.todayCases}</div>
            <div>Mortes Hoje: {data.todayDeaths}</div>
            <div>Recuperados Hoje: {data.todayRecovered}</div>
        </div>
    )
}