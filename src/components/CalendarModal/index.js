import React from "react";
import { Button, TouchableWithoutFeedback, View } from "react-native";
import { Container, ButtonFilterText, ModalContent, ButtonFilter } from "./styles";

export default function CalendarModal({ setVisible }) {
    return (
        <Container>
            <TouchableWithoutFeedback onPress={setVisible}>
                <View style={{ flex: 1 }}>

                </View>
            </TouchableWithoutFeedback>

            <ModalContent>
                <ButtonFilter>
                    <ButtonFilterText>
                        TESTE MODO
                    </ButtonFilterText>
                </ButtonFilter>
            </ModalContent>
        </Container>
    )
}