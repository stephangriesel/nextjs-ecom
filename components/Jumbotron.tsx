import React from 'react';
import styles from '../styles/Jumbotron.module.scss';

const Jumbotron = ({videoSource}) => {
  return (
    <>
      <div className={styles.container}>
        <video
          style={{width: `100%`, height: 'auto'}}
          autoPlay='autoplay'
          loop='loop'
          muted
          id='video-id'
          className='video'
        >
          <source src={videoSource} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <div className={styles.layover}>
          <div className={styles.content}>
            {/* <div className={styles.contentWrapper}>
              <h1>SHOP THE LATEST</h1>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Jumbotron;
