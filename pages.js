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

              

              
              <div class="card border-primary-subtle mb-5">
                <div class="card-header d-flex justify-content-between align-items-center bg-primary-subtle">
                  <div>
                    <h4 class="mb-0">
                      Terry v. Ohio <small class="text-muted">392 U.S. 1 (1968)</small>
                    </h4>
                    <span class="badge bg-warning text-dark mt-2">Stop & Frisk / Investigative Detention</span>
                  </div>
                  <a href="https://supreme.justia.com/cases/federal/us/392/1/" target="_blank" class="btn btn-primary btn-sm">
                    Full Case
                  </a>
                </div>

                <div class="card-body">
                  <div class="row">
                    <!-- LEFT: Summary Sections -->
                    <div class="col-md-8">
                      <h5 class="">Legal Issue</h5>
                      <p class="text-muted mb-4">
                        Can a police officer stop and frisk a person without a warrant or probable cause, based solely on the officer&apos;s reasonable suspicion that the individual is involved in criminal activity and may be armed?
                      </p>

                      <h5 class="">Facts</h5>
                      <ul class="text-muted mb-4">
                        <li>An officer observed suspicious behavior by two men repeatedly walking past a storefront, appearing to case it.</li>
                        <li>The officer stopped and questioned them, then conducted a pat-down for weapons based on concern for his safety.</li>
                        <li>The officer recovered firearms and arrested the suspects for carrying concealed weapons.</li>
                      </ul>

                      <h5 class="">Ruling</h5>
                      <p class="text-muted mb-4">
                        The U.S. Supreme Court ruled the stop and frisk was reasonable under the Fourth Amendment. Officers may briefly detain a person based on reasonable suspicion of criminal activity and conduct a limited pat-down if they reasonably believe the person may be armed and dangerous. This established the legal standard for Terry stops and protective frisks.
                      </p>
                    </div>

                    <!-- RIGHT: Officer Takeaway -->
                    <div class="col-md-4">
                      <div class="border border-secondary-subtle rounded p-4 h-100">
                        <h5 class="mb-2">Officer Takeaway</h5>
                        <hr>
                        <ul class="mb-0">
                          <li><span class="text-primary">May stop individuals based on reasonable suspicion of criminal activity.</span></li>
                          <li><span class="text-primary">May frisk outer clothing if you reasonably suspect they are armed and dangerous.</span></li>
                          <li><span class="text-danger">Do not conduct a full search or go beyond a weapons pat-down without probable cause or consent.</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



            <div class="card border-primary-subtle mb-5">
              <div class="card-header d-flex justify-content-between align-items-center bg-primary-subtle">
                <div>
                  <h4 class="mb-0">
                    State v. Arreola <small class="text-muted">176 Wn.2d 284 (2012)</small>
                  </h4>
                  <span class="badge bg-warning text-dark mt-2">Pretext / Stop Authority</span>
                </div>
                <a href="https://law.justia.com/cases/washington/supreme-court/2012/86610-4-0.html" target="_blank" class="btn btn-primary btn-sm">
                  Full Case
                </a>
              </div>

              <div class="card-body">
                <div class="row">
                  <!-- LEFT: Summary Sections -->
                  <div class="col-md-8">
                    <h5 class="">Legal Issue</h5>
                    <p class="text-muted mb-4">
                      Is a traffic stop unconstitutional under Article I, Section 7 of the WA Constitution if an officer is primarily motivated by an uncorroborated DUI report but also independently observes a traffic infraction?
                    </p>

                    <h5 class="">Facts</h5>
                    <ul class="text-muted mb-4">
                      <li>Officer responded to a DUI report and followed a matching vehicle.</li>
                      <li>Observed no signs of DUI, but did observe a muffler violation.</li>
                      <li>Admitted his primary interest was investigating the DUI, but testified he routinely stops cars for loud exhaust and would have done so regardless of the report.</li>
                      <li>Upon contact, observed open containers, odor of alcohol, and arrested the driver based on warrants.</li>
                    </ul>

                    <h5 class="">Ruling</h5>
                    <p class="text-muted mb-4">
                      The WA Supreme Court ruled the stop was <strong>not pretextual</strong>. A stop motivated by multiple reasons is lawful if one of them is an actual, conscious, and independent basis supported by reasonable suspicion. As long as the traffic violation would have prompted the stop anyway, it is constitutionally valid.
                    </p>
                  </div>

                  <!-- RIGHT: Officer Takeaway -->
                  <div class="col-md-4">
                    <div class="border border-secondary-subtle rounded p-4 h-100">
                      <h5 class="mb-2">Officer Takeaway</h5>
                      <hr>
                      <ul class="mb-0">
                        <li><span class="text-danger">Do not rely solely on uncorroborated tips (e.g., anonymous DUI calls) to justify stops.</span></li>
                        <li><span class="text-primary">Must independently observe and consciously act on a valid reason for the stop (e.g., traffic infraction).</span></li>
                        <li><span class="text-primary">May stop a vehicle for a legitimate infraction even if you are also hoping to investigate something else.</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div class="card border-primary-subtle mb-5">
              <div class="card-header d-flex justify-content-between align-items-center bg-primary-subtle">
                <div>
                  <h4 class="mb-0">
                    State v. Doughty <small class="text-muted">170 Wn.2d 57 (2010)</small>
                  </h4>
                  <span class="badge bg-warning text-dark mt-2">Stop & Detain / Terry Stop</span>
                </div>
                <a href="https://law.justia.com/cases/washington/supreme-court/2010/828521-opn.html" target="_blank" class="btn btn-primary btn-sm">
                  Full Case
                </a>
              </div>

              <div class="card-body">
                <div class="row">
                  <!-- LEFT: Summary Sections -->
                  <div class="col-md-8">
                    <h5 class="">Legal Issue</h5>
                    <p class="text-muted mb-4">
                      Can an officer legally stop a vehicle solely based on a brief late-night visit to a suspected drug house without other corroborating factors?
                    </p>

                    <h5 class="">Facts</h5>
                    <ul class="text-muted mb-4">
                      <li>Driver briefly stopped at a known drug house around 3:20 AM.</li>
                      <li>No observed hand-to-hand exchange or suspicious behavior.</li>
                      <li>Officer initiated a stop based only on time, location, and the duration of the visit.</li>
                    </ul>

                    <h5 class="">Ruling</h5>
                    <p class="text-muted mb-4">
                      The WA Supreme Court ruled the stop violated Article I, Section 7 of the WA Constitution. A short visit to a suspected location, even at night, does not justify a Terry stop without further articulable facts establishing reasonable suspicion.
                    </p>
                  </div>

                  <!-- RIGHT: Officer Takeaway -->
                  <div class="col-md-4">
                    <div class="border border-secondary-subtle rounded p-4 h-100">
                      <h5 class="mb-2">Officer Takeaway</h5>
                      <hr>
                      <ul class="mb-0">
                        <li><span class="text-danger">Do NOT stop solely for short visits to known drug houses.</span></li>
                        <li><span class="text-primary">Must have more: visible transactions, evasive behavior, known suspects, etc.</span></li>
                        <li><span class="text-primary">Court requires specific and articulable suspicion &mdash; not a hunch.</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>




            <div class="card border-primary-subtle mb-5">
              <div class="card-header d-flex justify-content-between align-items-center bg-primary-subtle">
                <div>
                  <h4 class="mb-0">
                    State v. Ferrier <small class="text-muted">136 Wn.2d 103 (1998)</small>
                  </h4>
                  <span class="badge bg-warning text-dark mt-2">Consent Search / Knock & Talk</span>
                </div>
                <a href="https://law.justia.com/cases/washington/supreme-court/1998/64930-8-1.html" target="_blank" class="btn btn-primary btn-sm">
                  Full Case
                </a>
              </div>

              <div class="card-body">
                <div class="row">
                  <!-- LEFT: Summary Sections -->
                  <div class="col-md-8">
                    <h5 class="">Legal Issue</h5>
                    <p class="text-muted mb-4">
                      Does an officer violate Article I, Section 7 of the WA Constitution by failing to inform a resident of their right to refuse, revoke, or limit consent during a knock and talk request to search their home?
                    </p>

                    <h5 class="">Facts</h5>
                    <ul class="text-muted mb-4">
                      <li>Officers conducted a &quot;knock and talk&quot; at Ferrier&apos;s home based on unverified information from her detained son.</li>
                      <li>They were armed, wore raid jackets, and positioned officers around the home before knocking.</li>
                      <li>Ferrier let them inside. Officers asked to search her home and presented a consent form without informing her of any rights.</li>
                      <li>Ferrier signed under perceived pressure, later saying she feared her grandchildren would be taken if she refused.</li>
                    </ul>

                    <h5 class="">Ruling</h5>
                    <p class="text-muted mb-4">
                      The WA Supreme Court ruled the search was unconstitutional. When conducting a knock and talk at a private residence, officers <strong>must inform the occupant</strong> they have the right to refuse consent, limit the scope, or revoke consent at any time. Because Ferrier was not advised of these rights, her consent was invalid and the search unlawful.
                    </p>
                  </div>

                  <!-- RIGHT: Officer Takeaway -->
                  <div class="col-md-4">
                    <div class="border border-secondary-subtle rounded p-4 h-100">
                      <h5 class="mb-2">Officer Takeaway</h5>
                      <hr>
                      <ul class="mb-0">
                        <li><span class="text-danger">Do not conduct knock and talk searches without first giving Ferrier warnings.</span></li>
                        <li><span class="text-primary">Must clearly inform residents they may refuse, revoke, or limit consent before entering or searching.</span></li>
                        <li><span class="text-danger">Consent without these warnings will be considered involuntary under WA law.</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div class="card border-primary-subtle mb-5">
              <div class="card-header d-flex justify-content-between align-items-center bg-primary-subtle">
                <div>
                  <h4 class="mb-0">
                    State v. Leffler <small class="text-muted">142 Wn. App. 175 (2007)</small>
                  </h4>
                  <span class="badge bg-warning text-dark mt-2">Exigent Circumstances / Warrantless Search</span>
                </div>
                <a href="https://case-law.vlex.com/vid/state-v-leffler-no-889749633" target="_blank" class="btn btn-primary btn-sm">
                  Full Case
                </a>
              </div>

              <div class="card-body">
                <div class="row">
                  <!-- LEFT: Summary Sections -->
                  <div class="col-md-8">
                    <h5>Legal Issue</h5>
                    <p class="text-muted mb-4">
                      Does the presence of chemical odors and materials associated with methamphetamine production justify a warrantless search under the emergency exception to the warrant requirement?
                    </p>

                    <h5>Facts</h5>
                    <ul class="text-muted mb-4">
                      <li>Deputies responded to an anonymous tip about strong chemical smells from Leffler&apos;s property.</li>
                      <li>Upon arrival, they detected a harsh chemical odor near a fifth-wheel trailer.</li>
                      <li>Leffler had an outstanding felony escape warrant and was arrested.</li>
                      <li>He informed deputies about hazardous materials inside the trailer but did not consent to a search.</li>
                      <li>The Clandestine Lab Team conducted a warrantless safety assessment, finding evidence of methamphetamine manufacturing.</li>
                    </ul>

                    <h5>Ruling</h5>
                    <p class="text-muted mb-4">
                      The Washington Court of Appeals ruled the search unconstitutional. The emergency exception to the warrant requirement does not apply without an imminent threat of substantial harm to persons or property. Mere presence of hazardous materials without immediate danger does not justify a warrantless search.
                    </p>
                  </div>

                  <!-- RIGHT: Officer Takeaway -->
                  <div class="col-md-4">
                    <div class="border border-secondary-subtle rounded p-4 h-100">
                      <h5 class="mb-2">Officer Takeaway</h5>
                      <hr>
                      <ul class="mb-0">
                        <li><span class="text-danger">Do not conduct warrantless searches based solely on the presence of hazardous materials without immediate threat.</span></li>
                        <li><span class="text-primary">Must obtain a warrant unless there is an imminent threat of substantial harm.</span></li>
                        <li><span class="text-primary">Ensure clear documentation of any perceived immediate dangers when considering exigent circumstances.</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>




