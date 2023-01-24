Repo for the blog post: [NestJS tracing with Open Telemetry](https://tomray.dev/nestjs-open-telemetry)

## Installation

```bash
$ npm install
```

## Running Jaeger

Open a new terminal in the project root and run (requires Docker installed on your machine):

```bash
docker run -d --name jaeger \
  -e COLLECTOR_ZIPKIN_HOST_PORT=:9411 \
  -e COLLECTOR_OTLP_ENABLED=true \
  -p 6831:6831/udp \
  -p 6832:6832/udp \
  -p 5778:5778 \
  -p 16686:16686 \
  -p 4317:4317 \
  -p 4318:4318 \
  -p 14250:14250 \
  -p 14268:14268 \
  -p 14269:14269 \
  -p 9411:9411 \
  jaegertracing/all-in-one:1.41
```

And then go to http://localhost:16686/ to see your traces in Jaeger
