import React from 'react';
import styles from './PortButton.module.scss';

const PortButton = ({children, ...props}) => {
  return (
    <button {...props} className={styles.portButton}>
      {children}
    </button>
  );
}

export default PortButton;
