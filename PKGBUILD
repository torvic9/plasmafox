# Maintainer: torvic9 AT mailbox DOT org
# based on ideas by Waterfox and firefox-kde-opensuse

# enable gcc build
_usegcc=0

# enable gtk3 wayland (experimental)
_gtk3_wayland=0

# globalmenu
# to support globalmenu a patch from ubuntu is applied
# source:
# http://bazaar.launchpad.net/~mozillateam/firefox/firefox-trunk.head
# /view/head:/debian/patches/unity-menubar.patch

pkgname=plasmafox
_pkgname=firefox
pkgver=69.0.2
pkgrel=1
pkgdesc="Standalone web browser based on Firefox with better KDE integration"
arch=('i686' 'x86_64')
license=('MPL' 'GPL' 'LGPL')
url="https://build.opensuse.org/package/show/mozilla:Factory/MozillaFirefox"
depends=('mozilla-common' 'libxt' 'startup-notification' 'mime-types'
         'dbus-glib' 'libvpx' 'icu' 'libevent' 'ttf-font' 'libpulse'
         'nss' 'nspr' 'sqlite' 'libnotify' 'ffmpeg' 'gtk3' 'kplasmafoxhelper'
         'dav1d' 'aom' 'harfbuzz' 'graphite' 'libwebp' 'libevent')

makedepends=('unzip' 'zip' 'diffutils' 'python2-setuptools' 'python2-psutil'
			 'python' 'yasm' 'mesa' 'imake' 'xorg-server-xvfb' 'libpulse'
			 'inetutils' 'autoconf2.13' 'rust' 'cargo' 'llvm' 'clang' 'gtk2' 
			 'nodejs' 'cbindgen' 'nasm')

optdepends=('networkmanager: Location detection via available WiFi networks'
            'speech-dispatcher: Text-to-Speech')
