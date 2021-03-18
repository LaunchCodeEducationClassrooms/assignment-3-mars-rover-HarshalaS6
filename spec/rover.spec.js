const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Rover class", function() {
  // 7 tests here!
  it("constructor sets position and default values for mode and generatorWatts",function(){
    let rover = new Rover(100);
    expect(rover.position).toEqual(100);
    expect(rover.mode).toEqual('NORMAL');
    expect(rover.generatorWatts).toEqual(110);
    });
  
  // Test 8
  it("response returned by receiveMessage contains name of message",function(){ 
    //Given info
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'),new Command('STATUS_CHECK')]; 
    let message = new Message('This is a new message.', commands);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
    expect(response.message).toEqual('This is a new message.');
  });

  // Test 9
  it("response returned by receiveMessage includes two results if two commands are sent in the message",function(){
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
  let message = new Message('Test message with two commands', commands);
  //let rover = new Rover(98382);  //Given info 
  //let response = rover.receiveMessage(message);
  expect(response.results.length).toEqual(2);
   
  });
// Test 10
  it("responds correctly to status check command",function(){});
    let commands = [new Command('STATUS_CHECK')];
    let message = new Message('Responds correctly to the status check', commands);
    let rover = new Rover(1234);
    let response = rover.receiveMessage(message);
    expect(response.results.roverStatus).toBeTrue;
    expect(rover.mode).toEqual('NORMAL');
    expect(rover.generatorWatts).toEqual(110);
    expect(rover.position).toEqual(1234);

// Test 11
  it("responds correctly to mode change command",function(){});

// Test 12
  it("responds with false completed value when attempting to move in LOW_POWER mode",function(){});



// Test 13
  it("responds with position for move command",function(){});
  
});
