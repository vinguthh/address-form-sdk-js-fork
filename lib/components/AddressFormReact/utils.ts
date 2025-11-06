export const getBoolean = (props: Record<string, unknown>, name: string) => {
  if (name in props) {
    return props[name] !== "false";
  }
};

export const getString = (props: Record<string, unknown>, name: string) => {
  if (name in props) {
    return String(props[name]);
  }
};

export const parsePosition = (position: string): [number, number] | undefined => {
  const values = position.split(",").map(Number);

  if (values.length === 2 && values.every((value) => !isNaN(value))) {
    return values as [number, number];
  }
};
