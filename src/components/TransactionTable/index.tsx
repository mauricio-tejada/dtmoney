import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";


export function TransactionTable() {

    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data))
    }, [])

    return (
        <Container>
            <table>

                <thead>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento site</td>
                        <td className='deposit'>R$ 1.200,00</td>
                        <td>Freela</td>
                        <td>25/12/2021</td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td>Aluguel</td>
                        <td className='withdraw'>-R$ 1.200,00</td>
                        <td>Casa</td>
                        <td>25/12/2021</td>
                    </tr>
                </tbody>

            </table>
        </Container>
    )

}