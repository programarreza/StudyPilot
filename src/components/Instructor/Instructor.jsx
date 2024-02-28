import instructor from '../../assets/image/instructor.png'
import Image from 'next/image';
const Instructor = () => {
    return (
        <div className="grid grid-cols-2 gap-5 ">
            <div className="bg-yellow-200">
                <Image src={instructor} className='h-42' alt='instructor'></Image>
            </div>
            <div className="flex flex-col justify-center px-5">
                <h1 className='text-3xl font-bold'>Become an instructor</h1>
                <p>Empower others through knowledge and passion—become an instructor! Share your expertise, inspire learning, and embark on a fulfilling journey of shaping minds and futures.</p>
                <button className="px-5 py-1 bg-black text-white font-bold text-center  w-[25%]">Start Teaching</button>
            </div>

        </div>
    );
};

export default Instructor;