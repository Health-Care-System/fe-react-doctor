import { useState } from "react"
import { useNavigate } from 'react-router-dom'

export const useForm = ({error, fields, redirect}) => {
    
    const [formField, setFormField] = useState(fields)

    if(formField.email === ""){
        return error;
    }

    if(formField.password === ""){
        return error
    }

    const navigate = useNavigate()
    
    return navigate(redirect);



}