import { Router } from 'express'
import { Register } from './controller/auth.controller'

export const route = (router: Router) => {
  router.post('/api/register', Register)
}