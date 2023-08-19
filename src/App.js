import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import About from "./components/About";

export default class App extends Component {
  state = {
    progress: 10,
  };
  setProgress = (changedProgress) => {
    this.setState({ progress: changedProgress });
  };
  PageSize = 9;
  api = process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            color="#0096FF"
            progress={this.state.progress}
            height={4}
          />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="general"
                  pageSize={this.PageSize}
                  country="in"
                  category="general"
                  api={this.api}
                  newProgress={this.setProgress}
                />
              }
            />
            <Route
              exact
              path="/about"
              element={
                <About
                  key="about"
                  category="general"
                  newProgress={this.setProgress}
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  key="business"
                  pageSize={this.PageSize}
                  country="in"
                  category="business"
                  api={this.api}
                  newProgress={this.setProgress}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={this.PageSize}
                  country="in"
                  category="entertainment"
                  api={this.api}
                  newProgress={this.setProgress}
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  pageSize={this.PageSize}
                  country="in"
                  category="health"
                  api={this.api}
                  newProgress={this.setProgress}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  key="science"
                  pageSize={this.PageSize}
                  country="in"
                  category="science"
                  api={this.api}
                  newProgress={this.setProgress}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  pageSize={this.PageSize}
                  country="in"
                  category="sports"
                  api={this.api}
                  newProgress={this.setProgress}
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  pageSize={this.PageSize}
                  country="in"
                  category="technology"
                  api={this.api}
                  newProgress={this.setProgress}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
