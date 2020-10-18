import React, { useState } from 'react';
import SubmitButton from '../SubmitButton';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import styles from './SubmitContainer.module.css';

type Props = {
  placeholder: string;
  width?: string;
};

const SubmitContainer: React.FC<Props> = ({ width = '567px', placeholder }) => {
  const [email, setEmail] = useState('');
  const url = process.env.REACT_APP_MAILCHIMP_URL || '';

  const submit = (subscribe: any) => {
    if (email && email.indexOf('@') > -1) {
      subscribe({
        EMAIL: email
      });
    }
  };

  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <div className={styles.root}>
          <div style={{ width: width }} className={styles.inputContainer}>
            <input
              className={styles.input}
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder={placeholder}
            />

            <SubmitButton onClick={() => submit(subscribe)} />
          </div>

          <div>
            {/* {status === 'sending' && (
              <div style={{ color: 'blue', fontSize: '12px' }}>sending...</div>
            )} */}
            {status === 'error' && (
              <div
                style={{ color: 'red', fontSize: '12px' }}
                dangerouslySetInnerHTML={{ __html: String(message) }}
              />
            )}
            {status === 'success' && (
              <div
                style={{ color: 'green', fontSize: '12px' }}
                dangerouslySetInnerHTML={{ __html: String(message) }}
              />
            )}
          </div>
        </div>
      )}
    />
  );
};

export default SubmitContainer;
