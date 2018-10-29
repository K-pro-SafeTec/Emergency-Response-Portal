const Status = {
  OK: Symbol("OK"),
  WARNING: Symbol("WARNING"),
  ERROR: Symbol("ERROR"),
};

export default Status;

const severity = {
  [Status.OK]: 0,
  [Status.WARNING]: 1,
  [Status.ERROR]: 2,
};

export function mostSevere(a, b) {
  return severity[a] > severity[b] ? a : b;
}



