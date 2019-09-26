import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import DateList from "./DateList";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <DateList />
    </MemoryRouter>,
    div
  );
});
