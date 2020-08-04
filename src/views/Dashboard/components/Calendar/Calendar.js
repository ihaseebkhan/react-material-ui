import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent, Divider } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
  chartContainer: {
    height: 400,
    position: 'relative'
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const Calendar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader title="Calendar" />
      <Divider />
      <CardContent>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=ihaseeb1995%40gmail.com&ctz=Asia%2FKarachi"
          title="calendar"
          width="100%"
          height="600"
          frameborder="0"
          scrolling="no"
        />
      </CardContent>
    </Card>
  );
};

Calendar.propTypes = {
  className: PropTypes.string
};

export default Calendar;
