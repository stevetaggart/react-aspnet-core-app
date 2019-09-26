import React from "react";
import { FetchData } from "./FetchData";
import { render } from "@testing-library/react";

describe("FetchData", () => {
  let getByText, getByTestId, container, asFragment;
  beforeEach(function() {
    global.fetch = jest.fn().mockImplementation(() => {
      var p = new Promise((resolve, reject) => {
        resolve({
          ok: true,
          forecasts: [],
          json: function() {
            return [
              {
                dateFormatted: "9/27/2019",
                summary: "Bracing",
                temperatureC: -18,
                temperatureF: 0
              }
            ];
          }
        });
      });

      return p;
    });

    ({ getByText, getByTestId, container, asFragment } = render(<FetchData />));
  });

  test("Forcasts table exists", () => {
    expect(getByTestId("forcast-table")).toBeDefined();
  });

  test("DateList is in document RTL", () => {
    expect(getByTestId("date-list")).toBeTruthy();
  });
});
