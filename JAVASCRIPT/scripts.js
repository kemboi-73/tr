function toolTips() {

    var docTitle = document.title;
    var studentName = document.querySelector("#site-logo>p").textContent
    var aboutLink = document.querySelector("#links>li>a").getAttribute("href")
    var bannerImage = document.querySelector(".banner").getAttribute("src")
    var projectTitle = document.querySelector("h1").textContent
    var projectDescription = document.querySelector("#about>p").textContent
    var callToAction = document.querySelector(".cta-btn").getAttribute("href")
    var reflection01 = document.querySelector("#reflection01>p").textContent
    var reflection02 = document.querySelector("#reflection02>p").textContent
    var reflection03 = document.querySelector("#reflection03>p").textContent
    var videoTitle = document.querySelector("#video>h2").textContent
    var youtubeEmbed = document.getElementById("delete-me-02")
    var transcript = document.querySelector("#transcript>p").textContent
    var galleryImage = document.querySelector(".img-container>a>img").getAttribute("src")
    var profileImage = document.querySelector(".profile-image").getAttribute("src")
    var contactAbout = document.querySelector("#contact>.col>p").textContent
    var contactCallToAction = document.querySelector("#contact>.col>.cta-btn").getAttribute("href")
    var footerContact = document.querySelector("footer>.col :nth-child(2)").textContent
    var footerAboutLink = document.querySelector("#footer-links>li>a").getAttribute("href")
    var copyrightInfo = document.querySelector("#copyright").textContent    

    //Check if webpage title has been updated
    if (docTitle === "Website Template") {
        document.body.innerHTML += 
        '<div id="tooltip" class="tooltip pos-abs">' +
        '<p class="tooltipTitle">1. Update the webpage title</p>' +
        '<p class="tooltipContent">This is the title of the webpage, usually seen in the browser tab. It should accurately describe the content of the page in a few words.</p>' +        
        '<ol class="tooltipInstructions">' +
        '<li>Inside <em>index.html</em>, look for this code on line 7:<br><span class="code">&lt;title&gt;Website Template&lt;/title&gt;</span></li>' +
        '<li>Replace “Website template” with the name of your campaign.</li>' +        
        '</ol>' +
        '<input type="checkbox" id="tooltip-toggle" onclick="hide()" />' +
        '<label for="tooltip-toggle" class="tooltip-toggle-label">Hide tooltip (refresh page to reload tooltip).</label>' +
        '</div>'
    }
    //Check if site logo has been updated
    else if (studentName === "Student Name") {
        var studentNameLocation = document.getElementById("site-logo")
        var SNHTML = '<div id="tooltip" class="tooltip pos-abs top-6">' +
        '<p class="tooltipTitle">2. Updating the website logo</p>' +
        '<p class="tooltipContent">This is the logo of the website, which is usually displayed in the header or footer of the webpage, and is used to give the website a unique identity. For the purpose of this project, our logo will just be our name followed by the course code.</p>' +        
        '<ol class="tooltipInstructions">' +
        '<li>Inside <em>index.html</em>, look for this code on line 22:<br><span class="code">&lt;p&gt;Student Name&lt;/p&gt;</span></li>' +
        '<li>Replace "Student Name" with your own name</li>' +
        '</ol>' +
        '<input type="checkbox" id="tooltip-toggle" onclick="hide()" />' +
        '<label for="tooltip-toggle" class="tooltip-toggle-label">Close tooltip (refresh page to reload tooltip).</label>' +
        '</div>'
        studentNameLocation.insertAdjacentHTML("beforebegin", SNHTML);
    }
    //Check if navigation links have been updated
    else if (aboutLink === "#") {
      var aboutLinkLocation = document.querySelector("#links>li>a");
      var T03HTML = '<div id="tooltip" class="tooltip pos-abs top-6">' +
      '<p class="tooltipTitle">3. Updating the navigation links</p>' +
      '<p class="tooltipContent">This is a list of links that allows the user to navigate through the website. It is typically placed in the header of the page.</p>' +
      '<p class="tooltipContent">Usually, these would link off to other pages within the website however, as this website is one page, these links will connect to parts of the page.</p>' +
      '<p class="tooltipContent">We can navigate to any part of the page, as long as that part has been given an "id" prefixed with a "#".</p>' +        
      '<ol class="tooltipInstructions">' +
      '<li>Inside <em>index.html</em>, look for this code on line 36:<br><span class="code">&lt;a href="#"&gt;About&lt;/a&gt;</span></li>' +
      '<li>After the # add the name of the section we are sending the user to, in this case; #about</li>' +
      '<li>To make things easier, each section has already been given an id that corresponds with its respective navigation link. You can check this out on lines 65, 79, 127, 144 and 229</li>' +
      '<li>Repeat this process for all navigation links, giving each their own id.</li>' +
      '</ol>' +
        '<input type="checkbox" id="tooltip-toggle" onclick="hide()" />' +
        '<label for="tooltip-toggle" class="tooltip-toggle-label">Close tooltip (refresh page to reload tooltip).</label>' +
        '</div>'
      aboutLinkLocation.insertAdjacentHTML("beforebegin", T03HTML);
    }
    //Check if banner image has been updated
    else if (bannerImage === "IMAGES/placeholder.png") {
      var bannerImageLocation = document.querySelector(".banner");
      var T04HTML = '<div id="tooltip" class="tooltip pos-abs top-15">' +
      '<p class="tooltipTitle">4. Updating the banner image</p>' +
      '<p class="tooltipContent">The banner/hero image is a large, visually striking image that is prominently displayed on the homepage of the website, and is used to draw attention and entice users. The image will also resize on different device sizes so chose an image that will look good at different sizes.</p>' +        
      '<ol class="tooltipInstructions">' +
      '<li>Inside <em>index.html</em>, look for this code on line 59:<br><span class="code">&lt;img class="banner" src="placeholder.png" width="100%" height="100%"&gt;</span></li>' +
      '<li>Replace placeholder.png with your own banner image that you have saved in the IMAGES folder</li>' +
      '<li>You will also need to update the alt text for this image with text that describes the image.</li>' +
      '</ol>' 
        '<input type="checkbox" id="tooltip-toggle" onclick="hide()" />' +
        '<label for="tooltip-toggle" class="tooltip-toggle-label">Close tooltip (refresh page to reload tooltip).</label>' +
        '</div>'
      bannerImageLocation.insertAdjacentHTML("beforebegin", T04HTML);
  }
      //Check if H1 Title has been updated
      else if (projectTitle === "Title of the project") {
        var projectTitleLocation = document.querySelector("h1");
        var T05HTML = '<div id="tooltip" class="tooltip pos-rel">' +
        '<p class="tooltipTitle">5. Updating the page header h1</p>' +
        '<p class="tooltipContent">This is the main heading of the page, which should accurately reflect the content of the page. It is usually the largest heading on the page.</p>' +        
        '<ol class="tooltipInstructions">' +
        '<li>Inside <em>index.html</em>, look for this code on line 67:<br><span class="code">&lt;h1&gt;Title of the project&lt;/h1&gt;</span></li>' +
        '<li>Replace "Title of the project" with the title of your video.</li>' +
        '</ol>' +
        '<input type="checkbox" id="tooltip-toggle" onclick="hide()" />' +
        '<label for="tooltip-toggle" class="tooltip-toggle-label">Close tooltip (refresh page to reload tooltip).</label>' +
        '</div>'
        projectTitleLocation.insertAdjacentHTML("afterend", T05HTML);
    }
    //Check if description has been updated
     else if (projectDescription.startsWith("This is where")) {
      var projectDescriptionLocation = document.querySelector("#about>p");
      var T06HTML = '<div id="tooltip" class="tooltip pos-rel">' +
      '<p class="tooltipTitle">6. Updating the introduction paragraph</p>' +
      '<p class="tooltipContent">This is a brief description of the webpage, usually found underneath the title and heading. It should accurately describe the content of the page.</p>' +        
      '<ol class="tooltipInstructions">' +
      '<li>Inside <em>index.html</em>, look for this code on line 69:<br><span class="code">&lt;p&gt;This is where you post...&lt;/p&gt;</span></li>' +
      '<li>Replace the content between these p tags with a short paragraph of around 150 words explaining your campaign you have created your video for.</li>' +
      '</ol>' +
        '<input type="checkbox" id="tooltip-toggle" onclick="hide()" />' +
        '<label for="tooltip-toggle" class="tooltip-toggle-label">Close tooltip (refresh page to reload tooltip).</label>' +
        '</div>'
      projectDescriptionLocation.insertAdjacentHTML("afterend", T06HTML);
  }
      //Check if CTA has been updated
      else if (callToAction === "#") {
        var callToActionLocation = document.querySelector(".cta-btn")
        var T07HTML = '<div id="tooltip" class="tooltip pos-rel">' +
        '<p class="tooltipTitle">7. Updating the Call To Action (CTA)</p>' +
        '<p class="tooltipContent">This stands for “call to action” button. It is a button that encourages the user to take a specific action, such as signing up for a newsletter or making a purchase. For us, we want the viewer to watch our video.</p>' +        
        '<ol class="tooltipInstructions">' +
        '<li>Inside <em>index.html</em>, look for this line of code:<br><span class="code">&lt;a class="cta-btn" href="#"&gt;Watch the video&lt;/a&gt;</span></li>' +
        '<li>Add the word "video" directly after the "#".</li>' +
        '</ol>' +
        '<input type="checkbox" id="tooltip-toggle" onclick="hide()" />' +
        '<label for="tooltip-toggle" class="tooltip-toggle-label">Close tooltip (refresh page to reload tooltip).</label>' +
        '</div>'
        callToActionLocation.insertAdjacentHTML("afterend", T07HTML);
    }
      //Check if reflection01 has been updated      
      else if (reflection01.startsWith("Lorem")) {        
        var reflection01Location = document.getElementById("reflection01");
        var T09HTML = '<div id="tooltip" class="tooltip pos-rel">' +
        '<p class="tooltipTitle">8. Updating reflection 1 entry</p>' +
        '<p class="tooltipContent">You are required to document the creative process for your assignments here. Document what you were trying to achieve, did you achieve it, and what could be done differently in the future.</p>' +        
        '<ol class="tooltipInstructions">' +
        '<li>Inside <em>index.html</em>, look for this line of code:<br><span class="code">&lt;div id="reflection01" class="accordion content"&gt;...&lt;div&gt;</span></li>' +
        '<li>Inside this block of code, you should see an H3 heading element and a subsequent p paragraph element</li>' +
        "<li>Update the content within each paragraph tag with your own content, replacing the placeholder lorem ipsum text.</li>" +
        '</ol>' +
        '<input type="checkbox" id="tooltip-toggle" onclick="hide()" />' +
        '<label for="tooltip-toggle" class="tooltip-toggle-label">Close tooltip (refresh page to reload tooltip).</label>' +
        '</div>'
        reflection01Location.insertAdjacentHTML("afterend", T09HTML);
    }
    //Check if reflection02 has been updated      
    else if (reflection02.startsWith("Lorem")) {        
      var reflection02Location = document.getElementById("reflection02");
      var T10HTML = '<div id="tooltip" class="tooltip pos-rel">' +
      '<p class="tooltipTitle">9. Updating reflection 2 entry</p>' +
      '<p class="tooltipContent">You are required to reflect on the assignments and the skills learnt here. Reflect on what you found difficult, what you enjoyed completing and what you enjoyed learning about.</p>' +        
      '<ol class="tooltipInstructions">' +
      '<li>Inside <em>index.html</em>, look for this line of code:<br><span class="code">&lt;div id="reflection02" class="accordion content"&gt;...&lt;div&gt;</span></li>' +
      '<li>Inside this block of code, you should see an H3 heading element and a subsequent p paragraph element</li>' +
        "<li>Update the content within each paragraph tag with your own content, replacing the placeholder lorem ipsum text.</li>" +
      '</ol>' +
        '<input type="checkbox" id="tooltip-toggle" onclick="hide()" />' +
        '<label for="tooltip-toggle" class="tooltip-toggle-label">Close tooltip (refresh page to reload tooltip).</label>' +
        '</div>'
      reflection02Location.insertAdjacentHTML("afterend", T10HTML);
  }
    //Check if reflection03 has been updated      
    else if (reflection03.startsWith("Lorem")) {        
      var reflection03Location = document.getElementById("reflection03");
      var T11HTML = '<div id="tooltip" class="tooltip pos-rel">' +
      '<p class="tooltipTitle">10. Updating reflection 3 entry</p>' +
      '<p class="tooltipContent">You are required to reflect on the skills you have learnt throughout the course here. Describe these skills and how you intend to use them in the future.</p>' +        
      '<ol class="tooltipInstructions">' +
      '<li>Inside <em>index.html</em>, look for this line of code:<br><span class="code">&lt;div id="reflection03" class="accordion content"&gt;...&lt;div&gt;</span></li>' +
      '<li>Inside this block of code, you should see an H3 heading element and a subsequent p paragraph element</li>' +
        "<li>Update the content within each paragraph tag with your own content, replacing the placeholder lorem ipsum text.</li>" +
      '</ol>' +
        '<input type="checkbox" id="tooltip-toggle" onclick="hide()" />' +
        '<label for="tooltip-toggle" class="tooltip-toggle-label">Close tooltip (refresh page to reload tooltip).</label>' +
        '</div>'
      reflection03Location.insertAdjacentHTML("afterend", T11HTML);
  }
      //Check if Video H2 Title has been updated
      else if (videoTitle === "Video title") {
        var videoTitleLocation = document.querySelector("#video>h2");
        var T12HTML = '<div id="tooltip" class="tooltip pos-rel">' +
        '<p class="tooltipTitle">11. Updating the Video section h2 header</p>' +
        '<p class="tooltipContent">This is the heading that comes after the H1 heading. It is used to break up content and make it easier to read.</p>' +        
        '<ol class="tooltipInstructions">' +
        '<li>Look for this code:<br><span class="code">&lt;h2 class="text-center"&gt;Video title&lt;/h2&gt;</span></li>' +
        '<li>Replace "Video title" with the title of your video</li>' +        
        '</ol>' +
        '<input type="checkbox" id="tooltip-toggle" onclick="hide()" />' +
        '<label for="tooltip-toggle" class="tooltip-toggle-label">Close tooltip (refresh page to reload tooltip).</label>' +
        '</div>'
        videoTitleLocation.insertAdjacentHTML("afterend", T12HTML);
    }
      //Check if YouTube has been embeded
      else if (youtubeEmbed != null) {
        var youtubeEmbedLocation = document.getElementById("delete-me-02");
        var T13HTML = '<div id="tooltip" class="tooltip pos-rel">' +
        '<p class="tooltipTitle">12. Embedding your YouTube video</p>' +
        '<p class="tooltipContent">This is a YouTube video that can be embedded on the website. Videos are used to enhance the content of the page. We will be embeding our videos that we have uploaded to YouTube.</p>' +        
        '<ol class="tooltipInstructions">' +
        '<li>Inside <em>index.html</em>, look for this line of code:<br><span class="code">&lt;p id="delete-me-02"&gt;This section will include...&lt;/p&gt;</span></li>' +
        '<li>Replace this entire block of code with the embed code from your YouTube video.</li>' +        
        '</ol>' +
        '<input type="checkbox" id="tooltip-toggle" onclick="hide()" />' +
        '<label for="tooltip-toggle" class="tooltip-toggle-label">Close tooltip (refresh page to reload tooltip).</label>' +
        '</div>'
        youtubeEmbedLocation.insertAdjacentHTML("afterend", T13HTML);
    }
      //Check if transcript has been updated
      else if (transcript.startsWith("Lorem")) {
        var transcriptLocation = document.querySelector("#transcript:last-child");
        var T14HTML = '<div id="tooltip" class="tooltip pos-rel">' +
        '<p class="tooltipTitle">13. Updating the video transcript</p>' +
        '<p class="tooltipContent">This is a text version of the video, which allows users who are unable to watch the video to still understand the content. We need to include, not only spoken words, but sound effects and on screen effects.</p>' +        
        '<ol class="tooltipInstructions">' +
        '<li>Inside <em>index.html</em>, look for this line of code:<br><span class="code">&lt;div id="transcript"&gt;...&lt;/div&gt;</span></li>' +
        '<li>Inside this block of code, you should see an H3 heading element and a subsequent p paragraph element</li>' +
        "<li>Update the content within each paragraph tag with your video transcript, replacing the placeholder lorem ipsum text.</li>" +
        "<li>Use as many &lt;p&gt; element blocks as you need.</li>" +
        '</ol>' +
        '<input type="checkbox" id="tooltip-toggle" onclick="hide()" />' +
        '<label for="tooltip-toggle" class="tooltip-toggle-label">Close tooltip (refresh page to reload tooltip).</label>' +
        '</div>'
        transcriptLocation.insertAdjacentHTML("afterend", T14HTML);
    }
    //Check if image gallery has been updated
    else if (galleryImage === "IMAGES/placeholder.png") {
      var galleryImageLocation = document.querySelector("#gallery-container");
      var T15HTML = '<div id="tooltip" class="tooltip pos-rel">' +
      '<p class="tooltipTitle">14. Including images for the gallery</p>' +
      '<p class="tooltipContent">This is a collection of screenshots from your video that are displayed on the website. It can be used to showcase key scenes from your video.</p>' +        
      '<ol class="tooltipInstructions">' +
      '<li>Inside <em>index.html</em>, look for this line of code within the section labelled "gallery":<br><span class="code">&lt;img src="IMAGES/placeholder.png"&gt;</span></li>' +
      '<li>Replace placeholder.png with your video screenshot saved in the IMAGES folder</li>' +
      '<li>You will need to update the a href tag above the img tag as well</li>' +
      '<li>You will also need to update the image caption beneath the image</li>' +
      '<li>You will need to repeat the above steps for every image in the gallery</li>' +
      '<li>You will also need to update the alt text for every image with text that describes the image.</li>' +
      '</ol>' +
        '<input type="checkbox" id="tooltip-toggle" onclick="hide()" />' +
        '<label for="tooltip-toggle" class="tooltip-toggle-label">Close tooltip (refresh page to reload tooltip).</label>' +
        '</div>'
      galleryImageLocation.insertAdjacentHTML("afterend", T15HTML);
  }
    //Check if profile picture has been updated
    else if (profileImage === "IMAGES/placeholder.png") {
      var profileImageLocation = document.querySelector(".profile-image");
      var T16HTML = '<div id="tooltip" class="tooltip pos-rel">' +
      '<p class="tooltipTitle">15. Updating the profile image</p>' +
      '<p class="tooltipContent">This is an image of the author or contributor of the webpage, which is usually displayed alongside their name or bio. If you wish to not include a photo of yourself, feel free to use a royalty-free image.</p>' +        
      '<ol class="tooltipInstructions">' +
      '<li>Inside <em>index.html</em>, look for this line of code:<br><span class="code">&lt;img class="profile-image" src="IMAGES/placeholder.png" width="100%" height="100%"&gt;</span></li>' +
      '<li>Replace placeholder.png with your profile image saved in the IMAGES folder</li>' +
      '<li>You will also need to update the alt text for this image with text that describes the image.</li>' +
      '</ol>' +
        '<input type="checkbox" id="tooltip-toggle" onclick="hide()" />' +
        '<label for="tooltip-toggle" class="tooltip-toggle-label">Close tooltip (refresh page to reload tooltip).</label>' +
        '</div>'
      profileImageLocation.insertAdjacentHTML("afterend", T16HTML);
  }
      //Check Contact about has been updated
      else if (contactAbout.startsWith("In this section")) {
        var contactAboutLocation = document.querySelector("#contact>.col>p:nth-of-type(2)");
        var T17HTML = '<div id="tooltip" class="tooltip pos-rel">' +
        '<p class="tooltipTitle">16. Updating the Contact content</p>' +
        '<p class="tooltipContent">This is a section of the webpage that contains information about the author or contributor of the webpage. It can include a bio, contact information, and a profile picture.</p>' +        
        '<ol class="tooltipInstructions">' +
        '<li>Inside <em>index.html</em>, find the "contact" section and update the paragraph of text under the heading "thanks for stopping by!"</li>' +
        '<li>In this section, write a bit about what you are studying and what field you are hoping to work in.</li>' +        
        '</ol>' +
        '<input type="checkbox" id="tooltip-toggle" onclick="hide()" />' +
        '<label for="tooltip-toggle" class="tooltip-toggle-label">Close tooltip (refresh page to reload tooltip).</label>' +
        '</div>'
        contactAboutLocation.insertAdjacentHTML("afterend", T17HTML);
    }
      //Check if Contact CTA has been updated
      else if (contactCallToAction === "#") {
        var contactCallToActionLocation = document.querySelector("#contact>.col>.cta-btn")
        var T18HTML = '<div id="tooltip" class="tooltip pos-rel">' +
        '<p class="tooltipTitle">17. Updating the contact Call To Action (CTA)</p>' +
        '<p class="tooltipContent">This stands for “call to action” button. It is a button that encourages the user to contact the author or contributor of the webpage.</p>' +        
        '<ol class="tooltipInstructions">' +
        '<li>Inside <em>index.html</em>, find the "contact" section and look for this code:<br><span class="code">&lt;a class="cta-btn" href="#"&gt;Get in contact&lt;/a&gt;</span></li>' +
        '<li>Replace the "#" with "mailto:youremailaddress" using your UniSA email address.</li>' +
        '<li>If you have done this correctly, your email client will open and address a new email to your email address.</li>' +
        '</ol>' +
        '<input type="checkbox" id="tooltip-toggle" onclick="hide()" />' +
        '<label for="tooltip-toggle" class="tooltip-toggle-label">Close tooltip (refresh page to reload tooltip).</label>' +
        '</div>'
        contactCallToActionLocation.insertAdjacentHTML("afterend", T18HTML);
      }
      //Check Footer Contact about has been updated
      else if (footerContact.startsWith("Student Name")) {
        var footerContactLocation = document.querySelector("footer>.col>a");
        var T19HTML = '<div id="tooltip" class="tooltip pos-rel">' +
        '<p class="tooltipTitle">18. Updating the footer contact email</p>' +
        '<p class="tooltipContent">Contact info, such as an email address, can typically placed in the footer of the webpage for users to easily find.</p>' +        
        '<ol class="tooltipInstructions">' +
        '<li>Inside <em>index.html</em>, find the "footer" section and look for this code:<br><span class="code">&lt;p&gt;Student Name&lt;/p&gt;</span></li>' +
        '<li>Replace "Student name" with your own name</li>' +
        '<li>Next, look for this line of code:<br><span class="code">&lt;a href="#"&gt;insert your email address here&lt;/a&gt;</span></li>' +
        '<li>Replace "#" with "mailto:youremailaddress" using your UniSA email address, and "insert your email address here" with your email address.' +
        '</ol>' +
        '<input type="checkbox" id="tooltip-toggle" onclick="hide()" />' +
        '<label for="tooltip-toggle" class="tooltip-toggle-label">Close tooltip (refresh page to reload tooltip).</label>' +
        '</div>'
        footerContactLocation.insertAdjacentHTML("afterend", T19HTML);
    }
    //Check if footer navigation links have been updated
    else if (footerAboutLink === "#") {
      var FooterAboutLinkLocation = document.querySelector("#footer-links :nth-child(5)");
      var T20HTML = '<div id="tooltip" class="tooltip pos-rel">' +
      '<p class="tooltipTitle">19. Footer navigation links</p>' +
      '<p class="tooltipContent">This is a list of links that allows the user to navigate through the website. It is typically placed in the header of the page.</p>' +
      '<p class="tooltipContent">Usually, these would link off to other pages within the website however, as this website is one page, these links will connect to parts of the page.</p>' +
      '<p class="tooltipContent">We can navigate to any part of the page, as long as that part has been given an "id" prefixed with a "#".</p>' +        
      '<ol class="tooltipInstructions">' +
      '<li>Inside <em>index.html</em>, look for this code inside the "footer-links" id:<br><span class="code">&lt;a href="#"&gt;About&lt;/a&gt;</span></li>' +
      '<li>After the # add the name of the section we are sending the user to, in this case; #about</li>' +
      '<li>To make things easier, each section has already been given an id that corresponds with its respective navigation link. You can check this out on lines 65, 79, 170, 194 and 261</li>' +
      '<li>Repeat this process for all navigation links, giving each their own id.</li>' +
      '</ol>' +
        '<input type="checkbox" id="tooltip-toggle" onclick="hide()" />' +
        '<label for="tooltip-toggle" class="tooltip-toggle-label">Close tooltip (refresh page to reload tooltip).</label>' +
        '</div>'
      FooterAboutLinkLocation.insertAdjacentHTML("afterend", T20HTML);
    }
      //Check Copyright year has been updated
      else if (copyrightInfo.includes("20--")) {
        var copyrightInfoLocation = document.querySelector("#copyright");
        var T21HTML = '<div id="tooltip" class="tooltip pos-rel">' +
        '<p class="tooltipTitle">20. Updating the copyright year</p>' +
        '<p class="tooltipContent">This is the year that the website was last updated. It is usually included in the footer of the webpage.</p>' +        
        '<ol class="tooltipInstructions">' +
        '<li>Inside <em>index.html</em>, look for this code inside the "footer" section:<br><span class="code">&lt;p id="copyright"&gt;University of South Australia © 20--&lt;/p&gt;</span></li>' +
        '<li>Update the year with the current year.</li>' +        
        '</ol>' +
        '<input type="checkbox" id="tooltip-toggle" onclick="hide()" />' +
        '<label for="tooltip-toggle" class="tooltip-toggle-label">Close tooltip (refresh page to reload tooltip).</label>' +
        '</div>'
        copyrightInfoLocation.insertAdjacentHTML("afterend", T21HTML);
    }
}

function accordion() {
  var acc = document.getElementsByClassName("accordion-button");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}


function hide() {
  var x = document.getElementById("tooltip");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function pageLoad() {
  toolTips(); accordion();
}


document.addEventListener("DOMContentLoaded", function () {
  accordion();
  toolTips(); 
});

