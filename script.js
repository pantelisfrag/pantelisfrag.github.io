// Συναρτήσεις για εμφάνιση/απόκρυψη πλευρικών μενού
function showSidebarSection(sectionId) {
  // Απόκρυψη όλων των πλευρικών μενού
  document.querySelectorAll('.sidebar-section').forEach(section => {
    section.classList.add('hidden');
  });

  // Εμφάνιση του επιλεγμένου πλευρικού μενού
  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.classList.remove('hidden');
  }
}

function showContentSection(sectionId) {
  // Hide all content sections
  document.querySelectorAll('.content-section').forEach(section => {
    section.classList.add('hidden');
    section.classList.remove('active');
  });

  // Show the selected content section
  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.classList.remove('hidden');
    selectedSection.classList.add('active');
  }
}



/*
###################################################
##                      BIO                      ##
###################################################
*/
// Συνάρτηση για εμφάνιση διαφορετικών τμημάτων της βιογραφίας
function loadBioSection(section) {
  const content = document.getElementById('content');
  if (content) {
    switch (section) {
      case 'early-life':
        content.innerHTML = `
          <h2>Πρώτα Χρόνια</h2>
          <p>Ο [Όνομα Ζωγράφου] γεννήθηκε το [έτος] στο [τόπο]. Από νεαρή ηλικία έδειξε ενδιαφέρον για την τέχνη...</p>
        `;
        break;
      case 'career':
        content.innerHTML = `
          <h2>Καριέρα</h2>
          <p>Η καριέρα του [Όνομα Ζωγράφου] ξεκίνησε το [έτος] με...</p>
        `;
        break;
      case 'legacy':
        content.innerHTML = `
          <h2>Κληρονομιά</h2>
          <p>Η κληρονομιά του [Όνομα Ζωγράφου] περιλαμβάνει...</p>
        `;
        break;
      default:
        content.innerHTML = `<p>Δεν υπάρχει διαθέσιμο περιεχόμενο.</p>`;
    }
  }
}


/*
###################################################
##                   PAINTINGS                   ##
###################################################
*/
function loadPaintingsSection(section) {
  const content = document.getElementById('content');
  if (!content) {
    console.error("Element with ID 'content' not found.");
    return;
  }

  console.log(`Loading section: ${section}`);

  switch (section) {
    case 'blue-period':
      content.innerHTML = `
        <h2>Μπλε Περίοδος</h2>
        <p>Η Μπλε Περίοδος του [Όνομα Ζωγράφου] χαρακτηρίζεται από...</p>
      `;
      break;
    case 'pink-period':
      content.innerHTML = `
        <h2>Ροζ Περίοδος</h2>
        <p>Η Ροζ Περίοδος του [Όνομα Ζωγράφου] χαρακτηρίζεται από...</p>
      `;
      break;
    case 'cubism':
      content.innerHTML = `
        <h2>Κυβισμός</h2>
        <p>Ο Κυβισμός του [Όνομα Ζωγράφου] χαρακτηρίζεται από...</p>
      `;
      break;
    default:
      content.innerHTML = `<p>Δεν υπάρχει διαθέσιμο περιεχόμενο.</p>`;
  }

  console.log("Content updated successfully.");
}


/*
###################################################
##                   ΕΚΘΕΣΕΙΣ                    ##
###################################################
*/
// Συνάρτηση για εμφάνιση διαφορετικών τμημάτων των εκθέσεων
function loadExhibitionsSection(section) {
  // Καθαρισμός του content πριν τη φόρτωση νέου περιεχομένου
  //document.getElementById('content').innerHTML = '';

  const content = document.getElementById('content');
  if (content) {
    switch (section) {
      case 'exhibition-1':
        content.innerHTML = `
          <h2>Εκθεση 1</h2>
          <p>Η Εκθεση 1 πραγματοποιήθηκε το [έτος] στο [τόπο]. Περιλάμβανε έργα όπως...</p>
        `;
        break;
      case 'exhibition-2':
        content.innerHTML = `
          <h2>Εκθεση 2</h2>
          <p>Η Εκθεση 2 πραγματοποιήθηκε το [έτος] στο [τόπο]. Περιλάμβανε έργα όπως...</p>
        `;
        break;
      case 'exhibition-3':
        content.innerHTML = `
          <h2>Εκθεση 3</h2>
          <p>Η Εκθεση 3 πραγματοποιήθηκε το [έτος] στο [τόπο]. Περιλάμβανε έργα όπως...</p>
        `;
        break;
      default:
        content.innerHTML = `<p>Δεν υπάρχει διαθέσιμο περιεχόμενο.</p>`;
    }
  }
}

