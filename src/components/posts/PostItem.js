import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/post';
import Linkify from 'linkifyjs/react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';


const PostItem = ({ 
  deletePost,
  auth,
  post: {_id, title, text, resource, name, user, avatar, date }
}) => (
      <div className="post bg-white ">
          <div>
              <img
                className="round-img"
                style={{textAlign:'center'}}
                src={avatar}
                alt=""
                />
                <h4 >{name}</h4>
           
          </div>
          <div>
          <Accordion >
            <Card style={{maxWidth:'90%'}}>
             <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
               <h4>{title}</h4>
              </Accordion.Toggle>
                <p className="post-date">
                      Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
                </p>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body> 
               <Linkify>
                  <h5 className="my-1">
                    {resource}
                 </h5>
                </Linkify>
              </Card.Body>
           </Accordion.Collapse>
           <Accordion.Collapse eventKey="0">
              <Card.Body> 
               <Linkify>
                  <p className="my-1">
                    {text}
                 </p>
                </Linkify>
              </Card.Body>
           </Accordion.Collapse>
         </Card>
       </Accordion>
            <br/>




           {auth.user && !auth.loading && auth.user._id && (

            <button onClick={e => deletePost(_id)}      
              type="button"
              className="btn btn-danger">
              <i className="fa fa-trash"></i>
            </button>
             )
           }
            {auth.user && !auth.loading && auth.user._id && (

              <Link to={`editpost/${_id}`}>

              <i className="fa fa-pencil" style={{fontSize:'24px', marginLeft:'20px'}}></i>
              </Link>
             )
           }
          </div>
        </div>
);
PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
  
}


const mapStateToProps = state => ({
  auth: state.auth
});


export default connect(mapStateToProps, { deletePost })(PostItem);


