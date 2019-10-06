import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/post';
import Linkify from 'linkifyjs/react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const PostItem = ({ 
  deletePost,
  auth,
  post: {_id, title, text, name, user, avatar, date }
}) => (
      <div className="post bg-white">

          <div >
              <img
                className="round-img"
                style={{textAlign:'center'}}
                src={avatar}
                alt=""
                />
                <h4 >{name}</h4>
           
          </div>
          <div>
          <Accordion>
            <Card>
             <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
               <h2>{title}</h2>
              </Accordion.Toggle>
                <p className="post-date">
                      Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
                </p>
            </Card.Header>
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


