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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRulesDefaultName?api-version=2017-03-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRulesDefaultName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '303',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '461401bb-3351-4988-91f9-a35844bdefbe',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '7d07862d-b67c-4a4b-acd8-5d32c7af827b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170313T083908Z:7d07862d-b67c-4a4b-acd8-5d32c7af827b',
  date: 'Mon, 13 Mar 2017 08:39:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRulesDefaultName?api-version=2017-03-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRulesDefaultName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '303',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '461401bb-3351-4988-91f9-a35844bdefbe',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '7d07862d-b67c-4a4b-acd8-5d32c7af827b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170313T083908Z:7d07862d-b67c-4a4b-acd8-5d32c7af827b',
  date: 'Mon, 13 Mar 2017 08:39:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRulesDefaultName?api-version=2017-03-01', '*')
  .reply(201, "{\r\n  \"name\": \"securityRulesDefaultName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRulesDefaultName\",\r\n  \"etag\": \"W/\\\"20208bc4-e9a0-48ea-9f96-e0bd59085746\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"protocol\": \"*\",\r\n    \"sourcePortRange\": \"*\",\r\n    \"destinationPortRange\": \"80\",\r\n    \"sourceAddressPrefix\": \"*\",\r\n    \"destinationAddressPrefix\": \"*\",\r\n    \"access\": \"Allow\",\r\n    \"priority\": 1500,\r\n    \"direction\": \"Inbound\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '603',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'e05ce080-d9a3-4e86-9011-f680066e5535',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/e05ce080-d9a3-4e86-9011-f680066e5535?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '277871fa-8005-487a-8eef-53d689a640e9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170313T083913Z:277871fa-8005-487a-8eef-53d689a640e9',
  date: 'Mon, 13 Mar 2017 08:39:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRulesDefaultName?api-version=2017-03-01', '*')
  .reply(201, "{\r\n  \"name\": \"securityRulesDefaultName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRulesDefaultName\",\r\n  \"etag\": \"W/\\\"20208bc4-e9a0-48ea-9f96-e0bd59085746\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"protocol\": \"*\",\r\n    \"sourcePortRange\": \"*\",\r\n    \"destinationPortRange\": \"80\",\r\n    \"sourceAddressPrefix\": \"*\",\r\n    \"destinationAddressPrefix\": \"*\",\r\n    \"access\": \"Allow\",\r\n    \"priority\": 1500,\r\n    \"direction\": \"Inbound\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '603',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'e05ce080-d9a3-4e86-9011-f680066e5535',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/e05ce080-d9a3-4e86-9011-f680066e5535?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '277871fa-8005-487a-8eef-53d689a640e9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170313T083913Z:277871fa-8005-487a-8eef-53d689a640e9',
  date: 'Mon, 13 Mar 2017 08:39:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/e05ce080-d9a3-4e86-9011-f680066e5535?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c691ba1e-192c-40c7-b33c-d3f1ae1bbd6f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '1a200efc-2d41-4c9e-a690-dbb515f64519',
  'x-ms-routing-request-id': 'WESTEUROPE:20170313T083944Z:1a200efc-2d41-4c9e-a690-dbb515f64519',
  date: 'Mon, 13 Mar 2017 08:39:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/e05ce080-d9a3-4e86-9011-f680066e5535?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c691ba1e-192c-40c7-b33c-d3f1ae1bbd6f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '1a200efc-2d41-4c9e-a690-dbb515f64519',
  'x-ms-routing-request-id': 'WESTEUROPE:20170313T083944Z:1a200efc-2d41-4c9e-a690-dbb515f64519',
  date: 'Mon, 13 Mar 2017 08:39:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRulesDefaultName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"securityRulesDefaultName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRulesDefaultName\",\r\n  \"etag\": \"W/\\\"ef54aa77-3ff9-4d62-92ad-41c42e925540\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"protocol\": \"*\",\r\n    \"sourcePortRange\": \"*\",\r\n    \"destinationPortRange\": \"80\",\r\n    \"sourceAddressPrefix\": \"*\",\r\n    \"destinationAddressPrefix\": \"*\",\r\n    \"access\": \"Allow\",\r\n    \"priority\": 1500,\r\n    \"direction\": \"Inbound\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '604',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"ef54aa77-3ff9-4d62-92ad-41c42e925540"',
  'x-ms-request-id': '712d40bd-a500-44a1-828c-80eb715afc47',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '61b21667-68d9-4cf6-89e8-45a185c0cfd9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170313T083945Z:61b21667-68d9-4cf6-89e8-45a185c0cfd9',
  date: 'Mon, 13 Mar 2017 08:39:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRulesDefaultName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"securityRulesDefaultName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRulesDefaultName\",\r\n  \"etag\": \"W/\\\"ef54aa77-3ff9-4d62-92ad-41c42e925540\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"protocol\": \"*\",\r\n    \"sourcePortRange\": \"*\",\r\n    \"destinationPortRange\": \"80\",\r\n    \"sourceAddressPrefix\": \"*\",\r\n    \"destinationAddressPrefix\": \"*\",\r\n    \"access\": \"Allow\",\r\n    \"priority\": 1500,\r\n    \"direction\": \"Inbound\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '604',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"ef54aa77-3ff9-4d62-92ad-41c42e925540"',
  'x-ms-request-id': '712d40bd-a500-44a1-828c-80eb715afc47',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '61b21667-68d9-4cf6-89e8-45a185c0cfd9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170313T083945Z:61b21667-68d9-4cf6-89e8-45a185c0cfd9',
  date: 'Mon, 13 Mar 2017 08:39:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRulesDefaultName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"securityRulesDefaultName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRulesDefaultName\",\r\n  \"etag\": \"W/\\\"ef54aa77-3ff9-4d62-92ad-41c42e925540\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"protocol\": \"*\",\r\n    \"sourcePortRange\": \"*\",\r\n    \"destinationPortRange\": \"80\",\r\n    \"sourceAddressPrefix\": \"*\",\r\n    \"destinationAddressPrefix\": \"*\",\r\n    \"access\": \"Allow\",\r\n    \"priority\": 1500,\r\n    \"direction\": \"Inbound\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '604',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"ef54aa77-3ff9-4d62-92ad-41c42e925540"',
  'x-ms-request-id': '889b51e3-53df-4c46-be5a-541af841b8ce',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '570c7a3c-7e04-453a-a41b-2a951d19d6c2',
  'x-ms-routing-request-id': 'WESTEUROPE:20170313T083946Z:570c7a3c-7e04-453a-a41b-2a951d19d6c2',
  date: 'Mon, 13 Mar 2017 08:39:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRulesDefaultName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"securityRulesDefaultName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRulesDefaultName\",\r\n  \"etag\": \"W/\\\"ef54aa77-3ff9-4d62-92ad-41c42e925540\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"protocol\": \"*\",\r\n    \"sourcePortRange\": \"*\",\r\n    \"destinationPortRange\": \"80\",\r\n    \"sourceAddressPrefix\": \"*\",\r\n    \"destinationAddressPrefix\": \"*\",\r\n    \"access\": \"Allow\",\r\n    \"priority\": 1500,\r\n    \"direction\": \"Inbound\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '604',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"ef54aa77-3ff9-4d62-92ad-41c42e925540"',
  'x-ms-request-id': '889b51e3-53df-4c46-be5a-541af841b8ce',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '570c7a3c-7e04-453a-a41b-2a951d19d6c2',
  'x-ms-routing-request-id': 'WESTEUROPE:20170313T083946Z:570c7a3c-7e04-453a-a41b-2a951d19d6c2',
  date: 'Mon, 13 Mar 2017 08:39:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRulesDefaultName?api-version=2017-03-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operationResults/b2e8d0b1-1428-41bf-a604-b8438243df1d?api-version=2017-03-01',
  'retry-after': '10',
  'x-ms-request-id': 'b2e8d0b1-1428-41bf-a604-b8438243df1d',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/b2e8d0b1-1428-41bf-a604-b8438243df1d?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '280a1b6d-293c-4aae-abf7-57c8e63fe7d3',
  'x-ms-routing-request-id': 'WESTEUROPE:20170313T083948Z:280a1b6d-293c-4aae-abf7-57c8e63fe7d3',
  date: 'Mon, 13 Mar 2017 08:39:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRulesDefaultName?api-version=2017-03-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operationResults/b2e8d0b1-1428-41bf-a604-b8438243df1d?api-version=2017-03-01',
  'retry-after': '10',
  'x-ms-request-id': 'b2e8d0b1-1428-41bf-a604-b8438243df1d',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/b2e8d0b1-1428-41bf-a604-b8438243df1d?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '280a1b6d-293c-4aae-abf7-57c8e63fe7d3',
  'x-ms-routing-request-id': 'WESTEUROPE:20170313T083948Z:280a1b6d-293c-4aae-abf7-57c8e63fe7d3',
  date: 'Mon, 13 Mar 2017 08:39:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/b2e8d0b1-1428-41bf-a604-b8438243df1d?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8fc23aba-7c2f-4a7a-9ca6-e23702ff824f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'e011eb4c-4afd-4c9f-8d81-0f569133d9f7',
  'x-ms-routing-request-id': 'WESTEUROPE:20170313T084019Z:e011eb4c-4afd-4c9f-8d81-0f569133d9f7',
  date: 'Mon, 13 Mar 2017 08:40:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/b2e8d0b1-1428-41bf-a604-b8438243df1d?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8fc23aba-7c2f-4a7a-9ca6-e23702ff824f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'e011eb4c-4afd-4c9f-8d81-0f569133d9f7',
  'x-ms-routing-request-id': 'WESTEUROPE:20170313T084019Z:e011eb4c-4afd-4c9f-8d81-0f569133d9f7',
  date: 'Mon, 13 Mar 2017 08:40:18 GMT',
  connection: 'close' });
 return result; }]];