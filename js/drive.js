 console.log("i live!");

 /**
     * This function is called the first time that the Realtime model is created
     * for a file. This function should be used to initialize any values of the
     * model. In this case, we just create the single string model that will be
     * used to control our text box. The string has a starting value of 'Hello
     * Realtime World!', and is named 'text'.
     * @param model {gapi.drive.realtime.Model} the Realtime root model object.
     */
    function initializeModel(model) {
      console.log("New File Created");
      // var string = model.createString('Hello Realtime World!');
      scavengrApp.imageArray = model.createList([
        {image: 'http://i.imgur.com/MprxT1s.jpg'}, 
        {image: 'http://i.imgur.com/EE2KJ7P.jpg'}, 
        {image: 'http://i.imgur.com/EwCgQFu.jpg'}, 
        {image: 'http://i.imgur.com/Lr46i2E.jpg'}]);
      scavengrApp.listsArray = model.createList([
        {name: 'Dogs', description: 'Take a shot of your favourite hike', images: ["http://i.imgur.com/MprxT1s.jpg", "http://i.imgur.com/EwCgQFu.jpg", "http://i.imgur.com/Lr46i2E.jpg"]}, 
        {name: 'Take a Hike', description: 'Take a shot of your favourite hike', images: ["http://i.imgur.com/Lr46i2E.jpg", "http://i.imgur.com/EwCgQFu.jpg", "http://i.imgur.com/Lr46i2E.jpg"]}, 
        {name: 'Valleys', description: 'Take a shot of your favourite hike', images: ["http://i.imgur.com/EwCgQFu.jpg", "http://i.imgur.com/Lr46i2E.jpg"]}]);
      // model.getRoot().set('text', string);
      model.getRoot().set('uploadedImages', scavengrApp.imageArray);
      model.getRoot().set('uploadedLists', scavengrApp.listsArray);
    }

    /**
     * This function is called when the Realtime file has been loaded. It should
     * be used to initialize any user interface components and event handlers
     * depending on the Realtime model. In this case, create a text control binder
     * and bind it to our string model that we created in initializeModel.
     * @param doc {gapi.drive.realtime.Document} the Realtime document.
     */
    function onFileLoaded(doc) {
      console.log("File Loaded");
      // var string = doc.getModel().getRoot().get('text');
      scavengrApp.imageArray = doc.getModel().getRoot().get('uploadedImages');
      scavengrApp.listsArray = doc.getModel().getRoot().get('uploadedLists');

      function imageChange(e) {
          // if (e.isLocal) return;
          console.log('imageChange', e);
          console.log(scavengrApp.imageArray.asArray());
          // scavengrApp.updateChat();
      };
      scavengrApp.imageArray.addEventListener(gapi.drive.realtime.EventType.VALUES_ADDED, imageChange);

      function listsChange(e) {
          // if (e.isLocal) return;
          console.log('listsChange', e);
          console.log(scavengrApp.imageArray.asArray());
          // scavengrApp.updateChat();
      };
      scavengrApp.imageArray.addEventListener(gapi.drive.realtime.EventType.VALUES_ADDED, listsChange);
      // // Keeping one box updated with a String binder.
      // var textArea1 = document.getElementById('editor1');
      // gapi.drive.realtime.databinding.bindString(string, textArea1);

      // // Keeping one box updated with a custom EventListener.
      // var textArea2 = document.getElementById('editor2');
      // var updateTextArea2 = function(e) {
      //   textArea2.value = string;
      // };
      // string.addEventListener(gapi.drive.realtime.EventType.TEXT_INSERTED, updateTextArea2);
      // string.addEventListener(gapi.drive.realtime.EventType.TEXT_DELETED, updateTextArea2);
      // textArea2.onkeyup = function() {
      //   string.setText(textArea2.value);
      // };
      // updateTextArea2();

      // // Enabling UI Elements.
      // textArea1.disabled = false;
      // textArea2.disabled = false;

      // // Add logic for undo button.
      // var model = doc.getModel();
      // var undoButton = document.getElementById('undoButton');
      // var redoButton = document.getElementById('redoButton');

      // undoButton.onclick = function(e) {
      //   model.undo();
      // };
      // redoButton.onclick = function(e) {
      //   model.redo();
      // };

      // // Add event handler for UndoRedoStateChanged events.
      // var onUndoRedoStateChanged = function(e) {
      //   undoButton.disabled = !e.canUndo;
      //   redoButton.disabled = !e.canRedo;
      // };
      // model.addEventListener(gapi.drive.realtime.EventType.UNDO_REDO_STATE_CHANGED, onUndoRedoStateChanged);
    }

    /**
     * Options for the Realtime loader.
     */
    var realtimeOptions = {
      /**
       * Client ID from the console.
       */
      clientId: '426538219592-e2laldk043f89f34388h62j34p7kthfh.apps.googleusercontent.com',

      /**
       * The ID of the button to click to authorize. Must be a DOM element ID.
       */
      authButtonElementId: 'authorizeButton',

      /**
       * Function to be called when a Realtime model is first created.
       */
      initializeModel: initializeModel,

      /**
       * Autocreate files right after auth automatically.
       */
      autoCreate: true,

      /**
       * The name of newly created Drive files.
       */
      defaultTitle: "TestFile",

      /**
       * The MIME type of newly created Drive Files. By default the application
       * specific MIME type will be used:
       *     application/vnd.google-apps.drive-sdk.
       */
      newFileMimeType: null, // Using default.

      /**
       * Function to be called every time a Realtime file is loaded.
       */
      onFileLoaded: onFileLoaded,

      /**
       * Function to be called to inityalize custom Collaborative Objects types.
       */
      registerTypes: null, // No action.

      /**
       * Function to be called after authorization and before loading files.
       */
      afterAuth: null // No action.
    }

    /**
     * Start the Realtime loader with the options.
     */
    function startRealtime() {
      console.log("start realtime");
      var realtimeLoader = new rtclient.RealtimeLoader(realtimeOptions);
      realtimeLoader.start();
    }