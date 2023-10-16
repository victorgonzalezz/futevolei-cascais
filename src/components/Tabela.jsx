import { useState, useEffect } from 'react';
import atletasData from '../atletas.json';
import './Tabela.css';

export function Tabela() {
    // const [atletas, setAtletas] = useState([]);

    // useEffect(() => {
    //     // Carregue os dados dos atletas do arquivo JSON quando o componente for montado
    //     setAtletas(atletasData);
    // }, []);
    function calcularPorcentagemAproveitamento(vitorias, jogos, derrotas) {
        return ((vitorias - derrotas) / jogos) * 100;
    }

    return (
        <section>
            <div className="tabela-futevolei">
                <table>
                    <thead>
                        <tr>
                            <th>Classificação</th>
                            <th>Jogos</th>
                            <th>Vitórias</th>
                            <th>Derrotas</th>
                            <th>% de Aproveitamento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {atletasData.map((atleta) => (
                            <tr key={atleta.id}>
                                <td>
                                    {atleta.id}
                                    <img className="img" src={atleta.imagem} alt={atleta.nome} />
                                    {atleta.nome}
                                </td>
                                <td>{atleta.jogos}</td>
                                <td>{atleta.vitorias}</td>
                                <td>{atleta.derrotas}</td>
                                <td>{calcularPorcentagemAproveitamento(atleta.vitorias, atleta.jogos, atleta.derrotas).toFixed(0)} %</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default Tabela;
