import axios from "axios";
import { useContext, useState } from "react";
import styled from "styled-components";
import { baseUrl } from "../constantes/baseUrl";
import UseForm from "../Hooks/UseForm";
import { ContextGithub } from "../global/GlobalContext";
import { goPaginaHistorico } from "../constantes/Navegacao";
import { useNavigate } from "react-router-dom";

const ContainerPerfil = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  background-color: lightgray;
  padding: 10px;
  box-shadow: 10px 5px 5px black;
  height: 60%;
  width: 70%;
  margin: auto;
  border-radius: 10px;
  font: 400 1.2rem Poppins;

  div {
    width: 100%;
    padding-left: 10px;
  }
  a {
    margin: auto;
    color: white;
    background-color: black;
    width: 20%;
    padding: 10px;
    text-decoration: none;   
    font: 400 1.2rem Poppins; 
  }
`;

const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;

  h1 {
    margin: auto;
    font-family: roboto;
  }
  h2,
  h3 {
    font-family: roboto;
    margin: auto;
  }
`;
const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
  form {
    display: flex;
  }
`;
const Input = styled.input`
  height: 40%;
  padding: 10px;
  font: 400 1.2rem Poppins;
  border-radius: 10px;
`;
const Button = styled.button`
  font-size: 16px;
  color: black;
  background-color: lightgray;

  padding: 10px;
  font: 400 1.2rem Poppins;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;
const Perfil = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  a {
    align-self: flex-end;
    margin: 0;
    border-radius: 10px;
    &:hover {
      box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
        0 17px 50px 0 rgba(0, 0, 0, 0.19);
    }
  }
`;

export const PaginaPesquisa = () => {
  const navigate = useNavigate();

  const { form, onChange, cleanFields } = UseForm({
    login: "",
  });

  const { setHistory, user, setUser, getUser } = useContext(ContextGithub);

  const onClickPesquisa = (e) => {
    e.preventDefault();
    getUser(form.login);
    cleanFields();

  };

  return (
    <ContainerPrincipal>
      <button onClick={() => goPaginaHistorico(navigate)}>Histórico</button>
      <h1>Pesquisa de perfil no Github</h1>
      <FormContainer>
        <form>
          <Input
            name="login"
            type={"text"}
            value={form.login}
            onChange={onChange}
            placeholder="Nome"
            required
          ></Input>
          <Button onClick={onClickPesquisa}>pesquisar</Button>
        </form>
      </FormContainer>

      {!user ? "" : <h2>{user.name}</h2>}

      {!user ? "" :<ContainerPerfil>
          <Perfil src={user.avatar_url}></Perfil>
          <Info>
            <div className="left">
              <b>Biografia: </b>
              <p>{user.bio}</p>

              <b>Email: </b>
              <p>{user.email}</p>

              <b>Localização: </b>
              {user.location}
            </div>
            <a href={user.html_url}>Ver perfil</a>
          </Info>
          
        </ContainerPerfil>
      }
    </ContainerPrincipal>
  );
};

export default PaginaPesquisa;
