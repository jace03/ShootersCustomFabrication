import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ChooseDesign from './pages/ChooseDesign'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import Services from './pages/Services'
import BoldGallery from './sites/bold/BoldGallery'
import BoldLayout from './sites/bold/BoldLayout'
import BoldHome from './sites/bold/BoldHome'
import BoldServices from './sites/bold/BoldServices'
import MinimalGallery from './sites/minimal/MinimalGallery'
import MinimalLayout from './sites/minimal/MinimalLayout'
import MinimalHome from './sites/minimal/MinimalHome'
import MinimalServices from './sites/minimal/MinimalServices'

export default function App() {
  return (
    <Routes>
      <Route index element={<ChooseDesign />} />

      <Route path="/classic" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="gallery" element={<Gallery />} />
      </Route>

      <Route path="/bold" element={<BoldLayout />}>
        <Route index element={<BoldHome />} />
        <Route path="services" element={<BoldServices />} />
        <Route path="gallery" element={<BoldGallery />} />
      </Route>

      <Route path="/minimal" element={<MinimalLayout />}>
        <Route index element={<MinimalHome />} />
        <Route path="services" element={<MinimalServices />} />
        <Route path="gallery" element={<MinimalGallery />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
