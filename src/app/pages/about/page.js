import React from 'react';
import Header from '../../components/header';
import DefaultButton from '@/app/components/defaulbutton';

const Energie = () => {
    return (
        <div>
            <Header></Header>
                  <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Smart Energy</h2>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-10 mt-36 ml-12 mr-12">
                <div className="h-32 rounded-lg bg-gray-200"></div>
                <div className="h-25 rounded-lg bg-gray-200"></div>
                <div className="h-25 rounded-lg bg-gray-200"></div>
                <div className="h-25 rounded-lg bg-gray-200"></div>
            </div>
        </div>
        
    );
};
export default Energie;
