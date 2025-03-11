
import { COMMITTEE_MEMBERS } from '@/lib/constants';
import { FadeUp } from './ui/animation';
import { useState } from 'react';

const Committee = () => {
  const [activeTab, setActiveTab] = useState('chairs');
  
  const tabs = [
    { id: 'chairs', label: 'Chairs' },
    { id: 'advisory', label: 'Advisory Board' },
    { id: 'coordinators', label: 'Coordinators' },
    { id: 'members', label: 'Committee Members' }
  ];
  
  const renderMemberList = (memberType: 'chairs' | 'advisory' | 'coordinators' | 'members') => {
    if (memberType === 'chairs') {
      return (
        <div className="space-y-8">
          {COMMITTEE_MEMBERS.chairs.map((chair, index) => (
            <div key={index} className="mb-8">
              <h4 className="text-lg font-semibold text-conference mb-4">
                {chair.title}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {chair.members.map((member, idx) => (
                  <div 
                    key={idx}
                    className="bg-white/70 backdrop-blur-sm rounded-lg shadow-subtle border border-gray-100 p-5"
                  >
                    <h5 className="font-semibold text-gray-800 mb-1">
                      {member.name}
                    </h5>
                    <p className="text-sm text-gray-600 mb-1">{member.affiliation}</p>
                    <p className="text-sm text-gray-600">{member.organization}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      const data = COMMITTEE_MEMBERS[memberType];
      return (
        <div>
          <h4 className="text-lg font-semibold text-conference mb-4">
            {data.title}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.members.map((member, idx) => (
              <div 
                key={idx}
                className="bg-white/70 backdrop-blur-sm rounded-lg shadow-subtle border border-gray-100 p-5"
              >
                <h5 className="font-semibold text-gray-800 mb-1">
                  {member.name}
                </h5>
                <p className="text-sm text-gray-600 mb-1">{member.affiliation}</p>
                <p className="text-sm text-gray-600">{member.organization}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };
  
  return (
    <section id="committee" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-white via-conference-light/20 to-white opacity-70"></div>
      
      <div className="section-container relative z-10">
        <FadeUp>
          <h2 className="section-title text-center">
            <span className="text-conference">Committee</span> Members
          </h2>
        </FadeUp>
        
        <FadeUp delay={0.1}>
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-lg text-gray-700">
              Meet our distinguished committee members who bring expertise and leadership to ICMBNT 2025.
            </p>
          </div>
        </FadeUp>
        
        <FadeUp delay={0.2}>
          <div className="mb-10">
            <div className="flex overflow-x-auto scrollbar-hide space-x-2 pb-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? 'bg-conference text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </FadeUp>
        
        <FadeUp delay={0.3}>
          <div className="glass-card p-8">
            {activeTab === 'chairs' && renderMemberList('chairs')}
            {activeTab === 'advisory' && renderMemberList('advisory')}
            {activeTab === 'coordinators' && renderMemberList('coordinators')}
            {activeTab === 'members' && renderMemberList('members')}
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default Committee;
