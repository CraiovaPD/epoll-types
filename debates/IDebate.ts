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
  type: DebateType,
  state: DebateState,
  payload: T
}

// debate payload types
export interface IPollDebate {
  title: string,
  content: string,
  attachements: any[],
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
  payload: {
    title: string,
    votes: {
      count: number
    }
  }
}
