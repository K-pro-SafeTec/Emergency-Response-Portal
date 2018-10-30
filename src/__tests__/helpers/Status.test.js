import Status, {mostSevere} from "../../helpers/Status";

it('mostSevere works as expected', () => {
  const ok = Status.OK;
  const warning = Status.WARNING;
  const error = Status.ERROR;
  expect(mostSevere(ok, warning)).toBe(warning);
  expect(mostSevere(warning, ok)).toBe(warning);
  expect(mostSevere(warning, error)).toBe(error);
  expect(mostSevere(error, warning)).toBe(error);
  expect(mostSevere(error, ok)).toBe(error);
  expect(mostSevere(ok, error)).toBe(error);
});
