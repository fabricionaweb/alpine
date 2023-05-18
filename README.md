### What

Repository with aports that I use and isnt accept in Alpine Testing due guidelines.

### Instructions

1.  Import the sign key

    ```bash
    wget -P /etc/apk/keys https://alpine.fabricio.dev/repo/hi@fabricio.dev-63f73b9a.rsa.pub
    ```

2.  Enable the repo, testing and edge releases

    ```bash
    sed -i "s/v[0-9.]\+/edge/g" /etc/apk/repositories
    echo "https://alpine.fabricio.dev/repo" >>/etc/apk/repositories
    echo "https://dl-cdn.alpinelinux.org/alpine/edge/testing" >>/etc/apk/repositories
    ```

3.  Install the packages you want:

    - `sonarr-dev`
    - `whisparr-dev`
    - `sabnzbd`
    - `tautulli`
    - `qbit_manage`
    - `cross-seed`
    - `bazarr`

### Others

There is some aports that is merged in Testing repo and I maintain:

- `autoscan`
- `autobrr`
- `radarr`
- `prowlarr`
- `lidarr`
- `recyclarr-cli`
