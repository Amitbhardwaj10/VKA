import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ScrollToTop } from './components/common/ScrollToTop'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ServicesPage } from './pages/ServicesPage'
import { ServiceDetailPage } from './pages/ServiceDetailPage'
import { InsuranceRiskPage } from './pages/services/InsuranceRiskPage'
import { UsAccountingPage } from './pages/services/UsAccountingPage'
import { HedgeAccountingPage } from './pages/services/HedgeAccountingPage'
import { InternationalTaxPage } from './pages/services/InternationalTaxPage'
import { RealEstatePage } from './pages/services/RealEstatePage'
import { ManagementConsultancyPage } from './pages/services/ManagementConsultancyPage'
import { WhyVKAPage } from './pages/WhyVKAPage'
import { ContactPage } from './pages/ContactPage'

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/why-vka" element={<WhyVKAPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
        {/* Dedicated 6 Service Pages */}
        <Route path="/services/insurance-risk-management" element={<InsuranceRiskPage />} />
        <Route path="/services/us-accounting-compliance" element={<UsAccountingPage />} />
        <Route path="/services/us-investment-hedge-accounting" element={<HedgeAccountingPage />} />
        <Route path="/services/international-taxation" element={<InternationalTaxPage />} />
        <Route path="/services/real-estate-investment" element={<RealEstatePage />} />
        <Route path="/services/advisory-management-consultancy" element={<ManagementConsultancyPage />} />

        {/* Fallback Dynamic Route */}
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
