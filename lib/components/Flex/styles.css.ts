import { style } from "@vanilla-extract/css";

export const root = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

export const flex = style({
  flex: 1,
});

export const row = style({
  display: "flex",
  flexDirection: "row",
});
