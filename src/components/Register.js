import { useState, useContext } from 'react';
import { context } from "../context/context";
import { useNavigate } from "react-router-dom";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import "../assets/css/Login.css";

export default function Register() {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const { register } = useContext(context)

    const handleChange = ({ target: {value, name}}) => setUser({ ...user, [name]: value})

    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try {
            await register(user.email, user.password)
            navigate("/")
        } catch{
            setError(error.message)
        }
    }


    return (
        <>
            <Container>
                <Row>
                    <Col>
                    
                    </Col>
                </Row>
            </Container>
        </>
    )
}