import Menu from "../Componentes/Menu/Menu"
import React from 'react'
import './Css/Contato.css'


const Contato = () => {
    return (
        <>
            <Menu />
            <div className='container container-fluid'>
            <div className='d mt-5  p-3  border box-menu'>
                <h1 className='text-center text-dark font-weight-bold'>ENTRE EM CONTATO CONOSCO</h1>
                <hr/>
                <form action='' method=''>
                    <div className="form- text-dark font-weight-bold">
                        <label for="nome">NOME</label>
                        <input type="name" className="form-control" id="nome" placeholder="Digite seu nome" />
                    </div>
                    <br/>
                    <div className="form- text-dark font-weight-bold">
                        <label for="email">E-MAIL</label>
                        <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                    </div>
                    <br/>
                    <div className="form- text-dark font-weight-bold">
                        <label for="mensagem">MENSAGEM</label>
                        <textarea className="form-control" id="mensagem" rows="3"></textarea>
                    </div>
                    <br/>
                    <button type='submit' className='btn btn-light text-dark font-weight-bold'>ENVIAR</button>
                </form>
                </div>
                </div>
        </>
    )
}
export default Contato;