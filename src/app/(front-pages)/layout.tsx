// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'

// Type Imports
import type { ChildrenType } from '@core/types'

// Context Imports
import { IntersectionProvider } from '@/contexts/intersectionContext'

// Component Imports
import Providers from '@components/Providers'

import BlankLayout from '@layouts/BlankLayout'

import FrontLayout from '@components/layout/front-pages'

// Util Imports
import { getSystemMode } from '@core/utils/serverHelpers'

// Style Imports
import '@/app/globals.css'

// Generated Icon CSS Imports
import '@assets/iconify-icons/generated-icons.css'

export const metadata = {
  metadataBase: new URL('https://thestudyhub.nl'),
  alternates: {
    canonical: 'https://thestudyhub.nl',
    languages: {
      'en-US': '/en-US',
      'en-GB': '/en-GB',
    },
  },
  authors: [{ name: 'The Study Hub Team' }],
  category: 'Education',
  keywords: [
    'university tutoring',
    'online education',
    'course-specific tutoring',
    'academic support',
    'university courses',
    'expert tutors',
    'student success',
    'academic excellence',
    'flexible learning',
    'personalized tutoring'
  ],
  creator: 'The Study Hub',
  publisher: 'The Study Hub',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

// Add structured data for the organization
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'The Study Hub',
  url: 'https://thestudyhub.nl',
  logo: '/images/logo.png',
  sameAs: [
    'https://www.instagram.com/studyhub_official',
    'https://www.linkedin.com/company/103106120'
  ],
  description: 'Course-specific tutoring platform connecting students with tutors who took the exact same university courses. Specializing in Dutch universities with focus on Maastricht University and other institutions in the Netherlands.',
  areaServed: {
    '@type': 'Country',
    name: 'Netherlands'
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'Netherlands',
    addressRegion: 'Limburg',
    addressLocality: 'Maastricht'
  },
  knowsAbout: [
    'Course-Specific University Tutoring',
    'Dutch Higher Education',
    'University Course Support',
    'Academic Tutoring Netherlands'
  ]
}

const RootLayout = ({ children }: ChildrenType) => {
  // Vars
  const systemMode = getSystemMode()
  const direction = 'ltr'

  return (
    <html id='__next' lang='en' dir={direction}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className='flex is-full min-bs-full flex-auto flex-col'>
        <Providers direction={direction}>
          <BlankLayout systemMode={systemMode}>
            <IntersectionProvider>
              <FrontLayout>{children}</FrontLayout>
            </IntersectionProvider>
          </BlankLayout>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
