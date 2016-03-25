Accounts.onLogin(function(){

	if (Meteor.isClient) {
		const
		  route = FlowRouter.current().route.name,
	    didLoginOrSignup = route === "login" || route === "signup" ,
	    wasRedirected = Session.get("loginRedirect"),
	    requestedPage = Session.get("requestedPage")	  

		console.log("wasRedirected: ", wasRedirected)
	  console.log("didLoginOrSignup: ", didLoginOrSignup)
	  console.log("requestedPage: ", requestedPage)

    if(wasRedirected && didLoginOrSignup){

      //FlowRouter does *not* redirect to this route, even through the above conditions return true
      FlowRouter.go(requestedPage)
      Session.set("loginRedirect", false)
    } else {
  	  FlowRouter.go("homepage")
    }

	}

})