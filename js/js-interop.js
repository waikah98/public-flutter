// Sets up a channel to JS-interop with Flutter
(function () {
    "use strict";
    // This function will be called from Flutter when it prepares the JS-interop.
    window._stateSet = function () {
        // This is done for handler callback to be updated from Flutter as well as HTML
        window._stateSet = function () {
            console.log('HELLO From Flutter!!')
        };

        // The state of the flutter app, see `class _MyAppState` in [src/client.dart].
        let appState = window._appState;

        // Get the input box i.e `value`
        let inputValueField = document.querySelector("#inputValue");

        inputValueField.addEventListener("input", (event) => {
            appState.getValue(inputValueField.value);   // Function present inside the `client.dart`
        });
    };
}());


// Sets up a channel to JS-interop with Flutter
(function () {
    "use strict";
    // This function will be called from Flutter when it prepares the JS-interop.
    window._stateSet2 = function () {
        let appState2 = window._appState2;

        // Get Value from app
         let getValue = document.querySelector("#getValue");
         let updateState = function () {
              console.log('hahahahaha ' + appState2.totalEarn);
             getValue.value = appState2.totalEarn; // Function present inside the `client.dart`
         };

         // Register a callback to update the HTML field from Flutter.
         appState2.addHandler(updateState);

         updateState();
    };
}());

