import {roleById} from "../dummy-data/role";
import {personById} from "../dummy-data/person";

export function descByValue(a, b, orderBy) {
  return simpleDesc(a[orderBy], b[orderBy])
}

export function competenceStatusDesc(a, b, competenceNumber) {
  if (competenceNumber === "name") {
    return descByValue(a, b, "name")
  }
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
  return simpleDesc(indexA, indexB)
}

export function deputiesDesc(a, b, orderBy) {
  if (orderBy === "beredskapsrolle") {
    a = a.name;
    b = b.name;
  }
  if (orderBy === "stedsfortrederrolle") {
    a = roleById[a.replacementRole].name;
    b = roleById[b.replacementRole].name;
  }
  if (orderBy === "stedfortredere") {
    a = personById[roleById[a.replacementRole].person].name;
    b = personById[roleById[b.replacementRole].person].name;
  }
  return simpleDesc(a, b)
}

export function documentsDesc(a, b, orderBy) {
  if (orderBy === "rev") {
    a = parseInt(a.rev);
    b = parseInt(b.rev);
    return simpleDesc(a, b)
  }
  return descByValue(a, b, orderBy)
}

function simpleDesc(a, b) {
  if (b < a) {
    return -1;
  }
  if (b > a) {
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

export function getSorting(order, orderBy, descFunction) {
  return order === "desc"
    ? (a, b) => descFunction(a, b, orderBy)
    : (a, b) => -descFunction(a, b, orderBy);
}
