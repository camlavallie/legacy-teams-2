import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';


const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [resource, setResource] = useState('');
  return (
    <div className="post-form">
      <form action="" className="form my-1" onSubmit={e => {
        e.preventDefault();
        addPost({ text, title, resource });
        setText('');
        setTitle('');
        setResource('');
      }}
      >
      <input placeholder=" Title" cols="30" rows="5" value={title} onChange={e => setTitle(e.target.value)} required
        style={{
          marginBottom:'10px',
          width:'100%',
          padding:'10px',
          border:'none',
          borderBottom: '2px solid #97A4B9',
          boxShadow: '0 1px 0 0 #97A4B9',
        }}
      />
       <input placeholder=" Resource" cols="30" rows="5" value={resource} onChange={e => setResource(e.target.value)} required
        style={{
          marginBottom:'10px',
          width:'100%',
          padding:'10px',
          border:'none',
          borderBottom: '2px solid #97A4B9',
          boxShadow: '0 1px 0 0 #97A4B9',
        }}
      />
      <textarea name="text" cols="30" rows="5" placeholder="Resource Info" value={text} onChange={e => setText(e.target.value)} required
      style={{
              width:'100%',
              border:'none',
              borderBottom: '2px solid #97A4B9',
              boxShadow: '0 1px 0 0 #97A4B9',
            }}
      >
      </textarea><br/>
     <input type="submit" className="btn btn-primary my-1" value="Submit"
     style={{
              width:'100%',
              border:'none',
              borderBottom: '2px solid #97A4B9',
              boxShadow: '0 1px 0 0 #97A4B9',
            }}
     />
      </form>    
    </div>
  )
}

PostForm.propTypes = {
 addPost: PropTypes.func.isRequired,
}

export default connect(null, { addPost })(PostForm)
