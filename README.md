# Sapling.gg Decentraland Integration

Easily integrate your LAND with brands to sponsor your experience. Get in touch to learn more: jack@sapling.gg.

## Install

`git clone git@github.com:LeelaLudo/sapling-dcl.git`

You must already be using `decentraland-ecs` (`npm install -g decentraland-ecs`).

## API

```
import { CreateBillboard } from "<path-to-sapling-dcl>/src";
// common: import { CreateBillboard } from "../sapling-dcl/src";

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