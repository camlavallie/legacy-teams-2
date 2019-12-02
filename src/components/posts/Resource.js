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
     <div className="jumbo-home-3">
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
        <div>
        {this.state.filteredData.map(i => 
//   <div key={i} class="max-w-sm rounded overflow-hidden shadow-lg p-6 m-10" style={{backgroundColor:'white'}} >
//   <div><img className="h-24 w-24 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" alt="pic" src={i.avatar}/></div>
//   <div class="px-6 py-4">
//   <h2 className="text-lg">{i.name}</h2>
//     <div class="font-bold text-xl mb-2"><div className="text-purple-500"><a className="text-blue-500" href={i.resource}>{i.title}</a></div></div>
//     <div className="text-gray-400"> Posted on <Moment format='YYYY/MM/DD'>{i.date}</Moment></div>
//     <p class="text-gray-700 text-base">
//       {i.text}
//     </p>
//   </div>
// </div>
<div class=" bg-white m-10 p-6 max-w-sm w-full lg:max-w-full lg:flex rounded ">
   <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"><img className="h-48 w-48 md:h-48 md:w-48 rounded-full mx-auto md:mx-0 md:mr-6" alt="pic" src={i.avatar}/></div>
  <div class=" p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <p class="text-sm text-gray-600 flex items-center">
        <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
        </svg>
        {i.name}
      </p>
      <div class="text-gray-900 font-bold text-xl mb-2"><a className="text-blue-500" href={i.resource}>{i.title}</a></div>
      <div className="text-gray-400"> Posted on <Moment format='YYYY/MM/DD'>{i.date}</Moment></div>
      <p class="text-gray-700 text-base"> {i.text}</p>
    </div>
  </div>
</div>
        )}
      </div>
      </div>

    );
  }
}

export default Resource; 
