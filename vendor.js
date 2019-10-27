// Use LANG environment variable to choose locale
pref("intl.locale.requested", "");
// Use system-provided dictionaries
pref("spellchecker.dictionary_path", "/usr/share/hunspell");
// Disable default browser checking.
pref("browser.shell.checkDefaultBrowser", false);

// Don't disable our bundled extensions in the application directory
pref("extensions.autoDisableScopes", 11);
pref("extensions.shownSelectionUI", true);

// Additions
pref("privacy.resistFingerprinting", true);
pref("devtools.onboarding.telemetry.logged", false);
pref("toolkit.telemetry.unified", false);
pref("toolkit.telemetry.enabled", false);
pref("toolkit.telemetry.server", "");
pref("datareporting.healthreport.infoURL", "");
pref("datareporting.healthreport.uploadEnabled", false);
pref("datareporting.policy.dataSubmissionEnabled", false);
pref("media.peerconnection.enabled", false);
pref("media.peerconnection.ice.default_address_only", true);
pref("media.peerconnection.ice.no_host", true);
pref("browser.newtabpage.enhanced", false);
pref("browser.newtabpage.directory.source", "data:application/json,{}");
pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
pref("browser.newtabpage.activity-stream.telemetry", false);
pref("browser.newtabpage.activity-stream.telemetry.ping.endpoint", "");
pref("browser.newtabpage.activity-stream.feeds.snippets", false);
pref("browser.newtabpage.activity-stream.asrouter.providers.snippets", "");
pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
pref("browser.newtabpage.activity-stream.showSponsored", false);
pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
pref("network.predictor.enable-prefetch", false);
pref("devtools.debugger.remote-enabled", false);
pref("network.connectivity-service.enabled", false);
pref("general.useragent.override.addons.mozilla.org", "Mozilla/5.0 (X11; Linux x86_64; rv:60.0) Gecko/20100101 Firefox/60.0");
pref("browser.search.defaultenginename", "DuckDuckGo");
