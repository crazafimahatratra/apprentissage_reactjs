
import React from 'react';

class SubmitButton extends React.Component {
	constructor (props) {
 		super(props);
	    this.state = {value: ''};

	    this.onClick = this.onClick.bind(this);
  	}

  	onClick(event) {
  		document.getElementById('text').textContent = "Vous avez cliqué sur "+this.props.label;
    	event.preventDefault();
  	}
  	render() {
    	return (
      		<button className={this.props.background} onClick={this.onClick}>
      		{this.props.label}
      		</button>
    	)
  	}
}

export default SubmitButton;
