import next from 'next';
import { createServer } from 'http';

(async () => {
  const app = next({
    dev: !(process.env.NODE_ENV === 'production'),
  });
  await app.prepare().then(() => {
    const handle = app.getRequestHandler();
    const srv = createServer(async (req, res) => {
      handle(req, res);
      if (!(req?.url?.startsWith('/_next') || req?.url?.startsWith('/__nextjs'))) {
        res.statusCode === 200
          ? console.debug('ROUTER', `${res.statusCode} ${req.url}`)
          : console.error('URL', `${res.statusCode} ${req.url}`);
      }
    });
    srv.on('error', e => {
      console.error('SERVER', e);
      process.exit(1);
    });
    srv
      .on('listening', async () => {
        console.debug('SERVER', `Listening on ${process.env.HOST}:${process.env.PORT}`);
      })
      .listen(process.env.PORT);
  });
  try {
  } catch (e) {
    if (e.message && e.message.startsWith('Could not find a production')) {
      console.log(e.message);
      console.error('WEB', 'There is no production build - run yarn build');
    } else if (e.code && e.code === 'ENOENT') {
      if (e.path === './.next') {
        console.error('WEB', 'There is no production build - run yarn build');
      }
    } else {
      console.error('SERVER', e);
      process.exit(1);
    }
  }
})();
