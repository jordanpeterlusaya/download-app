# HAUL — Download

Professional sideload site for the **HAUL** customer Android app (DoorDrop).  
One job: download the APK without Google Play.

**Live (GitHub Pages):** https://jordanpeterlusaya.github.io/download-app/

**APK (Release):** https://github.com/jordanpeterlusaya/download-app/releases/latest/download/haul-users.apk

**Expo build:** https://expo.dev/accounts/lusayaapeters-team/projects/DoorDrop/builds/d5410e46-3b27-4843-8ca5-550552a4ad76

## Local preview

```bash
cd /home/jordan/download-app
python3 -m http.server 5173
# open http://localhost:5173
```

Or any static server (`npx serve`, VS Code Live Server, etc.).

## Deploy

Static site (HTML/CSS/JS) + `.nojekyll`. Live via **GitHub Pages** from the `gh-pages` branch.

1. Push to `main`.
2. Workflow **Sync gh-pages branch** republishes the site.
3. Workflow **Release HAUL APK** downloads the Expo artifact in `apk-source.json` and attaches it to a GitHub Release (~130 MB — too large for git).

Optional: **Settings → Pages → Source: GitHub Actions** also enables the `deploy-pages.yml` workflow.

### Update the APK later

1. Edit `apk-source.json` (`expoArtifact`, `version`, `tag`).
2. Update `config.js` if the Expo fallback URL changed.
3. Push to `main` (or run **Release HAUL APK** via Actions → Run workflow).

## Brand

- Name: **HAUL**
- Tagline: `move what matters....`
- Colors: bright yellow `#F5E000` · black · white
