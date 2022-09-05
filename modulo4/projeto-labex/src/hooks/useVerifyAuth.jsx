import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const useVerifyAuth = () => {
    const navigate = useNavigate()
    const token = window.localStorage.getItem('token')

    useEffect(() => {
        switch (token) {
            case null || "":
                navigate('/login')
        }
    }, [])
}

export default useVerifyAuth;