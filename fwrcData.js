const fwrcData = {
    version: "1.0",
    type: "fwrc",
    chapters: [
       
        {
            id: "6.10",
            title: "Drugs & Alcohol",
            description: "General rules related to drugs, alcohol, and poisons",
            items: [
                {
                    id: "6.10.020", // Unique identifier for the FWRC
                    title: "Furnishing Liquor to Minors", // Title of the FWRC
                    description: "Prohibits selling, supplying, or permitting the consumption of liquor by minors, with specific exceptions for parental supervision, medicinal purposes, and religious services.",
                    definition: [
                      {
                        index: "1",
                        main: "It is unlawful for any person to sell, give, or otherwise supply liquor to any person under the age of 21 years or permit any person under that age to consume liquor on their premises or premises under their control. &apos;Premises&apos; includes real property, houses, buildings, structures, motor vehicles, and watercraft. A violation is a gross misdemeanor punishable under Chapter 9A.20 RCW."
                      },
                      {
                        index: "2",
                        main: "Possession and Consumption by Minors:",
                        subSections: [
                          "(a) It is unlawful for a person under the age of 21 years to possess, consume, or otherwise acquire liquor. A violation is a gross misdemeanor punishable under Chapter 9A.20 RCW.",
                          "(b) It is unlawful for a person under the age of 21 years to be in a public place or motor vehicle in a public place while exhibiting the effects of having consumed liquor, defined as having the odor of liquor on their breath and either:",
                          "(i) Being in possession of or close proximity to a container that has or recently had liquor in it; or",
                          "(ii) Exhibiting signs of intoxication through speech, appearance, behavior, or lack of coordination. This does not apply if the person is with a parent or guardian or under circumstances described in subsections (4) or (5)."
                        ]
                      },
                      {
                        index: "3",
                        main: "Parental Supervision Exception:",
                        subSections: [
                          "Liquor given or permitted by a parent or guardian and consumed in their presence is not a violation. This does not apply on premises licensed under Chapter 66.24 RCW."
                        ]
                      },
                      {
                        index: "4",
                        main: "Medicinal Use Exception:",
                        subSections: [
                          "Liquor given for medicinal purposes by a parent, guardian, physician, or dentist is not a violation."
                        ]
                      },
                      {
                        index: "5",
                        main: "Religious Services Exception:",
                        subSections: [
                          "Liquor given during religious services in the minimal amount necessary for the service is not a violation."
                        ]
                      },
                      {
                        index: "6",
                        main: "Licensing Impact:",
                        subSections: [
                          "Conviction or bail forfeiture for a violation by a minor does not disqualify them from acquiring a liquor license after reaching the age of 21."
                        ]
                      }
                    ],
                    link: "https://www.codepublishing.com/WA/FederalWay/#!/FederalWay06/FederalWay0610.html#6.10.020", // No direct link available
                    offense: "Gross Misdemeanor", // Main offense classification
                    elementsOfPC: [
                      "Furnishing liquor to a person under 21 years old",
                      "Possession, consumption, or intoxication in public by a minor",
                      "Violation occurs outside of lawful exceptions"
                    ], // Required elements for probable cause
                    questions: [
                      "Was liquor furnished or consumed by a minor?",
                      "Was the act in a public place or on licensed premises?",
                      "Was the minor exhibiting signs of intoxication?",
                      "Does the suspect meet any of the listed exceptions?",
                      "Were there witnesses to the furnishing or consumption?"
                    ], // Key questions for investigation
                    relatedCodes: [
                      "66.44.270 RCW Furnishing liquor to minors",
                      "9A.36.150 RCW Interfering with the reporting of domestic violence",
                      "6.35.020 FWRC Menacing"
                    ], // Related RCWs and FWRCs for cross-reference
                    relatedProcedures: [
                    ] // Related procedures
                  },


                  {
                    id: "6.10.090", // Unique identifier for the FWRC
                    title: "Drug-Related Loitering", // Title of the FWRC
                    description: "Prohibits loitering in public or private areas with intent to engage in drug-related activities in violation of RCW chapters 69.41, 69.50, or 69.52.",
                    definition: [
                      {
                        index: "1",
                        main: "It is unlawful for any person to loiter in or near any thoroughfare, place open to the public, or near any public or private place in a manner and under circumstances manifesting the intent to engage in drug-related activity contrary to the provisions of Chapter 69.41, 69.50, or 69.52 RCW."
                      },
                      {
                        index: "2",
                        main: "Circumstances considered for intent include:",
                        subSections: [
                          "(a) Person is known to use, possess, or sell illegal drugs, including prior convictions or physical signs such as &apos;needle tracks&apos;",
                          "(b) Suspicious behavior suggesting drug-related activity, such as acting as a &apos;lookout&apos;;",
                          "(c) Person is identified as a member of a gang associated with illegal drug activity;",
                          "(d) Transfers small objects or packages for currency in a furtive manner;",
                          "(e) Takes flight upon the appearance of law enforcement;",
                          "(f) Attempts to conceal themselves or objects potentially involved in drug-related activities;",
                          "(g) Location is known to law enforcement as an area of drug use or trafficking;",
                          "(h) Vehicle involved is registered to a known drug user, possessor, or seller, or to a person with an outstanding drug-related warrant."
                        ]
                      },
                      {
                        index: "3",
                        main: "Drug-related loitering is a misdemeanor."
                      }
                    ],
                    link: "https://www.codepublishing.com/WA/FederalWay/#!/FederalWay06/FederalWay0610.html#6.10.090", // No direct link available
                    offense: "Misdemeanor", // Main offense classification
                    elementsOfPC: [
                      "Loitering in a public or private space",
                      "Intent to engage in drug-related activity",
                      "Behavior consistent with listed suspicious circumstances"
                    ], // Required elements for probable cause
                    questions: [
                      "Was the person loitering in a public or private place?",
                      "What behaviors suggested intent for drug-related activity?",
                      "Does the suspect have prior drug-related convictions?",
                      "Is the area known for drug trafficking or use?",
                      "Did the suspect attempt to flee or conceal objects?"
                    ], // Key questions for investigation
                    relatedCodes: [
                      "69.41 RCW Legend drugs – Prescription drugs",
                      "69.50 RCW Uniform Controlled Substances Act",
                      "69.52 RCW Imitation Controlled Substances",
                      "6.35.020 FWRC Menacing"
                    ], // Related RCWs and FWRCs for cross-reference
                    relatedProcedures: [
                    ] // Related procedures
                  }                  
            ]
        },
        {
            id: "6.15",
            title: "Vehicles",
            description: "Regulations related to vehicle operations and offenses",
            items: [
                {
                    id: "6.15.020",
                    title: "Vehicular Assault",
                    description: "Nonfelony vehicular assault involving the knowing operation of a vehicle and committing an act causing substantial bodily harm or death.",
                    offense: "Gross Misdemeanor",
                    definition: [
                        {
                            index: "1",
                            main: "A person is guilty of vehicular assault, nonfelony, when he or she (a) knowingly operates or knowingly is in actual physical control of a vehicle; and (b) while doing so commits any act defined as an infraction under FWRC Title 8 or RCW Title 46; and (c) such conduct is a proximate cause of death, great bodily harm or substantial bodily harm to another. As used in this section, &apos;great bodily harm&apos; and &apos;substantial bodily harm&apos; have the same meanings as in RCW 9A.04.110 and &apos;vehicle&apos; has the same meaning as in RCW 46.04.670, as those statutes now exist or may hereafter be amended. This section is intended to protect the public welfare. No mens rea element that is not specifically stated in this section shall be inferred or required. Prosecution or punishment under this section shall not preclude separate prosecution or punishment for any other crime."
                        },
                        {
                            index: "2",
                            main: "Any person who violates the provisions of this section is guilty of a gross misdemeanor."
                        }
                    ],
                    elementsOfPC: [],
                    questions: [],
                    relatedRCWs: [
                        "RCW 9A.04.110",
                        "RCW 46.04.670"
                    ],
                    relatedProcedures: [],
                    link: "https://www.codepublishing.com/WA/FederalWay/#!/FederalWay06/FederalWay0615.html#6.15.020"
                },


                {
                    id: "6.15.030",
                    title: "Hit and Run",
                    description: "Requirements for drivers involved in accidents with pedestrians, including provision of information and assistance, with penalties for violations.",
                    offense: "Gross Misdemeanor",
                    definition: [
                        {
                            index: "1",
                            main: "The driver of any vehicle involved in an accident with a pedestrian, whether or not apparent injury occurs, shall immediately stop such vehicle at the scene of such accident or as close thereto as possible but shall then immediately return to, and in every event remain at, the scene of such accident until he or she has fulfilled the requirements of subsection (2) of this section; every such stop shall be made without obstructing traffic more than is necessary. For the purpose of this section, &apos;pedestrian&apos; shall be defined as &apos;any person who is afoot or who is using a wheelchair, a power wheelchair, or a means of conveyance propelled by human power other than a bicycle&apos; as defined under RCW 46.04.400."
                        },
                        {
                            index: "2",
                            main: "Unless otherwise provided in subsections (3) or (4) of this section, the driver of any vehicle involved in an accident with a pedestrian shall give his or her name, address, insurance company, insurance policy number, and vehicle license number and shall exhibit his or her vehicle driver&apos;s license to any person struck or injured and shall render to any person injured in such accident reasonable assistance, including the carrying or the making of arrangements for the carrying of such person to a physician or hospital for medical treatment if it is apparent that such treatment is necessary or if such carrying is requested by the injured person or on his or her behalf. Under no circumstances shall the rendering of assistance or other compliance with the provisions of this subsection be evidence of the liability of any driver for such accident."
                        },
                        {
                            index: "3",
                            main: "If none of the persons specified are in a condition to receive the information to which they otherwise would be entitled under subsection (2) of this section, and no police officer is present, the driver of any vehicle involved in such accident, after fulfilling all other requirements of subsections (1) and (2) of this section insofar as possible, shall immediately report such accident to the nearest office of the duly authorized police authority and submit thereto the information specified in subsection (2) of this section."
                        },
                        {
                            index: "4",
                            main: "This section shall not apply to any person injured or incapacitated by such accident to the extent of being physically incapable of complying with this section."
                        },
                        {
                            index: "5",
                            main: "Any person who violates the provisions of this section is guilty of a gross misdemeanor and, upon conviction, shall be imprisoned for up to one year and be subject to fines of no more than $5,000."
                        }
                    ],
                    elementsOfPC: [],
                    questions: [],
                    relatedRCWs: [],
                    relatedProcedures: [],
                    link: "https://www.codepublishing.com/WA/FederalWay/#!/FederalWay06/FederalWay0615.html#6.15.030"
                }
            ]
        },

        {
            id: "6.17",
            title: "Stunt Driving",
            description: "Rules prohibiting attendance at unlawful race or stunt driving events.",
            items: [
                {
                    id: "6.17.020",
                    title: "Race Attendance",
                    description: "Attendance at an unlawful race event with the intent to observe, support, or encourage the event.",
                    offense: "Misdemeanor",
                    definition: [
                        {
                            index: "1",
                            main: "Any person who has actual or constructive knowledge that he or she is in attendance of an unlawful race event, as defined in this chapter, and is present at the unlawful race event with the intent to observe, support, or encourage the unlawful race event is guilty of a misdemeanor."
                        },
                        {
                            index: "2",
                            main: "The circumstances that may be considered in determining if a violation of subsection (1) of this section has occurred may include, but are not limited to:",
                            subSections: [
                                "(a) The person, by admission, is in attendance of an unlawful race event with the intent to observe or support or encourage the unlawful race event;",
                                "(b) Statements of other persons who are shown to be in attendance of an unlawful race event that provide evidence of intent to observe, support, or encourage an unlawful race event;",
                                "(c) The person either operates or is a passenger in a motor vehicle that shares the attributes of other vehicles that are in attendance of the unlawful race event or that are engaging in or have engaged in an unlawful race;",
                                "(d) The person either operates or is a passenger in a motor vehicle that is driven in such a manner as to show evidence of an attempt to flee or escape detection when a police officer arrives on the scene of an unlawful race event; or",
                                "(e) The person has no reasonable alternative purpose for being in the area where an unlawful race event is occurring or has occurred."
                            ]
                        }
                    ],
                    elementsOfPC: [],
                    questions: [],
                    relatedRCWs: [],
                    relatedProcedures: [],
                    link: "https://www.codepublishing.com/WA/FederalWay/#!/FederalWay06/FederalWay0617.html#6.17.020"
                },
                {
                    id: "6.17.030",
                    title: "Stunt Driving Attendance",
                    description: "Attending an unlawful stunt driving event with the intent to observe, support, or encourage is prohibited.",
                    offense: "Misdemeanor",
                    definition: [
                        {
                            index: "1",
                            main: "Any person who has actual or constructive knowledge that he or she is in attendance of an unlawful stunt driving event, as defined in this chapter, and is present with the intent to observe, support, or encourage the unlawful stunt driving event is guilty of a misdemeanor."
                        },
                        {
                            index: "2",
                            main: "The circumstances that may be considered in determining if a violation of subsection (1) of this section has occurred may include, but are not limited to:",
                            subSections: [
                                "(a) The person, by admission, is in attendance of an unlawful stunt driving event with the intent to observe or support or encourage the unlawful stunt driving event;",
                                "(b) Statements of other persons who are shown to be in attendance of an unlawful stunt driving event that provide evidence of intent to observe or support or encourage an unlawful stunt driving event;",
                                "(c) The person either operates or is a passenger in a motor vehicle that shares the attributes of other vehicles that are in attendance of the unlawful stunt driving event or that are engaging in or have engaged in an unlawful stunt driving event;",
                                "(d) The person either operates or is a passenger in a motor vehicle that is driven in such a manner as to show evidence of an attempt to flee or escape detection when a police officer arrives on the scene of an unlawful stunt driving event; or",
                                "(e) The person has no reasonable alternative purpose for being in the area where the unlawful stunt driving event is occurring or has occurred."
                            ]
                        }
                    ],
                    elementsOfPC: [],
                    questions: [],
                    relatedRCWs: [],
                    relatedProcedures: [],
                    link: "https://www.codepublishing.com/WA/FederalWay/#!/FederalWay06/FederalWay0617.html#6.17.030"
                },
                {
                    id: "6.17.040",
                    title: "Stunt Driving",
                    description: "Operating a motor vehicle in a public place in a manner that constitutes stunt driving is prohibited.",
                    offense: "Gross Misdemeanor",
                    definition: [
                        {
                            index: "1",
                            main: "Any person operating a motor vehicle in a public place in a manner that constitutes stunt driving, as defined by this chapter, is guilty of a gross misdemeanor."
                        }
                    ],
                    elementsOfPC: [],
                    questions: [],
                    relatedRCWs: [],
                    relatedProcedures: [],
                    link: "https://www.codepublishing.com/WA/FederalWay/#!/FederalWay06/FederalWay0617.html#6.17.040"
                }
            ]
        },

        {
            id: "6.20",
            title: "Children & Minors",
            description: "Laws concerning the welfare and safety of children and minors.",
            items: [
                {
                    id: "6.20.020",
                    title: "Delinquency of Minor",
                    description: "Knowingly encouraging, causing, or contributing to the dependency or delinquency of a minor as defined in RCW 13.34.030 is prohibited.",
                    offense: "Misdemeanor",
                    definition: [
                        {
                            index: "1",
                            main: "In all cases when any child is dependent or delinquent as defined in RCW 13.34.030, any person who, by act or omission, knowingly encourages, causes, or contributes to the dependency or delinquency of such child shall be guilty of a misdemeanor."
                        }
                    ],
                    elementsOfPC: [],
                    questions: [],
                    relatedRCWs: [
                        "RCW 13.34.030"
                    ],
                    relatedProcedures: [],
                    link: "https://www.codepublishing.com/WA/FederalWay/#!/FederalWay06/FederalWay0620.html#6.20.020"
                },
                {
                    id: "6.20.030",
                    title: "Unattended Children",
                    description: "Leaving minor children under the age of eight years unattended in a vehicle is prohibited.",
                    offense: "Misdemeanor",
                    definition: [
                        {
                            index: "1",
                            main: "It is unlawful for any person having the care, custody and/or control of minor children under the age of eight years, to leave such children in a parked automobile unattended by a person over the age of 12 years, while such vehicle is standing upon a street or alley or in a public place."
                        },
                        {
                            index: "2",
                            main: "Every person convicted of a violation of the provisions of this section shall be guilty of leaving children unattended, a misdemeanor."
                        }
                    ],
                    elementsOfPC: [],
                    questions: [],
                    relatedRCWs: [],
                    relatedProcedures: [],
                    link: "https://www.codepublishing.com/WA/FederalWay/#!/FederalWay06/FederalWay0620.html#6.20.030"
                }
            ]
        },

        {
            id:"6.35",
            title: "Persons",
            description:"Crimes involving persons.",
            items: [
                {
                    id: "6.35.015", // Unique identifier for the FWRC
                    title: "Reckless Use of Fentanyl", // Title of the FWRC
                    description: "Recklessly combusting or exhaling fentanyl smoke in public or enclosed spaces within proximity to others.",
                    definition: [
                      {
                        index: "1",
                        main: "A person is guilty of reckless use of fentanyl if the person:",
                        subSections: [
                          "(a) Intentionally combusts or exhales the smoke of a substance the person knows or reasonably should know contains, or is contaminated with, fentanyl; and",
                          "(b) The combusted or exhaled substance does, in fact, contain fentanyl as determined by a presumptive drug test, such as a \"NIK\" test, or testing by a lab; and",
                          "(c) Does so while in a public space and within 10 feet of another person, or while inside an enclosed public space with another person."
                        ]
                      },
                      {
                        index: "2",
                        main: "For the purposes of this section, \"public space\" includes, but is not limited to, a public conveyance, park, transit stop, or other place open to the public."
                      },
                      {
                        index: "3",
                        main: "Reckless use of fentanyl is a gross misdemeanor, punishable by up to 364 days in jail, a $5,000 fine, or a combination of both."
                      }
                    ],
                    link: "", // No direct link available
                    offense: "Gross Misdemeanor", // Main offense classification
                    elementsOfPC: [
                      "Intentionally combusts or exhales a substance containing fentanyl",
                      "Knows or reasonably should know the substance contains fentanyl",
                      "Occurs in a public space or enclosed space near another person"
                    ], // Required elements for probable cause
                    questions: [
                      "Was fentanyl confirmed in the substance?",
                      "Did the suspect knowingly combust or exhale fentanyl?",
                      "Did the act occur in a public or enclosed space near others?",
                      "Was a presumptive or lab test conducted?",
                      "Were there witnesses to the incident?"
                    ], // Key questions for investigation
                    relatedCodes: [
                      "69.50.401 RCW Controlled substances—Prohibited acts—Penalties",
                      "69.50.440 RCW Use of a controlled substance in public place",
                      "6.35.020 FWRC Menacing behavior"
                    ], // Related RCWs and FWRCs for cross-reference
                    relatedProcedures: [
                    ] // Related procedures
                  },
                  {
                    id: "6.35.020", // Unique identifier for the FWRC
                    title: "Menacing", // Title of the FWRC
                    description: "Knowingly causing or attempting to cause another to believe they or their family will be victims of serious physical injury or death.",
                    definition: [
                      {
                        index: "1",
                        main: "A person is guilty of menacing when he or she knowingly causes or attempts to cause another person to believe that he or she or any member of his or her family will be the victim of serious physical injury or death."
                      },
                      {
                        index: "2",
                        main: "Menacing is a gross misdemeanor."
                      }
                    ],
                    link: "", // No direct link available
                    offense: "Gross Misdemeanor", // Main offense classification
                    elementsOfPC: [
                      "Knowingly causes or attempts to cause fear of serious injury or death",
                      "Victim or family member is the target of the threat",
                      "Victim believes the threat is credible"
                    ], // Required elements for probable cause
                    questions: [
                      "Did the victim believe they or their family were in danger?",
                      "What actions or words did the suspect use to cause fear?",
                      "Did the suspect knowingly attempt to cause fear?",
                      "Were there any witnesses to the incident?",
                      "Were threats of serious injury or death made directly or implied?"
                    ], // Key questions for investigation
                    relatedCodes: [
                      "9A.46.020 RCW Harassment",
                      "9A.36.041 RCW Assault in the fourth degree",
                      "6.35.015 FWRC Reckless use of fentanyl"
                    ], // Related RCWs and FWRCs for cross-reference
                    relatedProcedures: [
                    ] // Related procedures
                  },
                  {
                    id: "6.35.030", // Unique identifier for the FWRC
                    title: "Pedestrian Interference", // Title of the FWRC
                    description: "Prohibits obstructing pedestrian or vehicular traffic on sidewalks, roadways, and other public spaces, with specific exemptions.",
                    definition: [
                      {
                        index: "1",
                        main: "The following definitions apply to this section:",
                        subSections: [
                          "(a) \"Roadway\" has the meaning given in RCW 46.04.500 as currently adopted or as it may be amended in the future.",
                          "(b) \"Sidewalk\" has the same meaning given in FWRC 1.05.020 as currently adopted or as it may be amended in the future."
                        ]
                      },
                      {
                        index: "2",
                        main: "A person is guilty of pedestrian interference if, while in the public right-of-way, he or she intentionally:",
                        subSections: [
                          "(a) Obstructs pedestrian or vehicular traffic by walking, standing, sitting, lying, or placing an object that blocks, hinders, or impedes free passage by another person or vehicle, causing or likely to cause evasive action;",
                          "(b) Sits or lies upon a public sidewalk, or upon any object placed on a public sidewalk, except as otherwise provided by this section;",
                          "(c) Uses a bench or bus stop in a manner that unreasonably prevents or interferes with access by others or impedes pedestrian access around it;",
                          "(d) Loiters on the roadway or on a median between lanes of travel."
                        ]
                      },
                      {
                        index: "3",
                        main: "This section shall not apply to the following:",
                        subSections: [
                          "(a) Persons engaged in work upon a development or maintenance project within a marked construction or maintenance area;",
                          "(b) Persons with disabilities utilizing mobility devices such as wheelchairs or walkers;",
                          "(c) Activities conducted on the public sidewalk under a valid permit pursuant to Chapter 4.25 FWRC;",
                          "(d) Events such as parades, festivals, or rallies with permits under Chapter 4.30 FWRC;",
                          "(e) Persons waiting for transportation within a bus stop zone;",
                          "(f) Sitting on a city or privately provided bench or chair on the public sidewalk."
                        ]
                      },
                      {
                        index: "4",
                        main: "A person violating this section is guilty of a misdemeanor. Enforcement shall only occur after notification by law enforcement, and failure to comply may result in enforcement."
                      }
                    ],
                    link: "", // No direct link available
                    offense: "Misdemeanor", // Main offense classification
                    elementsOfPC: [
                      "Obstructs pedestrian or vehicular traffic in a public right-of-way",
                      "Places an object or loiters on sidewalks, roadways, or medians",
                      "Violates the prohibition after being warned by law enforcement"
                    ], // Required elements for probable cause
                    questions: [
                      "Was traffic or pedestrian flow obstructed?",
                      "Did the suspect place an object or obstruct intentionally?",
                      "Was the suspect warned by law enforcement?",
                      "Was the obstruction in a public right-of-way?",
                      "Does the suspect have a lawful exemption or permit?"
                    ], // Key questions for investigation
                    relatedCodes: [
                      "46.04.500 RCW Roadway definitions",
                      "6.35.020 FWRC Menacing",
                      "4.25 FWRC Permit for sidewalk activities"
                    ], // Related RCWs and FWRCs for cross-reference
                    relatedProcedures: [
                    ] // Related procedures
                  },
                  {
                    id: "6.35.070", // Unique identifier for the FWRC
                    title: "Domestic Violence", // Title of the FWRC
                    description: "Crimes of domestic violence, including specific offenses such as strangulation and exposing children to domestic violence, and their related penalties.",
                    definition: [
                      {
                        index: "1",
                        main: "Domestic violence anti-merger clause:",
                        subSections: [
                          "Every person who, in the commission of a crime of domestic violence, shall commit any other crime, may be punished therefor as well as for the crime of domestic violence, and may be prosecuted for each crime separately."
                        ]
                      },
                      {
                        index: "2",
                        main: "Strangulation:",
                        subSections: [
                          "(a) A person is guilty of strangulation if, under circumstances not amounting to a felony, he or she assaults another by means of strangulation.",
                          "(b) \"Strangulation\" shall mean intentionally impeding normal breathing or circulation of the blood by applying pressure on the throat or neck or by obstructing the nose or mouth of another person.",
                          "(c) Strangulation is a gross misdemeanor. Any person convicted of this crime shall be punished by imprisonment for not less than 30 days."
                        ]
                      },
                      {
                        index: "3",
                        main: "Exposing children to domestic violence:",
                        subSections: [
                          "(a) A person commits the crime of exposing children to domestic violence when he or she:",
                          "(i) Commits a crime of domestic violence, as defined in RCW 10.99.020; and",
                          "(ii) The crime is committed in the immediate presence of, or is witnessed by, the person&apos;s or the victim&apos;s minor child, stepchild, or a minor child residing within the household of the person or victim.",
                          "(b) For the purposes of this section, \"witnessed\" shall mean if the crime is seen or directly perceived in any other manner by the child.",
                          "(c) Exposing children to domestic violence is a gross misdemeanor. Any person convicted of this crime shall be punished by imprisonment for not less than 30 days. If the person is sentenced to less than the maximum statutory sentence, the court shall place the defendant on probation and impose conditions that include attendance at a certified domestic violence perpetrator treatment program and a treatment program addressing the effects of domestic violence on children."
                        ]
                      },
                      {
                        index: "4",
                        main: "The following state statutes are adopted by reference as now enacted or hereafter amended:",
                        subSections: [
                          "Ch. 7.105 RCW Civil Protection Orders;",
                          "9A.36.150 RCW Interfering with the reporting of domestic violence;",
                          "Ch. 10.99 RCW Domestic violence - Official response;",
                          "26.09.300 RCW Restraining orders - Notice - Refusal to comply - Arrest - Penalty - Defense - Peace officers, immunity;",
                          "26.26.138 RCW Restraining order - Knowing violation - Penalty - Law enforcement immunity;",
                          "26.44.063 RCW Temporary restraining order or preliminary injunction - Enforcement - Notice of modification or termination of restraining order;",
                          "26.44.067 RCW Temporary restraining order or preliminary injunction - Contents - Notice - Noncompliance - Defense - Penalty."
                        ]
                      }
                    ],
                    link: "", // No direct link available
                    offense: "Gross Misdemeanor", // Main offense classification for strangulation and exposing children to domestic violence
                    elementsOfPC: [
                      "Commission of a crime of domestic violence",
                      "For strangulation: Applies pressure to throat or neck or obstructs breathing",
                      "For exposing children: Crime occurs in the presence of or is witnessed by a minor child"
                    ], // Required elements for probable cause
                    questions: [
                      "Was there a crime of domestic violence committed?",
                      "Did the act involve strangulation or obstruction of breathing?",
                      "Were children present or witnesses to the crime?",
                      "What relationship exists between the suspect and the victim(s)?",
                      "Were there prior restraining orders or protective measures in place?"
                    ], // Key questions for investigation
                    relatedCodes: [
                      "9A.36.150 RCW Interfering with the reporting of domestic violence",
                      "7.105 RCW Civil Protection Orders",
                      "10.99 RCW Domestic violence – Official response",
                      "6.35.020 FWRC Menacing"
                    ], // Related RCWs and FWRCs for cross-reference
                    relatedProcedures: [
                    ] // Related procedures
                  },
                  {
                    id: "6.35.090", // Unique identifier for the FWRC
                    title: "Violating No Contact Orders", // Title of the FWRC
                    description: "Willful disobedience of temporary or permanent no-contact or protection orders issued under applicable RCWs.",
                    definition: [
                      {
                        index: "1",
                        main: "It is a gross misdemeanor to willfully disobey a temporary or permanent no-contact or protection order issued pursuant to Chapter 7.105 or 10.99 RCW."
                      }
                    ],
                    link: "", // No direct link available
                    offense: "Gross Misdemeanor", // Main offense classification
                    elementsOfPC: [
                      "Willful disobedience of a no-contact or protection order",
                      "Order issued under Chapter 7.105 or 10.99 RCW",
                      "Violation must be intentional and within the scope of the order"
                    ], // Required elements for probable cause
                    questions: [
                      "Was the order issued under Chapter 7.105 or 10.99 RCW?",
                      "Did the suspect willfully violate the order?",
                      "What specific actions constituted the violation?",
                      "Was the victim aware of the violation?",
                      "Were there witnesses to the violation?"
                    ], // Key questions for investigation
                    relatedCodes: [
                      "7.105 RCW Civil Protection Orders",
                      "10.99 RCW Domestic violence – Official response",
                      "9A.36.150 RCW Interfering with the reporting of domestic violence",
                      "6.35.070 FWRC Crimes occurring between family or household members – Domestic violence"
                    ], // Related RCWs and FWRCs for cross-reference
                    relatedProcedures: [
                    ] // Related procedures
                  }                                                                                  
            ]
        },
        {
            id:"6.45",
            title:"Morals",
            description:"Crimes involving moral responsibilities in public.",
            items: [
                {
                    id: "6.45.020", // Unique identifier for the FWRC
                    title: "Indecent Exposure", // Title of the FWRC
                    description: "Intentional open and obscene exposure likely to cause reasonable affront or alarm, with varying penalties based on the victim&apos;s age.",
                    definition: [
                      {
                        index: "1",
                        main: "A person is guilty of indecent exposure if he or she intentionally makes any open and obscene exposure of his or her person, or the person of another, knowing that such conduct is likely to cause reasonable affront or alarm. The act of breast-feeding or expressing breast milk is not indecent exposure."
                      },
                      {
                        index: "2",
                        main: "Indecent exposure to a person under the age of 14 years is a gross misdemeanor."
                      },
                      {
                        index: "3",
                        main: "Indecent exposure to a person aged 14 years or older is a misdemeanor."
                      },
                      {
                        index: "4",
                        main: "For purposes of this section, \"obscene exposure\" includes, but is not limited to:",
                        subSections: [
                          "(a) Exposure of any portion of the human anus or genitals;",
                          "(b) Exposure of any portion of the female breast lower than the upper edge of the areola;",
                          "(c) Exposure consisting of touching, caressing, or fondling of the male or female genitals or female breasts, whether clothed or unclothed;",
                          "(d) Exposure consisting of masturbation;",
                          "(e) Public urination or defecation in a place other than a restroom."
                        ]
                      }
                    ],
                    link: "", // No direct link available
                    offense: "Gross Misdemeanor (victim under 14) / Misdemeanor (victim 14 or older)", // Main offense classification
                    elementsOfPC: [
                      "Intentional exposure of one&apos;s own or another&apos;s person",
                      "Exposure is open and obscene",
                      "Conduct likely to cause reasonable affront or alarm"
                    ], // Required elements for probable cause
                    questions: [
                      "Was the exposure intentional?",
                      "What part of the person was exposed?",
                      "Was the exposure likely to cause affront or alarm?",
                      "What was the victim&apos;s age?",
                      "Were there witnesses to the act?"
                    ], // Key questions for investigation
                    relatedCodes: [
                      "9A.88.010 RCW Indecent exposure",
                      "6.35.070 FWRC Domestic violence - Exposure offenses",
                      "6.35.020 FWRC Menacing"
                    ], // Related RCWs and FWRCs for cross-reference
                    relatedProcedures: [
                    ] // Related procedures
                  },
                  {
                    id: "6.45.025", // Unique identifier for the FWRC
                    title: "Lewd Conduct", // Title of the FWRC
                    description: "Prohibits intentional exposure or sexual acts in public places, with specific exceptions for permissible activities.",
                    definition: [
                      {
                        index: "1",
                        main: "A person is guilty of lewd conduct if in a public place the person intentionally:",
                        subSections: [
                          "(a) Exposes any of the following body parts without a full and opaque covering:",
                          "(i) Any part of the male or female genitals, pubic hair, pubic area, perineum, anus, or bottom one-half of the anal cleft;",
                          "(ii) Any part of the areola or nipple of the female breast; or",
                          "(iii) More than one-half of the part of the female breast located below the top of the areola. The covered area shall be reasonably compact and contiguous to the areola.",
                          "(b) Exposes the male genitals in a discernibly turgid state, even if fully and opaquely covered;",
                          "(c) Touches, caresses, or fondles the genitals or female breast, whether clothed or unclothed;",
                          "(d) Masturbates; or",
                          "(e) Engages in sexual conduct or sexual contact."
                        ]
                      },
                      {
                        index: "2",
                        main: "A full and opaque covering does not include:",
                        subSections: [
                          "Body paint, body dye, tattoos, latex, tape, or similar substances;",
                          "Substances that can be washed off the skin;",
                          "Substances designed to simulate the appearance of the anatomical area beneath it."
                        ]
                      },
                      {
                        index: "3",
                        main: "This section does not prohibit:",
                        subSections: [
                          "(a) Breastfeeding or expressing breast milk;",
                          "(b) Classes, seminars, and lectures for serious scientific or educational purposes;",
                          "(c) Plays, operas, musicals, or other dramatic works which are not obscene;",
                          "(d) Adult entertainment activities pursuant to Chapter 12.10 FWRC;",
                          "(e) Bathhouse activities pursuant to Chapter 12.40 FWRC;",
                          "(f) Conduct by a child under 10 years of age;",
                          "(g) Nudity in places where it is necessarily and customarily expected, such as restrooms or locker rooms."
                        ]
                      },
                      {
                        index: "4",
                        main: "Facilitating Lewd Conduct:",
                        subSections: [
                          "The owner, lessee, manager, operator, or other person in charge of a public place is guilty of facilitating lewd conduct if they knowingly permit, encourage, or cause lewd conduct."
                        ]
                      },
                      {
                        index: "5",
                        main: "Lewd conduct and facilitating lewd conduct is a misdemeanor."
                      }
                    ],
                    link: "", // No direct link available
                    offense: "Misdemeanor", // Main offense classification
                    elementsOfPC: [
                      "Intentional exposure or sexual act in a public place",
                      "Exposure includes prohibited body parts or sexual acts",
                      "Violation occurs outside of listed exceptions"
                    ], // Required elements for probable cause
                    questions: [
                      "Was the act committed in a public place?",
                      "What part of the body was exposed?",
                      "Did the exposure include prohibited acts or body parts?",
                      "Does the suspect fall under any of the listed exceptions?",
                      "Was there facilitation by a responsible party?"
                    ], // Key questions for investigation
                    relatedCodes: [
                      "9A.88.010 RCW Indecent exposure",
                      "6.45.020 FWRC Indecent exposure",
                      "12.10 FWRC Adult entertainment activities"
                    ], // Related RCWs and FWRCs for cross-reference
                    relatedProcedures: [
                    ] // Related procedures
                  },
        {
            id: "6.45.090", // Unique identifier for the FWRC
            title: "Urinating in Public", // Title of the FWRC
            description: "Prohibits urinating or defecating in public places other than designated washrooms or toilet rooms.",
            definition: [
              {
                index: "1",
                main: "A person is guilty of urinating in public if he or she intentionally urinates or defecates in a public place, other than a washroom or toilet room, or at a place and under circumstances where such act could be observed by any member of the public."
              },
              {
                index: "2",
                main: "Urinating in public is a misdemeanor."
              }
            ],
            link: "", // No direct link available
            offense: "Misdemeanor", // Main offense classification
            elementsOfPC: [
              "Intentional act of urination or defecation",
              "Occurs in a public place",
              "Not performed in a washroom or toilet room",
              "Observable by a member of the public"
            ], // Required elements for probable cause
            questions: [
              "Was the act intentional?",
              "Did the act occur in a public place?",
              "Was the act visible to the public?",
              "Was a washroom or toilet room available nearby?",
              "Were there witnesses to the act?"
            ], // Key questions for investigation
            relatedCodes: [
              "6.45.020 FWRC Indecent exposure",
              "6.35.020 FWRC Menacing",
              "9A.88.010 RCW Indecent exposure"
            ], // Related RCWs and FWRCs for cross-reference
            relatedProcedures: [
            ] // Related procedures
          }          


        ]
        },
        {
            id:"6.55",
            title:"Public Peace",
            description: "Disruption of the public peace.",
            items: [
                {
                    id: "6.55.055", // Unique identifier for the FWRC
                    title: "Disorderly Conduct in Park", // Title of the FWRC
                    description: "Prohibits specific acts of disorderly behavior in public parks that disturb others or endanger public safety.",
                    definition: [
                      {
                        index: "1",
                        main: "A person is guilty of disorderly conduct in a park if he or she, while in a public park:"
                      },
                      {
                        index: "2",
                        subSections: [
                          "(1) Intentionally and without lawful authority makes noise which unreasonably disturbs others;",
                          "(2) Intentionally engages in any conduct which tends to or does disturb the public peace, provoke disorder, or endanger the safety of others;",
                          "(3) Challenges another person to fight, or fights by agreement, except as part of an organized athletic event; or",
                          "(4) Fails to leave a park when directed to do so by a city of Federal Way parks employee or a police officer."
                        ]
                      }
                    ],
                    link: "", // No direct link available
                    offense: "Misdemeanor", // Main offense classification
                    elementsOfPC: [
                      "Conduct occurs in a public park",
                      "Intentional act that disturbs peace or safety",
                      "Disobedience of lawful direction by park employees or police"
                    ], // Required elements for probable cause
                    questions: [
                      "Did the incident occur in a public park?",
                      "Was the conduct intentional?",
                      "Did the act disturb others or endanger safety?",
                      "Did the suspect refuse to leave when directed by authorities?",
                      "Were there witnesses to the behavior?"
                    ], // Key questions for investigation
                    relatedCodes: [
                      "6.35.020 FWRC Menacing",
                      "9A.84.030 RCW Disorderly conduct",
                      "6.45.020 FWRC Indecent exposure"
                    ], // Related RCWs and FWRCs for cross-reference
                    relatedProcedures: [
                    ] // Related procedures
                  }                  
            ]
        }



    ]
}


