"use client"
import React from 'react';
import duscheImg from '../../../images/dusche.png';
import badenImg from '../../../images/baden.png';
import heizungImg from '../../../images/heizung.png';
import lichtImg from '../../../images/licht.png';
import energieBackground from '../../../images/energieHeader2.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Energie = () => {
    const router = useRouter();

    return (
        <div>
            <header 
                className="relative border-b border-gray-200 h-64 overflow-hidden"
            >
                <div 
                    className="absolute inset-0"
                    style={{ 
                        backgroundImage: `url(${energieBackground.src})`, 
                        backgroundSize: '120%',
                        backgroundPosition: 'center', 
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        filter: 'blur(5px)'
                    }}
                ></div>
                <div className="relative z-10">
                    <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-8 lg:px-8">
                        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-white sm:text-3xl" style={{ textShadow: '0 0 1px black' }}>Energie</h2>

                            </div>
                            <div className="flex items-center gap-4">
                                <button
                                    className="inline-flex items-center justify-center gap-1.5 rounded border border-gray-200 bg-white px-5 py-3 text-gray-900 transition hover:text-gray-700 focus:outline-none focus:ring"
                                    type="button"
                                    onClick={() => router.push('/pages/start')}
                                >
                                    <span className="text-sm font-medium"> Home </span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                </button>
                                <button
                                    className="inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                                    type="button"
                                    onClick={() => router.push('/pages/about')} 
                                >
                                    About
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="max-w-auto mx-auto ml-12 mr-12">
                <div className="flex justify-center space-x-4">
                    <div className="group relative block bg-black mt-12 w-1/4">
                        <a href="#">
                            <Image
                                alt=""
                                src={duscheImg}
                                layout="fill"
                                objectFit="cover"
                                className="absolute inset-0 h-full w-full opacity-75 transition-opacity group-hover:opacity-50"
                            />
                            <div className="relative p-4 sm:p-6 lg:p-8">
                                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Energie</p>
                                <p className="text-xl font-bold text-white sm:text-2xl">Duschen 10 Minuten</p>
                                <div className="mt-32 sm:mt-48 lg:mt-64">
                                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                        <p className="text-sm text-white">
                                            Durch eine 10-minütige Dusche werden etwa 2 kg CO₂ freigesetzt. Mit einem sparsamen Duschkopf 
                                            und kürzeren Duschzeiten kannst du deinen CO₂-Ausstoß erheblich reduzieren
                                            – ein kleiner Schritt für einen großen Einfluss auf die Umwelt.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="group relative block bg-black mt-12 w-1/4">
                        <a href="#">
                            <Image
                                alt=""
                                src={badenImg}
                                layout="fill"
                                objectFit="cover"
                                className="absolute inset-0 h-full w-full opacity-75 transition-opacity group-hover:opacity-50"
                            />
                            <div className="relative p-4 sm:p-6 lg:p-8">
                                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Energie</p>
                                <p className="text-xl font-bold text-white sm:text-2xl">Baden 20 Minuten</p>
                                <div className="mt-32 sm:mt-48 lg:mt-64">
                                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                        <p className="text-sm text-white">
                                            Ein 20-minütiges Bad verursacht etwa 3 kg CO₂. Indem du häufiger duschst oder die 
                                            Badedauer reduzierst, kannst du deinen CO₂-Fußabdruck deutlich verringern –
                                            kleine Änderungen machen einen großen Unterschied für die Umwelt.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="group relative block bg-black mt-12 w-1/4">
                        <a href="#">
                            <Image
                                alt=""
                                src={heizungImg}
                                layout="fill"
                                objectFit="cover"
                                className="absolute inset-0 h-full w-full opacity-75 transition-opacity group-hover:opacity-50"
                            />
                            <div className="relative p-4 sm:p-6 lg:p-8">
                                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Energie</p>
                                <p className="text-xl font-bold text-white sm:text-2xl">Heizen auf 25°C</p>
                                <div className="mt-32 sm:mt-48 lg:mt-64">
                                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                        <p className="text-sm text-white">
                                            Das Heizen auf 25°C erhöht den Energieverbrauch und verursacht mehr CO₂-Emissionen.
                                            Schon das Absenken der Temperatur um 1-2°C kann deinen CO₂-Ausstoß deutlich verringern
                                            – für ein komfortables Zuhause und eine nachhaltige Zukunft.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="group relative block bg-black mt-12 w-1/4">
                        <a href="#">
                            <Image
                                alt=""
                                src={lichtImg}
                                layout="fill"
                                objectFit="cover"
                                className="absolute inset-0 h-full w-full opacity-75 transition-opacity group-hover:opacity-50"
                            />
                            <div className="relative p-4 sm:p-6 lg:p-8">
                                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Energie</p>
                                <p className="text-xl font-bold text-white sm:text-2xl">Licht 1 Stunde</p>
                                <div className="mt-32 sm:mt-48 lg:mt-64">
                                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                        <p className="text-sm text-white">
                                            Eine Stunde Licht verursacht CO-Emissionen, abhängig von der Energiequelle.
                                            Mit energieeffizienten LED-Lampen kannst du den Stromverbrauch deutlich senken
                                            und so deinen CO₂-Ausstoß reduzieren – kleine Änderungen, große Wirkung.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <a
                    className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500 mt-4 ml-36 mr-[24rem]"
                    id='duscheButton'
                    href="#"
                >Hinzufügen</a>
                <a
                    className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500 mt-4 ml-4 mr-[16rem]"
                    id='badenButton'
                    href="#"
                >Hinzufügen</a>
                <a
                    className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500 mt-4 ml-28 mr-[16rem]"
                    id='heizungButton'
                    href="#"
                >Hinzufügen</a>
                <a
                    className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500 mt-4 ml-36"
                    id='lichtButton'
                    href="#"
                >Hinzufügen</a>
                <div className="flex justify-center items-center mt-32">
                    <h2 className="text-2xl">0 CO₂</h2>
                    <a
                        className="inline-block rounded bg-[#f36d6d] px-4 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#f36d6d] ml-4"
                        id='resetButton'
                        href="#"
                    >Zurücksetzen</a>
                </div>
                <div className="flex justify-between">
                    <div className="flex-grow">
                    </div>
                    <a
                        className="inline-block rounded-full border border-indigo-600 bg-indigo-600 p-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                        href="/pages/ernaehrung"
                    >
                        <span className="sr-only"> Next </span>
                        <svg
                            className="size-5 rtl:rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                    </a>
                </div>
            </div>
            <div>
            </div>
        </div>
    );
};

export default Energie;


