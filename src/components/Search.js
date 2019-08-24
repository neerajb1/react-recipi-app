import React, { Component } from "react";

export default class Search extends Component {
  render() {
    const { handleChange, handleSubmit, search } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5 text-center">
            <h1 className="text-slanted text-capitalize">
              Search recipes with{" "}
              <strong className="text-orange">Food2Fork</strong>
            </h1>
            <form action="" className="mt-4">
              <label htmlFor="search" className="text-capitalize">
                Type recipes with seperated commas
              </label>
              <div className="input-group">
                <input
                  type="text"
                  name="search"
                  className="form-control"
                  placeholder="paneer , carrots"
                  value={search}
                  onChange={handleChange}
                />
                <div className="input-group-append bg-primary text-white">
                  <button
                    type="submit"
                    className="input-group-text"
                    onClick={handleSubmit}
                  >
                    <i className="fas fa-search" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
