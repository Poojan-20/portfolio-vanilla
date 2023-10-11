import Image from 'next/image'
import { Inter } from 'next/font/google'
import Typed from 'react-typed';
import Projectcard from '@/components/Projectcard';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <div className='flex flex-col justify-center items-center mx-[5%] md:mx-[10%] py-8 '>
      <div className='flex flex-col justify-center items-center'>
        <div className='my-2 flex flex-col items-center md:flex-row md:mx-4'>
          <div>

            <h1>
              hey there,I&#39;m a{" "}
              <Typed
                strings={["Developer", "Gamer", "TechGeek"]}
                typeSpeed={75}
                loop
                backSpeed={20}
                cursorChar="█"
                showCursor={true}
              />
            </h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos atque fuga minima quibusdam, eius assumenda a? Sapiente repudiandae amet eos, iusto deleniti natus laboriosam atque neque. Rem cupiditate beatae eum reiciendis aperiam quasi similique!
            </p>
            <p className='my-0.5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aperiam fugit dolore harum accusantium nemo quos explicabo quas? Quas modi, eligendi natus quos sequi ducimus eos, unde quibusdam veniam harum, optio dignissimos iure non mollitia?
            </p>
          </div>
          <Image src="/images/poojanpatel.png" quality={100} priority={true} width={200} height={200} className='rounded-lg m-5 md:mx-5' />
        </div>
        <div className=''>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <p className='text-3xl font-semibold mt-5'>
          projects i have worked on
        </p>
        <div className='flex flex-row flex-wrap'>
          <Projectcard title="ipsum dolor sit amet consectetur adipisicin" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut ipsam dolorem ea, dolores esse nemo delectus deleniti adipisci! Ea, totam.sit amet consectetur adipisicing elit. Aut ipsam dolorem ea, dolores esse nemo delectus deleniti adipisci! Ea, totam.sit amet consectetur adipisicing elit. Aut ipsam dolorem ea, dolores esse nemo delectus deleniti adipisci! Ea, totam.sit amet consectetur adipisicing elit. Aut ipsam dolorem ea, dolores esse nemo delectus deleniti adipisci! Ea, totam." images={['/images/thewallshome.png', "/images/thewalls.png",]} />
          <Projectcard title="ipsum dolor sit amet consectetur adipisicin" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit." images={["/images/medjestic_.png"]} />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center text-center'>
        <p className='text-3xl font-semibold my-5'>
          some of my recommendations
        </p>
        <div className='mb-5 flex flex-row justify-center flex-wrap items-center'>

          <div className="m-2">
            <iframe width="275" height="200" src="https://www.youtube.com/embed/gIxEkX_2kt8?si=2yR1f-orWFifR_Af" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
