const boxes = document.querySelectorAll('.box');
const expandBox = document.getElementById('expandBox');
const expandContent = document.getElementById('expandContent');
const closeBtn = document.getElementById('closeBtn');
const container = document.getElementById('container');

boxes.forEach(box => {
  const section = box.dataset.title;

  // --- 1. Add preview content with Read More button ---
  let previewHTML = '';
  if(section === 'home') {
    previewHTML = `
    
      <h3>Hello, I'm Ayush Singh</h3>
      <button class="read-more">Read More</button>
    `;
  } else if(section === 'about') {
    previewHTML = `
      <p>Passionate web developer creating user-friendly websites.</p>
      <button class="read-more">Read More</button>
    `;
  } else if(section === 'skill') {
    previewHTML = `
      <p>HTML, CSS, JS, Python, C++, MySQL</p>
      <button class="read-more">Read More</button>
    `;
  } else if(section === 'project') {
    previewHTML = `
      <p>Portfolio Website, Todo App, AI Text Converter...</p>
      <button class="read-more">Read More</button>
    `;
  } else if(section === 'contact') {
    previewHTML = `
      <p>Get in touch! Fill the form or email me.</p>
      <button class="read-more">Read More</button>
    `;
  }

  box.innerHTML = previewHTML;

  // --- 2. Click on box or Read More triggers expansion ---
  const expandHandler = () => {
    const rect = box.getBoundingClientRect();
    expandBox.style.top = rect.top + "px";
    expandBox.style.left = rect.left + "px";
    expandBox.style.width = rect.width + "px";
    expandBox.style.height = rect.height + "px";
    expandBox.style.position = "fixed";
    expandBox.style.display = 'block';
    expandContent.innerHTML = ''; 

    // Full content for each section
    if(section === 'home') {
      expandContent.innerHTML = `
        <div class="home-wrapper">
          <div class="home-left">
            <h1>Hello, I'm <span class="highlight">Ayush Singh</span></h1>
            <h2 class="subtitle">- Frontend Developer & Designer</h2>
            <h2 class="subtitle">- Web Developer</h2>
            <h2 class="subtitle">- Python Developer</h2>
            <p>I create modern, responsive websites and web applications using HTML, CSS, JavaScript, Python, C++, and MySQL. <br><br>Passionate about UI/UX, I bring ideas to life through clean, interactive, and efficient code.</p>
           <div class="social-icons">
             <a href="https://www.linkedin.com/in/ayush-singh-4b5390294" target="_blank" rel="noopener noreferrer">
             <img src="linkedin.png" alt="LinkedIn">
             </a>
             <a href="mailto:singhayush9198@gmail.com">
             <img src="mail.png" alt="Email">
            </a>
            <a href="https://github.com/AyushSingh91" target="_blank" rel="noopener noreferrer">
            <img src="github.png" alt="GitHub">
            </a>
             <a href="Ayush Resume.pdf" target="_blank" rel="noopener noreferrer">
             <img src="resume.png" alt="Resume">
            </a>
              </div>

          </div>
          <div class="home-right"><img src="ayush-.png" class="profile-img"></div>
        </div>
      `;
    } 
    
    else if(section === 'about') {
      expandContent.innerHTML = `
        <div class="about-wrapper">
          <div class="about-right"><img src="ayush-.png" class="profile-img"></div>
          <div class="about-left">
            <h1>About Me</h1>
            <p>I am a passionate developer specializing in creating modern, responsive websites and web applications. Skilled in HTML, CSS, JavaScript, Python, C++, and MySQL, I build projects that are both visually appealing and highly functional. I enjoy crafting intuitive user interfaces, developing robust back-end systems, and solving challenging problems, with a focus on delivering seamless digital experiences and bringing ideas to life through code.</p>
            <button class="contact-btn" onclick="document.getElementById('contactBox').click()">Contact Me</button>
          </div>
        </div>
      `;
    }

    else if (section === 'skill') {
  expandContent.innerHTML = `
    <h1 class="section-title">My Skills</h1>
    <div class="skills-container">
      <div class="skill-card">
        <span class="skill-icon">💻</span>
        <h3>HTML</h3>
        <p>Crafting semantic and accessible web pages.</p>
      </div>
      <div class="skill-card">
        <span class="skill-icon">🎨</span>
        <h3>CSS</h3>
        <p>Modern layouts, animations, and clean design.</p>
      </div>
      <div class="skill-card">
        <span class="skill-icon">⚡</span>
        <h3>JavaScript</h3>
        <p>Building interactive and dynamic experiences.</p>
      </div>
      <div class="skill-card">
        <span class="skill-icon">🐍</span>
        <h3>Python</h3>
        <p>Automation, backend development, and scripts.</p>
      </div>
      <div class="skill-card">
        <span class="skill-icon">🔧</span>
        <h3>C++</h3>
        <p>Problem solving and efficient programming.</p>
      </div>
      <div class="skill-card">
        <span class="skill-icon">🗄️</span>
        <h3>MySQL</h3>
        <p>Designing and managing relational databases.</p>
      </div>
    </div>
  `;
}

else if (section === 'project') {
  expandContent.innerHTML = `
    <h1 class="section-title">My Projects</h1>
    <div class="projects-container">
      <div class="project-card">
        <img src="https://i.redd.it/do-you-prefer-jarvis-as-a-person-or-an-ai-v0-djorb3d0m9xe1.jpg?width=640&format=pjpg&auto=webp&s=584b2267cc59a8bca6e6a69f96a9e3054ef33752" alt="Project 1">
        <h3>Jarvis Ai</h3>
        <p>A smart Python assistant that automates tasks and brings ideas to life.</p>
        <a href="https://github.com/AyushSingh91/Jarvis-AI" target="_blank" class="project-btn">View Code</a>
      </div>
      <div class="project-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoszakz2X5s1Vu0AgSyxCxTpDMckLOhrxQxQ&s" alt="Project 2">
        <h3>Employee Management System</h3>
        <p>A Python & MySQL application to efficiently manage employee data and operations.</p>
        <a href="https://github.com/AyushSingh91/Employee-Management-System-" target="_blank" class="project-btn">View Code</a>
      </div>
      <div class="project-card">
        <img src="https://rms.koenig-solutions.com/Sync_data/CCE_Logo/2283-whatiscybersecurity.jpgL.jpg" alt="Project 3">
        <h3>Cyber Security Website</h3>
        <p>An interactive website built with HTML, CSS, and Spline 3D models to showcase cybersecurity concepts visually.</p>
        <a href="https://github.com/AyushSingh91/Cyber-Security-Website" target="_blank" class="project-btn">View Code</a>
      </div>
      <div class="project-card">
        <img src="https://resumewritingservices.in/assets/images/about/about.webp" alt="Project 3">
        <h3>Resume-Analyzer</h3>
        <p>A web application built with HTML, CSS, and Python to extract, analyze, and score resumes efficiently.</p>
        <a href="https://github.com/AyushSingh91/Resume-Analyzer" target="_blank" class="project-btn">View Code</a>
      </div>
      <div class="project-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiHJI2WV4u6FgVD2rs0IarMysFA4i0VUu8jw&s" alt="Project 3">
        <h3>Neo-pon Game</h3>
        <p>A retro-inspired arcade game built with Python, HTML, and CSS featuring neon visuals and interactive gameplay.</p>
        <a href="https://github.com/AyushSingh91/Neon-pong-game" target="_blank" class="project-btn">View Code</a>
      </div>
    </div>
  `;
}

else if (section === 'contact') {
  expandContent.innerHTML = `
    <h1 class="section-title">Contact Me</h1>
    <div class="contact-wrapper">
      <form id="contactForm" action="https://formspree.io/f/mgvlbjqr" method="POST">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" placeholder="you@example.com" required>
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" class="submit-btn">Send Message</button>
      </form>
    </div>
  `;

  // Optional: handle form submission feedback without reloading
  const contactForm = expandContent.querySelector('#contactForm');
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(contactForm);

    fetch(contactForm.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        alert('Thank you! Your message has been sent.');
        contactForm.reset();
      } else {
        alert('Oops! Something went wrong.');
      }
    }).catch(error => {
      alert('Oops! Something went wrong.');
      console.error(error);
    });
  });
}



    // Add full content for skill, project, contact similarly

    // Animate modal
    void expandBox.offsetWidth;
    expandBox.style.top = "8%";
    expandBox.style.left = "8%";
    expandBox.style.width = "85vw";
    expandBox.style.height = "80vh";
    expandBox.style.borderRadius = "20px";
    container.style.filter = "blur(8px)";
  };

  // Bind click on box itself
  box.addEventListener('click', expandHandler);

  // Bind click on Read More button
  const readBtn = box.querySelector('.read-more');
  if(readBtn){
    readBtn.addEventListener('click', e => {
      e.stopPropagation(); // prevent double-trigger
      expandHandler();
    });
  }
});

