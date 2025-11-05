import { FunctionComponent } from "react";
import { Map, MapProps } from "../Map";
import { MapMarker, MapMarkerProps } from "../MapMarker";
import { useAddressFormContext } from "./AddressFormContext";

export type AddressFormMapProps = MapProps & Pick<MapMarkerProps, "adjustablePosition">;

export const AddressFormMap: FunctionComponent<AddressFormMapProps> = ({
  adjustablePosition,
  children,
  ...mapProps
}) => {
  const { data, setData, mapViewState, setMapViewState } = useAddressFormContext();

  const handleSaveMarkerPosition = (markerPosition: [number, number]) => {
    setData({ adjustedPosition: markerPosition.join(",") });
  };

  return (
    <Map {...mapViewState} onMove={({ viewState }) => setMapViewState(viewState)} {...mapProps}>
      <MapMarker
        adjustablePosition={adjustablePosition}
        markerPosition={parsePosition(data.adjustedPosition ?? data.originalPosition ?? "")}
        onSaveMarkerPosition={handleSaveMarkerPosition}
      />
      {children}
    </Map>
  );
};

const parsePosition = (position: string): [number, number] => {
  const [lng = 0, lat = 0] = position.split(",").map(Number);
  return [lng, lat];
};
