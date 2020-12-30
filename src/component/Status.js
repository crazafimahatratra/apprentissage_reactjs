import React from 'react';
import ReactDOM from 'react-dom';
import Commentaire from './Commentaire';
import Like from './Like';


class Status extends React.Component {
  	render() {
    	return (
      		<div className="col-6 offset-3 statut">
        		<div className="card">
          			<div className="card-block">
            			<div className="row">
              				<div className="col-2">
                				<img src={'images/toetra.png'} className="profile-pic" />
              				</div>
              				<div className="col-10 profile-row">
                				<div className="row">
                  					<a href="#">Rabotoson Mampitoetra</a>
                				</div>
                				<div className="row">
                  					<small className="post-time">10 mins</small>
                				</div>
              				</div>
            			</div>
            			<p>Hello, world!</p>
                  <Like />
            			
          			</div>
          			<div className="card-footer text-muted">
            			<Commentaire maxLetters={2} />
          			</div>
        		</div>
      		</div>
    	)
  	}
}
export default Status;
