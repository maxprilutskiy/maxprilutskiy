import Image from 'next/image';
import { SiLinkedin, SiTwitter, SiGithub, SiPolywork } from 'react-icons/si';
import avatar from './avatar-work.jpg';
import typeform from './typeform.jpg';

export default function Home() {
  return (
    <>
      {renderIntro()}
      <br />
      <br />
      {renderWork()}
    </>
  );

  function renderIntro() {
    return (
      <section className="mx-auto">
        <div className="flex gap-8 flex-col sm:flex-row justify-center w-full">
          <div className='sm:shrink-0'>
            <Image
              src={avatar}
              alt="Max Prilutskiy photo"
              width={512}
              className="rounded-lg max-w-full sm:max-w-xxxs"
            />
          </div>
          <div className="grow">
            <h1 className="text-2xl md:text-4xl font-bold">Max Prilutskiy</h1>
            <br />
            <p className="text-gray-400">
              Product engineer and entrepreneur passionate about building products that create a lasting impact.
            </p>
            <br />
            <hr className='opacity-10' />
            <br />
            <div className='flex flex-row gap-6'>
              <a href="https://www.linkedin.com/in/maxprilutskiy/" target="_blank" rel="noopener noreferrer">
                <SiLinkedin size={20} />
              </a>
              <a href="https://twitter.com/maxprilutskiy" target="_blank" rel="noopener noreferrer">
                <SiTwitter size={20} />
              </a>
              <a href="https://polywork.com/maxprilutskiy" target="_blank" rel="noopener noreferrer">
                <SiPolywork size={20} />
              </a>
              <a href="https://github.com/maxprilutskiy" target="_blank" rel="noopener noreferrer">
                <SiGithub size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  function renderWork() {
    return (
      <section className="mx-auto">
        <p className='mb-4 text-gray-400 font-semibold'>Recent jobs</p>
        <div className="p-4 border border-zinc-800 rounded-lg shadow-2xl shadow-yellow-600">
          <div className='flex flex-row gap-4 items-center'>
            <div>
              <a
                href="https://www.typeform.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  width={48}
                  src={typeform}
                  className="rounded-lg"
                  alt="Typeform logo"
                />
              </a>
            </div>
            <div className='grow'>
              <div className='mb-0.5'>Engineering Manager</div>
              <div className='flex justify-between'>
                <div className='text-gray-400 text-sm'>Typeform</div>
                <span className='text-gray-400 text-sm'>2020 - Present</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
