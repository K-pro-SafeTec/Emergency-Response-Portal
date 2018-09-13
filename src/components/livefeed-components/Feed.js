import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DragHandle from '@material-ui/icons/DragHandle';
import Delete from '@material-ui/icons/Delete';
import Add from '@material-ui/icons/Add';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';


let uid = 100;
const words = ['En', 'To', 'Tre', 'Fire', 'Fem', 'Seks', 'Sju', 'Åtte', 'Ni', 'Ti', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'];

function createRandomItem() {
  const itemWords = [];
  for (let i = 0; i < 3; i++) {
    itemWords.push(words[Math.floor(Math.random() * words.length)]);
  }
  return {
    id: uid++,
    message: itemWords.join(' '),
  };
}


const SortableDragHandle = SortableHandle(({ value }) => (
  <ListItemIcon>
    <DragHandle />
  </ListItemIcon>
));

const SortableListItem = SortableElement(({ value, deleteItem }) => (
  <ListItem button>
    <SortableDragHandle />
    <ListItemText>
      {value.message}
    </ListItemText>
    <ListItemSecondaryAction>
      <IconButton onClick={() => deleteItem(value.id)}>
        <Delete />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
));

const SortableList = SortableContainer(({ items, deleteItem, addItem }) => (
  <List>
    {items.map((value, index) => (
      <SortableListItem key={value.id} index={index} value={value} deleteItem={deleteItem} />
    ))}
    <ListItem
      button
      disabled={!addItem}
      onClick={() => addItem && addItem(createRandomItem())}
    >
      <ListItemIcon>
        <Add />
      </ListItemIcon>
      <ListItemText
        secondary={addItem ? "Legg til..." : "Slett andre varslinger for å legge til nye"}
      />
    </ListItem>
  </List>
));

export default ({ items, onSortEnd, deleteItem, addItem }) => (
  <SortableList
    items={items}
    onSortEnd={onSortEnd}
    lockAxis="y"
    distance={5}
    deleteItem={deleteItem}
    addItem={addItem}
  />
);
