/* eslint-disable @next/next/no-document-import-in-page */
import React from 'react';
import { ColorModeScript } from '@chakra-ui/react';
import NextCookies from 'next-cookies';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
  DocumentProps,
} from 'next/document';
import theme from '../styles/theme';
import Script from 'next/script';

/**
 * Additional props depending on our App
 *
 * Must be returned by getInitialProps and will be available in render function
 */
type Props = {
  locale: string;
};

type DocumentGetInitialPropsOutput = Props & DocumentInitialProps;
type DocumentRenderProps = Props & DocumentProps;

class AppDocument extends Document<DocumentRenderProps> {
  static async getInitialProps(context: DocumentContext): Promise<DocumentGetInitialPropsOutput> {
    const { query, req } = context;
    const initialProps: DocumentInitialProps = await Document.getInitialProps(context);

    return {
      ...initialProps,
      locale: 'en',
    };
  }

  render() {
    const { locale }: DocumentRenderProps = this.props;
    return (
      <Html lang={locale}>
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
