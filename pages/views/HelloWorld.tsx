import * as React from 'react';
import {ComponentProps} from '@server/modules/reactNext/controllers/HomeController';
import {NextContext} from 'next';

export interface HelloWorldViewObject {
    name: string;
}
export default class HelloWorld extends React.Component<ComponentProps<HelloWorldViewObject>> {
    static getInitialProps(nextContext: NextContext) {
        return nextContext.query;
    }

    render() {
        return (
            <div>
               Hello World! {this.props.viewObject.name}
                <button onClick={() => {console.log('button clicked'); }}>Click me!</button>
            </div>
        );
    }
}
