import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
/*import logo from 'public/logo512.png';
*/
class Comment extends React.Component {
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

class LikeIcon extends React.Component {
  	render() {
    	return (
      		<div>
        		<span className="fa-stack fa-sm">
          			<i className="fa fa-circle fa-stack-2x blue-icon" />
          			<i className="fa fa-thumbs-up fa-stack-1x fa-inverse" />
        		</span>
      		</div>
    	)
  	}
}

class Like extends React.Component {
  	render() {
    	return (
      		<div>
        		{/* Include the LikeIcon subcomponent within the Like component*/}
        		<LikeIcon />
        		<hr />
        		<div>
          			<button type="button" className="btn no-outline btn-secondary">
            			<i className="fa fa-thumbs-o-up fa-4 align-middle" aria-hidden="true" />
            			&nbsp;
            			<span className="align-middle">Like</span>
          			</button>
        		</div>
      		</div>
    	)
  	}
}

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
            			<Comment maxLetters={2} />
          			</div>
        		</div>
      		</div>
    	)
  	}
}
ReactDOM.render(
  	<Status />,
  	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
