
/* This section handles dynamic page content functions */




function handleDynamicPageTriggers(container) {
    const observer = new MutationObserver((mutationsList) => {
        mutationsList.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === 1 && node.dataset && node.dataset.trigger) {
                    const trigger = node.dataset.trigger;
                    //console.log(`Triggered function: ${trigger}`);
                    if (typeof window[trigger] === "function") {
                        window[trigger]();
                    } else {
                        //console.warn(`Function ${trigger} is not defined.`);
                    }
                } else if (node.nodeType === 1) {
                    const triggers = node.querySelectorAll("[data-trigger]");
                    triggers.forEach((triggerNode) => {
                        const trigger = triggerNode.dataset.trigger;
                        //console.log(`Triggered function: ${trigger}`);
                        if (typeof window[trigger] === "function") {
                            window[trigger]();
                        } else {
                            //console.warn(`Function ${trigger} is not defined.`);
                        }
                    });
                }
            });
        });
    });

    observer.observe(container, { childList: true, subtree: true });
    console.log("Observer attached to container for dynamic content.");
}

// Example global functions to trigger
function refreshCourtDates() {
    //console.log("refreshCourtDates executed!");

    const cdTable = document.getElementById("courtDates");
    cdTable.innerHTML = `
            <li class=\"list-group-item d-flex justify-content-between\"><strong>In Custody</strong> ${scheduler.getDate("custody")}</li>
            <li class=\"list-group-item d-flex justify-content-between\"><strong>In Custody DUI</strong> ${scheduler.getDate("dui")}</li>
            <li class=\"list-group-item d-flex justify-content-between\"><strong>Criminal Citation</strong> ${scheduler.getDate("traffic")}</li>
            <li class=\"list-group-item d-flex justify-content-between\"><strong>Traffic Infracion</strong> ${scheduler.getDate("criminal")}</li>
        `;
}

function getIconDivByType(type) {
    const iconMap = {
      rcw: "bi-emoji-grimace",
      fwrc: "bi-buildings",
      traffic: "bi-stoplights",
      calltype: "bi-clipboard2-check",
      dir: "bi-journals"
    };
  
    const iconClass = iconMap[type.toLowerCase()] || "bi-circle";
  
    return `<div class="position-absolute mt-2"><i class="bi ${iconClass} text-secondary fs-3 me-3"></i></div>`;
  }
  
   

// Target container where dynamic HTML will be added
const rcwCards = document.getElementById('rcwCards');
handleDynamicPageTriggers(rcwCards);



/* END DYNAMIC PAGE CONTENT FUNCTION */




class DateScheduler {
    constructor() {
        this.judicialHours = {
            custody: "08:30",
            dui: "14:30"
        };
        this.timezone = "America/Los_Angeles"; // Correct IANA timezone for Pacific Time
    }

    // Initialize scheduler (can be used for additional setup in the future)
    init() {
        console.log("DateScheduler initialized with timezone:", this.timezone);
    }

    // Helper function to check if a given date is a judicial day (Monday-Friday)
    isJudicialDay(date) {
        const day = date.getDay(); // 0 = Sunday, 6 = Saturday
        return day >= 1 && day <= 5;
    }

    // Format date to "MM/DD/YYYY HH:mm"
    formatDateTime(date, time) {
        const options = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            timeZone: this.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone
        };
        const dateString = date.toLocaleDateString("en-US", options);
        return `${dateString} ${time}`;
    }

    // Main function to calculate court date
    calculate(type, currentDate = new Date()) {
        const resultDate = new Date(currentDate);

        switch (type.toLowerCase()) {
            case 'custody':
            case 'dui':
                // Move to the next judicial day
                do {
                    resultDate.setDate(resultDate.getDate() + 1);
                } while (!this.isJudicialDay(resultDate));
                return this.formatDateTime(resultDate, this.judicialHours[type.toLowerCase()]);

            case 'traffic':
                // Add 30 days for traffic infractions
                resultDate.setDate(resultDate.getDate() + 30);
                return this.formatDateTime(resultDate, "23:59"); // Default time

            case 'criminal':
                // Move to the second Tuesday from the current date
                let tuesdayCount = 0;
                while (tuesdayCount < 2) {
                    resultDate.setDate(resultDate.getDate() + 1);
                    if (resultDate.getDay() === 2) { // 2 = Tuesday
                        tuesdayCount++;
                    }
                }
                return this.formatDateTime(resultDate, "08:30");

            default:
                throw new Error("Invalid type. Valid types are 'custody', 'dui', 'traffic', or 'criminal'.");
        }
    }

    // Overloading the object for direct function call
    getDate(type, currentDate) {
        return this.calculate(type, currentDate);
    }
}

