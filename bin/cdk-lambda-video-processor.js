#!/usr/bin/env node
const cdk = require('@aws-cdk/core');
const { CdkLambdaVideoProcessorStack } = require('../lib/cdk-lambda-video-processor-stack');

const app = new cdk.App();
new CdkLambdaVideoProcessorStack(app, 'CdkLambdaVideoProcessorStack');
