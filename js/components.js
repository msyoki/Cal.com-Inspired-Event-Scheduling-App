// Component generators (could be evolved into template literals or functions returning DOM nodes)

function hero()
{
  return `
  <section class="section" id="home">
    <div class="hero-content" style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; margin-bottom: 2rem;">
      <div class="hero-text">
        <h1>Licensed Counseling Psychologist & School Counselor</h1>
        <p class="hero-subtitle" style="font-size: 1.1rem; margin: 1.5rem 0;">Committed to strengthening mental health, emotional wellness, and student success through trauma-informed, compassionate, and collaborative care.</p>
        <p>Creating safe, non-judgmental spaces where people feel seen, heard, and empowered. I believe that healing begins with a relationship, and transformation occurs when individuals are supported in understanding their story, building resilience, and unlocking their potential.</p>
      </div>
      <div class="hero-image" style="text-align: center;">
        <img src="images/consuella-profile.jpg" alt="Consuella Kamonya - Licensed Counseling Psychologist" style="max-width: 100%; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.15);" />
      </div>
    </div>
    <div class="cta-box">
      <p><strong>Ready to begin?</strong> Reach out to schedule an initial consultation or ask a question.</p>
      <button class="button" data-action="openContact">Book a Consultation</button>
      <button class="button secondary" data-action="scrollServices">View Services</button>
    </div>
  </section>`;
}

