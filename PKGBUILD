# Maintainer: torvic9 AT mailbox DOT org
# based on ideas by Waterfox and firefox-kde-opensuse

# enable gcc build
_usegcc=1

# enable gtk3 wayland (experimental)
_gtk3_wayland=0

# globalmenu
# to support globalmenu a patch from ubuntu is applied
# source:
# http://bazaar.launchpad.net/~mozillateam/firefox/firefox-trunk.head
# /view/head:/debian/patches/unity-menubar.patch

pkgname=plasmafox
_pkgname=firefox
pkgver=68.1.0esr
_pkgver=68.1.0
pkgrel=5
pkgdesc="Standalone web browser based on Firefox with better KDE integration"
arch=('i686' 'x86_64')
license=('MPL' 'GPL' 'LGPL')
url="https://build.opensuse.org/package/show/mozilla:Factory/MozillaFirefox"
depends=('mozilla-common' 'libxt' 'startup-notification' 'mime-types'
         'dbus-glib' 'hicolor-icon-theme'
	 'libvpx' 'icu'  'libevent' 'nss>=3.28.3' 'nspr>=4.10.6' 'hunspell' 'hunspell-en_US'
	 'sqlite' 'libnotify' 'ffmpeg' 'gtk3')

makedepends=('unzip' 'zip' 'diffutils' 'python' 'yasm' 'mesa' 'imake'
             'xorg-server-xvfb' 'libpulse' 'inetutils' 'autoconf2.13' 'rust'
             'cargo' 'mercurial' 'llvm' 'clang'
             'gtk2' 'nodejs' 'cbindgen' 'nasm')

optdepends=('networkmanager: Location detection via available WiFi networks'
            'speech-dispatcher: Text-to-Speech')
provides=("plasmafox=${pkgver}")
#conflicts=('firefox' 'firefox-kde')
#_patchrev=840132a4a9b3
_patchrev=8a3c73e74e65
_pfdate=20191001
_cpus=$(nproc)
options=('!emptydirs' '!makeflags')
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
        unity-menubar-r2258.patch
        pgo_fix_missing_kdejs.patch
        2001_system_graphite2_support.patch
        2000_system_harfbuzz_support.patch
	2015_fix_cssparser.patch
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
sha256sums=('f56f5fa5a4744be0b9acf259cb991254d708a50b9a0a12d1d846ffa5a6c409ac'
            'SKIP'
            'cf02e932ee0b5f52f3135a6c679b25346fce9ed03ff3bc2d096585f7c611c938'
            'b4552aac033d9712ec72c4c59871f711ecfdaad93a05543263bfedf47eb79205'
            '27adc95e19ff290e2576cd25b702005a576b93cbd52d36bde61c7644222bd577'
            'b8cc5f35ec35fc96ac5c5a2477b36722e373dbb57eba87eb5ad1276e4df7236d'
            '8aa2adbefc8579f0c4405d1c8d7da220caeaea2f096244c1bca4305592fa44e8'
            'ab07ab26617ff76fce68e07c66b8aa9b96c2d3e5b5517e51a3c3eac2edd88894'
            '42d97c38b85f0639588e15be614427a6d69f8c9b855363e7bfa3fc14fec8f7bf'
            '6b66eb3889159c777f55d5e7d4d397679407e7ca8f2269d6289e6945fec67404'
            'dd47e4fd81c088777e14dc6a08bf3a4aa8ac15f1022df3d22d48258f8dfdc31a'
            'ffa9d71bd6dd60eaaef70ba67444c75b6ce0313a107b5b086fd3d30df865ccbf'
            '03684be59adac8ab83c4c5cad3156879983b6d1311555fcaa8476684730d94f8'
            '2797d1e61031d24ee24bf682c9447b3b9c1bca10f8e6cbd597b854af2de1ec54'
            '6abc616964cac17807509dbc1c1aa7e4234f6793c14bf884222c258a9da4d055'
            'c8d7b19378e0ef15f9f9aefae95e4a7c024de88e78dc5bfc712c3bf5fe725ef1'
            '54e49fc744f5ec940c4dc1c75d891f33683ff68f5b11e68e5d05d7108c50ad52'
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
            '22d33cd66a1e1a8ff2ae086de145490b22c8cc1cb748f0273462a70c563e0b91'
)

