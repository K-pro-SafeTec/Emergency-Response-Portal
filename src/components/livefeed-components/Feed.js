import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DragHandle from '@material-ui/icons/DragHandle';
import Delete from '@material-ui/icons/Delete';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';

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

const SortableList = SortableContainer(({ items, deleteItem }) => (
  <List>
    {items.map((value, index) => (
      <SortableListItem key={value.id} index={index} value={value} deleteItem={deleteItem} />
    ))}
  </List>
));

export default ({ items, onSortEnd, deleteItem }) => (
  <SortableList
    items={items}
    onSortEnd={onSortEnd}
    lockAxis="y"
    distance={5}
    deleteItem={deleteItem}
  />
);
