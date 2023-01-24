import farkle from '../assets/farkle.png'
import digitalBuilding from '../assets/digitalBuilding.png'
import canoe from '../assets/canoe.png'

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-green-600'>
            Projects
          </p>
          <p className='py-6'>// Check out some of my recent projects</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${digitalBuilding})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                MERN Application
              </span>
              <div className='pt-8 text-center'>
                {/* <a href='https://digitalbuildingtwoamigos.herokuapp.com/' target="_blank"
                  rel='noreferrer noopener'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                </a> */}
                <a href='https://github.com/terencesmithcodes/digitalbuildings1' target="_blank"
                  rel='noreferrer noopener'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${canoe})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/rugby8724/Canoe' target="_blank"
                  rel='noreferrer noopener'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${farkle})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/rugby8724/farkle-react' target="_blank"
                  rel='noreferrer noopener'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            // style={{ backgroundImage: `url(${realEstate})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div >
              <span className='text-base font-bold text-white tracking-wider'>
                Digital Buildings helps a company track their commercial clients' 
                hvac systems. <br/>
                Another student and myself built this project using the 
                MERN stack. My main responsibilities were managing the backend, database,
                and global state.
              </span>
            </div>
          </div>
            {/* Grid Item */}
          <div
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div >
              <span className='text-base font-bold text-white tracking-wider'>
                Canoe is a traveling site that lets customers see future flights and track current flights.
                This was a group project built by two other students and myself. 
                My main responsibilities were fixing bugs, refactoring code, and adding a firebase login.
              </span>
            </div>
          </div>
          <div
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div>
              <span className='text-base font-bold text-white tracking-wider'>
                Farkle is a lite-version of the game farkle. 
                This was a solo project. The project was built with 
                react and reduxtoolkit
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
