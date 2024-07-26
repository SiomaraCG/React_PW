'use client'
import { onsumit, onsumitPost } from './hook.js';

function Profile() {
    return (
      <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
      />
    );
  }
  
  function Tabla() {
    return (
      <table>
        <th>Tabla ejemplo</th>
        <tr> Es una columna</tr>
      </table>
    );
  }

export function Botton(){
  return(
    <button type = "button" onClick={onsumit}>
      enviar info
    </button>
  );
}

export function Bottonsend(){
  return(
    <button type = "button" onClick={onsumitPost}>
      llamarpost
    </button>
  );
}

export default function components(){
    return (
        <section>
            <Profile/>
            <Tabla/>
            <Botton/>
            <Bottonsend/>
        </section>
    );
}