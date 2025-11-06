import { FunctionComponent } from "react";
import { Map, MapProps } from "../Map";
import { MapMarker, MapMarkerProps } from "../MapMarker";
import { useAddressFormContext } from "./AddressFormContext";
import { parsePosition } from "./utils";

export type AddressFormMapProps = MapProps & Pick<MapMarkerProps, "adjustablePosition">;

export const AddressFormMap: FunctionComponent<AddressFormMapProps> = ({
  adjustablePosition,
  children,
  ...mapProps
}) => {
  const context = useAddressFormContext();

  const handleSaveMarkerPosition = (markerPosition: [number, number]) => {
    context.setData({ adjustedPosition: markerPosition.join(",") });
  };

  return (
    <Map {...mapProps}>
      <MapMarker
        adjustablePosition={adjustablePosition}
        markerPosition={parsePosition(context.data.adjustedPosition ?? context.data.originalPosition ?? "")}
        onSaveMarkerPosition={handleSaveMarkerPosition}
      />
      {children}
    </Map>
  );
};
