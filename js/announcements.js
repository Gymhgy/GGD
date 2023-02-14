(() => {
    const announcementsInfo = [
        {
            title: "RESPONSE REQUIRED -2023 February Drill Meal Response Form",
            text: `13Feb23:  

            For those that responded already, thank you and no further action is required.  

            For the few that have not, it is DUE TODAY.  

            <a href="https://forms.gle/CCJZbiocpU6cXHpj6">https://forms.gle/CCJZbiocpU6cXHpj6</a>

            Even if you are not attending, you still need respond to the meal sheet without checking off the meals. This is for meal planning only. Do not leave it up to the planning staff to figure that out.   

            Thank you. 

            P.S.  The leaguers are all accounted for. You can do this.`,
            datetime: "Mon 13 FEB 23",
            announcer: "General Announcement",
            picture: "img/staff/general.png"
        },
        {
            title: "Meal Response Form",
            text: `Good morning, Cadets and Leaguers,   

            Please respond to the meal response google form no later than Monday 13 Feb 23.

            Click here =>  <a href="https://forms.gle/CCJZbiocpU6cXHpj6">https://forms.gle/CCJZbiocpU6cXHpj6</a>
            
            Unit needs time to plan and purchase meal items in advanced for our large group. If we do not hear from you, we will assume you ARE coming and you will be responsible for paying the $20 for meals. Saturday lunch is always BYO. There may be times the concession stand on the ship is not open and we don’t have control over that, so please plan ahead.    
            
            The meal cost for this February drill will remain $20. Due to continuing price increase of food supplies, going forward a typical drill meal cost will increase to $25. Thank you for your understanding.   
            
            As always, meal response sheet is not where you notify absences.  Continue to follow your Chain of Command for this.    
            
            See you all at the next drill.`,
            datetime: "Sat 11 FEB 23",
            announcer: "General Announcement",
            picture: "img/staff/general.png"
        },
        {
            title: "Academic Report Card",
            text: "If you would like to submit your academic report card for recognition in March, please use this link: https://forms.gle/gdK4e4K8LU7LsmQb8. Current period is for Fall semester 2022. Please submit before February 28, 2023.",
            datetime: "Tue 31 JAN 23",
            announcer: "INST MUI",
            picture: "img/staff/instmui.png"
        },
        {
            title: "New BATCOM",
            text: "CPO Xander Mui is the new BATCOM. Please address all concerns appropriately through the chain of command. His phone number is 415-309-9494.",
            datetime: "Sat 14 JAN 23",
            announcer: "General Announcement",
            picture: "img/staff/general.png"
        },
        {
            title: "Service Jackets",
            text: "If you did not get your service jacket at the potluck on Sunday last drill, that means there was something missing from the info we must have in there, or you had not yet been approved for the training. If you are going to Camp SLO, I will bring your record with me.  If you are going to Hilltop, I will give your record to ENS Khan. Everyone else, we must pick a time for you to pick up your record before you leave.  If you are going to a training at a location with another cadet and you want them to pick up your record, let me know. Please TEXT me if you are going to a training besides SLO or Hilltop, and we will figure out a pickup time and place. 925-579-4755 ",
            datetime: "Mon 19 DEC 22",
            announcer: "LT NORTON",
            picture: "img/staff/kellynorton.jpg"
        },
        {
            title: "Drill Photos",
            text: "Our sponsors at the Alameda Navy League are requesting a couple of photos for an article to post in their newsletter. If you have any photos of the past two drills that are newsletter worthy, please email me by 1700 tonight and I will choose a couple to send to them. Cadets who have gone to Photojournalism training, or who are signed up to go this winter, let your BATCOM know if you would like to be the unit phojo cadet and take photos at drills and events. The deadline to apply for this position is 07 JAN 23.",
            datetime: "Fri 16 DEC 22",
            announcer: "LT NORTON",
            picture: "img/staff/kellynorton.jpg"
        },
        {
            title: "2023 Calendar",
            text: "The Calendar for 2023 is up!  Be sure to check it out.",
            datetime: "Sat 10 DEC 22",
            announcer: "LT NORTON",
            picture: "img/staff/kellynorton.jpg"
        },
        {
            title: "PRT",
            text: "If you are attending a training this winter, make sure you have a passing PRT score on file. We'll be conducting PRT next drill—start training by doing push ups, practicing planks, and running miles.",
            datetime: "Wed 29 SEP 22",
            announcer: "LT NORTON",
            picture: "img/staff/kellynorton.jpg"
        }
    ]

    var announcements = document.getElementById('announcements');

    for(const announcement of announcementsInfo) {
        var div = document.createElement("div");
        div.classList.add("row", "py-4");
        div.innerHTML = `
        <img class="h-100 col-lg-1 col-2 rounded" src="${announcement.picture}"></img>
        <div class="col-lg-11 col-10">
        <p class="text-primary fw-bold">${announcement.announcer} > Everyone</p>
        <p><u>
            ${announcement.title}
        </u></p>
        <p>
        ${announcement.text.replaceAll("\n", "<br>")}
        </p>
        <p class="text-muted">${announcement.datetime}</p>
        </div>

        `;
        announcements.appendChild(div);
    }
})();
