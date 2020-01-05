"use strict";

const BASE_TOPIC = 'test_topic';

// connect options
const options = {
	connectTimeout: 10000,

	// Authentication
	clientId: 'emqx',
	username: 'emqx',
	password: 'emqx',

	keepalive: 60,
	clean: true
}

// WebSocket connect url
const WebSocket_URL = 'ws://localhost:8083/mqtt';

// TCP/TLS connect url
const TCP_URL = 'mqtt://localhost:1883';
const TCP_TLS_URL = 'mqtts://localhost:8883';

const client = mqtt.connect(WebSocket_URL, options);

// after connect
client.on('connect', () => {
	console.log('Connected to', TCP_URL);

	client.subscribe(BASE_TOPIC, (err) => {
		console.log(err || 'Subscribe Success')
	})
})

client.on('reconnect', (error) => {
	console.log('reconnecting:', error)
})

client.on('error', (error) => {
	console.log('Connect Error:', error)
})

// handle message event
client.on('message', (topic, message) => {
	console.log('Received form', topic, ':', message.toString());

	// disconnect
	//client.end();
})

function publish(msg) {
	// connect status
	if (!client.connected) {
		console.log('Client not connected');
		return
	}

	// publich(topic, payload, options/callback)
	client.publish(BASE_TOPIC, msg, (error) => {
		console.log(error || 'Publish Success')
	})
}

function subscribe(topic) {
	// connect status
	if (!client.connected) {
		console.log('Client not connected');
		return
	}

	client.subscribe(topic, { qos: 1 }, (error, granted) => {
		if (!error) {
			console.log(`Subscribe to topic Success`, granted)
		}
		else {
			console.warn(`Subscription to topic %s failed`, topic)
		}
	})
}

function unsubscribe(topic) {
	// connect status
	if (!client.connected) {
		console.log('Client not connected');
		return
	}

	client.unubscribe(
		// topic, topic Array, topic Array-Onject
		topic,
		(err) => {
			console.log(err || 'Unubscribe from topic %s Success', topic)
		}
	)
}

function publishMessageToCustomTopic(topic, msg) {
	// connect status
	if (!client.connected) {
		console.log('Client not connected');
		return
	}

	// publish(topic, payload, options/callback)
	client.publish(topic, msg, (error) => {
		console.log(error || 'Publish to topic %s Success', topic)
	})
}