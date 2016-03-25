import React from 'react'
import {mount} from 'react-mounter'
import {MainLayout} from './main_layout'
import {Home} from './home'
import {About} from './about'
import {NotFound} from './not_found'
import {Signup} from './signup'
import {Login} from './login'
import {Restricted} from './restricted'

function redirectIfAnonymous(context, redirect) {

  const notSignedIn = Meteor.userId() === null

	 if (notSignedIn) {
    Session.set("loginRedirect", true)
    Session.set("requestedPage", context.path)

	 	 alert("Please sign in to continue.")
     redirect('login')
	 }
}

FlowRouter.route('/restricted', {
  name: 'restricted',
  triggersEnter: [redirectIfAnonymous],
  action(params, queryParams) {
    mount(MainLayout, {
      content: () => <Restricted />
    })
  }
})


FlowRouter.route('/', {
  name: 'homepage',
  action() {
    mount(MainLayout, {
      content: () => <Home />
    })
  }
})

FlowRouter.route('/about', {
  name: 'about',
  action() {
    mount(MainLayout, {
      content: () => <About />
    })
  }
})

FlowRouter.route('/signup', {
  name: 'signup',
  action() {
    mount(MainLayout, {
      content: () => <Signup />
    })
  }
})

FlowRouter.route('/login', {
  name: 'login',
  action(params, queryParams) {
    mount(MainLayout, {
      content: () => <Login />
    })
  }
})

FlowRouter.route('/logout', {
  name: 'logout',
  action: function() {
    Meteor.logout(function(){
      alert("You've been signed out")
      FlowRouter.go('homepage')
    })
  }
})

FlowRouter.notFound = {
  action() {
    mount(MainLayout, {
      content: () => <NotFound />
    });
  }
}