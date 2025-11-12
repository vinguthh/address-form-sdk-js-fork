import { style } from "@vanilla-extract/css";

// Matches MapLibre CSS styling for control buttons
export const root = style({
  boxShadow: "0 0 0 2px rgba(0, 0, 0, .1)",
  borderRadius: 4,
  padding: "6px",
  fontWeight: "bold",
  color: "#000",
  backgroundColor: "#fff",

  ":hover": {
    backgroundColor: "#f2f2f2",
  },
});
