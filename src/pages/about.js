import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
const AboutPage = (props) => {
  let historyRef = useRef();
  let valuesRef = useRef();
  let sustainabilityRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          maxWidth={'900px'}
          image={'/about.png'}
          title={`Lithium Yachts \n local experts in marine electrical systems`}
        />

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(historyRef)} to={'#history'}>
            History
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(valuesRef)} to={'#values'}>
            Values
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(sustainabilityRef)}
            to={'#sustainability'}
          >
            Sustainability
          </ThemeLink>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.detailContainer} ref={historyRef}>
            <p>
              Founded in 2012, Lithium Yacht is an innovative design and implementation team who designs, installs, and sea trials electrical and electronics systems. We help our boat owner clients understand their options, and guarantee the implementations we recommend. 
            </p>
            <br />
            <br />
            <p>
              We are boat owners. We have implemented electrical re-powers in our boats. We have extensive experience working at some of the best boat yards and follow best practices and are ABYC and NMEA certified. We take pride in understanding all the re-powering options currently on the market and are happy to share our knowledge with our customers.Today we are the only local company with the ability to build our own Lithium batteries for marine environments and installing them - giving us a unique insight into how Lithium really works and how to optimize each system for our clients. We currently run all battery chemistries ( Lithium, AGM,Lead/Acid) in our test boats, and are happy to share the actual data on what works and what doesn't. 
            </p>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt brand'} src={'/about1.png'}></img>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Our Values</h3>
            <div ref={valuesRef}>
              <p>
                Lithium Yacht produced aspect.
              </p>
              <ol>
                <li>Be an ecowear</li>
                <li>Sophisticated and not mass-produced</li>
                <li>Only natural materials</li>
              </ol>
              <img alt={'founder'} src={'/about2.png'}></img>
            </div>
            <h3>Sustainability</h3>
            <div id={'#sustainability'} ref={sustainabilityRef}>
              <p>
                Our team, has both an eye for quality and a
                desire to innovate. We use the finest equipment on the market such as
                Victron, Furuno, Garmin, Blue Seas, and pride ourselves in understanding how and why units work.  Our wiring is beautiful and elegant and 
                intelligently and obviously marked. We pride ourselves in making our installation so the next person who comes after us can easily understand the systems we have implemented. Every electrical installation we do comes with a fully annotated circuit diagram and product documentation so the boat owner and future technicians can easily understand what was done and know that it was done right. This documentation has a permanent elecrtonic home so it never can be lost and is always available. Lithium Yacht continues this commitment to innovation and transparency today.
                Our unique approach includes: We provide a lifetime guarantee for phone support. We print our phone number on every installation we do - so the boat owner and subsequent owners know who to contact if there is anything they do not understand in our implementation. 
              </p>
              <p>
                Made Proudly in South Bay.{' '}
              </p>
              <p>
                International Shipping: With over 50 years spent perfecting shipping methods around the world, Lithium Yacht knows how to get the right part to the right location. Many of our customers have us ship to cruising locations around the world and we know the ins and outs to reduce the hassles with customs. We also provide installation and trouble-shooting in multiple languages as necessary and are multi-lingual as required if our customers need us to talk to their local installers. This is our committment to those cruisers - as we have been there and know how important a helping hand can be. 
              </p>
            </div>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt backwards'} src={'/about3.png'}></img>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
