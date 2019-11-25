import React, {Component} from 'react';
import Moment from 'react-moment';
import Linkify from 'linkifyjs/react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
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
          <div className="post bg-white " key={i}>
          <div>
              <img
                className="round-img"
                style={{textAlign:'center'}}
                src={i.avatar}
                alt=""
                />
                <h4 >{i.name}</h4>
           
          </div>
          <div>
          <Accordion className="bg-white">
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
       </Accordion>
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