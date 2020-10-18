import React from 'react';
import Logo from './Images/Logo.svg';
import SubmitContainer from './components/SubmitContainer';
import { EmailTopics, IntroCards, TeaCards, PrayerCards } from './util';
import styles from './App.module.css';

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
            {EmailTopics.map((circle, i) => (
              <div
                key={`circle-${1}`}
                className={styles.circle}
                style={{ backgroundImage: `url(${circle.image})` }}
              >
                <div>{circle.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.introContainer}>
        <div className={styles.title}>Introducing the T People</div>
        <div>
          What is a UPG? Who are the T people? Sign up for our 6 day
          introductory email course to learn more.
        </div>

        <div>
          <SubmitContainer
            placeholder={'Enter email to get our 6 day email course'}
            onClick={() => {}}
          />
        </div>

        <div className={styles.introCardContainer}>
          {IntroCards.map((circle, i) => (
            <div key={`intro-${i}`} className={styles.introCard}>
              <div
                style={{
                  width: '120px',
                  height: '120px',
                  backgroundImage: `url(${circle.image})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '8px'
                }}
              />
              <div className={styles.introCardText}>
                <div>{circle.title}</div>
                <div>{circle.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.teaContainer}>
        <div className={styles.title}>Tea with the T People</div>
        <div>
          Want to hear more stories about the T people? Sign up below for weekly
          T stories right in your inbox!
        </div>

        <div>
          <SubmitContainer
            placeholder={'Enter email to get our 6 day email course'}
            onClick={() => {}}
          />
        </div>

        <div className={styles.teaCardContainer}>
          {TeaCards.map((circle, i) => (
            <div key={`tea-${i}`} className={styles.teaCard}>
              <div
                style={{
                  width: '324px',
                  height: '162px',
                  backgroundImage: `url(${circle.image})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '8px'
                }}
              />
              <div className={styles.teaCardText}>
                <div>{circle.title}</div>
                <div className={styles.teaCardSubtitle}>{circle.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.prayerContainer}>
        <div className={styles.title}>T Prayer Warriors</div>
        <div>
          Pray for the workers of the harvest! Sign up for updates from
          individuals on the field.
        </div>

        <div className={styles.prayerCardContainer}>
          {PrayerCards.map((circle, i) => (
            <div key={`prayer-${i}`} className={styles.prayerCard}>
              <div
                style={{
                  width: '324px',
                  height: '162px',
                  backgroundImage: `url(${circle.image})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '8px'
                }}
              />

              <div className={styles.prayerCardText}>
                <div>{circle.title}</div>
                <div className={styles.prayerCardSubtitle}>
                  {circle.subtitle}
                </div>
              </div>

              <div>
                <SubmitContainer
                  width={'324px'}
                  placeholder={'Enter email for updates'}
                  onClick={() => {}}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.footer}>
        <div>CONTACT US</div>
        <div className={styles.divider}> | </div>
        <div>PRIVACY POLICY</div>
        <div className={styles.divider}> | </div>
        <div>COPYRIGHT © 2020 ALL RIGHTS RESERVED</div>
      </div>
    </div>
  );
};

export default App;
