import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './screens/Landing.jsx';
import SignUp from './screens/SignUp.jsx';
import Login from './screens/Login.jsx';
import Verify from './screens/Verify.jsx';
import Onboarding from './screens/Onboarding.jsx';
import Dashboard from './screens/Dashboard.jsx';
import Upload from './screens/Upload.jsx';
import Parsing from './screens/Parsing.jsx';
import ReportDetail from './screens/ReportDetail.jsx';
import DoctorComments from './screens/DoctorComments.jsx';
import Settings from './screens/Settings.jsx';
import EmptyState from './screens/EmptyState.jsx';
import ErrorState from './screens/ErrorState.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/onboarding/:step" element={<Onboarding />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/parsing" element={<Parsing />} />
        <Route path="/report/:id" element={<ReportDetail />} />
        <Route path="/comments" element={<DoctorComments />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/empty" element={<EmptyState />} />
        <Route path="/error" element={<ErrorState />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
