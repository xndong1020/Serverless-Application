#### Resources Required:

1. Dynamodb Table `TodoApp-Todos-{Stage}`.

Schema:

```js
{
  "todoId": "123",
  "userId": "some user id",
  "createdAt": "2019-07-27T20:01:45.424Z",
  "name": "Buy milk",
  "dueDate": "2019-07-29T20:01:45.424Z",
  "done": false,
  "attachmentUrl": "http://example.com/image.png"
}
```

2. S3 bucket for storing attachment `todo-app-attachments-{Stage}`

and a bucket policy to allow public get

3. GatewayResponseDefault4XX

```yml
GatewayResponseDefault4XX:
  Type: AWS::ApiGateway::GatewayResponse
  Properties:
    ResponseParameters:
      gatewayresponse.header.Access-Control-Allow-Origin: "'*'"
      gatewayresponse.header.Access-Control-Allow-Headers: "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'"
      gatewayresponse.header.Access-Control-Allow-Methods: "'GET,OPTIONS,POST'"
    ResponseType: DEFAULT_4XX
    RestApiId:
      Ref: ApiGatewayRestApi
```

#### IAM policies required:

1. Get Todos: Query Dynamodb, Query Index
2. Create Todo: PutItem Dynamodb
3. Update Todo: UpdateItem Dynamodb
4. Delete Todo: DeleteItem Dynamodb
5. GenerateUploadUrl: dynamodb:PutItem , s3:PutObject

To enable AWS X-Ray, these functions need `xray:PutTraceSegments` and `xray:PutTelemetryRecords`

#### Environment Variables required:

1. Dynamodb Table name: `TodoApp-Todos-${self:provider.stage}`
2. Attachment Bucket name: `TodoApp-Attachments-${self:provider.stage}`
3. USER_ID_INDEX: `UserIdIndex`

#### Enable AWS X-Ray

![AWS X-Ray](./docs/images/x-ray.png)

#### Package Individually

Before:
![AWS X-Ray](./docs/images/package-individually-before.png)

After:
![AWS X-Ray](./docs/images/package-individually-after.png)
