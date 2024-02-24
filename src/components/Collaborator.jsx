import Marquee from "react-fast-marquee";

import brand1 from '@/assets/collaboratorLogos/rumble-2.svg'
import brand2 from '@/assets/collaboratorLogos/repsol-7.svg'
import brand3 from '@/assets/collaboratorLogos/aquafina.svg'
import brand4 from '@/assets/collaboratorLogos/rotary.svg'
import brand5 from '@/assets/collaboratorLogos/austrian-olympic-committee.svg'
import brand6 from '@/assets/collaboratorLogos/yahoo-2.svg'
import brand7 from '@/assets/collaboratorLogos/samsung.svg'
import brand8 from '@/assets/collaboratorLogos/johnnie-walker-1.svg'
import brand9 from '@/assets/collaboratorLogos/sers.svg'
import brand10 from '@/assets/collaboratorLogos/mifama.svg'
import brand11 from '@/assets/collaboratorLogos/legrand.svg'
import brand12 from '@/assets/collaboratorLogos/kokusai-electric.svg'
import Image from "next/image";
const Collaborator = () => {
    const logos =[brand1,brand2,brand3,brand4,brand5,brand6,brand7,brand8,brand9,brand10,brand11,brand12]
    return (
        <div className="w-full p-20 bg-slate-400 mt-10 mb-5">
            <h2 className="text-4xl text-center font-bold mb-10">Over 100 plus companies are around with us</h2>
           <Marquee pauseOnHover>
                {
                    logos.map((logo,idx)=><div className="h-[250px] w-[300px] border-2 bg-white mr-12" key={idx}>
                        <Image className="h-full w-full" src={logo} alt={`logo${idx}`}></Image>
                    </div>)
                }
            </Marquee> 
        
        </div>
    );
};

export default Collaborator;