/* @flow */

import { Order } from './order'

export type receiverCallback = () => void
export type receiverAllCallback = () => void

export interface Invoker {
  id: string,
  executors: Array<Invoker>,
  commander: Invoker,
  sender(order: Order): void,
  feedback(data: object): void,
  receiver(cb: receiverCallback): void,
  receiverAll(cb: receiverAllCallback): void,
  removeReceiver(cb: Function): void,
  removeReceiverAll(): void
}

