import React from 'react';
import styles from './App.module.css';
import Logo from './Images/Logo.svg';
import SubmitContainer from './components/SubmitContainer';

const App = () => {
  return (
    <div className='App'>
      <div className={styles.heroImage}>
        <div className={styles.header}>
          <div className={styles.leftAlign}>
            <div className={styles.headerItem}>
              <img src={Logo} className={styles.logo} alt='logo' />
            </div>
            <div className={styles.headerItem}>TEA HOUSE</div>
          </div>
        </div>
      </div>

      <div className={styles.heroCardContainer}>
        <div className={styles.heroCard}>
          <div>
            Want to learn more about the every day life of the <br />T people?
          </div>
          <div>
            <SubmitContainer
              placeholder={'Enter email to learn more about the T people'}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>

      <div className={styles.textAlignCenter}>
        <div>Or go directly to our lessons to learn more:</div>
        <div className={styles.circlesContainer}>
          <div className={styles.circles}>
            <div className={styles.circle}>Introducing the T People</div>
            <div className={styles.circle}>Tea with the T People</div>
            <div className={styles.circle}>T Prayer Warriors</div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default App;
