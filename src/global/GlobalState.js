import axios from "axios";
import { useContext, useState, useEffect } from "react";
import UseForm from "../Hooks/UseForm";
import { ContextGithub } from "./GlobalContext";

const GlobalState = (props) => {
  const [history, setHistory] = useState([]);
  const [user, setUser] = useState({});

  const getUser = (login) => {
    axios
      .get(`https://api.github.com/users/${login}`)
      .then((response) => {
        console.log(response);
        setUser(response.data);
       
      })
      .catch((err) => {
        console.log(err);
        alert("Campo obrigatorio !")
      });

    if (login && login !== "") {
      setHistory((list) => [{ term: login, timestamp: new Date() }, ...list]);
    }
  };
  const request = { history, setHistory, user, setUser, getUser };

  return (
    <div>
      <ContextGithub.Provider value={request}>
        {props.children}
      </ContextGithub.Provider>
    </div>
  );
};

export default GlobalState;
