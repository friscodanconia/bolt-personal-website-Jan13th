import React from 'react';
import { MapPin } from 'lucide-react';
import { aboutData } from '../data/personalData';
import { MobileHeader } from './MobileHeader';
import { useMediaQuery } from '../hooks/useMediaQuery';

export function AboutMe() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className="max-w-3xl mx-auto">
      {isMobile && <MobileHeader title="About Me" />}
      <div className="p-8 md:p-6 lg:p-8">
        <header className="mb-12 md:mb-8 lg:mb-12">
          <div className="flex items-center space-x-2 mb-4">
            <MapPin className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            <h1 className="text-base font-medium text-gray-900 dark:text-gray-100">About Me</h1>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            My name is {aboutData.name}
          </p>
        </header>

        <section className="mb-12 md:mb-8 lg:mb-12">
          <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mb-4">Currently</h2>
          <ul className="space-y-3">
            {aboutData.currently.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  • {item.text}
                  {item.company && (
                    <> at <a href={item.companyLink} className="text-amber-600 dark:text-amber-400 hover:underline">{item.company}</a></>
                  )}
                  {item.project && (
                    <>, building <a href={item.projectLink} className="text-amber-600 dark:text-amber-400 hover:underline">{item.project}</a></>
                  )}
                  {item.location && (
                    <> <a href={item.locationLink} className="text-amber-600 dark:text-amber-400 hover:underline">{item.location}</a></>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12 md:mb-8 lg:mb-12">
          <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mb-4">Previously</h2>
          <ul className="space-y-4 md:space-y-3 lg:space-y-4">
            {aboutData.previously.map((item, index) => (
              <li key={index}>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {item.role} at <a href={item.companyLink} className="text-amber-600 dark:text-amber-400 hover:underline">{item.company}</a>
                  <span className="text-gray-500 dark:text-gray-400"> ({item.period})</span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mb-4">Education</h2>
          <ul className="space-y-4 md:space-y-3 lg:space-y-4">
            {aboutData.education.map((item, index) => (
              <li key={index}>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {item.degree} from <a href={item.schoolLink} className="text-amber-600 dark:text-amber-400 hover:underline">{item.school}</a>
                  {item.period && <span className="text-gray-500 dark:text-gray-400"> ({item.period})</span>}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}