/*
###################################################
##                   ΣΥΝΔΕΣΜΟΙ                    ##
###################################################
*/
// Συνάρτηση για εμφάνιση διαφορετικών τμημάτων των εκθέσεων
function loadLinkSection(section) {
  // Καθαρισμός του content πριν τη φόρτωση νέου περιεχομένου
  //document.getElementById('content').innerHTML = '';

  const content = document.getElementById('content');
  if (content) {
    switch (section) {
      case 'link-1':
        content.innerHTML = `
          <h2>Συνδεσμος 1</h2>
          <p>Ο συνδεσμος 1 ειναι [συνδεσμος]</p>
        `;
        break;
      case 'link-2':
        content.innerHTML = `
          <h2>Συνδεσμος 2</h2>
          <p>Ο συνδεσμος 2 ειναι [συνδεσμος]</p>
        `;
        break;
      case 'link-3':
        content.innerHTML = `
          <h2>Συνδεσμος 3</h2>
          <p>Ο συνδεσμος 3 ειναι [συνδεσμος]</p>
        `;
        break;
      default:
        content.innerHTML = `<p>Δεν υπάρχει διαθέσιμο περιεχόμενο.</p>`;
    }
  }
}

/*
###################################################
##              EVENT LISTENER BIO               ##
###################################################
*/
// Εκτέλεση συναρτήσεων όταν γίνεται κλικ στα links του κεντρικού μενού

document.getElementById('bio-link').addEventListener('click', () => {
  showSidebarSection('bio-sidebar');
  showContentSection('bio-content');
});

document.getElementById('bio-early-life').addEventListener('click', () => {
  loadBioSection('early-life');
});

document.getElementById('bio-career').addEventListener('click', () => {
  loadBioSection('career');
});

document.getElementById('bio-legacy').addEventListener('click', () => {
  loadBioSection('legacy');
});

/*
###################################################
##             EVENT LISTENER PAINTINGS          ##
###################################################
*/
document.getElementById('paintings-link').addEventListener('click', () => {
  showSidebarSection('paintings-sidebar');
  //showContentSection('blue-period-paintings');
});

document.getElementById('blue-period')?.addEventListener('click', () => {
  showContentSection('blue-period-paintings');
});

document.getElementById('pink-period')?.addEventListener('click', () => {
  showContentSection('pink-period-paintings');
});

document.getElementById('cubism')?.addEventListener('click', () => {
  showContentSection('cubism-paintings');
});

/*
###################################################
##           EVENT LISTENER EXHIBITIONS          ##
###################################################
*/
document.getElementById('exhibitions-link').addEventListener('click', () => {
  showSidebarSection('exhibition-sidebar');
  showContentSection('exhibitions-content');
});


document.getElementById('exhibition-1')?.addEventListener('click', () => {
  const url = 'exhibitions-1.json';
  //ΧΡΗΣΗ FETCH ΓΙΑ ΦΟΡΤΩΣΗ ΤΟΥ JSON ΑΡΧΕΙΟΥ
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load exhibitions');
      }
      return response.json();
    })
    .then(data => {
      const exhibitionsList = document.getElementById('exhibitions-list');
      exhibitionsList.innerHTML = ''; // Καθαρισμός προηγούμενου περιεχομένου

      // Δημιουργία λίστας εκθέσεων
      data.exhibitions.forEach(exhibition => {
        const li = document.createElement('li');

        // Δημιουργία περιγραφής της έκθεσης
        li.innerHTML = `
          <strong>${exhibition.title}</strong><br>
          <em>${exhibition.date} - ${exhibition.location}</em><br>
          ${exhibition.description}<br>
          <a href="${exhibition.url}" target="_blank">Μάθετε περισσότερα</a>
        `;
        
        exhibitionsList.appendChild(li);
      });

      // Εμφάνιση του περιεχομένου των εκθέσεων
      const exhibitionsContent = document.getElementById('exhibitions-content');
      exhibitionsContent.classList.remove('hidden');
    })
    .catch(error => {
      console.error('Error loading exhibitions:', error);
      const exhibitionsList = document.getElementById('exhibitions-list');
      exhibitionsList.innerHTML = '<li>Σφάλμα κατά τη φόρτωση των εκθέσεων.</li>';
    });
});

// Για το exhibition-2 (χρησιμοποιώντας το ίδιο JSON αρχείο)
document.getElementById('exhibition-2')?.addEventListener('click', () => {
  const url = 'exhibitions-2.json'; // Χρησιμοποιούμε το ίδιο JSON αρχείο
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load exhibitions');
      }
      return response.json();
    })
    .then(data => {
      const exhibitionsList = document.getElementById('exhibitions-list');
      exhibitionsList.innerHTML = ''; // Καθαρίζουμε προηγούμενο περιεχόμενο

      data.exhibitions.forEach(exhibition => {
        const li = document.createElement('li');
        li.innerHTML = `
          <strong>${exhibition.title}</strong><br>
          <em>${exhibition.date} - ${exhibition.location}</em><br>
          ${exhibition.description}<br>
          <a href="${exhibition.url}" target="_blank">Μάθετε περισσότερα</a>
        `;
        exhibitionsList.appendChild(li);
      });

      const exhibitionsContent = document.getElementById('exhibitions-content');
      exhibitionsContent.classList.remove('hidden');
    })
    .catch(error => {
      console.error('Error loading exhibitions:', error);
      const exhibitionsList = document.getElementById('exhibitions-list');
      exhibitionsList.innerHTML = '<li>Σφάλμα κατά τη φόρτωση των εκθέσεων.</li>';
    });
});
/*
document.getElementById('exhibition-2')?.addEventListener('click', () => {
  loadExhibitionsSection('exhibition-2');
});

document.getElementById('exhibition-3')?.addEventListener('click', () => {
  loadExhibitionsSection('exhibition-3');
});
*/

