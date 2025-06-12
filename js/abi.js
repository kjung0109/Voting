const abiobj = [
	{
	   "inputs": [
		  {
			 "internalType": "string",
			 "name": "_name",
			 "type": "string"
		  },
		  {
			 "internalType": "uint256",
			 "name": "_studentId",
			 "type": "uint256"
		  },
		  {
			 "internalType": "string",
			 "name": "_department",
			 "type": "string"
		  },
		  {
			 "internalType": "uint256",
			 "name": "_sessionIndex",
			 "type": "uint256"
		  }
	   ],
	   "name": "addCandidate",
	   "outputs": [],
	   "stateMutability": "nonpayable",
	   "type": "function"
	},
	{
	   "inputs": [],
	   "stateMutability": "nonpayable",
	   "type": "constructor"
	},
	{
	   "anonymous": false,
	   "inputs": [
		  {
			 "indexed": false,
			 "internalType": "string",
			 "name": "name",
			 "type": "string"
		  },
		  {
			 "indexed": false,
			 "internalType": "uint256",
			 "name": "studentId",
			 "type": "uint256"
		  },
		  {
			 "indexed": false,
			 "internalType": "string",
			 "name": "department",
			 "type": "string"
		  },
		  {
			 "indexed": false,
			 "internalType": "uint256",
			 "name": "sessionIndex",
			 "type": "uint256"
		  }
	   ],
	   "name": "CandidateAdded",
	   "type": "event"
	},
	{
	   "inputs": [
		  {
			 "internalType": "string",
			 "name": "_sessionName",
			 "type": "string"
		  },
		  {
			 "internalType": "uint256",
			 "name": "_startTime",
			 "type": "uint256"
		  },
		  {
			 "internalType": "uint256",
			 "name": "_endTime",
			 "type": "uint256"
		  }
	   ],
	   "name": "createVotingSession",
	   "outputs": [],
	   "stateMutability": "nonpayable",
	   "type": "function"
	},
	{
	   "inputs": [
		  {
			 "internalType": "uint256",
			 "name": "_studentId",
			 "type": "uint256"
		  },
		  {
			 "internalType": "string",
			 "name": "_password",
			 "type": "string"
		  }
	   ],
	   "name": "login",
	   "outputs": [],
	   "stateMutability": "nonpayable",
	   "type": "function"
	},
	{
	   "inputs": [],
	   "name": "logout",
	   "outputs": [],
	   "stateMutability": "nonpayable",
	   "type": "function"
	},
	{
	   "inputs": [
		  {
			 "internalType": "string",
			 "name": "_name",
			 "type": "string"
		  },
		  {
			 "internalType": "uint256",
			 "name": "_studentId",
			 "type": "uint256"
		  },
		  {
			 "internalType": "string",
			 "name": "_password",
			 "type": "string"
		  }
	   ],
	   "name": "registerUser",
	   "outputs": [],
	   "stateMutability": "nonpayable",
	   "type": "function"
	},
	{
	   "anonymous": false,
	   "inputs": [
		  {
			 "indexed": false,
			 "internalType": "uint256",
			 "name": "studentId",
			 "type": "uint256"
		  }
	   ],
	   "name": "UserLoggedIn",
	   "type": "event"
	},
	{
	   "anonymous": false,
	   "inputs": [
		  {
			 "indexed": false,
			 "internalType": "uint256",
			 "name": "studentId",
			 "type": "uint256"
		  }
	   ],
	   "name": "UserLoggedOut",
	   "type": "event"
	},
	{
	   "anonymous": false,
	   "inputs": [
		  {
			 "indexed": false,
			 "internalType": "string",
			 "name": "name",
			 "type": "string"
		  },
		  {
			 "indexed": false,
			 "internalType": "uint256",
			 "name": "studentId",
			 "type": "uint256"
		  }
	   ],
	   "name": "UserRegistered",
	   "type": "event"
	},
	{
	   "inputs": [
		  {
			 "internalType": "uint256",
			 "name": "_sessionIndex",
			 "type": "uint256"
		  },
		  {
			 "internalType": "uint256",
			 "name": "_candidateIndex",
			 "type": "uint256"
		  }
	   ],
	   "name": "vote",
	   "outputs": [],
	   "stateMutability": "nonpayable",
	   "type": "function"
	},
	{
	   "anonymous": false,
	   "inputs": [
		  {
			 "indexed": true,
			 "internalType": "uint256",
			 "name": "candidateIndex",
			 "type": "uint256"
		  },
		  {
			 "indexed": false,
			 "internalType": "uint256",
			 "name": "sessionIndex",
			 "type": "uint256"
		  }
	   ],
	   "name": "Voted",
	   "type": "event"
	},
	{
	   "anonymous": false,
	   "inputs": [
		  {
			 "indexed": false,
			 "internalType": "string",
			 "name": "sessionName",
			 "type": "string"
		  },
		  {
			 "indexed": false,
			 "internalType": "uint256",
			 "name": "sessionIndex",
			 "type": "uint256"
		  },
		  {
			 "indexed": false,
			 "internalType": "uint256",
			 "name": "startTime",
			 "type": "uint256"
		  },
		  {
			 "indexed": false,
			 "internalType": "uint256",
			 "name": "endTime",
			 "type": "uint256"
		  }
	   ],
	   "name": "VotingSessionCreated",
	   "type": "event"
	},
	{
	   "inputs": [],
	   "name": "admin",
	   "outputs": [
		  {
			 "internalType": "address",
			 "name": "",
			 "type": "address"
		  }
	   ],
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "inputs": [
		  {
			 "internalType": "uint256",
			 "name": "_sessionIndex",
			 "type": "uint256"
		  },
		  {
			 "internalType": "uint256",
			 "name": "_candidateIndex",
			 "type": "uint256"
		  }
	   ],
	   "name": "getCandidate",
	   "outputs": [
		  {
			 "internalType": "string",
			 "name": "",
			 "type": "string"
		  },
		  {
			 "internalType": "uint256",
			 "name": "",
			 "type": "uint256"
		  },
		  {
			 "internalType": "string",
			 "name": "",
			 "type": "string"
		  },
		  {
			 "internalType": "uint256",
			 "name": "",
			 "type": "uint256"
		  }
	   ],
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "inputs": [
		  {
			 "internalType": "uint256",
			 "name": "_sessionIndex",
			 "type": "uint256"
		  }
	   ],
	   "name": "getCandidateCount",
	   "outputs": [
		  {
			 "internalType": "uint256",
			 "name": "",
			 "type": "uint256"
		  }
	   ],
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "inputs": [
		  {
			 "internalType": "uint256",
			 "name": "_sessionIndex",
			 "type": "uint256"
		  }
	   ],
	   "name": "getSession",
	   "outputs": [
		  {
			 "internalType": "string",
			 "name": "",
			 "type": "string"
		  },
		  {
			 "internalType": "bool",
			 "name": "",
			 "type": "bool"
		  },
		  {
			 "internalType": "uint256",
			 "name": "",
			 "type": "uint256"
		  },
		  {
			 "internalType": "uint256",
			 "name": "",
			 "type": "uint256"
		  }
	   ],
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "inputs": [],
	   "name": "getSessionCount",
	   "outputs": [
		  {
			 "internalType": "uint256",
			 "name": "",
			 "type": "uint256"
		  }
	   ],
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "inputs": [
		  {
			 "internalType": "address",
			 "name": "",
			 "type": "address"
		  },
		  {
			 "internalType": "uint256",
			 "name": "",
			 "type": "uint256"
		  }
	   ],
	   "name": "hasVoted",
	   "outputs": [
		  {
			 "internalType": "bool",
			 "name": "",
			 "type": "bool"
		  }
	   ],
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "inputs": [
		  {
			 "internalType": "address",
			 "name": "",
			 "type": "address"
		  }
	   ],
	   "name": "loggedIn",
	   "outputs": [
		  {
			 "internalType": "uint256",
			 "name": "",
			 "type": "uint256"
		  }
	   ],
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "inputs": [
		  {
			 "internalType": "uint256",
			 "name": "",
			 "type": "uint256"
		  }
	   ],
	   "name": "users",
	   "outputs": [
		  {
			 "internalType": "string",
			 "name": "name",
			 "type": "string"
		  },
		  {
			 "internalType": "uint256",
			 "name": "studentId",
			 "type": "uint256"
		  },
		  {
			 "internalType": "bytes32",
			 "name": "passwordHash",
			 "type": "bytes32"
		  }
	   ],
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "inputs": [],
	   "name": "votingSessionCount",
	   "outputs": [
		  {
			 "internalType": "uint256",
			 "name": "",
			 "type": "uint256"
		  }
	   ],
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "inputs": [
		  {
			 "internalType": "uint256",
			 "name": "",
			 "type": "uint256"
		  }
	   ],
	   "name": "votingSessions",
	   "outputs": [
		  {
			 "internalType": "string",
			 "name": "sessionName",
			 "type": "string"
		  },
		  {
			 "internalType": "bool",
			 "name": "isActive",
			 "type": "bool"
		  },
		  {
			 "internalType": "uint256",
			 "name": "startTime",
			 "type": "uint256"
		  },
		  {
			 "internalType": "uint256",
			 "name": "endTime",
			 "type": "uint256"
		  },
		  {
			 "internalType": "uint256",
			 "name": "candidateCount",
			 "type": "uint256"
		  }
	   ],
	   "stateMutability": "view",
	   "type": "function"
	}
 ]; 
  
  // 컨트랙트 주소
  let contractAddress = "0x9ef83c5f5D72A38E91dDE080e7a0324223e1F5f8";