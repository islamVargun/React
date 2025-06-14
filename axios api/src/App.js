import React, { useEffect } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:3000/users";
function App() {
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL);
    console.log(response);
  };

  const userGet = async () => {
    const response = await axios.get(BASE_URL + "/2");
    console.log(response);
  };

  const createNewUser = async () => {
    const response = await axios.post(BASE_URL, {
      name: "Ali",
      password: "1234",
    });
    console.log(response);
  };

  const updateUser = async () => {
    const response = await axios.put(BASE_URL + "/4", {
      name: "naber",
      password: "1234",
    });
    console.log(response);
  };

  const deleteUser = async () => {
    const response = await axios.delete(BASE_URL + "/4");
    console.log(response);
  };

  useEffect(() => {
    debugger
    getAllUsers();
    userGet();
    createNewUser();
    updateUser();
    deleteUser();
  }, []);

  return <div></div>;
}

export default App;
