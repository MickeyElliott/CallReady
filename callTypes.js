
var callTypeData = {
    version: 1.0,
    type: "calltype",
    chapters: [
      {
        id: "0.0",
        title: "TIPS",
        description: "Important things to consider.",
        items: [
          {
            id: "0.0.1",
            title: "Constant Review",
            description: "Things to know pertaining to all call types.",
            definition: [
              { "index": "1", "main": "<strong>Know Your Sandbox:</strong> Differentiate between a Social Stop, Terry Stop, and Probable Cause." },
              { "index": "2", "main": "<strong>Code-4 Scene:</strong> Always run names before declaring Code-4." },
              { "index": "3", "main": "<strong>Priority Calls:</strong> Ensure Priority 1 calls are resolved by the end of your shift." },
              { "index": "4", "main": "<strong>Serving Protection Orders:</strong> Verify identity and service date before leaving." },
              { "index": "5", "main": "<strong>Order Violation:</strong> Two prior convictions elevate the violation to a Class C Felony." },
              { "index": "6", "main": "<strong>Executing Warrants:</strong> Notify a supervisor for high-risk warrants." },
              { "index": "7", "main": "<strong>Vehicle Recovery:</strong> Match plate and VIN before proceeding." },
              { "index": "8", "main": "<strong>DV Elements:</strong> DV supplement may not be required if not classified as DV." },
              { "index": "9", "main": "<strong>Mental Health ITA:</strong> Focus on Danger to Self, Others, Property, or Gravely Disabled." },
              { "index": "10", "main": "<strong>Burglary Investigation:</strong> Establish containment and request backup resources." },
              { "index": "11", "main": "<strong>DUI Stop:</strong> Document PC thoroughly after field sobriety tests." },
              { "index": "12", "main": "<strong>Traffic Stops:</strong> Plan approach and verify plate and owner details." },
              { "index": "13", "main": "<strong>DOA Management:</strong> Notify a supervisor if suspicious circumstances arise." },
              { "index": "14", "main": "<strong>Trespassing:</strong> Confirm keyholder&apos;s intent to pursue action." },
              { "index": "15", "main": "<strong>Retail Theft:</strong> Complete ID and trespass forms when assisting loss prevention." },
              { "index": "16", "main": "<strong>Suicidal Subjects:</strong> Build rapport using &apos;It seems like...&apos; or &apos;It sounds like...&apos;" },
              { "index": "17", "main": "<strong>Booking:</strong> Remove firearms and turn off body-worn cameras before entering booking." },
              { "index": "18", "main": "<strong>Incident Command:</strong> Define roles such as staging, containment, and investigation." },
              { "index": "19", "main": "<strong>K9 Announcements:</strong> Log announcements in CAD every 5 minutes." },
              { "index": "20", "main": "<strong>Assault 4:</strong> Doesn&apos;t become felony after the 3rd unless it&apos;s between intimate partners." },
              { "index": "21", "main": "<strong>Valid ID:</strong> A physical driver&apos;s license doesn&apos;t mean someone&apos;s licensed in the system." }
          
          
            ],
            link: "",
            offense: "",
            elementsOfPC: [],
            questions: [              
            ],
            relatedCodes: [],
            relatedProcedures: []
          }
        ]
      },
      {
        id: "1.0",
        title: "Protection Orders",
        description: "Calls involving protection orders.",
        items: [
          {
            id: "1.0.1",
            title: "Serving Order",
            description: "Serving an order requires an understanding of what&apos;s in the order, and who the petitioner and the respondant is. ",
            definition: [
              {
                index: "1",
                main: "Check service date."
              },
              {
                index: "2",
                main: "Read and understand the order."
              },
              {
                index: "<i class=\"bi bi-info-circle-fill text-primary fs-4\"></i>",
                main: "<span class=\"text-primary\">If a protection order mandates respondent to vacate a shared residence, officers are authorized (exigent circumstances) to enter home without respondent&apos;s consent to enforce the order.</span>"
              },
              {
                index: "3",
                main: "Verify respondant&apos;s identity."
              },
              {
                index: "4",
                main: "Ensure respondant is not in violation of the order before leaving.",
                subSections: [
                  "Do not leave if serving the violation causes the violation.",
                  "Give reasonable amount of time for respondant leave.",
                  "If respondant is unreasonable, can arrest for violating the order."
                ]
              },
              {
                index: "5",
                main: "Log service attempts on envelop if respondant is GOA."
              }
            ],
            link: "",
            offense: "",
            elementsOfPC: [],
            questions: [              
            ],
            relatedCodes: [
              "6.35.020"
            ],
            relatedProcedures: [
            ]
          },
          {
            id: "1.0.2",
            title: "Order Violation",
            description: "Process for dealing with a respondent violating a protection order.",
            definition: [
              
              { index: "1", main: "Verify ID of respondent and petitioner prior to call." },
              { index: "2", main: "Request records to email you the Order." },
              { index: "3", main: "Confirm the order. (After PC)", subSections:[
                "NOS = Notice of Service",
                "SVD = Served Date"
              ] },
              { index: "4", main: "Identify PC from order and arrest." },
              { index: "5", main: "Gather statements from victim and evidence for PC." },
              { index: "6", main: "Attempt to locate suspects if GOA." },
              { index: "7", main: "Perform III check on arrest.", subSections: [
                "If the violator has 2 prior convictions for similar offenses, the violation  elevates to a Class C Felony."
              ] }
            ],
            link: "",
            offense: "Gross Misdemeanor",
            elementsOfPC: ["Order has been served.", "Order Confirmed", "Knowingly Violating"],
            questions: [],
            relatedCodes: ["9A.46.020"],
            relatedProcedures: []
          }
          
          
          
        ]
      },
      
      {
        id: "2.0",
        title: "Warrants",
        description: "Procedures for handling warrants.",
        items: [
          {
            "id": "2.0.1",
            "title": "Executing Warrant",
            "description": "Procedure for confirming and executing warrants.",
            "definition": [
              { "index": "1", "main": "<strong>Verify ID</strong> (DOL or something tangible).",
                subSections: [
                  "Issue Miranda warning if necessary."
                ]
               },
              { "index": "2", "main": "<strong>Confirm the Warrant</strong>: Dispatch or Records Department",
                subSections: [
                  "(a) High-Risk Warrant: Notify your supervisor.",
                  "(b) Extradition: (Is the agency that issued the warrant willing to take custody of the individual?)."
                ]
               },
              { "index": "3", "main": "<strong>Search</strong>: Incident to arrest (if applicable)." },
              { "index": "4", "main": "<strong>Secure and transport</strong> Confirm the correct detention facility." },
              { "index": "5", "main": "<strong>Super Form</strong> If sending to King County Jail, may need a superform." },
              { "index": "6", "main": "<strong>Locate</strong> Send the warrant to the jail." },
              {
                index: "<i class=\"bi bi-info-circle-fill text-info fs-4\"></i>",
                main: "<span class=\"text-info\">If a citation was issued with the warrant, then a 10-liner is required in Spillman. The OCA is the warrant id.</span>"
              },
              {
                index: "<i class=\"bi bi-info-circle-fill text-info fs-4\"></i>",
                main: "<span class=\"text-info\">If Release from Custody/Promise to Appear, then facepage in Spillman. Keep the Warrrant confirmed.</span>"
              },
            ],
            "link": "",
            "offense": "",
            "elementsOfPC": [
              "Warrant has been confirmed.",
              "Confirmation of individual&apos;s identity.",
              "Extraditable if OSA."
            ],
            "questions": [
               "Does individual match who&apos;s on warrant?",
               "Is warrant confirmed?",
               "Is warrant extraditable from current location?"
            ],
            "relatedCodes": [
              "RCW 10.31.030",
              "RCW 13.40.140"
            ],
            relatedProcedures: [
            ]
          }
          
        ]
      },
      {
        id: "3.0",
        title: "Traffic/Vehicles",
        description: "Procedures for traffic stops and vehicles.",
        items: [
          {
            id: "3.0.1", // Unique identifier for the procedure
            title: "Stolen Vehicle (High-Risk)", // Title of the procedure
            description: "High-risk protocol for handling occupied or unoccupied stolen vehicles.",
            definition: [
              {
                index: "1",
                main: "Confirm the vehicle is stolen (plate and VIN).",
                subSections: [
                  "Request backup immediately."
                ]
              },
              {
                index: "2",
                main: "Containment & Cover:",
                subSections: [
                  "<span class=\"text-danger\">Number of Occupants</span>",
                  "Location",
                  "Direction of travel",
                  "Vehicle description",
                  "Spike Strip locations",
                  "Clear and Cover teams"
                ]
              },
              
              {
                index: "<i class=\"bi bi-exclamation-circle-fill text-warning fs-4\"></i>",
                main: "<strong class=\"text-warning\">High-Risk PA Announcements:</strong>",
                subSections: [
                  "<span class=\"text-warning\">PASSENGERS in the __________ vehicle, this is the FEDERAL WAY POLICE.</span>",
                  "<span class=\"text-warning\">You are UNDER ARREST.</span>",
                  "<span class=\"text-warning\">Roll down your windows and place your hands outside of the vehicle.</span>",
                  "<span class=\"text-warning\">DRIVER, EXIT the vehicle and KEEP YOUR HANDS UP or force will be used.</span>",
                  "<span class=\"text-warning\">WALK BACK to the sound of my voice.</span>"
                ]
              },
              {
                index: "<i class=\"bi bi-info-circle-fill text-info fs-4\"></i>",
                main: "<span class=\"text-info\">Once the vehicle is unoccupied, Recover Stolen Vehicle</span>"
              },
              {
                
                index: "<i class=\"bi bi-link-45deg\"></i>",
                href: "#li-3.0.6",
                main: "View Vehicle Pursuit"
              }
            ],
            link: "#", // Relevant RCW link
            offense: "", // Related offense
            elementsOfPC: [
              "Confirmed stolen via plate and VIN",
              "Occupant(s) linked to crime"
            ], // Elements necessary for probable cause
            questions: [
              "Have you confirmed the vehicle is stolen via plate and VIN?",
              "Was the vehicle searched for evidence?",
              "Was the stolen vehicle removed from database?"
            ], // Key investigative questions
            relatedCodes: [
              "46.55.113 Impound authority",
              "9A.56.070 Taking motor vehicle without permission",
              "9A.56.068 Possession of stolen vehicle"
            ], // Related statutes or codes
            relatedProcedures: [
            ] // Related procedures
          }, 
          {
            id: "3.0.2", // Unique identifier for the procedure
            title: "Recover Stolen Vehicle", // Title of the procedure
            description: "Steps for recovering and processing a stolen vehicle, including cases with impound waivers.",
            definition: [
              {
                index: "1",
                main: "Confirm the vehicle is stolen by matching plate and VIN.",
                subSections: [
                  "Authorize \"Consent to Search\" with records department.",
                  "Search the vehicle for evidence or contraband."
                ]
              },
              {
                index: "2",
                main: "Attempt to contact the registered owner (RO)."
              },
              {
                index: "3",
                main: "Notify the RO of the vehicle&apos;s location and drivability."
              },
              {
                index: "4",
                main: "Provide the RO a reasonable amount of time to recover the vehicle (typically ~30 minutes), unless:",
                subSections: [
                  "The vehicle is in a hazardous location (travel portion of a roadway), in which case the vehicle should be immediately impounded."
                ]
              },
              {
                index: "5",
                main: "If the RO or a responsible party cannot respond in a reasonable time, impound the vehicle per RCW 46.55.113(2,e)."
              },
              {
                index: "6",
                main: "Document efforts to contact the RO in the report."
              },
              {
                index: "7",
                main: "Avoid surveillance of the stolen vehicle, unless:",
                subSections: [
                  "The vehicle was reportedly involved in a serious felony crime in addition to being stolen."
                ]
              },
              {
                index: "8",
                main: "Remove the vehicle from the stolen vehicle list upon recovery."
              }
            ],
            link: "https://app.leg.wa.gov/RCW/default.aspx?cite=46.55.113", // Relevant RCW link
            offense: "Stolen Vehicle Recovery", // Related offense
            elementsOfPC: [], // Elements necessary for probable cause
            questions: [
              "Have you confirmed the plate and VIN match the stolen vehicle report?",
              "Did you attempt to contact the registered owner?",
              "Is the vehicle in a hazardous location requiring immediate impound?",
              "Was the vehicle involved in a serious felony crime?",
              "Did the R.O. indicate they could retrieve the vehicle within a reasonable time?"
            ], // Key investigative questions
            relatedCodes: [
              "46.55.113(2,e)" // Relevant RCW for impound authority
            ], // Related statutes or codes
            relatedProcedures: [
            ] // Related procedures
          },            
                   
          {
            id: "3.0.3",
            title: "Investigative Towing and Evidence Search",
            description: "Steps for towing a vehicle for evidence search and ensuring proper documentation.",
            definition: [
              { index: "1", main: "Attempt to gain consent first." },
              { index: "2", main: "Do NOT state that the impound will be at the owner&apos;s consent." },
              { index: "3", main: "Establish PC that evidence of the crime is in the vehicle." },
              { index: "4", main: "Seize vehicle to obtain a search warrant if needed." },
              { index: "5", main: "Direct MV towing to bring vehicle to city hall or evidence building." },
              { index: "6", main: "Follow tow truck and get a receipt." },
              { index: "7", main: "Use &apos;Investigative Tow&apos; in narrative; secure vehicle with evidence tape." },
              { index: "8", main: "Tag keys with case number and leave in CIS box." },
              { index: "9", main: "Email pd-cis with case number and tow reason; complete report same day." }
            ],
            link: "",
            offense: "",
            elementsOfPC: [],
            questions: [],
            relatedCodes: [],
            relatedProcedures: []
          },
          {
            id: "3.0.4",
            title: "Suspicious Vehicle",
            description: "Steps for evaluating and documenting a suspicious vehicle.",
            definition: [
              { index: "1", main: "Observe the scene for any unusual activity." },
              { index: "2", main: "Run the vehicle&apos;s plate to check status." },
              { index: "3", main: "Verify the VIN for any discrepancies." },
              { index: "4", main: "Articulate reason for any warning or tow, including relevant RCWs." }
            ],
            link: "",
            offense: "",
            elementsOfPC: [],
            questions: [],
            relatedCodes: [],
            relatedProcedures: []
          },
          {
            id: "3.0.5", // Unique identifier for the call type
            title: "DUI", // Title of the call type
            description: "Driving Under the Influence (DUI) incidents.",
            definition: [
              {
                index: "1",
                main: "PC DUI indicators:",
                subSections: [
                  "(a) Erratic driving behavior (swerving, speeding, failure to stop).",
                  "(b) Physical signs of impairment (odor of alcohol, slurred speech, red eyes).",
                  "(c) Eluding with suspicion of DUI can be a valid reason for pursuit."
                ]
              },
              {
                index: "2",
                main: "Conduct Field Sobriety Tests (SFSTs):",
                subSections: [
                  "<strong>Note:</strong> Read from Department Issued Card.",
                  "Horizontal Gaze Nystagmus (HGN): Look for involuntary eye movements at maximum deviation or before 45 degrees.",
                  "Walk and Turn: Observe for balance issues, inability to follow instructions, or stepping off the line.",
                  "One Leg Stand: Look for swaying, use of arms for balance, hopping, or putting the foot down."
                ]
              },
              {
                index: "3",
                main: "If PC established: Arrest, Miranda, Search, and Transport to station for <strong>Dreger</strong>."
              },
              {
                index: "4",
                main: "Perform a \"III\" (Criminal History Check) if the DUI is a felony."
              },{
                index: "5",
                main: "Create citation if Gross Misdemaenor. If Felony Spillman Facepage gets forwarded to CIS."
              },
              {
                index: "6",
                main: "Dreagor and DUI Packet",
                subSections: [
                  "(a) Start 15 minute observation period.",
                  "(b) Do DUI Questionaire first.",
                  "(c) Read Constitutional Rights.",
                  "(d) Read Implied Consent.",
                  "(e) Perform blow tests and print. (A copy goes with suspect)"
                ]
              },
              {
                index: "<i class=\"bi bi-info-circle-fill text-info fs-4\"></i>",
                main: "<span class=\"text-info\">ORI/Local Agency Code: WA0173600</span>"
              },
              {
                index: "7",
                main: "Warrants",
                subSections: [
                  "Sometimes a blood warrant is required. Details soon. ",
                  "Sometimes there&apos;s evidence insid a vehicle. You can do an evidence tow and create a search warrant to strengthen your PC on additional charges."
                ]
              }
            ],
            link: "", // Placeholder for potential reference links
            offense: "Gross Misdemeanor", // Offense classification
            elementsOfPC: [
              "Impaired driving behavior",
              "Failed sobriety tests",
              "Breath or blood test results over legal limit"
            ], // Required elements for probable cause
            questions: [
              "What driving behavior indicated impairment?",
              "What physical signs of impairment were observed?",
              "What were the results of the field sobriety tests?",
              "Did the suspect consent to a breath or blood test?",
              "What were the final test results?"
            ], // Key questions for investigation
            relatedCodes: [
              "RCW 46.61.502 Driving under the influence",
              "RCW 46.61.504 Physical control of a vehicle under the influence"
            ], // Related RCWs
            relatedProcedures: [
              "SFST",
              "BloodWarrant",
              "EvidenceTow",
              "IIICheck"
            ] // Related procedures
          },
          {
            id: "3.0.6",
            title: "Vehicle Pursuit",
            description: "Always Initiate with PROBABLE CAUSE. High Risk. <b>In-Progress Felony</b> and <b>IMMEDIATE THREATS ONLY</b>",
            definition: [
              { index: "1", main: "INFORM DISPATCH",
                subSections: [
                  "Run Plate",
                  "Vehicle Description",
                  "Number of Occupants",
                  "<span class=\"text-danger\">Direction of Travel</span>",
                  "<span class=\"text-danger\">ROAD CONDITIONS - Clear; Moderate; Heavy Traffic</span>"
                  
                ]
               },
              { index: "2", main: "IN PURSUIT",
                subSections: [
                  "<span class=\"text-danger\">PC FOR:</span>",
                  "In-Progress Felony: (Recent BOLO)",
                  "DUI Observations",
                  "RO Warrants"
                ]
               },
               { index: "3", main: "Containment",
                subSections: [
                  "<span class=\"text-danger\">Vehicle 2: Take over comms</span>",
                  "Spike Strip locations",
                  "Passenger Bails: K9 Callout",
                  "Passenger Bails: Guardian One"
                ]
               }
            ],
            link: "",
            offense: "",
            elementsOfPC: [],
            questions: [],
            relatedCodes: [],
            relatedProcedures: []
          },
          {
            id: "3.0.7",
            title: "Traffic Stop",
            description: "Call out traffic stop prior. Eliminate multi-tasking.",
            definition: [
              { 
                index: "1", 
                main: "Pre-Arrival Checklist", 
                type: "pre-arrival",
                subSections: [
                  "Backup: Optional",
                  "Vehicle History: Run the license plate to see if stolen.",
                  "Occupant Check: Registered owner have outstanding warrants or criminal history.",
                  "Positioning: Plan the positioning of your patrol vehicle for cover and safety.",
                  "Approach Path: Plan the safest approach to the vehicle."
                ]
              },
              { index: "1", main: "Notify Dispatch of the traffic stop." },
              { index: "2", main: "Activate lights to signal driver." },
              { 
                index: "3", 
                main: "Read the plate and provide location to Dispatch.",
                subSections: [
                  "(a) Stolen/Mismatched Plate:",
                  "(i) Double check no clerical error.",
                  "(ii) <strong>Verify VIN.</strong> The vehicle could have been purchased/transferred and not registered yet."
                ]
              },
              {
                index: "<i class=\"bi bi-link-45deg\"></i>",
                href: "#li-3.0.1",
                main: "Stolen Vehicle (High-Risk)"
              },
              { index: "4", main: "Approach and inform driver of body cam and reason for stop." },
              { index: "5", main: "Request license, registration, and insurance." },
              { index: "6", main: "Run driver&apos;s name through DOL and NCIC." },
              { index: "7", main: "Issue a Sector Citation or Warning as appropriate.", subSections: [
                "(a) If citation is criminal, add case# to SECTOR. "
              ] }
            ],
            link: "",
            offense: "Traffic Infraction / Criminal Offense (if applicable)",
            elementsOfPC: [
              "Observed traffic violation or suspicious activity",
              "Vehicle registration check",
              "Driver identification and verification",
              "Suspicious behavior during stop"
            ],
            questions: [
              "What prompted the stop?",
              "Was the vehicle&apos;s plate run prior to the stop?",
              "Did the driver provide valid documentation?",
              "Were there any signs of impairment or suspicious behavior?",
              "Was backup needed for safety?"
            ],
            relatedCodes: [
              "RCW 46.20.342 Driving While Suspended",
              "RCW 46.61.400 Speeding",
              "RCW 46.61.688 Seat Belt Use"
            ],
            relatedProcedures: [
              "Code4",
              "HighRiskStop"
            ]
          },          
          {
            id: "3.0.8",
            title: "Traffic Collision",
            description: "Steps for ensuring safety and collecting information at a traffic accident scene.",
            definition: [
              { index: "1", main: "Scene Safety: Divert traffic",
                subSections: [
                  "Flares & Cones",
                  "Additional Units",
                  "<strong>Clear Roadway</strong>",
                  "Request Tow"
                ]
               },
               
               { index: "2", main: "Provide Aid: Fire or First Aid"
                },
                {
                  index: "3", main: "Exchange of Info",
                  subSections: [
                    "<strong>Run Names & Plates</strong> ",
                    "Get <strong>Phone numbers</strong>, ID&apos;s, Registration, Insurance of parties involved.",
                    "Photograph Injuries and Damage"
                  ]
                },
                {
                  index: "<i class=\"bi bi-info-circle-fill text-primary fs-4\"></i>",
                  main: "<span class=\"text-primary\">Spillman face page only if felony related crime. Else handle in Sector.</span>"
                },
              { index: "4", main: "At Fault Party",
                subSections:[
                  "Case number",
                  "Interview involved parties.",
                  "Check Safe City Cameras",
                  "Citation if PC is found."
                ]
               }
            ],
            link: "",
            offense: "",
            elementsOfPC: [],
            questions: [],
            relatedCodes: [],
            relatedProcedures: []
          },
          {
            id: "3.0.9",
            title: "Blocking Disabled",
            description: "Steps for towing a vehicle.",
            definition: [
              { index: "1", main: "Secure Scene", subSections: [
                "(a) Check roadway and nearby for injured parties.",
                "(b) Match VIN to Veh and confirm not Stolen."
              ] },
              { index: "2", main: "Attempt to contact RO.", subSections: [
                "(a) Provide reasonable time for RO to pickup vehicle.",
                "(b) Optionally visit RO&apos;s home if local."
              ] },
              { index: "3", main: "Impound Vehicle", subSections: [
                "(a) Call tow company if parked illegally or abandoned.",
                "(b) Complete tow form for Towing company."
              ] }
            ],
            link: "",
            offense: "",
            elementsOfPC: [],
            questions: [],
            relatedCodes: [],
            relatedProcedures: []
          }
          
        ]
      },
      
      {
        id: "4.0",
        title: "Welfare Checks",
        description: "Procedures for handling mental health incidents requiring assessment.",
        items: [
          {
            id: "4.0.1",
            title: "Welfare Check",
            description: "Guidelines for helping someone in a mental or physical crisis.",
            definition: [
              
              {index: "1", main: "Gather Information: Collect as much relevant information as possible."},
              {index: "2", main: "Approach and Announce: Make a safe and appropriate approach to the location."},
              { index: "3", main: "Observe Scene: Forced entry, vehicle present, noises from inside." },
              { index: "4", main: "Assess for Immediate Threats or Emergencies", subSections: [
                "Make Entry: Reasonable belief that there is imminent danger. E.g. Unresponsive, Visible injury, sound of distress"
              ] },
              { index: "5", main: "Assess Mental and Physical State", subSections: ["Stage or request fire", "Ask basic questions."] },
              { index: "6", main: "Transport or Contact Care Taker." }
            ],
            link: "",
            offense: "",
            elementsOfPC: [],
            questions: [],
            relatedCodes: [],
            relatedProcedures: []
          },
          {
            id: "4.0.2",
            title: "Suicidal Subject (High-Risk)",
            description: "Responding to suicidal ideation or threats become more dangerous when weapons are involved.",
            definition: [
              { index: "1", main: "<strong>PRE CONTACT</strong> Scene security",
                subSections: [
                  "(a) History of CAUTIONS, Warrants, Trespasses",
                  "(b) History at location"
                ]
               },
               { index: "2", main: "<strong>Staging</strong>: Containment",
                subSections: [
                  "(a) Isolate suspect",
                  "(b) Stage Fire",
                  "(c) Clear building or area"
                ]
              },
              { index: "3", main: "<strong>Teams</strong>: Incident Commander, Communication, Arrest, Cover." },
              { index: "4", main: "Identify access or approach." },
              { index: "5", main: "Secure suspect and area", 
                subSections: [
                  "(a) Contact: PA or by phone or behind cover",
                  "(b) Call to the known",
                  "(c) LESS LETHAL for non-compliant.",
                  "(d) Detain for investiagtion",
                  "(e) CODE-4 for Fire",
                ]
               },
              
              { index: "6", main: "<strong>Investigation</strong>: ",
                subSections: [
                  "(a) Identify the individual (name, DOB).",
                  "(b) Evaluate for ITA (danger to self, others, property, or gravely disabled). Focusing on intent, plan, means, and timeframe.",
                  "(c) Invol Form"
                ]
               }

            ],
            link: "",
            offense: "",
            elementsOfPC: [],
            questions: [
              "Do you have a plan to harm yourself?" ,
              "Do you have access to the means you described?",
              "Have you felt this way before or taken steps toward harming yourself in the past?"
            ],
            relatedCodes: [],
            relatedProcedures: [
            ]
          },
          {
            id: "4.0.3",
            title: "Suicidal Subject",
            description: "Responding to suicidal ideation or threats. (<b>In Residence</b>)",
            definition: [
              { index: "1", main: "Ensure backup is on the way; Approach the residence cautiously" },
              { index: "2", main: "Attempt contact through door or windows; introduce yourself calmly and state your purpose for being there." },
              { index: "3", main: "Build rapport. Use <i>Seems like...</i> and <i>Sounds like...</i>." },
              { index: "4", main: "Gather information about potential weapons or dangerous items in the subject&apos;s possession or nearby." },
              { index: "5", main: "Evaluate for ITA (danger to self, others, or gravely disabled)." },
              { index: "6", main: "If entry is necessary, communicate with subject for consent or consider exigent circumstances if immediate safety is at risk." },
              { index: "7", main: "Follow up, Inform, Document, Recorded Statements" }
            ],
            link: "",
            offense: "",
            elementsOfPC: [],
            questions: [
             "Do you feel safe inside your home right now?",
             "Do you have access to anything that could hurt you or others?",
             "Is there anything you&apos;d like to share that might help us understand how you&apos;re feeling?"
            ],
            relatedCodes: [],
            relatedProcedures: [
            ]
          },
          {
            id: "4.0.4",
            title: "ITA (Invol)",
            description: "Handling situations involving emergency detention under ITA criteria.",
            definition: [
              {
                index: "1",
                main: "<strong>Safety:</strong> Secure subject and scene.",
                subSections: [
                  "(a) Observe area for weapons.",
                  "(b) (If applicable) Frisk subject.",
                  "(c) If High-Risk, isolate subject and start IC procedures."
                ]
              },
              {
                index: "2",
                main: "<strong>Evaluation:</strong> Evaluate ITA criteria",
                subSections: [
                  "(a) Danger to self.",
                  "(b) Danger to others.",
                  "(c) Danger to property.",
                  "(d) Gravely disabled (unable to care for self)."
                ]
              },
              {
                index: "<i class=\"bi bi-info-circle-fill text-primary fs-4\"></i>",
                main: "<span class=\"text-primary\">If <strong>criteria</strong> is met ask them <strong>HOW</strong> they plan on harming self or others.</span>"
              },
              {
                index: "3",
                main: "<strong>Juveniles:</strong> Things to know",
                subSections: [
                  "(a) Attempt to contact parent or guardian.",
                  "(b) For ages 13+ you can ITA. <strong>Note:</strong> Can tell parent/guardian that we put 12 hour hold on subject. Up to medical facility on when a parent/guardian can be with child.",
                  "(c) For ages 12- <span class=\"text-danger\">Typically not done unless exigency exists. Tri-Med will also decline if requested to transport without exigency.</span>"
                ]
              },
              {
                index: "4",
                main: "Transporting",
                subSections: [
                  "Next available transport (Tri-Med) will transport to St. Francis Hospital",
                  "Self-Transport: Will need to call Hospital ahead of time and inform them of the invol."
                ]
              },
              {
                index: "<i class=\"bi bi-info-circle-fill text-primary fs-4\"></i>",
                main: "<span class=\"text-primary\"><strong>Complete FW ITA Form</strong></span>",
                subSections: [
                  "<span class=\"text-primary\">Required only on Involuntary Committal.</span>",
                  "<span class=\"text-primary\">This form needs to be completed and given to medical facility or transport.</span>",
                  "<span class=\"text-primary\">Be sure to articulate the PC for the invol on the form.</span>"
                ]
              },
            ],
            link: "https://app.leg.wa.gov/RCW/default.aspx?cite=71.05.153",
            offense: "Emergency Detention Procedure",
            elementsOfPC: [
              "Danger to self",
                  "Danger to others",
                  "Danger to property",
                  "Gravely disabled"
            ],
            questions: [
              "Does individual pose risk of serious harm?",
              "Is individual gravely disabled?",
              "What behaviors/statements indicate an emergency detention?",
              "Do they have a plan for how they will harm self or others?"
            ],
            relatedCodes: [
              "RCW 71.34.710 ITA for minors"
            ],
            relatedProcedures: [
              "Document behaviors justifying detention.",
              "Transport the individual to an appropriate facility.",
              "Ensure communication with DCR or facility staff regarding the case.",
              "Assist with veterans health referrals if applicable."
            ]
          }
          
          
        ]
      },
      
      {
        id: "5.0",
        title: "Burglary & Alarms",
        description: "Guidelines for investigating burglary incidents.",
        items: [
          {
            id: "5.0.1",
            title: "Burglary",
            description: "Enroute Considerations: Confirm details, Suspect descriptions, Witness details, Prior call history. <br /><b>NOTE:</b> Entry into a homes: Welfare checks, Hot Pursuits, Exigency.",
            definition: [
              {
                index: "1",
                main: "<strong>PRE CONTACT</strong>: NOTE Time Delay",
                subSections: [
                  "(a) Location History",
                  "(b) Number if suspects and description (OR DESC OF VICTIM).",
                  "(c) Key Holder for access",
                  "<b class=\"text-danger\">EXIGENCY IF RP IS IN IMMEDIATE DANGER</b>",
                ]
              },
              {
                index: "2",
                main: "<strong>Staging</strong>: Containment",
                subSections: [
                  "(a) Establish perimeters to prevent escape.",
                  "(b) Coordinate backup units for crossfire avoidance.",
                  "(c) Request additional resources (K9, Guardian One)."
                ]
              },
              { index: "3", main: "Approaching. Stage if necessary.", 
                subSections: [
                  "Look for suspicious vehicles.",
                  "Look for forced entry.",
                  "Clear each room"
                ]
               },
               
              { index: "8", main: "Investigate",
                subSections: [
                  "Gather statements from witnesses or victims.",
                  "Photograph evidence",
                  "List of stolen or damaged",
                  "Security footage"
                ]
                }

            ],
            link: "",
            offense: "",
            elementsOfPC: [
    "Unlawful entry into a structure.",
    "Intent to commit a crime therein."
  ],
            questions: [
    "Did you see anyone entering or leaving the property?",
    "Were any vehicles involved, and can you describe them?",
    "What was the last known secure condition of the property?",
    "Is there video surveillance that can be accessed?"
  ],
            relatedCodes: [
    "RCW 9A.52.020: Burglary 1st Degree",
    "RCW 9A.52.025: Residential Burglary",
    "RCW 9A.52.030: Burglary 2nd Degree"
  ],
  relatedProcedures: [
  ]
          }
        ]
      },
      
      {
        id: "6.0",
        title: "DOA",
        description: "Procedures for handling a scene involving a deceased individual.",
        items: [
          {
            id: "6.0.1", 
            title: "DOA Scene Management", 
            description: "Quick steps for managing and documenting a DOA (Dead on Arrival) scene.",
            definition: [
              { index: "1", main: "Observe area suggesting non-natural causes. ", 
                subSections: [ 
                  "(a) Living condition",
                  "(b) Signs of struggle or mistreatment",
                  "(c) Injuries on body"                  
                ]
              },
              { index: "2", main: "Contact family if needed.", subSections: [
                "(a) Contact Chaplain if necessary",
                "(b) Familyor Caregiver will need NJA # for Funeral Home.",
                "(c) If nobody can be contacted the Medical Examiner will pickup body."
              ]
            },
              { index: "3", main: "Gather Medical Examiner required info. ", 
                subSections: [ 
                  "(a) Location",
                  "(b) Caregiver (Name, DOB, Contact Number)",
                  "(c) Deceased (Name, DOB, Contact Number)", 
                  "(d) Medications (Take photos)", 
                  "(e) Primary Doctor (Find on perscription labels)"
                ]
              },
              { index: "4", main: "Notify Supervisor if Suspicious Circumstances.",
                subSections: [
                  "(a) Do this before calling the Medical Examiner. CIS may need to come out and that&apos;s the supervisors call.",
                  "(b) Scene now needs to be secured to protect evidence."
                ]
               },

              { index: "5", main: "Call Medical Examiner; Get NJA #",
                subSections: [ 
                  "(a) Your investigation helps ME determine cause of death. Natural or Suspicious."
                  
                ]
              },
              { index: "6", main: "Get funeral Home Name and ETA." },
              
              { index: "7", main: "Spillman 10 Line Required ",
                subSections: [
                  "Nature: Mis-Non-Crim",
                  "Offence: DCSD",
                  "Clearance: Case Closed - No Crime",
                  "Disposition: Closed"
                ]
               }
            ],
            link: "", 
            offense: "",
            elementsOfPC: [], 
            questions: [
              "Who are the caregiver and deceased?",
              "What medications are present?",
              "Who is the doctor and their contact info?",
              "Are there signs of foul play?",
              "Has the ME provided an NJA number?"
            ], 
            relatedCodes: [], 
            relatedProcedures: [
              "Document all ME-required details.",
              "Contact ME; determine natural or suspicious death.",
              "Secure the scene for suspicious circumstances.",
              "Notify supervisor if needed.",
              "Record NJA number for funeral home transfer."
            ] 
            

          }
          
        ]
      },
      {
        id: "7.0",
        title: "Arrest & Transporting",
        description: "Procedures for handling arrests and transporting people.",
        items: [
          {
            id: "7.0.1",
            title: "Arresting",
            description: "Steps for arresting after confirming probable cause.",
            definition: [
              { index: "1", main: "Verify Identity of Suspect. ID or DOL Lookup" },
              { index: "2", main: "Confirm Warrants" },
              { index: "3", main: "Detain, Frisk, Double Lock and check for fit." },
              { index: "4", main: "Notify Dispatch 1 in Custody." },
              { index: "5", main: "Search before placing in vehicle. <br /> <b>Note:</b> If taking suspect from another officer perform your own search." },
              { index: "6", main: "Miranda rights" },
              { index: "7", main: "Secure evidence and personal items." },
              { index: "8", main: "Leving the Scene: Tow vehicles if left behind." }
              
            ],
            link: "",
            offense: "",
            elementsOfPC: [],
            questions: [],
            relatedCodes: [],
            relatedProcedures: []
          },
          {
            id: "7.0.2",
            title: "Booking",
            description: "Steps for Transporting suspects.",
            definition: [
              
              { index: "1", main: "Secure personal items and <strong>COPY OF CITATION</strong>",
                subSections: [
                  "(A) Weapons & Drugs are not bookable."
                ]
              },
              { index: "2", main: "<strong>Booking</strong>: Misdimeanors: Kent, or Score (call ahead)",
                subSections: [
                  "(a) SCORE: Has a cell with a phone in it for <i>compliant</i> subjects.",
                  "(i) There are no hard and fast rules about subjects getting a phone call.",
                  "(ii) SCORE: People can bail out before seeing a judge with a promise to appear."
                ]
               },
              { index: "3", main: "<strong>Booking</strong>: Felonies: King County Seattle (Super Form)" },
              { index: "4", main: "<strong>Booking</strong>: Juveniles: RJC (Super Form)" },
              { index: "5", main: "Notify Dispatch of Transport or Update CAD." },
              { index: "6", main: "Firearms & weapons must be removed before entering booking area." },
              { index: "7", main: "BWC must turned off before entering booking area." }
            ],
            link: "",
            offense: "",
            elementsOfPC: [],
            questions: [],
            relatedCodes: [],
            relatedProcedures: []
          }
        ]
      },
      {
        id: "8.0",
        title: "Robbery & Thefts",
        description: "Procedures for handling robberies and thefts.",
        items: [
          {
            id: "8.0.1",
            title: "Retail Theft",
            description: "Retail theft businesses usually have their own process for trespassing and prosecuting. If the business (like walmart) doesn&apos;t have a hard ID to identify a suspect they&apos;ve detained, they will call us to do it. ",
            definition: [
              { index: "1", main: "Run name of Suspect through DOL" },
              { index: "2", main: "Check for Warrants" },
              { index: "3", main: "Complete Suspect Identification Form" },
              { index: "4", main: "Complete Trespass Form" }
              
            ],
            link: "",
            offense: "",
            elementsOfPC: [],
            questions: [],
            relatedCodes: [],
            relatedProcedures: []
          },
          {
            id: "8.0.2",
            title: "Robbery",
            description: "Procedures for responding to and investigating robbery incidents.",
            definition: [
              {
                index: "1",
                main: "Pre-Arrival:",
                subSections: [
                  "(a) Request backup.",
                  "(b) Suspect Description, Weapons, and Direction of Travel.",
                  "(c) Plan safe approach.",
                  "(i) Perimeter Setup"
                ]
              },
              {
                index: "2",
                main: "Establish PC:",
                subSections: [
                  "(a) Secure Scene.",
                  "(b) Locate victims, witnesses, and suspects.",
                  "(c) Broadcast suspect information, vehicle description, and last known Direction of Travel."
                ]
              },
              {
                index: "3",
                main: "Investigation:",
                subSections: [
                  "(a) Obtain statements.",
                  "(b) Collect and preserve physical evidence (e.g., fingerprints, surveillance footage, shell casings).",
                  "(c) Check Cameras and request footage."
                ]
              },
              {
                index: "4",
                main: "Suspect Apprehension (if applicable):",
                subSections: [
                  "(a) Ensure probable cause exists for arrest.",
                  "(b) Safe City BOLO."
                ]
              }
            ],
            link: "https://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.200",
            offense: "Felony",
            elementsOfPC: [
              "Theft of property or money.",
              "Use or threat of force against a person.",
              "Intent to permanently deprive the victim of property."
            ],
            questions: [
              "What was taken?",
              "Did the suspect display or imply a weapon?",
              "Were there any injuries?",
              "Can you describe the suspect and vehicle?",
              "Which direction did the suspect flee?"
            ],
            relatedCodes: [
              "RCW 9A.56.200 Robbery 1st Degree",
              "RCW 9A.56.210 Robbery 2nd Degree",
              "RCW 9A.36.011 Assault 1st Degree",
              "RCW 9A.36.021 Assault 2nd Degree"
            ],
            relatedProcedures: [
              "Perimeter setup",
              "Request Resources  (K9, SWAT, Guardian 1)"
            ]
          }
        ]
      },
      {
        id: "9.0",
        title: "Sus Subjects",
        description: "Guidelines for suspicious subjects.",
        items: [
          {
            id: "9.0.1",
            title: "Move Along & Tresspass",
            description: "Business owners will often times find transients on property and want them gone.",
            definition: [
              { index: "1", main: "<strong>PRE CONTACT</strong>: Is subject frequent visitor or known in the area?",
                subSections: [
                  "(a) History of CAUTIONS, Warrants, Trespasses"
                ]
               },
               { index: "2", main: "<strong>Key Holder</strong>: Confirm the key holder wants to tresspass.",
                subSections: [
                  "(a) Loss Prevention Officers (LPO): Larger businesses will call us WHEN they need help identifying someone.",
                  "(i) IF Verify ID only: Complete a Suspect ID Form (case number) and facepage.",
                  "(ii) IF Assist with ID/Apprehension + Warrant: Complete  Warrant Arrest Report (facepage). OSA/FW Warrant: Facepage only. Out-of-state warrants (fugitives): Felony filing required; full report needed.",
                  "(iii) IF Significant Investigation: Interview suspects, issue citations, take statements, obtain video, and total stolen items. Complete case immediately."
                ]
                },
              { index: "3", main: "<strong>Contact Subject</strong>: Identify the individual (name, DOB)." },
              { index: "4", main: "<strong>Issue Trespass Warning/Arrest</strong>: Verify if they are already trespassed from the location.",
                subSections: [
                  "(a) <strong>Warning</strong>: Advise the subject they must leave the property. Issue tresspass document if time permits.",
                  "(b) <strong>Arrest</strong>: Arrest subject and issue citation if already trespassed. "
                ]
               },
               {
                index: "<i class=\"bi bi-info-circle-fill text-info fs-4\"></i>",
                main: "<span class=\"text-info\">Case #, A case # is taken when suspect has been identifed. Provide to business.</span>"
              },
              { index: "5", main: "If non-compliant, Criminal Trespass and take enforcement action if necessary." },
              { index: "6", main: "Gather names and business details for report." }
              
            ],
            link: "",
            offense: "",
            elementsOfPC: [],
            questions: [
              "Do you have any identification on you?",
              "What brings you to this property today?",
              "Are you aware that this is private property?",
              "Have you been told to leave or trespassed from here before?",
              "Do you have somewhere else you can go right now?"
            ],
            relatedCodes: [],
            relatedProcedures: [
            ]
          },
          {
            id: "9.0.2", // Unique identifier for the call type
            title: "Sex Offender", // Title of the call type
            description: "Guidelines for interacting with sex offenders.", // Brief description
            definition: [
              {
                index: "1",
                main: "Initial Contact:",
                subSections: [
                  "Confirm identity.",
                  "Check for confirmed warrant.",
                  "Document interaction as a social stop unless separate violation exist."
                ]
              },
              {
                index: "2",
                main: "Questions to Ask (If Unregistered):",
                subSections: [
                  "Where are you currently staying?",
                  "How long have you been residing at this location?",
                  "Are there other places you frequent or stay overnight?"
                ]
              },
              {
                index: "3",
                main: "Documentation and Reporting:",
                subSections: [
                  "Complete a Field Interview (FI) report with the provided information.",
                  "Email the collected data to CIS for follow-up.",
                  "Ensure any evidence of non-compliance is properly documented."
                ]
              },
              {
                index: "4",
                main: "Traffic Stops:",
                subSections: [
                  "Do not initiate a traffic stop solely based on sex offender registration status.",
                  "Traffic infractions must be legitimate and not used as pretext."
                ]
              }
            ],
            link: "",
            offense: "",
            elementsOfPC: [
              "Clear evidence of unregistered status.",
              "Failure to provide an updated address or living arrangements when required."
            ], // Required elements for probable cause
            questions: [
              "Where are you currently residing?",
              "How long have you been staying at this address?",
              "Do you have a registered address on file?"
            ], // Key questions for investigation
            relatedCodes: [
              "RCW 9A.44.130 Registration of Sex Offenders",
              "RCW 9A.44.132 Failure to Register as a Sex Offender"
            ], // Related RCWs
            relatedProcedures: [
              "Submitting FI reports and notifying CIS.",
              "Documenting non-compliance without pretextual stops."
            ] // Related procedures
          }          
        ]
      },
      {
        id: "10.0",
        title: "Sus Circumstances",
        description: "Guidelines for suspicious circumstances.",
        items: [
          {
            id: "10.0.1", // Unique identifier for the call type
            title: "Drive By Shooting", // Title of the call type
            description: "Steps for responding to and investigating a drive-by shooting incident.", // Brief description
            definition: [
              {
                index: "1",
                main: "Scene Safety:",
                subSections: [
                  "Secure the scene.",
                  "Identify ongoing threats.",
                  "Stage resources"
                ]
              },
              {
                index: "2",
                main: "Render Aid:",
                subSections: [
                  "Identify victims and witnesses.",
                  "Provide aid until EMS arrives.",
                  "Air suspect vehicle description and direction of travel."
                ]
              },
              {
                index: "3",
                main: "Evidence:",
                subSections: [
                  "Protect scene/evidence.",
                  "Identify and mark shell casings, bullet holes, property damage.",
                  "Photograph the scene.",
                  "Document vehicle tire tracks, debris, or other relevant details."
                ]
              },
              {
                index: "4",
                main: "Witness Statements:",
                subSections: [
                  "Interview witnesses for descriptions of suspects and vehicles.",
                  "Document any observed license plates or unique vehicle identifiers.",
                  "Record statements regarding suspect behavior or conversations."
                ]
              },
              {
                index: "5",
                main: "Notification and Coordination:",
                subSections: [
                  "Request OSA help if needed.",
                  "Notify a supervisor and CIS if required.",
                  "Send BOLO info of suspects, vehicles, and occupants."
                ]
              }
            ],
            link: "",
            offense: "Felony", // Classification of the offense
            elementsOfPC: [
              "Suspect fired from a moving vehicle.",
              "Intent to harm or endanger another person."
            ], // Required elements for probable cause
            questions: [
              "Did witnesses see the vehicle&apos;s make, model, or license plate?",
              "Were shots fired toward individuals or structures?",
              "Did you observe any bullet casings, damage, or injuries?",
              "What direction did the vehicle flee?"
            ], // Key questions for investigation
            relatedCodes: [
              "RCW 9A.36.045 Drive-By Shooting",
              "RCW 9.41.040 Unlawful Possession of a Firearm"
            ], // Related RCWs
            relatedProcedures: [
              "Processing shell casings and ballistics evidence.",
              "OSA investigations.",
              "Securing a crime scene."
            ] // Related procedures
          }
        ]
      },  
      {
        id: "11.0",
        title: "CPS & Juvenile",
        description: "Guidelines for investigating referrals child related calls.",
        items: [
          {
            id: "11.0.1",
            title: "CPS Referral Investigation",
            description: "Guidelines for investigating referrals received from Child Protective Services (CPS) regarding potential child abuse, neglect, or endangerment.",
            definition: [
              { index: "1", main: "<strong>Review Referral</strong>: Understand abuse/neglect/endangerment concerns." },
              { index: "2", main: "<strong>Assess Immediate Danger</strong>: Prioritize if child is in immediate risk." },
              { index: "3", main: "<strong>Coordinate with CPS</strong>: Clarify roles, discuss details, and gather relevant history." },
              { index: "4", main: "<strong>Conduct Welfare Check</strong>: Observe home environment, assess child&apos;s physical and emotional condition." },
              { index: "5", main: "<strong>Interview Key Individuals</strong>: Talk to child (if appropriate), caregivers, and any potential witnesses." },
              { index: "6", main: "<strong>Collect Evidence</strong>: Document findings, take photos, note any concerning conditions." },
              { index: "7", main: "<strong>Determine Criminal Action</strong>: Decide if probable cause exists for charges (e.g., abuse, neglect)." },
              { index: "8", main: "<strong>Report Findings</strong>: Record observations, actions, and collaborate findings with CPS." },
              { index: "9", main: "<strong>Follow Up if Needed</strong>: Coordinate further interventions with CPS for child&apos;s safety." }
            ],
            link: "",
            offense: "",
            elementsOfPC: [],
            questions: [
              "What specific concerns or incidents were reported in the CPS referral?",
              "Does the child show any visible signs of abuse, neglect, or trauma?",
              "Are there witnesses, such as teachers or neighbors, who can provide relevant information?"
            ],
            relatedCodes: [],
            relatedProcedures: [
            ]
          },
          {
            id: "11.0.2",
            title: "Juvenile Runaway",
            description: "Guidelines for investigating a juvenile runaway.",
            definition: [
              { index: "1", main: "<strong>Missing Person</strong>: Determine if the juvenile is a <strong>Missing Person</strong>. Requires Missing Person Form.", subSections: [
                "(a) Yu can take a juvenile into Protective Custody but it cannot be with force."
              ] },
              { index: "2", main: "<strong>Record Entry</strong>: Submit Missing Person Form to records department. Don&apos;t forget photo." },
              { index: "3", main: "<strong>Conduct Welfare Check</strong>: Observe home environment, determine any medical conditions. Autism cases should notify supervisors and perform area checks." },
              { index: "4", main: "<strong>Follow Up if Found</strong>: Check on juvenile in person. Remove from Missing Persons via records department." }
            ],
            link: "",
            offense: "",
            elementsOfPC: [],
            questions: [
              "Where was the child last seen?",
              "Does the child know how to get to friends or family locations?",
              "Do you have a photo copy of the child?"
            ],
            relatedCodes: [],
            relatedProcedures: [
            ]
          }
        ]
      },
      {
        id: "12.0",
        title: "Domestic Violance",
        description: "Guidelines for handling domestic violance.",
        items: [
          {
            id: "12.0.1",
            title: "Physical Domestic",
            description: "Domestic Violance is a lable that can be added to most crimes given the criteria (10.99.020) is met.",
            definition: [
              { index: "1", main: "<strong>PRE CONTACT</strong>: Does subject/address have known history or priors?",
                subSections: [
                  "(a) History of CAUTIONS or ORDER VIOLATIONS",
                  "(b) Separate parties. (Primary on report usually takes victim)"
                ]
               },
               { index: "3", main: "<strong>Secure Scene & Render Aid</strong>: Code-4 scene if fire staged.",
                subSections: [
                  "(a) If victim strangled medical eval required."
                ]
               },
              { index: "3", main: "<strong>Establish PC</strong>: Quickly determine what crime (if any) has happened and air it.",
                subSections: [
                  "(a) DV Label: Blood related, Intimate partners, Household",
                  "(b) MANDATORY ARREST IF:",
                  "(i) Suspect is 18 or older, AND",
                  "(ii) Within past 4 hours, AND",
                  "(iii) Assault with injury, or caused reasonable fear of imminent serious bodily injury or death."
                ]
               },
              { index: "4", main: "<strong>Suspect GOA</strong>: Air Description of Suspect",
                subSections: [
                  "(a) Area Checks",
                  "(b) Set IC and perimeter for K9. (Protect starting point)",
                  "(c) OSA Request",
                  "(d) Major crime: Request Guardian 1"
                ]
               },
              { index: "5", main: "<strong>Investigation</strong>: After scene is secure and assignments set.",
                subSections: [
                  "(a) DV Supplemental Form",
                  "(b) DV Strangalation Form",
                  "(c) Medical Waiver signed (Voluntary)",
                  "(d) Recorded Statements (Voluntary)",
                  "(e) Smith Affidavit (Voluntary)",
                  "(f) Dangerous Weapons in Plain View",
                  "(g) Criminal History Check (III)"
                ]
               }
            ],
            link: "https://app.leg.wa.gov/rcw/default.aspx?cite=10.99.020",
            offense: "",
            elementsOfPC: [
              "18 or older",
              "Within past 4 Hours",
              "Assault 4 or Higher"
            ],
            questions: [
            ],
            relatedCodes: [],
            relatedProcedures: [
            ]
          }
          
        ]
      },
      {
        id: "13.0",
        title: "Incident Command",
        description: "Guidelines for joining an incident command team.",
        items: [
          {
            id: "13.0.1",
            title: "Incident Command Areas",
            description: "C2 architecture is the temporary, ad hoc organizational structure of response personnel, showing their tasks.  ",
            definition: [
              { index: "1", main: "<strong>Incident Commander</strong>: Must be on scene." },
              { index: "2", main: "<strong>Staging Manager</strong>: Prioritizes location of staging." },
              { index: "3", main: "<strong>Outer Parimeter</strong>: The One-Two Corner: Officers 1 & 2, The Three-Four Corner: Offiers 3 & 4" },
              { index: "4", main: "<strong>Investigation Team</strong>: Witness Statements, Warrant Officer" },
              { index: "5", main: "<strong>Arrest Team</strong>: Inner Containment, Officers 7,8,9" },
              { index: "6", main: "<strong>Communications Team</strong>: Officer 10" },
              { index: "7", main: "<strong>City Supervisor</strong>: Watches the rest of the city." }
            ],
            link: "",
            offense: "",
            elementsOfPC: [],
            questions: [
            ],
            relatedCodes: [],
            relatedProcedures: [
            ]
          },
          {
            id: "13.0.2",
            title: "K9 Calls",
            description: "Working with K9 officers requires some key details and responsibilities from you to keep them safe.",
            definition: [
              {
                index: "1",
                main: "<strong>K9 Announcements:</strong> Log in CAD every 5 mins.",
                subSections: [
                  "(a) Attention in the area, this is the Federal Way Police Department.",
                  "(b) Suspects [names], you are under arrest. ",
                  "(c) This area is being searched by a police dog.",
                  "(d) Surrender now or the dog may find you and bite you.",
                  "(e) Citizens, please stay inside your homes."
                ]
              },
              {
                index: "2",
                main: "<strong>K9 Tracking</strong>",
                subSections: [
                  "(a) Details soon."
                ]
              }
              
            ],
            link: "#",
            offense: "Felony",
            elementsOfPC: [],
            questions: [
              "Are you in a position where you can spot subjects?",
              "Do you have a description of the suspect?",
              "Do you know your navigational heading?",
              "Do you know your location for call out?"
            ],
            relatedCodes: [],
            relatedProcedures: []
          }
        ]
      },
      {
        id: "14.0",
        title: "Extra Duty",
        description: "Out Car types refer to Out of Service duties. Everything from Lunch to Off-Duty Work",
        items: [
          {
            id: "14.0.1",
            title: "Off Duty - Transit Center",
            description: "Transit Center ",
            definition: [
              { index: "1", main: "<strong>Check In</strong>: Say hi to security so they know who you are and where you&apos;re at." },
              { index: "2", main: "<strong>Know Bus Policy</strong>: Todo: Provide reference to important bus related protocols." }
              
            ],
            link: "",
            offense: "",
            elementsOfPC: [],
            questions: [
            ],
            relatedCodes: [],
            relatedProcedures: [
            ]
          },
          {
            id: "14.0.2", // Unique identifier for the call type
            title: "Walmart Security", // Title of the call type
            description: "Procedures for extra duty security assignments at Walmart.", // Brief description
            definition: [
              { index: "1", main: "Pre-Shift: Check in with LPO." },
              {
                index: "2",
                main: "General Duties:",
                subSections: [
                  "Maintain visible presence.",
                  "Assist LPO&apos;s with detaining shoplifters.",
                  "Monitor entrances."
                ]
              },
              {
                index: "3",
                main: "Shoplifters: ",
                subSections: [
                  "LP must witness the theft and initiate apprehension.",
                  "Verify Suspect ID and use Suspect ID Form.",
                  "If Assist with ID/Apprehension or Warrant: FACEPAGE.",
                  "If you Investigate/Cite/Obtain Evidence: FULL REPORT."
                ]
              },
              {
                index: "<i class=\"bi bi-link-45deg\"></i>",
                href: "#li-10.0.1",
                main: "Move Along & Tresspass"
              },
              {
                index: "5",
                main: "Dealing with Disorderly Conduct:",
                subSections: [
                  "De-escalate if possible.",
                  "Remove individuals refusing to comply."
                ]
              },
              {
                index: "6",
                main: "End of Shift Responsibilities:",
                subSections: [
                  "Check out with Walmart management.",
                  "Complete required reports."
                ]
              }
            ],
            link: "", // No specific link, but can be added if needed
            offense: "Misdemeanor", // Possible offenses encountered
            elementsOfPC: [
              "Observed shoplifting by LP or officer.",
              "Subject violating a trespass warning.",
              "Disorderly conduct causing public alarm or disturbance."
            ], // Required elements for probable cause
            questions: [
              "Did LP witness the theft and detain the suspect?",
              "Has this subject been trespassed before?",
              "Is the subject refusing to leave after being asked?",
              "What actions did the subject take to create a disturbance?",
              "Were any crimes committed requiring arrest?"
            ], // Key questions for investigation
            relatedCodes: [
              "RCW 9A.56.050 Theft in the Third Degree",
              "FWRC 6.35.020 Menacing",
              "FWRC 6.35.070 Trespassing"
            ], // Related ordinances and RCWs
            relatedProcedures: [
              "Shoplifting response and arrests.",
              "Trespass warning issuance and enforcement.",
              "Handling disorderly conduct within private businesses."
            ] // Related procedures
          }
          
        ]
      }
      
      
      
      
      
      
      
    ]
};

