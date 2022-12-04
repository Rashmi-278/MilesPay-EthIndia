import { useState, React } from 'react'
import styled from 'styled-components'
import { ConnectKitButton } from "connectkit";
import { useAccount } from 'wagmi';

function Login() {

  const { address } = useAccount();
  console.log("in login", address);


    return (
        <Container>
          <div className='address-div'>
            <p className='address'>{address}</p>
          </div>
          <div className='login-button'>
          <ConnectKitButton.Custom>
          {
            ({ isConnected, show, ensName }) => {
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
  width: 300px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  .address-div {
    flex:2;
    display: flex;
    justify-content: center;
    align-items: center;

    .address {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      width: 150px;
      background-color: lightgrey;
      border-radius: 20px;
      padding-left: 10px;
      padding-right: 10px;
      paddin-top: 3px;
      paddin-bottom: 3px;
    }
  }

  .login-button {
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    width: 70px;
    background-color: black;
    color: white;
    border-radius: 25px;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }

    &:active {
      opacity: 0.8;
    }
  }
`
