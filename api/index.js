import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.post(`/api/foodlog`, async (req, res) => {
  const log = await prisma.foodlog.create({
    data: {
      meals: req.body.meals,
      symptoms: req.body.symptoms,
      createdAt: new Date(req.body.createdAt),
    },
  })
  res.json(log)
})

app.get(`/api/foodlog`, async (req, res) => {
  const logs = await prisma.foodlog.findMany({ orderBy: { createdAt: 'desc' } })
  res.json(logs)
})

app.get(`/api/foodlog/:id`, async (req, res) => {
  const { id } = req.params
  const onelog = await prisma.foodlog.findUnique({
    where: { id: parseInt(id, 10) },
  })
  res.json(onelog)
})

app.delete(`/api/foodlog:/id`, async (req, res) => {
  const { id } = req.params
  const onelog = await prisma.foodlog.delete({
    where: { id: parseInt(id, 10) },
  })
  res.json(onelog)
})

export default app
