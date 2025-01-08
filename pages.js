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
            
              <ul id=\"clearingCodes\" class=\"list-group list-group-flush\">
                
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
                  <div class="fw-bold">Subheading</div>
                  Content for list item
                </div>
                <span class="badge text-bg-primary rounded-pill">14</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Content for list item
                </div>
                <span class="badge text-bg-primary rounded-pill">14</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Content for list item
                </div>
                <span class="badge text-bg-primary rounded-pill">14</span>
              </li>
            </ol>
          </div>
        </div>
        
        
        
        
        `,
        "data":"{}"
       }
    ]
  }
  
  
]