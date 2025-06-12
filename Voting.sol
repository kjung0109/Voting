// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract VotingSystem {
    struct Candidate {
        string name;
        uint studentId;
        string department;
        uint voteCount;
    }

    struct VotingSession {
        string sessionName;
        bool isActive;
        uint startTime;
        uint endTime;
        uint candidateCount;
        mapping(uint => Candidate) candidates;
    }

    struct User {
        string name;
        uint studentId;
        bytes32 passwordHash;
    }

    address public admin;
    mapping(uint => VotingSession) public votingSessions;
    uint public votingSessionCount;
    mapping(uint => User) public users;
    mapping(address => uint) public loggedIn;
    mapping(address => mapping(uint => bool)) public hasVoted;

    event CandidateAdded(string name, uint studentId, string department, uint sessionIndex);
    event VotingSessionCreated(string sessionName, uint sessionIndex, uint startTime, uint endTime);
    event Voted(uint indexed candidateIndex, uint sessionIndex);
    event UserRegistered(string name, uint studentId);
    event UserLoggedIn(uint studentId);
    event UserLoggedOut(uint studentId);

    constructor() {
        admin = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    function createVotingSession(string memory _sessionName, uint _startTime, uint _endTime) public onlyAdmin {
        require(_startTime < _endTime, "Start time must be less than end time");

        VotingSession storage newSession = votingSessions[votingSessionCount++];
        newSession.sessionName = _sessionName;
        newSession.isActive = true;
        newSession.startTime = _startTime;
        newSession.endTime = _endTime;

        emit VotingSessionCreated(_sessionName, votingSessionCount - 1, _startTime, _endTime);
    }

    function addCandidate(string memory _name, uint _studentId, string memory _department, uint _sessionIndex) public onlyAdmin {
        require(_sessionIndex < votingSessionCount, "Invalid session index");
        VotingSession storage session = votingSessions[_sessionIndex];
        require(session.isActive, "Voting session is not active");

        Candidate memory newCandidate = Candidate({
            name: _name,
            studentId: _studentId,
            department: _department,
            voteCount: 0
        });

        session.candidates[session.candidateCount++] = newCandidate;

        emit CandidateAdded(_name, _studentId, _department, _sessionIndex);
    }

    function getSessionCount() public view returns (uint) {
        return votingSessionCount;
    }

    function getSession(uint _sessionIndex) public view returns (string memory, bool, uint, uint) {
        require(_sessionIndex < votingSessionCount, "Invalid session index");
        VotingSession storage session = votingSessions[_sessionIndex];
        return (session.sessionName, session.isActive, session.startTime, session.endTime);
    }

    function getCandidateCount(uint _sessionIndex) public view returns (uint) {
        require(_sessionIndex < votingSessionCount, "Invalid session index");
        return votingSessions[_sessionIndex].candidateCount;
    }

    function getCandidate(uint _sessionIndex, uint _candidateIndex) public view returns (string memory, uint, string memory, uint) {
        require(_sessionIndex < votingSessionCount, "Invalid session index");
        VotingSession storage session = votingSessions[_sessionIndex];
        require(_candidateIndex < session.candidateCount, "Invalid candidate index");
        Candidate storage candidate = session.candidates[_candidateIndex];
        return (candidate.name, candidate.studentId, candidate.department, candidate.voteCount);
    }

    function vote(uint _sessionIndex, uint _candidateIndex) public {
        require(_sessionIndex < votingSessionCount, "Invalid session index");
        VotingSession storage session = votingSessions[_sessionIndex];
        require(_candidateIndex < session.candidateCount, "Invalid candidate index");
        require(session.isActive, "Voting session is not active");
        require(!hasVoted[msg.sender][_sessionIndex], "You have already voted in this session");

        uint currentTime = block.timestamp;
        require(currentTime >= session.startTime && currentTime <= session.endTime, "Voting session is not active");

        session.candidates[_candidateIndex].voteCount++;
        hasVoted[msg.sender][_sessionIndex] = true;

        emit Voted(_candidateIndex, _sessionIndex);
    }

    function registerUser(string memory _name, uint _studentId, string memory _password) public {
        bytes32 passwordHash = keccak256(abi.encodePacked(_password));
        users[_studentId] = User({
            name: _name,
            studentId: _studentId,
            passwordHash: passwordHash
        });

        emit UserRegistered(_name, _studentId);
    }

    function login(uint _studentId, string memory _password) public {
        User memory user = users[_studentId];
        require(user.studentId != 0, "User not registered");
        require(user.passwordHash == keccak256(abi.encodePacked(_password)), "Invalid credentials");

        loggedIn[msg.sender] = _studentId;

        emit UserLoggedIn(_studentId);
    }

    function logout() public {
        uint studentId = loggedIn[msg.sender];
        loggedIn[msg.sender] = 0;

        emit UserLoggedOut(studentId);
    }
}
