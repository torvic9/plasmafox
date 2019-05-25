# Maintainer: Thaodan <theodorstormgrade@gmail.com>
# Contributor: Weng Xuetian <wengxt@gmail.com>
# small changes by torvic9

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
pkgver=67.0
pkgrel=0.5
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
             'cargo' 'mercurial' 'llvm' 'clang' 'ccache'
             'gtk2' 'nodejs' 'cbindgen' 'nasm')

optdepends=('networkmanager: Location detection via available WiFi networks'
            'speech-dispatcher: Text-to-Speech')
provides=("plasmafox=${pkgver}")
#conflicts=('firefox' 'firefox-kde' 'firefox-appmenu')
_patchrev=9c008b241362
_pfdate=20190525
_cpus=$(nproc)
options=('!emptydirs' '!makeflags')
_patchurl=http://www.rosenauer.org/hg/mozilla/raw-file/$_patchrev
#_repo=https://hg.mozilla.org/mozilla-unified #_RELEASE
source=(https://ftp.mozilla.org/pub/firefox/releases/67.0/source/$_pkgname-$pkgver.source.tar.xz{,.asc}
		#"hg+$_repo#tag=FIREFOX_${pkgver//./_}_RELEASE"
        mozconfig
        plasmafox.desktop
        vendor.js
        kde.js
		0001-bz-1468911.patch
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
sha512sums=('a1000d6ca8146a9a3c74a3f69041b755c0c5014c8a608298d9c4cbe39577939d43139a7ad742983697ae90b635d3f5d8f9a008fcc2b3778adaadc25acc49ca29'
            'SKIP'
            '7a805ffd8ddbce7a169cba9ff5c4a66e92650231cffd77542bce6912fc8a794dbbfc9b9f34e0d72331e36501e958aecdd524463656937bea828a1d63a73cd011'
            '05f4bf526071b6731215ef883160ca8ccc63079d43f40d8617f05cf441f455348f9ae1bb5bb43284a8e3a61f61385409bf4f585a6588e82a289ed8601ec53554'
            '54803473813683a3c295e205b0fe964592d63c8654094eeb4acfcfa844e30d82e782fcb993a9dc06a6a5767424656578b343ee273aac836f8033d9bfcad44bad'
            'acfa19df86fdeab344c1594369e581c0a41c3aedbc80977b300b721d413c24265b3ec4496f502370851de2a284ced478cc6aa17280bc990c37cc5fa7a6392f63'
            'ad84bc853cfd863e7111846d5ce8e4b7566d7078365691663a10552252a022578ad445d647e2889dd367dd0bbd0206a0fa588dfc80fa0fc3f72a0957bff17799'
            '3c5f478af522eb96f991ee457aa6448aa870927fac6a77392e4f3e1f96173da0a97c305eba581e72f1ab46792dc136094eca81ee619ee7001401cc8797602d08'
            '139bdcc4d08dd31a27a380ac88a19b682de2932e4da9695cff3379e244b2b5396c2f7d5e9a782e6f344fd910387ab02219534d286d3abd896bcaf3a0d54ae170'
            'ebe56e6ae11c3f290cc56086c85a4ec138acfa67aa76f242e13e8eb37ebff1241603ee03854ebbefc650528d0bccfa966c68254aeafc7124de94acb24b4a67eb'
            '6369a1ac082841f0b79ecd2e69550f3576a3f3eec497881be1ba7960024b5a1aa471ddc2fa7835e574e004684950f33c3c84dee8ae42036d298dd11736eec7de'
            '776135cf593c06ba86e86787df561e0f8a9f192ce1b61a7a504c05ddc80ce74770a5a66385f72254d62022c2961cf3d6ee625986248de52d266b085265ee9d44'
            'd5c1f57aa54d7a0b4a68cd50eb19e66b2b54663c3cbfe4f9ed6ef19796df73cdf83a450ab13079c7f4e1e9d9510f900596724395ba0bcd17a4817790c8a2af91'
            'f85100925fcfc63a2c2a14eae8e8956e872a98d8e8aa56cb11a9cb486b361b5baa5af43dd2c9deb4e0bd9821128e175e30aa458aa82bc7b4807223fc212cbe9b'
            'd83ac09fa85377536d881da212efec0d4bf8bf30f26b5d080fee45772ad35192db9696a09844dd29396ffa0c3344f6961e4d203a5d032e0d138d601a373c3246'
            '29cdeb1bcee1cc7b86916f21cf5b974926e0cca771bd154010eba0ff43511c5e19eb9f88c102aa88e457936a7bc4816b4c3b4dbd752141035f918f0a073ab88b'
            '6b09a74ef24391f50204e61453cee4b3960b78a17db84efd2c09d46899acc4434e53b3d42cd1b8d72f3165c17804ef1c8a0648a738874cd7c50681a29a9a7fa6'
            '52dfa1d6908b026b59c23f580d9264a11cf8f125e6b5a30dffd9104f324b225ddbd0266e6aaf482e8d283977897084506f86d18519e1b1c086b0fa63809160e8'
            'dcfd039c05b1a713b8b28cc248ecfc0fd2b04cdc072b7920001db5edcc125baece0ebaaaa17d3a980ded8779c886567039ec06e9b9210d7a0925d5d56a93cfbf'
            '6481c18cdce5c086bdaf3cdb1d1e43a2b10d1b11e23c827efbfd476ee7ed37f6fc34279f3a363157c35fb6b10bddd413b59cf00abc88a7da9653333260b778e1'
            '7bfadd5a66b426ebc653222879bf1719070a37673b8952571e1e8a5d27a5d12f6a2245650f8063fee058b8e10b1e0db21edb9e303c7b71cfaa55b7201ef6aa2c'
            '7c3ef5029d1f8e5f1dd84073b8d5cc6fbe664cfffb23f4c4a100e5e9d2c073fa06acdee10ca5cd1674a8090c387db1dd3d9d00d90fede11d53e8b7e223603022'
            'cd60443976dabe537ff90ff6e6e8d9d5623363ed35d97e593ab0339cf5feb95cbe51f60a7060ea8f9695c2323eebdb884fd1a00d231b517c1214d15f3cee9f95'
            '8ca515af1b0446e5319685729da1d5d31b4afb4d0ba00261395a29894c3988492520dd29dfad8c9f03e62299bab3b129fd697391e57d6907e7f9b0ff4f9faefc'
            '72136402206646903e6ffb5de4728a79138eddfd566a3cec8040b622e91e589da2a104f1735a6a5308a31e2f64893758c0c87de2f10400881eeb0e192d6ce3c1'
            '69df633b441ac66cc8bec073dba1ebe839ba99ae7268acd906bc73041357def9589ae5abd02dfa9c95b8cda42e7c4dfe27481cb65c06a69f552343d5180e233f'
            '657399a1d7d1c8f0b192857395381d86583fbdad864783ca9d890ead8bebe4f379ba7d5ea1cd19e0a9dfe3cadd6c118f96a5f03f8b5f358d1a4010ad516ded15'
            'b923ee0c960a2135ec5b687bf4be1f32a54aca9f266cfec97b953efa282a42f7a543ee26b216d78919b01438cf6f0f42f79d4b134a78bd7841417689f3fac8bf'
)

validpgpkeys=(BBBEBDBB24C6F355
			14F26682D0916CDD81E37B6D61B7B526D98F0353)

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
      echo "ac_add_options --with-ccache" >> .mozconfig
    fi
    echo "ac_add_options --disable-elf-hack" >> .mozconfig
    patch -Np1 -i "$srcdir/pgo+lto-with-gcc.patch"
  fi

  echo "mk_add_options MOZ_MAKE_FLAGS="\"-j$_cpus\""" >> .mozconfig
  
  patch -Np1 -i "$srcdir/0001-bz-1468911.patch"
  
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
version=0.5
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
