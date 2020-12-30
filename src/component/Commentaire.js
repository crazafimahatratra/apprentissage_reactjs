import React from 'react';
import ReactDOM from 'react-dom';

class Commentaire extends React.Component {
	constructor () {
 		super()
 		this.state = {
 			characterCount: 0
 		}
 	}
  	render() {
    	return (
      		<div>
        		<textarea className="form-control" placeholder="Write a comment..." />
        		<small>{this.props.maxLetters} Remaining</small>
      		</div>
    	)
  	}
}
export default Commentaire;