// Close button
closeBtn.addEventListener('click', () => {
  expandBox.style.display = 'none';
  container.style.filter = "none";
});




// animation

(function(){
  const container = document.getElementById('prismatic-burst-container');
  const canvas = document.createElement('canvas');
  container.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  let w, h;
  function resize() {
    w = canvas.width = container.offsetWidth;
    h = canvas.height = container.offsetHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  const particles = [];
  const numParticles = 700;
  const darkBackground = '#0b1a33'; // solid dark background
  // Initialize particles
  for(let i=0;i<numParticles;i++){
    const angle = Math.random()*Math.PI*2;
    const speed = Math.random()*2 + 0.5;
    const size = Math.random()*3 + 1.5;
    const hue = Math.random()*360;
    particles.push({x:Math.random()*w, y:Math.random()*h, angle, speed, size, hue, life:Math.random()*100});
  }

  function animate(){
    ctx.fillStyle = 'rgba(11,26,51,0.1)'; // trailing effect
    ctx.fillRect(0,0,w,h);

    for(let p of particles){
      p.x += Math.cos(p.angle)*p.speed;
      p.y += Math.sin(p.angle)*p.speed;
      p.life += 1;

      if(p.x<0) p.x=w;
      if(p.x>w) p.x=0;
      if(p.y<0) p.y=h;
      if(p.y>h) p.y=0;

      p.hue += 0.5;
      if(p.hue>360) p.hue -= 360;

      ctx.beginPath();
      ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
      ctx.fillStyle = `hsl(${p.hue},100%,60%)`;
      ctx.shadowBlur = 25;
      ctx.shadowColor = `hsl(${p.hue},100%,60%)`;
      ctx.fill();
    }

    requestAnimationFrame(animate);
  }
  animate();

  // Mouse attraction
  container.addEventListener('mousemove',(e)=>{
    const mx = e.clientX;
    const my = e.clientY;
    for(let p of particles){
      const dx = mx - p.x;
      const dy = my - p.y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if(dist < 150){
        p.x += dx*0.01;
        p.y += dy*0.01;
      }
    }
  });
})();
