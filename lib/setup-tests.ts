import "@testing-library/jest-dom";
import { mockResizeObserver, mockAnimationsApi } from "jsdom-testing-mocks";

// Mock ResizeObserver globally before any components load
// Required for HTML form tests - render function uses @headlessui/react components
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

mockResizeObserver();
mockAnimationsApi();
