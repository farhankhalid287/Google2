import React, { useState } from "react";

import "./Login.css"
import InstagramLogin from 'react-instagram-login';
import GithubLogin from "react-github-login";
import GoogleLogin from 'react-google-login';
import FacebookLogin from "react-facebook-login";
import ReactLoginMS from "react-ms-login";
import { LinkedIn } from 'react-linkedin-login-oauth2';
import PaypalBtn from 'react-paypal-checkout';
import TwitterLogin from "react-twitter-login";
import { Card } from "antd";


const Login = (props) => {




  








  const payonCancel = (data) => {
    // User pressed "cancel" or close Paypal's popup!
    alert("Do nothing")
    console.log('The payment was cancelled!', data);
  }

  const onError = (err) => {
    // The main Paypal's script cannot be loaded or somethings block the loading of that script!
    alert("Show a message to the user")
    console.log("Error!", err);
  }

  let env = 'sandbox'; // you can set here to 'production' for production
  let currency = 'MXN'; // or you can set this value from your props or state
  let total = 100;  // same as above, this is the total amount (based on currency) to be
  let locale = 'en_US';
  // For Customize Style: https://developer.paypal.com/docs/checkout/how-to/customize-button/
  let style = {
    'label': 'pay',
    'tagline': false,
    'size': 'medium',
    'shape': 'pill',
    'color': 'black'
  };

  const client = {
    sandbox: 'ARgh1CBhUehRTJbJbdeV3pt0F7bkoVs-4KijtTAy_Y17H-ya6NkWiONcrFzrIzAuRAJ9RE83Ui06FQVk',
    production: 'ARgh1CBhUehRTJbJbdeV3pt0F7bkoVs-4KijtTAy_Y17H-ya6NkWiONcrFzrIzAuRAJ9RE83Ui06FQVk',
  }





  const paypalOptions = {
    clientId:
      "AfFXgFyGbhcKFY3frpc9DAzvaMURvGDnjHUyVmezEKa9g0n-A37Zc4AGtUw9OKfKZfPLVmdHTpuEGTn1",
    intent: "capture"
  };


  const responseGoogle = response => {
    props.callback({
      type: "GMAIL",
      payload: response
    })

  }
  const responseFacebook = response => {
    console.log(response);
  
  }

  const onSuccessGithub = response => {
    console.log(response.code);
  };
  const responseLinkedin = response => {
    console.log(response)
  }

  const authHandlerTwitter = (err, data) => {
    console.log(err, data);
  }

  const payonSuccess = (payment) => {
    // Congratulation, it came here means everything's fine!
    alert('Post to backend to save the info in database')
    console.log("The payment was succeeded!", payment);
  }


  const responseInstagram = response => {
    console.log(response)
  }
  const tweonSuccess = (response) => {
    console.log(response)

    const token = response.headers.get('x-auth-token');
    response.json().then(user => {
      console.log(user)
      if (token) {
        this.setState({ isAuthenticated: true, user: user, token: token });
      }
    });
  };

  const tweonFailed = (error) => {
    alert(error);
  };

  const CONSUMER_KEY = "PyHxgJuyORZqhDiuKAne8LcxT"
  const CONSUMER_SECRET = "RBqOgWJfflgk2GLGmKtHFnHituqvf3vROPfAqzOPpfKficIrI9"
  const CALLBACK_URL = "https://alexandrtovmach.github.io/react-twitter-login/"
  const types = props.typeOfLogin;

  const text = props
  function showGmail() {
    return <GoogleLogin
      clientId="491004959702-3bgqo54pt777f77dgl7cqd6s7e7rii81.apps.googleusercontent.com"

      buttonText={`${text.GMAIL ? ` ${text.GMAIL}` : 'LOGIN WITH GOOGLE'}`}


      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
      className="GOOGLE"

    />
  }

  function showFB() {
    return <FacebookLogin
      btnContent="LOGIN With Facebook"
      appId="185202659227880"
      fields="name,email,picture"
      onSuccess={responseFacebook}
      onFailure={responseFacebook}
    />
  }

  function showGIT() {
    return <GithubLogin
      clientId="15f9cc86c96d14536717"
      onSucess={onSuccessGithub}
      buttonText="LOGIN WITH GITHUB"
      className="GithubLogin"
     
     
    />
  }

  function showMS() {
    return <ReactLoginMS
      clientId="ef6d8c0c-4968-4c20-866e-ac765ee9ea15"
      redirectUri="https://medium.com/zestgeek/login-with-github-and-microsoft-in-reactjs-e33ffbcd933"
      cssClass="ms-login"
      btnContent="LOGIN WITH MICROSOFT"
      responseType="token"
      handleLogin={data => console.log(data)}
    />
  }


  function showLin() {
    return <LinkedIn
      // clientId="77mh7zgv7lrcb6"
      clientId="81wrdonc7mzh15"
      clientSecret="3DeWXvnsWeOtK783"
      scope='r_basicprofile r_emailaddress r_contactinfo r_network'
      onFailure={responseLinkedin}
      onSuccess={responseLinkedin}
      redirectUri="http://localhost:3000/linkedin"
    >
    </LinkedIn>

  }


  function showTwe() {
    return  <div       id ="TwitterLogin_main"> <TwitterLogin loginUrl="http://localhost:4000/api/v1/auth/twitter"
    onFailure={tweonFailed} onSuccess={tweonSuccess}
    buttonTheme='dark'
    className="TwitterLogin"
    consumerKey={CONSUMER_KEY}
    consumerSecret={CONSUMER_SECRET}
    callbackUrl={CALLBACK_URL}
    requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"    />
</div>
  }

  function showpaypal() {
    return <PaypalBtn
      env={env}
      client={client}
      currency={currency}
      total={total}
      locale={locale}
      style={style}
      onError={onError}
      onSuccess={payonSuccess}
      onCancel={payonCancel} />
  }

  function showInstagram() {
    return <InstagramLogin
      clientId="5fd2f11482844c5eba963747a5f34556"
      buttonText=" Login with Instagram "
      cssClass="InstagramLogin"
      onSuccess={responseInstagram}
      onFailure={responseInstagram}
    />
  }


  



  

  return (
    <>
      
        <div style={{ marginTop: '90px' }} >
          
          <div className="centerlogin">
            <div className="flex-container" style={{ backgroundColor: '#FBF9FA', width: '23vw', display: 'flex', flexFlow: 'column', alignItems: 'center', borderRadius: '25px' }}>
              {
                types.includes("GMAIL") ? showGmail() : null

              }

              {
                types.includes("FACEBOOK") ? showFB() : null

              }

              {
                types.includes("GITHUB") ? showGIT() : null

              }

              {
                types.includes("MICROSOFT") ? showMS() : null

              }


              {
                types.includes("Twitter") ? showTwe() : null

              }
              {
                types.includes("LINKEDIN") ? showLin() : null

              }
        
              {
                types.includes("Instagram") ? showInstagram() : null

              }
          


            </div>
          </div>
        </div>
     
    </>
  );
}

export default Login;
