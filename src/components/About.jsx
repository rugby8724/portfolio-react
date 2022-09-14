
const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-green-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Jeremiah, a CPA looking to make a career change into the world of programing </p>
            </div>
            <div>
              <p>I am passionate about learning new things and a few years ago a friend 
                introduced me to programming. After building small projects in 2021
                I decided to dedicate more time to programming and really enjoyed the process. 
                During that time my mentor encourage me to purse a career in software developement. 
                I took his advice and started the Digital Crafts course in 2022. 
                Digital Crafts has been an amazing tool to help get me out of my comfort zone
                and push me from just being a hobby developer to having the skills needed for a career
                as a developer. I know there is still a lot to learn, and I'm looking forward to growing 
                as a developer with a great company. 
              </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
