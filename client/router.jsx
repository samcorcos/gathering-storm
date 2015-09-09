const {
  Router,
  Route,
  Redirect
} = ReactRouter;

const history = ReactRouter.history.useQueries(ReactRouter.history.createHistory)()

Meteor.startup(function() {
  let AppRoutes = (
    <Router history={history}>
      <Route component={App}>
        <Router component={Home} path="/" />
        <Router component={Butler} path="/butler" />
      </Route>
    </Router>
  )
  React.render(AppRoutes, document.body)
})
