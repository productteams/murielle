import React, { useRef } from 'react';
import * as styles from './about.module.css';

import Layout from '../components/Layout/Layout';
import ThemeLink from '../components/ThemeLink';
import Container from '../components/Container';
import Button from '../components/Button';

const HowToUsePage = (props) => {
  let builtRef = useRef();
  let toolsRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout>
      <div className={styles.root}>
        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(builtRef)} to={'#builtby'}>
            Who built this theme
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(toolsRef)} to={'#tools'}>
            Compatible technologies
          </ThemeLink>
        </div>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.content} style={{ paddingTop: '80px' }}>
            <h3>Built By Matter.</h3>
            <div id="#builtBy" ref={builtRef}>
              <p>
                This theme is proudly brought to you by the team at{' '}
                <Button target={true} href="https://matterdesign.com.au/">
                  Matter Design & Digital
                </Button>{' '}
                (Matter.).
              </p>
              <p>
                The LithiumYacht is built for Netlify as an ecommerce theme
                suitable for JAMStack archtitecture.
              </p>
              <p>
                Matter.
              </p>
              <Button target={true} href="https://jamm.matter.design/">
                Read more about JAMM.™
              </Button>
              <img
                alt={'JAMM Detail'}
                src={'/how-to-use/jamm-sydney-1upd@2x.png'}
                style={{ display: 'block', height: 'auto' }}
              />
            </div>
            <h3>Best of Breed Tools</h3>
            <div id={'#tools'} ref={toolsRef}>
              <p>
                Headless 
              </p>
              <p>
                Why 
              </p>
              <p>
                Matter.
              </p>

              <strong>Ecommerce:</strong>
              <ul>
                <li>BigCommerce</li>
                <li>VTEX (roadmap)</li>
                <li>Commercetools (roadmap)</li>
              </ul>

              <strong>Content Management Systems (CMS):</strong>
              <ul>
                <li>Contentful</li>
                <li>WordPress</li>
                <li>Sanity</li>
                <li>Builder.io</li>
              </ul>

              <strong>Advanced Search:</strong>
              <ul>
                <li>Algolia</li>
                <li>Searchspring (roadmap)</li>
                <li>XO (roadmap)</li>
                <li>Syte (roadmap)</li>
              </ul>

              <strong>Product Information Management (PIM):</strong>
              <ul>
                <li>Akeneo</li>
              </ul>

              <strong>Marketing Automation:</strong>
              <ul>
                <li>Klaviyo</li>
                <li>Ortto</li>
                <li>Dot Digital</li>
                <li>Omnisend</li>
              </ul>

              <strong>Customer Support:</strong>
              <ul>
                <li>Gorgias</li>
                <li>Zendesk</li>
              </ul>

              <strong>Reviews and User Generated Content:</strong>
              <ul>
                <li>Yotpo</li>
                <li>Trustpilot</li>
                <li>Reviews.io</li>
              </ul>

              <strong>Physical Locations:</strong>
              <ul>
                <li>Localisr.io</li>
              </ul>

              <p>
                Ou
              </p>

              <p>
                <Button
                  target={true}
                  href="https://www.matterdesign.com.au/contact/"
                >
                  Contact the team at Matter.
                </Button>
              </p>
            </div>
          </div>
        </Container>
        <div className={styles.imageContainer}>
          <img
            alt={'Best of Breed tools'}
            src={'/how-to-use/logos@2x.png'}
          ></img>
        </div>
      </div>
    </Layout>
  );
};

export default HowToUsePage;
