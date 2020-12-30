import React from 'react';
import ReactDOM from 'react-dom';
import LikeIcon from './LikeIcon';

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
export default Like;
