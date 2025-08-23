import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaCalendarAlt, FaShieldAlt, FaUsers, FaBook, FaQuestionCircle, FaChevronDown, FaChevronUp ,FaSyringe , FaHeartbeat , FaBaby } from 'react-icons/fa';
import { useRef, useState } from 'react';

const VaccineEducation = () => {
  const { theme } = useTheme();
  // Vaccine schedule data
  const vaccineSchedule = [
    {
      age: 'At Birth',
      vaccines: ['BCG', 'Hepatitis B (Birth Dose)', 'OPV-0'],
      description: 'Initial protection against tuberculosis, hepatitis B, and polio'
    },
    {
      age: '6 Weeks',
      vaccines: ['DTP-1', 'Hib-1', 'PCV-1', 'Rotavirus-1', 'IPV-1'],
      description: 'First doses of critical vaccines for infants'
    },
    {
      age: '10 Weeks',
      vaccines: ['DTP-2', 'Hib-2', 'PCV-2', 'Rotavirus-2'],
      description: 'Second doses to boost immunity'
    },
    {
      age: '9 Months',
      vaccines: ['Measles', 'Vitamin A'],
      description: 'Protection against measles and vitamin supplementation'
    },
    {
      age: '12-15 Months',
      vaccines: ['MMR', 'PCV Booster', 'Hepatitis A'],
      description: 'Additional protection as immune system develops'
    }
  ];


  //Vaccine details

  const vaccineDetails = [
    {
      name: 'BCG',
      age: 'At Birth',
      diseases: 'Tuberculosis (TB)',
      benefits: ['Prevents severe TB in children', 'Reduces TB meningitis risk'],
      sideEffects: 'Minor swelling or scar at injection site',
      icon: <FaSyringe className="text-red-500 text-2xl" />
    },
    {
      name: 'DTP',
      age: '6-10 Weeks',
      diseases: 'Diphtheria, Tetanus, Pertussis',
      benefits: ['Prevents deadly bacterial infections', 'Protects from whooping cough'],
      sideEffects: 'Mild fever, swelling at injection site',
      icon: <FaHeartbeat className="text-pink-500 text-2xl" />
    },
    {
      name: 'MMR',
      age: '12-15 Months',
      diseases: 'Measles, Mumps, Rubella',
      benefits: ['Prevents outbreaks', 'Lifelong protection'],
      sideEffects: 'Fever, mild rash',
      icon: <FaBaby className="text-yellow-500 text-2xl" />
    }
  ];

  // Vaccine benefits
  const vaccineBenefits = [
  {
    icon: <FaShieldAlt className="text-blue-500 text-2xl" />,
    title: 'Protects Lives',
    description: 'Vaccines save 2–3 million lives each year by preventing deadly diseases like measles, tetanus, and influenza.'
  },
  {
    icon: <FaUsers className="text-green-500 text-2xl" />,
    title: 'Builds Community Immunity',
    description: 'When more people are vaccinated, it limits the spread — protecting those who are too young or sick to be vaccinated.'
  },
  {
    icon: <FaCalendarAlt className="text-purple-500 text-2xl" />,
    title: 'Lifelong Defense',
    description: 'Most childhood vaccines offer protection for life, reducing future hospital visits and health expenses.'
  },
  {
    icon: <FaBook className="text-yellow-500 text-2xl" />,
    title: 'Educated Decisions',
    description: 'Getting vaccinated helps families make proactive, science-backed choices for long-term health and safety.'
  },
  {
    icon: <FaHeartbeat className="text-red-500 text-2xl" />,
    title: 'Stronger Immune System',
    description: 'Vaccines train the body to fight real infections without causing illness, especially during early childhood.'
  },
  {
    icon: <FaQuestionCircle className="text-indigo-500 text-2xl" />,
    title: 'Trusted by Experts',
    description: 'Backed by decades of research and approval from global health organizations like WHO and CDC.'
  }
];


  // FAQ section
  const faqs = [
    {
      question: 'Are vaccines safe?',
      answer: 'Yes, vaccines undergo rigorous testing and continuous monitoring to ensure safety. Serious side effects are extremely rare.'
    },
    {
      question: 'Why do vaccines start so early?',
      answer: 'Newborns are vulnerable to diseases. Early vaccination protects them when they are most at risk.'
    },
    {
      question: 'Can vaccines overload a child\'s immune system?',
      answer: 'No, children\'s immune systems handle many more antigens daily than vaccines contain.'
    }
  ];
  
  // Accordion state
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
  <div className={`max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 vaccine-education ${theme === 'dark' ? 'dark' : ''}`}>
      {/* Hero Section */}
      <div className="text-center py-12 bg-blue-50 rounded-xl mb-12 vaccine-hero">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Vaccine Education Center</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Comprehensive resources about vaccine schedules, benefits, and community health impact
        </p>
      </div>

      {/* Vaccine Schedule Section */}
      <section className="mb-16 vaccine-schedule">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
          <FaCalendarAlt className="mr-3 text-blue-500" />
          Recommended Vaccine Schedule
        </h2>
        <div className="bg-white shadow overflow-hidden rounded-lg vaccine-table">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vaccines</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              {vaccineSchedule.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">{item.age}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-2">
                      {item.vaccines.map((vaccine, i) => (
                        <span key={i} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded">
                          {vaccine}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      

      {/* Popular Vaccines */}
      <section className="mb-16 vaccine-popular">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
          <FaSyringe className="mr-3 text-red-500" />
          Popular Vaccines Explained
        </h2>
        <div className="grid md:grid-cols-3 gap-8 vaccine-popular-list">
          {vaccineDetails.map((vaccine, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="mb-4">{vaccine.icon}</div>
              <h3 className="text-xl font-semibold mb-1">{vaccine.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Given: {vaccine.age}</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><strong>Protects against:</strong> {vaccine.diseases}</p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-2">
                {vaccine.benefits.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">Side Effects: {vaccine.sideEffects}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
          <FaShieldAlt className="mr-3 text-green-500" />
          Benefits of Vaccination
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {vaccineBenefits.map((benefit, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Community Impact Section */}
      <section className="mb-16 bg-blue-50 dark:bg-gray-800 p-8 rounded-xl">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Community Health Impact</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Vaccination doesn't just protect individuals—it protects entire communities through herd immunity. When vaccination rates are high:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Diseases can't spread easily through the population</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Vulnerable individuals are protected (newborns, elderly, immunocompromised)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Diseases can be eliminated entirely (like smallpox was in 1980)</span>
              </li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-center dark:text-white">Vaccination Coverage Impact</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span>Disease Spread</span>
                  <span>95% coverage</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-red-600 h-2.5 rounded-full" style={{ width: '5%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Herd Immunity</span>
                  <span>80% coverage</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '20%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Outbreak Risk</span>
                  <span>60% coverage</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
          <FaQuestionCircle className="mr-3 text-purple-500" />
          Frequently Asked Questions
        </h2>

   <div>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const contentRef = useRef(null);

        return (
          <div
            key={index}
            className={`transition-all duration-200 rounded-r-md ${
              isOpen
                ? "bg-purple-50 dark:bg-gray-800 border-l-4 border-purple-400"
                : "bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700"
            }`}
          >
            <button
              className="flex justify-between items-center w-full p-4 text-left cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {faq.question}
              </h3>
              {isOpen ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </button>

            <div
              ref={contentRef}
              className="overflow-hidden transition-all duration-300 ease-in-out px-4"
              style={{
                height: isOpen
                  ? `${contentRef.current?.scrollHeight}px`
                  : "0px",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <p className="py-2 text-gray-700 mb-4">{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
</section>

      {/* Resources Section */}
      <section className="bg-white p-8 rounded-xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
          <FaBook className="mr-3 text-blue-500" />
          Additional Resources
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          {/* Category 1 */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Official Guidelines</h3>
            <ul className="space-y-2">
              <li>
          <a href="https://www.who.int/health-topics/vaccines-and-immunization"
            target="_blank" rel="noopener noreferrer"
            className="text-blue-600 hover:underline"> WHO : Vaccines and Immunization
          </a>
        </li>
        <li>
          <a href="https://www.who.int/news-room/fact-sheets/detail/immunization-coverage"
            target="_blank" rel="noopener noreferrer"
            className="text-blue-600 hover:underline"> WHO : Immunization Coverage Fact Sheet
          </a>
        </li>
        <li>
          <a href="https://www.cdc.gov/vaccines-children/hcp/conversation-tips/index.html"
            target="_blank" rel="noopener noreferrer"
            className="text-blue-600 hover:underline"> CDC : Talking with Parents about Vaccines
          </a>
        </li>
            </ul>
          </div>
          {/* Category 2 */}
          <div className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-3 text-green-700">Educational Materials</h3>
            <ul className="space-y-2">
              <li>
          <a href="https://www.immunize.org/clinical/topic/parent-handouts/"
            target="_blank" rel="noopener noreferrer"
            className="text-green-600 hover:underline"> Immunize.org : Parent Handouts
          </a>
        </li>
        <li>
          <a href="https://www.who.int/news-room/feature-stories/detail/how-to-talk-about-vaccines"
            target="_blank" rel="noopener noreferrer"
            className="text-green-600 hover:underline"> WHO : How to Talk About Vaccines
          </a>
        </li>
        <li>
          <a href="https://vaccineinformation.org/"
            target="_blank" rel="noopener noreferrer"
            className="text-green-600 hover:underline"> Immunization Action Coalition : Info for the Public
          </a>
        </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VaccineEducation;