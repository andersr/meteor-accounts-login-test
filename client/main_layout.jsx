import React from 'react'

export const MainLayout = ({content}) =>
  <div>
    <ul>
		  <li><a href="/signup">Sign Up</a></li>
		  	  <li><a href="/login">Login</a></li>
		  <li><a href="/logout">Logout</a></li>
		  <li><a href="/about">About</a></li>
		  <li><a href="/">Home</a></li>
	  </ul>
	 {content()}
	</div>
