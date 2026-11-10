# HAUL — Download

Public site for **HAUL** (customer app) and **HAUL Pilots** (driver / partner app).  
Live: https://www.haultechnologies.com/

HAUL is a logistics **marketplace / connector platform** — not a transportation company.
Customers request delivery; the platform matches them with partner Pilots and transporters.

**Customer app (Google Play):** https://play.google.com/store/apps/details?id=com.doordrop.mobile  
Package: `com.doordrop.mobile`

**Pilots APK (Release):** https://github.com/jordanpeterlusaya/download-app/releases/download/pilots-v1.0.0/haul-pilots.apk  
(Do **not** use `/releases/latest/download/haul-pilots.apk` — `latest` is the customer `v1.0.0` tag and has no pilots asset.)

If Pilots install fails with “can’t install this app”, uninstall any older **DoorDrive / HAUL Pilots** (`com.doordrive.app`) first — previous sideload/debug builds used a different signing key.

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

### Update Pilots APK

1. Build Pilots with EAS (`doordropdrive` standalone profile).
2. Put the APK at `downloads/haul-pilots.apk` (and/or attach as GitHub Release asset `haul-pilots.apk`).
3. Set `pilotsExpoApk` / `pilotsBuildPage` in `config.js` if using Expo fallback.
4. Push to `main`.

## Brand

- Name: **HAUL**
- Tagline: `move what matters....`
- Colors: bright yellow `#F5E000` · black · white
