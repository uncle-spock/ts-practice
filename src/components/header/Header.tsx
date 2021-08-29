import React from 'react';
import { Button, Grid } from '@material-ui/core';

import styles from './header.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs="auto">
          LOGO
        </Grid>
        <Grid item xs>
          <Grid container spacing={2} justifyContent="flex-end">
            <Grid item xs="auto">
              <Button className={styles.navItem}>TO-DO list</Button>
            </Grid>
            <Grid item xs="auto">
              <Button className={styles.navItem}>Info</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
