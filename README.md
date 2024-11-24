## Debug or Build

1. Development run `yarn dev`.
2. Build docker run `docker build --platform linux/amd64 -t asia-east2-docker.pkg.dev/parknexus-440604/park-nexus-images/admin .`
3. Push docker run `docker --platform linux/amd64 push asia-east2-docker.pkg.dev/parknexus-440604/park-nexus-images/admin`

## Configuration for development

1. To update the api trpc types run `yarn up @parknexus/api@https://oauth2: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@github.com/Park-Nexus/api.git#master`
