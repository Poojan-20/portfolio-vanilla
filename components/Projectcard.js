import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Projectcard = ({ title, images, description }) => {
   return (
      <div
         class="w-[100%] md:w-[45%] bg-zinc-700 shadow-lg rounded-lg m-5">
         <div style={{
            width: "100%"
         }}>
            <Carousel className='' showThumbs={false} showArrows={false} autoPlay transitionTime={500} infiniteLoop>
               {images.map((image, index) => (
                  <Image quality={100} key={index} priority={true} class="" src={image} alt="" width={1000} height={1000} />
               ))}
            </Carousel>
         </div>
         <div class="">
            <div className="p-4">
               <h1 class="hover:cursor-pointer mt-2 bg-gradient-to-r from-zinc-400 to-white bg-clip-text text-transparent font-bold text-xl tracking-tight ">
                  {title}
               </h1>
               <p class="hover:cursor-pointer py-3 text-white leading-6">
                  {description}
               </p>
            </div>
         </div>
      </div>
   )
}

export default Projectcard