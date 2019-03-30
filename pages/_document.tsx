import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        const nonce: string = this.props.__NEXT_DATA__.query.nonce as string || '';
        return (
            <html>
            <Head>
                <title>Hello world</title>
            </Head>
            <body>
            <Main />
            <NextScript nonce={nonce} async />
            </body>
            </html>
        );
    }
}
