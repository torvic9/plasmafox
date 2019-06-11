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
pkgver=67.0.2
pkgrel=0.8
pkgdesc="Standalone web browser based on Firefox with better KDE integration"
arch=('i686' 'x86_64')
license=('MPL' 'GPL' 'LGPL')
url="https://build.opensuse.org/package/show/mozilla:Factory/MozillaFirefox"
depends=('mozilla-common' 'libxt' 'startup-notification' 'mime-types'
         'dbus-glib' 'hicolor-icon-theme'
	 'libvpx' 'icu'  'libevent' 'nss>=3.28.3' 'nspr>=4.10.6' 'hunspell' 'hunspell-en_US'
	 'sqlite' 'libnotify' 'kplasmafoxhelper' 'ffmpeg' 'gtk3')

makedepends=('unzip' 'zip' 'diffutils' 'python' 'yasm' 'mesa' 'imake'
             'xorg-server-xvfb' 'libpulse' 'inetutils' 'autoconf2.13' 'rust'
             'cargo' 'mercurial' 'llvm' 'clang' 'sccache'
             'gtk2' 'nodejs' 'cbindgen' 'nasm')

optdepends=('networkmanager: Location detection via available WiFi networks'
            'speech-dispatcher: Text-to-Speech')
provides=("plasmafox=${pkgver}")
#conflicts=('firefox' 'firefox-kde' 'firefox-appmenu')
_patchrev=9c008b241362
_pfdate=20190608
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
		0001-bz-1521249.patch
		plasmafox-${_pfdate}.patch
        # Firefox patchset
        #firefox-branded-icons-$_patchrev.patch::$_patchurl/firefox-branded-icons.patch
        firefox-kde-$_patchrev.patch::$_patchurl/firefox-kde.patch
        # Gecko/toolkit patchset
        mozilla-kde-$_patchrev.patch::$_patchurl/mozilla-kde.patch
        mozilla-nongnome-proxies-$_patchrev.patch::$_patchurl/mozilla-nongnome-proxies.patch
        unity-menubar-r2254.patch
        pgo_fix_missing_kdejs.patch
        2001_system_graphite2_support.patch
        2000_system_harfbuzz_support.patch
        # artwork
        about-background.png
        about-logo.png
        about-wordmark.svg
        plasmafox-wordmark.svg
        about.png
        default{16,22,24,32,48,64,128,256}.png
)
sha512sums=('14da0aa23571c83dfd4cf1b33027434425c99c4b8838d335cfbd93ef60ad936cd7e7f60ad84be688f434371c9b49142e1020df63ac3e65f78b6595f5a8c19590'
            'SKIP'
            '7a805ffd8ddbce7a169cba9ff5c4a66e92650231cffd77542bce6912fc8a794dbbfc9b9f34e0d72331e36501e958aecdd524463656937bea828a1d63a73cd011'
            '05f4bf526071b6731215ef883160ca8ccc63079d43f40d8617f05cf441f455348f9ae1bb5bb43284a8e3a61f61385409bf4f585a6588e82a289ed8601ec53554'
            '54803473813683a3c295e205b0fe964592d63c8654094eeb4acfcfa844e30d82e782fcb993a9dc06a6a5767424656578b343ee273aac836f8033d9bfcad44bad'
            'acfa19df86fdeab344c1594369e581c0a41c3aedbc80977b300b721d413c24265b3ec4496f502370851de2a284ced478cc6aa17280bc990c37cc5fa7a6392f63'
            '0e7f996447a26f470c4996b1115bf8bd80a1869bc1fe014c4ea1380fe8685f0bc344decc61be4b161b40db3c1e418138544f9216513feb5f026b335ec8f7207b'
            'ab8ab32afe1365d7d9b72eea9691cb79804845acbaaad940114804ed8913b544cf49eba2407b7ad75fc771cfb8759545ccbea2011ba7b59569ce1a7f3702886f'
            '139bdcc4d08dd31a27a380ac88a19b682de2932e4da9695cff3379e244b2b5396c2f7d5e9a782e6f344fd910387ab02219534d286d3abd896bcaf3a0d54ae170'
            'ebe56e6ae11c3f290cc56086c85a4ec138acfa67aa76f242e13e8eb37ebff1241603ee03854ebbefc650528d0bccfa966c68254aeafc7124de94acb24b4a67eb'
            '6369a1ac082841f0b79ecd2e69550f3576a3f3eec497881be1ba7960024b5a1aa471ddc2fa7835e574e004684950f33c3c84dee8ae42036d298dd11736eec7de'
            '776135cf593c06ba86e86787df561e0f8a9f192ce1b61a7a504c05ddc80ce74770a5a66385f72254d62022c2961cf3d6ee625986248de52d266b085265ee9d44'
            'd5c1f57aa54d7a0b4a68cd50eb19e66b2b54663c3cbfe4f9ed6ef19796df73cdf83a450ab13079c7f4e1e9d9510f900596724395ba0bcd17a4817790c8a2af91'
            'f85100925fcfc63a2c2a14eae8e8956e872a98d8e8aa56cb11a9cb486b361b5baa5af43dd2c9deb4e0bd9821128e175e30aa458aa82bc7b4807223fc212cbe9b'
            'd83ac09fa85377536d881da212efec0d4bf8bf30f26b5d080fee45772ad35192db9696a09844dd29396ffa0c3344f6961e4d203a5d032e0d138d601a373c3246'
            '29cdeb1bcee1cc7b86916f21cf5b974926e0cca771bd154010eba0ff43511c5e19eb9f88c102aa88e457936a7bc4816b4c3b4dbd752141035f918f0a073ab88b'
            '5f21b061931fa1224d59cd7b66cb16bc3d7d6d743d63c5a657d21b4aff463c5292fa8f880a572094bae235931c5623f2ec19ed7ffe79ed4bf29683f42bbd22cd'
            '52dfa1d6908b026b59c23f580d9264a11cf8f125e6b5a30dffd9104f324b225ddbd0266e6aaf482e8d283977897084506f86d18519e1b1c086b0fa63809160e8'
            'dcfd039c05b1a713b8b28cc248ecfc0fd2b04cdc072b7920001db5edcc125baece0ebaaaa17d3a980ded8779c886567039ec06e9b9210d7a0925d5d56a93cfbf'
            '6481c18cdce5c086bdaf3cdb1d1e43a2b10d1b11e23c827efbfd476ee7ed37f6fc34279f3a363157c35fb6b10bddd413b59cf00abc88a7da9653333260b778e1'
            '0ab62ae15019c500e515bde76d645aa3401c2a41d2edf76631c89dd62487cd6bff674077bcf5993ab353f575dcb2370a3476a758281d72403fc18f707561b4c3'
            '1f90e2c7d75000044b8adecfe62d9343ed1aa7a7c6d7c6e1272440317bf28e30783c4f8736a3d5b5a5637b4f4af27efb1674ac59b91b31c6d9972cf66bc66865'
            '9d4da818da9968d62096184dea1da8020a3c5b8258d43529d0a76150da92fb323b88d6afec78b5cd9de76a14387d8f20a1facad3e1bff4ce91553240abcf486a'
            'dbe2d582b9994ac87540a8c10c98e77494ee33b5962cf5cd6e1a65b67509e244adb365c5a34506d912e61bf2e03c719e2ee8b2f84080960b8dadf460012c2096'
            '155bd780d470892b73f5e2d2404b38299b87642d4741cc31e8b6d716201e92a18c118bd824ed24a1e7b324631ce1dc6fb2d2050b7eaf049c648e5e4a8331621d'
            'f7795078111c6f117df2de504fb0e66dda93cfc5e0f26bccfad6ed6a6c2fb0a24a36451bc6097b3310ea2b636be196e48873473826f80e5ab1d017774fb9ba41'
            '83c305b7af85d40652d358518db4794e7b182ce0c9f81bc1c6106814f5bfa0f9800d972fb6a40466cf7dd3b3fec0f6b2f49da8df52ce9c227b8ba9b35b9b35c9'
            '0c1b1aa9b6e12cf3c3a5bcac9d1cb95e3c89a58ea54eaebb5bb7c678e26c41b8a611b48f20c130db2ef0bd826975f9961ae5f0f4b924588dab7d6329224c080b'
)

