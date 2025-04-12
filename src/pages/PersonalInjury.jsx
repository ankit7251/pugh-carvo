import React from 'react'
import { useNavigate } from 'react-router-dom';
import PersonalInjurySection from '../components/bankruptcy/PersonalInjurySection';

const PersonalInjury = () => {

    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gray-50 px-4 py-8 md:mt-20">
            <div className="flex justify-center  md:mt-0 mt-30 gap-4 mb-10 flex-wrap">
                <button
                    onClick={() => navigate("/bankruptcy")}
                    className={`text-[1.8vh]  md:text-[1.2vw] px-6 py-2 rounded-full transition-all duration-300 font-semibold shadow-md cursor-pointer  text-blue-700 border border-blue-700 hover:bg-blue-100"
              }`}
                >
                    BANKRUPTCY
                </button>
                <button
                    className={`text-[1.8vh] md:text-[1.2vw] px-6 py-2 rounded-full transition-all duration-300 font-semibold shadow-md cursor-pointer text-blue-700 border  border-blue-700 "
              }`}
                    onClick={() => navigate("/criminal-traffic-defense")}
                >
                    CRIMINAL AND TRAFFIC DEFENSE
                </button>
                <button
                    onClick={() => navigate("/personal-injury")}
                    className={`text-[1.8vh] md:text-[1.2vw] px-6 py-2 rounded-full hover:bg-blue-100 transition-all duration-300 font-semibold shadow-md cursor-pointer text-white border bg-blue-700 border-blue-700  "
              }`}
                >
                    PERSONAL INJURY
                </button>
            </div>
            <div>
                <PersonalInjurySection />
            </div>
        </div>
    )
}

export default PersonalInjury
