/* @flow */

import { Title, TitleParam } from './title'

export class Commander extends Title {
  level = 2

  constructor(params: TitleParam) {
    super(params)
  }
}
