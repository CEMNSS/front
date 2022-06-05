import { useState } from "react"

import {
    Avatar,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    Stack,
    TextField
} from "@mui/material"

import * as Layout from "../../layout"
import * as Styles from "./styles"

import { useNavigate } from "react-router-dom"

import { toast } from "react-toastify"

import { states } from "../../services/states"

const PersonalData = () => {
    const navigate = useNavigate()

    const [photo, setPhoto] = useState("")
    const [userData, setUserData] = useState({
        name: "",
        birthday: "",
        motherName: "",
        fatherName: "",
        email: "",
        phone: "",
        cityOfBirth: "",
        stateOfBirth: "",
        gender: "",
        skinColor: ""
    })

    const validateFields = () => {
        const errors: string[] = []

        Object.keys(userData).map((field) => {
            if (!userData[field]) errors.push(field)
        })

        if (errors.length > 0) {
            toast("Todos os campos são obrigatórios", {
                type: "error"
            })

            return
        }

        navigate("/personalDocuments", {
            state: {
                userData,
                photo
            }
        })
    }

    async function handleFile(file: File) {
        if (!file) return

        setPhoto(URL.createObjectURL(file))
        const reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onload = function () {
            console.log("Imagem para upload: ", reader.result)
        }

        reader.onerror = function (error) {
            console.log("Error: ", error)
        }
    }

    return (
        <Styles.Container>
            <Styles.RegistrationBox>
                <Styles.PageTitle>Dados Pessoais do Aluno 🧑‍🎓</Styles.PageTitle>

                <FormControl fullWidth>
                    <Styles.FormControlWrapper>
                        <Layout.Container>
                            <Layout.Row>
                                <Layout.Column tablet={12}>
                                    <Stack
                                        direction="row"
                                        justifyContent="center"
                                        spacing={2}
                                    >
                                        <Avatar
                                            src={photo || "/"}
                                            alt={userData.name}
                                            sx={{ width: 72, height: 72 }}
                                        />
                                    </Stack>
                                </Layout.Column>
                            </Layout.Row>
                            <Layout.Row>
                                <Layout.Column tablet={6}>
                                    <TextField
                                        fullWidth
                                        label="Nome completo"
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        value={userData.name}
                                        onChange={(event) =>
                                            setUserData({
                                                ...userData,
                                                name: event.target.value
                                            })
                                        }
                                    />
                                </Layout.Column>
                                <Layout.Column tablet={3}>
                                    <TextField
                                        fullWidth
                                        label="Data de nascimento"
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        type="date"
                                        focused
                                        value={userData.birthday}
                                        onChange={(event) =>
                                            setUserData({
                                                ...userData,
                                                birthday: event.target.value
                                            })
                                        }
                                    />
                                </Layout.Column>

                                <Layout.Column tablet={3}>
                                    <FormControl>
                                        <FormLabel id="input-photo">
                                            Foto
                                        </FormLabel>
                                        <input
                                            type="file"
                                            aria-labelledby="input-photo"
                                            accept="image/"
                                            onChange={(event) => {
                                                if (!event.target.files) return
                                                handleFile(
                                                    event.target.files[0]
                                                )
                                            }}
                                        />
                                    </FormControl>
                                </Layout.Column>
                            </Layout.Row>

                            <Layout.Row>
                                <Layout.Column tablet={6}>
                                    <TextField
                                        fullWidth
                                        label="Nome da Mãe"
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        value={userData.motherName}
                                        onChange={(event) =>
                                            setUserData({
                                                ...userData,
                                                motherName: event.target.value
                                            })
                                        }
                                    />
                                </Layout.Column>

                                <Layout.Column tablet={6}>
                                    <TextField
                                        fullWidth
                                        label="Celular ou Whatsapp"
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        type="tel"
                                        value={userData.phone}
                                        onChange={(event) =>
                                            setUserData({
                                                ...userData,
                                                phone: event.target.value
                                            })
                                        }
                                    />
                                </Layout.Column>
                            </Layout.Row>

                            <Layout.Row>
                                <Layout.Column tablet={6}>
                                    <TextField
                                        fullWidth
                                        label="Nome do pai"
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        value={userData.fatherName}
                                        onChange={(event) =>
                                            setUserData({
                                                ...userData,
                                                fatherName: event.target.value
                                            })
                                        }
                                    />
                                </Layout.Column>

                                <Layout.Column tablet={6}>
                                    <TextField
                                        fullWidth
                                        label="E-mail"
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        type="email"
                                        value={userData.email}
                                        onChange={(event) =>
                                            setUserData({
                                                ...userData,
                                                email: event.target.value
                                            })
                                        }
                                    />
                                </Layout.Column>
                            </Layout.Row>
                            <Layout.Row>
                                <Layout.Column tablet={6}>
                                    <TextField
                                        fullWidth
                                        label="Cidade de Nascimento"
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        value={userData.cityOfBirth}
                                        onChange={(event) =>
                                            setUserData({
                                                ...userData,
                                                cityOfBirth: event.target.value
                                            })
                                        }
                                    />
                                </Layout.Column>
                                <Layout.Column tablet={2}>
                                    <FormControl fullWidth>
                                        <InputLabel
                                            id="select-state-label"
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
                                            style={{
                                                marginTop: "16px",
                                                marginBottom: "8px"
                                            }}
                                            value={userData.stateOfBirth}
                                            onChange={(event) =>
                                                setUserData({
                                                    ...userData,
                                                    stateOfBirth:
                                                        event.target.value
                                                })
                                            }
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
                                </Layout.Column>

                                <Layout.Column tablet={4}>
                                    <FormControl>
                                        <FormLabel id="demo-row-radio-buttons-group-label">
                                            Sexo
                                        </FormLabel>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                            value={userData.gender}
                                            onChange={(event) =>
                                                setUserData({
                                                    ...userData,
                                                    gender: event.target.value
                                                })
                                            }
                                        >
                                            <FormControlLabel
                                                value="male"
                                                control={<Radio />}
                                                label="Masculino"
                                            />
                                            <FormControlLabel
                                                value="female"
                                                control={<Radio />}
                                                label="Feminino"
                                            />
                                        </RadioGroup>
                                    </FormControl>
                                </Layout.Column>
                            </Layout.Row>

                            <Layout.Row>
                                <Layout.Column tablet={12}>
                                    <FormControl>
                                        <FormLabel id="radio-group-color">
                                            Cor da pele
                                        </FormLabel>
                                        <RadioGroup
                                            row
                                            aria-labelledby="radio-group-color"
                                            name="radio-skin-color"
                                            value={userData.skinColor}
                                            onChange={(event) =>
                                                setUserData({
                                                    ...userData,
                                                    skinColor:
                                                        event.target.value
                                                })
                                            }
                                        >
                                            <FormControlLabel
                                                value="branca"
                                                control={<Radio />}
                                                label="Branca"
                                            />
                                            <FormControlLabel
                                                value="preta"
                                                control={<Radio />}
                                                label="Preta"
                                            />

                                            <FormControlLabel
                                                value="amarela"
                                                control={<Radio />}
                                                label="Amarela"
                                            />
                                            <FormControlLabel
                                                value="parda"
                                                control={<Radio />}
                                                label="Parda"
                                            />

                                            <FormControlLabel
                                                value="indigena"
                                                control={<Radio />}
                                                label="Indígena"
                                            />
                                            <FormControlLabel
                                                value="nao-declarada"
                                                control={<Radio />}
                                                label="Não declarada"
                                            />
                                        </RadioGroup>
                                    </FormControl>
                                </Layout.Column>
                            </Layout.Row>

                            <Layout.Row>
                                <Layout.Column tablet={12}>
                                    <Styles.FlexEnd>
                                        <Button
                                            variant="contained"
                                            size="large"
                                            style={{ marginTop: "16px" }}
                                            onClick={validateFields}
                                        >
                                            Próximo
                                        </Button>
                                    </Styles.FlexEnd>
                                </Layout.Column>
                            </Layout.Row>
                        </Layout.Container>
                    </Styles.FormControlWrapper>
                </FormControl>
            </Styles.RegistrationBox>
        </Styles.Container>
    )
}

export default PersonalData
