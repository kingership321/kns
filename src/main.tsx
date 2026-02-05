import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { ErrorBoundary } from 'react-error-boundary';

import '../src/index.css';

// Layout & Pages
import RootLayout from '../src/layouts/RootLayout';
import GalleryPage from '../src/pages/GalleryPage';
import NewsEventsPage from '../src/pages/NewsEventsPage';
import CalendarPage from '../src/pages/CalendarPage';
import ContactPage from '../src/pages/ContactPage';
import Home from '../src/pages/Home';

// About Pages (Already created)
import IntroductionPage from '../src/pages/About/subpages/IntroductionPage';
import GoverningBodyMessagePage from '../src/pages/About/subpages/GoverningBodyMessagePage';
import FounderPrincipalMessagePage from '../src/pages/About/subpages/FoundingPrincipalMessage';
import VicePrincipalMessagePage from '../src/pages/About/subpages/VicePrincipalMessagePage';
import ExaminationsPage from '../src/pages/About/subpages/Examinations';
import RulesDisciplinePage from '../src/pages/About/subpages/RulesDisciplinePage';
import FacilitiesPage from '../src/pages/About/subpages/FacilitiesPage';
import ExtraCurricularPage from '../src/pages/About/subpages/ExtraCurricularPage';

import RecentAchievementsPage from '../src/pages/Achievements/subpages/RecentAchievementsPage';
import CoCurricularAchievementsPage from '../src/pages/Achievements/subpages/CoCurricularAchievementsPage';
import DisciplinaryActionPage from '../src/pages/Achievements/subpages/DisciplinaryActionPage';
import RecommendationsPage from '../src/pages/Achievements/subpages/RecommendationsPage';

// Error Fallback Component
import type { FallbackProps } from 'react-error-boundary';


function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h2>
        <p className="text-gray-600 mb-6">{error instanceof Error ? error.message : 'An unknown error occurred'}</p>
        <button
          onClick={resetErrorBoundary}
          className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <a 
            href="/" 
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Go to Homepage
          </a>
        </div>
      </div>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      
      // About Section
      {
        path: 'about/introduction',
        element: <IntroductionPage />,
      },
      {
        path: 'about/governingbodymessage',
        element: <GoverningBodyMessagePage />,
      },
      {
        path: 'about/founder-principal-message',
        element: <FounderPrincipalMessagePage />,
      },
      {
        path: 'about/vice-principal-message',
        element: <VicePrincipalMessagePage />,
      },
      {
        path: 'about/examinations',
        element: <ExaminationsPage />,
      },
      {
        path: 'about/rules-discipline',
        element: <RulesDisciplinePage />,
      },
      {
        path: 'about/facilities',
        element: <FacilitiesPage />,
      },
      {
        path: 'about/extra-curricular',
        element: <ExtraCurricularPage />,
      },
      
      // Achievements Section
      {
        path: 'achievements/recent',
        element: <RecentAchievementsPage />,
      },
      {
        path: 'achievements/co-curricular',
        element: <CoCurricularAchievementsPage />,
      },
      {
        path: 'achievements/disciplinary-action',
        element: <DisciplinaryActionPage />,
      },
      {
        path: 'achievements/recommendations',
        element: <RecommendationsPage />,
      },
      
      // Other Main Pages
      {
        path: 'gallery',
        element: <GalleryPage />,
      },
      {
        path: 'newsandevents',
        element: <NewsEventsPage />,
      },
      {
        path: 'calendar',
        element: <CalendarPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
    ],
  },
]);

// App Component with Error Boundary
function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // Reset the state of your app here
        window.location.href = '/';
      }}
    >
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
