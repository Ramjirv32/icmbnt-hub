
import { CONFERENCE_DETAILS } from '@/lib/constants';
import { FadeIn, FadeUp } from './ui/animation';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 flex items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-conference-light via-white to-white opacity-70 z-0"></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="inline-block px-3 py-1 text-sm font-medium bg-conference-muted text-conference rounded-full mb-6">
              Hybrid Conference (In-person + Virtual)
            </p>
          </FadeIn>
          
          <FadeUp delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              <span className="block text-conference">ICMBNT-2025</span>
              <span className="text-2xl md:text-3xl lg:text-4xl block mt-2">
                International Conference on
              </span>
              <span className="block mt-2">
                Multidisciplinary Breakthroughs and NextGen Technologies
              </span>
            </h1>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <p className="text-xl md:text-2xl font-medium text-gray-700 mb-8">
              {CONFERENCE_DETAILS.date}
            </p>
          </FadeUp>
          
          <FadeUp delay={0.3}>
            <div className="bg-white/80 backdrop-blur-sm shadow-subtle border border-gray-100 rounded-xl px-6 py-5 mb-8">
              <p className="text-lg text-gray-800">
                <span className="font-medium">Venue:</span> {CONFERENCE_DETAILS.venue}
              </p>
            </div>
          </FadeUp>
          
          <FadeUp delay={0.4}>
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-8">
              <a 
                href="#paper-submission" 
                className="btn-primary flex items-center justify-center gap-2"
              >
                Submit Paper
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </a>
              <a 
                href="#registration" 
                className="btn-secondary flex items-center justify-center gap-2"
              >
                Register Now
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </a>
            </div>
          </FadeUp>
          
          <FadeUp delay={0.5}>
            <div className="flex flex-col items-center">
              <p className="text-gray-600 mb-2">Organized by</p>
              <p className="text-lg font-medium text-gray-800">
                {CONFERENCE_DETAILS.organizer}
              </p>
              <p className="text-gray-600">
                {CONFERENCE_DETAILS.organizerLocation}
              </p>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-16 w-32 h-32 bg-conference/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/4 -right-16 w-64 h-64 bg-conference/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
