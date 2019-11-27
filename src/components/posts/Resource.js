import React, {Component} from 'react';
import Moment from 'react-moment';
import Linkify from 'linkifyjs/react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card';
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
     placeholder="Search for Resource by Title..."
     value={this.state.query}
     onChange={this.handleInputChange}
     />
  </InputGroup>
        <div>{this.state.filteredData.map(i => 
          <div key={i}>
          <Container style={{textAlign:'center', MarginTop: 100}}>


            <div class="lg:flex">
  <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
  </div>
  <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <p class="text-sm text-gray-600 flex items-center">
        <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
        </svg>
        {i.name}
      </p>
      <div class="text-gray-900 font-bold text-xl mb-2">{i.title}</div>
      <p class="text-gray-700 text-base">Posted on <Moment format='YYYY/MM/DD'>{i.date}</Moment></p>
    </div>
    <div class="flex items-center">
      <img class="w-20 h-25 rounded-full mr-4" src={i.avatar} alt="Avatar of Jonathan Reinink"/>
      <div class="text-sm">
        <p class="text-gray-900 leading-none"> <Linkify>{i.resource}</Linkify></p><hr/>
        <p class="text-gray-600"> {i.text}</p>
      </div>
    </div>
  </div>
</div>
          </Container>
          {/* <Accordion className="bg-white">
            <Card>
             <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
               <h4>{i.title}</h4>
              </Accordion.Toggle>
                <p className="post-date">
                      Posted on <Moment format='YYYY/MM/DD'>{i.date}</Moment>
                </p>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body> 
               <Linkify>
                  <h5>
                    {i.resource}
                 </h5>
                </Linkify>
              </Card.Body>
           </Accordion.Collapse>
           <Accordion.Collapse eventKey="0">
              <Card.Body> 
               <Linkify>
                  <p>
                    {i.text}
                 </p>
                </Linkify>
              </Card.Body>
           </Accordion.Collapse>
         </Card>
       </Accordion> */}
        </div>
        )}
      </div>
        </Container>
      </div>
    );
  }
}

export default Resource; 