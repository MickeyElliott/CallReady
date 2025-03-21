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
                
              
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Case</th>
                      <th scope="col">Summary</th>
                      <th scope="col">Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Terry v. Ohio, 392 U.S. 1 (1968)</th>
                      <td>Established that police can stop and frisk individuals based on reasonable suspicion of criminal activity.</td>
                      <td><a href="#">Case Details</a></td>
                    </tr>
                    <tr>
                      <th scope="row">Graham v. Connor, 490 U.S. 386 (1989)</th>
                      <td>Held that claims of excessive force by law enforcement should be analyzed under the Fourth Amendment's "objective reasonableness" standard.</td>
                      <td><a href="#">Case Details</a></td>
                    </tr>
                    <tr>
                      <th scope="row">Arizona v. Gant, 556 U.S. 332 (2009)</th>
                      <td>Limited the scope of vehicle searches incident to arrest, allowing them only if the arrestee is unsecured and within reaching distance of the vehicle or if it is reasonable to believe evidence of the offense might be found.</td>
                      <td><a href="#">Case Details</a></td>
                    </tr>
                    <tr>
                      <th scope="row">Tennessee v. Garner, 471 U.S. 1 (1985)</th>
                      <td>Ruled that deadly force may not be used against a fleeing suspect unless the officer has probable cause to believe the suspect poses a significant threat of death or serious physical injury to the officer or others.</td>
                      <td><a href="#">Case Details</a></td>
                    </tr>
                    <tr>
                      <th scope="row">State v. Ferrier, 136 Wn.2d 103 (1998)</th>
                      <td>Required that officers obtain informed consent before conducting a "knock and talk" search, including informing individuals of their right to refuse consent, limit the scope of the search, and withdraw consent at any time.</td>
                      <td><a href="#">Case Details</a></td>
                    </tr>
                    <tr>
                      <th scope="row">Brigham City v. Stuart, 547 U.S. 398 (2006)</th>
                      <td>Affirmed that police may enter a home without a warrant when they have an objectively reasonable basis to believe that an occupant is seriously injured or imminently threatened with such injury.</td>
                      <td><a href="#">Case Details</a></td>
                    </tr>
                    <tr>
                      <th scope="row">State v. Arreola, 176 Wn.2d 284 (2012)</th>
                      <td>Clarified the limitations on the scope of Terry stops in Washington State, emphasizing that extended detentions must be justified by evolving suspicion.</td>
                      <td><a href="#">Case Details</a></td>
                    </tr>
                    <tr>
                      <th scope="row">State v. Snapp, 174 Wn.2d 177 (2012)</th>
                      <td>Reinforced that Article I, Section 7 of the Washington State Constitution provides greater privacy protections than the Fourth Amendment, particularly concerning vehicle searches incident to arrest.</td>
                      <td><a href="#">Case Details</a></td>
                    </tr>
                    <tr>
                      <th scope="row">State v. Kinzy, 141 Wn.2d 373 (2000)</th>
                      <td>Addressed the community caretaking function of police, holding that such actions must be totally divorced from the detection, investigation, or acquisition of evidence relating to the violation of a criminal statute.</td>
                      <td><a href="#">Case Details</a></td>
                    </tr>
                    <tr>
                      <th scope="row">State v. Heritage, 152 Wn.2d 210 (2004)</th>
                      <td>Clarified the definition of "custody" in the context of juvenile interrogations, impacting when Miranda warnings are required.</td>
                      <td><a href="#">Case Details</a></td>
                    </tr>
                    <tr>
                      <th scope="row">XXXXXXXXXXXXXXXXXXX</th>
                      <td>XXXXXXXXXXXXXXXXXXX</td>
                      <td><a href="#">Case Details</a></td>
                    </tr>
                    <tr>
                      <th scope="row">XXXXXXXXXXXXXXXXXXX</th>
                      <td>XXXXXXXXXXXXXXXXXXX</td>
                      <td><a href="#">Case Details</a></td>
                    </tr>
                    <tr>
                      <th scope="row">XXXXXXXXXXXXXXXXXXX</th>
                      <td>XXXXXXXXXXXXXXXXXXX</td>
                      <td><a href="#">Case Details</a></td>
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