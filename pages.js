const pages = [
  {
    "id":"1.0",
    "title": "Start",
    "description":"This is the start page.",
    "cards": [
      { 
        "id":"1.0.1", 
        "title": "Welcome to CallReady", 
        "description": "Created by M.Elliott - updated 3/13/25",
        "content":`

        <div class="row">

    <div class="col-7">
      <div class="card mb-3">
        <div class="card-header">Dispositions</div>
        <div class="card-body ">
        
          <a href="#"  class=\"text-decoration-none d-block py-1 px-2 focus-ring text-reset\"><span class=\"pe-3\">A.</span> Case report - arrest by citation/released</a>
          <a href="#"  class=\"text-decoration-none d-block py-1 px-2 focus-ring text-reset\"><span class=\"pe-3\">B.</span> Case report - misdemeanor - booked</a>
          <a href="#"  class=\"text-decoration-none d-block py-1 px-2 focus-ring text-reset\"><span class=\"pe-3\">C.</span> Case report - arrest for felony/released</a>
          <a href="#"  class=\"text-decoration-none d-block py-1 px-2 focus-ring text-reset\"><span class=\"pe-3\">D.</span> Case report - arrest for felony/booked</a>
          <a href="#"  class=\"text-decoration-none d-block py-1 px-2 focus-ring text-reset\"><span class=\"pe-3\">E.</span> Infraction/citation issued - no case report</a>
          <a href="#"  class=\"text-decoration-none d-block py-1 px-2 focus-ring text-reset\"><span class=\"pe-3\">F.</span> Follow-up activity</a>
          <a href="#"  class=\"text-decoration-none d-block py-1 px-2 focus-ring text-reset\"><span class=\"pe-3\">G.</span> Case report - felony, no arrest</a>
          <a href="#"  class=\"text-decoration-none d-block py-1 px-2 focus-ring text-reset\"><span class=\"pe-3\">H.</span> Case report - misd., no arrest/cite</a>
          <a href="#"  class=\"text-decoration-none d-block py-1 px-2 focus-ring text-reset\"><span class=\"pe-3\">I.</span> FIR completed</a>
          <a href="#"  class=\"text-decoration-none d-block py-1 px-2 focus-ring text-reset\"><span class=\"pe-3\">J.</span> Juvenile involved</a>
          <a href="#"  class=\"text-decoration-none d-block py-1 px-2 focus-ring text-reset\"><span class=\"pe-3\">K.</span> Cancelled by radio</a>
          <a href="#"  class=\"text-decoration-none d-block py-1 px-2 focus-ring text-reset\"><span class=\"pe-3\">L.</span> Returned home/family/other</a>
          <a href="#"  class=\"text-decoration-none d-block py-1 px-2 focus-ring text-reset\"><span class=\"pe-3\">M.</span> Removed to medical facility</a>
          <a href="#"  class=\"text-decoration-none d-block py-1 px-2 focus-ring text-reset\"><span class=\"pe-3\">N.</span> Case report - no crime</a>
          <a href="#"  class=\"text-decoration-none d-block py-1 px-2 focus-ring text-reset\"><span class=\"pe-3\">O.</span> Unable to locate suspect/vehicle</a>
          <a href="#"  class=\"text-decoration-none d-block py-1 px-2 focus-ring text-reset\"><span class=\"pe-3\">P.</span> False alarm, billable</a>
          <a href="#"  class=\"text-decoration-none d-block py-1 px-2 focus-ring text-reset\"><span class=\"pe-3\">Q.</span> Case report - arrest - misd./released</a>
          <a href="#"  class=\"text-decoration-none d-block py-1 px-2 focus-ring text-reset\"><span class=\"pe-3\">R.</span> Referred to another agency</a>
          <a href="#"  class=\"text-decoration-none d-block py-1 px-2 focus-ring text-reset\"><span class=\"pe-3\">S.</span> Civil matter</a>
          <a href="#"  class=\"text-decoration-none d-block py-1 px-2 focus-ring text-reset\"><span class=\"pe-3\">T.</span> Assignment completed/settled by contact</a>
          <a href="#"  class=\"text-decoration-none d-block py-1 px-2 focus-ring text-reset\"><span class=\"pe-3\">U.</span> Unfounded</a>
          <a href="#"  class=\"text-decoration-none d-block py-1 px-2 focus-ring text-reset\"><span class=\"pe-3\">V.</span> Vehicle impound</a>
          <a href="#"  class=\"text-decoration-none d-block py-1 px-2 focus-ring text-reset\"><span class=\"pe-3\">W.</span> Warning given</a>
          <a href="#"  class=\"text-decoration-none d-block py-1 px-2 focus-ring text-reset\"><span class=\"pe-3\">X.</span> Clear to assist another officer</a>
          <a href="#"  class=\"text-decoration-none d-block py-1 px-2 focus-ring text-reset\"><span class=\"pe-3\">Y.</span> On-duty police officer assaulted/killed</a>
          <a href="#"  class=\"text-decoration-none d-block py-1 px-2 focus-ring text-reset\"><span class=\"pe-3\">Z.</span> Information</a>
            
         
        </div>
      </div>
    </div>


    <div class=\"col\">
      <div class=\"card mb-3\">
          <div class="card-header">
            Court Dates
            <p class="mb-0 small text-secondary">Dates may not reflect admin changes for holidays or special occasions.</p>
          </div>
          <ul id=\"courtDates\" class=\"list-group list-group-flush\" data-trigger=\"refreshCourtDates\"></ul>
      </div>
      <div class=\"card mb-3\">
          
              <div class="card-header">Clearing Codes</div>
            
              <ul id="clearingCodes" class="list-group list-group-flush">
                
                <li class="list-group-item d-flex justify-content-between"><strong>0</strong> No pursuit</li>
                <li class="list-group-item d-flex justify-content-between"><strong>2</strong> Mental Illness</li>
                <li class="list-group-item d-flex justify-content-between"><strong>3</strong> Racers</li>
                <li class="list-group-item d-flex justify-content-between"><strong>4</strong> Prostitution</li>
                <li class="list-group-item d-flex justify-content-between"><strong>5</strong> Drug warning</li>
                <li class="list-group-item d-flex justify-content-between"><strong>6</strong> Gang</li>
                <li class="list-group-item d-flex justify-content-between"><strong>8</strong> Homeless</li>
                <li class="list-group-item d-flex justify-content-between"><strong>9</strong> Declined</li>

              </ul>
          </div>
          <div class=\"card mb-3\">
              <div class="card-header">Dispatch Codes</div>
            
              <ul id=\"dispatchCodes\" class=\"list-group list-group-flush\">
                
                <li class="list-group-item d-flex justify-content-between"><strong>Valley Comm (VC)</strong> Misd. Warrant </li>
                <li class="list-group-item d-flex justify-content-between"><strong>VC Frank</strong> Felony Warrant</li>
                <li class="list-group-item d-flex justify-content-between"><strong>VC Charles</strong> <span class="badge text-bg-danger">Caution</span></li>
                <li class="list-group-item d-flex justify-content-between"><strong>VC George</strong> Gang Relation</li>
                <li class="list-group-item d-flex justify-content-between"><strong>VC Ocean</strong> Protection Order</li>
                <li class="list-group-item d-flex justify-content-between"><strong>VC Victor</strong> Stolen Vehicle</li>

              </ul>
          </div>
    </div>


      



    </div>
        
        
        
        
        `,
        "data":"{}"
       }
    ]
  },
  {
    "id":"2.0",
    "title": "Evidence",
    "description":"This page serves as a quick referance guide for submitting evidence.",
    "cards": [
      { 
        "id":"2.0.1", 
        "title": "Evidence Guide", 
        "description": "A Referance guide for submitting evidence. - updated 1/07/25",
        "content":`
          <div class="row">
            <div class="col">

            <div class="alert alert-primary" role="alert">
              Blood kits and other evidence that belongs in a fridge are not stored in the lockers across the street. They are stored in the fridge across the street. The fridge is located through the MAIN entrance. (Not the door in the garage)
            </div>

              <ol class="list-group list-group-numbered">
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Returns for Correction</div>
                    Blood kits and other evidence that belongs in a fridge are not stored in the lockers across the street. They are stored in the fridge across the street. The fridge is located through the MAIN entrance. (Not the door in the garage)
                  </div>
                </li>
                
              </ol>
            </div>
          </div>
        `,
        "data":"{}"
       }
    ]
  },
  {
    "id":"3.0",
    "title": "Case Law",
    "description":"This page serves as a quick referance of important cases police use for policies.",
    "cards": [
      { 
        "id":"3.0.1", 
        "title": "Case Laws", 
        "description": "Work in progress.",
        "content":`
            <div class=\"row\">
              <div class=\"col\">
                
              
                <table class="table table-bordered table-hover table-striped">
                  <thead class="thead-dark">
                    <tr>
                      <th>Category</th>
                      <th>Case</th>
                      <th>What It Allows Officers to Do</th>
                      <th>Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- STOP & DETAIN / TERRY STOPS -->
                    <tr>
                      <td rowspan="5"><strong>Stop & Detain</strong></td>
                      <td>Terry v. Ohio (1968)</td>
                      <td>Allows officers to stop and frisk a person based on reasonable suspicion that they&apos;re involved in criminal activity and may be armed.</td>
                      <td><a href="" target="_blank">View</a></td>
                    </tr>
                    <tr>
                      <td>State v. Arreola (2012)</td>
                      <td>Allows brief detention for investigation; continued detention must be supported by developing reasonable suspicion.</td>
                      <td><a href="" target="_blank">View</a></td>
                    </tr>
                    <tr>
                      <td>State v. Doughty (2010)</td>
                      <td>Disallows Terry stops based solely on anonymous tips unless the tip is corroborated with observed facts.</td>
                      <td><a href="" target="_blank">View</a></td>
                    </tr>
                    <tr>
                      <td>State v. Glossbrener (2008)</td>
                      <td>Allows a frisk if the officer can articulate specific reasons the suspect may be armed and presently dangerous.</td>
                      <td><a href="" target="_blank">View</a></td>
                    </tr>
                    <tr>
                      <td>State v. Goucher (2004)</td>
                      <td>Allows a stop when gunshots are heard nearby and circumstances link a person to the incident.</td>
                      <td><a href="" target="_blank">View</a></td>
                    </tr>

                    <!-- SEARCH & SEIZURE -->
                    <tr>
                      <td rowspan="5"><strong>Search & Seizure</strong></td>
                      <td>Arizona v. Gant (2009)</td>
                      <td>Limits vehicle searches incident to arrest; allows only if arrestee can access vehicle or evidence is reasonably believed to be inside.</td>
                      <td><a href="" target="_blank">View</a></td>
                    </tr>
                    <tr>
                      <td>State v. Snapp (2012)</td>
                      <td>Disallows broad vehicle searches post-arrest; reinforces WA&apos;s stronger privacy protections under state constitution.</td>
                      <td><a href="" target="_blank">View</a></td>
                    </tr>
                    <tr>
                      <td>State v. Ferrier (1998)</td>
                      <td>Requires Ferrier warnings before entering a residence for consent-based searches: right to refuse, limit, and revoke consent.</td>
                      <td><a href="" target="_blank">View</a></td>
                    </tr>
                    <tr>
                      <td>Michigan v. Fisher (2009)</td>
                      <td>Allows warrantless entry into a home if officers reasonably believe someone inside needs immediate medical aid.</td>
                      <td><a href="" target="_blank">View</a></td>
                    </tr>
                    <tr>
                      <td>State v. Leffler (2007)</td>
                      <td>Allows entry without a warrant to prevent imminent destruction of evidence if based on articulable facts.</td>
                      <td><a href="" target="_blank">View</a></td>
                    </tr>

                    <!-- PLAIN VIEW -->
                    <tr>
                      <td rowspan="2"><strong>Plain View / Open View</strong></td>
                      <td>Horton v. California (1990)</td>
                      <td>Allows seizure of evidence in plain view if legally present and its criminal nature is immediately apparent.</td>
                      <td><a href="" target="_blank">View</a></td>
                    </tr>
                    <tr>
                      <td>State v. Seagull (1981)</td>
                      <td>Allows observation and action on contraband visible from a lawful location (e.g., sidewalk, porch).</td>
                      <td><a href="" target="_blank">View</a></td>
                    </tr>

                    <!-- COMMUNITY CARETAKING -->
                    <tr>
                      <td rowspan="4"><strong>Community Caretaking</strong></td>
                      <td>Cady v. Dombrowski (1973)</td>
                      <td>Allows entry/search when acting to protect public safety (e.g., securing weapon in a vehicle), not for criminal evidence.</td>
                      <td><a href="" target="_blank">View</a></td>
                    </tr>
                    <tr>
                      <td>State v. Kinzy (2000)</td>
                      <td>Allows caretaking actions in WA only when totally divorced from investigative motives; entry must be strictly to help.</td>
                      <td><a href="" target="_blank">View</a></td>
                    </tr>
                    <tr>
                      <td>State v. Duncan (2002)</td>
                      <td>Allows stopping a vehicle under caretaking if the driver appears unwell or in need of help-no suspicion of crime needed.</td>
                      <td><a href="" target="_blank">View</a></td>
                    </tr>
                    <tr>
                      <td>State v. Sadler (2008)</td>
                      <td>Allows warrantless home entry under caretaking when there&apos;s a legitimate concern for safety or medical emergency.</td>
                      <td><a href="" target="_blank">View</a></td>
                    </tr>

                    <!-- USE OF FORCE -->
                    <tr>
                      <td rowspan="2"><strong>Use of Force</strong></td>
                      <td>Graham v. Connor (1989)</td>
                      <td>Establishes that force must be objectively reasonable based on totality of the circumstances, judged from the officer&apos;s POV at the time.</td>
                      <td><a href="" target="_blank">View</a></td>
                    </tr>
                    <tr>
                      <td>Tennessee v. Garner (1985)</td>
                      <td>Allows deadly force on a fleeing suspect only if they pose an immediate threat of death or serious injury to others.</td>
                      <td><a href="" target="_blank">View</a></td>
                    </tr>

                    <!-- INVENTORY SEARCH -->
                    <tr>
                      <td rowspan="2"><strong>Inventory / Impound</strong></td>
                      <td>South Dakota v. Opperman (1976)</td>
                      <td>Allows inventory search of lawfully impounded vehicles if done per policy and not as a pretext for investigation.</td>
                      <td><a href="" target="_blank">View</a></td>
                    </tr>
                    <tr>
                      <td>State v. White (1998)</td>
                      <td>Allows inventory searches in WA only if conducted under written department policy without investigatory motive.</td>
                      <td><a href="" target="_blank">View</a></td>
                    </tr>

                    <!-- MIRANDA -->
                    <tr>
                      <td rowspan="2"><strong>Miranda / Custody</strong></td>
                      <td>Miranda v. Arizona (1966)</td>
                      <td>Requires officers to give Miranda warnings before custodial interrogation; otherwise, statements are inadmissible.</td>
                      <td><a href="" target="_blank">View</a></td>
                    </tr>
                    <tr>
                      <td>State v. Heritage (2004)</td>
                      <td>Requires Miranda for juveniles when in custody as judged from a juvenile&apos;s perspective; more protective standard than adults.</td>
                      <td><a href="" target="_blank">View</a></td>
                    </tr>

                    <!-- SENSORY-BASED PC -->
                    <tr>
                      <td><strong>Sensory-Based PC</strong></td>
                      <td>State v. Grande (2008)</td>
                      <td>Allows probable cause based on strong odor of marijuana when combined with context, officer training, and location.</td>
                      <td><a href="" target="_blank">View</a></td>
                    </tr>
                  </tbody>
                </table>


                





              </div>
        
        </div>
        `,
        "data":"{}"
       }
    ]
  },
  {
    "id":"4.0",
    "title": "GPS Road",
    "description":"This page serves as a quick referance of your current heading and location.",
    "cards": [
      { 
        "id":"4.0.1", 
        "title": "GPS Road", 
        "description": "GPS is buggy. Refresh page after use.",
        "content":`
            <div class=\"row\">
              <div class=\"col\">
                <div data-trigger=\"refreshGPSRoad\">
                  <div class=\"spinner-border text-secondary d-none position-absolute\" role=\"status\" id=\"spinner\"></div>
                  <h1 id=\"direction\" class=\"fw-bold mt-1 text-center"\" style=\"font-size: 10vw !important; line-height:1; \"></h1>
                  <p id=\"road\" class=\"fw-light mt-2 text-center"\" style=\"font-size: 2vw !important;\"></p>
                    <div id=\"nearby\" class=\"mt-2 d-flex justify-content-center\"></div>
                  <button id=\"refreshButton\" class=\"btn btn-outline-secondary mt-3 px-4 py-2\"><i class=\"bi bi-repeat\"></i></button>
                  <div id=\"map\" class=\"d-none\"></div>
                </div>
              </div>
        
        </div>
        `,
        "data":"{}"
       }
    ]
  },
  

  
  
]