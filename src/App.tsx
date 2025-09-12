
import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import LoadingSpinner from './components/LoadingSpinner';
import ScrollToTop from './components/ScrollToTop';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const MediaCenterPage = lazy(() => import('./pages/MediaCenterPage'));
const ArticleDetailPage = lazy(() => import('./pages/ArticleDetailPage'));
const SupportCenterPage = lazy(() => import('./pages/SupportCenterPage'));
const PlatformPage = lazy(() => import('./pages/PlatformPage'));
const ReagentsPage = lazy(() => import('./pages/ReagentsPage'));
const ReagentDetailPage = lazy(() => import('./pages/ReagentDetailPage'));
const PlatformReagentDetailPage = lazy(() => import('./pages/PlatformReagentDetailPage'));
const DigitalSolutionsPage = lazy(() => import('./pages/DigitalSolutionsPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const ConsumablesPage = lazy(() => import('./pages/ConsumablesPage'));
const MolecularPage = lazy(() => import('./pages/MolecularPage'));
const MolecularDetailPage = lazy(() => import('./pages/MolecularDetailPage'));
const ElisaPage = lazy(() => import('./pages/ElisaPage'));
const ElisaDetailPage = lazy(() => import('./pages/ElisaDetailPage'));
const ClinicalChemistryPage = lazy(() => import('./pages/ClinicalChemistryPage'));
const ClinicalChemistryDetailPage = lazy(() => import('./pages/ClinicalChemistryDetailPage'));
const HematologyPage = lazy(() => import('./pages/HematologyPage'));
const MicrobiologyPage = lazy(() => import('./pages/MicrobiologyPage'));
const ApplicationsPage = lazy(() => import('./pages/ApplicationsPage'));
const ApplicationDetailPage = lazy(() => import('./pages/ApplicationDetailPage'));
const DistributorsPage = lazy(() => import('./pages/DistributorsPage'));
const InstrumentsPage = lazy(() => import('./pages/InstrumentsPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const LegalPage = lazy(() => import('./pages/LegalPage'));
const SitemapPage = lazy(() => import('./pages/SitemapPage'));
const DisclaimerPage = lazy(() => import('./pages/DisclaimerPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TestingInActionPage = lazy(() => import('./pages/TestingInActionPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));


const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-brand-light-bg text-text-primary font-sans antialiased">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Top Tier Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} /> {/* R&D Page */}
              <Route path="/media-center" element={<MediaCenterPage />} />
              <Route path="/media-center/:slug" element={<ArticleDetailPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/distributors" element={<DistributorsPage />} />
              <Route path="/support-center" element={<SupportCenterPage />} />
              
              {/* Bottom Tier Routes */}
              <Route path="/products/platform" element={<PlatformPage />} />
              <Route path="/products/reagents" element={<ReagentsPage />} />
              <Route path="/applications" element={<ApplicationsPage />} />
              <Route path="/applications/:slug" element={<ApplicationDetailPage />} />
              <Route path="/products/digital-solutions" element={<DigitalSolutionsPage />} />
              <Route path="/testing-in-action" element={<TestingInActionPage />} />
              <Route path="/contact" element={<ContactPage />} />

              {/* Lab Solutions (IVD Menu) Routes */}
              <Route path="/products/molecular" element={<MolecularPage />} />
              <Route path="/products/molecular/:slug" element={<MolecularDetailPage />} />
              <Route path="/products/elisa" element={<ElisaPage />} />
              <Route path="/products/elisa/:slug" element={<ElisaDetailPage />} />
              <Route path="/products/clinical-chemistry" element={<ClinicalChemistryPage />} />
              <Route path="/products/clinical-chemistry/:slug" element={<ClinicalChemistryDetailPage />} />
              <Route path="/products/hematology" element={<HematologyPage />} />
              <Route path="/products/microbiology" element={<MicrobiologyPage />} />
              <Route path="/products/instruments" element={<InstrumentsPage />} />
              <Route path="/products/consumables" element={<ConsumablesPage />} />

              {/* Detail pages & other utility pages */}
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/platform/:slug" element={<PlatformReagentDetailPage />} />
              <Route path="/products/reagents/:slug" element={<ReagentDetailPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/legal" element={<LegalPage />} />
              <Route path="/sitemap" element={<SitemapPage />} />
              <Route path="/disclaimer" element={<DisclaimerPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

              {/* Catch-all for 404 */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <BackToTopButton />
      </div>
    </HashRouter>
  );
};

export default App;
