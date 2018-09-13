import React, { Component } from "react";
import DexTop from "../../components/DexTop";
import DexBot from "../../components/DexBot";
import AnimatedBot from "../../components/AnimatedBot";
import BlueScreen from "../../components/BlueScreen";
import { connect } from "react-redux";
import "./Home.css"

const mapStateToProps = state => ({ pokemon: state.pokemonList.pokemon });

const mapDispatchToProps = dispatch => {
    return { dispatch };
};

class Home extends Component {

    render() {
        if (this.props.pokemon && this.props.pokemon.length > 1) {
            return (
                <div id="display">
                    <DexTop />
                    <BlueScreen key="screen" pokemon={this.props.pokemon} />
                    <DexBot />
                </div>
            );
        } else {
            return (
                <div id="display">
                    <DexTop closed="closed" />
                    <DexBot closed="closed" />
                </div>
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
