import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    segment_uri: string;
    description: ReactNode;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Getting Started',
        Svg: require('./assets/icon-document.svg').default,
        segment_uri: '/docs/intro',
        description: (
            <>
                Explore the documentation to learn how to use JSON-formatted schemas served by URL to achieve
                interoperability in the WA State cannabis industry.
            </>
        ),
    },
    {
        title: 'API Coming Soon...',
        Svg: require('./assets/icon-api.svg').default,
        segment_uri: '/meetings/2025-08-25-ccrs-discussion-summary',
        description: (
            <>
                WCIA is currently analyzing the CCRS traceability system for improvements in efficiency and reliability.
            </>
        ),
    },
    {
        title: 'Review the Minutes',
        Svg: require('./assets/icon-blog.svg').default,
        segment_uri: '/meetings',
        description: (
            <>
                Read the meeting summaries to learn details about the creation and modification of the JSON schemas.
                Summaries go back to the start of WCIA in 2021.
            </>
        ),
    },
];

function Feature({title, Svg, segment_uri, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <a href={segment_uri}>
                    <Svg className={clsx(styles.featureSvg)}/>
                </a>
            </div>
            <div className="text--center padding-horiz--md">
                {/*<Heading as="h3">{title}</Heading>*/}
                <div className={styles.buttons}>
                    <Link
                        className="button button--primary button--lg"
                        to={segment_uri}>
                        {title}
                    </Link>
                </div>
                <br/>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): ReactNode {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