// Example Usage:
const scheduler = new DateScheduler();
scheduler.init();





// Use example: keyExists(obj,'notes')
// Will check if the key is in the object and if there is a value. 
function keyExists(obj, key) {
    return obj[key] && typeof obj[key] === "string" && obj[key].trim().length > 0;
}


function clearPages() {

    

    const rcwPages = rcwCards.querySelectorAll('.rcw-page');

    // Remove each element with the class "rcw-page"
    rcwPages.forEach(rcwPage => {
        rcwPage.remove();
    });
}





const directoryList = document.getElementById('directoryList');
directory.forEach((category, index) => {
    const contactItem = document.createElement('div');
    contactItem.classList.add('accordion-item');
    contactItem.innerHTML = `
        <h2 class="accordion-header " id="headingDir${category.id}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDir${category.id}">
                <span class="dir-num badge border border-secondary-subtle text-secondary fs-6">${category.id}</span>
                <span class="dir-title">${category.category}</span>
            </button>
        </h2>
        <div id="collapseDir${category.id}" class="accordion-collapse collapse">
            <div class="accordion-body p-0">
                <ul class="list-group list-group-flush">
                    ${category.contacts.map(item => `
                        <li class="list-group-item d-flex align-items-center border-0">
                            <input type="checkbox" id="cb-dir-${item.id}" data-dir='${JSON.stringify(item)}' class="form-check-input me-2 dir-checkbox" />
                            <label for="cb-dir-${item.id}" class="form-check-label fw-lighter">${item.name}</label>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
    directoryList.appendChild(contactItem);

});



const pageList = document.getElementById('pageList');
pages.forEach((page, index) => {
    const navItem = document.createElement('div');
    //console.log(page);
    navItem.classList.add('accordion-item');
    navItem.innerHTML = `
        <h2 class="accordion-header" id="heading-page-${page.id}">
            <button class="accordion-button-page" data-page="${page.id}">
                <span class="nav-item-num badge border border-secondary-subtle text-secondary fs-6">${page.id}</span>
                <span class="nav-item-title">${page.title}</span>
            </button>
        </h2>
    `;
    pageList.appendChild(navItem);

});



// Populate RCW Codes in the Sidebar
const rcwList = document.getElementById('rcwList');
codes.chapters.forEach((chapter, index) => {
    const chapterItem = document.createElement('div');
    chapterItem.classList.add('accordion-item');

    chapterItem.innerHTML = `
        <h2 class="accordion-header" id="headingRCW${index}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseRCW${index}">
                <span class="rcw-num badge border border-secondary-subtle text-secondary fs-6">${chapter.id}</span>
                <span class="rcw-title">${chapter.title}</span>
            </button>
        </h2>
        <div id="collapseRCW${index}" class="accordion-collapse collapse">
            <div class="accordion-body p-0">
                <ul class="list-group list-group-flush">
                    ${chapter.items.map(item => `
                        <li id="li-${item.id}" class="list-group-item d-flex align-items-center border-0">
                            <input type="checkbox" id="${item.id}" data-rcw='${JSON.stringify(item)}' class="form-check-input me-2 rcw-checkbox" />
                            <label for="${item.id}" class="form-check-label fw-lighter">${item.title}</label>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
    rcwList.appendChild(chapterItem);
});

