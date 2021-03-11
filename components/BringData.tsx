import axios from "axios";
import { useEffect, useState } from "react";
import { BringDataStyles } from "./BringDataStyles";

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
  }

    return (
        <BringDataStyles>
        <h1>Covid 19</h1>
        <h3>Dados em tempo real</h3>
        <div className="mainContainer">
            <div className="cases">Casos :<p>{data.cases}</p></div>
            <div className="active">Ativos :<p>{data.active}</p></div>
            <div className="affectedCountries">Países afetados :<p>{data.affectedCountries}</p></div>
            <div className="critical">Situação Crítica:<p>{data.critical}</p></div>
            <div className="deaths">Mortes:<p>{data.deaths}</p></div>
            <div className="population">População Total:<p>{data.population}</p></div>
            <div className="recovered">Recuperados:<p>{data.recovered}</p></div>
            <div className="todayCases">Casos Hoje: <p>{data.todayCases}</p></div>
            <div className="todayDeaths">Mortes Hoje:<p>{data.todayDeaths}</p> </div>
            <div className="todayRecovered">Recuperados Hoje: <p>{data.todayRecovered}</p></div>
        </div>
        </BringDataStyles>
    )
}