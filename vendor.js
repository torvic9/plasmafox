// Use LANG environment variable to choose locale
pref("intl.locale.requested", "");
// Use system-provided dictionaries
pref("spellchecker.dictionary_path", "/usr/share/hunspell");
// Disable default browser checking.
pref("browser.shell.checkDefaultBrowser", false);

// Don't disable our bundled extensions in the application directory
pref("extensions.autoDisableScopes", 11);

// Additions
pref("app.feedback.baseURL", "https://github.com/torvic9/plasmafox");
pref("app.normandy.enabled", false);
pref("app.shield.optoutstudies.enabled", false);
pref("app.support.baseURL", "https://github.com/torvic9/plasmafox");
pref("app.update.staging.enabled", false);
pref("beacon.enabled", false);
pref("browser.contentblocking.report.lockwise.enabled", false);
pref("browser.contentblocking.report.monitor.enabled", false);
pref("browser.discovery.containers.enabled", false);
pref("browser.discovery.enabled", false);
pref("browser.newtabpage.activity-stream.asrouter.providers.snippets", "");
pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
pref("browser.newtabpage.activity-stream.feeds.snippets", false);
pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
pref("browser.newtabpage.activity-stream.showSponsored", false);
pref("browser.newtabpage.activity-stream.telemetry", false);
pref("browser.newtabpage.activity-stream.telemetry.ping.endpoint", "");
pref("browser.newtabpage.directory.source", "data:application/json,{}");
pref("browser.newtabpage.enhanced", false);
pref("browser.ping-centre.telemetry", false);
pref("browser.privatebrowsing.forceMediaMemoryCache", true); 
pref("browser.safebrowsing.downloads.remote.enabled", false);
pref("browser.search.defaultenginename", "DuckDuckGo");
pref("browser.search.geoSpecificDefaults", false);
pref("browser.send_pings", false);
pref("browser.send_pings.require_same_host", true);
pref("browser.sessionstore.privacy_level", 1);
pref("browser.tabs.crashReporting.sendReport", false);
pref("browser.tabs.drawInTitlebar", true);
pref("browser.uitour.enabled", false);
pref("browser.urlbar.speculativeConnect.enabled", false);
pref("browser.urlbar.trimURLs", false);
pref("captivedetect.canonicalURL", "");
pref("datareporting.healthreport.infoURL", "");
pref("datareporting.healthreport.uploadEnabled", false);
pref("datareporting.policy.dataSubmissionEnabled", false);
pref("devtools.debugger.remote-enabled", false);
pref("devtools.onboarding.telemetry.logged", false);
pref("dom.enable_performance", false);
pref("extensions.pocket.enabled", false);
pref("general.useragent.override.addons.mozilla.org", "Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0");
pref("geo.provider.use_gpsd", false);
pref("geo.wifi.uri", "");
pref("identity.fxaccounts.commands.enabled", false);
pref("identity.fxaccounts.enabled", false);
pref("identity.fxaccounts.toolbar.enabled", false);
pref("identity.mobilepromo.android", "");
pref("identity.mobilepromo.ios", "");
pref("layout.spellcheckDefault", 0);
pref("media.autoplay.blocking_policy", 2);
pref("media.autoplay.block-webaudio", true);
pref("media.autoplay.default", 5); // 0=Allowed, 1=Blocked, 5=All Blocked
pref("media.peerconnection.enabled", false);
pref("media.peerconnection.ice.default_address_only", true);
pref("media.peerconnection.ice.no_host", true);
pref("network.captive-portal-service.enabled", false); 
pref("network.connectivity-service.enabled", false);
pref("network.dns.disablePrefetch", true);
pref("network.http.referer.XOriginPolicy", 2);
pref("network.http.referer.XOriginTrimmingPolicy", 2);
pref("network.IDN_show_punycode", true);
pref("network.predictor.enable-prefetch", false);
pref("permissions.delegation.enabled", false);
pref("privacy.resistFingerprinting", true);
pref("privacy.trackingprotection.fingerprinting.enabled", true);
pref("privacy.userContext.enabled", true);
pref("privacy.userContext.longPressBehavior", 2);
pref("privacy.userContext.ui.enabled", true);
pref("security.csp.enable", true);
pref("toolkit.coverage.opt-out", true);
pref("toolkit.telemetry.archive.enabled", false);
pref("toolkit.telemetry.bhrPing.enabled", false);
pref("toolkit.telemetry.coverage.opt-out", true);
pref("toolkit.telemetry.ecosystemtelemetry.enabled", false);
pref("toolkit.telemetry.enabled", false);
pref("toolkit.telemetry.firstShutdownPing.enabled", false);
pref("toolkit.telemetry.hybridContent.enabled", false);
pref("toolkit.telemetry.newProfilePing.enabled", false);
pref("toolkit.telemetry.server", "");
pref("toolkit.telemetry.shutdownPingSender.enabled", false);
pref("toolkit.telemetry.unified", false);
pref("toolkit.telemetry.updatePing.enabled", false);
pref("webgl.enable-debug-renderer-info", false);
