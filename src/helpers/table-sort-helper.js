function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function competenceStatusDesc(a, b, competenceNumber) {
  let indexA = 0;
  let indexB = 0;
  if (a.competence[competenceNumber]) {
    if (a.competence[competenceNumber].validUntil !== null) {
      indexA = a.competence[competenceNumber].validUntil;
    }
    else {
      indexA = Infinity
    }
  }
  if (b.competence[competenceNumber]) {
    if (b.competence[competenceNumber].validUntil !== null) {
      indexB = b.competence[competenceNumber].validUntil;
    }
    else {
      indexB = Infinity
    }
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
  const descFunction = typeof orderBy === "number" ? competenceStatusDesc : desc;
  return order === "desc"
    ? (a, b) => descFunction(a, b, orderBy)
    : (a, b) => -descFunction(a, b, orderBy);
}
