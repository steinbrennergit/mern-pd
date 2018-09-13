import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./pages/Home";
import { loadPokemon } from "./actions";
import API from "./utils/API";

const mapStateToProps = state => ({ pokemon: state.pokemonList.pokemon });

const mapDispatchToProps = dispatch => {
  return {
    load: function (pokemon) { dispatch(loadPokemon(pokemon)) }
  };
};

class App extends Component {

  componentDidMount() {
    API.getPokemon().then((res) => {
      this.props.load(res.data);
    }).catch((err) => { return console.log("MUAHAHAHA", err); })
  }

  render() {
    return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
    </Router>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);