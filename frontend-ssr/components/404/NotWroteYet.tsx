import React from 'react';
import SEOTags from '../SEOTags';
import Header from '../Header';
import Footer from '../Footer';
import { GITHUB_URL } from '~/services/Constants';

import styles from './404.module.scss';
import PageContainer from '../PageContainer';

interface Props {
  lesson: {
    title: string;
    href: string;
  }
}

export default function NotWroteYet({ lesson }: Props) {
  return (
    <>
      <SEOTags
        title="Article not wrote, yet!"
        description="Din pacate acest articol nu a fost inca scris. Dar, proiectul fiind open-source, te invitam pe tine sa-l scrii :)"
        url="https://FrontEnd.ro/article-not-wrote-yet"
      />
      <>
        <Header />
        <main className={`${styles.page} ${styles['not-wrote-yet']}`}>
          <div className="hero d-flex align-items-center">
            <h1>
              Hey! Ai ajuns în locul potrivit, dar puțin cam devreme...
            </h1>
            <img width="400" src="/images/letters_ilustration.png" alt="Big Font Letters and human near them" />
          </div>
          <p>
            Plănuim să scriem acest articol despre
            {' '}
            <strong>{lesson.title}</strong>
            {' '}
            dar deocamdată lucrăm la alte lucruri și va mai dura puțin...
          </p>
          <p>
            Până atunci însă,
            {' '}
            <strong>nu ai vrea să ne ajuți</strong>
            ?
            Chiar ne dorim ca acest proiect să fie un efort de comunitate,
            pentru comunitate!
          </p>
          <div className="text-center">
            <a
              className="btn btn--blue"
              href={`${GITHUB_URL}/blob/master/CONTRIBUTING.md`}
            >
              Hai pe GitHub și contribuie cu o lecție
            </a>
          </div>
        </main>
        <Footer />
      </>
    </>
  );
}
