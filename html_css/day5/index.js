        let homeScore = 0;
        let guestScore = 0;

        function addHomeScore(score) {
            homeScore += score;
            document.getElementById("home-score").value = homeScore;
        }

        function addGuestScore(score) {
            guestScore += score;
            document.getElementById("guest-score").value = guestScore;
        }