const rcwTrafficList = document.getElementById('rcwTrafficList');
trafficCodes.chapters.forEach((chapter, index) => {
    const chapterItem = document.createElement('div');
    chapterItem.classList.add('accordion-item');

    chapterItem.innerHTML = `
        <h2 class="accordion-header" id="headingRCW${index}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTrafficRCW${index}">
                <span class="rcw-num badge border border-secondary-subtle text-secondary fs-6">${chapter.id}</span>
                <span class="rcw-title">${chapter.title}</span>
            </button>
        </h2>
        <div id="collapseTrafficRCW${index}" class="accordion-collapse collapse">
            <div class="accordion-body p-0">
                <ul class="list-group list-group-flush">
                    ${chapter.items.map(item => `
                        <li id="li-${item.id}" class="list-group-item d-flex align-items-center border-0">
                            <input type="checkbox" id="${item.id}" data-traffic='${JSON.stringify(item)}' class="form-check-input me-2 rcwtraffic-checkbox" />
                            <label for="${item.id}" class="form-check-label fw-lighter">${item.title}</label>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
    rcwTrafficList.appendChild(chapterItem);
});

// Populate FWRC Codes in the Sidebar
const fwrcList = document.getElementById('fwrcList');
fwrcData.chapters.forEach((chapter, index) => {
    const chapterItem = document.createElement('div');
    chapterItem.classList.add('accordion-item');

    chapterItem.innerHTML = `
        <h2 class="accordion-header " id="headingFWRC${index}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFWRC${index}">
                <span class="rcw-num badge border border-secondary-subtle text-secondary fs-6">${chapter.id}</span>
                <span class="rcw-title">${chapter.title}</span>
            </button>
        </h2>
        <div id="collapseFWRC${index}" class="accordion-collapse collapse">
            <div class="accordion-body p-0">
                <ul class="list-group list-group-flush">
                    ${chapter.items.map(item => `
                        <li id="li-${item.id}" class="list-group-item d-flex align-items-center border-0">
                            <input type="checkbox" id="${item.id}" data-fwrc='${JSON.stringify(item)}' class="form-check-input me-2 fwrc-checkbox" />
                            <label for="${item.id}" class="form-check-label fw-lighter">${item.title}</label>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
    fwrcList.appendChild(chapterItem);
});

// Populate FWRC Codes in the Sidebar
const callTypeList = document.getElementById('callTypeList');
callTypeData.chapters.forEach((chapter, index) => {
    const chapterItem = document.createElement('div');
    chapterItem.classList.add('accordion-item');

    chapterItem.innerHTML = `
        <h2 class="accordion-header" id="headingCallTypes${index}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCallTypes${index}">
                <span class="rcw-num  badge border border-secondary-subtle text-secondary fs-6">${chapter.id}</span>
                <span class="rcw-title">${chapter.title}</span>
            </button>
        </h2>
        <div id="collapseCallTypes${index}" class="accordion-collapse collapse">
            <div class="accordion-body p-0">
                <ul class="list-group list-group-flush">
                    ${chapter.items.map(item => `
                        <li id="li-${item.id}" class="list-group-item d-flex align-items-center border-0">
                            <input type="checkbox" id="${item.id}" data-calltype='${JSON.stringify(item)}' class="form-check-input me-2 calltype-checkbox" />
                            <label for="${item.id}" class="form-check-label fw-lighter">${item.title}</label>
                        </li>


                    `).join('')}
                </ul>
            </div>
        </div>
    `;
    callTypeList.appendChild(chapterItem);
});





