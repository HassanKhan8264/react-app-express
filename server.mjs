import express from 'express'
import path from 'path'
const app = express()
const port = process.env.PORT || 5002
import cors from 'cors';


app.use(cors());
app.use(express.json());
app.get('/weather/:cityName', (req, res) => {
  console.log('cityName', res.param.cityName);
  res.send({
    city : res.param.cityName,
    temp: 72,
    humidity:45,
    min:23,
    max:55,
    severTime: new Date().toString()
  }
  )
})

const __dirname = path.resolve()

app.use('/', express.static(path.join(__dirname, '/react-app/build')))
app.use('*', express.static(path.join(__dirname, '/react-app/build')))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})