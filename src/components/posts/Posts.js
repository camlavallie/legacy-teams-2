import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';
import PostItem from './PostItem';
import Jumbotron from 'react-bootstrap/Jumbotron';
import PostForm from './PostForm';

const Posts = ({getPosts, auth, post: {posts, loading}}) => {
  useEffect(() => {
    getPosts();

  }, [getPosts]);

  return loading ? <Spinner /> : (
    <Fragment>
      <Jumbotron style={{textAlign:'center'}}>
      <h1 className="large text-primary">Resources</h1>
      {auth.user && !auth.loading &&  (
            <PostForm />
      
                 
                   )
                 }
    
    
</Jumbotron>

<Jumbotron>

  
      
      {posts.map(post => (
        <PostItem key={post._id} post={post} />
      ))}

</Jumbotron>
    </Fragment>
  )
    ;
}

Posts.propTypes = {
 getPosts: PropTypes.func.isRequired,
 post: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth

})

export default connect(mapStateToProps, { getPosts })(Posts);