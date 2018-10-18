import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DragHandle from '@material-ui/icons/DragHandle';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Delete from '@material-ui/icons/Delete';
import Add from '@material-ui/icons/Add';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';


let uid = 100;


const SortableDragHandle = SortableHandle(() => (
  <ListItemIcon>
    <DragHandle />
  </ListItemIcon>
));

const SortableListItem = SortableElement(({ value, deleteItem }) => (
  <ListItem>
    <SortableDragHandle />
    <ListItemText>
      <Typography variant="body1">
        {value.message}
      </Typography>
    </ListItemText>
    <ListItemSecondaryAction>
      <IconButton onClick={() => deleteItem(value.id)}>
        <Delete />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
));

const SortableList = SortableContainer(({ items, deleteItem, addItem, maxItems, inputText, setInputText, ...rest }) => (
  <List {...rest}>
    {items.map((value, index) => (
      <SortableListItem key={value.id} index={index} value={value} deleteItem={deleteItem} />
    ))}
    {items.length < maxItems ? (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (inputText.trim().length > 0) {
            addItem({
              id: uid++,
              message: inputText.trim(),
            });
            setInputText('');
          }
        }}
      >
        <ListItem>
          <ListItemText>
            <TextField
              placeholder={"Legg til punkt..."}
              fullWidth
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              type="submit"
              disabled={inputText.trim().length === 0}
            >
              <Add />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </form>
    ) : (
      <ListItem>
        <ListItemText>
          <Typography variant="caption">
            Det er ikke plass til flere varslinger. Slett varslinger for å legge til nye.
          </Typography>
        </ListItemText>
      </ListItem>
    )}
  </List>
));

export default ({ items, onSortEnd, deleteItem, addItem, ...rest }) => (
  <SortableList
    items={items}
    onSortEnd={onSortEnd}
    lockAxis="y"
    distance={5}
    deleteItem={deleteItem}
    addItem={addItem}
    {...rest}
  />
);
