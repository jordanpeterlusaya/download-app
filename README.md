# HAUL — Download

Sideload site for **HAUL** (customer app) and **HAUL Pilots** (driver app).  
Live: https://www.haultechnologies.com/

**Customer APK (Release):** https://github.com/jordanpeterlusaya/download-app/releases/latest/download/haul-users.apk

**Pilots APK (Release):** https://github.com/jordanpeterlusaya/download-app/releases/latest/download/haul-pilots.apk  
(also mirrored under `downloads/haul-pilots.apk` when published)

## Local preview

```bash
cd /home/jordan/download-app
python3 -m http.server 5173
# open http://localhost:5173
```

## Deploy

Static site (HTML/CSS/JS) + `.nojekyll`. Live via **GitHub Pages** / custom domain `haultechnologies.com`.

1. Push to `main`.
2. Workflow **Sync gh-pages branch** republishes the site.
3. Workflow **Release HAUL APK** attaches customer APK from `apk-source.json`.

### Update Pilots APK

1. Build Pilots with EAS (`doordropdrive` standalone profile).
2. Put the APK at `downloads/haul-pilots.apk` (and/or attach as GitHub Release asset `haul-pilots.apk`).
3. Set `pilotsExpoApk` / `pilotsBuildPage` in `config.js` if using Expo fallback.
4. Push to `main`.

## Brand

- Name: **HAUL**
- Tagline: `move what matters....`
- Colors: bright yellow `#F5E000` · black · white
