import React from 'react'

export const Login = (props) => {
  
const loginWithPassword = (e) => {
    e.preventDefault()
    
    const
      email = $('#email').val(),
      password = $('#password').val()
    
    Meteor.loginWithPassword(email, password, (error) => {
      if (error) {
        console.log("login error: " + error.reason)
      } 
      // else {
      //   FlowRouter.go('homepage')
      // }
    })
  }

  const signupMsg = "Don't have an account?"

  return  (
    <form onSubmit={loginWithPassword} id="login-form">
      <div className="form-group">
       <label htmlFor="email">Email:</label>
       <input type="email" id="email" name="email" className="form-control"/>
     </div>
     <div className="form-group">
       <label htmlFor="password">Password:</label>
       <input type="password" id="password" name="password" className="form-control"/>
     </div>
     <div className="form-group">
       <button type="submit" className="btn btn-primary">Sign In</button>
     </div>
     <hr />
      <div className="form-group">
        {signupMsg} <a href="/signup" className="signup-link">Sign Up</a>
      </div>
    </form>
  )
}