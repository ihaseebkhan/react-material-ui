import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import OpacityIcon from '@material-ui/icons/Opacity';
import TodayIcon from '@material-ui/icons/Today';
import ArchiveIcon from '@material-ui/icons/Archive';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import LockOpenIcon from '@material-ui/icons/LockOpen';

import { Profile, SidebarNav } from './components';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: <DashboardIcon />
    },
    {
      title: 'Water',
      href: '/users',
      icon: <OpacityIcon />
    },
    {
      title: 'Calendar',
      href: '/products',
      icon: <TodayIcon />
    },
    {
      title: 'Authentication',
      href: '/sign-in',
      icon: <LockOpenIcon />
    },
    {
      title: 'Archive',
      href: '/typography',
      icon: <ArchiveIcon />
    },
    {
      title: 'Add',
      href: '/icons',
      icon: <AddBoxIcon />
    },
    {
      title: 'Account',
      href: '/account',
      icon: <AccountBoxIcon />
    },
    {
      title: 'Settings',
      href: '/settings',
      icon: <SettingsIcon />
    }
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}>
      <div {...rest} className={clsx(classes.root, className)}>
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav className={classes.nav} pages={pages} />
        <img
          alt="logo"
          src="data:image/png;base64,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"
        />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
