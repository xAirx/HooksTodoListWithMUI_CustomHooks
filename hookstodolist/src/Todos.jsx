import React, { useState, useEffect } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

export default function Todo({ task, completed }) {
  return (
    <ListItem>
      <Checkbox checked={completed} />
      <ListItemText>
        {task}
        {completed}
      </ListItemText>
    </ListItem>
  );
}