/*
###################################################
##             EVENT LISTENER LINKS              ##
###################################################
*/
document.getElementById('links-link').addEventListener('click', () => {
  showSidebarSection('links-sidebar');
  showContentSection('links-content');
});


/*THIS SOLUTION USES CORS PROXY TO FETCH OF JSON FILE */
/*
document.getElementById('link-1')?.addEventListener('click', () => { 
  const corsProxy = 'https://api.allorigins.win/get?url=';
  const url = 'links.json';  // The URL of your JSON file

  // Make a request to the CORS proxy to fetch the JSON file
  fetch(corsProxy + encodeURIComponent(url))
    .then(response => response.json())  // This returns the JSON content as 'contents'
    .then(data => {
      const linksContent = document.getElementById('links-content');
      const links = JSON.parse(data.contents).categories.web_links;  // Parse the JSON contents

      let htmlContent = '<h2>Σύνδεσμοι</h2>';
      const ul = document.createElement('ul');

      links.forEach(link => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${link.url}" target="_blank">${link.name}</a>`;
        ul.appendChild(li);
      });

      linksContent.innerHTML = htmlContent;
      linksContent.appendChild(ul);
      linksContent.classList.remove('hidden');
    })
    .catch(error => {
      console.error('Error loading JSON content:', error);
      linksContent.innerHTML = 'Σφάλμα κατά τη φόρτωση των συνδέσμων.';
    });
});
*/
/*THIS SOLUTION DOES NOT USE CORS PROXY */

document.getElementById('link-1')?.addEventListener('click', () => {
  const url = 'https://en.wikipedia.org/wiki/Cubism';  // URL of the Wikipedia article

  // Load the page content into links-content using an iframe
  loadPageContent(url);  // This will load the page in an iframe inside links-content
});



document.getElementById('link-2')?.addEventListener('click', () => {
  const url = 'https://en.wikipedia.org/wiki/Picasso%27s_Rose_Period';  // URL of the Wikipedia article

  // Load the page content into links-content using an iframe
  loadPageContent(url);  // This will load the page in an iframe inside links-content
});

document.getElementById('link-3')?.addEventListener('click', () => {
  const url = "https://en.wikipedia.org/wiki/Picasso's_Blue_Period";  // URL of the Wikipedia article

  // Load the page content into links-content using an iframe
  loadPageContent(url);  // This will load the page in an iframe inside links-content
});

function loadPageContent(url) {
  const linksContent = document.getElementById('links-content');
  linksContent.innerHTML = '';  // Clear the content before adding iframe

  // Create an iframe to load the page
  const iframe = document.createElement('iframe');
  iframe.src = url;  // Set the URL to load in the iframe
  iframe.style.width = '100%';
  iframe.style.height = '600px';  // Adjust the height as needed

  // Append the iframe to the links-content
  linksContent.appendChild(iframe);

  // Make sure links-content is visible
  linksContent.classList.remove('hidden');
}
/*
###################################################
##          EVENT LISTENER MANAGEMENT            ##
###################################################
*/
/*
document.getElementById('management-link').addEventListener('click', () => {
  showSidebarSection('management-sidebar');
  showContentSection('management-content');
});
*/

document.getElementById('management-link').addEventListener('click', () => {
  showSidebarSection('management-sidebar');
  //TEST
  //showContentSection('management-content');
});



/*
###################################################
##             EVENT LISTENER LOGIN              ##
###################################################
*/
// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Get the login link and the form container
  const loginLink = document.getElementById('login-action');
  const managementContent = document.getElementById('management-content');

  // Add a click event listener to the login link
  loginLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link behavior
    showContentSection('management-content');
    // Toggle the visibility of the form
    if (managementContent.classList.contains('hidden')) {
      managementContent.classList.remove('hidden'); // Show the form
    } else {
      managementContent.classList.add('hidden'); // Hide the form
    }
  });
});




/*
###################################################
##                 SCCESFUL LOGIN                 ##
###################################################
*/
// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = new FormData(loginForm);
    const data = {
      name: formData.get('name'),
      password: formData.get('password')
    };

    // Print the collected data
    console.log('Name:', data.name);
    console.log('Password:', data.password);

    try {
      // Send form data to the server using fetch
      const response = await fetch('/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json(); // Parse the JSON response

      // Handle the server response
      if (result.success) {
        alert(result.message); // Show success message
      } else {
        alert(result.message); // Show error message
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  });
});




