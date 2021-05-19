
import { File, UploadedFile } from "@/domain/models"

export interface FileUpload {
  upload: (files: File | File[]) => Promise<UploadedFile | UploadedFile[] | undefined>
}