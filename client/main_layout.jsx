import React from 'react'

export const MainLayout = ({content}) => {
	const
	  signedIn = Meteor.user() !== null,
	  loginStatusMsg = signedIn? "You are signed in" : "You are not signed in",
	  loginSignup = <span>
	                <li><a href="/signup">Sign Up</a></li>
		  	          <li><a href="/login">Login</a></li>
		  	          </span>,
	  logout =      <li><a href="/logout">Logout</a></li>
	  acctLinks = signedIn? logout : loginSignup




	return   <div>
    <ul>
		  <li>{loginStatusMsg}</li>
		  {acctLinks}
		  <li><a href="/about">About</a></li>
		  <li><a href="/">Home</a></li>
		  <li><a href="/restricted">Restricted (requires login)</a></li>
	  </ul>
	 {content()}
	</div>

}