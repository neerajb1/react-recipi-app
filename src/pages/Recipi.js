import React, { Component } from "react";
import RecipeList from "../components/RecipeList";
import Search from "../components/Search";
import { recipeData } from "../data/tempList";

export default class Recipi extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    recipes: recipeData,
    search: ""
  };
  handleChange = e => {
    this.setState({
      serach: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <>
        <Search
          serach={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <RecipeList recipes={this.state.recipes} />
      </>
    );
  }
}
