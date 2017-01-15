gdocs = {
    // Your Client ID can be retrieved from your project in the Google
      // Developer Console, https://console.developers.google.com
     CLIENT_ID: '471953029160-un4jegatpvtos9sl4j0lv4occr5g4ri1.apps.googleusercontent.com',

     SCOPES: ['https://www.googleapis.com/auth/drive.metadata.readonly'],

      /**
       * Check if current user has authorized this application.
       */
      checkAuth: function checkAuth() {
        gapi.auth.authorize(
          {
            'client_id': this.CLIENT_ID,
            'scope': SCOPES.join(' '),
            'immediate': true
          }, this.handleAuthResult);
      },

      /**
       * Handle response from authorization server.
       *
       * @param {Object} authResult Authorization result.
       */
      handleAuthResult: function handleAuthResult(authResult) {
        var authorizeDiv = document.getElementById('authorize-div');
        if (authResult && !authResult.error) {
          // Hide auth UI, then load client library.
          authorizeDiv.style.display = 'none';
          this.loadDriveApi();
        } else {
          // Show auth UI, allowing the user to initiate authorization by
          // clicking authorize button.
          authorizeDiv.style.display = 'inline';
        }
      },

      /**
       * Initiate auth flow in response to user clicking authorize button.
       *
       * @param {Event} event Button click event.
       */
      handleAuthClick: function handleAuthClick(event) {
        gapi.auth.authorize(
          {client_id: this.CLIENT_ID, scope: this.SCOPES, immediate: false},
          this.handleAuthResult);
        return false;
      },

      /**
       * Load Drive API client library.
       */
      loadDriveApi: function loadDriveApi() {
        gapi.client.load('drive', 'v3', listFiles);
      },

      /**
       * Print files.
       */
      listFiles: function listFiles() {
        var request = gapi.client.drive.files.list({
            'pageSize': 10,
            'fields': "nextPageToken, files(id, name)"
          });

          request.execute(function(resp) {
            this.appendPre('Files:');
            var files = resp.files;
            if (files && files.length > 0) {
              for (var i = 0; i < files.length; i++) {
                var file = files[i];
                this.appendPre(file.name + ' (' + file.id + ')');
              }
            } else {
              this.appendPre('No files found.');
            }
          });
      },

      /**
       * Append a pre element to the body containing the given message
       * as its text node.
       *
       * @param {string} message Text to be placed in pre element.
       */
      appendPre: function appendPre(message) {
        var pre = document.getElementById('output');
        var textContent = document.createTextNode(message + '\n');
        pre.appendChild(textContent);
      }

};