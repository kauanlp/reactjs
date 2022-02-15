import './App.css';
import React from 'react';

import Primeiro from './components/Primeiro'
import ComParamentro from './components/ComParamentro'
import ComFilhos from './components/ComFilhos'
import Repeticao from './components/Repeticao'
import Card from './components/layout/Card'
import Condicional from './components/Condicional';
import CondicionalComIf from './components/CondicionalComIf';


export default (props) => (
    <div className="App">
        <Card titulo="#05.1 Condicional v2">
            <CondicionalComIf numero={10}></CondicionalComIf>
        </Card>
        <Card titulo="#05 Condicional">
            <Condicional numero={10}></Condicional>
        </Card>
        <Card titulo="#04 Repetição">
            <Repeticao></Repeticao>
        </Card>
        <Card titulo="#03 Componente com Filhos">
            <ComFilhos>
                <ul>
                    <li>Kauan</li>
                    <li>Cibelle</li>
                    <li>Vitor</li>
                    <li>Pericles</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#02 Componente com Paramentro">
            <ComParamentro titulo="Esse é o título"
                subtitulo="Esse é o subtítulo" />
        </Card>
        <Card titulo="#01 Primeiro Componente">
            <Primeiro />
        </Card>
    </div>
);