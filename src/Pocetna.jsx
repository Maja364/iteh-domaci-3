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

      function search(){
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[2];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }       
        }
    }

    return (
      <div className="pocetna"  >
            <div className="buttons">
                <button className="btn primary" onClick={sortAsc}>Sortiraj rastuće</button>
                <button className="btn primary" onClick={sortDesc}>Sortiraj opadajuće</button>

                
                <input
                id="myInput"
                type="text"
                placeholder="Pretraga po nazivu ljubimca"
                onChange={search}
                />
            </div>
        <table className="table" id="myTable">
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
  