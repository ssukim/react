import React from "react";
import { Route } from "react-router-dom";
import BlogPage from "./page/BlogPage";

const App = () => {
  return <Route path="/:category?" component={BlogPage} />;
};

export default App;
