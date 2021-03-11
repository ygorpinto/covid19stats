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
        <div className="mainContainer">
            <div className="cases">Casos :{data.cases}</div>
            <div className="active">Ativos : {data.active}</div>
            <div className="affectedCountries">Países afetados : {data.affectedCountries}</div>
            <div className="critical">Situação Crítica: {data.critical}</div>
            <div className="deaths">Mortes: {data.deaths}</div>
            <div className="population">População Total: {data.population}</div>
            <div className="recovered">Recuperados: {data.recovered}</div>
            <div className="todayCases">Casos Hoje: {data.todayCases}</div>
            <div className="todayDeaths">Mortes Hoje: {data.todayDeaths}</div>
            <div className="todayRecovered">Recuperados Hoje: {data.todayRecovered}</div>
        </div>
    )
}