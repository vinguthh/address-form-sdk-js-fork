/* any is used to allow child components to be controlled in Storybook */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { AddressForm } from "../../lib/components/AddressFormReact/AddressForm";
import { Flex } from "../../lib/components/Flex";

const meta = {
  title: "Component/AddressForm",
  component: AddressForm,
  tags: ["autodocs"],
  args: {
    // AddressForm Props
    onSubmit: (event: any) => {
      action("onSubmit")(event.data);
    },
    apiKey: "AMAZON_LOCATION_API_KEY",
    region: "AMAZON_LOCATION_REGION",
    preventDefaultOnSubmit: true,
    language: undefined,
    politicalView: undefined,
    showCurrentCountryResultsOnly: false,
    allowedCountries: undefined,
    placeTypes: undefined,
    // AddressForm Map Props
    mapMapStyle: "Standard Light",
    mapShowNavigationControl: true,
    mapAdjustablePosition: true,
    // Address Line One Input Props
    addressLineOnePlaceholder: "Enter address",
    addressLineOneLabel: "Address",
    addressLineOneClassName: undefined,
    addressLineOneApiName: "autocomplete",
    addressLineOneShowCurrentLocation: "true",
    // Address Line Two Input Props
    addressLineTwoPlaceholder: "Apartment, suite, etc.",
    addressLineTwoLabel: "Address Line 2",
    addressLineTwoClassName: undefined,
    // City Input Props
    cityPlaceholder: "City",
    cityLabel: "City",
    cityClassName: undefined,
    // Province Input Props
    provincePlaceholder: "State/Province",
    provinceLabel: "Province/State",
    provinceClassName: undefined,
    // Postal Code Input Props
    postalCodePlaceholder: "Postal/Zip code",
    postalCodeLabel: "Postal/Zip code",
    postalCodeClassName: undefined,
    // Country Input Props
    countryPlaceholder: "Country",
    countryLabel: "Country",
    countryClassName: undefined,
  } as any,
  argTypes: {
    apiKey: {
      type: "string",
      description: "The Amazon Location Service API key used to authenticate requests",
      table: {
        category: "AddressForm",
      },
    },
    region: {
      type: "string",
      description: "The AWS region where Amazon Location Service is called (e.g., 'us-east-1')",
      table: {
        category: "AddressForm",
      },
    },
    onSubmit: {
      type: "function",
      description: "Callback function triggered on form submission",
      table: {
        category: "AddressForm",
      },
    },
    preventDefaultOnSubmit: {
      type: "boolean",
      control: "boolean",
      description: "Prevents the default form submission behavior when set to true",
      table: {
        category: "AddressForm",
        defaultValue: { summary: "true" },
      },
    },
    language: {
      type: "string",
      control: "text",
      description: "Language code for localized address suggestions (e.g., 'en', 'es')",
      table: {
        category: "AddressForm",
      },
    },
    politicalView: {
      type: "string",
      control: "text",
      description: "Political view for address results, affecting disputed territories display",
      table: {
        category: "AddressForm",
      },
    },
    showCurrentCountryResultsOnly: {
      type: "boolean",
      control: "boolean",
      description: "Limits autocomplete results to the currently selected country only",
      table: {
        category: "AddressForm",
        defaultValue: { summary: "false" },
      },
    },
    allowedCountries: {
      type: "array",
      control: "object",
      description: "Array of ISO country codes to restrict address suggestions",
      table: {
        category: "AddressForm",
      },
    },
    placeTypes: {
      type: "array",
      control: "object",
      description: "Array of place types to filter results (e.g., 'Locality', 'PostalCode')",
      table: {
        category: "AddressForm",
      },
    },
    mapMapStyle: {
      type: "array",
      name: "Map Style",
      control: "select",
      description: "Map style configuration for the address form map",
      table: {
        category: "AddressForm.Map",
        defaultValue: { summary: '["Standard", "Light"]' },
      },
      options: ["Standard Light", "Standard Dark", "Monochrome Light", "Monochrome Dark", "Hybrid", "Satellite"],
      mapping: {
        "Standard Light": ["Standard", "Light"],
        "Standard Dark": ["Standard", "Dark"],
        "Monochrome Light": ["Monochrome", "Light"],
        "Monochrome Dark": ["Monochrome", "Dark"],
        Hybrid: ["Hybrid"],
        Satellite: ["Satellite"],
      },
    },
    mapShowNavigationControl: {
      type: "boolean",
      name: "Show Navigation Control",
      control: "boolean",
      description: "Display map navigation controls",
      table: {
        category: "AddressForm.Map",
        defaultValue: { summary: "true" },
      },
    },
    mapAdjustablePosition: {
      type: "boolean",
      name: "Adjustable Position",
      control: "boolean",
      description: "Allow users to adjust address position on the map",
      table: {
        category: "AddressForm.Map",
        defaultValue: { summary: "true" },
      },
    },
    // Address Line One
    addressLineOnePlaceholder: {
      type: "string",
      control: "text",
      description: "Placeholder text for the address line one input",
      table: {
        category: "Address Line One Input",
        defaultValue: { summary: '"Enter address"' },
      },
    },
    addressLineOneLabel: {
      type: "string",
      control: "text",
      description: "Custom label for the address line one field",
      table: {
        category: "Address Line One Input",
        defaultValue: { summary: '"Address"' },
      },
    },
    addressLineOneClassName: {
      type: "string",
      control: "text",
      description: "CSS class names for custom styling of address line one",
      table: {
        category: "Address Line One Input",
      },
    },
    addressLineOneApiName: {
      type: "string",
      control: "select",
      description: "API type for address suggestions",
      options: ["autocomplete", "suggest"],
      table: {
        category: "Address Line One Input",
        defaultValue: { summary: '"autocomplete"' },
      },
    },
    addressLineOneShowCurrentLocation: {
      type: "string",
      control: "select",
      description: "Enable current location functionality",
      options: ["true", "false"],
      table: {
        category: "Address Line One Input",
        defaultValue: { summary: '"true"' },
      },
    },
    // Address Line Two
    addressLineTwoPlaceholder: {
      type: "string",
      control: "text",
      description: "Placeholder text for the address line two input",
      table: {
        category: "Address Line Two Input",
        defaultValue: { summary: '"Apartment, suite, etc."' },
      },
    },
    addressLineTwoLabel: {
      type: "string",
      control: "text",
      description: "Custom label for the address line two field",
      table: {
        category: "Address Line Two Input",
        defaultValue: { summary: '"Address Line 2"' },
      },
    },
    addressLineTwoClassName: {
      type: "string",
      control: "text",
      description: "CSS class names for custom styling of address line two",
      table: {
        category: "Address Line Two Input",
      },
    },
    // City
    cityPlaceholder: {
      type: "string",
      control: "text",
      description: "Placeholder text for the city input",
      table: {
        category: "City Input",
        defaultValue: { summary: '"City"' },
      },
    },
    cityLabel: {
      type: "string",
      control: "text",
      description: "Custom label for the city field",
      table: {
        category: "City Input",
        defaultValue: { summary: '"City"' },
      },
    },
    cityClassName: {
      type: "string",
      control: "text",
      description: "CSS class names for custom styling of city",
      table: {
        category: "City Input",
      },
    },
    // Province
    provincePlaceholder: {
      type: "string",
      control: "text",
      description: "Placeholder text for the province input",
      table: {
        category: "Province Input",
        defaultValue: { summary: '"State/Province"' },
      },
    },
    provinceLabel: {
      type: "string",
      control: "text",
      description: "Custom label for the province field",
      table: {
        category: "Province Input",
        defaultValue: { summary: '"Province/State"' },
      },
    },
    provinceClassName: {
      type: "string",
      control: "text",
      description: "CSS class names for custom styling of province",
      table: {
        category: "Province Input",
      },
    },
    // Postal Code
    postalCodePlaceholder: {
      type: "string",
      control: "text",
      description: "Placeholder text for the postal code input",
      table: {
        category: "Postal Code Input",
        defaultValue: { summary: '"Postal/Zip code"' },
      },
    },
    postalCodeLabel: {
      type: "string",
      control: "text",
      description: "Custom label for the postal code field",
      table: {
        category: "Postal Code Input",
        defaultValue: { summary: '"Postal/Zip code"' },
      },
    },
    postalCodeClassName: {
      type: "string",
      control: "text",
      description: "CSS class names for custom styling of postal code",
      table: {
        category: "Postal Code Input",
      },
    },
    // Country
    countryPlaceholder: {
      type: "string",
      control: "text",
      description: "Placeholder text for the country input",
      table: {
        category: "Country Input",
        defaultValue: { summary: '"Country"' },
      },
    },
    countryLabel: {
      type: "string",
      control: "text",
      description: "Custom label for the country field",
      table: {
        category: "Country Input",
        defaultValue: { summary: '"Country"' },
      },
    },
    countryClassName: {
      type: "string",
      control: "text",
      description: "CSS class names for custom styling of country",
      table: {
        category: "Country Input",
      },
    },
  } as any,
} satisfies Meta<typeof AddressForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: any) => {
    return (
      <AddressForm
        apiKey={args.apiKey}
        region={args.region}
        onSubmit={args.onSubmit}
        preventDefaultOnSubmit={args.preventDefaultOnSubmit}
        language={args.language}
        politicalView={args.politicalView}
        showCurrentCountryResultsOnly={args.showCurrentCountryResultsOnly}
        allowedCountries={args.allowedCountries}
        placeTypes={args.placeTypes}
      >
        <Flex direction="row" flex>
          <Flex direction="column">
            <input
              data-type="address-form"
              name="addressLineOne"
              aria-label={args.addressLineOneLabel}
              placeholder={args.addressLineOnePlaceholder}
              data-api-name={args.addressLineOneApiName}
              data-show-current-location={args.addressLineOneShowCurrentLocation}
              className={args.addressLineOneClassName}
            />
            <input
              data-type="address-form"
              name="addressLineTwo"
              aria-label={args.addressLineTwoLabel}
              placeholder={args.addressLineTwoPlaceholder}
              className={args.addressLineTwoClassName}
            />
            <input
              data-type="address-form"
              name="city"
              aria-label={args.cityLabel}
              placeholder={args.cityPlaceholder}
              className={args.cityClassName}
            />
            <input
              data-type="address-form"
              name="province"
              aria-label={args.provinceLabel}
              placeholder={args.provincePlaceholder}
              className={args.provinceClassName}
            />
            <input
              data-type="address-form"
              name="postalCode"
              aria-label={args.postalCodeLabel}
              placeholder={args.postalCodePlaceholder}
              className={args.postalCodeClassName}
            />
            <input
              data-type="address-form"
              name="country"
              aria-label={args.countryLabel}
              placeholder={args.countryPlaceholder}
              className={args.countryClassName}
            />
            <Flex direction="row">
              <button data-type="address-form" type="submit">
                Submit
              </button>
              <button data-type="address-form" type="reset">
                Reset
              </button>
            </Flex>
          </Flex>
          <AddressForm.Map
            mapStyle={args.mapMapStyle}
            showNavigationControl={args.mapShowNavigationControl}
            adjustablePosition={args.mapAdjustablePosition}
          />
        </Flex>
      </AddressForm>
    );
  },
};
