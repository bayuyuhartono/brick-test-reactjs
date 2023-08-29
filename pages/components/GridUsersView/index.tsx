import React, { memo, useState } from 'react';
import styles from './Grid.module.css';
import { UserTypes } from '@/types/usersTypes';

const GridUserView = memo((props: UserTypes) => {
  const { items } = props;

  return (
    <div>
      <div className={styles.gridContainer}>
        {items?.map((item) => (
          <a key={item.id} className={styles.gridItem} target='_blank' href={item.url}>{item.login}</a>
        ))}
      </div>
    </div>
  );
})

GridUserView.displayName = 'GridUserView';

export default GridUserView;
