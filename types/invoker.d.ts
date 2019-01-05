import { Order } from './order'

export type ReceiverCallBack = () => void
export type ReceiverAllCallBack = () => void

export interface Invoker {
  id: string;
  executors: Array<Invoker>;
  commander: Invoker;

  send(order: Order): Invoker;
  feedback(data: object): Invoker;
  receiver(cb: ReceiverCallBack): Invoker;
  receiver(cb: ReceiverAllCallBack): Invoker;
  removeReceiver(cb: Function): void;
  removeAllReceiver(): void,
  destroy(): void;
}
