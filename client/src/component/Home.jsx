import { useState } from "react"
import { Input, 
    InputLabel, 
    Button, 
    FormGroup, 
    FormControl, 
    MenuItem, 
    Container,
    Select } from '@mui/material'

const Home = () => {
    const initial = {
        location: "select",
        criteria: "select",

    }
    const [fields, setFields] = useState()

    const handleChange = (event) => {
        setFields({
          ...fields,
          [event.target.name]: event.target.value,
        })
      }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(fields)
    }

    return (
        <div>
            <h1>PICK ME A PLACE PLZ</h1>
            <form action="/home" method="post" onSubmit={handleSubmit}>
                <Container>
                <FormGroup>
                    <InputLabel htmlFor="location">Location: </InputLabel>
                    <Select name="location" id="location-selector" onChange={handleChange}>
                        <MenuItem value="test">test</MenuItem>
                        <MenuItem value="home">home</MenuItem>
                        <MenuItem value="work">work</MenuItem>
                    </Select>
                </FormGroup>

                <FormGroup>
                    <InputLabel htmlFor="criteria">Criteria: </InputLabel>
                    <Select name="criteria" id="criteria-selector" onChange={handleChange}>
                        <MenuItem value="search">search</MenuItem>
                    </Select>
                </FormGroup>

                <FormGroup>
                    <InputLabel htmlFor="nearby-range">Within: </InputLabel>
                    <Input name="nearby-range" type="number" min="1" max="30" onChange={handleChange}/><p>km</p>
                </FormGroup>

                <Button type="submit" variant="contained">SPIN</Button>
                </Container>
            </form>
        </div>
    )
}

export default Home