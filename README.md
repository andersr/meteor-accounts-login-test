# Redirect anonymous users to the originally requested page after login

- I want to implement the ability to redirect to a originally requested page after successful login.
- My stack: Meteor 1.3, FlowRouter, and React

## Issues
- How can I best pass the params needed to achieve this back to FlowRouter after a user signs in. Currently I am using a global variable, which feels like a hack.
- Also, even after passing the values back to FlowRouter, FlowRouter ignores this and just redirects the user to the homepage.
- Als, Accounts.onLogin appears to have a bug - according to the [docs](http://docs.meteor.com/#/full/accounts_onlogin) it is supposed to only be called on successful login, but in fact gets called on every page request until logout, which further complicates this effort.



##To recreate the issue:

1. clone this repo and cd into the repo
2. npm install
3. run meteor
4. in your browser, open the console
5. click on "Restricted page"
6. If you are not signed in, you should be redirected to a login page. 
7. If you don't have an account, click on"Sign up"
8. Enter an email and password.
9. You should now be redirected back to the originally requested page. However, you are instead redirected to the homepage :-/ 

