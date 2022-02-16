import * as React from 'react';
import App, { AppInitialProps, AppContext } from 'next/app';

class WebApp extends App {
  static async getInitialProps({ Component, ctx }: AppContext): Promise<AppInitialProps> {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default WebApp;
