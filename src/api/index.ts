import axios, { AxiosPromise } from 'axios'

export const getUserData = (): AxiosPromise => axios.get('api/user')
