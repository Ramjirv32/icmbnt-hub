
import { REGISTRATION_FEES, BANK_DETAILS } from '@/lib/constants';
import { FadeUp } from './ui/animation';

const Registration = () => {
  return (
    <section id="registration" className="py-20 bg-conference-muted relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjAyIj48cGF0aCBkPSJNMzYgMzBoLTZWMGg2djMwem0tMTggMGgtNlYwaDZ2MzB6TTYgNjBIMFYwaDZ2NjB6TTU0IDYwaC02VjBoNnY2MHptMTggMGgtNlYwaDZ2NjB6Ii8+PHBhdGggZD0iTTYwIDM2VjMwSDBoNnY2aDU0ek02MCAxOHYtNkgwdjZoNjB6TTYwIDYwdi02SDB2Nmg2MHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-5 mix-blend-soft-light pointer-events-none"></div>
      
      <div className="section-container relative z-10">
        <FadeUp>
          <h2 className="section-title text-center">
            <span className="text-conference">Registration</span> Information
          </h2>
        </FadeUp>
        
        <FadeUp delay={0.1}>
          <div className="glass-card p-8 mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center text-conference">
              Conference Fee (Excluding Publication Fee)
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-conference-light">
                    <th className="py-3 px-4 text-left text-gray-800 font-semibold border-b border-gray-200">
                      Category
                    </th>
                    <th className="py-3 px-4 text-right text-gray-800 font-semibold border-b border-gray-200">
                      Fee
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {REGISTRATION_FEES.map((fee, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-3 px-4 text-gray-700 border-b border-gray-200">
                        {fee.category}
                      </td>
                      <td className="py-3 px-4 text-right text-gray-700 font-medium border-b border-gray-200">
                        {fee.fee}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 text-sm text-gray-500 italic">
              <p>Note: The authors who are interested to publish their articles in Scopus / WOS extra payment will be charged based on the journal.</p>
              <p className="mt-2">Conference fee includes Conference kit, Certificate, Proceedings, Non-Scopus Journal & lunch with refreshments. These fees do not include accommodation.</p>
            </div>
          </div>
        </FadeUp>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <FadeUp delay={0.2}>
            <div className="glass-card p-8 h-full">
              <h3 className="text-xl font-semibold mb-6 text-conference">
                Bank Details
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="text-gray-500">Bank A/C name</span>
                  <span className="font-medium">{BANK_DETAILS.accountName}</span>
                </div>
                
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="text-gray-500">Bank A/C No</span>
                  <span className="font-medium">{BANK_DETAILS.accountNo}</span>
                </div>
                
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="text-gray-500">Bank Name</span>
                  <span className="font-medium">{BANK_DETAILS.bankName}</span>
                </div>
                
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="text-gray-500">Branch</span>
                  <span className="font-medium">{BANK_DETAILS.branch}</span>
                </div>
                
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="text-gray-500">IFSC Code</span>
                  <span className="font-medium">{BANK_DETAILS.ifscCode}</span>
                </div>
                
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="text-gray-500">SWIFT Code</span>
                  <span className="font-medium">{BANK_DETAILS.swiftCode}</span>
                </div>
              </div>
            </div>
          </FadeUp>
          
          <FadeUp delay={0.3}>
            <div className="glass-card p-8 h-full">
              <h3 className="text-xl font-semibold mb-6 text-conference">
                Registration Process
              </h3>
              
              <div className="space-y-6">
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-conference-muted">
                    <span className="text-xs font-bold text-conference">1</span>
                  </div>
                  <p className="text-gray-700">
                    Make payment through online transfer or demand draft (DD) to the bank account details provided.
                  </p>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-conference-muted">
                    <span className="text-xs font-bold text-conference">2</span>
                  </div>
                  <p className="text-gray-700">
                    Download the Registration form and Copyright form.
                  </p>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-conference-muted">
                    <span className="text-xs font-bold text-conference">3</span>
                  </div>
                  <p className="text-gray-700">
                    Fill out both forms completely.
                  </p>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-conference-muted">
                    <span className="text-xs font-bold text-conference">4</span>
                  </div>
                  <p className="text-gray-700">
                    Email the completed forms along with proof of payment to <a href="mailto:icmbnt2025@gmail.com" className="text-conference hover:underline">icmbnt2025@gmail.com</a>
                  </p>
                </div>
                
                <div className="text-sm text-gray-500 italic mt-6">
                  Note: The payee is accountable for all bank charges.
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
        
        <FadeUp delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="#" 
              className="btn-primary flex items-center justify-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                alert('Registration form will be available soon.');
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Download Registration Form
            </a>
            
            <a 
              href="#" 
              className="btn-secondary flex items-center justify-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                alert('Copyright form will be available soon.');
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Download Copyright Form
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default Registration;
