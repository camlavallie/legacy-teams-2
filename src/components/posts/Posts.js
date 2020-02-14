import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';
import PostItem from './PostItem';
import Jumbotron from 'react-bootstrap/Jumbotron';
import PostForm from './PostForm';

const Posts = ({ getPosts, auth, auth: {user}, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <Jumbotron className="jumbo-home-3">
        <h1
          className="large text-white"
          style={{
            textAlign: 'center',
            marginBottom: '150px'
          }}
        >
          Resources
        </h1>
        <div className="justify-center">
        <h1 className="text-xl text-white bg-blue-500 rounded p-3">
         <ion-icon name="person-outline"></ion-icon> Welcome {user && user.name}
        </h1>
        {auth.user && !auth.loading && <PostForm />}
        </div>

        <hr />
        {posts.map(post => (
          <PostItem key={post._id} post={post} />
        ))}
      </Jumbotron>
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth,
  
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
