import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import Logger from './logger'

const parser = Symbol('parser')
const logger = Symbol('logger')
let ExpressInstance = null

export default class Express {
  constructor () {
    if (!ExpressInstance) {
      this.exApp = express()
      this[parser]()
      this[logger]()
      ExpressInstance = 'Express'
    }
  }

  [parser] () {
    this.exApp.use(cookieParser())
    this.exApp.use(bodyParser.urlencoded({ extended: true }))
    this.exApp.use(bodyParser.json())
  }

  [logger] () {
    this.exApp.use(Logger.loggerMiddlerware)
  }

  get app () {
    return this.exApp
  }
}
