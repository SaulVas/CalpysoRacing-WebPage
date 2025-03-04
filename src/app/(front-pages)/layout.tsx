// Third-party Imports
import "react-perfect-scrollbar/dist/css/styles.css";

// Type Imports
import type { ChildrenType } from "@core/types";

// Context Imports
import { IntersectionProvider } from "@/contexts/intersectionContext";

// Component Imports
import Providers from "@components/Providers";

import BlankLayout from "@layouts/BlankLayout";

import FrontLayout from "@components/layout/front-pages";

// Util Imports
import { getSystemMode } from "@core/utils/serverHelpers";

// Style Imports
import "@/app/globals.css";

// Generated Icon CSS Imports
import "@assets/iconify-icons/generated-icons.css";

export const metadata = {
  metadataBase: new URL("https://calypso-racing.com"),
  alternates: {
    canonical: "https://calypso-racing.com",
    languages: {
      "en-US": "/en-US",
      "en-GB": "/en-GB",
      mt: "/mt",
    },
  },
  authors: [{ name: "Saul Vassallo" }],
  category: "Sports",
  keywords: [
    "offshore racing",
    "sailing malta",
    "600nm races",
    "mediterranean sailing",
    "mumm 30",
    "farr design",
    "royal malta yacht club",
    "rmyc",
    "calypso racing",
    "calypso racing team",
    "calypso",
    "RMYC",
    "rolex middle sea race",
    "rmsr",
    "msr",
    "malta racing team",
    "offshore sailing",
    "sail racing",
    "competitive sailing",
    "offshore regattas",
    "mumm 30 racing yachts",
    "mumm 30 racing yacht",
    "mumm 30 racing",
    "mumm 30",
  ],
  creator: "Saul Vassallo",
  publisher: "Calypso Racing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

// Add structured data for the organization
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsTeam",
  name: "Calypso Racing",
  url: "https://calypso-racing.com",
  logo: "/images/logo.png",
  sameAs: ["https://www.instagram.com/calypso_racing"],
  description:
    "Professional sailing team specializing in 600nm offshore races in the Mediterranean. Based at the Royal Malta Yacht Club (RMYC), racing a modified Mumm 30 sailing yacht.",
  memberOf: {
    "@type": "SportsOrganization",
    name: "Royal Malta Yacht Club",
    url: "https://rmyc.org",
  },
  homeLocation: {
    "@type": "Place",
    name: "Royal Malta Yacht Club",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Malta",
      addressLocality: "Ta' Xbiex",
      streetAddress: "Ta' Xbiex Seafront",
    },
  },
  sport: "Sailing",
  knowsAbout: [
    "Offshore Yacht Racing",
    "Mediterranean Sailing Routes",
    "Mumm 30 Racing Yachts",
    "Farr Yacht Design",
    "600nm Offshore Competitions",
  ],
};

const RootLayout = ({ children }: ChildrenType) => {
  // Vars
  const systemMode = getSystemMode();
  const direction = "ltr";

  return (
    <html id="__next" lang="en" dir={direction}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className="flex is-full min-bs-full flex-auto flex-col">
        <Providers direction={direction}>
          <BlankLayout systemMode={systemMode}>
            <IntersectionProvider>
              <FrontLayout>{children}</FrontLayout>
            </IntersectionProvider>
          </BlankLayout>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