function about()
{
  return `
  <section class="section" id="about">
    <h2>About Consuella Kamonya</h2>
    <p>I am a licensed Counseling Psychologist and School Counselor committed to strengthening mental health, emotional wellness, and student success. With several years of experience supporting children, adolescents, and adults across diverse community and school settings, I bring a trauma-informed, compassionate, and collaborative approach to every space I enter.</p>
    
    <p>My work spans individual therapy, group interventions, crisis response, psychoeducation, and whole-school wellbeing programs. I've served in both inpatient and outpatient environments. In recent years, I've focused deeply on school-based counseling, helping learners navigate anxiety, depression, self-esteem challenges, behavioral concerns, family stressors, and academic pressures.</p>
    
    <p>What drives me is simple: creating safe, non-judgmental spaces where people feel seen, heard, and empowered. I believe that healing begins with a relationship, and transformation occurs when individuals are supported in understanding their story, building resilience, and unlocking their potential.</p>
    
    <p>In every role, I collaborate closely with teachers, administrators, families, and community partners to build holistic wellbeing systems that help students thrive academically, socially, and emotionally.</p>
    
    <h3>Areas of Passion & Expertise</h3>
    <ul>
      <li>Student mental health and protective programming</li>
      <li>Crisis intervention and trauma support</li>
      <li>Psychoeducational assessments and individualized interventions</li>
      <li>Strength-based counseling approaches</li>
      <li>Community engagement and parent empowerment workshops</li>
      <li>Creating equitable, nurturing environments where learners can flourish</li>
    </ul>
    
    <div class="credentials-section" style="margin-top: 2rem;">
      <h3>Professional Experience</h3>
      <div class="card" style="margin-bottom: 1rem; background: #f8f9fa;">
        <h4 style="margin-bottom: 0.5rem;">School Counselor</h4>
        <p style="color: #666; margin-bottom: 1rem;"><strong>Village Impact</strong> | January 2022 - Present · 3 years 11 months</p>
        
        <p>A results-driven School Counselor supporting students' academic, social–emotional, and behavioral development across a multi-campus learning environment. I design and implement data-informed interventions, provide counseling services, and collaborate with teachers, families, and administrators to strengthen whole-school wellbeing systems.</p>
        
        <h5 style="margin-top: 1rem; margin-bottom: 0.5rem;">Key Achievements & Responsibilities:</h5>
        <ul style="list-style-type: none; padding-left: 0;">
          <li style="margin-bottom: 0.75rem;">✅ <strong>Academic Support & Intervention:</strong> Analyzed student performance data and implemented targeted academic support plans, contributing to measurable improvements in grade averages and assignment completion rates.</li>
          
          <li style="margin-bottom: 0.75rem;">✅ <strong>Social–Emotional Learning (SEL):</strong> Developed and delivered structured SEL lessons on emotional regulation, coping skills, digital safety, peer relationships, and resilience-building for over 400+ learners annually.</li>
          
          <li style="margin-bottom: 0.75rem;">✅ <strong>Individual & Group Counseling:</strong> Provided one-on-one counseling and facilitated small and large group sessions addressing self-esteem, behavior concerns, grief, and peer conflict.</li>
          
          <li style="margin-bottom: 0.75rem;">✅ <strong>Crisis Response:</strong> Served as an active member of the crisis intervention and disciplinary team; conducted risk assessments and provided immediate support for students in distress.</li>
          
          <li style="margin-bottom: 0.75rem;">✅ <strong>School Climate & MTSS Support:</strong> Collaborated with leadership to implement tiered interventions, monitor progress, and promote a safe, inclusive school culture.</li>
          
          <li style="margin-bottom: 0.75rem;">✅ <strong>Parent & Community Engagement:</strong> Led parent workshops and consultations, strengthening school–home partnerships and increasing parent involvement in student learning and wellbeing.</li>
          
          <li style="margin-bottom: 0.75rem;">✅ <strong>Teacher Collaboration:</strong> Partnered with teaching teams to design classroom strategies that support students' academic and behavioral success.</li>
        </ul>
        
        <p style="margin-top: 1rem;"><strong>Core Skills:</strong> Student Counseling • SEL Program Delivery • Group Facilitation • Crisis & Risk Assessment • Academic Advising • College & Career Readiness • MTSS • Behavior Intervention • Parent Coaching • Data-Driven Decision-Making • Restorative Practices • Case Management • School-Based Mental Health</p>
      </div>
      
      <h3 style="margin-top: 2rem;">Professional Credentials & Education</h3>
      <div class="card" style="margin-bottom: 1rem;">
        <h4>📚 Education</h4>
        <p><strong>Master of Arts (MA), Counseling Psychology</strong><br>
        Daystar University | January 2016 - December 2018</p>
        <p><strong>Bachelor of Arts (BA), Counseling Psychology</strong><br>
        Africa Nazarene University | January 2011 - April 2014</p>
      </div>
      
      <div class="card" style="margin-bottom: 1rem;">
        <h4>🏛️ Professional Membership</h4>
        <p>Member of the <strong>Kenya Psychological Association</strong></p>
      </div>
      
      <div class="card">
        <h4>🎯 Core Competencies</h4>
        <div class="skills-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.5rem; margin-top: 0.75rem;">
          <span style="background: var(--primary); color: white; padding: 0.5rem; border-radius: 4px; text-align: center; font-size: 0.9rem;">Counseling Psychology</span>
          <span style="background: var(--primary); color: white; padding: 0.5rem; border-radius: 4px; text-align: center; font-size: 0.9rem;">School Counseling</span>
          <span style="background: var(--primary); color: white; padding: 0.5rem; border-radius: 4px; text-align: center; font-size: 0.9rem;">Mental Health Counseling</span>
          <span style="background: var(--primary); color: white; padding: 0.5rem; border-radius: 4px; text-align: center; font-size: 0.9rem;">Group Therapy</span>
          <span style="background: var(--primary); color: white; padding: 0.5rem; border-radius: 4px; text-align: center; font-size: 0.9rem;">Trauma Therapy</span>
          <span style="background: var(--primary); color: white; padding: 0.5rem; border-radius: 4px; text-align: center; font-size: 0.9rem;">Psychotherapy</span>
          <span style="background: var(--primary); color: white; padding: 0.5rem; border-radius: 4px; text-align: center; font-size: 0.9rem;">Child Mental Health</span>
          <span style="background: var(--primary); color: white; padding: 0.5rem; border-radius: 4px; text-align: center; font-size: 0.9rem;">Pediatric Psychology</span>
          <span style="background: var(--primary); color: white; padding: 0.5rem; border-radius: 4px; text-align: center; font-size: 0.9rem;">Psychological Assessment</span>
          <span style="background: var(--primary); color: white; padding: 0.5rem; border-radius: 4px; text-align: center; font-size: 0.9rem;">Organizational Psychology</span>
        </div>
      </div>
    </div>
    
    <p style="margin-top: 2rem;">As I explore new opportunities, I'm excited to bring my experience, empathy, and commitment to mental wellness into a school or organizational environment that values growth, dignity, and human connection.</p>
    
    <p><a href="https://ke.linkedin.com/in/consuella-kamonya-517a712a6" target="_blank" rel="noopener noreferrer">View LinkedIn Profile</a></p>
  </section>`;
}

