import { describe, it, expect, beforeEach } from "vitest";
import { render } from "./render";

describe("render", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  it("should throw error when form is not found", () => {
    expect(() => {
      render({
        root: "#non-existent-form",
        apiKey: "test-key",
        region: "us-east-1",
      });
    }).toThrow('Address form could not be initialized. No form element found matching selector "#non-existent-form"');
  });

  it("should not throw error when form exists", () => {
    document.body.innerHTML = '<form id="test-form"></form>';

    expect(() => {
      render({
        root: "#test-form",
        apiKey: "test-key",
        region: "us-east-1",
      });
    }).not.toThrow();
  });

  it("should render complete form with all field types", () => {
    document.body.innerHTML = `
      <form id="address-form">
        <input data-type="address-form" name="addressLineOne" />
        <input data-type="address-form" name="addressLineTwo" />
        <input data-type="address-form" name="city" />
        <input data-type="address-form" name="province" />
        <input data-type="address-form" name="postalCode" />
        <input data-type="address-form" name="country" />
        <button data-type="address-form" type="submit">Submit</button>
        <button data-type="address-form" type="reset">Reset</button>
      </form>
    `;

    render({
      root: "#address-form",
      apiKey: "test-key",
      region: "us-east-1",
    });

    // Verify form still exists (not replaced)
    expect(document.querySelector("#address-form")).toBeInTheDocument();
  });

  it("should render React components with labels and placeholders", async () => {
    document.body.innerHTML = `
      <form id="address-form">
        <input data-type="address-form" name="addressLineOne" />
        <input data-type="address-form" name="addressLineTwo" />
        <input data-type="address-form" name="city" />
      </form>
    `;

    render({
      root: "#address-form",
      apiKey: "test-key",
      region: "us-east-1",
    });

    // Wait for React components to render
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Verify React components are rendered with labels
    expect(document.body.textContent).toContain("Address");
    expect(document.body.textContent).toContain("Address Line 2");
    expect(document.body.textContent).toContain("City");

    // Verify placeholders exist in rendered inputs
    expect(document.querySelector('input[placeholder="Enter address"]')).toBeInTheDocument();
    expect(document.querySelector('input[placeholder="Apartment, suite, etc."]')).toBeInTheDocument();
  });

  it("should replace original DOM nodes with React components", async () => {
    document.body.innerHTML = `
      <form id="address-form">
        <input data-type="address-form" name="addressLineOne" />
        <input data-type="address-form" name="addressLineTwo" />
        <input data-type="address-form" name="city" />
        <input data-type="address-form" name="province" />
        <input data-type="address-form" name="postalCode" />
        <input data-type="address-form" name="country" />
        <button data-type="address-form" type="submit">Submit</button>
        <button data-type="address-form" type="reset">Reset</button>
      </form>
    `;

    // Capture references to original DOM nodes
    const originalNodes = {
      addressLineOne: document.querySelector('input[name="addressLineOne"]'),
      addressLineTwo: document.querySelector('input[name="addressLineTwo"]'),
      city: document.querySelector('input[name="city"]'),
      province: document.querySelector('input[name="province"]'),
      postalCode: document.querySelector('input[name="postalCode"]'),
      country: document.querySelector('input[name="country"]'),
      submitButton: document.querySelector('button[type="submit"]'),
      resetButton: document.querySelector('button[type="reset"]'),
    };

    render({
      root: "#address-form",
      apiKey: "test-key",
      region: "us-east-1",
    });

    // Wait for React components to render
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Verify all original input nodes have been replaced
    expect(document.querySelector('input[name="addressLineOne"]')).not.toBe(originalNodes.addressLineOne);
    expect(document.querySelector('input[name="addressLineTwo"]')).not.toBe(originalNodes.addressLineTwo);
    expect(document.querySelector('input[name="city"]')).not.toBe(originalNodes.city);
    expect(document.querySelector('input[name="province"]')).not.toBe(originalNodes.province);
    expect(document.querySelector('input[name="postalCode"]')).not.toBe(originalNodes.postalCode);
    expect(document.querySelector('input[name="country"]')).not.toBe(originalNodes.country);

    // Verify buttons are also replaced
    expect(document.querySelector('button[type="submit"]')).not.toBe(originalNodes.submitButton);
    expect(document.querySelector('button[type="reset"]')).not.toBe(originalNodes.resetButton);

    // Verify new elements still exist with same selectors
    expect(document.querySelector('input[name="addressLineOne"]')).toBeInTheDocument();
    expect(document.querySelector('input[name="addressLineTwo"]')).toBeInTheDocument();
    expect(document.querySelector('input[name="city"]')).toBeInTheDocument();
    expect(document.querySelector('input[name="province"]')).toBeInTheDocument();
    expect(document.querySelector('input[name="postalCode"]')).toBeInTheDocument();
    expect(document.querySelector('input[name="country"]')).toBeInTheDocument();
  });
});
