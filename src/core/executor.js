/* @flow */

import { Title, TitleParam } from './title'

export class Executor extends Title {
  level = 1

  constructor(params: TitleParam) {
    super(params)
  }
}
