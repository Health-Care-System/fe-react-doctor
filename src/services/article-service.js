import { redirect } from "react-router-dom";
import client from "../utils/auth";
import { validateArticleForm } from "../utils/validation";

const prepareArticleData = (form, content) => {
  const data = new FormData();
  data.append('title', form.title);
  data.append('content', content);
  data.append('image', form.image);
  return data;
};

export const handlePostArticle = async (
  form,
  content,
  setError,
) => {
  console.log(form, content, setError)
  const data = prepareArticleData(form, content);
  if (validateArticleForm(form, content, setError)) {
    try {
      const res = await client.post(`/doctors/articles`, data);
      if (res.status === 201 || res.status === 200) {
        redirect('/articles')
      }
    } catch (error) {
      console.log(error);
    }
  }
}
export const handleEditArticle = async (
  form,
  content,
  idArticle,
  setError,
) => {
  const data = prepareArticleData(form, content);
  if (validateArticleForm(form, content, setError)) {
    try {
      const res = await client.put(`/doctors/articles/${idArticle}`, data);
      if (res.status === 201 || res.status === 200) {
        redirect('/articles')
      }
    } catch (error) {
      console.log(error);
    }
  }
}