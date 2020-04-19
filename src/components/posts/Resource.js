import React, { Component } from 'react';
import Moment from 'react-moment';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Linkify from 'linkifyjs/react';

class Resource extends Component {
  state = {
    query: '',
    data: [],
    filteredData: []
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
      <div className="jumbo-resource flex justify-center">
        <div className=" text-center sm:bg-cover sm:bg-center sm:bg-fixed md:bg-cover md:bg-center lg-cover lg-center ">
          <h1
            id="top"
            className="large text-white"
            style={{
              textAlign: 'center',
              marginBottom: '150px'
            }}
          >
            Resources
          </h1>
          <InputGroup size="m-3">
            <FormControl
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Search Resource By Title..."
              value={this.state.query}
              onChange={this.handleInputChange}
            />
          </InputGroup>
          <div className="flex flex-wrap justify-center mt-12">
            {this.state.filteredData.map(i => (
              <div className="max-w-md mt-12 mr-3 py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                <div class="flex justify-center md:justify-end -mt-16 mt-12">
                  <img
                    class="w-20 h-20 object-cover rounded-full border-2 border-white"
                    src={i.avatar}
                  />
                </div>
                <div>
                  <p class="text-gray-800 text-xl font-thin">
                    <Linkify>
                      <a
                        className="text-blue-500"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={i.resource}
                      >
                        {i.title}
                      </a>
                    </Linkify>
                  </p>
                  <p class="mt-2 text-gray-600">{i.text}</p>
                </div>
                <div class="flex justify-end mt-4">
                  <p class="text-xl font-medium text-gray-500">{i.name}</p>
                </div>
                <div class="flex justify-end mt-4">
                  <p class="text-sm font-medium text-gray-500">
                    Posted on <Moment format="YYYY/MM/DD">{i.date}</Moment>
                  </p>
                </div>
              </div>
            ))}
          </div>
            <div className="flex flex-wrap justify-center mt-4">
              <a
                href="#top"
                className="rounded-lg bg-blue-500 p-3 text-white text-xl font-thin no-underline"
                style={{
                  textDecorationLine: 'none'
                }}
              >
                To the top
              </a>
            </div>
        </div>
      </div>
    );
  }
}

export default Resource;