validpgpkeys=(14F26682D0916CDD81E37B6D61B7B526D98F0353)

if [[ $_usegcc == 1 ]] ; then
  source+=('pgo+lto-with-gcc.patch')
  sha512sums+=('e307d1f1212ae1b4f376eb7786724e56eb9f010f9cd14e2d6887f751d1f9d5397f2dff699cbb098d24824d9457351c82c083f8b8d0f105752b4afb8ccd956d8b')
fi

prepare() {
  #cd mozilla-unified
  cd firefox-$pkgver
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
    echo "ac_add_options --disable-elf-hack" >> .mozconfig
    patch -Np1 -i "$srcdir/pgo+lto-with-gcc.patch"
  fi

  echo "mk_add_options MOZ_MAKE_FLAGS="\"-j$_cpus\""" >> .mozconfig
  
  patch -Np1 -i "$srcdir/0001-bz-1521249.patch"
  
  msg "Patching for KDE"
  patch -Np1 -i "$srcdir/mozilla-nongnome-proxies-$_patchrev.patch"
  patch -Np1 -i "$srcdir/mozilla-kde-$_patchrev.patch"
  patch -Np1 -i "$srcdir/firefox-kde-$_patchrev.patch"
  #patch -Np1 -i "$srcdir/firefox-branded-icons-$_patchrev.patch"
  # add globalmenu support
  patch -Np1 -i "$srcdir/unity-menubar-r2254.patch"

  # add missing file Makefile for pgo builds
  patch -Np1 -i "$srcdir/pgo_fix_missing_kdejs.patch"
  
  patch -Np1 -i "$srcdir/2000_system_harfbuzz_support.patch"
  patch -Np1 -i "$srcdir/2001_system_graphite2_support.patch"

  patch -Np1 -i "$srcdir/plasmafox-${_pfdate}.patch"
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
  cd firefox-$pkgver
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
  ./mach resource-usage
}

package() {
  #cd mozilla-unified
  cd firefox-$pkgver
  
  [[ "$CARCH" == "i686" ]] && cp "$srcdir/kde.js" obj-i686-pc-linux-gnu/dist/bin/defaults/pref
  [[ "$CARCH" == "x86_64" ]] && cp "$srcdir/kde.js" obj-x86_64-pc-linux-gnu/dist/bin/defaults/pref

  DESTDIR="$pkgdir" ./mach install

  install -Dm644 "$srcdir/vendor.js" "$pkgdir/usr/lib/plasmafox/browser/defaults/preferences/vendor.js"
  install -Dm644 "$srcdir/kde.js" "$pkgdir/usr/lib/plasmafox/browser/defaults/preferences/kde.js"

  _distini="$pkgdir/usr/lib/plasmafox/distribution/distribution.ini"
  install -Dm644 /dev/stdin "$_distini" <<END
[Global]
id=plasmafox
version=0.8
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
