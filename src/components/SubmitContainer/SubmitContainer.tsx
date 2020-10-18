import React, { useState } from 'react';
import SubmitButton from '../SubmitButton';
import styles from './SubmitContainer.module.css';

type Props = {
  placeholder: string;
  onClick: () => void;
  width?: string;
};

const SubmitContainer: React.FC<Props> = ({
  width = '567px',
  placeholder,
  onClick
}) => {
  const [email, setEmail] = useState('');

  return (
    <div style={{ width: width }} className={styles.root}>
      <input
        className={styles.input}
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder={placeholder}
      />

      <SubmitButton onClick={onClick} />
    </div>
  );
};

export default SubmitContainer;
