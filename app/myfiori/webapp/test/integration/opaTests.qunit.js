sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'myfiori/test/integration/FirstJourney',
		'myfiori/test/integration/pages/EscalationsList',
		'myfiori/test/integration/pages/EscalationsObjectPage',
		'myfiori/test/integration/pages/CommentsObjectPage'
    ],
    function(JourneyRunner, opaJourney, EscalationsList, EscalationsObjectPage, CommentsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('myfiori') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheEscalationsList: EscalationsList,
					onTheEscalationsObjectPage: EscalationsObjectPage,
					onTheCommentsObjectPage: CommentsObjectPage
                }
            },
            opaJourney.run
        );
    }
);