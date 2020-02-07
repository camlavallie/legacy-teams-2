import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../layout/TextAreaFieldGroup';
import TextInputGroup from '../layout/TextInputGroup';
import { getPost, updatePost } from '../../actions/post';

class EditPost extends Component {
  state = {
    id: '',
    text: '',
    resource: '',
    title: '',
    errors: {}
  };

  componentWillReceiveProps(nextProps, nextState) {
    const { text, resource, title } = nextProps.post;
    this.setState({
      text,
      resource,
      title
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getPost(id);
  }

  onSubmit = e => {
    e.preventDefault();

    const { text, resource, title } = this.state;
    const { id } = this.props.match.params;

    // Check For Errors
    if (resource === '') {
      this.setState({ errors: { resource: 'resource is required' } });
      return;
    }

    if (text === '') {
      this.setState({ errors: { text: 'text is required' } });
      return;
    }

    if (title === '') {
      this.setState({ errors: { title: 'title is required' } });
      return;
    }

    const updatePost = {
      text,
      resource,
      title,
      id
    };

    this.props.updatePost(updatePost, id);

    //Clear State
    this.setState({
      text: '',
      resource: '',
      title: '',
      errors: {}
    });

    this.props.history.push('/posts');
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { text, resource, title, errors } = this.state;

    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="bg-blue-500 p-6 text-white  text-4xl text-center">
            <p>
              
              Edit Post
              </p> 
          </div>
          <div className="card-body">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <form
                onSubmit={this.onSubmit}
                class="bg-white w-full  shadow-md rounded px-8 pt-6 pb-8 mb-4"
              >
                <div className="form-group">
                  <TextInputGroup
                    placeholder="title"
                    type="title"
                    name="title"
                    value={title}
                    onChange={this.onChange}
                    error={errors.title}
                    class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  />
                  <TextInputGroup
                    placeholder="resource"
                    type="resource"
                    name="resource"
                    value={resource}
                    onChange={this.onChange}
                    error={errors.resource}
                  />
                  <TextAreaFieldGroup
                    placeholder="Resource Info"
                    name="text"
                    value={text}
                    onChange={this.onChange}
                    error={errors.text}
                  />
                  <input
                    type="submit"
                    value="Update Post"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EditPost.propTypes = {
  post: PropTypes.object,
  getPost: PropTypes.func,
  auth: PropTypes.object
};

const mapStateToProps = state => ({
  post: state.post.post
});

export default connect(
  mapStateToProps,
  { getPost, updatePost }
)(EditPost);