// Global event listener for checkbox change events to manage cards and header styling
document.addEventListener('change', (event) => {
    const checkbox = event.target;

    // Check if the change event is from a relevant checkbox
    if (checkbox.classList.contains('rcw-checkbox') ||
        checkbox.classList.contains('rcwtraffic-checkbox') ||
        checkbox.classList.contains('fwrc-checkbox') ||
        checkbox.classList.contains('calltype-checkbox') ||
        checkbox.classList.contains('dir-checkbox')
    ) {

        // Determine data attribute based on checkbox class
        let dataType;

        if (checkbox.classList.contains('rcw-checkbox')) {
            dataType = 'rcw';
        } else if (checkbox.classList.contains('rcwtraffic-checkbox')) {
            dataType = 'traffic';
        } else if (checkbox.classList.contains('fwrc-checkbox')) {
            dataType = 'fwrc';
        } else if (checkbox.classList.contains('calltype-checkbox')) {
            dataType = 'calltype';
        } else if (checkbox.classList.contains('dir-checkbox')) {
            dataType = 'dir';
        } else {
            dataType = 'calltype';
        }

        const dataAttr = checkbox.getAttribute(`data-${dataType}`);
        const data = JSON.parse(dataAttr);


        //console.log('******************** dataType');
        //console.log(dataType);


        // Add or remove card based on checkbox state
        switch (dataType) {
            case 'rcw':
            case 'fwrc':
            case 'traffic':
            case 'calltype':
                checkbox.checked ? addCodeCard(data,dataType) : removeCodeCard(data.id);
                break;
            case 'dir':
                checkbox.checked ? addDirCard(data) : removeDirCard(data.id);
                break;
            default:
                console.log('No DataType specified.');
                break;
        }




        // Update accordion header styling based on any checked items in the section
        const accordionBody = checkbox.closest('.accordion-collapse');
        const accordionHeader = accordionBody.previousElementSibling;
        const anyChecked = Array.from(accordionBody.querySelectorAll('input[type="checkbox"]')).some(cb => cb.checked);

        // Toggle styling for accordion header
        accordionHeader.classList.toggle('checked-header', anyChecked);
    }
});


// Event listener for list item click to toggle checkbox state
document.querySelectorAll('.list-group-item').forEach(item => {
    item.addEventListener('click', (event) => {
        const checkbox = item.querySelector('input[type="checkbox"]');
        const label = item.querySelector('label');

        // Toggle checkbox only if click is outside both the checkbox and its label
        if (event.target !== checkbox && event.target !== label) {
            checkbox.checked = !checkbox.checked;
            checkbox.dispatchEvent(new Event('change', { bubbles: true }));
        }
    });
});


document.getElementById('clearSelections').addEventListener('click', function () {
    // Uncheck all checkboxes
    document.querySelectorAll('.list-group-item input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
        checkbox.dispatchEvent(new Event('change', { bubbles: true })); // Trigger 'change' event for each checkbox
    });

    // Clear all cards

    rcwCards.innerHTML = '';
});





function parseDefinitions(item) {
    // Check if 'definition' exists and is an array
    var str = '';
    if (item.definition && Array.isArray(item.definition)) {
        // Begin list group container
        str += `<div class="list-group">`;

        item.definition.forEach(def => {
            // Create each list item with index as a placeholder for icon
            console.log(def);

            const href = (def.hasOwnProperty("href")) ? def.href : "#";
            const isLink = (href !== '#') ? true : false;

            str += `<a href="${href}" class="btn-jump list-group-item list-group-item-action d-flex gap-3 py-3 ${(isLink) ? "text-bg-primary" : ""}">`;
            str += `<div class="rounded-circle list-bullet flex-shrink-0 d-flex align-items-center justify-content-center ${(isLink) ? "bg-primary-subtle" : "bg-secondary"}">${def.index}</div>`;
            str += `<div class="d-flex gap-2 w-100 justify-content-between">`;

            // Display the main content with indentation
            str += `<div>`;
            str += `<p class="mb-0 opacity-75 definition-main">${def.main}</p>`;

            // Check if there are subsections and add them as a nested list
            if (def.subSections && Array.isArray(def.subSections) && def.subSections.length > 0) {
                str += `<ul class="list-unstyled mt-2">`; // Indent the list for subsections
                def.subSections.forEach(subSec => {
                    str += `<li class="opacity-75">${wrapAlphabeticalTags(subSec)}</li>`;
                });
                str += `</ul>`;
            }



            str += `</div>`;
            str += `</div>`;
            if (isLink) {
                str += `<i class="bi bi-caret-right-fill float-end"></i>`;
            }
            str += `</a>`;
        });

        // Close list group container
        str += `</div>`;
        return str;
    } else {
        console.warn("No valid definitions found for item:", item);
        return str;
    }
}





