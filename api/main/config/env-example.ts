export default {
  port: process.env.PORT || 4210,
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/mini-bank',
  jwtSecret: process.env.JWT_SECRET || 'd3Vis==5H402',
  bucketName: String(process.env.AWS_S3_BUCKET),
  defaultRegion: String(process.env.DEFAULT_REGION),
  defaultFilesACL: String(process.env.DEFAULT_FILES_ACL)
}