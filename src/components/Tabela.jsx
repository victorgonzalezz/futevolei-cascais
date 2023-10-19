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
                <table className='tabela'>
                    <thead>
                        <tr>
                            <th>Classificação</th>
                            <th>J</th>
                            <th>V</th>
                            <th>D</th>
                            <th>%</th>
                        </tr>
                    </thead>
                    <tbody>
                        {atletasCache.slice()
                            .sort((a, b) => calcularPorcentagemAproveitamento(b.vitorias, b.jogos) - calcularPorcentagemAproveitamento(a.vitorias, a.jogos))
                            .map((atleta, index) => (
                            <tr key={atleta.id}>
                                <td className='posicao'>
                                        <span className={`numero ${index < 2 ? 'azul' : index === atletasCache.length - 1 ? 'vermelho' : 'cinza'}`}>{index + 1}</span>
                                        <img className="img" src={URL.createObjectURL(new File([atleta.imagem], `${atleta.id}.jpg`))} alt={atleta.nome} />
                                    {atleta.nome}
                                </td>
                                <td className='jogos'>{atleta.jogos}</td>
                                <td className='vitorias'>{atleta.vitorias}</td>
                                <td className='derrotas'>{atleta.derrotas}</td>
                                <td className='percentual'>{calcularPorcentagemAproveitamento(atleta.vitorias, atleta.jogos).toFixed(0)}</td>
                            </tr>
                        ))}
                    </tbody>
                    
                    
                </table>
            </div>
        </section>
    );
}

export default Tabela;
