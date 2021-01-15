
import React from 'react';
import MonBouton from './MonBouton';

class SubmitButton extends React.Component {
	constructor (props) {
 		super(props);
    this.state = {
          isLoaded: false,
          items: []
        };
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
          <fragment>
            <table >
                <tr>
                    <td class="parcel1" >
                        {items.map((item, i)=>(
                          <MonBouton key={`bouton-${i}`} label={item.label} couleur={item.color}/>
                        ))}
                    </td>
                    <td className="parcel2">
                        <div id="text" ></div>
                    </td>
                </tr>
            </table>
          </fragment>
      );
      
    }
	}
}

export default SubmitButton;
