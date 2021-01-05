
import React from 'react';

class SubmitButton extends React.Component {
	constructor (props) {
 		super(props);
	    this.state = {
            isLoaded: false,
            items: []
          };

	    this.onClick = this.onClick.bind(this);
  	}

  	onClick(event) {
  		document.getElementById('text').textContent = "Vous avez cliqué sur "+this.props.label;
    	event.preventDefault();
  	}
    componentDidMount() {
      // GET request using fetch with error handling
      fetch('https://5fe1ba7b7a9487001768177c.mockapi.io/reactdemo/v1/buttons')
        .then((response) => response.json())
      .then( result => {
          this.setState({
            isLoaded: true,
            items: result
          });
        });
    }
  	render() {
      var {isLoaded, items} = this.state;
      if (!isLoaded) {
        return <div>Loading...</div>;
      }
      else{

        return ( 
          <div>
          {items.map(item=>(
            //<li key={item.id}>
              //{item.label}
            //</li>
            <li key={item.id}>
            <button className={item.color} onClick={this.onClick}>
          {item.label}
          </button>
          </li>

        ))}
        </div>


        );
        
      }
    	//return (
      		//<button className={this.props.background} onClick={this.onClick}>
      		//{this.props.label}
      		//</button>
    	//)
      
  	}
}

export default SubmitButton;
