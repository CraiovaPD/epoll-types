
/**
 * File attachement interface.
 *
 * @author Dragos Sebestin
 */
export interface IAttachment {
  _id: string,
  file: {
    name: string,
    size: number,
    extension: string,
    mimeType: string,
    internalPath: string,
    downloadPath: string,
    originalName: string
  }
}
