
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './Pages/Css/App.css';
import Home from './Pages/Home';
import Contato from './Pages/Contato';
import Login from './Pages/Login';
import Servicos from './Pages/Serviços';
import Cadastrese from './Pages/Cadastrese';
import Produtos from './Pages/Produtos';
import NotFound from './Pages/NotFound';
import EditarDados from './Pages/EditarDados';
import CadastrarProdutos from './Pages/CadastrarProdutos';
import CadastrarServicos from './Pages/CadastrarServicos';
import { RecuperarSenha } from './Pages/RecuperarSenha';
import MinhaConta from './Pages/MinhaConta';
import PrivateRoute from './PrivateRoute';


const Rotas = () => {
    return (
        <BrowserRouter>
            <Switch>
                
                <Route exact path="/" component={Home} />
                <Route exact path="/contato" component={Contato} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/servicos" component={Servicos} />
                <Route exact path="/cadastrese" component={Cadastrese} />
                <Route exact path="/produtos" component={Produtos} />
                <PrivateRoute exact path="/editardados" component={EditarDados} />
                <PrivateRoute exact path="/cadastrarprodutos" component={CadastrarProdutos} />
                <PrivateRoute exact path="/cadastrarservicos" component={CadastrarServicos} />
                <Route exact path="/recuperarsenha" component={RecuperarSenha} />
                <PrivateRoute exact path="/minhaconta" component={MinhaConta}/>
                <Route  component={NotFound} />

            </Switch>
        </BrowserRouter>
    );
}
export default Rotas;