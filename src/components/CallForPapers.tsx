
import { CALL_FOR_PAPERS, IMPORTANT_DATES } from '@/lib/constants';
import { FadeUp } from './ui/animation';

const CallForPapers = () => {
  return (
    <section id="call-for-papers" className="py-20 bg-conference-muted relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjAyIj48cGF0aCBkPSJNMzYgMzBoLTZWMGg2djMwem0tMTggMGgtNlYwaDZ2MzB6TTYgNjBIMFYwaDZ2NjB6TTU0IDYwaC02VjBoNnY2MHptMTggMGgtNlYwaDZ2NjB6Ii8+PHBhdGggZD0iTTYwIDM2VjMwSDBoNnY2aDU0ek02MCAxOHYtNkgwdjZoNjB6TTYwIDYwdi02SDB2Nmg2MHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-5 mix-blend-soft-light pointer-events-none"></div>
      
      <div className="section-container relative z-10">
        <FadeUp>
          <h2 className="section-title text-center">
            Call for <span className="text-conference">Papers</span>
          </h2>
        </FadeUp>
        
        <FadeUp delay={0.1}>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              {CALL_FOR_PAPERS}
            </p>
          </div>
        </FadeUp>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <FadeUp delay={0.2}>
            <div className="glass-card p-8 h-full">
              <h3 className="text-xl font-semibold mb-6 text-conference">
                Conference Tracks
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-conference"></span>
                  <span className="text-gray-700">Artificial Intelligence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-conference"></span>
                  <span className="text-gray-700">Cybersecurity</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-conference"></span>
                  <span className="text-gray-700">IoT & Smart Systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-conference"></span>
                  <span className="text-gray-700">Data Science & Analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-conference"></span>
                  <span className="text-gray-700">Cloud Computing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-conference"></span>
                  <span className="text-gray-700">Machine Learning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-conference"></span>
                  <span className="text-gray-700">Blockchain Technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-conference"></span>
                  <span className="text-gray-700">Healthcare Innovations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-conference"></span>
                  <span className="text-gray-700">Environmental Technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-conference"></span>
                  <span className="text-gray-700">Education Technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-conference"></span>
                  <span className="text-gray-700">Quantum Computing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-conference"></span>
                  <span className="text-gray-700">Robotics & Automation</span>
                </div>
              </div>
            </div>
          </FadeUp>
          
          <FadeUp delay={0.3}>
            <div className="glass-card p-8 h-full">
              <h3 className="text-xl font-semibold mb-6 text-conference">
                Important Dates
              </h3>
              
              <div className="space-y-6">
                {IMPORTANT_DATES.map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex flex-col sm:flex-row sm:items-center justify-between pb-4 ${
                      index < IMPORTANT_DATES.length - 1 ? 'border-b border-gray-200' : ''
                    }`}
                  >
                    <div className="font-medium text-gray-700 mb-2 sm:mb-0">
                      {item.name}
                    </div>
                    <div className="inline-flex items-center px-3 py-1 bg-conference text-white text-sm font-medium rounded-full">
                      {item.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
        
        <FadeUp delay={0.4}>
          <div className="flex justify-center">
            <a
              href="#paper-submission"
              className="btn-primary flex items-center gap-2"
            >
              Submit Your Paper
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
      </div>
    </section>
  );
};

export default CallForPapers;
