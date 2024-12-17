const directory = [
    {
      "id":1.0,
      "category": "Crisis Services",
      "contacts": [
        { "id":"1.0.1", "name": "Alcohol Hotline 24 Hour Number", "phone": "800-562-1240" },
        { "id":"1.0.2", "name": "Crisis Clinic (Public)", "phone": "206-461-3222" },
        { "id":"1.0.3", "name": "Crisis Clinic (LE)", "phone": "206-461-3210 Ext. 1" },
        { "id":"1.0.4", "name": "Domestic Violence Hotline", "phone": "800-562-6025" },
        { "id":"1.0.5", "name": "New Beginnings", "phone": "206-522-9472" },
        { "id":"1.0.6", "name": "DAWN", "phone": "253-854-7867" },
        { "id":"1.0.7", "name": "Poison Center", "phone": "800-732-6985" },
        { "id":"1.0.8", "name": "KC Sexual Assault Resource Center (24 hr)", "phone": "888-998-6423" },
        { "id":"1.0.9", "name": "Mobile Crisis Team", "phone": "206-245-3201" },
        { "id":"1.0.10", "name": "Indian Center Detox", "phone": "206-682-9037" },
        { "id":"1.0.11", "name": "King County Detox (Pam McLaren, Cellular)", "phone": "206-949-4090" },
        { "id":"1.0.12", "name": "King County Detox (Pam McLaren, Pager)", "phone": "206-994-2405" },
        { "id":"1.0.13", "name": "King County Detox", "phone": "206-296-7650" },
        { "id":"1.0.14", "name": "Mental Health Hotline", "phone": "206-223-3107" },
        { "id":"1.0.15", "name": "Child Protective Services (24 hr)", "phone": "800-609-8764" }
      ]
    },
    {
      "id":2.0,
      "category": "LE Dispatch & Support",
      "contacts": [
        { "id":"2.0.1",  "name": "Valley Comm FW Dispatch", "phone": "253-372-1439" },
        { "id":"2.0.2",  "name": "Valley Communications (Police Only)", "phone": "253-372-1400" },
        { "id":"2.0.3",  "name": "KC Dispatch", "phone": "206-296-3311" },
        { "id":"2.0.4",  "name": "Federal Way Dispatcher", "phone": "253-372-1439" },
        { "id":"2.0.5",  "name": "Non-Emergency Line", "phone": "253-852-2121" },
        { "id":"2.0.6",  "name": "Washington State Patrol", "phone": "425-455-7700" },
        { "id":"2.0.7",  "name": "Washington State Patrol South Office", "phone": "425-455-7771" },
        { "id":"2.0.8",  "name": "Washington State Patrol Tacoma Office", "phone": "253-536-6210" }
      ]
    },
    {
      "id":3.0,
      "category": "Jails",
      "contacts": [
        { "id":"3.0.1",  "name": "Issaquah Jail", "phone": "425-837-3268" },
        { "id":"3.0.2",  "name": "Kent Jail", "phone": "253-856-5975" },
        { "id":"3.0.3",  "name": "SCORE Jail", "phone": "206-257-6298" },
        { "id":"3.0.4",  "name": "Puyallup Jail", "phone": "253-841-5522" },
        { "id":"3.0.5",  "name": "RJC Jail", "phone": "206-477-2791" },
        { "id":"3.0.6",  "name": "King County Jail (Seattle)", "phone": "206-477-5001" },
        { "id":"3.0.7",  "name": "Auburn Jail", "phone": "253-931-3085" }
      ]
    },
    {
      "id":4.0,
      "category": "Courts",
      "contacts": [
        { "id":"4.0.1",  "name": "Federal Way Municipal Court", "phone": "253-835-3000" },
        { "id":"4.0.2",  "name": "Kent Municipal Court", "phone": "253-856-5730" },
        { "id":"4.0.3",  "name": "King County Superior Court RJC", "phone": "206-205-7400" },
        { "id":"4.0.4",  "name": "King County Superior Court (Seattle)", "phone": "206-296-9300" },
        { "id":"4.0.5",  "name": "King County Juvenile Court (Seattle)", "phone": "206-477-6770" }
      ]
    },
    {
      "id":5.0,
      "category": "Towing Services",
      "contacts": [
        { "id":"5.0.1",  "name": "Al&apos;s Towing", "phone": "253-941-2888" },
        { "id":"5.0.2",  "name": "Gene&apos;s Towing", "phone": "253-941-9948 / 253-709-9281" },
        { "id":"5.0.3",  "name": "MV Towing", "phone": "253-941-4565" },
        { "id":"5.0.4",  "name": "Northwest Towing", "phone": "253-925-8931" },
        { "id":"5.0.5",  "name": "One Stop Towing", "phone": "253-852-6000" },
        { "id":"5.0.6",  "name": "Payless Towing", "phone": "253-941-4565" }
      ]
    },
    {
      "id":6.0,
      "category": "Medical Services",
      "contacts": [
        { "id":"6.0.1",  "name": "Auburn General Hospital", "phone": "253-833-7711" },
        { "id":"6.0.2",  "name": "Group Health (Federal Way)", "phone": "253-874-7000" },
        { "id":"6.0.3",  "name": "Group Health After Hours (Federal Way)", "phone": "253-838-0826" },
        { "id":"6.0.4",  "name": "Group Health Tacoma", "phone": "253-383-7801" },
        { "id":"6.0.5",  "name": "Harborview Hospital", "phone": "206-223-3000" },
        { "id":"6.0.6",  "name": "Highline Hospital", "phone": "206-244-9970" },
        { "id":"6.0.7",  "name": "St. Francis Hospital", "phone": "253-835-8100", "notes":"<strong>Address:</strong> 34515 9th Ave S, Federal Way, WA 98003<br /><strong>ER Door Code:</strong> 333" },
        { "id":"6.0.8",  "name": "Tacoma Hospital", "phone": "253-927-9700" },
        { "id":"6.0.9",  "name": "Valley General Hospital", "phone": "206-228-3450" }
      ]
    },
    {
      "id":7.0,
      "category": "LE Agencies",
      "contacts": [
        { "id":"7.0.1",  "name": "Auburn Police Department", "phone": "253-931-3080" },
        { "id":"7.0.2",  "name": "Bellevue Police Department", "phone": "425-455-6944" },
        { "id":"7.0.3",  "name": "Des Moines Police Department", "phone": "206-878-3301" },
        { "id":"7.0.4",  "name": "Kent Police Department", "phone": "253-859-3315" },
        { "id":"7.0.5",  "name": "Seattle PD", "phone": "206-625-5011" },
        { "id":"7.0.6",  "name": "Seattle PD South Precinct", "phone": "206-386-1850" },
        { "id":"7.0.7",  "name": "Seattle PD Gang Unit", "phone": "206-684-8675 / 206-684-8679" },
        { "id":"7.0.8",  "name": "Tacoma PD Communications", "phone": "253-593-4721" },
        { "id":"7.0.9",  "name": "Tukwila PD", "phone": "206-433-1808" },
        { "id":"7.0.10",  "name": "Normandy Park PD", "phone": "206-248-7600" }
      ]
    },
    {
      "id":8.0,
      "category": "Prosecutors & Evidence",
      "contacts": [
        { "id":"8.0.1",  "name": "FW Prosecutor", "phone": "253-835-2580" },
        { "id":"8.0.2",  "name": "KC Prosecutor Office", "phone": "206-296-9540" },
        { "id":"8.0.3",  "name": "RJC Prosecutors Office", "phone": "206-205-7400" },
        { "id":"8.0.4",  "name": "FW Evidence", "phone": "253-835-6790" }
      ]
    },
    {
      "id":9.0,
      "category": "City and County Services",
      "contacts": [
        { "id":"9.0.1",  "name": "FW Code Enforcement", "phone": "253-835-2631 / 2632" },
        { "id":"9.0.2",  "name": "Public Works", "phone": "253-835-2700" },
        { "id":"9.0.3",  "name": "King County Animal Control", "phone": "206-296-3946" }
      ]
    },
    {
      "id":10.0,
      "category": "Language Services",
      "contacts": [
        { "id":"10.0.1",  "name": "Language Line (FW PD USE ONLY)", "phone": "1-800-523-1786" },
        { "id":"10.0.2",  "name": "Language Line Client ID", "phone": "943129" }
      ]
    },
    {
      "id":11.0,
      "category": "Fire Departments",
      "contacts": [
        { "id":"11.0.1",  "name": "Federal Way Fire Station 1", "phone": "253-927-1624" },
        { "id":"11.0.2",  "name": "Federal Way Fire Station 2", "phone": "253-839-4621" },
        { "id":"11.0.3",  "name": "Federal Way Fire Station 3", "phone": "253-838-6904" },
        { "id":"11.0.4",  "name": "Federal Way Fire Station 4", "phone": "253-839-4040" },
        { "id":"11.0.5",  "name": "Federal Way Fire Station 5", "phone": "253-839-3335" },
        { "id":"11.0.6",  "name": "Federal Way Fire Station 6", "phone": "253-839-4060" },
        { "id":"11.0.7",  "name": "Federal Way Fire Station 8 (Training)", "phone": "253-529-7209" }
      ]
    }
  ]
