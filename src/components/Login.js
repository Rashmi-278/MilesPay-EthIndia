import {useState, useEffect, React } from 'react'
import styled from 'styled-components'
import { ConnectKitButton } from "connectkit";
import { useAccount } from 'wagmi';

function Login() {
  const [Connected, setConnected] = useState(false);
  const { address } = useAccount();

    return (
        <Container>
          <div className="address-div">
            <p className="address">{address}</p>
          </div>
          <div className="button-div">
          <ConnectKitButton.Custom>
          {
           ({ isConnected, show, ensName }) => {
             // console.log("testing",isConnected);
             if(isConnected){
               setConnected(true);
             }else{
               setConnected(false);
             }

             return (
               <div className="login" onClick={show}>
                 {isConnected ? ensName ?? "Logout" : "Login"}
                 <div className="bar"></div>
               </div>
             );
           }
         }
       </ConnectKitButton.Custom>
          </div>
        </Container>
    )
}

export default Login


const Container=styled.div`
  width: 270px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  .address-div {
    flex:2;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    .address {
      background-color: rgba(242, 234, 235, 0.91);
      border-radius: 15px;
      width: 150px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      padding-right: 10px;
      padding-left: 10px;
      padding-left: 10px;
      padding-bottom: 3cpx;
    }
  }

  .button-div {
    margin-right: 10px;
    margin-left: 10px;
    border-radius: 25px;
    width: 80px;
    height: 36px;
    color: white;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }

    &:active {
      opacity: 0.8;
    }
  }
`
