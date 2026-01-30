import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const photoRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const skillsRef = useRef(null);
  const skillBadges = useRef([]);

  useEffect(() => {
    // Photo floating animation
    gsap.to(photoRef.current, {
      rotationY: 10,
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });

    // Scroll-triggered animations
    gsap.fromTo(headingRef.current, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(textRef.current, 
      { opacity: 0, x: -30 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1, 
        delay: 0.2,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%"
        }
      }
    );

    // Stagger skill badges with bounce
    gsap.fromTo(skillBadges.current, 
      { 
        opacity: 0, 
        scale: 0.5, 
        y: 30 
      },
      { 
        opacity: 1, 
        scale: 1, 
        y: 0, 
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 75%"
        }
      }
    );

    // Hover effects for skills
    skillBadges.current.forEach((badge, index) => {
      badge.addEventListener('mouseenter', () => { 
        gsap.to(badge, { scale: 1.1, duration: 0.3, yoyo: true, repeat: 1 });
      });
    });

  }, []);

  return (
   <>
   <div className='relative z-20 lg:mt-0 '>
    <img src='personal.avif' alt='imag' className='absolute -z-20 h-460 sm:h-400 lg:h-320 md:h-340  w-full'/>
         <section className="max-w-7xl mx-auto px-6 py-24  rounded-3xl   ">
      <div className="grid md:grid-cols-2 z-20 gap-16 items-center">
        
        {/* Animated Profile Photo */}
        <div className="flex justify-center md:justify-center ">
          <div 
            ref={photoRef}
            className="relative group"
          >
            <div className="absolute -inset-4"></div>
            <img
              src="about2.jpg" 
              alt="Your Name"
              className="w-64 h-64 md:w-full md:h-80 rounded-3xl grayscale object-cover  border-4 border-white hover:border-indigo-400/50 transition-all duration-500 cursor-pointer relative z-10"
            />
            <div className="absolute bottom-4 left-1/2 z-10  transform -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-semibold text-white shadow-lg">
              Frontend Dev
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <h2 
            ref={headingRef}
            className="text-5xl md:text-6xl font-black bg-[#021b29] bg-clip-text text-transparent mb-6 leading-tight"
          >
            About Me
          </h2>
          
          <p 
            ref={textRef}
            className="text-xl md:text-sm text-[#021b29] leading-relaxed max-w-lg font-medium"
          >
            Passionate <span className="text-black font-bold text-lg">Frontend Developer</span> crafting 
            interactive experiences with React, Tailwind CSS & GSAP animations. 
            Love building smooth UIs that users can't stop interacting with.who focuses on making UIs not just
              beautiful, but also fast, responsive and usable.
          </p>

          {/* Animated Skill Badges */}
          <div ref={skillsRef} className="flex flex-wrap gap-4">
            {[
              { name: 'React', color: '' },
              { name: 'Tailwind', color: '' },
              { name: 'GSAP', color: '' },
              { name: 'JavaScript', color: '' },
              { name: 'Next.js', color: '' }
            ].map((skill, index) => (
              <div
                key={skill.name}
                ref={el => skillBadges.current[index] = el}
                className={`group px-6 py-3 rounded-2xl text-[#021b29] hover:text-white font-semibold text-lg shadow-xl cursor-pointer  hover:shadow-2xl hover:scale-105 z-40 transition-all duration-300 transform-gpu`}
              >
                {skill.name}
                <div className="absolute inset-0 bg-[#021b29] -z-10 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
   </div>
   </>
  );
};

export default About;
