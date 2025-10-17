import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  User,
  Mail,
  Phone,
  Sparkles,
  Rocket,
  CheckCircle2,
  Brain,
  Link2,
  GraduationCap,
  Heart,
  Coins,
  Code,
  Monitor,
  Smartphone,
  Laptop,
  Globe,
  FileText,
  Upload,
  DollarSign,
  Calendar,
  Briefcase
} from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  industry: string;
  technologies: string[];
  platforms: string[];
  projectName: string;
  projectDetails: string;
  timeline: string;
  budgetRange: string;
  documents: File[];
}

const WelcomeOnboard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    industry: '',
    technologies: [],
    platforms: [],
    projectName: '',
    projectDetails: '',
    timeline: '',
    budgetRange: '',
    documents: []
  });

  const industries = [
    { id: 'ai-ml', label: 'AI/ML', icon: Brain, gradient: 'from-purple-500 to-pink-500' },
    { id: 'blockchain', label: 'Blockchain', icon: Link2, gradient: 'from-blue-500 to-cyan-500' },
    { id: 'edtech', label: 'EdTech', icon: GraduationCap, gradient: 'from-green-500 to-emerald-500' },
    { id: 'healthtech', label: 'HealthTech', icon: Heart, gradient: 'from-red-500 to-rose-500' },
    { id: 'fintech', label: 'FinTech', icon: Coins, gradient: 'from-yellow-500 to-orange-500' },
    { id: 'ecommerce', label: 'E-Commerce', icon: Briefcase, gradient: 'from-indigo-500 to-purple-500' },
    { id: 'saas', label: 'SaaS', icon: Globe, gradient: 'from-teal-500 to-cyan-500' },
    { id: 'other', label: 'Other', icon: Code, gradient: 'from-gray-500 to-slate-500' }
  ];

  const technologies = [
    'React', 'Vue.js', 'Angular', 'Node.js', 'Python', 'Django',
    'Ruby on Rails', 'PHP', 'Java', 'Swift', 'Kotlin', 'Flutter',
    'React Native', '.NET', 'Go', 'Rust', 'TypeScript', 'GraphQL'
  ];

  const platforms = [
    { id: 'web', label: 'Web Application', icon: Globe },
    { id: 'mobile', label: 'Mobile App (iOS/Android)', icon: Smartphone },
    { id: 'desktop', label: 'Desktop Application', icon: Laptop },
    { id: 'hybrid', label: 'Hybrid/Cross-Platform', icon: Monitor }
  ];

  const budgetRanges = [
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    '$250,000+'
  ];

  const stepContent = [
    {
      title: 'Welcome to Your Journey',
      description: 'Let\'s start by getting to know you better. Your contact information helps us provide personalized service.',
      features: [
        'Personalized project management',
        'Dedicated support team',
        'Real-time collaboration'
      ],
      gradient: 'from-brand-500 via-brand-600 to-purple-600',
      illustration: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 to-purple-600/20 rounded-3xl blur-3xl animate-pulse" />
          <div className="relative">
            <div className="w-48 h-48 bg-gradient-to-br from-brand-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl animate-float">
              <Rocket className="w-24 h-24 text-white" />
            </div>
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl animate-bounce-slow">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-xl animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Define Your Vision',
      description: 'Tell us about your project domain and technical requirements. This helps us match you with the right expertise.',
      features: [
        'Industry-specific solutions',
        'Expert technology consultation',
        'Scalable architecture planning'
      ],
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      illustration: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl animate-pulse" />
          <div className="grid grid-cols-2 gap-6">
            {[Brain, Code, Globe, Smartphone].map((Icon, index) => (
              <div
                key={index}
                className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Icon className="w-16 h-16 text-white" />
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: 'Project Blueprint',
      description: 'Share your project details and requirements. The more we know, the better we can serve you.',
      features: [
        'Detailed project analysis',
        'Accurate timeline estimation',
        'Transparent pricing'
      ],
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      illustration: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-3xl blur-3xl animate-pulse" />
          <div className="relative">
            <div className="w-64 h-64 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-3xl flex flex-col items-center justify-center shadow-2xl p-8 transform hover:rotate-3 transition-transform duration-300">
              <FileText className="w-24 h-24 text-white mb-4" />
              <div className="space-y-2 w-full">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-3 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-xl animate-spin-slow">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      )
    }
  ];

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Onboarding completed! We will get back to you soon.');
  };

  const toggleArrayItem = (array: string[], item: string) => {
    return array.includes(item)
      ? array.filter(i => i !== item)
      : [...array, item];
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, documents: Array.from(e.target.files) });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          <div className={`relative bg-gradient-to-br ${stepContent[currentStep - 1].gradient} rounded-3xl p-12 shadow-2xl min-h-[600px] flex flex-col justify-between animate-fade-in`}>
            <div className="absolute inset-0 bg-black/5 rounded-3xl" />

            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-semibold">Step {currentStep} of 3</span>
              </div>

              <h2 className="text-4xl font-bold text-white mb-4">
                {stepContent[currentStep - 1].title}
              </h2>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                {stepContent[currentStep - 1].description}
              </p>

              <div className="space-y-4">
                {stepContent[currentStep - 1].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-6 h-6 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-12">
              {stepContent[currentStep - 1].illustration}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 animate-fade-in">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                {[1, 2, 3].map((step) => (
                  <React.Fragment key={step}>
                    <div className="flex flex-col items-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                        step === currentStep
                          ? 'bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-lg scale-110'
                          : step < currentStep
                            ? 'bg-success-500 text-white'
                            : 'bg-neutral-200 text-neutral-500'
                      }`}>
                        {step < currentStep ? <CheckCircle2 className="w-6 h-6" /> : step}
                      </div>
                      <span className={`text-xs mt-2 font-semibold ${
                        step === currentStep ? 'text-brand-600' : step < currentStep ? 'text-success-600' : 'text-neutral-400'
                      }`}>
                        {step === 1 ? 'Personal' : step === 2 ? 'Project Type' : 'Details'}
                      </span>
                    </div>
                    {step < 3 && (
                      <div className={`flex-1 h-1 mx-2 rounded-full transition-all duration-300 ${
                        step < currentStep ? 'bg-success-500' : 'bg-neutral-200'
                      }`} />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="min-h-[400px]">
              {currentStep === 1 && (
                <div className="space-y-6 animate-slide-in">
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">Personal Information</h3>
                    <p className="text-neutral-600">Let's start with the basics</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">First Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                        <input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full pl-12 pr-4 py-3.5 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                          placeholder="John"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">Last Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full pl-12 pr-4 py-3.5 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-12 pr-4 py-3.5 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-12 pr-4 py-3.5 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6 animate-slide-in">
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">Project Specification</h3>
                    <p className="text-neutral-600">What are you looking to build?</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-3">Industry Type</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {industries.map((industry) => {
                        const Icon = industry.icon;
                        const isSelected = formData.industry === industry.id;
                        return (
                          <button
                            key={industry.id}
                            onClick={() => setFormData({ ...formData, industry: industry.id })}
                            className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                              isSelected
                                ? 'border-brand-500 bg-brand-50 shadow-md scale-105'
                                : 'border-neutral-200 hover:border-brand-300 hover:bg-brand-50/50'
                            }`}
                          >
                            <div className={`w-12 h-12 bg-gradient-to-br ${industry.gradient} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xs font-semibold text-neutral-700">{industry.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-3">Technologies (Select multiple)</label>
                    <div className="flex flex-wrap gap-2 p-4 border border-neutral-200 rounded-xl bg-neutral-50 max-h-48 overflow-y-auto">
                      {technologies.map((tech) => (
                        <button
                          key={tech}
                          onClick={() => setFormData({ ...formData, technologies: toggleArrayItem(formData.technologies, tech) })}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                            formData.technologies.includes(tech)
                              ? 'bg-brand-500 text-white shadow-md'
                              : 'bg-white text-neutral-700 border border-neutral-200 hover:border-brand-300'
                          }`}
                        >
                          {tech}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-3">Platform (Select multiple)</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {platforms.map((platform) => {
                        const Icon = platform.icon;
                        const isSelected = formData.platforms.includes(platform.id);
                        return (
                          <button
                            key={platform.id}
                            onClick={() => setFormData({ ...formData, platforms: toggleArrayItem(formData.platforms, platform.id) })}
                            className={`p-4 rounded-xl border-2 transition-all duration-200 flex items-center space-x-3 ${
                              isSelected
                                ? 'border-brand-500 bg-brand-50 shadow-md'
                                : 'border-neutral-200 hover:border-brand-300 hover:bg-brand-50/50'
                            }`}
                          >
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                              isSelected ? 'bg-brand-500' : 'bg-neutral-200'
                            }`}>
                              <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-neutral-600'}`} />
                            </div>
                            <span className="text-sm font-semibold text-neutral-700">{platform.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6 animate-slide-in">
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">Project Details</h3>
                    <p className="text-neutral-600">Tell us more about your vision</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">Project Name</label>
                    <div className="relative">
                      <Briefcase className="absolute left-4 top-4 w-5 h-5 text-neutral-400" />
                      <input
                        type="text"
                        value={formData.projectName}
                        onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                        className="w-full pl-12 pr-4 py-3.5 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                        placeholder="My Awesome Project"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">Project Description</label>
                    <div className="relative">
                      <FileText className="absolute left-4 top-4 w-5 h-5 text-neutral-400" />
                      <textarea
                        value={formData.projectDetails}
                        onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                        rows={4}
                        className="w-full pl-12 pr-4 py-3.5 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Describe your project goals, features, and requirements..."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">Timeline</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full pl-12 pr-4 py-3.5 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent appearance-none cursor-pointer bg-white"
                        >
                          <option value="">Select timeline</option>
                          <option value="1-3">1-3 months</option>
                          <option value="3-6">3-6 months</option>
                          <option value="6-12">6-12 months</option>
                          <option value="12+">12+ months</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">Budget Range</label>
                      <div className="relative">
                        <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                        <select
                          value={formData.budgetRange}
                          onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                          className="w-full pl-12 pr-4 py-3.5 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent appearance-none cursor-pointer bg-white"
                        >
                          <option value="">Select budget</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">Project Documents (Optional)</label>
                    <div className="relative">
                      <input
                        type="file"
                        multiple
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                      />
                      <label
                        htmlFor="file-upload"
                        className="w-full p-6 border-2 border-dashed border-neutral-300 rounded-xl hover:border-brand-400 hover:bg-brand-50/50 transition-all duration-200 cursor-pointer flex flex-col items-center justify-center space-y-2"
                      >
                        <Upload className="w-8 h-8 text-neutral-400" />
                        <span className="text-sm font-medium text-neutral-600">
                          {formData.documents.length > 0
                            ? `${formData.documents.length} file(s) selected`
                            : 'Click to upload or drag and drop'
                          }
                        </span>
                        <span className="text-xs text-neutral-500">PDF, DOC, or images up to 10MB</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex space-x-4 mt-8">
              {currentStep > 1 && (
                <button
                  onClick={handlePrevious}
                  className="flex-1 px-6 py-4 border-2 border-neutral-300 text-neutral-700 rounded-xl hover:bg-neutral-50 font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Previous</span>
                </button>
              )}

              {currentStep < 3 ? (
                <button
                  onClick={handleNext}
                  className="flex-1 bg-gradient-to-r from-brand-500 to-brand-600 text-white px-6 py-4 rounded-xl hover:from-brand-600 hover:to-brand-700 font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="flex-1 bg-gradient-to-r from-success-500 to-emerald-600 text-white px-6 py-4 rounded-xl hover:from-success-600 hover:to-emerald-700 font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Complete Onboarding</span>
                  <CheckCircle2 className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeOnboard;
