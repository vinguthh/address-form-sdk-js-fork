## Amazon Location Address Form SDK

The Address Form SDK simplifies the development of autofill address forms. As users type their addresses, the form displays relevant suggestions. Selecting a suggestion populates the subsequent fields, including street, city, state, and postal code. This intelligent feature reduces errors and saves time by eliminating manual typing. Users can preview the selected address on a map and adjust the location pin.

## Getting Started

The Address Form SDK can be used within a React app. Get started by following the instructions below or use the step by step wizard from our console to configure the address form.

### Prerequisites

First you will need to have an Amazon Location Service API key containing the correct permissions to perform actions for the address form. Follow [this guide for how to create an API key](https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html).

The use of the Address Form will require the following actions to be allowed in the API key:

| Action           | Purpose                                                     | Required When                                          |
| ---------------- | ----------------------------------------------------------- | ------------------------------------------------------ |
| `GetTile`        | Retrieves map tiles for rendering the interactive map       | Displaying a map component                             |
| `Autocomplete`   | Provides real-time address suggestions as users type        | Using the Autocomplete API for typeahead functionality |
| `Suggest`        | Provides real-time address suggestions as users type        | Using the Suggest API for typeahead functionality      |
| `ReverseGeocode` | Converts coordinates to address                             | Allowing users to use their current location           |
| `GetPlace`       | Retrieves detailed place information for selected addresses | Using the typeahead functionality                      |

### Installation

Install the SDK in your React app by running: `npm install @aws/address-form-sdk-js`

### Use SDK

Implement the following code into your React app. Replace the `AMAZON_LOCATION_API_KEY` value with your API key and `AMAZON_LOCATION_REGION` with the region of the API key. The data returned when the form is submitted is returned from `onSubmit`

```
import React from 'react';
import { AddressForm, Flex } from "@aws/address-form-sdk-js";

export default function App() {
  return (
    <AddressForm
      apiKey="AMAZON_LOCATION_API_KEY"
      region="AMAZON_LOCATION_REGION"
      onSubmit={(data) => {
        console.log(data);
      }}
    >
      <Flex
        direction="row"
        flex
      >
        <Flex direction="column">
          <input
            data-api-name="autocomplete"
            data-type="address-form"
            name="addressLineOne"
            placeholder="Enter address"
          />
          <input
            data-type="address-form"
            name="addressLineTwo"
          />
          <input
            data-type="address-form"
            name="city"
            placeholder="City"
          />
          <input
            data-type="address-form"
            name="province"
            placeholder="State/Province"
          />
          <input
            data-type="address-form"
            name="postalCode"
          />
          <input
            data-type="address-form"
            name="country"
            placeholder="Country"
          />
          <Flex direction="row">
            <button address-form="submit">
              Submit
            </button>
            <button address-form="reset">
              Reset
            </button>
          </Flex>
        </Flex>
        <AddressFormMap
          mapStyle={[
            'Standard',
            'Light'
          ]}
         />
      </Flex>
    </AddressForm>
  );
}
```

### Customization

The form is fully customizable - add, remove, or rearrange elements as needed for your use case. Replace the `Flex` component with your own CSS framework or custom styling. You can control other functionalities of the address form through the component props. See the [API Reference](#api-reference) for complete customization options.

## API Reference

### AddressForm

The main component that wraps the address form functionality.

#### Props

| Property                        | Type                            | Required | Default | Description                                                                |
| ------------------------------- | ------------------------------- | -------- | ------- | -------------------------------------------------------------------------- |
| `apiKey`                        | `string`                        | Yes      | -       | The Amazon Location Service API key used to authenticate requests          |
| `region`                        | `string`                        | Yes      | -       | The AWS region where Amazon Location Service is called (e.g., "us-east-1") |
| `preventDefaultOnSubmit`        | `boolean`                       | No       | `false` | Prevents the default form submission behavior when set to true             |
| `language`                      | `string`                        | No       | -       | Language code for localized address suggestions (e.g., "en", "es")         |
| `politicalView`                 | `string`                        | No       | -       | Political view for address results, affecting disputed territories display |
| `showCurrentCountryResultsOnly` | `boolean`                       | No       | `false` | Limits autocomplete results to the currently selected country only         |
| `allowedCountries`              | `string[]`                      | No       | -       | Array of ISO country codes to restrict address suggestions                 |
| `placeTypes`                    | `AutocompleteFilterPlaceType[]` | No       | -       | Array of place types to filter results (e.g., "Locality", "PostalCode")    |
| `onSubmit`                      | `(data) => void`                | No       | -       | Callback function triggered on form submission                             |

### Form Input Fields

All input fields use the `data-type="address-form"` attribute along with a `name=` attribute. The following common properties are supported:

#### Common Input Properties

| Property      | Type     | Required | Description                        |
| ------------- | -------- | -------- | ---------------------------------- |
| `label`       | `string` | No       | Custom label for the input field   |
| `placeholder` | `string` | No       | Placeholder text for the input     |
| `className`   | `string` | No       | CSS class names for custom styling |

#### Address Line One (`name="addressLineOne"`)

Primary address input with autocomplete functionality.

| Property                     | Type     | Default         | Description                           |
| ---------------------------- | -------- | --------------- | ------------------------------------- |
| `label`                      | `string` | "Address"       | Label for the field                   |
| `placeholder`                | `string` | "Enter address" | Placeholder text                      |
| `data-api-name`              | `string` | "autocomplete"  | API type: "autocomplete" or "suggest" |
| `data-show-current-location` | `string` | "true"          | Enable current location functionality |

#### Other Input Fields

- **Address Line Two** (`name="addressLineTwo"`): Default label "Address Line 2", placeholder "Apartment, suite, etc."
- **City** (`name="city"`): Default label "City"
- **Province/State** (`name="province"`): Default label "Province/State"
- **Postal Code** (`name="postalCode"`): Default label "Postal/Zip code"
- **Country** (`name="country"`): Default label "Country"

### Form Buttons

#### Submit Button

```html
<button address-form="submit">Submit</button>
```

#### Reset Button

```html
<button address-form="reset">Reset</button>
```

### AddressFormMap

Map component for displaying and adjusting address location.

#### Props

| Property                | Type      | Required | Default | Description                            |
| ----------------------- | --------- | -------- | ------- | -------------------------------------- |
| `mapStyle`              | `array`   | Yes      | -       | Map style configuration                |
| `showNavigationControl` | `boolean` | No       | `true`  | Display map navigation controls        |
| `adjustablePosition`    | `boolean` | No       | `true`  | Allow users to adjust address position |

#### Map Style Options

- `['Standard', 'Light']`
- `['Standard', 'Dark']`
- `['Monochrome', 'Light']`
- `['Monochrome', 'Dark']`
- `['Hybrid']`
- `['Satellite']`

## Contributing

We welcome community contributions and pull requests. See [CONTRIBUTING](CONTRIBUTING.md) for information on how to set up a development environment, and submit code.

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This project is licensed under the Apache-2.0 License.
