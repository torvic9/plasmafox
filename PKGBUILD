# Maintainer: torvic9 AT mailbox DOT org
# based on ideas by Waterfox and firefox-kde-opensuse

pkgname=plasmafox
_pkgname=firefox
pkgver=89.0
pkgrel=1
pkgdesc="Standalone web browser based on Firefox with better KDE integration"
arch=('i686' 'x86_64')
license=('MPL' 'GPL' 'LGPL')
url="https://build.opensuse.org/package/show/mozilla:Factory/MozillaFirefox"

depends=(gtk3 libxt mime-types dbus-glib ffmpeg nss ttf-font libpulse
		kplasmafoxhelper libvpx icu nspr dav1d aom harfbuzz graphite
		libwebp)

makedepends=('unzip' 'zip' 'diffutils' 'python-setuptools' 'python-psutil'
			 'python' 'yasm' 'mesa' 'imake' 'xorg-server-xvfb' 'libpulse'
			 'inetutils' 'autoconf2.13' 'rust' 'cargo' 'llvm' 'clang' 'gtk2' 'libevent'
			 'nodejs' 'cbindgen' 'nasm' 'zlib' 'lld' 'python-zstandard' 'dump_syms')

optdepends=('networkmanager: Location detection via available WiFi networks'
            'speech-dispatcher: Text-to-Speech'
            'libnotify: Notification integration'
            'libdbusmenu-gtk3: global menu support')

provides=("plasmafox=${pkgver}")
#conflicts=('plasmafox-esr')
#_patchrev=4fd43e0d4a8f
_mbrev=2389
_patchrevsuse=aedbca44a8a2958947bed31f28e3083ac0496f4a
_pfdate=20210531
options=('!emptydirs' '!strip')
#_patchurl=http://www.rosenauer.org/hg/mozilla/raw-file/$_patchrev
_patchurl=https://raw.githubusercontent.com/openSUSE/firefox-maintenance/$_patchrevsuse
source=(https://ftp.mozilla.org/pub/firefox/releases/$pkgver/source/$_pkgname-$pkgver.source.tar.xz{,.asc}
	mozconfig
	plasmafox.desktop
	vendor.js
	kde.js
	pgo-fix-missing-kdejs.patch
	add_missing_pgo_rule.patch
	#use-mcpu-native-with-lto-pgo.patch
	# arch patches
	0001-Use-remoting-name-for-GDK-application-names.patch
	# Plasmafox patchset
	plasmafox-${_pfdate}.patch
	# Firefox patchset
	firefox-kde-$_patchrevsuse.patch::$_patchurl/firefox/firefox-kde.patch
	# Gecko/toolkit patchset
	mozilla-kde-$_patchrevsuse.patch::$_patchurl/mozilla-kde.patch
	mozilla-nongnome-proxies-$_patchrevsuse.patch::$_patchurl/mozilla-nongnome-proxies.patch
	# Ubuntu
	#unity-menubar-r${_mbrev}.patch
	fix-hidden-buttons-with-csd-menubar.patch
	reduce-rust-debuginfo.patch
	# System Libs
	0004-bmo-847568-Support-system-harfbuzz.patch
	0005-bmo-847568-Support-system-graphite2.patch
	0006-bmo-1559213-Support-system-av1.patch
	# gentoo patches
	0021-bmo-1516081-Disable-watchdog-during-PGO-builds.patch
	0029-LTO-Only-enable-LTO-for-Rust-when-complete-build-use.patch
	# artwork
	about-logo.png
	about-logo@2x.png
	about-wordmark.svg
	plasmafox-wordmark.svg
	about.png
	default{16,22,24,32,48,64,128,256}.png
	# additions
	plasmafox{,-common}.profile
	plasmafox.psd
)
install=plasmafox.install
sha256sums=('db43d7d5796455051a5b847f6daa3423393803c9288c8b6d7f1186f5e2e0a90a'
            'SKIP'
            '306610d3cfb8cef3c618e8d37074df3f930ca8df362132893f764802ac4493e8'
            '6897dc8a9ef2a4d1b776e1ffb848c7db2653b4eee87585f62ef002443d58a096'
            '97a9f81f791abce42880232140d1834d6c7cc166ca3cf16d49476657e20e23fa'
            'b8cc5f35ec35fc96ac5c5a2477b36722e373dbb57eba87eb5ad1276e4df7236d'
            '2214d0df276fc3387aaf2b0facb47960783ea23c4673d9dcbd3a5daacb0f4c91'
            'f9067f62a25a7a77276e15f91cc9e7ba6576315345cfc6347b1b2e884becdb0c'
            'c585ba84b476605fffe4b1aa188f9744afe37c528b39ecd5cbea37681e86eeba'
            '6ca7ff71cb4a7c72eca39769afe8e18ec81cba36d9b570df15fc243867049243'
            '32f1ca9b4f462a512b350ca868bb562efc5e424206c00eea909514992fcd5e23'
            '0ae5bce3da13b7f58e37be6d7115bef323256d776195279592f4371179497f8a'
            '9843662fd9b766801a70bdef22bb996a1abd9d7c3781f1fb58b7034e575350a1'
            'fbd95cbcbc32673ef549b43b0d2de3ef0ef4fa303b6336e64993f2c8a73264e4'
            '482935782429b30f5e1581347a9a798705068c40f20bf4eee9304a254fd81bc8'
            '923a9373afc019202c0c07a7cba47042e9ebc78cc2605baecd99602beeaf82ed'
            '9feeea614ffe0bc9493ab2c3adc68aa547b2ee99f59ad15376356476b93571b8'
            '7c647432987edfa27926f3a7518961f098c121a91cf377f37194f5e547fcf248'
            '92d307d1592b939ee50f1fd2d951cdf2dcebd7e7a1c6511ffe25903e7428f2d9'
            '82129e30512477232556e939ee8ed64b999b0e095001d043b121c5e5d334692c'
            '1034a3edda8ffa889fcb4dcf57cb93f8f296f7c37e5cfcf1e5c6071a6f8f4261'
            'f908e1ddf9399344dc0d6163d9e23b5966c656cd35d614732e8a1dee7f02f7b4'
            '6f791b85debe8c12d542b2a9f1b6851aea7df28a2f52e762e09b5db8ec11a349'
            'a450b5aee59b15cba4a32e641d189d6d3641965b3916f769362701bbbdb6ba1a'
            'bdb5ff6cf072421a7bfd5d6d525b01ecb449dca0bf2bbe1830c3060571ce7718'
            '5bb9b27c16e09afbd7434840a022da7b83aa10590be9ec3ed150a92c2f420c22'
            '59b6762531cb68ff6e53a162b1c78dfe0db0996f1f3b84487c4e380b940ef939'
            'd0d4cee53baf8cee3e6dcf2d5b508060ffe9ba45f4f7e7b73e8a00258e2e4c1b'
            'c85e92938aae8edabdae08dd38799048385fd21458bbc130baab30cef1558ace'
            '2d3d7f408c6d5a589f737f594028b85bcb372f7738600b629c5c9b3620115256'
            '33226603f128928c0f5a191016793ab2792d8603c5aacd03d83f001c3891872f'
            'ad4aadfe095ad46d43b66fc6e686511c7c4a81d452fb71f2eb4775936fb0179e'
            '7e2062a8df9e9e28c51ff6435872a688cff040fdfa38ef93bf92e52d676e6dbc'
            '0a646abac6405b2e5d3bd0f13dc003e0ed45e1ad5856079274eb2936fa6d321b'
            '83e3f72eb8220a9962791487faa399e7f1fe19e3863cab5f28e83416e6ac2374'
            '022e47dece0dcc8a593a17958fc89bd135af9aa0e4e7f2c1e27dc2573b3949aa'
            '22d33cd66a1e1a8ff2ae086de145490b22c8cc1cb748f0273462a70c563e0b91')

