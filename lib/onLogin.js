Accounts.onLogin(function(){
	console.log("client/server: entered Accounts.onLogin")
 if (Meteor.isClient) {
 		console.log("client: entered Accounts.onLogin")
		const
		  route = FlowRouter.current().route.name,
	    didLoginOrSignup = route === "login" || route === "signup" ,
	    wasRedirected = Session.get("loginRedirect"),
	    requestedPage = Session.get("requestedPage")	  

			console.log("Accounts.onLogin wasRedirected: ", wasRedirected)
		  console.log("Accounts.onLogin didLoginOrSignup: ", didLoginOrSignup)
		  console.log("Accounts.onLogin requestedPage: ", requestedPage)

    if(wasRedirected && didLoginOrSignup){
      FlowRouter.go(requestedPage)
      Session.set("loginRedirect", false)
    }
	}

})