var procedures = {
    facePage: {
        title: 'Spillman Face Page',
        description: 'A face page is required when a case number is created or a crime has occurred. Another instance that may require a facepage is when something of importance needs to be documented. I call this a CYA (Cover your ass) report.',
        link: ''
    },
    witnessStatements: {
        title: 'Witness Statements',
        description: 'Witness statement forms are most necessary on felony related crimes. ',
        link: ''
    },
    dvSupplementalForm: {
        title: 'DV Supplemental Form',
        description: 'All DV cases involving a crime require a DV Sup Form.',
        link: ''
    },
    strangulationForm: {
        title: 'Strangulation Form',
        description: 'Any time someone says they were strangled, a Strangulation Form is required.',
        link: ''
    },
    fireDispatch: {
        title: 'Dispatch Fire',
        description: 'Fire dept. cannot arrive on scene until Dispatch knows the scene is Code-4. You can ask Dispatch to stage fire if you know someone will need them.',
        link: ''
    },
    IIICheck: {
        title: 'III Check',
        description: 'On the 3rd DV, DUI, Order Violation, or Assault Charge, a Misdemeanor becomes a FELONY. Call records and ask them to perform a III Check on the suspect.',
        link: ''
    },
    bookForDestruction: {
        title: 'Book for Destruction',
        description: 'Package and submit to evidence departmemnt for destruction.',
        link: ''
    },
    SFST: {
        title: 'Field Sobriety Test',
        description: 'Done from department issued SFST card.',
        link: ''
    },
    BloodWarrant: {
        title: 'Blood Warrant',
        description: 'Warrant must be approved before blood draw from hospital.',
        link: ''
    },
    EvidenceTow: {
        title: 'Evidence Tow',
        description: 'MV Towing - Will tow to FWPD. Search warrant required.',
        link: ''
    },
    Code4: {
        title: 'Code-4',
        description: 'Code-4 after ensuring you know who you&apos;re dealing with. Log ID first.',
        link: ''
    },
    HighRiskStop: {
        title: 'High-Risk Stop',
        description: 'Code 1 or 2. Find Cover, Bring suspect to \"The Known\". Slow things down.',
        link: ''
    }


}


function wrapAlphabeticalTags(input) {
    if (!input) return input; // Return unchanged if input is empty or undefined.

    return input.replace(
        /^(\((?:[a-z]+|i{1,3}|iv|v|vi{0,3}|ix|x{0,3})\))\s*(.*)?$/i,
        (match, tag, text) => 
            `<strong class="text-primary float-start ps-2 pe-1">${tag}</strong>` +
            (text ? `<p class="ms-p mb-0">${text}</p>` : "")
    ).replace(/^([^<].*)$/, `<i class="bi bi-caret-right-fill text-primary float-start ps-2 pe-1"></i> <p class="ms-p mb-0">$1</p>`);
}



function offenseColor(offense) {
    var color = 'secondary-subtle';
    switch (offense) {
        case 'Class A Felony':
        case 'Class B Felony':
        case 'Class C Felony':
        case 'Felony':
            color = 'danger';
            break;
        case 'Gross Misdemeanor':
            color = 'warning';
            break;
        case 'Misdemeanor':
        case 'Traffic Infraction':
        case 'Infraction':
            color = 'secondary';
            break;
        default:
            color = 'secondary-subtle';
            break;
    }
    return color;
}


// Helper Functions
function generateSection(title, items, formatter, listClass = 'list-group list-group-flush') {
    if (!items || items.length === 0) { return ''; }


    var data = items.map(formatter).join('');

    if (!data || data.length === 0) { return ''; }

    return `
        <h5 class="mb-3">${title}</h5>
        <ul class="${listClass} mb-4">
            ${data}
        </ul>`;
}

function convertRCWsToLinks(text) {
    // Only match RCWs starting with 9., 9A., or 46.
    const rcwPattern = /\b(9A|9|46|10|13|6|26)\.\d{1,3}(?:\.\d{1,3})?\b/gi;
  
    return text.replace(rcwPattern, (match) => {
      const url = `https://apps.leg.wa.gov/RCW/default.aspx?cite=${match}`;
      return `<a href="${url}" clas="btn btn-link" target="_blank" rel="noopener noreferrer">${match}</a>`;
    });
  }
  

