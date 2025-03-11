
import { PAPER_SUBMISSION_INTRO, SUBMISSION_INSTRUCTIONS } from '@/lib/constants';
import { FadeUp } from './ui/animation';

const PaperSubmission = () => {
  return (
    <section id="paper-submission" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-conference-light/20 to-transparent opacity-50"></div>
      
      <div className="section-container relative z-10">
        <FadeUp>
          <h2 className="section-title text-center">
            Paper <span className="text-conference">Submission</span>
          </h2>
        </FadeUp>
        
        <FadeUp delay={0.1}>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              {PAPER_SUBMISSION_INTRO}
            </p>
          </div>
        </FadeUp>
        
        <FadeUp delay={0.2}>
          <div className="glass-card p-8 mb-12">
            <h3 className="text-xl font-semibold mb-6 text-conference">
              Instructions to Authors
            </h3>
            
            <ol className="space-y-4">
              {SUBMISSION_INSTRUCTIONS.map((instruction, index) => (
                <li key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-conference text-white rounded-full flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed flex-1 pt-0.5">
                    {instruction}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </FadeUp>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <FadeUp delay={0.3}>
            <div className="glass-card p-8 h-full">
              <h3 className="text-xl font-semibold mb-6 text-conference">
                Paper Format
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-conference flex-shrink-0 mt-0.5" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                  <p className="text-gray-700">
                    The manuscript must be prepared in <strong>double-column format</strong> with a maximum of 12 pages.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-conference flex-shrink-0 mt-0.5" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                  <p className="text-gray-700">
                    All figures, tables, and references must be properly numbered and cited in the text.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-conference flex-shrink-0 mt-0.5" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                  <p className="text-gray-700">
                    The paper should include an abstract of 150-250 words, clearly stating the objective, methodology, results, and conclusion.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-conference flex-shrink-0 mt-0.5" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                  <p className="text-gray-700">
                    Papers must be submitted in PDF format.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-conference flex-shrink-0 mt-0.5" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                  <p className="text-gray-700">
                    Include 4-6 keywords that best describe the content of your paper.
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
          
          <FadeUp delay={0.4}>
            <div className="glass-card p-8 h-full">
              <h3 className="text-xl font-semibold mb-6 text-conference">
                Review Process
              </h3>
              
              <div className="space-y-6">
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-conference-muted">
                    <span className="text-xs font-bold text-conference">1</span>
                  </div>
                  <h4 className="text-lg font-medium mb-2">
                    Initial Screening
                  </h4>
                  <p className="text-gray-700">
                    Papers are screened for plagiarism and to ensure they meet the basic submission requirements.
                  </p>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-conference-muted">
                    <span className="text-xs font-bold text-conference">2</span>
                  </div>
                  <h4 className="text-lg font-medium mb-2">
                    Peer Review
                  </h4>
                  <p className="text-gray-700">
                    Each paper undergoes a double-blind peer review process by 2-3 reviewers.
                  </p>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-conference-muted">
                    <span className="text-xs font-bold text-conference">3</span>
                  </div>
                  <h4 className="text-lg font-medium mb-2">
                    Decision Notification
                  </h4>
                  <p className="text-gray-700">
                    Authors are notified of the decision: accept, revise, or reject.
                  </p>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-conference-muted">
                    <span className="text-xs font-bold text-conference">4</span>
                  </div>
                  <h4 className="text-lg font-medium mb-2">
                    Final Submission
                  </h4>
                  <p className="text-gray-700">
                    Authors of accepted papers submit a camera-ready version incorporating reviewers' feedback.
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
        
        <FadeUp delay={0.5}>
          <div className="bg-conference text-white rounded-2xl p-8 text-center shadow-elevated">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to Submit?
            </h3>
            <p className="text-lg mb-6 text-white/90">
              Email your manuscript to:
            </p>
            <a 
              href="mailto:icmbnt2025@gmail.com" 
              className="inline-block bg-white text-conference font-semibold px-8 py-3 rounded-xl transition-all hover:bg-gray-100"
            >
              icmbnt2025@gmail.com
            </a>
            <p className="mt-4 text-white/80">
              Submission Deadline: March 15, 2025
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default PaperSubmission;
