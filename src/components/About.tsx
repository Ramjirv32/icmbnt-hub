
import { SOCIETY_VISION, SOCIETY_MISSION, CONFERENCE_SCOPE } from '@/lib/constants';
import { FadeUp } from './ui/animation';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-conference-light/20 to-transparent opacity-70"></div>
      
      <div className="section-container relative z-10">
        <FadeUp>
          <h2 className="section-title text-center">
            About <span className="text-conference">ICMBNT-2025</span>
          </h2>
        </FadeUp>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
          <div>
            <FadeUp delay={0.1}>
              <div className="glass-card p-8 h-full">
                <h3 className="text-2xl font-semibold mb-4 text-conference">
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {SOCIETY_VISION}
                </p>
              </div>
            </FadeUp>
          </div>
          
          <div>
            <FadeUp delay={0.2}>
              <div className="glass-card p-8 h-full">
                <h3 className="text-2xl font-semibold mb-4 text-conference">
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {SOCIETY_MISSION}
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
        
        <FadeUp delay={0.3}>
          <div className="glass-card p-8 mb-16">
            <h3 className="text-2xl font-semibold mb-6 text-center text-conference">
              Scope of the Conference
            </h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {CONFERENCE_SCOPE}
            </p>
          </div>
        </FadeUp>
        
        <FadeUp delay={0.4}>
          <div className="bg-conference text-white rounded-2xl p-8 shadow-elevated">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Society for Cyber Intelligent Systems
            </h3>
            <p className="text-lg text-center mb-8">
              Leading the advancement of cybersecurity and intelligent systems through innovation and collaboration.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-5xl font-bold mb-2">10+</div>
                <p className="text-white/90">Research Projects</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-5xl font-bold mb-2">50+</div>
                <p className="text-white/90">Global Partners</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-5xl font-bold mb-2">100+</div>
                <p className="text-white/90">Publications</p>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default About;
