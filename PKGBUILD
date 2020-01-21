# Maintainer: torvic9 AT mailbox DOT org
# based on ideas by Waterfox and firefox-kde-opensuse

# enable gtk3 wayland (experimental)
_gtk3_wayland=0

pkgname=plasmafox
_pkgname=firefox
pkgver=72.0.2
pkgrel=1
pkgdesc="Standalone web browser based on Firefox with better KDE integration"
arch=('i686' 'x86_64')
license=('MPL' 'GPL' 'LGPL')
url="https://build.opensuse.org/package/show/mozilla:Factory/MozillaFirefox"
depends=('libxt' 'startup-notification' 'mime-types'
         'dbus-glib' 'libvpx' 'icu' 'libevent' 'ttf-font' 'libpulse'
         'nss' 'nspr' 'sqlite' 'libnotify' 'ffmpeg' 'gtk3'
         'dav1d' 'aom' 'harfbuzz' 'graphite' 'libwebp' 'libevent'
	 'kplasmafoxhelper')

makedepends=('unzip' 'zip' 'diffutils' 'python2-setuptools' 'python2-psutil'
			 'python' 'yasm' 'mesa' 'imake' 'xorg-server-xvfb' 'libpulse'
			 'inetutils' 'autoconf2.13' 'rust' 'cargo' 'llvm' 'clang' 'gtk2'
			 'nodejs' 'cbindgen' 'nasm' 'zlib')

optdepends=('networkmanager: Location detection via available WiFi networks'
            'speech-dispatcher: Text-to-Speech')
provides=("plasmafox=${pkgver}")
conflicts=('plasmafox-esr')
_patchrev=4c5d44d40a03
_pfdate=20200107
_cpus=$(nproc)
options=('!emptydirs' '!makeflags' '!strip')
_patchurl=http://www.rosenauer.org/hg/mozilla/raw-file/$_patchrev
#_repo=https://hg.mozilla.org/mozilla-unified #_RELEASE
source=(https://ftp.mozilla.org/pub/firefox/releases/$pkgver/source/$_pkgname-$pkgver.source.tar.xz{,.asc}
		#"hg+$_repo#tag=FIREFOX_${pkgver//./_}_RELEASE"
        mozconfig
        plasmafox.desktop
        vendor.js
        kde.js
		user.js
		0001-Use-remoting-name-for-GDK-application-names.patch
		plasmafox-${_pfdate}.patch
        # Firefox patchset
        #firefox-branded-icons-$_patchrev.patch::$_patchurl/firefox-branded-icons.patch
        firefox-kde-$_patchrev.patch::$_patchurl/firefox-kde.patch
        # Gecko/toolkit patchset
        mozilla-kde-$_patchrev.patch::$_patchurl/mozilla-kde.patch
        mozilla-nongnome-proxies-$_patchrev.patch::$_patchurl/mozilla-nongnome-proxies.patch
        unity-menubar-r2298.patch
        pgo_fix_missing_kdejs.patch
		Bug_1584000_Migrate_glyph_to_character_association_code.patch
		2000_system_harfbuzz_support.patch
		2001_system_graphite2_support.patch
        7002_system_av1_support.patch
        # artwork
        #about-background.png
        about-logo.png
		about-logo@2x.png
        about-wordmark.svg
        plasmafox-wordmark.svg
        about.png
        default{16,22,24,32,48,64,128,256}.png
		# additions
		plasmafox.profile
		plasmafox.psd
)
install=plasmafox.install
sha256sums=('77fd224bea885172d757aef587ad443f2171aa84e4297bca55df91a1951be389'
            'SKIP'
            '07f9fa1d76964ae597c559c56b3e3b67dc8048cfe5257a9725cc1d63d2c94428'
            'b4552aac033d9712ec72c4c59871f711ecfdaad93a05543263bfedf47eb79205'
            'ee730839ed63469c7ab8309b26566db00d0ffeedbb70c87989660d9837bc9cb5'
            'b8cc5f35ec35fc96ac5c5a2477b36722e373dbb57eba87eb5ad1276e4df7236d'
            '8aa2adbefc8579f0c4405d1c8d7da220caeaea2f096244c1bca4305592fa44e8'
            'ab07ab26617ff76fce68e07c66b8aa9b96c2d3e5b5517e51a3c3eac2edd88894'
            'c5171b082942d83cb9901717e15bd6829e67157bdc1ae2a55d8020b334da5fc5'
            'bceea99966ac9cf7d23091fef0cef660c512a6ecd038483fb2d612c8ad7c22be'
            'c819d1777e4cb4a069e33c6b56fbb2da0d49107b8fc536c260a9a652cac9f31e'
            'ffa9d71bd6dd60eaaef70ba67444c75b6ce0313a107b5b086fd3d30df865ccbf'
            '70b756e17d41f07c2160faa606c1b86f28ff07acc9b5d324d11bc7de300d6c82'
            '2797d1e61031d24ee24bf682c9447b3b9c1bca10f8e6cbd597b854af2de1ec54'
            '38cd1121267b49b2d04104ae1dfc61d4794b27dcc26f6c3710dc96bff21f2183'
            '7e7cf4ea6ab4c47e382b8ccefd092553f103a7def295ae6c9f82f9989fa15778'
            'ff34e784815583996c2f9576989178b2a5016bb4afe69771a08070a888fae2f7'
            '802e4c741ba503535a4df7bf03d21837d1c8e1d5f5c928028f869e23d202c1c0'
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
            '7d544704f4acf50f437299ed4025e429a104758bc3af5007e933d67b00c1151b'
            '22d33cd66a1e1a8ff2ae086de145490b22c8cc1cb748f0273462a70c563e0b91')

