import React from "react";
import { render, getByText, getByTestId } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard", () => {
  const validProps = {
    title: "Property",
    type: "Flat",
    bathrooms: "3",
    bedrooms: "1",
    price: "100000",
    city: "Manchester",
    email: "test@gmail.com",
  };

  it("displays component", () => {
    const { asFragment } = render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        price={validProps.price}
        city={validProps.city}
        email={validProps.email}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("displays title property correctly", () => {
    const { asFragment } = render(<PropertyCard title={validProps.title} />);

    expect(getByText(/Property Name/).textContent).toBe("Property Name");

    expect(asFragment()).toMatchSnapshot();
  });

  it("displays type property correctly", () => {
    const { asFragment } = render(<PropertyCard type={validProps.type} />);

    expect(getByText(/Flat/).textContent).toBe("Flat");

    expect(asFragment()).toMatchSnapshot();
  });

  it("displays type property correctly", () => {
    const { asFragment } = render(
      <PropertyCard bathrooms={validProps.bathrooms} />
    );

    expect(getByTestId(/Flat/).textContent).toBe("Flat");

    expect(asFragment()).toMatchSnapshot();
  });
});
