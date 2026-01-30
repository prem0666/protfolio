import React, { useEffect, useRef } from 'react';

const skillsData = [
  { name: 'React', percent: 95 },
  { name: 'Tailwind CSS', percent: 90 },
  { name: 'GSAP', percent: 85 },
  { name: 'JavaScript', percent: 92 },
  { name: 'HTML/CSS', percent: 98 }
];

const Progress = () => {
  const progressRefs = useRef([]);
  const countersRefs = useRef([]);

  useEffect(() => {
    progressRefs.current.forEach((bar, i) => {
      if (bar) {
        // Animate width on mount without hover
        bar.style.width = skillsData[i].percent + '%';
      }
    });

    countersRefs.current.forEach((counter, i) => {
      // let start = 0;
      
      const end = skillsData[i].percent;
      const duration = 2000;
      let startTime = null;

      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const current = Math.min(Math.round((progress / duration) * end), end);
        counter.textContent = current + '%';
        if (progress < duration) {
          requestAnimationFrame(animateCount);
        }
      };

      requestAnimationFrame(animateCount);
    });
  }, []);

  return (
    <section className="z-20 relative  m-5 flex flex-col items-center">
      <h2 className="text-5xl font-bold text-[#021b29] mb-12 tracking-wide border-b border-[#021b29]/30 pb-4 w-72 text-center">
        Skills Mastery
      </h2>
      <div className="w-full max-w-3xl space-y-12 px-6">
        {skillsData.map((skill, i) => (
          <div key={skill.name} className="group">
            <div className="flex justify-between mb-4">
              <h3 className="text-[#021b29] text-2xl font-semibold">{skill.name}</h3>
              <span
                ref={(el) => (countersRefs.current[i] = el)}
                className="text-[#021b29] font-extrabold text-2xl w-16 text-right"
              >
                0%
              </span>
            </div>
            <div className="relative w-full h-5 bg-[#021b29]/10 rounded-lg overflow-hidden border border-[#021b29]/20 shadow-inner">
              <div
                ref={(el) => (progressRefs.current[i] = el)}
                className="h-full bg-gradient-to-r from-[#021b29]  to-[#021b29] rounded-lg shadow-lg transition-all duration-2000 ease-out origin-left scale-x-100"
                style={{ width: '0%' }}
              />
              {/* Removed glow and hover related div */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Progress;
