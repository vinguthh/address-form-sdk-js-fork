export { AddressForm } from "./components/AddressFormReact";
export { CountrySelect } from "./components/CountrySelect";
export type { CountrySelectProps } from "./components/CountrySelect";
export { AmazonLocationProvider } from "./components/AmazonLocationProvider";
export { Button } from "./components/Button";
export { FormField } from "./components/FormField";
export { Input } from "./components/Input";
export { LocateButton } from "./components/LocateButton";
export { Map } from "./components/Map";
export { getMapStyleType, getColorScheme } from "./components/Map/utils";
export type { ColorScheme } from "./components/Map";
export { MapMarker } from "./components/MapMarker";
export { Typeahead } from "./components/Typeahead";
export { getIncludeCountriesFilter } from "./utils/country-filter";
export { countries } from "./data/countries";
import "maplibre-gl/dist/maplibre-gl.css";

// Legacy exports - deprecated, use components from AddressFormReact instead
export { AddressForm as __AddressForm, AddressFormMap as __AddressFormMap } from "./components/AddressForm";
export {
  defaultAddressFormFields as __defaultAddressFormFields,
  FormFieldID as __FormFieldID,
} from "./components/AddressForm/form-field";
export type {
  AddressFormProps as __AddressFormProps,
  AddressFormMapProps as __AddressFormMapProps,
  AddressFormField as __AddressFormField,
  AddressFormData as __AddressFormData,
} from "./components/AddressForm";
