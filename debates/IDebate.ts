import { IVote } from './IVote';

export enum DebateState {
  draft, published, unpublished
}

export enum DebateType {
  poll, anouncement
}

/**
 * General debate interface.
 *
 * @author Dragos Sebestin
 */
export interface IDebate<T> {
  _id: string,
  createdAt: Date,
  createdBy: string,
  type: DebateType,
  state: DebateState,
  title: string,
  content: string,
  payload: T
}

// debate payload types
export interface IPollDebate {
  attachments: any[],
  options: Array<{
    _id: string,
    reason: string
  }>,
  votes: {
    count: number,
    data: IVote[]
  }
}

// other debate representations

/**
 * Debate Poll list projection.
 */
export interface IDebatePollListItem {
  _id: string,
  createdAt: Date,
  type: DebateType,
  state: DebateState,
  title: string,
  payload: {
    votes: {
      count: number
    }
  }
}
