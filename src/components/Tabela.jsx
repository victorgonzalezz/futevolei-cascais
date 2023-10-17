import { useEffect, useMemo, useState } from 'react';
import atletasData from '../atletas.json';
import './Tabela.css';

export function Tabela() {
    const [, setData] = useState([]);

    const atletasCache = useMemo(() => atletasData, []);

    useEffect(() => {
        // Carrega os dados do arquivo .json
        setData(atletasData);
    }, []);

    function calcularPorcentagemAproveitamento(vitorias, jogos) {
        return (vitorias / jogos) * 100;
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
                        {atletasCache.map((atleta) => (
                            <tr key={atleta.id}>
                                <td>
                                    {atleta.id}
                                    <img className="img" src={atleta.imagem} alt={atleta.nome} />
                                    {atleta.nome}
                                </td>
                                <td>{atleta.jogos}</td>
                                <td>{atleta.vitorias}</td>
                                <td>{atleta.derrotas}</td>
                                <td>{calcularPorcentagemAproveitamento(atleta.vitorias, atleta.jogos).toFixed(1)} %</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default Tabela;
