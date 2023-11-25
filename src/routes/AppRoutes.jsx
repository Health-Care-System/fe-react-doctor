import { Route, Routes } from "react-router-dom";
import HomePage from '../pages/Home/HomePage'
import LoginPage from "../pages/Login/LoginPage";
import PatientPage from "../pages/Patient/PatientPage";
import SettingPage from "../pages/Setting/SettingPage";
import { Layout } from "../layout";
import { ChatPage } from "../pages/Chat/ChatPage";
import { ArticlePage } from "../pages/Article/ArticlePage";
import { FeedbackPage } from "../pages/Feedback/FeedbackPage";
import { Chatbody } from "../components/ChatBody";
import { PrivateRoute } from "./PrivateRoute";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<PrivateRoute />}>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />}>
            <Route path="/chat/user" element={<Chatbody />} />
          </Route>
          <Route path="/patients" element={<PatientPage />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/settings" element={<SettingPage />} />
        </Route>
      </Route>
    </Routes>
  )
}