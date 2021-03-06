## Plasmafox web browser
### for Arch-compatible distros
____

**Main differences between Plasmafox and Firefox:**
 - KDE integration with file dialogs and global menu
 - Binaries built with clang 11.1.0
 - Uses more system libraries (e.g. icu, zlib, harfbuzz, av1 etc.)
 - Some Mozilla services like Pocket, UI Tour and Sync disabled
 - Removed most of trademark-restricted marks like the name "Firefox" and the icons
 - disabled WebRTC and WebSpeech

**Additions:**
- includes profiles for `profile-sync-daemon` and `firejail`
- includes a few privacy related tweaks from [ghacks](https://github.com/ghacksuserjs/ghacks-user.js)
- best used in conjunction with [kplasmafoxhelper](https://github.com/torvic9/kplasmafoxhelper)

**Credits go to Mozilla, Arch Linux, and:**
- [Waterfox project](https://github.com/MrAlex94/Waterfox/) for the inspiration
- [sgse](https://github.com/sgse) for the icons
- [Manjaro](https://manjaro.org) for the support
- [firefox-kde-opensuse](https://aur.archlinux.org/packages/firefox-kde-opensuse/)
- [Gentoo](https://dev.gentoo.org/~anarchy/mozilla/patchsets/)
- [Ubuntu](https://bazaar.launchpad.net/~mozillateam/firefox/firefox-trunk.head/files/head:/debian/patches/)
- [openSUSE / Wolfgang Rosenauer](http://www.rosenauer.org/hg/mozilla/)
- [EndeavourOS](https://endeavouros.com)

**Notes:**
- The binaries are built in a systemd EndeavourOS/Arch container.
- Neither profile-sync-daemon nor firejail are enabled by default. Symlink the files from `/usr/lib/plasmafox/distribution` to the respective directories as described in the post-install notice.
- Global menu on KDE seems to require `libdbusmenu-{qt5,gtk3}` and/or `appmenu-gtk-module` packages
- You should check the signature of the binary by importing the current [public key](https://github.com/torvic9/plasmafox/blob/master/torvic9-pubkey-2021.key).
- kplasmafoxhelper is now in AUR

