const {
  Router,
  Route,
  Redirect
} = ReactRouter;

const {
  history
} = ReactRouter.lib.BrowserHistory;

Meteor.startup(function() {
  let AppRoutes = (
    <Router history={history}>
      <Route component={App}>
        <Router component={Butler} path="/butler" />
      </Route>
    </Router>
  )
  React.render(AppRoutes, document.body)
})
