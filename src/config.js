'use strict'

const server = {
  host: 'localhost',
  port: 8000
}

const mongodb = {
  url : 'mongodb://localhost:27017/ez-att',
  options: {
    poolSize: 5,
    reconnectTries: 3600,
    reconnectInterval: 1000
  }
}

const ajv = {
  additionalProperties : false,

}

export default {
  server,
  mongodb,
  ajv
}