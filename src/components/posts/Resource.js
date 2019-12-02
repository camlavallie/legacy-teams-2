import React, {Component} from 'react';
import Moment from 'react-moment';
// import Linkify from 'linkifyjs/react';
// import Accordion from 'react-bootstrap/Accordion';
// import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
// import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

class Resource extends Component {
  state = {
    query: "",
    data: [],
    filteredData: [],

  };
  
  handleInputChange = event => {
    const query = event.target.value;
    
    this.setState(prevState => {
      const filteredData = prevState.data.filter(element => {
        return element.title.toLowerCase().includes(query.toLowerCase());
      });
      return {
        query,
        filteredData
      };
    });
  };
  
  getData = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    fetch(`${baseUrl}/posts`)
      .then(response => response.json())
      .then(data => {
        const { query } = this.state;
        const filteredData = data.filter(element => {
          return element.title.toLowerCase().includes(query.toLowerCase());
        });

        this.setState({
          data,
          filteredData
        });
      });
  };

  componentWillMount() {
    this.getData();
  }

  render() {
    return (
     <div className = "jumbo-home-3">
     <Container>

        <h1
          className="large text-white"
          style={{
            textAlign: 'center',
            marginBottom: '150px'
          }}
          >
          Resources
        </h1>
        <InputGroup size="lg">
    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" 
     placeholder="Search Resource By Title..."
     value={this.state.query}
     onChange={this.handleInputChange}
     />
  </InputGroup>
        <div>{this.state.filteredData.map(i => 
      < div className="img-container flex">
  < div key={i} class="max-w-sm rounded overflow-hidden shadow-lg p-6 m-10"style={{backgroundColor:'white'}} >
  <img className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" alt="pic" src={i.avatar}/>
  <div class="px-6 py-4">
  <h2 className="text-lg">{i.name}</h2>
    <div class="font-bold text-xl mb-2"><div className="text-purple-500"><a className="text-blue-500" href={i.resource}>{i.title}</a></div></div>
    <div className="text-gray-400"> Posted on <Moment format='YYYY/MM/DD'>{i.date}</Moment></div>
    <p class="text-gray-700 text-base">
      {i.text}
    </p>
  </div>
</div>
</div>



        )}
      </div>
        </Container>
      </div>
    );
  }
}

export default Resource; 
