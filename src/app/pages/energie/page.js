"use client"
import React from 'react'; 
import { CO2Provider, useCO2Context } from '@/app/context/CO2Context';
import duscheImg from '../../../images/dusche.png';
import badenImg from '../../../images/baden.png';
import heizungImg from '../../../images/heizung.png';
import lichtImg from '../../../images/licht.png';
import energieBackground from '../../../images/energieHeader2.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Energie = () => {
        const router = useRouter();
        const { co2Value, incrementCO2, resetCO2 } = useCO2Context();

    return (
        <div>
            <header className="relative border-b border-gray-200 h-64 overflow-hidden">
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
                        </a>
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
                        <div className="relative flex justify-center mt-0">
                            <a
                                className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500 cursor-pointer"
                                id='duscheButton'
                                onClick={() => incrementCO2(2)}
                            >Hinzufügen</a>
                        </div>
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
                        </a>
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
                        <div className="relative flex justify-center mt-0">
                            <a
                                className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500 cursor-pointer"
                                id='badenButton'
                                onClick={() => incrementCO2(3)}
                            >Hinzufügen</a>
                        </div>
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
                        </a>
                        <div className="relative p-4 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Energie</p>
                            <p className="text-xl font-bold text-white sm:text-2xl">Heizen auf 25°C</p>
                            <div className="mt-32 sm:mt-48 lg:mt-64">
                                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                    <p className="text-sm text-white">
                                        Das Heizen auf 25°C verursacht etwa 290 kg CO₂ pro Monat.
                                        Senkst du die Temperatur um 1-2°C, kannst du bis zu 29 kg CO₂ pro Monat
                                        einsparen und gleichzeitig die Umwelt schützen.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex justify-center mt-4">
                            <a
                                className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500 cursor-pointer"
                                id='heizungButton'
                                onClick={() => incrementCO2(290)}
                            >Hinzufügen</a>
                        </div>
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
                        </a>
                        <div className="relative p-4 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Energie</p>
                            <p className="text-xl font-bold text-white sm:text-2xl">Licht 1 Stunde</p>
                            <div className="mt-32 sm:mt-48 lg:mt-64">
                                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                    <p className="text-sm text-white">
                                        Eine Stunde Licht mit einer herkömmlichen Glühbirne verursacht etwa 0,40 kg CO₂.
                                        Durch den Einsatz von LED-Lampen kannst du den CO₂-Ausstoß auf etwa 5 g pro Stunde reduzieren.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex justify-center mt-4">
                            <a
                                className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500 cursor-pointer"
                                id='lichtButton'
                                onClick={() => incrementCO2(0.40)}
                            >Hinzufügen</a>
                        </div>
                    </div>
                </div>
                <div id="co2-component" className="flex justify-center items-center mt-1">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-2 lg:px-8">
                    <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 justify-center">
                        <div className="flex flex-col rounded-lg border border-gray-100 px-5 py-6 text-center">
                        <dt className="order-last text-lg font-medium text-gray-500 mt-4">Gesamter CO2-Ausstoß</dt>
                        <dd className="text-4xl font-extrabold text-blue-600 md:text-4xl">
                            {co2Value} kg CO₂
                        </dd>
                        </div>
                    </dl>
                    <div className="flex justify-center">
                        <a
                            className="inline-block rounded bg-[#f36d6d] px-4 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#f36d6d] mt-2"
                            id="resetButton"
                            href="#"
                            onClick={resetCO2}
                        >
                            Zurücksetzen
                        </a>
                    </div>                   
                </div>
                <div id='returnNextButtons' className="flex justify-end items-center mb-12">
                    <div id='nextButton' className="flex">
                        <a
                            className="inline-block rounded-full border border-indigo-600 bg-indigo-600 p-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                            href="/pages/mobilitaet"
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
            </div>
            <div>
            </div>
        </div>
        </div>
    );
};

export default Energie;


