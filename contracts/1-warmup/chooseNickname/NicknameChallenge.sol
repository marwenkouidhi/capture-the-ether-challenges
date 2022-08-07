pragma solidity ^0.4.21;

import "./CaptureTheEtherMock.sol";

// Challenge contract. You don't need to do anything with this; it just verifies
// that you set a nickname for yourself.

contract NicknameChallenge {
    CaptureTheEtherMock cte = CaptureTheEtherMock(msg.sender);
    address player;

    // Your address gets passed in as a constructor parameter.
      function NicknameChallenge (address _player) public {
        player = _player;
    }

    // Check that the first character is not null.
    function isComplete() public view returns (bool) {
        return cte.nicknameOf(player)[0] != 0;
    }
}