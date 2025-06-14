import React, { useReducer } from 'react';

const initialState = {
  name: '',
  email: '',
  password: '',
  errors: {
    name: '',
    email: '',
    password: '',
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'SET_ERROR':
      return { ...state, errors: { ...state.errors, [action.field]: action.error } };
    default:
      return state;
  }
}

function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: 'SET_FIELD',
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleError = (field, error) => {
    dispatch({
      type: 'SET_ERROR',
      field: field,
      error: error,
    });
  };

  return (
    <form>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          onBlur={() => handleError('name', state.name.length === 0 ? 'Name is required' : '')}
        />
        {state.errors.name && <span>{state.errors.name}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          onBlur={() => handleError('email', state.email.includes('@') ? '' : 'Invalid email')}
        />
        {state.errors.email && <span>{state.errors.email}</span>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          onBlur={() => handleError('password', state.password.length < 6 ? 'Password too short' : '')}
        />
        {state.errors.password && <span>{state.errors.password}</span>}
      </div>
      <button type="submit">Submit</button>


      
    </form>
  );
}

export default Form;
