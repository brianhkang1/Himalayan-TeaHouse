import React from 'react';
import styles from './SubmitButton.module.css';

type Props = {
  onClick: () => void;
};

const SubmitButton: React.FC<Props> = ({ onClick }) => {
  return (
    <div onClick={onClick} className={styles.root}>
      Submit
    </div>
  );
};

export default SubmitButton;
