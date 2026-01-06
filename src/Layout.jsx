import { Link, useLocation } from "react-router-dom";
import { ArrowLeftIcon, AcademicCapIcon } from "@heroicons/react/24/outline";

const Layout = ({ children }) => {
  const location = useLocation();
  const isDetailsPage =
    location.pathname.includes("/roadmap/") && location.pathname !== "/roadmap";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <AcademicCapIcon className="h-8 w-8 text-blue-600 mr-2" />
                <span className="text-xl font-bold text-gray-800">
                  Open My Network
                </span>
              </Link>
            </div>

            {isDetailsPage && (
              <Link
                to="/"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <ArrowLeftIcon className="h-4 w-4 mr-1" />
                Back to Roadmap
              </Link>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;
