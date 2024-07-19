
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

export default function components(){
    return (
        <section>
            <Profile/>
            <Tabla/>
        </section>
    );
}