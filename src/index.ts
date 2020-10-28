import {startServer} from './server';
import cors from 'cors';
import compression from "compression";
import './database'
 async function main() {

    const app = await startServer(); 
    app.use("*",cors);
    app.use(compression());
    const PORT = 5100;
    app.listen(
        {
          port: PORT
        },
        () => console.log(`Server http://localhost:${PORT}`)
      );
}

main()