function formatListItem(item) {
    var linked = convertRCWsToLinks(item);
    return `<li class="list-group-item">${linked}</li>`;
}

function formatProcedure(procedureId, index) {
    console.log('*******formatProcedure');
    console.log(procedureId);
    if (procedureId !== '') {
        var procedure = procedures[procedureId];
        if (procedure) {
            return `
                <li class="list-group-item" data-bs-toggle="collapse" data-bs-target="#collapse-relatedproc-${index}">
                    ${procedure.title}
                    <div class="collapse" id="collapse-relatedproc-${index}">
                        <div class="card card-body border-0">
                            ${procedure.description}
                        </div>
                    </div>
                </li>`;
        } else {
            return `<li class="list-group-item">${procedureId}</li>`;
        }
    }

}

// Function to add a card for RCW or FWRC
function addCodeCard(data, dataType) {
    //console.log('data addCodeCard ********************************');
    //console.log(data);

    clearPages();

    const card = document.createElement('div');
    card.classList.add('col-12', 'rcw-card', 'mb-3');
    card.setAttribute('data-id', data.id);

    var cardContent = `
                <div class="card container border-1 border-${offenseColor(data.offense)} shadow-sm rounded-4">
                    <div class="row">
            `;

    cardContent += `
                        <!-- Left Column -->
                        <div class="col">
                        ${getIconDivByType(dataType)}
                            <div class="card-body p-5">
                                ${data.offense ? `<span class="offense-badge badge text-bg-${offenseColor(data.offense)} float-end"> ${data.offense} </span>` : ''}
                                <h4 class="mb-3">
                                    <a href="${data.link}" target="_blank" class="link-danger">${data.id}</a> - ${data.title}
                                </h4>
                                <p class="lead mb-5">
                                    ${data.description || `<a href="${data.link}" target="_blank" class="link-danger">${data.link}</a>`}
                                </p>
                                ${parseDefinitions(data) || 'No description available.'}
                            </div>
                        </div>
            `;
    var elemetsOfPC = generateSection('Elements of PC', data.elementsOfPC, formatListItem);
    var reminders = generateSection('Reminders', data.relatedProcedures, formatProcedure);
    var questions = generateSection('Questions', data.questions, formatListItem, 'list-unstyled');
    var relatedCodes = generateSection('Related Codes', data.relatedCodes, formatListItem);


    if (elemetsOfPC !== '' || reminders !== '' || questions !== '' || relatedCodes !== '') {
        cardContent += `
                        <!-- Right Column -->
                        <div class="col-4 rounded-end-4 bg-light-subtle">
                            <div class="card-body p-4">
                                ${elemetsOfPC}
                                ${reminders}
                                ${questions}
                                ${relatedCodes}
                            </div>
                        </div>
            `;
    }


    cardContent += `
                    </div>
                </div>
            `;



    // Assign HTML to the card element
    card.innerHTML = cardContent;

    rcwCards.appendChild(card);


    var test = document.querySelector(`[data-id="${data.id}"]`);
    test.scrollIntoView({ behavior: 'smooth' });


}





// Function to remove a card by ID
function removeCodeCard(id) {
    const card = document.querySelector(`.rcw-card[data-id="${id}"]`);
    if (card) card.remove();
}


// Function to add a card for RCW or FWRC
function addDirCard(data) {
    //console.log('data ********************************');
    //console.log(data);

    clearPages();

    const card = document.createElement('div');
    card.classList.add('col-12', 'rcw-card', 'mb-3');
    card.setAttribute('data-id', data.id);

    card.innerHTML = `
                <div class="card container border-1 border-secondary-subtle shadow-sm rounded-4">
                    <div class="row">
                        <div class="col">
                            <div class="card-body">
                                <p class="lead ${(keyExists(data, 'notes')) ? 'mb-3' : 'mb-0'} fw-bold text-start">${data.name || 'No name available.'}</p>
                                ${(keyExists(data, 'notes')) ? '<p class=\"bg-light-subtle mb-0 p-3 rounded\"">' + data.notes + '</p>' : ''}
                            </div>
                        </div>
                        <div class="col rounded-end-4 ">
                            <div class="card-body">
                                <p class="lead mb-0 text-end">${data.phone || 'No name available.'}</p>                                
                            </div>
                        </div>
                    </div>
                </div>
            `;
    rcwCards.appendChild(card);
}

