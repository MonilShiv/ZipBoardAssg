function redirectIfNotSignedIn(context, redirect) {
  AppLibRedirectPath = context.path;
  var notSignedIn = !Meteor.userId() && !Meteor.loggingIn();
  if (notSignedIn) {
    FlowRouter.go('/login');
  };
};


FlowRouter.route('/', {
  name: 'Home',
  action(){
    mount( App, {
      content: <Home />
    })
  }
})

FlowRouter.route('/login', {
  name: 'Login',
  action(){
    mount( App, {
      content: <Login />
    })
  }
})
