import React from 'react';
import duscheImg from '../../../images/dusche.png';
import badenImg from '../../../images/baden.png';
import heizungImg from '../../../images/heizung.png';
import lichtImg from '../../../images/licht.png';
import Image from 'next/image';

const Energie = () => {
    return (
        <div>
            <header className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Header anpassen</h1>
                            <p className="mt-1.5 text-sm text-gray-500">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, recusandae.
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <button
                                className="inline-flex items-center justify-center gap-1.5 rounded border border-gray-200 bg-white px-5 py-3 text-gray-900 transition hover:text-gray-700 focus:outline-none focus:ring"
                                type="button"
                            >
                                <span className="text-sm font-medium"> View Website </span>
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
                            >
                                Create Post
                            </button>
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
                                            Eine Stunde Licht verursacht CO₂-Emissionen, abhängig von der Energiequelle.
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
                    className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500 mt-4 ml-24 mr-[16rem]"
                    id='heizungButton'
                    href="#"
                >Hinzufügen</a>
                <a
                    className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500 mt-4 ml-24"
                    id='lichtButton'
                    href="#"
                >Hinzufügen</a>
            </div>
            <div>
            </div>
        </div>
    );
};

export default Energie;


