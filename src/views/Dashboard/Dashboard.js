import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
  LocalTime,
  LocalTemp,
  ActiveSensors,
  AvgHumid,
  UvIndex,
  Rain,
  SoilTemp,
  WaterLevel,
  Calendar,
  Wind,
  SoilL1,
  SoilL2,
  SoilL3
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <LocalTime />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <LocalTemp />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <ActiveSensors />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <AvgHumid />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <UvIndex />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <Rain />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <SoilTemp />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <WaterLevel />
        </Grid>
        <Grid item lg={8} md={12} xl={9} xs={12}>
          <Calendar />
        </Grid>
        <Grid item lg={4} md={6} xl={3} xs={12}>
          <Wind />
        </Grid>
        <Grid item lg={4} md={6} xl={3} xs={12}>
          <SoilL1 />
        </Grid>
        <Grid item lg={4} md={6} xl={3} xs={12}>
          <SoilL2 />
        </Grid>
        <Grid item lg={4} md={6} xl={3} xs={12}>
          <SoilL3 />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
