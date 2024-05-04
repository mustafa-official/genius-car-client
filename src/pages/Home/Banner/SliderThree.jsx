import { Button } from "@material-tailwind/react";
import banner3 from "../../../assets/images/banner/3.jpg";


const SliderThree = () => {
    return (
        <div
        className="h-[500px] bg-cover bg-center rounded-lg mt-2 flex flex-col items-start justify-center"
        style={{ backgroundImage: `url(${banner3})` }}
      >
        <div className="text-white max-w-lg space-y-8 px-4 md:ml-12">
          <h2 className="text-3xl lg:text-5xl font-bold ">
            Affordable Price For Car Servicing
          </h2>
          <p>
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex md:flex-row flex-col gap-4">
         <div> <Button className="bg-[#FF3811]">Discover More</Button></div>
          <div><Button className="bg-transparent border border-white">Latest Project</Button></div>
          </div>
        </div>
      </div>
    );
};

export default SliderThree;