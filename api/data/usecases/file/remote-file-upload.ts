import { inject, injectable } from 'tsyringe'
import { File, UploadedFile } from '@/domain/models'
import { FileUpload } from '@/domain/usecases'
import { FileUploader } from '@/presentation/protocols'
import { FileUploadInvalid } from '@/presentation/errors'

@injectable()
export class RemoteFileUpload implements FileUpload {
  constructor (
    @inject('FileUploader')
    private readonly fileUploader: FileUploader
  ) {}

  async upload (files: File[]): Promise<UploadedFile[]> {
    const uploadedFiles = await this.fileUploader.upload(files)

    if (!uploadedFiles) {
      throw new FileUploadInvalid()
    }

    return uploadedFiles as UploadedFile[]
  }
}
