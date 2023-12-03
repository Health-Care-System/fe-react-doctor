import { Route, Routes } from "react-router-dom";
import { Layout } from "../layout";
import HomePage from '../pages/Home/HomePage'
import { ChatPage } from "../pages/Chat/ChatPage";
import { ArticlePage } from "../pages/Article/ArticlePage";
import { FeedbackPage } from "../pages/Feedback/FeedbackPage";
import { Chatbody } from "../components/ChatBody";
import { PrivateRoute } from "./PrivateRoute";
import { CreateArticle } from "../pages/Article/CreateArticle";
import { EditArticle } from "../pages/Article/EditArticle";
import { LoginPage } from "../pages/Login/LoginPage";
import { ForgotPasswordPage } from "../pages/ForgotPassword/ForgotPasswordPage";
import { PatientPage } from "../pages/Patient/PatientPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route element={<PrivateRoute />}>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />}>
            <Route path="/chat/user" element={<Chatbody />} />
          </Route>
          <Route path="/patients" element={<PatientPage />} />
          <Route path="/articles" element={<ArticlePage />} />
            <Route path="/articles/create" element={<CreateArticle />} />
            <Route path="/articles/edit/:id" element={<EditArticle />} />
            <Route path="/articles/*" element={<ArticlePage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Route>
    </Routes>
  )
}
