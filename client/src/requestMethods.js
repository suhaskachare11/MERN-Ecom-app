import axios from  'axios'

const BASE_URL = 'http://localhost:5000/api'
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGM4MGQ4YTcxOTJhMGJkODE5ZDJkMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTQ5NDMxMSwiZXhwIjoxNjQ5NzUzNTExfQ.ox4uWSY83j0xAaxkjCHnwcSbtVSRH9Bz7Qma6lglWJE'

export const publicRequest = axios.create({
    baseURL : BASE_URL
})

export const userRequest = axios.create({
    baseURL : BASE_URL,
    header : {token : `Bearer ${TOKEN}`}
})