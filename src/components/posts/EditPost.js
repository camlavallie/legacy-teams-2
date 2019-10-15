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
      title,

    });
  }


  componentDidMount() {
    
    const { id } = this.props.match.params;
    this.props.getPost(id);
  }

  onSubmit = (e) => {
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

    this.props.history.push('/posts')
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });


  render() {
    const { text, resource, title, errors } = this.state;

    return (

      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card" style={{ background: '#4267B2', color: 'white', textAlign: 'center', fontSize: '1.5em' }}>Edit Post</div>
          <div className="card-body">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <TextInputGroup
                    placeholder="title"
                    type="title"
                    name="title"
                    value={title}
                    onChange={this.onChange}
                    error={errors.title}
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
                  <input type="submit" value="Update Post" className="btn btn-light btn-block" style={{ background: '#4267B2', color:'white',  width:'100%',
              border:'none',
              borderBottom: '2px solid #97A4B9', }} />

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

export default connect(mapStateToProps, { getPost, updatePost })(EditPost);
