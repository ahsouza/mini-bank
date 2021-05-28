import { S3 } from 'aws-sdk'
import { FileUploader } from '@/presentation/protocols'
import { File, UploadedFile } from '@/domain/models'
import configS3 from '@/main/config/env'

export class AWSFileUploader implements FileUploader {
  private readonly client: S3
  private readonly bucketName = configS3.bucketName
  constructor() {
    this.client = new S3({
      region: configS3.defaultRegion,
    })
  }

  private generateFileKey(file: File, timestamp: number): string {
    return `${file.name}-${timestamp}.${file.extension}`
  }

  private async uploadFile(file: File): Promise<string> {
    const timestamp = Date.now()
    const fileKey = this.generateFileKey(file, timestamp)
    await this.client
      .putObject({
        Bucket: this.bucketName,
        Key: fileKey,
        ContentType: file.type,
        Body: file.content,
        ACL: configS3.defaultFilesACL,
      })
      .promise()
    return `${this.bucketName}/${fileKey}`
  }

  async upload(
    files: File | File[]
  ): Promise<UploadedFile | UploadedFile[] | undefined> {
    try {
      if (Array.isArray(files)) {
        const paths = await Promise.all(
          files.map(async (file) => this.uploadFile(file))
        )
        return paths.map((path) => ({ path }))
      }

      const path = await this.uploadFile(files)
      return {
        path
      }
    } catch {
      return undefined
    }
  }
}