validpgpkeys=(14F26682D0916CDD81E37B6D61B7B526D98F0353)

prepare() {
  #cd mozilla-unified
  cd firefox-${pkgver}
  cp "$srcdir/mozconfig" .mozconfig
  sed -i 's/\"BrowserApplication\"\, \"firefox\"/\"BrowserApplication\"\, \"plasmafox\"/g' $srcdir/firefox-kde-$_patchrevsuse.patch
  sed -i 's/kmozillahelper/kplasmafoxhelper/g' $srcdir/mozilla-kde-$_patchrevsuse.patch

  # set number of cores directly
  sed -i -e "s/multiprocessing.cpu_count()/$(nproc)/" build/moz.configure/lto-pgo.configure

  # multilocale
  # mkdir $srcdir/mozbuild
  # ln -sf /mnt/sparelin/l10n-base $srcdir/mozbuild/l10n-central || exit 4
  # echo "ac_add_options --with-l10n-base=${srcdir}/mozbuild/l10n-central" >> .mozconfig

  # Arch patches
  echo "---- Arch patches"
  patch -Np1 -i ../0001-Use-remoting-name-for-GDK-application-names.patch

  # KDE patches (W. Rosenauer)
  echo "---- Patching for KDE"
  patch -Np1 -i ../mozilla-nongnome-proxies-$_patchrevsuse.patch
  patch -Np1 -i ../mozilla-kde-$_patchrevsuse.patch
  patch -Np1 -i ../firefox-kde-$_patchrevsuse.patch

  # add globalmenu support
  echo "---- Ubuntu patches"
  #patch -Np1 -i ../unity-menubar-r${_mbrev}.patch
  patch -Np1 -i ../fix-hidden-buttons-with-csd-menubar.patch
  patch -Np1 -i ../reduce-rust-debuginfo.patch

  # add missing file Makefile for pgo builds
  patch -Np1 -i ../pgo-fix-missing-kdejs.patch
  patch -Np1 -i ../add_missing_pgo_rule.patch
  #patch -Np1 -i ../use-mcpu-native-with-lto-pgo.patch

  # gentoo patches
  echo "---- Gentoo patches"
  patch -Np1 -i ../0021-bmo-1516081-Disable-watchdog-during-PGO-builds.patch
  patch -Np1 -i ../0029-LTO-Only-enable-LTO-for-Rust-when-complete-build-use.patch

  # use more system libs
  echo "---- Patching for system libs"
  patch -Np1 -i ../0004-bmo-847568-Support-system-harfbuzz.patch
  patch -Np1 -i ../0005-bmo-847568-Support-system-graphite2.patch
  patch -Np1 -i ../0006-bmo-1559213-Support-system-av1.patch

  # Plasmafox patches
  echo "---- Plasmafox patches"
  patch -Np1 -i ../plasmafox-${_pfdate}.patch

  # Artwork
  cp "$srcdir/about-wordmark.svg" ./browser/branding/unofficial/content/
  cp "$srcdir/plasmafox-wordmark.svg" ./browser/branding/unofficial/content/
  cp "$srcdir/about-logo.png" ./browser/branding/unofficial/content/
  cp "$srcdir/about-logo@2x.png" ./browser/branding/unofficial/content/
  cp "$srcdir/about.png" ./browser/branding/unofficial/
  for i in 16 22 24 32 48 64 128 256; do
      cp "$srcdir/default$i.png" browser/branding/unofficial/
  done
}

