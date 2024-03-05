import React, { useMemo } from "react";
import { Container, Label, Balance } from "./styles"

export default function BalanceItem({ data }) {
    const labelName = useMemo(() => {
        if (data.tag === 'saldo') {
            return {
                label: 'Saldo Atual',
                color: '#0000ff'
            }
        } else if (data.tag === 'receita') {
            return {
                label: 'Entreadas de Hoje',
                color: '#00b94a'
            }
        } else {
            return {
                label: 'Saidas de Hoje',
                color: '#EF463a'
            }
        }
        
    }, [data])

    return (
        <Container bg={labelName.color}>
            <Label> {labelName.label} </Label>
            <Balance> R$ {data.saldo}  </Balance>
        </Container>
    )
}