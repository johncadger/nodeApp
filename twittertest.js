/**
 * Created by 1204848 on 30/11/2015.
 */
var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'grQQB7YTdeoBt3vSEYdwfB2d5',
    consumer_secret: 'Q0e5NSmQv3hoCUNZdRZpUusVXOq6DrkOdtowizLJbo100Rbca1',
    access_token_key: '265741013-dXzLzyPfhAg9JDsCZ0AtAlX2f8LNj2Apsr5MPAOm',
    access_token_secret: '6qb96nVKAMClQ9S6SCHeIc0qtsmZqdd3e5SUUfRW2wkkU'
});

client.get('search/tweets', {q: 'lolcat',count:'2'}, function(error, tweets){
    console.log(tweets);
});

var Twitter = require('twitter');
var http = require('http')
var port = process.env.PORT || 1337;

var client = new Twitter({
    consumer_key: 'uXl8060AfB6TtVZOjUPbPqiuU',
    consumer_secret: 'qWYtc0c6wskWp9OvP63LcFTxnGexfhCjLAfN7gKgcwW7zfcSdv',
    access_token_key: '14812487-6rIZpOfDmMBGFybfd26Cpe86kGw64MLGaZLaimuFN',
    access_token_secret: 'efrJVLugBwFeAVnWSx1Cx6Z8N8IJlSB3js7XjW4KUYiuc'
});

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    client.get('search/tweets', {q: 'lolcats'}, function(error, tweets){
        console.log(tweets);
    });

}).listen(port);
