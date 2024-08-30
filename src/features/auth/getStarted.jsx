import React from 'react';

const getstarted = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Pricing plans for TeamPasswords
          </p>
        </div>
        <div className="mt-16 flex justify-center">
          <fieldset className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-blue-400">
            <legend className="sr-only">Payment frequency</legend>
            <label className="cursor-pointer rounded-full px-2.5 py-1">
              <input type="radio" name="frequency" value="monthly" className="sr-only" />
              <span className="text-blue-600">Monthly</span>
            </label>
            <label className="cursor-pointer rounded-full px-2.5 py-1">
              <input type="radio" name="frequency" value="annually" className="sr-only" />
              <span className="text-blue-600">Annually</span>
            </label>
          </fieldset>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="rounded-3xl p-8 ring-1 xl:p-10 ring-gray-300">
            <h3 id="tier-freelancer" className="text-lg font-semibold leading-8 text-blue-600">
              Freelancer
            </h3>
            <p className="mt-4 text-sm leading-6 text-gray-600">
              The essentials to provide your best work for clients.
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-gray-900">$15</span>
              <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
            </p>
            <a
              href="#"
              aria-describedby="tier-freelancer"
              className="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white shadow-sm hover:bg-blue-700 focus-visible:outline-blue-600"
            >
              Buy plan
            </a>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 xl:mt-10 text-gray-600">
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                5 products
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Up to 1,000 subscribers
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Basic analytics
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                48-hour support response time
              </li>
            </ul>
          </div>

          <div className="rounded-3xl p-8 ring-1 xl:p-10 ring-gray-300">
            <h3 id="tier-startup" className="text-lg font-semibold leading-8 text-blue-600">Startup</h3>
            <p className="mt-4 text-sm leading-6 text-gray-600">
              A plan that scales with your rapidly growing business.
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-gray-900">$30</span>
              <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
            </p>
            <a
              href="#"
              aria-describedby="tier-startup"
              className="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white shadow-sm hover:bg-blue-700 focus-visible:outline-blue-600"
            >
              Buy plan
            </a>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 xl:mt-10 text-gray-600">
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                25 products
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a                  .75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Up to 10,000 subscribers
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Advanced analytics
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                24-hour support response time
              </li>
            </ul>
          </div>

          <div className="rounded-3xl p-8 ring-2 xl:p-10 ring-blue-600">
            <h3 id="tier-enterprise" className="text-lg font-semibold leading-8 text-blue-600">Enterprise</h3>
            <p className="mt-4 text-sm leading-6 text-gray-600">
              Dedicated support and infrastructure for large-scale needs.
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-gray-900">$60</span>
              <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
            </p>
            <a
              href="#"
              aria-describedby="tier-enterprise"
              className="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white shadow-sm hover:bg-blue-700 focus-visible:outline-blue-600"
            >
              Buy plan
            </a>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 xl:mt-10 text-gray-600">
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Unlimited products
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Up to 100,000 subscribers
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Priority support
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Dedicated account manager
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  
};

export default getstarted;
