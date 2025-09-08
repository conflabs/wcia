import type {ReactNode} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
            <ThemedImage className={styles.heroLogo} sources={{
                light: useBaseUrl('/img/wcia-logo-white.svg'),
                dark: useBaseUrl('/img/wcia-logo-black.svg'),
            }} />
        </Heading>
        <p className="hero__title">{siteConfig.tagline}</p>
        <p className="hero__subtitle">
            The collaborative effort of professional software providers, licensees, and tertiary stakeholders in the
            Washington State cannabis industry to achieve and maintain interoperability.
        </p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Washington Cannabis Integrators Alliance">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
