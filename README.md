# Sapling.gg Decentraland Integration

Easily integrate your LAND with brands to sponsor your experience. Get in touch to learn more: contact@sapling.gg.

## Install

`npm install sapling-dcl -B`

`-B` ensures that the package will be bundled with your DCL setup.

You must already be using `decentraland-ecs` (`npm install -g decentraland-ecs`).

## API

```
import { CreateBillboard } from "sapling-dcl";

// Use default params to start
CreateBillboard(engine);

// Then, you can customize the board location, size, and more!
CreateBillboard(
    engine,
    location,
    scale,
    rotation,
    imageUrl,
    clickUrl
)
```

This command will add a billboard to you scene with the `imageUrl` parameter as the banner ad. If a user clicks on the billboard, it will redirect them to `clickUrl`.
