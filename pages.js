const pages = [
  {
    "id":"1.0",
    "title": "Start",
    "description":"This is the start page.",
    "cards": [
      { 
        "id":"1.0.1", 
        "title": "Welcome to CallReady", 
        "description": "Created by M.Elliott - updated 1/05/25",
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
          <div class="card-header">Court Dates</div>
          <p class="card-text p-3 mb-3"><span class=\"text-warning\">"Dates may not reflect admin changes for holidays or special occasions."</span></p>
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
              <ol class="list-group list-group-numbered">
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Returns for Correction</div>
                    Blood kits and other evidence that belongs in a fridge are not stored in the lockers across the street. They are stored in the fridge acrose the street. The fridge is located through the MAIN entrance. (Not the door in the garage)
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
    "id": "3.0",
    "title": "Tips",
    "description": "This page serves as a quick reference for tips.",
    "cards": [
        {
            "id": "3.0.1",
            "title": "Tips",
            "description": "A Reference for tips. - updated 1/07/25",
            "content": `
          <div class="row">
            <div class="col">
              <ol class="list-group list-group-numbered">
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Know Your Sandbox</div>
                    Always differentiate between a Social Stop, Terry Stop, and actions requiring Probable Cause.
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Code-4 Scene</div>
                    A scene is never truly Code-4 until all involved parties have been properly identified and their names run.
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Priority Calls</div>
                    Ensure Priority 1 calls, including jail bookings, are fully resolved by the end of your shift.
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Serving Protection Orders</div>
                    Always verify the respondent&apos;s identity and check the service date of the order before leaving.
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Order Violation</div>
                    If a violator has two prior convictions, the violation elevates to a Class C Felony.
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Executing Warrants</div>
                    High-risk warrants require supervisor notification; confirm extradition before proceeding.
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Vehicle Recovery</div>
                    Always match plate and VIN before initiating any action on a stolen vehicle recovery.
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">DV Elements</div>
                    If a call has elements of Domestic Violence but isn&apos;t classified as DV, a DV supplement may not be required.
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Mental Health ITA</div>
                    Know the criteria: Danger to self, others, property, or gravely disabled.
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Burglary Investigation</div>
                    Establish containment and request backup resources (e.g., K9, Guardian One) if necessary.
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">DUI Stop</div>
                    Perform field sobriety tests using department-issued guidelines and document PC thoroughly.
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Traffic Stops</div>
                    Always plan your approach and check the plate and registered owner before initiating contact.
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">DOA Management</div>
                    Notify your supervisor if suspicious circumstances arise before contacting the Medical Examiner.
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Trespassing</div>
                    Ensure the property owner or keyholder wants to pursue trespassing action before proceeding.
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Retail Theft</div>
                    Always complete a Suspect Identification Form and Trespass Form when assisting loss prevention.
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Suicidal Subjects</div>
                    Build rapport with the subject using phrases like, "It seems like..." or "It sounds like..."
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Booking</div>
                    Remove firearms before entering the booking area and turn off body-worn cameras before proceeding.
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Incident Command</div>
                    Clearly define roles, including staging, containment, investigation, and communications teams.
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">K9 Announcements</div>
                    Log announcements in CAD every 5 minutes during a K9 search.
                  </div>
                </li>
              </ol>
            </div>
          </div>
        `,
            "data": "{}"
        }
    ]
}

  
  
]