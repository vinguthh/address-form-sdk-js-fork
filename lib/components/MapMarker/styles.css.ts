import { style } from "@vanilla-extract/css";

export const buttons = style({
  position: "absolute",
  top: 0,
  left: 0,
  margin: "10px 0px 0px 10px", // Matches MapLibre CSS for control/navigation buttons
  display: "flex",
  gap: "0.5rem",
});
