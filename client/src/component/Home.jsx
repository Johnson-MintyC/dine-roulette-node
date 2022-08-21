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
        makeHardQueryCall()
    }

    //Hardcoded Test funcs and values
    const makeHardQueryCall = async () => {
        const randGeocode = "144.9617719,-37.817466"
        const randRadius = "5000"
        const randRestaurant = "catering.restaurant"
        const randApiKey = process.env.REACT_APP_GEO_API
        const randUrl = `https://api.geoapify.com/v2/places?categories=${randRestaurant}&filter=circle:${randGeocode},${randRadius}&bias=proximity:${randGeocode}&limit=50&apiKey=${randApiKey}`
        const reponse = await fetch(randUrl)
        const data = await reponse.json()
        console.log(data)

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