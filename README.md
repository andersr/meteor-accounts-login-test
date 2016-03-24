# Testing Accounts.login

- trying to understand if/why [Accounts.onLogin](http://docs.meteor.com/#/full/accounts_onlogin) gets called on every page request if a user is signed.
- if a user is anonymous, this does not happen.
- this becomes a problem if I want to do something only when a user signs in, such as redirect them back to the originally requested page. 
- I am using FlowRouter, React, and Meteor 1.3

To recreate the issue:

1. clone this repo and cd into the repo
2. npm install
3. meteor
4. open the console
5. look for if Accounts.onLogin gets called depending on if you are signed in or anonymous

