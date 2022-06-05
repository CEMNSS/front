import {
    Button,
    FormControl,
    FormLabel,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from "@mui/material"
import { useState } from "react"

import { useLocation } from "react-router-dom"
import { Container, Column, Row } from "../../layout"
import { states } from "../../services/states"

import * as Styles from "./styles"

const PersonalDocuments = () => {
    const { state } = useLocation()
    const [documentFront, setDocumentFront] = useState("")
    const [documentBack, setDocumentBack] = useState("")

    return (
        <Styles.Container>
            <Styles.RegistrationBox>
                <Styles.PageTitle>Documentos do aluno 📠</Styles.PageTitle>

                <FormControl fullWidth>
                    <Styles.FormControlWrapper>
                        <Container>
                            <Row>
                                <Column tablet={6}>
                                    <TextField
                                        fullWidth
                                        label="RG"
                                        variant="outlined"
                                        margin="normal"
                                        required
                                    />
                                </Column>
                                <Column tablet={6}>
                                    <TextField
                                        fullWidth
                                        label="Data de emissão"
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        focused
                                        type="date"
                                    />
                                </Column>
                            </Row>
                            <Row>
                                <Column tablet={6}>
                                    <TextField
                                        fullWidth
                                        required
                                        variant="outlined"
                                        margin="normal"
                                        label="Orgão emissor"
                                        placeholder="Exemplo: SSP"
                                    />
                                </Column>
                                <Column tablet={6}>
                                    <FormControl fullWidth>
                                        <InputLabel
                                            id="select-state-label"
                                            required
                                            style={{
                                                marginTop: "16px",
                                                marginBottom: "8px"
                                            }}
                                        >
                                            Estado
                                        </InputLabel>
                                        <Select
                                            labelId="select-state-label"
                                            id="select-state"
                                            fullWidth
                                            label="Estado"
                                            required
                                            style={{
                                                marginTop: "16px",
                                                marginBottom: "8px"
                                            }}
                                            value=""
                                            onChange={(event) => {
                                                return
                                            }}
                                        >
                                            {states.map((state, index) => {
                                                return (
                                                    <MenuItem
                                                        value={state}
                                                        key={index}
                                                    >
                                                        {state}
                                                    </MenuItem>
                                                )
                                            })}
                                        </Select>
                                    </FormControl>
                                </Column>
                            </Row>

                            <Row>
                                <Column tablet={6}>
                                    <TextField
                                        fullWidth
                                        required
                                        label="CPF"
                                        variant="outlined"
                                        margin="normal"
                                    />
                                </Column>
                            </Row>

                            <Row>
                                <Column tablet={6}>
                                    <FormControl>
                                        <FormLabel id="input-photo-rg-front">
                                            Foto da Frente do RG
                                        </FormLabel>
                                        <input
                                            type="file"
                                            aria-labelledby="input-photo-rg-front"
                                            accept="image/"
                                            onChange={(event) => {
                                                if (!event.target.files) return
                                                setDocumentFront(
                                                    URL.createObjectURL(
                                                        event.target.files[0]
                                                    )
                                                )
                                            }}
                                        />

                                        {documentFront && (
                                            <Styles.DocumentImage
                                                src={documentFront}
                                            />
                                        )}
                                    </FormControl>
                                </Column>
                                <Column tablet={6}>
                                    <FormControl>
                                        <FormLabel id="input-photo-rg-back">
                                            Foto do Verso do RG
                                        </FormLabel>
                                        <input
                                            type="file"
                                            aria-labelledby="input-photo-rg-back"
                                            accept="image/"
                                            onChange={(event) => {
                                                if (!event.target.files) return
                                                setDocumentBack(
                                                    URL.createObjectURL(
                                                        event.target.files[0]
                                                    )
                                                )
                                            }}
                                        />
                                        {documentBack && (
                                            <Styles.DocumentImage
                                                src={documentBack}
                                            />
                                        )}
                                    </FormControl>
                                </Column>
                            </Row>

                            <Row>
                                <Column tablet={12}>
                                    <Styles.FlexEnd>
                                        <Button
                                            variant="contained"
                                            size="large"
                                            style={{ marginTop: "16px" }}
                                        >
                                            Próximo
                                        </Button>
                                    </Styles.FlexEnd>
                                </Column>
                            </Row>
                        </Container>
                    </Styles.FormControlWrapper>
                </FormControl>
            </Styles.RegistrationBox>
        </Styles.Container>
    )
}

export default PersonalDocuments
