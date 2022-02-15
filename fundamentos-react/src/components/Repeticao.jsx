import React from 'react'

import produtos from '../data/products'

export default props => {

    function getProdutosListItem() {
        return produtos.map(prod => {     //.map serve para transformar um trecho de codigo em jsx
            return <li key={prod.id}>
                {prod.id} - {prod.name} - R$ {prod.price}
            </li>
        })
    }

    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutosListItem()}
            </ul>
        </div>
    )
}