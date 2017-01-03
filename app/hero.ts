/**
 * Created by jessietang on 1/3/2017.
 */
export class Hero {
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ){}

  /*alterEgo(第二人格)是可选的，调用构造函数时可省略，注意alterEgo?中的问号 (?)*/
}
