
# Still Alive (still-alive)

> Who is dead?

## Running your project

The generated project includes a live-reloading static server on port `8080` (you can change the port in the `gulpfile.js` config), which will build, launch, and rebuild the app whenever you change application code. To start the server, run:

```bash
$ npm start
```

If you prefer to just build without the live reload and build-on-each-change watcher, run:

```bash
$ npm run build
```

## Preparation for release

After build you can prepare release (minamilization of js and css files)
```bash
$ npm run release
```

## Generating Additional Code

You can add additional functionality to your application by invoking the subgenerators included in the Flux Generator. You can add components using the following commands:

#### Components
```bash
$ yo flux:component ComponentName
```

#### Actions
```bash
$ yo flux:action ActionCreatorName
```

#### Stores
```bash
$ yo flux:store StoreName
```
