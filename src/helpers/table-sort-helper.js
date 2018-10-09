function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function statusDesc(a, b, competenceNumber) {
  const statuses = ["Symbol(OK)", "Symbol(WARNING)", "Symbol(ERROR)"];
  let indexA = 2;
  let indexB = 2;
  if (a.competence[competenceNumber]) {
    indexA = statuses.indexOf(a.competence[competenceNumber].status.toString());
  }
  if (b.competence[competenceNumber]) {
    indexB = statuses.indexOf(b.competence[competenceNumber].status.toString());
  }
  if (indexB < indexA) {
    return -1;
  }
  if (indexB > indexA) {
    return 1;
  }
  return 0;
}

export function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

export function getSorting(order, orderBy) {
  const descFunction = typeof orderBy === "number" ? statusDesc : desc;
  return order === "desc"
    ? (a, b) => descFunction(a, b, orderBy)
    : (a, b) => -descFunction(a, b, orderBy);
}
