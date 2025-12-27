import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { DoctorLayout } from './components/layout';
import {
  PrivacyPolicy,
  HealthDataInfo,
  DoctorDashboard,
  PatientsPage,
  PatientDetailPage,
  SettingsPage,
} from './pages';
import {
  FinancialControlPage,
  CollaborationsPage,
  MessagesPage,
  SubscriptionSettingsPage,
  AccessRequestsPage,
  CalendarPage,
} from './pages/doctor';
import PublicBookingPage from './pages/public/PublicBookingPage';
import { RichiestaAccessoPage } from './pages/RichiestaAccessoPage';
import { PazienteDashboardPage } from './pages/PazienteDashboardPage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<DoctorLayout />}>
            <Route index element={<DoctorDashboard />} />
            <Route path="patients" element={<PatientsPage />} />
            <Route path="patients/:id" element={<PatientDetailPage />} />
            <Route path="calendar" element={<CalendarPage />} />
            <Route path="messages" element={<MessagesPage />} />
            <Route path="collaborations" element={<CollaborationsPage />} />
            <Route path="financial" element={<FinancialControlPage />} />
            <Route path="subscription-settings" element={<SubscriptionSettingsPage />} />
            <Route path="access-requests" element={<AccessRequestsPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
          <Route path="/richiesta-accesso" element={<RichiestaAccessoPage />} />
          <Route path="/paziente" element={<PazienteDashboardPage />} />
          <Route path="/booking/:doctorId" element={<PublicBookingPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/health-data-info" element={<HealthDataInfo />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
