# MQTT Client programming

MQTT.js supports WebSocket protocol connections in browser environments and TCP (SSL/TLS) protocol in Node.js environments.

Choose the appropriate connection mode according to your usage scenario:

- Use the connect() function to connect and return a client instance
- Uses callback functions to handle related logic in client events：
	- connect：Connection success event
	- reconnect：Connection error, abnormal disconnection and reconnection events
	- error：Connection error and termination of connection events
	- message：Receive subscription message event

Client has several basic functions:

- subscribe(): Subscribe to a topic or topics
- publish(): Publish a message to a topic
- end(): Close the client

### Quick start

- Start emqx
./bin/emqx start

- Check running status
./bin/emqx_ctl status

EMQ X uses 8083 ports for WebSocket connections, and 8084 for WebSocket with SSL.
Local connect url is: ws://localhost:8083/mqtt


The default TCP ports used by the EMQ X message server include:

- 1883	MQTT protocol port
- 8883	MQTT/SSL port
- 8083	MQTT/WebSocket port
- 8080	HTTP API port
- 18083	Dashboard Management Console Port -> http://localhost:18083/
username: `admin` password: `public`
For more info see https://docs.emqx.io/tutorial/v3/en/quick_start/run_first.html

### Publish

Publish a message to a topic using the publish () function.
The published topic must conform to the MQTT publishing topic rule, otherwise, the client will disconnect.

There is no need to subscribe to the topic before publish, but make sure that the client has successfully connected:

---

To test first start your emqx dashboard http://localhost:18083/#/websocket
Run npm run serve to start client
Try sending message to predefined topic or subscribe to custom topic then send message and watch dashboard
You can connect with dashboard then send messages to any topic from there also

---
Source tutorial https://docs.emqx.io/tutorial/v3/en/client_dev/javascript.html

For more info about the broker see https://docs.emqx.io/broker/v3/en/guide.html

For more info about the MQTT lib see https://www.npmjs.com/package/mqtt