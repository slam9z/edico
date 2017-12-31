(function($) {

    var x = setInterval(function() {
// utility methods

const writeValue = (elementId, value) => document.getElementById(elementId).textContent = value;
const weiToEther = wei => wei / 10**18;
const totalEther = 750000000/8500;
const percent = ether => (ether / totalEther * 100).toFixed(1);

//const targetApi = 'https://ropsten.infura.io/Kgx1nx3BuoZLPDNH2RkK';
const targetApi = 'https://mainnet.infura.io/Kgx1nx3BuoZLPDNH2RkK';
const contractAddress = '0xCe53a179047ebed80261689367c093C90A94cC08';
//'0x01760d015473A4Fd33466F00f9A94405376565FD';

///// getting contract
const web3 = new Web3(new Web3.providers.HttpProvider(targetApi));
const totalRaised = web3.fromWei(web3.eth.getBalance(contractAddress),"ether");

/// read and display values
//writeValue('contractAddress', contractAddress);
writeValue('totalRaised', 'Raised: ' + percent(totalRaised) + '%');
let etherPercent = percent(totalRaised) + '%';
//writeValue('totalRaisedPercent', etherPercent);

$('#progress-solid-line').css('width', etherPercent);
//$('#progress').text((progress * 100).toFixed(1) + '%').css('left', progress * 338 - 30 + 'px');
//$('#eth-amount').text(res.eth);
},
1000);
})(jQuery);
