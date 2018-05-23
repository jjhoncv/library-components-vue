.DEFAULT_GOAL := help

DOCKER_IMAGE   = 929226109038.dkr.ecr.ap-northeast-1.amazonaws.com/orbis-lab-node:latest

# AWS config
AWS_REGION     = us-east-1
AWS_SRC_INPUT  = .out/
AWS_SRC_OUTPUT = s3://aptitus.library.components/

install:
	make docker NODE_COMMAND="yarn install"

build:
	make docker NODE_COMMAND="yarn build"

deploy:
	make docker NODE_COMMAND="yarn deploy"

publish:
	#make docker NODE_COMMAND="yarn dist:publish"

test:
	make docker NODE_COMMAND="yarn test --ci --testResultsProcessor='jest-junit'" \
	DOCKER_ENVIRONMENTS="-e JEST_JUNIT_OUTPUT=${JEST_JUNIT_OUTPUT}"

sync-cds:
	aws s3 sync --acl public-read --cache-control max-age=3600,public ${AWS_SRC_INPUT} ${AWS_SRC_OUTPUT} --region ${AWS_REGION}

docker:
	docker run -t --rm ${DOCKER_ENVIRONMENTS} -v $(PWD):/app/ -w /app ${DOCKER_IMAGE} ${NODE_COMMAND}

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-16s\033[0m %s\n", $$1, $$2}'
