import Image from 'next/image';
import classes from './hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/mars.png'
          alt='Image of Mars'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi I'm Mars</h1>
      <p>I'm a bad boy living in Toronto</p>
    </section>
  );
};

export default Hero;
