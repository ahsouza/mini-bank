export class FileUploadInvalid extends Error {
  constructor() {
    super('Error trying tho upload the files')
    this.name = 'FileUploadInvalid'
  }
}