function services()
{
  const list = [
    { title: 'Individual Therapy', desc: 'Personalized sessions focusing on emotional regulation, stress, anxiety, mood and self-esteem.' },
    { title: 'Group Therapy', desc: 'Structured therapeutic groups that cultivate peer support and shared growth.' },
    { title: 'Couples Counseling', desc: 'Communication, conflict resolution, and relationship strengthening strategies.' },
    { title: 'Trauma-Informed Support', desc: 'Gentle, paced interventions incorporating grounding and stabilization.' },
    { title: 'Workshops & Psychoeducation', desc: 'Mental health awareness, resilience skills, and emotional wellness training.' },
    { title: 'Adolescent Counseling', desc: 'Support for identity development, academic pressure, and emotional challenges.' },
  ];
  return `
  <section class="section" id="services">
    <h2>Services</h2>
    <div class="grid services-grid">
      ${list.map(item => `<div class='card'><h3>${item.title}</h3><p>${item.desc}</p></div>`).join('')}
    </div>
  </section>`;
}

function approach()
{
  return `
  <section class="section" id="approach">
    <h2>Therapeutic Approach</h2>
    <p>Consuella uses integrative methods grounded in evidence-based modalities such as Cognitive Behavioral Therapy (CBT), Solution-Focused Brief Therapy (SFBT), Narrative techniques, Mindfulness-based strategies, and strengths-oriented frameworks.</p>
    <ul>
      <li>Client-centered and culturally sensitive</li>
      <li>Collaborative goal setting and review</li>
      <li>Emphasis on practical coping tools</li>
      <li>Empathy, safety, and confidentiality at core</li>
    </ul>
  </section>`;
}

function resources()
{
  const items = [
    { label: 'Understanding Anxiety', url: '#', note: 'Intro guide (placeholder).' },
    { label: 'Healthy Coping Strategies', url: '#', note: 'Skills overview (placeholder).' },
    { label: 'Stress Management Workbook', url: '#', note: 'Downloadable resource (placeholder).' },
  ];
  return `
  <section class="section" id="resources">
    <h2>Resources</h2>
    <p>Curated mental health education and practical tools. (More coming soon.)</p>
    <div class="resources-list">
      ${items.map(r => `<a href='${r.url}'><strong>${r.label}</strong><br><span style='font-size:0.75rem;'>${r.note}</span></a>`).join('')}
    </div>
  </section>`;
}

function contact()
{
  return `
  <section class="section" id="contact">
    <h2>Contact</h2>
    <p>Fill out the form below to request a session or ask a question. A response will follow within 1–2 business days.</p>
    <form id="contactForm" novalidate>
      <div class="row two">
        <div>
          <label for="name">Name</label>
          <input id="name" name="name" required placeholder="Your full name" />
        </div>
        <div>
          <label for="email">Email</label>
          <input id="email" name="email" type="email" required placeholder="you@example.com" />
        </div>
      </div>
      <div class="row">
        <label for="subject">Subject</label>
        <input id="subject" name="subject" required placeholder="Session request / Question" />
      </div>
      <div class="row">
        <label for="message">Message</label>
        <textarea id="message" name="message" required placeholder="Briefly describe what you'd like help with"></textarea>
      </div>
      <button class="button" type="submit">Send Message</button>
      <div class="form-status" id="formStatus" aria-live="polite"></div>
    </form>
  </section>`;
}

function booking()
{
  return `
  <section class="section" id="booking">
    <h2>Book a Session</h2>
    <p>Select a suitable slot from the calendar below. The booking widget loads securely from Cal.com.</p>
    <div class="card" style="margin-bottom:1rem;">
      <strong>Status:</strong> <span id="calStatus">Loading calendar…</span>
    </div>
    <div style="width:100%;height:100%;min-height:600px;overflow:scroll" id="my-cal-inline-teen-counselling"></div>
  </section>`;
}

export { hero, about, services, approach, resources, contact, booking };
