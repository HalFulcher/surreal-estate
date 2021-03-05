import React from "react";
import { render, getByText, getByTestId } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard", () => {
  const validProps = {
    title: "Property Title",
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

    expect(getByText(/Property Title/).textContent).toBe("Property Title");

    expect(asFragment()).toMatchSnapshot();
  });

  it("displays type property correctly", () => {
    const { asFragment } = render(<PropertyCard type={validProps.type} />);

    expect(getByText(/Flat/).textContent).toBe("Flat");

    expect(asFragment()).toMatchSnapshot();
  });

  it("displays bathrooms property correctly", () => {
    const { asFragment } = render(
      <PropertyCard bathrooms={validProps.bathrooms} />
    );

    expect(getByTestId("property-card-bathrooms").textContent).toBe("3");

    expect(asFragment()).toMatchSnapshot();
  });

  it("displays bedrooms property correctly", () => {
    const { asFragment } = render(
      <PropertyCard bedrooms={validProps.bedrooms} />
    );

    expect(getByTestId("property-card-bedrooms").textContent).toBe("1");

    expect(asFragment()).toMatchSnapshot();
  });

  it("displays price property correctly", () => {
    const { asFragment } = render(<PropertyCard price={validProps.price} />);

    expect(getByTestId("property-card-price").textContent).toBe("100000");

    expect(asFragment()).toMatchSnapshot();
  });

  it("displays city property correctly", () => {
    const { asFragment } = render(<PropertyCard city={validProps.city} />);

    expect(getByText(/Manchester/).textContent).toBe("Manchester");

    expect(asFragment()).toMatchSnapshot();
  });

  it("displays email property correctly", () => {
    const { asFragment } = render(<PropertyCard email={validProps.email} />);

    expect(getByText(/test@gmail.com/).textContent).toBe("test@gmail.com");

    expect(asFragment()).toMatchSnapshot();
  });
});
