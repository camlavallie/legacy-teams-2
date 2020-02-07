import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [resource, setResource] = useState('');
  return (
    <div className="w-full ">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        action=""
        onSubmit={e => {
          e.preventDefault();
          addPost({ text, title, resource });
          setText('');
          setTitle('');
          setResource('');
        }}
      >
        <input
          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none m-3"
          placeholder=" Title"
          cols="30"
          rows="5"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <input
          placeholder=" Resource"
          cols="30"
          rows="5"
          value={resource}
          onChange={e => setResource(e.target.value)}
          required
          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none m-3"
        />
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Resource Info"
          value={text}
          onChange={e => setText(e.target.value)}
          required
          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none m-3"
        ></textarea>
        <br />
        <input
          type="submit"
          value="Submit"
          class="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded m-3"
        />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { addPost }
)(PostForm);
