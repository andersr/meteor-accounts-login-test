# Accounts.onLogin Example

- This is an example showing Accounts.onLogin getting called every time after a user signs in. According to the [docs](http://docs.meteor.com/#/full/accounts_onlogin) it is supposed to only be called on successful login.
- Stack: Meteor 1.3, FlowRouter, React

##To recreate the issue:

1. clone this repo and cd into the repo
2. npm install
3. run meteor
4. In your browser, open the console
5. You should not see any references to Accounts.onLogin being called.
5. Click on Sign up and register with a dummy email and password.
6. You should now see Accounts.onLogin being called every time you navigate to a new page, until you sign out.

