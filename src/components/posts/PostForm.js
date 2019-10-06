import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';


const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  return (
    <div className="post-form">
      <form action="" className="form my-1" onSubmit={e => {
        e.preventDefault();
        addPost({ text, title });
        setText('');
        setTitle('');
      }}>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required/>
      <textarea name="text" cols="30" rows="5" placeholder="Create Resource" value={text} onChange={e => setText(e.target.value)} required>
      </textarea> 
     <input type="submit" className="btn btn-dark my-1" value="Submit"/>
      
      </form>    
    </div>
  )
}

PostForm.propTypes = {
 addPost: PropTypes.func.isRequired,
}

export default connect(null, { addPost })(PostForm)
