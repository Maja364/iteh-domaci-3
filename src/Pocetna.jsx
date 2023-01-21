import { useState } from "react";
import RedTabele from "./RedTabele";

 

function Pocetna({pregledi}) {
    const [sort, setSort] = useState(true);
    function sortAsc(){
    
        setSort(true);
      }
      function sortDesc(){
        
        setSort(false);
      }
    return (
      <div className="pocetna"  >
            <div className="buttons">
                <button className="btn primary" onClick={sortAsc}>Sortiraj rastuće</button>
                <button className="btn primary" onClick={sortDesc}>Sortiraj opadajuće</button>
            </div>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Datum</th>
                <th scope="col">Naziv</th>
                <th scope="col">Ljubimac</th>
                <th scope="col">Rasa</th>
                <th scope="col">Cena</th>
                <th scope="col">Veterinar</th>
             

                </tr>
            </thead>
            <tbody>
                {sort === true ? 
                
                        pregledi
                        .sort((a, b) => a.cena < b.cena ? -1 : 1)
                        .map((p)=><RedTabele p={p} key={p.id}></RedTabele>)
                :
                    pregledi
                    .sort((a, b) => a.cena > b.cena ? -1 : 1)
                    .map((p)=><RedTabele p={p} key={p.id}></RedTabele>
                )}

           
            </tbody>
            </table>
        
      </div>
  
  
  
  
  
    );
  }
  
  export default Pocetna;
  