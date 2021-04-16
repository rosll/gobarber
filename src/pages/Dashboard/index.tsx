import React, { useCallback, useRef } from 'react'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import getValidationErrors from '../../utils/getValidationErrors'
import logoImg from '../../assets/logo.svg'
import Input from '../../components/input'
import Button from '../../components/button'
import { Container, Content, Background } from './styles'
import { useAuth } from '../../hooks/AuthContext'

interface CadastroForm {
  disciplina: string;
  professor: string;
  diasemana: string;
  periodo: string;
  horario: string;
}

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const { cadastrar } = useAuth()

  const handleSubmit = useCallback(async (data: CadastroForm) => {
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        disciplina: Yup.string().required('Campo obrigatório'),
        professor: Yup.string().required('Email obrigatório'),
        diasemana: Yup.string().required('Email obrigatório'),
        periodo: Yup.string().required('Email obrigatório'),
        horario: Yup.string().required('Email obrigatório')
      })

      await schema.validate(data, {
        abortEarly: false,
      })

      await cadastrar({
        disciplina: data.disciplina,
        professor: data.professor,
        diasemana: data.diasemana,
        periodo: data.periodo,
        horario: data.horario,
      })
      
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error)
        formRef.current?.setErrors(errors)
      }
    }
  }, [cadastrar])
  return(
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt='GoBarber' />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Cadastro de Disciplinas</h1>

          <Input name='disciplina' placeholder='Disciplina'/>
          <Input name='professor' placeholder='Professor'/>
          <Input name='diasemana' placeholder='Dia da Semana'/>
          <Input name='periodo' placeholder='Período'/>
          <Input name='horario' placeholder='Horário'/>
          <Button type='submit'>Cadastrar</Button>
        </ Form>
      </Content>
    </Container>
  )
}

export default Dashboard