provides=("plasmafox=${pkgver}")
conflicts=('plasmafox-esr')
_patchrev=9e4b30f05706
_pfdate=20191006
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
        no-relinking.patch
        unity-menubar-r2271.patch
        pgo_fix_missing_kdejs.patch
		2000_system_harfbuzz_support.patch
        2001_system_graphite2_support.patch
        7002_system_av1_support.patch
        # artwork
        about-background.png
        about-logo.png
        about-wordmark.svg
        plasmafox-wordmark.svg
        about.png
        default{16,22,24,32,48,64,128,256}.png
	# additions
	plasmafox.profile
	plasmafox.psd
)
install=plasmafox.install
sha256sums=('2904ef954626d2a7f320670ccb7cb5d9060610f091c94190a6cbee14aa2cd82e'
            'SKIP'
            '896913e7746d4773d0032a8e5de1255e3def805b2cfc923b59dc9dd530e6624b'
            'b4552aac033d9712ec72c4c59871f711ecfdaad93a05543263bfedf47eb79205'
            '27adc95e19ff290e2576cd25b702005a576b93cbd52d36bde61c7644222bd577'
            'b8cc5f35ec35fc96ac5c5a2477b36722e373dbb57eba87eb5ad1276e4df7236d'
            '8aa2adbefc8579f0c4405d1c8d7da220caeaea2f096244c1bca4305592fa44e8'
            'ab07ab26617ff76fce68e07c66b8aa9b96c2d3e5b5517e51a3c3eac2edd88894'
            'ddae435a5b9a757a21edb9c3da5d8711b74699642ef0dc7bc8e1f12f4c87e864'
            '3461cc5a196d53e427ec623836b632158ea410821031078764f7bedc31baa3ba'
            'a0eaea0fcb02d9b2c24d35276cb03a0a1923b13391730a77f46452862d6e2cc0'
            'ffa9d71bd6dd60eaaef70ba67444c75b6ce0313a107b5b086fd3d30df865ccbf'
            '2dc9d1aa5eb7798c89f46478f254ae61e4122b4d1956d6044426288627d8a014'
            '2fd7261853ee2ed95ca6a68838de1e7cc18e01c7a56db9abcad4ac93867cedf7'
            '2797d1e61031d24ee24bf682c9447b3b9c1bca10f8e6cbd597b854af2de1ec54'
            'f4dec8eabd537805192114fa519297f42b1d85c48648a36d823d7bced9536ba5'
            '88a8c2f813d10dad8e0e8b4453a6741ceca58174534fdfeb5480152c25b2f692'
            '263e61385b24b3db8c8c3b35bedccc6fdffdad9891437671e92b9ed026d5b1a3'
            '84e4725ed246046a419a5cb005a0d681e3ea7e179a3c7cdb341a1149ab4761f9'
            'f908e1ddf9399344dc0d6163d9e23b5966c656cd35d614732e8a1dee7f02f7b4'
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

if [[ $_usegcc == 1 ]] ; then
  source+=('pgo+lto-with-gcc.patch')
  sha256sums+=('7dd7c1f06fcca05ee27230be787092768c048379560a19d6b73935dd2891e6b3')
fi

prepare() {
  #cd mozilla-unified
  cd firefox-${pkgver}
  cp "$srcdir/mozconfig" .mozconfig
  sed -i 's/\"BrowserApplication\"\, \"firefox\"/\"BrowserApplication\"\, \"plasmafox\"/g' $srcdir/firefox-kde-$_patchrev.patch

  if [ $_gtk3_wayland == 1 ] ; then
      echo "ac_add_options --enable-default-toolkit=cairo-gtk3-wayland" \
           >> .mozconfig
  fi

  if in_array ccache ${BUILDENV[*]} ; then
      echo "ac_add_options --with-ccache=/usr/bin/sccache" >> .mozconfig
  fi

  if [[ $_usegcc == 1 ]] ; then
    echo "ac_add_options --disable-elf-hack" >> .mozconfig
    echo "ac_add_options --enable-gold" >> .mozconfig
    echo "ac_add_options --enable-linker=gold" >> .mozconfig
    patch -Np1 -i "$srcdir/pgo+lto-with-gcc.patch"
  else
    echo "ac_add_options --enable-linker=lld" >> .mozconfig
  fi

  echo "mk_add_options MOZ_MAKE_FLAGS="\"-j$_cpus\""" >> .mozconfig

  # Arch patches
  patch -Np1 -i "../0001-Use-remoting-name-for-GDK-application-names.patch"
  patch -Np1 -i "../no-relinking.patch"

  # KDE patches (W. Rosenauer)
  msg "Patching for KDE"
  patch -Np1 -i "../mozilla-nongnome-proxies-$_patchrev.patch"
  patch -Np1 -i "../mozilla-kde-$_patchrev.patch"
  patch -Np1 -i "../firefox-kde-$_patchrev.patch"

  # add globalmenu support
  patch -Np1 -i "../unity-menubar-r2271.patch"

  # add missing file Makefile for pgo builds
  patch -Np1 -i "../pgo_fix_missing_kdejs.patch"

  # use more system libs
  patch -Np1 -i "../2000_system_harfbuzz_support.patch"
  patch -Np1 -i "../2001_system_graphite2_support.patch"
  patch -Np1 -i "../7002_system_av1_support.patch"

  # Plasmafox patches
  patch -Np1 -i "../plasmafox-${_pfdate}.patch"

  # Artwork
  cp "$srcdir/about-wordmark.svg" ./browser/branding/unofficial/content/
  cp "$srcdir/plasmafox-wordmark.svg" ./browser/components/newtab/data/content/assets/
  cp "$srcdir/about-logo.png" ./browser/branding/unofficial/content/
  cp "$srcdir/about-background.png" ./browser/branding/unofficial/content/
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

  if [[ $_usegcc == 1 ]] ; then
	export MOZ_PGO=1
	export CC=gcc
	export CXX=g++
	export AR=gcc-ar
	export NM=gcc-nm
	export RANLIB=gcc-ranlib

	xvfb-run -a -n 97 -s "-extension GLX -screen 0 1600x1200x24" ./mach build
	./mach buildsymbols
	#./mach resource-usage

  else
	export CC='clang --target=x86_64-unknown-linux-gnu'
	export CXX='clang++ --target=x86_64-unknown-linux-gnu'
	export AR=llvm-ar
	export NM=llvm-nm
	export RANLIB=llvm-ranlib

	# -fno-plt with cross-LTO causes obscure LLVM errors
	# LLVM ERROR: Function Import: link error
	CFLAGS="${CFLAGS/-fno-plt/}"
	CXXFLAGS="${CXXFLAGS/-fno-plt/}"

	# Do 3-tier PGO
	msg2 "Building instrumented browser..."
	cat >.mozconfig ../mozconfig - <<END
ac_add_options --enable-profile-generate
END
	./mach build

	msg2 "Profiling instrumented browser..."
	./mach package
	LLVM_PROFDATA=llvm-profdata \
		JARLOG_FILE="$PWD/jarlog" \
		xvfb-run -a -n 92 -s "-screen 0 1600x1200x24" \
		./mach python build/pgo/profileserver.py

	if ! compgen -G '*.profraw' >&2; then
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
ac_add_options --enable-profile-use
ac_add_options --with-pgo-profile-path=${PWD@Q}
ac_add_options --with-pgo-jarlog=${PWD@Q}/jarlog
END
	./mach build

	msg2 "Building symbol archive..."
	./mach buildsymbols
  fi
}

package() {
  #cd mozilla-unified
  cd firefox-${pkgver}
  
  [[ "$CARCH" == "i686" ]] && cp "$srcdir/kde.js" obj-i686-pc-linux-gnu/dist/bin/defaults/pref
  [[ "$CARCH" == "x86_64" ]] && cp "$srcdir/kde.js" obj-x86_64-pc-linux-gnu/dist/bin/defaults/pref

  DESTDIR="$pkgdir" ./mach install

  install -Dm644 "$srcdir/vendor.js" "$pkgdir/usr/lib/plasmafox/browser/defaults/preferences/vendor.js"
  install -Dm644 "$srcdir/kde.js" "$pkgdir/usr/lib/plasmafox/browser/defaults/preferences/kde.js"

  install -Dm644 "$srcdir/user.js" "$pkgdir/usr/lib/plasmafox/distribution/user.js"
  install -Dm644 "$srcdir/plasmafox.profile" "$pkgdir/usr/lib/plasmafox/distribution/plasmafox.firejail-profile"
  install -Dm644 "$srcdir/plasmafox.psd" "$pkgdir/usr/lib/plasmafox/distribution/plasmafox.psd"

  _distini="$pkgdir/usr/lib/plasmafox/distribution/distribution.ini"
  install -Dm644 /dev/stdin "$_distini" <<END
[Global]
id=plasmafox
version=1.0
about=Plasmafox for Manjaro

[Preferences]
app.distributor=$pkgname
END

  for i in 16 22 24 32 48 64 128 256; do
      install -Dm644 browser/branding/unofficial/default$i.png \
        "$pkgdir/usr/share/icons/hicolor/${i}x${i}/apps/plasmafox.png"
  done

  install -Dm644 browser/branding/unofficial/content/about-logo.png \
    "$pkgdir/usr/share/icons/hicolor/192x192/apps/plasmafox.png"
  #install -Dm644 browser/branding/official/content/about-logo@2x.png \
  #  "$pkgdir/usr/share/icons/hicolor/384x384/apps/firefox.png"

  install -Dm644 "$srcdir/plasmafox.desktop" "$pkgdir/usr/share/applications/plasmafox.desktop"

  #workaround for now
  #https://bugzilla.mozilla.org/show_bug.cgi?id=658850
  ln -sf plasmafox "$pkgdir/usr/lib/plasmafox/plasmafox-bin"
}
