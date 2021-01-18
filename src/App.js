import logo from './logo.svg';
import './App.css';

import Comment from './component_2/Comment.js';

function App() {
	var author = 	{
						avatarUrl:"images/toetra.png", 
						name:"Mampitoetra"
					};
	var text = "Bonjour à tous, Nous sommes à la blabla"
  	return (
    	<div className="App">
      		<Comment author={author} text={text} />
    	</div>
  	);
}

export default App;
