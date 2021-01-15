import React from 'react';
import ReactDOM from 'react-dom';

class MonBouton extends React.Component {
	constructor (props) {
 		super(props)
 		this.state = {
 			characterCount: 0
 		}
 		//console.log(this.props);
 		this.le_label = props.label;
 		this.onClick = this.onClick.bind(this);
 	}
 	onClick(event) {
    	document.getElementById('text').textContent = "Vous avez cliqué sur "+this.le_label;
    	event.preventDefault();
  	}

  	render() {
    	return (
      		<button className="mon_bouton" style={{backgroundColor: `${this.props.couleur}` }} onClick={this.onClick}>
        		{this.props.label}
      		</button>
    	)
  	}
}
export default MonBouton;
