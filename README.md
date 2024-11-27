## Debug or Build

1. Development run `yarn dev`.
2. Build docker run `docker build --platform linux/amd64 -t asia-east2-docker.pkg.dev/parknexus-440604/park-nexus-images/admin .`
3. Push docker run `docker --platform linux/amd64 push asia-east2-docker.pkg.dev/parknexus-440604/park-nexus-images/admin`

## Configuration for development

1. To update the api trpc types run `yarn up @parknexus/api@https://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@github.com/Park-Nexus/api.git#master`