// Function to remove a card by ID
function removeDirCard(id) {
    const card = document.querySelector(`.rcw-card[data-id="${id}"]`);
    if (card) card.remove();
}




const themeToggle = document.getElementById('themeToggle');
const themeLabel = document.querySelector('.form-check-label');

// Initialize the label based on the starting mode
themeLabel.innerHTML = themeToggle.checked ? '<i class="bi bi-brightness-high"></i>' : '<i class="bi bi-moon-stars"></i>';

themeToggle.addEventListener('change', () => {
    const newTheme = themeToggle.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-bs-theme', newTheme);
    themeLabel.innerHTML = newTheme === 'light' ? '<i class="bi bi-moon-stars"></i>' : '<i class="bi bi-brightness-high"></i>';
});


document.querySelectorAll('.accordion-button-page').forEach(button => {
    button.addEventListener('click', (event) => {

        const btn = event.target.closest(".accordion-button-page");
        const pageid = btn.dataset.page;

        // Find the page by id
        const page = pages.find(p => p.id === pageid);
        if (page) {
            //console.log(page);
            const cardData = page.cards[0].data; // Assuming you want the `data` from the first card
            addPage(page, cardData);
        } else {
            console.error("Page not found!");
        }

    });
});


// Function to add a card for RCW or FWRC
function addPage(data, cardData) {
    //console.log('cardData ********************************');
    //console.log(cardData);

    // Clear all cards
    document.getElementById('clearSelections').click();
    rcwCards.innerHTML = '';


    const page = document.createElement('div');
    page.classList.add('row', 'rcw-page', 'mb-3');
    page.setAttribute('data-id', data.id);



    if (Array.isArray(data.cards)) {
        data.cards.forEach(item => {
            var card = document.createElement('div');
            card.classList.add('col-12', 'rcw-card', 'mb-3');
            card.setAttribute('data-id', item.id);
            card.innerHTML = `
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="p-4">
                                    <h2 class="display-6 mb-0">${item.title || ''}</h2>
                                    <p class="lead mb-5">${item.description || ''}</p>
                                    <div>${item.content}</div>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                    `;
            page.appendChild(card);
        });
    } else {
        console.error('Data cards is not an array:', data.cards);
    }


    rcwCards.appendChild(page);




}

const RandomToast = {
    data: [],

    init(dataArray) {
        this.data = dataArray;
    },

    getRandomItem() {
        if (!this.data || this.data.length === 0) {
            console.warn("Data array is empty.");
            return null;
        }
        const randomIndex = Math.floor(Math.random() * this.data.length);
        return this.data[randomIndex];
    },

    showToast() {
        const item = this.getRandomItem();
        if (!item) return;

        const toastId = `toast-${Date.now()}`;

        // Create toast element
        const toast = document.createElement("div");
        toast.className = "toast align-items-center text-bg-primary border-0 shadow-sm show"; // 'show' class ensures it appears immediately
        toast.id = toastId;
        toast.role = "alert";

        toast.innerHTML = `
                        <div class="toast-header">
                            <i class="bi bi-info-circle me-2"></i>
                            <strong class="me-auto">TIP ${"#" + item.index || "No message provided"}</strong>
                            <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
                        </div>
                        <div class="toast-body">
                            ${item.main || "No message provided"}
                        </div>
                `;

        // Append to toast container
        const toastContainer = document.getElementById("toast-container");
        toastContainer.appendChild(toast);

        // Automatically remove toast after 5 seconds
        setTimeout(() => {
            const bootstrapToast = bootstrap.Toast.getInstance(toast) || new bootstrap.Toast(toast);
            bootstrapToast.hide();
            toast.addEventListener("hidden.bs.toast", () => {
                toast.remove();
            });
        }, 8000);
    },

    getTipsArray() {

        try {
            // Tips are stored in the first element of CallTypes data.
            var d = callTypeData.chapters[0].items[0].definition;
            return d;
        } catch (e) {
            console.warn(e.message);
        }


        // Map the list items into an array of objects
        return [{ "index": "1", "main": "No tips yet." }];
    },
};

