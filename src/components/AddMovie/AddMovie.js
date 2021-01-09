import React, { useState } from "react";

import "./AddMovie.css";

function AddMovie({ addMovie }) {
  const [form, setForm] = useState({
    name: "",
    rating: 0,
    description: "",
    image: "",
  });

  const saveMovie = function (event) {
    event.preventDefault();
    addMovie(form);
    setForm({
      name: "",
      rating: 0,
      description: "",
      image: "",
    });
  };

  const onChange = function (event) {
    const newForm = {
      ...form,
      [event.target.name]: event.target.value,
    };
    setForm(newForm);
  };

  return (
    <div className="add-movie-container">
      <form onSubmit={saveMovie}>
        <div className="form-item">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={onChange}
          />
        </div>
        <div className="form-item">
          <label htmlFor="description">Description:</label>
          <input
            id="description"
            name="description"
            type="text"
            value={form.description}
            onChange={onChange}
          />
          {/* <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
          ></textarea> */}
        </div>
        <div className="form-item">
          <label htmlFor="rating">Rating:</label>
          <input
            id="rating"
            name="rating"
            type="number"
            value={form.rating}
            onChange={onChange}
          />
        </div>
        <div className="form-item">
          <label htmlFor="image">Image:</label>
          <input
            id="image"
            name="image"
            type="text"
            value={form.image}
            onChange={onChange}
          />
        </div>
        <div className="form-item">
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}

export default AddMovie;
