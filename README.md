## Debug or Build

1. Development run `yarn dev`.
2. Build docker run `docker build --platform linux/amd64 -t asia-east2-docker.pkg.dev/parknexus-440604/park-nexus-images/admin .`
3. Push docker run `docker --platform linux/amd64 push asia-east2-docker.pkg.dev/parknexus-440604/park-nexus-images/admin`

## Configuration for development

1. To update the api trpc types run `yarn up @parknexus/api@https://vclong2003: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@github.com/Park-Nexus/api.git#master`
