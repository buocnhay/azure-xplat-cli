// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westcentralus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"networkWatcherName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName\",\r\n  \"etag\": \"W/\\\"ac3b7612-93dc-45ed-aa9f-7c27a828a92a\\\"\",\r\n  \"type\": \"Microsoft.Network/networkWatchers\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"runningOperationIds\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '429',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"ac3b7612-93dc-45ed-aa9f-7c27a828a92a"',
  'x-ms-request-id': '0c87c7cc-3128-425e-afca-6dab71f7db3d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '5aaac6dc-eb23-4823-ab3a-73bd7c2093fd',
  'x-ms-routing-request-id': 'WESTEUROPE:20170714T073144Z:5aaac6dc-eb23-4823-ab3a-73bd7c2093fd',
  date: 'Fri, 14 Jul 2017 07:31:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"networkWatcherName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName\",\r\n  \"etag\": \"W/\\\"ac3b7612-93dc-45ed-aa9f-7c27a828a92a\\\"\",\r\n  \"type\": \"Microsoft.Network/networkWatchers\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"runningOperationIds\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '429',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"ac3b7612-93dc-45ed-aa9f-7c27a828a92a"',
  'x-ms-request-id': '0c87c7cc-3128-425e-afca-6dab71f7db3d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '5aaac6dc-eb23-4823-ab3a-73bd7c2093fd',
  'x-ms-routing-request-id': 'WESTEUROPE:20170714T073144Z:5aaac6dc-eb23-4823-ab3a-73bd7c2093fd',
  date: 'Fri, 14 Jul 2017 07:31:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName/queryTroubleshootResult?api-version=2017-06-01', '*')
  .reply(200, "{\r\n  \"startTime\": \"2017-07-14T07:28:45.858122Z\",\r\n  \"endTime\": \"2017-07-14T07:28:53.672Z\",\r\n  \"code\": \"UnHealthy\",\r\n  \"results\": [\r\n    {\r\n      \"id\": \"NoConnectionsFoundForGateway\",\r\n      \"summary\": \"No connections have been created on the gateway\",\r\n      \"detail\": \"A cross-premises or VNet-to-VNet connection needs to be created on the gateway.\",\r\n      \"recommendedActions\": [\r\n        {\r\n          \"actionText\": \"Create a cross premises connection\",\r\n          \"actionUri\": \"https://azure.microsoft.com/en-us/documentation/articles/vpn-gateway-howto-site-to-site-resource-manager-portal/\",\r\n          \"actionUriText\": \"cross premises\"\r\n        },\r\n        {\r\n          \"actionText\": \"Create a VNet-to-VNet connection\",\r\n          \"actionUri\": \"https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-howto-vnet-vnet-resource-manager-portal\",\r\n          \"actionUriText\": \"VNet-to-VNet\"\r\n        },\r\n        {\r\n          \"actionText\": \"If you are experiencing problems you believe are caused by Azure, contact support\",\r\n          \"actionUri\": \"http://azure.microsoft.com/support\",\r\n          \"actionUriText\": \"contact support\"\r\n        }\r\n      ]\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1174',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a4ebaad6-4a49-4967-9426-6b04d94634e1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'be905195-139d-44d8-afa5-9ee6fb4fcae1',
  'x-ms-routing-request-id': 'WESTEUROPE:20170714T073145Z:be905195-139d-44d8-afa5-9ee6fb4fcae1',
  date: 'Fri, 14 Jul 2017 07:31:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName/queryTroubleshootResult?api-version=2017-06-01', '*')
  .reply(200, "{\r\n  \"startTime\": \"2017-07-14T07:28:45.858122Z\",\r\n  \"endTime\": \"2017-07-14T07:28:53.672Z\",\r\n  \"code\": \"UnHealthy\",\r\n  \"results\": [\r\n    {\r\n      \"id\": \"NoConnectionsFoundForGateway\",\r\n      \"summary\": \"No connections have been created on the gateway\",\r\n      \"detail\": \"A cross-premises or VNet-to-VNet connection needs to be created on the gateway.\",\r\n      \"recommendedActions\": [\r\n        {\r\n          \"actionText\": \"Create a cross premises connection\",\r\n          \"actionUri\": \"https://azure.microsoft.com/en-us/documentation/articles/vpn-gateway-howto-site-to-site-resource-manager-portal/\",\r\n          \"actionUriText\": \"cross premises\"\r\n        },\r\n        {\r\n          \"actionText\": \"Create a VNet-to-VNet connection\",\r\n          \"actionUri\": \"https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-howto-vnet-vnet-resource-manager-portal\",\r\n          \"actionUriText\": \"VNet-to-VNet\"\r\n        },\r\n        {\r\n          \"actionText\": \"If you are experiencing problems you believe are caused by Azure, contact support\",\r\n          \"actionUri\": \"http://azure.microsoft.com/support\",\r\n          \"actionUriText\": \"contact support\"\r\n        }\r\n      ]\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1174',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a4ebaad6-4a49-4967-9426-6b04d94634e1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'be905195-139d-44d8-afa5-9ee6fb4fcae1',
  'x-ms-routing-request-id': 'WESTEUROPE:20170714T073145Z:be905195-139d-44d8-afa5-9ee6fb4fcae1',
  date: 'Fri, 14 Jul 2017 07:31:44 GMT',
  connection: 'close' });
 return result; }]];