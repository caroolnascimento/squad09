import React from 'react';

import icones from './imagens/icones.png';

function rodape() {
    return (
        <div className="container">
            <footer id="rodape">
                <h4 className="text-text-center text-dark font-weight-bold">NÓS ACOMPANHE NAS REDES SOCIAIS!</h4>
                <img width="400px" src={icones} alt="icones" />
                <p>&copy; Recode Pro</p>
            </footer>
        </div>
    )
}

export default rodape;