document.addEventListener("DOMContentLoaded", () => {
    // Delegate click event to dynamically created buttons
    document.body.addEventListener("click", function (event) {
        // Find the nearest parent element with the class "btn-jump"
        const btnJump = event.target.closest(".btn-jump");

        if (btnJump) {
            event.preventDefault(); // Prevent default anchor behavior

            const targetId = btnJump.getAttribute("href").substring(1); // Get the ID from the href (without the #)
            const targetElement = document.getElementById(targetId); // Find the element with the matching ID

            //console.log(`Target ID: ${targetId}`); // Log the target ID for debugging

            if (targetElement) {
                targetElement.click(); // Trigger a click on the target element
            }
        }
    });

    // Load the start page on page ready
    document.querySelector('[data-page="1.0"]')?.click();

    var tips = RandomToast.getTipsArray();
        //console.log(tips);
        if (tips) {
            RandomToast.init(tips);
            RandomToast.showToast();
    }

    // Searching Model Results
    try {

        

        function normalizeSearchModel(sourceArray, typeLabel) {
            return sourceArray.map(item => ({
              id: item.id,
              title: item.title,
              description: item.description,
              elementsOfPC: item.elementsOfPC || [],
              questions: item.questions || [],
              type: typeLabel // "RCW" or "Call"
            }));
          }

        // Extract searchable models. 
        function getAllModelsFromChapters(chapters) {
            return chapters.flatMap(ch => ch.items || []);
          }
          const allCodeItems = getAllModelsFromChapters(codes.chapters);
          const allCallTypeItems = getAllModelsFromChapters(callTypeData.chapters);
          const allTrafficCodeItems = getAllModelsFromChapters(trafficCodes.chapters);
          const allFWRCItems = getAllModelsFromChapters(fwrcData.chapters);
          
          
        

        const combinedData = [
            ...normalizeSearchModel(allCodeItems, "RCW"),
            ...normalizeSearchModel(allCallTypeItems, "Call"),
            ...normalizeSearchModel(allTrafficCodeItems, "Traffic"),
            ...normalizeSearchModel(allFWRCItems, "FWRC")
          ];
        

        if (typeof MiniSearch !== "undefined") {
    
            const miniSearch = new MiniSearch({
                fields: ['id', 'title', 'description', 'elementsOfPC', 'questions'],
                storeFields: ['id', 'title', 'description', 'type'],
                searchOptions: {
                  prefix: true,
                  fuzzy: 0.2
                }
              });
              
              miniSearch.addAll(combinedData);

      
            // Safe DOM references
            const srcinput = document.getElementById("search-input");
            const resultsDiv = document.getElementById("search-results");
      
            if (srcinput && resultsDiv) {
                srcinput.addEventListener("input", () => {
                const query = srcinput.value.trim();
                const results = query ? miniSearch.search(query) : [];
      
                resultsDiv.innerHTML = results.length
                  ? results.map(result => `
                      <a href="#li-${result.id}" class="btn-jump list-group-item list-group-item-action">
                            <span class="badge bg-secondary">${result.type}</span> <strong>${result.title}</strong><br>
                            <small class="text-muted">${result.description}</small>
                        </a>
                    `).join('')
                  : '<div class="text-muted">No results found.</div>';
              });
            } else {
              console.warn("Search input or results container not found in DOM.");
            }
    
        } else {
            console.warn("MiniSearch is not loaded.");
        }

        const searchModal = document.getElementById("modal-search");
        const searchInput = document.getElementById("search-input");
        if (searchModal && searchInput) {
            searchModal.addEventListener("shown.bs.modal", function () {
                setTimeout(() => searchInput.focus(), 100); // short delay for animation
            });
        }
          
    } catch (err) {
          console.error("MiniSearch error:", err);
    }

});





