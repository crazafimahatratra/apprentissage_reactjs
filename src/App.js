import logo from './logo.svg';
import './App.css';

/*import Comment from './component_2/Comment.js';*/
/*import Clock from './component_2/Clock.js';*/
import Comment_2 from './component_2/Comment_2.js';

function App() {
  /* ceci est pour le Composants et props */
/*
	var author = 	{
						avatarUrl:"images/toetra.png", 
						name:"Mampitoetra Rabotoson"
					};
	var text = "Bonjour à tous, Nous sommes à la blabla"
  	return (
    	<div className="App">
      		<Comment author={author} text={text} />
    	</div>
  	);
*/
  	
    return (
      <div className="App">
          <Comment_2  />
      </div>
    );
}

export default App;

