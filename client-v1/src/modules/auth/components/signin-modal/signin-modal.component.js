import { Form, Row, Col, Input, Checkbox, Button } from 'antd';

import Paper from 'core/components/paper/paper.component'
import Info from 'core/components/info/info.component'

import {FormLabel} from 'core/components/form-label/form-label.component'

import './signin-modal.styles.scss'

function SigninModal () { 

    const passsword_desc = `Sua senha deve ter entre 6 e 20 caracteres. Não coloque seu nome, sobrenome, e-mail nem caracteres idênticos e consecutivos.`;

    return (
        <section className="sigin-modal-style">
            <header className="form-register-header">
                <h2>
                    Dados Pessoais
                </h2>
                <a>
                    Já possui uma conta? Então entre     
                </a>
            </header>
            <Paper type="shadow" padding={35}>
                <Form layout="vertical" requiredMark="optional" className="form-create-user" >
                    <Row gutter={[12, 12]}>
                        <Col span={12}> 
                            <Form.Item label={FormLabel('Nome', true, true)} required={true}  >
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col span={12}> 
                            <Form.Item label={FormLabel('Sobrenome', true, true)} required={true}  >
                                <Input/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[12, 12]}>
                        <Col span={12}> 
                            <Form.Item label={FormLabel('CPF', true, true)} required={true}  >
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col span={12}> 
                            <Form.Item label={FormLabel('E-mail', true, true)} required={true}  >
                                <Input/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[12, 12]}>
                        <Col span={12}> 
                            <Form.Item label={FormLabel('Senha', true, true)} required={true}   >
                                <Input.Password  />
                            </Form.Item>
                        </Col>
                        <Col span={12}> 
                            <Form.Item label={FormLabel('Confirma Senha', false, true)} required={true}  >
                                <Input.Password/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[12, 12]}>
                        <Col span={24}> 
                            <Form.Item  required={true}   >
                                <div className="form-item-terms">
                                    <Checkbox/> 
                                    <span>
                                        Aceito os Termos e condições e autorizo o
                                        uso de meus dados de acordo com a Declaração de privacidade. 
                                    </span>
                                </div>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Paper>
            <Button className="custom-register-button">Continuar</Button>
        </section>
       )
}

export default SigninModal