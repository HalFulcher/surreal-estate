import React from "react";
import { render } from "@testing-library/react";
import Alert from "../components/Alert";

describe("Alert", () => {
  it("shows error message", () => {
    const { asFragment, getByText } = render(<Alert message="Error!" />);
    expect(getByText(/Error/).textContent).toBe("Error!");
    expect(asFragment()).toMatchSnapshot();
  });

  it("shows success message", () => {
    const { asFragment, getByText } = render(
      <Alert message="Success!" success />
    );
    expect(getByText(/Success/).textContent).toBe("Success!");
    expect(asFragment()).toMatchSnapshot();
  });

  it("doesn't render if message props is empty", () => {
    const { asFragment } = render(<Alert message="" />);
    const alert = asFragment();
    expect(alert).toMatchSnapshot();
  });
});
