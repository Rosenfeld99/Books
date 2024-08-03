import React, { useState } from 'react';
import { API_URL } from '../constant/urls';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateBook = () => {
  const navigation = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    cover: '',
    price: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title || formData.title.length > 45) {
      newErrors.title = 'Title is required and must be less than 45 characters.';
    }
    if (!formData.description || formData.description.length > 255) {
      newErrors.description = 'Description is required and must be less than 255 characters.';
    }
    if (!formData.cover || formData.cover.length > 100) {
      newErrors.cover = 'Cover is required and must be less than 100 characters.';
    }
    if (!formData.price || isNaN(formData.price)) {
      newErrors.price = 'Price is required and must be a number.';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // handle form submission
      console.log('Form submitted successfully', formData);
      try {
        const { data } = await axios.post(`${API_URL}`, formData);
        console.log(data);
        if (data) navigation('/');
      } catch (error) {
        console.log(`Error : ${error}`);
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg overflow-hidden p-6 mx-auto">
        <h2 className="text-2xl font-bold mb-4">Create Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Cover URL</label>
            <input
              type="text"
              name="cover"
              value={formData.cover}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.cover && <p className="text-red-500 text-sm">{errors.cover}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBook;
