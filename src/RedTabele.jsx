 

function RedTabele({p}) {
    return (
        <tr>
        <th scope="row">{p.id}</th>
        <td>{p.datum}</td>
        <td>{p.naziv}</td>
        <td>{p.ljubimac}</td>
        <td>{p.rasa}</td>
        <td>{p.cena}</td>
        <td>{p.veterinar}</td>
        </tr>
  
  
  
  
  
    );
  }
  
  export default RedTabele;
  