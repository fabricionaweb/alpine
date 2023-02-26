### Instructions

1.  Import the sign key

    ```bash
    wget -P /etc/apk/keys https://alpine.fabricio.dev/hi@fabricio.dev-63f73b9a.rsa.pub
    ```

2.  Enable the repo

    ```bash
    echo "https://alpine.fabricio.dev" >>/etc/apk/repositories
    ```

3.  Move to [edge releases](https://wiki.alpinelinux.org/wiki/Include:Upgrading_to_Edge)

    ```bash
    sed -i "s/v[0-9.]\+/edge/g" /etc/apk/repositories
    ```

4.  Install the packages you want:

    - `sonarr-dev`

### Others

You can also install Radarr and Prowlarr from the [testing repo](https://pkgs.alpinelinux.org/packages?name=&branch=edge&repo=&arch=&maintainer=Fabricio+Silva). To enable testing repo run:

```bash
echo "https://dl-cdn.alpinelinux.org/alpine/edge/testing" >>/etc/apk/repositories
```
