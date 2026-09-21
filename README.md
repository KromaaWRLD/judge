# ⚖️ Judge — Personal Game Hub

A clean, dark-themed hub for playing **my own browser games** via embeds.

**[Open the hub →](https://kromaawrld.github.io/judge/)**

Currently includes:

| Game | Link |
|------|------|
| **Klondike Solitaire** | [Play](https://kromaawrld.github.io/solitaire/) |

## How it works

Games are listed in `app.js` inside the `GAMES` array. Each entry needs:

```js
{
  id: "unique-id",
  name: "Display Name",
  description: "Short description",
  icon: "♠️",          // emoji or text
  url: "https://..."    // any public game URL (GitHub Pages, etc.)
}
```

The hub loads the game in an iframe so you can switch between them without leaving the page.

## Adding a new game

1. Deploy your game (e.g. GitHub Pages).
2. Open `app.js` and add an object to the `GAMES` array.
3. Commit & push. The hub updates automatically.

## Enable GitHub Pages

1. Go to **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` / root
4. Save — live at `https://kromaawrld.github.io/judge/`

## License

MIT
