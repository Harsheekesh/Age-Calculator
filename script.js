let userInput = document.getElementById('date');
        userInput.max = new Date().toISOString().split("T")[0]; 

        function calculateAge() {
            let dob = new Date(userInput.value);
            let d1 = dob.getDate();
            let m1 = dob.getMonth() + 1;
            let y1 = dob.getFullYear();

            let today = new Date(); // Initialize today properly
            let d2 = today.getDate();
            let m2 = today.getMonth() + 1;
            let y2 = today.getFullYear();

            let d3, m3, y3;
            y3 = y2 - y1;

            if (m2 >= m1) {
                m3 = m2 - m1;
            } else {
                y3--;
                m3 = 12 + m2 - m1;
            }

            if (d2 >= d1) {
                d3 = d2 - d1;
            } else {
                m3--;
                let days = getDaysInMonth(m2 - 1, y2);
                d3 = days + d2 - d1;
            }

            if (m3 < 0) {
                m3 = 11;
                y3--;
            }

            console.log(y3, m3, d3);

            // Display the calculated age
            document.getElementById('age').innerText = `${y3} years, ${m3} months, and ${d3} days`;

            function getDaysInMonth(month, year) {
                return new Date(year, month, 0).getDate();
            }
        }