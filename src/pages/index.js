import React, { useRef } from "react"
import Layout from "../components/Layout"
import Skill from "../components/Skill"
import ArrowDown from '../../assets/arrow-down.svg';
import Contact from "../components/Contact";

// markup
const IndexPage = () => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  return (
    <>
      <Layout>
        <div className="p-4">
          {/* Presentation */}
          <div className="mb-32">
            <h1 className="text-8xl text-center">Hi there!</h1>
            <p className="text-center text-xl text-gray-600 mt-4">My name is Nicolas Carignani and I'm a full stack developer.</p>
          </div>


          <div className="md:grid md:grid-cols-2 md:gap-4 md:mx-auto md:w-3/5 mt-4">
            
            {/* Some career text*/}
            <div>
              <h1 className="text-4xl font-bold mb-4 text-center md:text-left">My Career So Far</h1>
              <p className="text-gray-600 text-lg max-w-lg text-center md:text-left">Do magna commodo deserunt labore officia commodo adipisicing aliquip laborum eiusmod cupidatat. Cillum deserunt adipisicing adipisicing officia pariatur. Ad qui do aliqua nisi qui tempor dolor aute cillum. Nisi ea incididunt dolore laboris qui duis amet.</p>
            </div>

            {/* Skills */}
            <div className="mt-4 md:mt-0">
              <div className="flex flex-row flex-wrap max-w-md ml-auto">
                {['Prototyping', 'React', 'React Native', 'Web Development', 'App Development', 'Tailwind css', 'Html/Css'].map((s) => (
                  <div className="mr-2 mb-2">
                    <Skill name={s} />
                  </div>
                ))}
              </div>

              <button class="absolute mx-auto bottom-12 block rounded-full w-12 h-12 bg-white border border-indigo-500
                animate-bounce -my-12 mx-auto"
                onClick={scrollToContact}
              >
                <ArrowDown className='w-12 h-12 text-indigo-500'/>
              </button>
            </div>
          </div>
        </div>
      </Layout>
      <Contact innerRef={contactRef} />
    </>
  )
}

export default IndexPage
