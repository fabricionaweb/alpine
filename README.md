### Instructions

1.  Import the sign key

    ```bash
    wget -P /etc/apk/keys https://alpine.fabricio.dev/hi@fabricio.dev-63f73b9a.rsa.pub
    ```

2.  Enable the repo, testing and edge releases

    ```bash
    sed -i "s/v[0-9.]\+/edge/g" /etc/apk/repositories
    echo "https://alpine.fabricio.dev" >>/etc/apk/repositories
    echo "https://dl-cdn.alpinelinux.org/alpine/edge/testing" >>/etc/apk/repositories
    ```

3.  Install the packages you want:

    - `sonarr-dev`
    - `whisparr-dev`
    - `sabnzbd`
    - `autobrr`