<div class="card border-primary-subtle mb-5">
  <div class="card-header d-flex justify-content-between align-items-center bg-primary-subtle">
    <div>
      <h4 class="mb-0">
        Graham v. Connor <small class="text-muted">490 U.S. 386 (1989)</small>
      </h4>
      <span class="badge bg-warning text-dark mt-2">Use of Force / Objective Reasonableness</span>
    </div>
    <a href="https://supreme.justia.com/cases/federal/us/490/386/" target="_blank" class="btn btn-primary btn-sm">
      Full Case
    </a>
  </div>

  <div class="card-body">
    <div class="row">
      <!-- LEFT: Summary Sections -->
      <div class="col-md-8">
        <h5>Legal Issue</h5>
        <p class="text-muted mb-4">
          What legal standard should apply when evaluating whether law enforcement used excessive force during a stop, arrest, or other seizure under the Constitution?
        </p>

        <h5>Facts</h5>
        <ul class="text-muted mb-4">
          <li>Graham, a diabetic, asked a friend to drive him for orange juice during a medical episode.</li>
          <li>After briefly entering and exiting a store, a responding officer believed the behavior was suspicious and stopped their car.</li>
          <li>Backup officers handcuffed Graham and ignored his medical condition, causing him injury.</li>
          <li>He was released once officers learned no crime had occurred, but he later sued under 42 U.S.C. - 1983 for excessive force.</li>
        </ul>

        <h5>Ruling</h5>
        <p class="text-muted mb-4">
          The U.S. Supreme Court ruled that all claims of excessive force by officers must be evaluated under the Fourth Amendment&apos;s standard of <strong>objective reasonableness</strong>. Officers&apos; intent or motivation is irrelevant — the focus must be on whether the force used was reasonable given the facts and circumstances at the time of the seizure.
        </p>
      </div>

      <!-- RIGHT: Officer Takeaway -->
      <div class="col-md-4">
        <div class="border border-secondary-subtle rounded p-4 h-100">
          <h5 class="mb-2">Officer Takeaway</h5>
          <hr>
          <ul class="mb-0">
            <li><span class="text-primary">Must evaluate force based on what a reasonable officer would do under the same circumstances.</span></li>
            <li><span class="text-primary">May use force that is objectively reasonable - even in tense, split-second decisions.</span></li>
            <li><span class="text-danger">Do not rely on good intentions or personal justifications - reasonableness is judged by facts, not motives.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>




