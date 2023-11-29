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
  const data = prepareArticleData(form, content);
  if (validateArticleForm(form, content, setError)) {
    try {
      const res = await client.post(`/doctors/articles`, data);
      if (res.status === 201 || res.status === 200) {
        return true;
      }
    } catch (error) {
      console.log(error?.response?.data?.meta?.message);
      return false;
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
        return true;
      }
    } catch (error) {
      console.log(error?.response?.data?.meta?.message);
      return false;
    }
  }
}


export const handleDeleteArticle = async (id, setLoading, queryClient, setModalDelete) => {
  try {
    setLoading(true);
    const res = await client.delete(`/doctors/articles/${id}`);
    if (res.status === 200) {
      queryClient.invalidateQueries({ queryKey: ['articles'] })
    }
  } catch (error) {
    console.log(error?.response?.data?.meta?.message);
  } finally {
    setLoading(false);
    setModalDelete(false);
  }
}