// opentok_video.js

import Chat from './chat.js'
import Party from './party.js'
var session = ''
if (window.location.pathname == '/party') {
	document.addEventListener('DOMContentLoaded', function() {
		if (name != '') {
			// Initialize an OpenTok Session object
			if (session == '') {
				session = OT.initSession(api_key, session_id);
			}

			new Chat(session);
			new Party(session);

			// Connect to the Session using a 'token'
			session.connect(token, function(error) {
				if (error) {
					console.error('Failed to connect', error);
				}
			});

			// Listen for Signal screenshare message
			session.on('signal:screenshare', function screenshareCallback(event) {
				if (event.data == 'on') {
					window.location = '/screenshare?name=' + name;
				};
			});
		};
	});
}
