import { Component, Prop, Element } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  assetsDir: './',
  shadow: true
})
export class MyComponent {
  @Element() private element: HTMLElement;
  @Prop() first: string;
  @Prop() middle: string;
  @Prop() last: string;

  @Prop({context: 'publicPath'}) private publicPath: string;

  componentWillLoad() {
    this.element.style.setProperty('--image', `url('${this.publicPath}dummy.jpeg')`);   
  }
  

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>Hello, World! I'm {this.publicPath} {this.getText()}</div>;
  }
}
