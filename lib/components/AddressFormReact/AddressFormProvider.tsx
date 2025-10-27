import { AutocompleteFilterPlaceType } from "@aws-sdk/client-geo-places";
import { FunctionComponent, PropsWithChildren, useMemo, useState } from "react";
import { AddressFormData } from "../AddressForm";
import { AddressFormContext, AddressFormContextType, MapViewState } from "./AddressFormContext";

export interface AddressFormProps extends PropsWithChildren {
  apiKey: string;
  region: string;
  language?: string;
  politicalView?: string;
  showCurrentCountryResultsOnly?: boolean;
  allowedCountries?: string[];
  placeTypes?: AutocompleteFilterPlaceType[];
}

export const AddressFormProvider: FunctionComponent<AddressFormProps> = ({
  apiKey,
  region,
  children,
  language,
  politicalView,
  showCurrentCountryResultsOnly,
  allowedCountries,
  placeTypes,
}) => {
  const [data, setData] = useState<AddressFormData>({});
  const [mapViewState, setMapViewState] = useState<MapViewState>();

  const context = useMemo<AddressFormContextType>(
    () => ({
      apiKey,
      region,
      data,
      setData: (data: AddressFormData) => setData((state) => ({ ...state, ...data })),
      mapViewState,
      setMapViewState,
      language,
      politicalView,
      showCurrentCountryResultsOnly,
      allowedCountries,
      placeTypes,
    }),
    [
      allowedCountries,
      apiKey,
      data,
      language,
      mapViewState,
      placeTypes,
      politicalView,
      region,
      showCurrentCountryResultsOnly,
    ],
  );

  return <AddressFormContext.Provider value={context}>{children}</AddressFormContext.Provider>;
};
