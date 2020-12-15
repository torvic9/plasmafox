# Maintainer: torvic9 AT mailbox DOT org
# based on ideas by Waterfox and firefox-kde-opensuse

pkgname=plasmafox
_pkgname=firefox
pkgver=78.6.0esr
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
			 'inetutils' 'autoconf2.13' 'rust' 'cargo' 'llvm' 'clang' 'gtk2'
			 'nodejs' 'cbindgen' 'nasm' 'zlib' 'lld')

optdepends=('networkmanager: Location detection via available WiFi networks'
            'speech-dispatcher: Text-to-Speech'
            'libnotify: Notification integration'
            'libdbusmenu-gtk3: global menu support')

provides=("plasmafox-esr=${pkgver}")
#conflicts=('plasmafox')
_patchrev=909f866430ee
_mbrev=2334
#_patchrevsuse=06fa6ff893b0d132078874c384e25c59
_pfdate=20201019
options=('!emptydirs')
_patchurl=http://www.rosenauer.org/hg/mozilla/raw-file/$_patchrev
source=(https://ftp.mozilla.org/pub/firefox/releases/$pkgver/source/$_pkgname-$pkgver.source.tar.xz{,.asc}
	#"hg+$_repo#tag=FIREFOX_${pkgver//./_}_RELEASE"
	mozconfig
	plasmafox.desktop
	vendor.js
	kde.js
	#user.js
	pgo-fix-missing-kdejs.patch
	0001-Use-remoting-name-for-GDK-application-names.patch
	0029-LTO-Only-enable-LTO-for-Rust-when-complete-build-use.patch
	rust_1.48.patch
	# Plasmafox patchset
	plasmafox-${_pfdate}.patch
	# Firefox patchset
	firefox-kde-$_patchrev.patch::$_patchurl/firefox-kde.patch
	# Gecko/toolkit patchset
	mozilla-kde-$_patchrev.patch::$_patchurl/mozilla-kde.patch
	mozilla-nongnome-proxies-$_patchrev.patch::$_patchurl/mozilla-nongnome-proxies.patch
	# Menubar
	unity-menubar-r${_mbrev}.patch
	# System Libs
	0004-bmo-847568-Support-system-harfbuzz.patch
	0005-bmo-847568-Support-system-graphite2.patch
	0006-bmo-1559213-Support-system-av1.patch
	# artwork
	#about-background.png
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
sha256sums=('5e69f9bfd1a35decdae8d4b28da8100820e58b429f539fa9884802347631cf53'
            'SKIP'
            '82bc25aae4b26adf086d4182cc2714f04a09491eb49f6327978322db1aa13910'
            '6897dc8a9ef2a4d1b776e1ffb848c7db2653b4eee87585f62ef002443d58a096'
            '84e7309bcbb984b10e3ca11f85af7eb41fee1681c3564f98ff4a5469a93604a4'
            'b8cc5f35ec35fc96ac5c5a2477b36722e373dbb57eba87eb5ad1276e4df7236d'
            '2214d0df276fc3387aaf2b0facb47960783ea23c4673d9dcbd3a5daacb0f4c91'
            '3bb7463471fb43b2163a705a79a13a3003d70fff4bbe44f467807ca056de9a75'
            '1034a3edda8ffa889fcb4dcf57cb93f8f296f7c37e5cfcf1e5c6071a6f8f4261'
            'd90faa59dc59f457c5770b3cc1ee4caa5b255e754ab9ab3993af894992c007e4'
            '2d8dd09acb33991f9c12cc0aeda49be3241ac5f77a80e74357ea695e065f3ae9'
            'ed959c0f3c2c394c4ee52ff381c0059f9d48b65742dfe8e11f0031f660ba5a7f'
            '32efbabbd15dfc4f350b61d2441d7035111d732b7dd496dfd43049ea3484ce5c'
            '6c7995302586f6cd76d51409b75300e786f53aafce265d2669fd86d510446a83'
            '411f1580801f7b1484575d38f5967cf3d8c68efbba8dd4e2950e13a763bd09d8'
            '42b4d83b0e18599dcafde7195a04343858a1af91d26e78cf39b8bd622f123849'
            '77e57e3ee3e2601c3cca9c499e534b00027ac3285ccdd108172c2a4e74d4b58d'
            'd4e5b4d747cedb6d4485e44787a965675df90a7388d41122913a84ccb5d82f03'
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
  cd firefox-${pkgver%esr}
  cp "$srcdir/mozconfig" .mozconfig
  sed -i 's/\"BrowserApplication\"\, \"firefox\"/\"BrowserApplication\"\, \"plasmafox\"/g' $srcdir/firefox-kde-$_patchrev.patch

  # multilocale
  # mkdir $srcdir/mozbuild
  # ln -sf /mnt/sparelin/l10n-base $srcdir/mozbuild/l10n-central || exit 4
  # echo "ac_add_options --with-l10n-base=${srcdir}/mozbuild/l10n-central" >> .mozconfig

  # Arch patches
  echo "---- Arch patches"
  patch -Np1 -i ../0001-Use-remoting-name-for-GDK-application-names.patch

  # rust patches
  patch -Np1 -i ../0029-LTO-Only-enable-LTO-for-Rust-when-complete-build-use.patch
  patch -Np1 -i ../rust_1.48.patch

  # KDE patches (W. Rosenauer)
  echo "---- Patching for KDE"
  patch -Np1 -i ../mozilla-nongnome-proxies-$_patchrev.patch
  patch -Np1 -i ../mozilla-kde-$_patchrev.patch
  patch -Np1 -i ../firefox-kde-$_patchrev.patch

  # add globalmenu support
  echo "---- Ubuntu global menu"
  patch -Np1 -i ../unity-menubar-r${_mbrev}.patch

  # add missing file Makefile for pgo builds
  patch -Np1 -i ../pgo-fix-missing-kdejs.patch

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
  cd firefox-${pkgver%esr}
  export MOZ_NOSPAM=1
  export MOZBUILD_STATE_PATH="$srcdir/mozbuild"
  export STRIP=/bin/true

  ulimit -n 4096

  export CC='clang --target=x86_64-unknown-linux-gnu'
  export CXX='clang++ --target=x86_64-unknown-linux-gnu'
  export AR=llvm-ar
  export NM=llvm-nm
  export RANLIB=llvm-ranlib
  export STRIP=llvm-strip
  export MACH_USE_SYSTEM_PYTHON=1

  # -fno-plt with cross-LTO causes obscure LLVM errors
  # LLVM ERROR: Function Import: link error
  #CFLAGS="${CFLAGS/-fno-plt/}"
  #CXXFLAGS="${CXXFLAGS/-fno-plt/}"

  # Do 3-tier PGO
  echo "Building instrumented browser..."
  cat >.mozconfig ../mozconfig - <<END
ac_add_options --enable-profile-generate=cross
END
  ./mach build

  echo "Profiling instrumented browser..."
  ./mach package
  LLVM_PROFDATA=llvm-profdata \
  	JARLOG_FILE="$PWD/jarlog" \
  	xvfb-run -a -n 92 -s "-screen 0 1920x1080x24 -nolisten tcp" \
  	./mach python build/pgo/profileserver.py

  stat -c "Profile data found (%s bytes)" merged.profdata
  test -s merged.profdata

  stat -c "Jar log found (%s bytes)" jarlog
  test -s jarlog

  echo "Removing instrumented browser..."
  ./mach clobber

  echo "Building optimized browser..."
  cat >.mozconfig ../mozconfig - <<END
ac_add_options --enable-lto=cross
ac_add_options --enable-profile-use=cross
ac_add_options --with-pgo-profile-path=${PWD@Q}/merged.profdata
ac_add_options --with-pgo-jarlog=${PWD@Q}/jarlog
END
  ./mach build

  echo "Building symbol archive..."
  ./mach buildsymbols

  # multilocale
  #export MOZ_CHROME_MULTILOCALE="de fr pl"
  #for AB_CD in $MOZ_CHROME_MULTILOCALE; do
  #	./mach build chrome-$AB_CD
  #done
}

package() {
  #cd mozilla-unified
  cd firefox-${pkgver%esr}

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
about=Plasmafox ESR for Arch compatible distros

[Preferences]
app.distributor=${pkgname}
app.distributor.channel=${pkgname}
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
  install -Dvm755 /dev/stdin "$pkgdir/usr/bin/${pkgname}" <<END
#!/bin/sh
exec /usr/lib/${pkgname}/plasmafox "\$@"
END

  # Replace duplicate binary with wrapper
  # https://bugzilla.mozilla.org/show_bug.cgi?id=658850
  ln -srfv "$pkgdir/usr/bin/${pkgname}" "$pkgdir/usr/lib/${pkgname}/plasmafox-bin"

  # Use system certificates
  local nssckbi="$pkgdir/usr/lib/${pkgname}/libnssckbi.so"
  if [[ -e $nssckbi ]]; then
    ln -srfv "$pkgdir/usr/lib/libnssckbi.so" "$nssckbi"
  fi

  find . -name '*crashreporter-symbols-full.zip' -exec \
	cp -fvt "$startdir" {} +
}

