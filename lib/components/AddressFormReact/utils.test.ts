import { describe, expect, it } from "vitest";
import { getBoolean, getString, parsePosition } from "./utils";

describe("getBoolean", () => {
  it('returns true when property exists and is not "false"', () => {
    expect(getBoolean({ test: "true" }, "test")).toBe(true);
    expect(getBoolean({ test: true }, "test")).toBe(true);
    expect(getBoolean({ test: "any-value" }, "test")).toBe(true);
  });

  it('returns false when property exists and is "false"', () => {
    expect(getBoolean({ test: "false" }, "test")).toBe(false);
  });

  it("returns undefined when property does not exist", () => {
    expect(getBoolean({}, "test")).toBeUndefined();
    expect(getBoolean({ other: "value" }, "test")).toBeUndefined();
  });
});

describe("getString", () => {
  it("returns string value when property exists", () => {
    expect(getString({ test: "value" }, "test")).toBe("value");
    expect(getString({ test: 123 }, "test")).toBe("123");
    expect(getString({ test: true }, "test")).toBe("true");
  });

  it("returns undefined when property does not exist", () => {
    expect(getString({}, "test")).toBeUndefined();
    expect(getString({ other: "value" }, "test")).toBeUndefined();
  });
});

describe("parsePosition", () => {
  it("returns tuple of numbers when valid position string", () => {
    expect(parsePosition("10.5,20.3")).toEqual([10.5, 20.3]);
    expect(parsePosition("0,0")).toEqual([0, 0]);
    expect(parsePosition("-123.456,45.789")).toEqual([-123.456, 45.789]);
  });

  it("returns undefined when invalid position string", () => {
    expect(parsePosition("")).toBeUndefined();
    expect(parsePosition("10")).toBeUndefined();
    expect(parsePosition("10,20,30")).toBeUndefined();
    expect(parsePosition("abc,def")).toBeUndefined();
    expect(parsePosition("10,abc")).toBeUndefined();
  });
});
