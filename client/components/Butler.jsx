Butler = React.createClass({
  render() {
    return (
      <div>
        The Butler Page
        <MeteorData
          subscribe = { () => {
            return Meteor.subscribe('users') }}
          fetch = { () => {
            return {data: Meteor.users.find().fetch() } }}
          render = { ({loading, data}) => {
            return <ButlerPreGame loading={loading} data={data} />}}
        />
      </div>
    )
  }
})

ButlerPreGame = React.createClass({
  // getInitialState() {
  //   return {
  //     username: "",
  //     nation: "",
  //     amount_spent: ""
  //   }
  // },
  // handleChange: function(e) {
  //   switch (e.target.id) {
  //     case "name": this.setState({username: e.target.value}); break;
  //     case "nation": this.setState({nation: e.target.value}); break;
  //     case "amount_spent": this.setState({amount_spent: e.target.value}); break;
  //   }
  //   console.log(this.state);
  // },
  // createPlayer(username, amount_spent, nation) {
  //   console.log(this);
  //   console.log(username);
  //   var x = Accounts.createUser({
  //     username: username,
  //     password: "password",
  //     profile: {
  //       amount_spent: amount_spent,
  //       nation: nation
  //     }
  //   }, function(err) {
  //     console.log(err);
  //   })
  //   console.log(x);
  //   this.setState({
  //     username: "",
  //     nation: "",
  //     amount_spent: ""
  //   })
  // },
  render() {
    if (this.props.loading) {
      <h1>Loading</h1>
    }
    return <h1>meh</h1>
    // }
    // let listOfUsers = this.props.data.map(function(user) {
    //   return (
    //     <tr key={user._id}>
    //       <td>{user.username}</td>
    //       <td>{user.profile.nation}</td>
    //       <td>{user.profile.amount_spent}</td>
    //     </tr>
    //   )
    // })
    // return (
    //   <table>
    //     <tr>
    //       <th>Player</th>
    //       <th>Country</th>
    //       <th>Amount Spent</th>
    //       <th></th>
    //     </tr>
    //     {this.props.data ? listOfUsers : null}
    //     <tr>
    //       <td><input type="text" id="name" onChange={this.handleChange} defaultValue={this.state.username} placeholder="Name" /></td>
    //       <td><input type="text" id="nation" onChange={this.handleChange} defaultValue={this.state.nation} placeholder="Nation" /></td>
    //       <td><input type="text" id="amount_spent" onChange={this.handleChange} defaultValue={this.state.amount_spent} placeholder="Amount Spent" /></td>
    //       <td><button onClick={this.createPlayer.bind(this, this.state.username, this.state.amount_spent, this.state.nation)}>Submit</button></td>
    //     </tr>
    //   </table>
    // )
  }
})
