import banner1 from "@/assets/banner1.jpg"
import banner2 from "@/assets/banner2.jpg"
import banner3 from "@/assets/banner3.jpg"
import banner4 from "@/assets/banner4.jpg"
import Image from 'next/image';
import Link from "next/link";
const Banner = () => {
  const banner = [banner1, banner2, banner3, banner4]
  return (
    // banner section and collaborator section start
    <div>
      {/* banner section starts */}
      <div className="carousel w-full">
        {
          banner.map((img, idx) => <div key={idx} id={`slide${idx}`} className="carousel-item relative w-full">
            <Image src={img} className="w-full h-[600px]" alt={`banner${idx}`} />
            <div className="absolute flex flex-col justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] left-0 top-0 h-[600px] w-full">
              <div className=' pl-12 w-2/3 space-y-5'>
                <h2 className='text-white text-6xl font-bold'>
                  Embark on Your Learning Journey with Study Pilot
                </h2>
                <p className='text-white'>
                  Welcome aboard Study Pilot! Your one-stop destination for streamlined online learning. Take control of your study classes effortlessly, from scheduling to progress tracking.
                </p>
                <div className=''>
                  <button className=" mr-5 btn btn-outline text-[#FFFF] hover:bg-[#0DA3D6] hover:text-white hover:border-[#0DA3D6]"><Link href={'/'}>Explore</Link></button>

                </div>
              </div>

            </div>
            <div className="absolute flex justify-end gap-5 transform  left-5 right-5 bottom-10">
              <Link href={`#slide${idx == 0 ? idx = 3 : idx - 1}`} className="btn btn-circle">❮</Link>
              <Link href={`#slide${idx == 3 ? idx = 1 : idx + 1}`} className="btn btn-circle">❯</Link>
            </div>
          </div>)
        }
      </div> {/*  banner section ends */}

      {/* collaborator section start */}
        <div>
          
        </div>
    </div>
    //banner section end
  );
};

export default Banner;