validpgpkeys=(14F26682D0916CDD81E37B6D61B7B526D98F0353)

if [[ $_usegcc == 1 ]] ; then
  source+=('pgo+lto-with-gcc.patch')
  sha256sums+=('b2881efafbbdc434da3be96f006d5ade18f38731fe8461ee795d8f0d11a6541a')
fi

prepare() {
  #cd mozilla-unified
  cd firefox-${pkgver//esr}
  cp "$srcdir/mozconfig" .mozconfig
  sed -i 's/\"BrowserApplication\"\, \"firefox\"/\"BrowserApplication\"\, \"plasmafox\"/g' $srcdir/firefox-kde-$_patchrev.patch

  if [ $_gtk3_wayland == 1 ] ; then
      echo "ac_add_options --enable-default-toolkit=cairo-gtk3-wayland" \
           >> .mozconfig
  fi

  if [[ $_usegcc == 1 ]] ; then
    if in_array ccache ${BUILDENV[*]} ; then
      echo "ac_add_options --with-ccache=/usr/bin/sccache" >> .mozconfig
    fi
    #echo "ac_add_options --disable-elf-hack" >> .mozconfig
    echo "ac_add_options --enable-gold" >> .mozconfig
    echo "ac_add_options --enable-linker=gold" >> .mozconfig
    patch -Np1 -i "$srcdir/pgo+lto-with-gcc.patch"
  else
    echo "ac_add_options --enable-linker=lld" >> .mozconfig
    echo "ac_add_options --enable-clang-plugin" >> .mozconfig
  fi

  echo "mk_add_options MOZ_MAKE_FLAGS="\"-j$_cpus\""" >> .mozconfig

  patch -Np1 -i "../0001-Use-remoting-name-for-GDK-application-names.patch"
  msg "Patching for KDE"
  patch -Np1 -i "../mozilla-nongnome-proxies-$_patchrev.patch"
  patch -Np1 -i "../mozilla-kde-$_patchrev.patch"
  patch -Np1 -i "../firefox-kde-$_patchrev.patch"
  # add globalmenu support
  patch -Np1 -i "../unity-menubar-r2258.patch"

  # add missing file Makefile for pgo builds
  patch -Np1 -i "../pgo_fix_missing_kdejs.patch"

  patch -Np1 -i "../2000_system_harfbuzz_support.patch"
  patch -Np1 -i "../2001_system_graphite2_support.patch"
  patch -Np1 -i "../2015_fix_cssparser.patch"

  patch -Np1 -i "../plasmafox-${_pfdate}.patch"
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
  cd firefox-${pkgver//esr}
  #export MOZ_SOURCE_REPO="$_repo"
  export MOZ_NOSPAM=1
  export MOZ_PGO=1
  export MOZBUILD_STATE_PATH="$srcdir/mozbuild"
  export STRIP=/bin/true

  if [[ $_usegcc == 1 ]] ; then
    export CC=gcc
    export CXX=g++
    export AR=gcc-ar
    export NM=gcc-nm
    export RANLIB=gcc-ranlib
  else
    export CC=clang
    export CXX=clang++
    export AR=llvm-ar
    export NM=llvm-nm
    export RANLIB=llvm-ranlib
  fi
  
  xvfb-run -a -n 97 -s "-screen 0 1600x1200x24" ./mach build
  #./mach build
  ./mach buildsymbols
  #./mach resource-usage
}

package() {
  #cd mozilla-unified
  cd firefox-${pkgver//esr}
  
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
app.distributor=plasmafox
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
