import '../css/AppBar.css';

function AppBar(props) {

  return(
    <div className="AppBar">
      <div className = "anterior_gen">
        <button className = "boto_anterior_gen">🏠︎</button>
      </div>
      <div className = "pokeball_menu">
        <button onClick={() => {props.setShiny(!props.shiny)}} className = "boto_pokeball_menu"></button>
      </div>
      <div className = "seguent_gen">
        <button className = "boto_seguent_gen">🔍</button>
      </div>
    </div>
  );
}

export default AppBar;