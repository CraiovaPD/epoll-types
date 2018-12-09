/**
 * Poll vote interface.
 *
 * @author Dragos Sebestin
 */
export interface IVote {
  _id: string,
  createdAt: Date,
  userId: string,
  optionId: string
}
