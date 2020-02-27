import * as React from "./node_modules/react";
import { enableRipple } from "./node_modules/@syncfusion/ej2-base";
enableRipple(true);

export class SampleBase extends React.PureComponent {
  rendereComplete() {
    /**custom render complete function */
  }
  componentDidMount() {
    setTimeout(() => {
      this.rendereComplete();
    });
  }
}
