import { render } from "@testing-library/react";
import React from "react";
import Display from "../components/Display";

it("displays messages", () => {
  const testMessages = [{ name: "name1", text: "text1" }];
  const { getByTestId } = render(<Display messages={testMessages} />);
  expect(getByTestId("message")).toBeInTheDocument();
});
