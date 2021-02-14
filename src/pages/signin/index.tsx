import React, { useRef, useCallback } from 'react'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'
import getValidationErrors from '../../utils/getValidationErrors'
import logoImg from '../../assets/logo.svg'
import Input from '../../components/input'
import Button from '../../components/button'
import { Container, Content, Background } from './styles'

const Signin: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Email obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Senha Obrigatória')
      })

      await schema.validate(data, {
        abortEarly: false,
      })
    } catch (error) {
      //console.log(error)
      const errors = getValidationErrors(error)
      formRef.current?.setErrors(errors)
    }
  }, [])
  return (
    <Container>
      <Content>
        <img src={logoImg} alt='GoBarber' />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>

          <Input name='email' icon={FiMail} placeholder='E-mail'/>
          <Input name='password' icon={FiLock} type='password' placeholder='Senha'/>
          <Button type='submit'>Entrar</Button>
          <a href='forgot'>Esqueci minha senha</a>
        </Form>
        <a href='login'>
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  )
}

export default Signin