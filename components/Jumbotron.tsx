import Image from 'next/image';
import dogpaw from '../public/dogpaw.svg';

const Jumbotron = () => {
  return (
    <>
      <div className='background-image'>
        <Image src={dogpaw} alt={dogpaw} />
      </div>
      <div className='promotional-message'>
        <h3>REDISCOVER</h3>
        <h2>Dog Bed</h2>
        <p>
          An <strong>exclusive collection of beds</strong> available for your
          companion.
        </p>
      </div>
    </>
  );
};
export default Jumbotron;
