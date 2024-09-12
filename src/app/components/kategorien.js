import React from 'react';
import energieImg from '../../images/energy2.png';
import mobilityImg from '../../images/transporte4.png';
import foodImage from '../../images/foodImg.png';
import consumeImage from '../../images/consume2.png';
import Image from 'next/image';
import Link from 'next/link'; // Add this import

const Kategorien = () => {
	return (
		<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header>
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Smart Energy</h2>

      <p className="mt-4 max-w-md text-gray-500">
	  	Berechnen Sie Ihren CO2-Fußabdruck und erhalten Sie Tipps zur Reduzierung – für ein bewussteres, nachhaltiges Leben
      </p>
    </header>

    <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <li>
      <Link href="/pages/energie" className="group block overflow-hidden">
			<Image src={energieImg} alt="Home" className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px] bg-gray-400" />
        
          <div className="relative bg-white pt-3">
            <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
              Energie
            </h3>
          </div>
        </Link>
      </li>
	  <li>
    <a href="/pages/mobilitaet" className="group block overflow-hidden">
    <Image src={mobilityImg} alt="Home" className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px] bg-gray-400" />
        
          <div className="relative bg-white pt-3">
            <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
              Mobilität
            </h3>
          </div>
        </a>
      </li>
	  <li>
    <a href="/pages/ernaehrung" className="group block overflow-hidden">
    <Image src={foodImage} alt="Home" className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px] bg-gray-400" />
        
          <div className="relative bg-white pt-3">
            <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
              Ernährung
            </h3>
          </div>
        </a>
      </li>
	  <li>
    <a href="/pages/konsum" className="group block overflow-hidden">
    <Image src={consumeImage} alt="Home" className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px] bg-gray-400" />
        
          <div className="relative bg-white pt-3">
            <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
              Konsum
            </h3>
          </div>
        </a>
      </li>	
    </ul>

    <ol className="mt-8 flex justify-center gap-1 text-xs font-medium">
    </ol>
  </div>
</section>
	);
  };


export default Kategorien;