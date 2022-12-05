import { useContext } from "react";
import styled from "styled-components";
import { goPaginaPesquisar } from "../constantes/Navegacao";
import { ContextGithub } from "../global/GlobalContext";
import {useNavigate} from "react-router-dom";
import github from "../imgs/github.png"

const ContainerPrincipal = styled.div `
//display:flex;
flex-direction:column;
button{

width: 100%;

}
table, td {
 
 
  border-collapse: collapse;
  padding:15px;
  margin:auto;
  width:50%;
  background-color:lightgray;
  &:hover{
    background-color:gray;
  }

  
}
img{
  height: 50px;
  width: 50px;
  border-radius: 50%;
  align-items:center;
}
h1{
  text-align:center;
}

`

export const PaginaHistorico = () => {
  const navigate = useNavigate()

  const { history,user } = useContext(ContextGithub);
  //   const onClickHistorico = () => {
  //     axios
  //       .get("https://api.github.com/users")
  //       .then((response) => {})
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };


  return (
    <ContainerPrincipal>
      <button onClick={() => goPaginaPesquisar(navigate)}>Ir a Home</button>
     
      <h1>Histórico</h1>
      {history.map((h, index) => {
     
        return (
          
          <table>
             
        <tr key={index}>
          
        <td>{h.term}</td>
        <td><a href={user.html_url}><img src={github}/></a>perfil
        </td>

        </tr>
        </table>
        )
        
      })}
      
      
    </ContainerPrincipal>
  );
};
