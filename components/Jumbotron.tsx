import Image from 'next/image';
import huck from '../public/huck-crop.svg';
import models from '../public/models.jpeg';

const Jumbotron = () => {
  return (
    <>
      <div className='background-image'>
        <Image src={huck} alt={huck} />
      </div>
      <div className='promotional-message'>
        <Image width='1000px' height='700px' src={models} alt='model' />
      </div>
    </>
  );
};
export default Jumbotron;
