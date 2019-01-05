/* @flow */
import { Invoker } from './invoker'

import { isNumber, isString } from '../shared/util'
import uuid from '../shared/uuid'
// import { Commander } from './commander';

export type TitleParam = {
  id?: string;
  level?: number
}

export class Title implements Invoker {
  level = 0
  id = uuid()
  executors: Array<Invoker>
  commander: Invoker

  constructor({ id, level }: TitleParam) {
    isString(id) && (this.id = id)

    isNumber(level) && !isNaN(level) && (this.level = level)
  }

  /* getExecutor(id: string): Title {

  } */

  sender() {

  }


}
