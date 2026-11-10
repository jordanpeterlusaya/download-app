window.HAUL_DOWNLOAD = {
  // Customer app — Google Play (package: com.doordrop.mobile)
  playStoreUrl:
    "https://play.google.com/store/apps/details?id=com.doordrop.mobile",

  // HAUL Pilots (driver app) — standalone APK (not on Play Store yet)
  // Use the pilots tag (not /latest/, which is the customer v1.0.0 release and has no pilots APK).
  // Package: com.doordrive.app — signed with EAS credentials (differs from older debug/standalone keys).
  // Users with an older DoorDrive/HAUL Pilots install must uninstall first.
  pilotsReleaseApk:
    "https://github.com/jordanpeterlusaya/download-app/releases/download/pilots-v1.0.0/haul-pilots.apk",
  pilotsExpoApk:
    "https://expo.dev/artifacts/eas/eq1jnYIfIETUuHetWhx64-VUhkr5zWB25HpCP7YKa_g.apk",
  pilotsBuildPage:
    "https://expo.dev/accounts/lusayaapeters-team/projects/doordrive/builds/745aa87f-3247-4ae2-9918-93a15eb78186",
  pilotsLocalApk: "downloads/haul-pilots.apk",
};