build() {
  cd firefox-${pkgver}
  export MOZ_NOSPAM=1
  export MOZBUILD_STATE_PATH="$srcdir/mozbuild"
  export MOZ_ENABLE_FULL_SYMBOLS=1
  export STRIP=/bin/true
  export MACH_USE_SYSTEM_PYTHON=1

  ulimit -n 4096

  # Do PGO
  export DISPLAY=:92
  xvfb-run -a -n 92 -s "-screen 0 1920x1080x24 -nolisten tcp" \
  	./mach build

  ./mach buildsymbols

  # multilocale
  #export MOZ_CHROME_MULTILOCALE="de fr pl"
  #for AB_CD in $MOZ_CHROME_MULTILOCALE; do
  #	./mach build chrome-$AB_CD
  #done
}

package() {
  #cd mozilla-unified
  cd firefox-${pkgver}

  cp "$srcdir/kde.js" obj-x86_64-pc-linux-gnu/dist/bin/defaults/pref

  #AB_CD=multi ./mach package
  #DESTDIR="$pkgdir" AB_CD=multi ./mach install
  DESTDIR="$pkgdir" ./mach install

  install -Dvm644 "$srcdir/vendor.js" "$pkgdir/usr/lib/plasmafox/browser/defaults/preferences/vendor.js"
  install -Dvm644 "$srcdir/kde.js" "$pkgdir/usr/lib/plasmafox/browser/defaults/preferences/kde.js"

  install -Dvm644 "$srcdir/plasmafox.profile" "$pkgdir/usr/lib/plasmafox/distribution/plasmafox.profile"
  install -Dvm644 "$srcdir/plasmafox-common.profile" "$pkgdir/usr/lib/plasmafox/distribution/plasmafox-common.profile"
  install -Dvm644 "$srcdir/plasmafox.psd" "$pkgdir/usr/lib/plasmafox/distribution/plasmafox.psd"

  _distini="$pkgdir/usr/lib/plasmafox/distribution/distribution.ini"
  install -Dvm644 /dev/stdin "$_distini" <<END
[Global]
id=plasmafox
version=1.0
about=Plasmafox for Arch compatible distributions

[Preferences]
app.distributor=$pkgname
app.distributor.channel=$pkgname
END

  for i in 16 22 24 32 48 64 128 256; do
      install -Dvm644 browser/branding/unofficial/default$i.png \
        "$pkgdir/usr/share/icons/hicolor/${i}x${i}/apps/plasmafox.png"
  done

  install -Dvm644 browser/branding/unofficial/content/about-logo.png \
    "$pkgdir/usr/share/icons/hicolor/192x192/apps/plasmafox.png"
  install -Dm644 browser/branding/official/content/about-logo@2x.png \
    "$pkgdir/usr/share/icons/hicolor/384x384/apps/plasmafox.png"

  install -Dvm644 "$srcdir/plasmafox.desktop" "$pkgdir/usr/share/applications/plasmafox.desktop"

  # Install a wrapper to avoid confusion about binary path
  install -Dvm755 /dev/stdin "$pkgdir/usr/bin/$pkgname" <<END
#!/bin/sh
exec /usr/lib/$pkgname/plasmafox "\$@"
END

  # Replace duplicate binary with wrapper
  # https://bugzilla.mozilla.org/show_bug.cgi?id=658850
  ln -srfv "$pkgdir/usr/bin/$pkgname" "$pkgdir/usr/lib/$pkgname/plasmafox-bin"

  # Use system certificates
  local nssckbi="$pkgdir/usr/lib/$pkgname/libnssckbi.so"
  if [[ -e $nssckbi ]]; then
    ln -srfv "$pkgdir/usr/lib/libnssckbi.so" "$nssckbi"
  fi

  find . -name '*crashreporter-symbols-full.tar.zst' -exec \
	cp -fvt "$startdir" {} +
}

