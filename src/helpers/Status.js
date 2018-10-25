const Status = {
  OK: Symbol("OK"),
  WARNING: Symbol("WARNING"),
  ERROR: Symbol("ERROR"),
};

export default Status;

const severity = {
  [Symbol.OK]: 0,
  [Symbol.WARNING]: 1,
  [Symbol.ERROR]: 2,
};

export function mostSevere(a, b) {
  return severity.get(a) > severity.get(b) ? a : b;
}
