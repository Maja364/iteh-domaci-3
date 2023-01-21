import RedTabele from "./RedTabele";

 

function Pocetna({pregledi}) {
    return (
      <div className="pocetna"  >
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
                {pregledi.map((p)=><RedTabele p={p} key={p.id}></RedTabele>
                
                )}

           
            </tbody>
            </table>
        
      </div>
  
  
  
  
  
    );
  }
  
  export default Pocetna;
  