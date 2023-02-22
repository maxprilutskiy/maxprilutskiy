import Image from 'next/image';
import { SiLinkedin, SiTwitter, SiGithub, SiPolywork } from 'react-icons/si';
import avatar from './avatar-work.jpg';

export default function Home() {
  return (
    <div className='container mx-auto'>
      {renderIntro()}
      <br />
    </div>
  );

  function renderIntro() {
    return (
      <section className="p-4 md:pt-8 mx-auto max-w-sm md:max-w-3xl">
        <div className="flex gap-8 flex-col md:flex-row justify-center w-full">
          <div className='md:shrink-0'>
            <Image
              src={avatar}
              alt="Max Prilutskiy photo"
              width={512}
              className="rounded-lg max-w-full md:max-w-xxs"
            />
          </div>
          <div className="grow">
            <h1 className="text-4xl font-bold">Max Prilutskiy</h1>
            <br />
            <p className="text-gray-400">
              Product engineer and entrepreneur passionate about building products that create a lasting impact. 
            </p>
            <br />
            <hr className='opacity-10' />
            <br />
            <div className='flex flex-row gap-6'>
              <a href="https://www.linkedin.com/in/maxprilutskiy/" target="_blank" rel="noopener noreferrer">
                <SiLinkedin size={24} />
              </a>
              <a href="https://twitter.com/maxprilutskiy" target="_blank" rel="noopener noreferrer">
                <SiTwitter size={24} />
              </a>
              <a href="https://polywork.com/maxprilutskiy" target="_blank" rel="noopener noreferrer">
                <SiPolywork size={24} />
              </a>
              <a href="https://github.com/maxprilutskiy" target="_blank" rel="noopener noreferrer">
                <SiGithub size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
