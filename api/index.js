import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

export default {
  path: '/api',
  handler: app,
}

app.post(`/foodlog`, async (req, res) => {
  const log = await prisma.foodlog.create({
    data: {
      meals: req.body.meals,
      symptoms: req.body.symptoms,
      createdAt: req.body.createdAt,
    },
  })
  res.json(log)
})

app.get(`/foodlog`, async (req, res) => {
  const logs = await prisma.foodlog.findMany()
  res.json(logs)
})

app.get(`/foodlog/:id`, async (req, res) => {
  const { id } = req.params
  const onelog = await prisma.foodlog.findUnique({
    where: { id: parseInt(id, 10) },
  })
  res.json(onelog)
})

app.delete(`/foodlog:/id`, async (req, res) => {
  const { id } = req.params
  const onelog = await prisma.foodlog.delete({
    where: { id: parseInt(id, 10) },
  })
  res.json(onelog)
})
