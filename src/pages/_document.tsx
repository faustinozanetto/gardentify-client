/* eslint-disable @next/next/no-document-import-in-page */
import React from 'react';
import { ColorModeScript } from '@chakra-ui/react';
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

type Props = {
  locale: string;
};

type DocumentGetInitialPropsOutput = Props & DocumentInitialProps;
type DocumentRenderProps = Props & DocumentProps;

class AppDocument extends Document<DocumentRenderProps> {
  static async getInitialProps(context: DocumentContext): Promise<DocumentGetInitialPropsOutput> {
    const { query } = context;
    const locale = context.locale;
    const initialProps: DocumentInitialProps = await Document.getInitialProps(context);

    return {
      ...initialProps,
      locale,
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
