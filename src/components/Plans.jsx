import React from 'react';

const plansData = [
  {
    plan: "Standard plan",
    price: 49,
    period: "month",
    features: [
      { text: "2 team members", available: true },
      { text: "20GB Cloud storage", available: true },
      { text: "API Access", available: false },
      { text: "Complete documentation", available: false },
      { text: "24×7 phone & email support", available: false }
    ]
  },
  {
    plan: "Premium plan",
    price: 99,
    period: "month",
    features: [
      { text: "10 team members", available: true },
      { text: "100GB Cloud storage", available: true },
      { text: "API Access", available: true },
      { text: "Complete documentation", available: false },
      { text: "24×7 phone & email support", available: false }
    ]
  },
  {
    plan: "Enterprise plan",
    price: 199,
    period: "month",
    features: [
      { text: "Unlimited team members", available: true },
      { text: "1TB Cloud storage", available: true },
      { text: "API Access", available: true },
      { text: "Complete documentation", available: true },
      { text: "24×7 phone & email support", available: true }
    ]
  }
];

const Plans = () => {
  return (
    <div className='py-[55px] flex flex-wrap justify-center gap-8'>
      {plansData.map((plan, index) => (
        <div key={index} className='w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-2xl hover:scale-105 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-shadow duration-500 sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
          <h5 className='mb-4 text-xl font-medium text-gray-500 dark:text-gray-400'>{plan.plan}</h5>
          <div className='flex items-baseline text-gray-900 dark:text-white'>
            <span className='text-3xl font-semibold'>$</span>
            <span className='text-5xl font-extrabold tracking-tight'>{plan.price}</span>
            <span className='ms-1 text-xl font-normal text-gray-500 dark:text-gray-400'>/{plan.period}</span>
          </div>
          <ul role='list' className='space-y-5 my-7'>
            {plan.features.map((feature, index) => (
              <li key={index} className={`flex ${feature.available ? '' : 'line-through decoration-gray-500'}`}>
                <svg className={`flex-shrink-0 w-4 h-4 ${feature.available ? 'text-blue-700 dark:text-blue-500' : 'text-gray-400 dark:text-gray-500'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3'>{feature.text}</span>
              </li>
            ))}
          </ul>
          <button type='button' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center'>Choose plan</button>
        </div>
      ))}
    </div>
  );
}

export default Plans;