<div class="card border-primary-subtle mb-5">
  <div class="card-header d-flex justify-content-between align-items-center bg-primary-subtle">
    <div>
      <h4 class="mb-0">
        Tennessee v. Garner <small class="text-muted">471 U.S. 1 (1985)</small>
      </h4>
      <span class="badge bg-warning text-dark mt-2">Use of Force / Deadly Force</span>
    </div>
    <a href="https://supreme.justia.com/cases/federal/us/471/1/" target="_blank" class="btn btn-primary btn-sm">
      Full Case
    </a>
  </div>

  <div class="card-body">
    <div class="row">
      <!-- LEFT: Summary Sections -->
      <div class="col-md-8">
        <h5>Legal Issue</h5>
        <p class="text-muted mb-4">
          Can police constitutionally use deadly force to stop a fleeing felony suspect who appears unarmed and poses no immediate threat to others?
        </p>

        <h5>Facts</h5>
        <ul class="text-muted mb-4">
          <li>Memphis police responded to a burglary call and saw a suspect, Garner, fleeing from the scene.</li>
          <li>Officer ordered him to stop; Garner attempted to climb a fence to escape.</li>
          <li>Believing Garner was unarmed and not an immediate threat, the officer shot and killed him to prevent escape.</li>
          <li>The officer acted under a Tennessee law allowing deadly force against any fleeing felon.</li>
        </ul>

        <h5>Ruling</h5>
        <p class="text-muted mb-4">
          The U.S. Supreme Court ruled the use of deadly force was unconstitutional under the Fourth Amendment. Deadly force may only be used to prevent escape if the officer has <strong>probable cause to believe the suspect poses a significant threat of death or serious physical injury</strong> to the officer or others.
        </p>
      </div>

      <!-- RIGHT: Officer Takeaway -->
      <div class="col-md-4">
        <div class="border border-secondary-subtle rounded p-4 h-100">
          <h5 class="mb-2">Officer Takeaway</h5>
          <hr>
          <ul class="mb-0">
            <li><span class="text-danger">Do not use deadly force solely to stop a fleeing felon unless they pose a threat.</span></li>
            <li><span class="text-primary">Must have probable cause that the suspect poses a significant threat of serious injury or death.</span></li>
            <li><span class="text-primary">May only use deadly force when necessary and proportionate to the risk presented at the moment.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>



