export default {
  port: process.env.PORT || 4210,
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/clean-node-api',
  jwtSecret: process.env.JWT_SECRET || 'd3Vis==5H402'
}