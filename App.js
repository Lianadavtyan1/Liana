import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './contact.js';
class App extends Component {
	foo(){
  return <h2>Contacts</h2>
};
render() {
	const a = [
	{name:'Liana',surname:'Davtyan', img:'https://p7.hiclipart.com/preview/971/91/650/masha-and-the-bear-animation-clip-art-masha.jpg', mail:'lianadavtyan2014@mail.ru', tel:'+37498129749'}
		];
  return (
    <div className="App">
	<div className="contacts">
	{a.map(i => <Contact img={i.img} name={i.name} surname={i.surname} mail={i.mail} tel={i.tel} key={i.name} />)}
	</div>
    </div>
	
  );
}
}

export default App;