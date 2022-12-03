<<<<<<< HEAD
import { useState, React } from 'react'
=======
import React from 'react'
>>>>>>> 33d8d55458042c902c0d1d32b5fe4c6b0778cdbf
import styled from 'styled-components'

function Login() {
<<<<<<< HEAD

  const [Connected, setConnected] = useState(false);
  const { address } = useAccount();

    return (
        <Container>
          <div className='address-div'>
            <p className='address'>{address}</p>
          </div>
          <div className='login-button'>
          <ConnectKitButton.Custom>
          {
            ({ isConnected, show, ensName }) => {
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
=======
    return (
        <Container>
          <div>
            
>>>>>>> 33d8d55458042c902c0d1d32b5fe4c6b0778cdbf
          </div>
        </Container>
    )
}

export default Login


const Container=styled.div`
  width: 300px;
  height: 50px;
<<<<<<< HEAD

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
=======
  border: 1px solid black;
>>>>>>> 33d8d55458042c902c0d1d32b5fe4c6b0778cdbf
`
