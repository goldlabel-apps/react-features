import React from "react";
import {render} from "@testing-library/react";
import {Shared} from "../Shared";

test("Test Shared", () => {
  render(<Shared />);
  const theSuntoRise = true;
  expect(theSuntoRise);
});