validpgpkeys=(14F26682D0916CDD81E37B6D61B7B526D98F0353)

prepare() {
  #cd mozilla-unified
  cd firefox-${pkgver}
  cp "$srcdir/mozconfig" .mozconfig
  sed -i 's/\"BrowserApplication\"\, \"firefox\"/\"BrowserApplication\"\, \"plasmafox\"/g' $srcdir/firefox-kde-$_patchrev.patch

  if [ $_gtk3_wayland == 1 ] ; then
      echo "ac_add_options --enable-default-toolkit=cairo-gtk3-wayland" \
           >> .mozconfig
  fi

  # ccache/sccache
  # if in_array ccache ${BUILDENV[*]} ; then
  # echo "ac_add_options --with-ccache" >> .mozconfig
  # echo "mk_add_options 'export RUSTC_WRAPPER=sccache'" >> .mozconfig
  # echo "mk_add_options 'export SCCACHE_VERBOSE_STATS=1'" >> .mozconfig
  # fi

  echo "mk_add_options MOZ_MAKE_FLAGS="\"-j$_cpus\""" >> .mozconfig

  # multilocale
  # mkdir $srcdir/mozbuild
  # ln -sf /mnt/sparelin/l10n-base $srcdir/mozbuild/l10n-central || exit 4
  # echo "ac_add_options --with-l10n-base=${srcdir}/mozbuild/l10n-central" >> .mozconfig

  # Arch patches
  patch -Np1 -i ../0001-Use-remoting-name-for-GDK-application-names.patch

  # KDE patches (W. Rosenauer)
  msg "Patching for KDE"
  patch -Np1 -i ../mozilla-nongnome-proxies-$_patchrev.patch
  patch -Np1 -i ../mozilla-kde-$_patchrev.patch
  patch -Np1 -i ../firefox-kde-$_patchrev.patch

  # add globalmenu support
  msg "Ubuntu global menu"
  patch -Np1 -i ../unity-menubar-r2298.patch

  # add missing file Makefile for pgo builds
  patch -Np1 -i ../pgo_fix_missing_kdejs.patch

  patch -Rp1 -i ../Bug_1584000_Migrate_glyph_to_character_association_code.patch

  # use more system libs
  patch -Np1 -i ../2000_system_harfbuzz_support.patch
  patch -Np1 -i ../2001_system_graphite2_support.patch
  patch -Np1 -i ../7002_system_av1_support.patch

  # Plasmafox patches
  msg "Plasmafox patches"
  patch -Np1 -i ../plasmafox-${_pfdate}.patch

  # Artwork
  cp "$srcdir/about-wordmark.svg" ./browser/branding/unofficial/content/
  cp "$srcdir/plasmafox-wordmark.svg" ./browser/components/newtab/data/content/assets/
  cp "$srcdir/about-logo.png" ./browser/branding/unofficial/content/
  cp "$srcdir/about-logo@2x.png" ./browser/branding/unofficial/content/
  cp "$srcdir/about.png" ./browser/branding/unofficial/
  for i in 16 22 24 32 48 64 128 256; do
      cp "$srcdir/default$i.png" browser/branding/unofficial/
  done
}

