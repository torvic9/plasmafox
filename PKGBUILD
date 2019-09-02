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
pkgrel=1
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
_pfdate=20190715
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
sha512sums=('a53b04b6a4fc98065596117b6bc0aee40c36f74bca02dc7486fda7e9556ad6f221f5ead94db1dc5db572f277556a21b22a0395dae107b67336ca91e33df9882c'
            'SKIP'
            '30cb3a3afedcf2910ceaeac6bcd6192d9eb5646c5d6b795e09a249873a375ebc8ac6e980db1bf68332374e718d0e246a5408bc49374d076befed6c0d12904672'
            '75a65a6c8f64c2bc1006720c8ae66064a484ba3b51d26c4138021e79acd7acc950e4008f56fb9f8ad5c95287d36ce43bd5530221385f1c01b47736a85c096fbe'
            '54803473813683a3c295e205b0fe964592d63c8654094eeb4acfcfa844e30d82e782fcb993a9dc06a6a5767424656578b343ee273aac836f8033d9bfcad44bad'
            'acfa19df86fdeab344c1594369e581c0a41c3aedbc80977b300b721d413c24265b3ec4496f502370851de2a284ced478cc6aa17280bc990c37cc5fa7a6392f63'
            '1aa098df062e26d1e427b13d76d62c94be141ba020d1b21fdbf81800a453d924c7b860fa6c565fef9873916c650549ed94302d936348c5b5ee35028aa479df26'
            '40c931b8abbe5880122dbcc93d457e04e9b4f2bc3e0275e9e3e35dd347fe0658f9446c89e99553203be8a8c9ab6f4ca872a7aedc514920c107b9235c04df91dc'
            '92f0bffdd02e1a691fbe08cb3a6bcebe95afd9b7e648fd6be886bf1ad18eaf037cbaf8e2f325036537c2fb8022a085c90f144d6ff1a724c933744d8a018d725c'
            'aa8ec717c069b0f3482dcb764933cbb8a87edac6dca14c77d659c5fc095a583084ec47b49b6e239f2d28560652a3485c41c3a8572984eaa23c4b7fc45d12470b'
            '91d5b3c77375719b8b56a0609d228b951b50ce4aa1c6e13f70f3259b79918cea1928993280722b2110f472cb0f5d511421922755bb2af300b0b3f25d1c8f032d'
            'fae7ac214cc021adfcb8a66bde9efd90c65e87e5b991a6f4eb3d34b711a9b3234463afbd7cf0ab08596a4a16365d5ae44d343c9b5918bdab78437eb0d8d75bff'
            '354e477574bdf89afe9a7099aea88a1c99b5d4ab9a12277442ec983458374f228d404b2e51f7f790c72016313b152d6967fd545eef47778ca1cab66d4059b9e5'
            'd5c1f57aa54d7a0b4a68cd50eb19e66b2b54663c3cbfe4f9ed6ef19796df73cdf83a450ab13079c7f4e1e9d9510f900596724395ba0bcd17a4817790c8a2af91'
            '4bead297d21cb68798be6f7fe347518cfc126b8d5cc59e4683bc01997171ba84b3292c95abbd8459318b08009942e1ef160de7c3c290744113145d77cfb89c84'
            'b2eda9f276c0aa6337a105dbbef7954cec3c2c462ab2398d58485e4d6fc5d28a1250e82afc4fb108bd051525b0ca17f1db15f3e638c3723dfe293f679074c18b'
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
            'ef9e9c83ab9512e94782e9615fb8c3d069a55f8c8eb0f432b7db2461716f0eb82b501d6ee509d887b037c5d44c983db68986e92b23ff595dfc97de76d42a9f17'
            'b667c3223f0c9ecbc62623e37b7d92084f0b6e9534f7a10462a176a7dbff0e01d4bdc0dc10be52bbdb43fb46fb0af22f8006b208b6da91f106b3002b45fc0cf6'
)

validpgpkeys=(14F26682D0916CDD81E37B6D61B7B526D98F0353)

if [[ $_usegcc == 1 ]] ; then
  source+=('pgo+lto-with-gcc.patch')
  sha512sums+=('e307d1f1212ae1b4f376eb7786724e56eb9f010f9cd14e2d6887f751d1f9d5397f2dff699cbb098d24824d9457351c82c083f8b8d0f105752b4afb8ccd956d8b')
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
