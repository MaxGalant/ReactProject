import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import MainApp from "./App2";

test("renders without creshing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MainApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