<div class="card border-primary-subtle mb-5">
  <div class="card-header d-flex justify-content-between align-items-center bg-primary-subtle">
    <div>
      <h4 class="mb-0">
        State v. White <small class="text-muted">135 Wn.2d 761 (1998)</small>
      </h4>
      <span class="badge bg-warning text-dark mt-2">Inventory Search / Vehicle Impound</span>
    </div>
    <a href="https://law.justia.com/cases/washington/supreme-court/1998/64973-1-1.html" target="_blank" class="btn btn-primary btn-sm">
      Full Case
    </a>
  </div>

  <div class="card-body">
    <div class="row">
      <!-- LEFT: Summary Sections -->
      <div class="col-md-8">
        <h5>Legal Issue</h5>
        <p class="text-muted mb-4">
          Does an inventory search of a locked trunk during a lawful impound violate Article I, Section 7 of the WA Constitution when there is no manifest necessity to open it?
        </p>

        <h5>Facts</h5>
        <ul class="text-muted mb-4">
          <li>White was stopped for a traffic infraction and arrested after giving a false name and being found to have multiple warrants.</li>
          <li>The vehicle was impounded and searched per department policy, which allowed searching trunks if accessible via latch or key.</li>
          <li>Officers found a trunk release inside the glove box and opened the locked trunk, discovering drugs and paraphernalia.</li>
        </ul>

        <h5>Ruling</h5>
        <p class="text-muted mb-4">
          The WA Supreme Court ruled that the search of the locked trunk was unconstitutional. Article I, Section 7 of the WA Constitution prohibits the warrantless search of a locked trunk during an inventory unless there is a <strong>manifest necessity</strong>. The presence of a release latch did not justify the intrusion.
        </p>
      </div>

      <!-- RIGHT: Officer Takeaway -->
      <div class="col-md-4">
        <div class="border border-secondary-subtle rounded p-4 h-100">
          <h5 class="mb-2">Officer Takeaway</h5>
          <hr>
          <ul class="mb-0">
            <li><span class="text-danger">Do not open locked trunks during inventory searches unless a manifest necessity exists.</span></li>
            <li><span class="text-primary">Must follow written department policy strictly, and ensure scope remains limited to safeguarding property.</span></li>
            <li><span class="text-danger">Trunk access via glove box release does not justify warrantless trunk entry without a clear safety or ownership need.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>






              <div class="card mb-4">
                <div class="card-header">
                  <strong>Search & Seizure</strong>
                </div>
                <table class="table table-hover table-striped">
                  <thead class="thead-dark">
                    <tr>
                      <th>Case</th>
                      <th>What It Allows Officers to Do</th>
                      <th>Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Arizona v. Gant (2009)</strong></td>
                      <td>Limits vehicle searches incident to arrest; allows only if arrestee can access vehicle or evidence is reasonably believed to be inside.</td>
                      <td><a class="btn btn-primary text-nowrap" href="#" target="_blank">View Case</a></td>
                    </tr>
                    <tr>
                      <td><strong>State v. Snapp (2012)</strong></td>
                      <td>Disallows broad vehicle searches post-arrest; reinforces WA&apos;s stronger privacy protections under state constitution.</td>
                      <td><a class="btn btn-primary text-nowrap" href="#" target="_blank">View Case</a></td>
                    </tr>
                    <tr>
                      <td><strong>State v. Ferrier (1998)</strong></td>
                      <td>Requires Ferrier warnings before entering a residence for consent-based searches: right to refuse, limit, and revoke consent.</td>
                      <td><a class="btn btn-primary text-nowrap" href="#" target="_blank">View Case</a></td>
                    </tr>
                    <tr>
                      <td><strong>Michigan v. Fisher (2009)</strong></td>
                      <td>Allows warrantless entry into a home if officers reasonably believe someone inside needs immediate medical aid.</td>
                      <td><a class="btn btn-primary text-nowrap" href="#" target="_blank">View Case</a></td>
                    </tr>
                    <tr>
                      <td><strong>State v. Leffler (2007)</strong></td>
                      <td>Allows entry without a warrant to prevent imminent destruction of evidence if based on articulable facts.</td>
                      <td><a class="btn btn-primary text-nowrap" href="#" target="_blank">View Case</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="card mb-4">
                <div class="card-header">
                  <strong>Plain View / Open View</strong>
                </div>
                <table class="table table-hover table-striped">
                  <thead class="thead-dark">
                    <tr>
                      <th>Case</th>
                      <th>What It Allows Officers to Do</th>
                      <th>Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Horton v. California (1990)</strong></td>
                      <td>Allows seizure of evidence in plain view if legally present and its criminal nature is immediately apparent.</td>
                      <td><a class="btn btn-primary text-nowrap" href="#" target="_blank">View Case</a></td>
                    </tr>
                    <tr>
                      <td><strong>State v. Seagull (1981)</strong></td>
                      <td>Allows observation and action on contraband visible from a lawful location (e.g., sidewalk, porch).</td>
                      <td><a class="btn btn-primary text-nowrap" href="#" target="_blank">View Case</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="card mb-4">
                <div class="card-header">
                  <strong>Community Caretaking</strong>
                </div>
                <table class="table table-hover table-striped">
                  <thead class="thead-dark">
                    <tr>
                      <th>Case</th>
                      <th>What It Allows Officers to Do</th>
                      <th>Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Cady v. Dombrowski (1973)</strong></td>
                      <td>Allows entry/search when acting to protect public safety (e.g., securing weapon in a vehicle), not for criminal evidence.</td>
                      <td><a class="btn btn-primary text-nowrap" href="#" target="_blank">View Case</a></td>
                    </tr>
                    <tr>
                      <td><strong>State v. Kinzy (2000)</strong></td>
                      <td>Allows caretaking actions in WA only when totally divorced from investigative motives; entry must be strictly to help.</td>
                      <td><a class="btn btn-primary text-nowrap" href="#" target="_blank">View Case</a></td>
                    </tr>
                    <tr>
                      <td><strong>State v. Duncan (2002)</strong></td>
                      <td>Allows stopping a vehicle under caretaking if the driver appears unwell or in need of help-no suspicion of crime needed.</td>
                      <td><a class="btn btn-primary text-nowrap" href="#" target="_blank">View Case</a></td>
                    </tr>
                    <tr>
                      <td><strong>State v. Sadler (2008)</strong></td>
                      <td>Allows warrantless home entry under caretaking when there&apos;s a legitimate concern for safety or medical emergency.</td>
                      <td><a class="btn btn-primary text-nowrap" href="#" target="_blank">View Case</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="card mb-4">
                <div class="card-header">
                  <strong>Use of Force</strong>
                </div>
                <table class="table table-hover table-striped">
                  <thead class="thead-dark">
                    <tr>
                      <th>Case</th>
                      <th>What It Allows Officers to Do</th>
                      <th>Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Graham v. Connor (1989)</strong></td>
                      <td>Establishes that force must be objectively reasonable based on totality of the circumstances, judged from the officer&apos;s POV at the time.</td>
                      <td><a class="btn btn-primary text-nowrap" href="#" target="_blank">View Case</a></td>
                    </tr>
                    <tr>
                      <td><strong>Tennessee v. Garner (1985)</strong></td>
                      <td>Allows deadly force on a fleeing suspect only if they pose an immediate threat of death or serious injury to others.</td>
                      <td><a class="btn btn-primary text-nowrap" href="#" target="_blank">View Case</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="card mb-4">
                <div class="card-header">
                  <strong>Inventory / Impound</strong>
                </div>
                <table class="table table-hover table-striped">
                  <thead class="thead-dark">
                    <tr>
                      <th>Case</th>
                      <th>What It Allows Officers to Do</th>
                      <th>Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>South Dakota v. Opperman (1976)</strong></td>
                      <td>Allows inventory search of lawfully impounded vehicles if done per policy and not as a pretext for investigation.</td>
                      <td><a class="btn btn-primary text-nowrap" href="#" target="_blank">View Case</a></td>
                    </tr>
                    <tr>
                      <td><strong>State v. White (1998)</strong></td>
                      <td>Allows inventory searches in WA only if conducted under written department policy without investigatory motive.</td>
                      <td><a class="btn btn-primary text-nowrap" href="#" target="_blank">View Case</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="card mb-4">
                <div class="card-header">
                  <strong>Miranda / Custody</strong>
                </div>
                <table class="table table-hover table-striped">
                  <thead class="thead-dark">
                    <tr>
                      <th>Case</th>
                      <th>What It Allows Officers to Do</th>
                      <th>Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Miranda v. Arizona (1966)</strong></td>
                      <td>Requires officers to give Miranda warnings before custodial interrogation; otherwise, statements are inadmissible.</td>
                      <td><a class="btn btn-primary text-nowrap" href="#" target="_blank">View Case</a></td>
                    </tr>
                    <tr>
                      <td><strong>State v. Heritage (2004)</strong></td>
                      <td>Requires Miranda for juveniles when in custody as judged from a juvenile&apos;s perspective; more protective standard than adults.</td>
                      <td><a class="btn btn-primary text-nowrap" href="#" target="_blank">View Case</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="card mb-4">
                <div class="card-header">
                  <strong>Sensory-Based PC</strong>
                </div>
                <table class="table table-hover table-striped">
                  <thead class="thead-dark">
                    <tr>
                      <th>Case</th>
                      <th>What It Allows Officers to Do</th>
                      <th>Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>State v. Grande (2008)<strong></td>
                      <td>Allows probable cause based on strong odor of marijuana when combined with context, officer training, and location.</td>
                      <td><a class="btn btn-primary text-nowrap" href="#" target="_blank">View Case</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>






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