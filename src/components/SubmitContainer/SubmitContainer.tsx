import React, { useState } from 'react';
import SubmitButton from '../SubmitButton';
import styles from './SubmitContainer.module.css';

type Props = {
  placeholder: string;
  onClick: () => void;
};

const SubmitContainer: React.FC<Props> = ({ placeholder, onClick }) => {
  const [email, setEmail] = useState('');

  return (
    <div className={styles.root}>
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
