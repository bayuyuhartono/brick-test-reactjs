import React, { memo } from 'react';
import styles from './Grid.module.css';
import { gridType } from '@/types/gridTypes';

const GridView = memo((props: gridType) => {
  const { items } = props;

  return (
    <div>
      <div className={styles.gridContainer}>
        {items?.map((item) => (
          <a key={item.id} className={styles.gridItem} target='_blank' href={item.svn_url}>{item.name}</a>
        ))}
      </div>
    </div>
  );
})

GridView.displayName = 'GridView';

export default GridView;
