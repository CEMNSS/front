import {
    Link,
    Button,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    TextField
} from "@mui/material"
import { useEffect, useState } from "react"

import * as Styles from "./styles"

export const Login = () => {
    const [ra, setRa] = useState("")
    const [password, setPassword] = useState("")
    const [raError, setRaError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    useEffect(() => {
        setRaError(false)
        setPasswordError(false)
    }, [ra, password])

    const handleCheckFields = () => {
        if (!ra) {
            setRaError(true)
        }

        if (!password) {
            setPasswordError(true)
        }
    }

    return (
        <Styles.Container>
            <Styles.LoginBox>
                <Styles.SchoolInitials>CEMNSS 📚</Styles.SchoolInitials>

                <Styles.FormControlWrapper>
                    <FormControl>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel
                                value="student"
                                control={<Radio />}
                                label="Aluno"
                            />
                            <FormControlLabel
                                value="secretary"
                                control={<Radio />}
                                label="Secretário"
                            />
                        </RadioGroup>
                    </FormControl>
                </Styles.FormControlWrapper>

                <Styles.FormControlWrapper>
                    <FormControl fullWidth>
                        <TextField
                            id="inputRA"
                            label="Digite seu RA"
                            variant="outlined"
                            margin="normal"
                            required
                            onChange={(event) => setRa(event.target.value)}
                            value={ra}
                            error={raError}
                        />

                        <TextField
                            id="inputPassword"
                            label="Digite sua senha"
                            variant="outlined"
                            margin="normal"
                            required
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            value={password}
                            error={passwordError}
                        />

                        <Link
                            href="/registration"
                            style={{ marginTop: "16px" }}
                        >
                            Aluno novo? Click aqui para fazer sua matrícula
                        </Link>

                        <Button
                            variant="contained"
                            size="large"
                            onClick={handleCheckFields}
                            style={{ marginTop: "16px" }}
                        >
                            ACESSAR
                        </Button>
                    </FormControl>
                </Styles.FormControlWrapper>
            </Styles.LoginBox>
        </Styles.Container>
    )
}

export default Login
