const CONFIG = {

    company: "JAK Technologies",

    sprintStart: "2026-06-29",

    sprintLength: 14,

    /* ==========================
       CURRENT PRIORITIES
    ========================== */

    priorities: [

        "Campus Go Live",

        "Recruiter - LinkedIn & Naukri Parsing",

        "Recruiter - RBAC",

        "Recruiter - Logging",

        "Recruiter - Invoice & Payment Management",

        "Recruiter - Client Feedback & Bugs",

        "Katalyst - Dashboard Issues",

        "Katalyst - SSO"

    ],

    /* ==========================
       PROJECT STATUS
    ========================== */

    projects: [

        {
            name: "Connexa",
            status: "Planning",
            owner: "Hussain",
            health: "🟡"
        },

        {
            name: "BizLync",
            status: "MVP",
            owner: "Akshay",
            health: "🟢"
        },

        {
            name: "Recruiter",
            status: "1 Client Onboarded",
            owner: "Hussain",
            health: "🟢"
        },

        {
            name: "Katalyst",
            status: "Support & Maintenance",
            owner: "Hussain",
            health: "🔵"
        },

        {
            name: "Campus",
            status: "Go Live",
            owner: "Nilesh / Hussain",
            health: "🟡"
        },

        {
            name: "Welspun",
            status: "Client Support",
            owner: "Nilesh",
            health: "🟢"
        }

    ],

    /* ==========================
       UPCOMING MILESTONES
    ========================== */

    milestones: [

        {
            date: "2026-07-07",
            title: "Katalyst Dashboard & SSO",
            owner: "Hussain"
        },

        {
            date: "2026-07-08",
            title: "Campus Go Live",
            owner: "Hussain"
        },

        {
            date: "2026-07-10",
            title: "Start BizLync Work Plan",
            owner: "Akshay"
        },

        {
            date: "2026-07-29",
            title: "Recruiter P0 Completion",
            owner: "Akshay"
        }

    ],

    /* ==========================
       SPRINT CEREMONIES
    ========================== */

    meetings: [

        {
            title: "Daily Scrum",
            schedule: "Every Working Day"
        },

        {
            title: "Office Hours",
            schedule: "Tuesday & Thursday • After 4 PM"
        },

        {
            title: "Sprint Planning",
            schedule: "2nd Last Day of Sprint"
        },

        {
            title: "Sprint Demo",
            schedule: "2nd Last Day of Sprint"
        },

        {
            title: "Sprint Deployment",
            schedule: "Sprint Weekend"
        },

        {
            title: "Release Notes",
            schedule: "End of Every Sprint"
        },

        {
            title: "Learning Session",
            schedule: "Bi-Weekly"
        },

        {
            title: "1:1 with Mentor",
            schedule: "Bi-Weekly"
        },

        {
            title: "Skip Level Meeting",
            schedule: "Monthly"
        }

    ],

    /* ==========================
       ENGINEERING TEAM
    ========================== */

    team: [

        "Akshay",

        "Hussain",

        "Muntazir",

        "Nilesh",

        "Naweed",

        "Arti",

        "Eshita",

        "Zameer",

        "Shafiq"

    ],

    /* ==========================
       TEAM RESPONSIBILITIES
    ========================== */

    responsibilities: [

        {
            role: "Technical Oversight",
            owner: "Akshay"
        },

        {
            role: "Pre-Sales",
            owner: "Akshay, Zameer, Nilesh"
        },

        {
            role: "Sales",
            owner: "Akshay, Zameer, Shafiq"
        },

        {
            role: "Marketing",
            owner: "Nilesh"
        },

        {
            role: "Getting More Work",
            owner: "Zameer"
        }

    ],

    /* ==========================
       OPERATIONS
    ========================== */

    operations: [

        "Server Upgrades (Bi-Weekly)",

        "NPM Package Upgrades (Bi-Weekly)",

        "Health Monitoring (Daily)",

        "Sprint Deployment (Bi-Weekly)",

        "Hotfixes (On Demand)",

        "Release Notes (Bi-Weekly)"

    ],

    /* ==========================
       ENGINEERING AGREEMENTS
    ========================== */

    rules: [

        "No development without design documents.",

        "Every work item must exist in GitHub.",

        "Every task must have an effort estimate.",

        "Every Pull Request requires two reviewers.",

        "CI/CD should be followed religiously.",

        "Follow the Engineering Handbook.",

        "Leave calendar must be updated before Sprint Planning.",

        "Peer reviews are mandatory for every PR.",

        "Intern onboarding should complete within one week.",

        "No client communication without approval unless urgent."

    ]

};