build() {
  #cd mozilla-unified
  cd firefox-${pkgver}
  #export MOZ_SOURCE_REPO="$_repo"
  export MOZ_NOSPAM=1
  export MOZBUILD_STATE_PATH="$srcdir/mozbuild"
  export STRIP=/bin/true
  #export CARGO_HOME="$srcdir/.cargo"
  ulimit -n 4096

  export CC='/opt/clang/bin/clang --target=x86_64-unknown-linux-gnu'
  export CXX='/opt/clang/bin/clang++ --target=x86_64-unknown-linux-gnu'
  export AR=/opt/clang/bin/llvm-ar
  export NM=/opt/clang/bin/llvm-nm
  export RANLIB=/opt/clang/bin/llvm-ranlib
  #export RUSTC_WRAPPER=sccache

  # -fno-plt with cross-LTO causes obscure LLVM errors
  # LLVM ERROR: Function Import: link error
  CFLAGS="${CFLAGS/-fno-plt/}"
  CXXFLAGS="${CXXFLAGS/-fno-plt/}"

  # Do 3-tier PGO
  msg2 "Building instrumented browser..."
  cat >.mozconfig ../mozconfig - <<END
ac_add_options --enable-profile-generate=cross
END
  ./mach build

  msg2 "Profiling instrumented browser..."
  ./mach package
  LLVM_PROFDATA=llvm-profdata \
  	JARLOG_FILE="$PWD/jarlog" \
  	xvfb-run -a -n 92 -s "-screen 0 1600x1200x24" \
  	./mach python build/pgo/profileserver.py

  if [[ ! -s merged.profdata ]]; then
  	error "No profile data produced."
  	return 1
  fi

  if [[ ! -s jarlog ]]; then
  	error "No jar log produced."
  	return 1
  fi

  msg2 "Removing instrumented browser..."
  ./mach clobber

  msg2 "Building optimized browser..."
  cat >.mozconfig ../mozconfig - <<END
ac_add_options --enable-lto=cross
ac_add_options --enable-profile-use=cross
ac_add_options --with-pgo-profile-path=${PWD@Q}/merged.profdata
ac_add_options --with-pgo-jarlog=${PWD@Q}/jarlog
END
  ./mach build

  msg2 "Building symbol archive..."
  ./mach buildsymbols
  ./mach package

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

  install -Dvm644 "$srcdir/user.js" "$pkgdir/usr/lib/plasmafox/distribution/user.js"
  install -Dvm644 "$srcdir/plasmafox.profile" "$pkgdir/usr/lib/plasmafox/distribution/plasmafox.firejail-profile"
  install -Dvm644 "$srcdir/plasmafox.psd" "$pkgdir/usr/lib/plasmafox/distribution/plasmafox.psd"

  _distini="$pkgdir/usr/lib/plasmafox/distribution/distribution.ini"
  install -Dvm644 /dev/stdin "$_distini" <<END
[Global]
id=plasmafox
version=1.0
about=Plasmafox for Manjaro

[Preferences]
app.distributor=$pkgname
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

  find . -name '*crashreporter-symbols-full.zip' -exec \
	cp -fvt "$startdir" {} +
  ./mach clobber
}

