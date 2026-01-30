import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="relative  text-white  flex justify-center ">
        
            <img src='bottom.avif' alt='imag' className='absolute  -z-13 h-240  w-full '/>
      
      <div className="px-4 sm:px-6 py-28 bg-slate-950">

        {/* CENTERED CONTAINER */}
        <div className="max-w-4xl mx-auto ">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-widest">
              CONTACT
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base max-w-md mx-auto">
              Have a project in mind or want to collaborate?
              Drop a message — I’ll respond directly.
            </p>
          </motion.div>

          {/* CONTENT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

            {/* LEFT INFO */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-6">
                Let’s build something solid
              </h3>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
                I’m available for freelance work, full-time roles,
                and serious collaborations.  
                If clarity and quality matter to you — we’ll work well together.
              </p>

              <ul className="space-y-4 text-sm text-gray-300">
                <li>
                  <span className="text-gray-500">Email:</span>{" "}
                  yourname@email.com
                </li>
                <li>
                  <span className="text-gray-500">Location:</span>{" "}
                  India / Remote
                </li>
                <li>
                  <span className="text-gray-500">Status:</span>{" "}
                  Available
                </li>
              </ul>
            </motion.div>

            {/* FORM */}
            <motion.form
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-5"
            >
              <div>
                <label className="text-xs text-gray-400">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full mt-2 bg-transparent border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-500 transition"
                />
              </div>

              <div>
                <label className="text-xs text-gray-400">Email</label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="w-full mt-2 bg-transparent border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-500 transition"
                />
              </div>

              <div>
                <label className="text-xs text-gray-400">Message</label>
                <textarea
                  rows="4"
                  placeholder="Tell me about your project"
                  className="w-full mt-2 bg-transparent border border-white/10 rounded-lg px-4 py-3 text-sm resize-none focus:outline-none focus:border-green-500 transition"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 mt-2 rounded-lg bg-green-500 text-slate-900 font-semibold hover:bg-green-400 transition"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
