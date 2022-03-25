// Uses decentraland-ecs for types

function track() {
  // Track a user's position, TODO: Report this to endpoint
  /* setInterval needs to be defined
  setInterval(() => {
    log(Camera.instance.feetPosition);
    log(Camera.instance.rotation.eulerAngles);
  }, 1000);
  */
}

export function CreateBillboard(
  engine: Engine,
  location = { x: 0, y: 0, z: 0 },
  scale = { width: 2, height: 2 },
  rotation = { r1: 0, r2: 0, r3: 0, r4: 0 },
  imageUrl = 'https://www.sapling.gg/media/Landing Page.png',
  clickUrl = 'https://www.sapling.gg'
) {
  const depth = 0.05
  const wig = 0.05

  const { width, height } = scale
  const { x, y, z } = location
  const { r1, r2, r3, r4 } = rotation
  const raise = height / 2 + 1

  const faceTexture = new Texture(imageUrl)
  const faceMaterial = new Material()
  faceMaterial.albedoTexture = faceTexture

  const front = new Entity()
  front.addComponent(new BoxShape())
  front.addComponentOrReplace(
    new Transform({
      position: new Vector3(x, y + raise, z - depth / 2),
      rotation: new Quaternion(r1, r2, r3, r4),
      scale: new Vector3(width, height, depth),
    })
  )

  front.addComponentOrReplace(faceMaterial)
  front.addComponent(new OnPointerDown(() => openExternalURL(clickUrl)))
  engine.addEntity(front)

  const back = new Entity()
  back.addComponent(new BoxShape())
  back.addComponentOrReplace(
    new Transform({
      position: new Vector3(x, y + raise, z + depth / 2),
      rotation: new Quaternion(r1, r2 + 1, r3, r4),
      scale: new Vector3(width, height, depth),
    })
  )
  back.addComponentOrReplace(faceMaterial)
  back.addComponent(new OnPointerDown(() => openExternalURL(clickUrl)))
  engine.addEntity(back)

  const postL = new Entity()
  postL.addComponent(new BoxShape())
  postL.addComponentOrReplace(
    new Transform({
      position: new Vector3(x - width / 2 - wig, y, z),
      rotation: new Quaternion(r1, r2, r3, r4),
      scale: new Vector3(0.1, height + 2 * raise, depth * 2),
    })
  )
  engine.addEntity(postL)

  const postR = new Entity()
  postR.addComponent(new BoxShape())
  postR.addComponentOrReplace(
    new Transform({
      position: new Vector3(x + width / 2 + wig, y, z),
      rotation: new Quaternion(r1, r2, r3, r4),
      scale: new Vector3(0.1, height + 2 * raise, depth * 2),
    })
  )
  engine.addEntity(postR)
}
