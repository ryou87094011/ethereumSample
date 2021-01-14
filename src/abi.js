const abi = [{
  'anonymous': false,
  'inputs': [{
    'indexed': false,
    'internalType': 'address',
    'name': 'userId',
    'type': 'address'
  },
  {
    'indexed': false,
    'internalType': 'uint256',
    'name': 'timestamp',
    'type': 'uint256'
  },
  {
    'indexed': false,
    'internalType': 'string',
    'name': 'byteCode',
    'type': 'string'
  }],
  'name': 'eventPutData',
  'type': 'event'
},
{
  'constant': true,
  'inputs': [{
    'internalType': 'address',
    'name': '',
    'type': 'address'
  }],
  'name': 'accounts',
  'outputs': [{
    'internalType': 'uint256',
    'name': 'datasize',
    'type': 'uint256'
  }],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
},
{
  'constant': false,
  'inputs': [{
    'internalType': 'uint256',
    'name': '_timestamp',
    'type': 'uint256'
  },
  {
    'internalType': 'string',
    'name': '_byteCode',
    'type': 'string'
  }],
  'name': 'putData',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
},
{
  'constant': true,
  'inputs': [{
    'internalType': 'uint256',
    'name': 'target',
    'type': 'uint256'
  }],
  'name': 'getData',
  'outputs': [{
    'internalType': 'uint256',
    'name': '',
    'type': 'uint256'
  },
  {
    'internalType': 'string',
    'name': '',
    'type': 'string'
  }],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}]

export default abi
