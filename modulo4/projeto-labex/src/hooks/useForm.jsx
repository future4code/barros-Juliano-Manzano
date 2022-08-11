import { useState } from "react";

const useForm = (iniState) => {
    const [form, setForm] = useState(iniState)

    const handleUserInput = (e) => {
        const { name, value } = e.target

        setForm({
            ...form,
            [name]: value
        })
    }
    return [ form , handleUserInput ]
}

export default useForm;