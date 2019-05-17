import * as paper from 'paper'

declare module 'paper' {
  namespace paper {}
}

export default () => {
  console.log('hello', paper.Shape.Rectangle({x:0, y:1}));
}
