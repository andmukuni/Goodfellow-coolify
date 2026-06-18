/**
* Template Name: MediTrust
* Template URL: https://bootstrapmade.com/meditrust-bootstrap-hospital-website-template/
* Updated: Jul 04 2025 with Bootstrap v5.3.7
* Author: BootstrapMade.com
* License: https://bootstra        loanTypes: "<strong>Our Loan Products</strong>\n\nWe offer two main financial solutions:\n\n💰 <strong>1. Salary Advances (Payday Loans)</strong>\n• Quick cash before payday\n• For salaried employees\n• 1-2 month repayment terms\n• Visit branch, apply online, or call\n\n📱 <strong>2. Nano Loans (Mobile Loans)</strong>\n• Instant loans via USSD\n• Dial *774# anytime, anywhere\n• 24/7 availability\n• No branch visit needed\n\n🎯 <em>Want to explore all our services in detail?</em>\n<a href='services.html' target='_blank' class='gf-page-link'>View All Services & Benefits →</a>\n\nWhich product interests you?",
      nanoLoan: "📱 <strong>Nano Loans - Instant Mobile Loans!</strong>\n\nGet loans in 3 simple steps:\n\n<strong>Step 1:</strong> Dial *774# on your phone\n<strong>Step 2:</strong> Complete registration\n<strong>Step 3:</strong> Get your loan instantly!\n\n✨ <strong>Benefits:</strong>\n• Available 24/7\n• No paperwork required\n• No branch visits\n• Instant disbursement to mobile money\n• Quick approval\n\n<button class='gf-dial-btn' onclick='window.location.href=\"tel:*774%23\"'>📞 Dial *774# Now</button>\n\n<em>Want to see all application methods?</em>\n<a href='services.html#application' target='_blank' class='gf-page-link'>Explore Application Options →</a>",
      salaryAdvance: "💼 <strong>Salary Advances (Payday Loans)</strong>\n\nQuick cash before your next payday!\n\n👥 <strong>Available For:</strong>\n✅ Government employees\n✅ Mining sector workers\n✅ ZESCO staff\n✅ NGO employees\n✅ Private sector employees\n✅ Armed forces personnel\n✅ Teachers & nurses\n\n⚡ <strong>Key Features:</strong>\n• Same-day approval\n• Competitive rates (20-30% monthly)\n• 1-2 month repayment\n• Multiple disbursement options\n\n📍 Visit any of our 28 branches nationwide or apply online!\n\n<a href='appointment.html' target='_blank' class='gf-page-link'>Apply for Salary Advance →</a>\n<a href='branches.html' target='_blank' class='gf-page-link'>Find Nearest Branch →</a>", loanTypes: "<strong>Our Loan Products</strong>\n\nWe offer two main financial solutions:\n\n💰 <strong>1. Salary Advances (Payday Loans)</strong>\n• Quick cash before payday\n• For salaried employees\n• 1-2 month repayment terms\n• Visit branch, apply online, or call\n\n📱 <strong>2. Nano Loans (Mobile Loans)</strong>\n• Instant loans via USSD\n• Dial *774# anytime, anywhere\n• 24/7 availability\n• No branch visit needed\n\n🎯 <em>Want to explore all our services in detail?</em>\n<a href='services.html' target='_blank' class='gf-page-link'>View All Services & Benefits →</a>\n\nWhich product interests you?",
      nanoLoan: "📱 <strong>Nano Loans - Instant Mobile Loans!</strong>\n\nGet loans in 3 simple steps:\n\n<strong>Step 1:</strong> Dial *774# on your phone\n<strong>Step 2:</strong> Complete registration\n<strong>Step 3:</strong> Get your loan instantly!\n\n✨ <strong>Benefits:</strong>\n• Available 24/7\n• No paperwork required\n• No branch visits\n• Instant disbursement to mobile money\n• Quick approval\n\n<button class='gf-dial-btn' onclick='window.location.href=\"tel:*774%23\"'>📞 Dial *774# Now</button>\n\n<em>Want to see all application methods?</em>\n<a href='services.html#application' target='_blank' class='gf-page-link'>Explore Application Options →</a>",
      salaryAdvance: "💼 <strong>Salary Advances (Payday Loans)</strong>\n\nQuick cash before your next payday!\n\n👥 <strong>Available For:</strong>\n✅ Government employees\n✅ Mining sector workers\n✅ ZESCO staff\n✅ NGO employees\n✅ Private sector employees\n✅ Armed forces personnel\n✅ Teachers & nurses\n\n⚡ <strong>Key Features:</strong>\n• Same-day approval\n• Competitive rates (20-30% monthly)\n• 1-2 month repayment\n• Multiple disbursement options\n\n📍 Visit any of our 28 branches nationwide or apply online!\n\n<a href='appointment.html' target='_blank' class='gf-page-link'>Apply for Salary Advance →</a>\n<a href='branches.html' target='_blank' class='gf-page-link'>Find Nearest Branch →</a>",de.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader) return;
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  
  if (scrollTop) {
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle, .faq-item .faq-header').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Live Chat Widget interactions
   */
  function initChatWidget() {
    console.log('🤖 Initializing chat widget...');
    
    const toggleBtn = document.getElementById('gf-chat-toggle');
    const panel = document.getElementById('gf-chat-panel');
    const closeBtn = document.getElementById('gf-chat-close');
    const messagesContainer = document.getElementById('gf-chat-messages');
    const inputField = document.getElementById('gf-chat-input');
    const sendBtn = document.getElementById('gf-chat-send');
    const typingIndicator = document.getElementById('gf-typing-indicator');
    const agentForm = document.getElementById('gf-agent-form');
    const backToChatBtn = document.getElementById('gf-back-to-chat');
    const badge = document.getElementById('gf-chat-badge');
    const chatBody = panel ? panel.querySelector('.gf-chat-body') : null;

    if (!toggleBtn || !panel) {
      console.warn('⚠️ Chat widget elements not found. Toggle:', toggleBtn, 'Panel:', panel);
      return;
    }
    
    console.log('✅ Chat widget elements found successfully');

    let conversationHistory = [];
    let awaitingAgentTrigger = false;
    let hasGreeted = false;

    // Bot response database - Comprehensive FAQ-based responses with page navigation
    const botResponses = {
      greeting: [
        "Hello! 👋 Welcome to Goodfellow Finance Limited - Your Local Money Shop! I'm your virtual assistant. How can I help you today?",
        "Hi there! 😊 I'm here to assist you with our financial services. What would you like to know about?"
      ],
      about: "<strong>About Goodfellow Finance Limited</strong>\n\n🏦 Goodfellow Finance Limited (GFL) is an <strong>indigenous Zambian microfinance institution</strong> registered with the <strong>Bank of Zambia</strong> since <strong>2017</strong>.\n\n✨ <strong>Key Facts:</strong>\n• 28 branches across all 10 provinces\n• 8+ years of trusted service\n• Management with 15-20 years banking experience\n• Serving both public and private sectors\n• Focus on client satisfaction & quick approvals\n\n<strong>Our Mission:</strong> Adding value to the Zambian economy through accessible financial services.\n\n📄 <em>Would you like to learn more about our complete story?</em>\n<a href='about.html' target='_blank' class='gf-page-link'>Visit Our About Page →</a>",
      whoCanApply: "<strong>Who Can Apply?</strong>\n\nWe proudly serve employed individuals from:\n\n🏛️ <strong>Public Sector:</strong>\n• Government Ministries\n• Zambia Army, Air Force & National Service\n• Parastatal Organizations\n• ZESCO employees\n• Teachers & Nurses\n\n🏭 <strong>Private Sector:</strong>\n• Mining Companies\n• Manufacturing\n• NGOs\n• Higher Learning Institutions\n• SME Owners\n• Agriculture Sector\n\n✅ <strong>Basic Requirements:</strong>\n• Regular income/employment\n• Valid NRC\n• Bank account or mobile money\n\n📋 Need details on application requirements?\n<a href='faq.html#eligibility' target='_blank' class='gf-page-link'>View Full Eligibility Criteria →</a>",
      loanTypes: "We offer two main products:\n\n💰 <strong>Salary Advances</strong> - Quick cash before payday for salaried employees\n� <strong>Nano Loans</strong> - Instant mobile loans via USSD (Dial *774#)\n\nWhich one interests you?",
      nanoLoan: "🎯 <strong>Nano Loans - Quick & Easy!</strong>\n\nGet instant mobile loans in 3 simple steps:\n\n1️⃣ Dial <strong>*774#</strong> on your phone\n2️⃣ Complete the registration\n3️⃣ Get your loan instantly!\n\n<button class='gf-dial-btn' onclick='window.location.href=\"tel:*774%23\"'>📞 Dial *774# Now</button>\n\nNo paperwork, no branch visits! 🚀",
      salaryAdvance: "💼 <strong>Salary Advances (Payday Loans)</strong>\n\nQuick cash before your next payday!\n\n👥 <strong>Available For:</strong>\n✅ Government employees\n✅ Mining sector workers\n✅ ZESCO staff\n✅ NGO employees\n✅ Private sector employees\n✅ Armed forces personnel\n✅ Teachers & nurses\n\n📋 <strong>What You Need:</strong>\n• Valid NRC\n• 3 latest payslips\n• Latest bank statement\n\n⚡ <strong>Key Features:</strong>\n• Same-day approval\n• Competitive rates (20-30% monthly)\n• 1-2 month repayment\n• Multiple disbursement options\n\n📍 Visit any of our 28 branches nationwide or apply online!\n\n<a href='appointment.html' target='_blank' class='gf-page-link'>Apply for Salary Advance →</a>\n<a href='branches.html' target='_blank' class='gf-page-link'>Find Nearest Branch →</a>",
      eligibility: "<strong>Loan Eligibility Requirements</strong>\n\n<strong>For Salary Advances:</strong>\n✅ Valid National ID (NRC)\n✅ Three (3) latest payslips\n✅ Latest bank statement\n✅ Active bank account\n✅ Employed in formal sector\n✅ Regular monthly income\n\n<strong>For Nano Loans (*774#):</strong>\n✅ Valid mobile phone number\n✅ National ID (NRC)\n✅ Active mobile money account\n✅ Registration via USSD\n\n💡 <strong>Tip:</strong> Have all 3 key documents ready (NRC + 3 payslips + bank statement) for faster approval!\n\n📋 <em>Want detailed eligibility information?</em>\n<a href='faq.html#eligibility' target='_blank' class='gf-page-link'>See Full Requirements →</a>\n<a href='appointment.html' target='_blank' class='gf-page-link'>Apply Now →</a>",
      documents: "📄 <strong>Required Documents Checklist</strong>\n\n<strong>For Salary Advances - Essential Documents:</strong>\n\n🪪 <strong>1. National Registration Card (NRC)</strong>\n   - Must be valid\n   - Clear copy required\n\n📋 <strong>2. Three (3) Latest Payslips</strong>\n   - Must be recent (last 3 months)\n   - All 3 payslips required\n   - Clear copies needed\n\n🏦 <strong>3. Latest Bank Statement</strong>\n   - Most recent statement\n   - Shows account activity\n   - Must be from your salary account\n\n📞 <strong>4. Contact Information</strong>\n   - Mobile phone number\n   - Physical address\n   - Emergency contact\n\n📝 <strong>Additional Documents (may be requested):</strong>\n• Employment letter from employer\n• Supervisor contact details\n• Payroll number\n• Sector-specific documentation\n\n💡 <strong>Pro Tip:</strong> Have all 3 documents ready (NRC, 3 payslips, bank statement) for faster approval!\n\n<em>Ready to apply with your documents?</em>\n<a href='appointment.html' target='_blank' class='gf-page-link'>Submit Application →</a>",
      approvalTime: "⚡ <strong>Fast Approval Process!</strong>\n\n<strong>Timeline:</strong>\n📅 <strong>Same-day approval</strong> for complete applications!\n\n<strong>How It Works:</strong>\n\n<strong>Step 1:</strong> Submit application with documents\n<strong>Step 2:</strong> Our team verifies information\n<strong>Step 3:</strong> Approval decision (usually within hours)\n<strong>Step 4:</strong> Notification sent immediately\n\n📲 <strong>You'll Be Notified Via:</strong>\n• 📞 Phone call\n• 💬 SMS text message\n• 📧 Email\n\n⏰ <strong>Processing Time:</strong>\n• Nano Loans: Instant (via *774#)\n• Salary Advances: Same day (if docs submitted early)\n\n💡 <strong>Pro Tip:</strong> Submit applications in the morning for same-day processing!\n\n<a href='appointment.html' target='_blank' class='gf-page-link'>Apply Now for Fast Approval →</a>",
      howLong: "Same-day approval! ⚡ Once your documents are verified, most loans are approved within hours. You'll be notified immediately.",
      interest: "<strong>💰 Competitive Interest Rates</strong>\n\n<strong>Salary Advances:</strong>\n📊 20-30% per month\n✅ Bank of Zambia compliant\n✅ Transparent pricing\n\n<strong>Nano Loans (via *774#):</strong>\n📊 Rates displayed during application\n✅ Clear terms shown upfront\n✅ No surprises\n\n<strong>Rates Depend On:</strong>\n• 💼 Your employment sector\n• 💵 Loan amount requested\n• 📅 Repayment period chosen\n• 📊 Your credit profile\n\n💡 <strong>All rates comply with Bank of Zambia regulations!</strong>\n\n<em>Want personalized rate information?</em>\n<a href='appointment.html' target='_blank' class='gf-page-link'>Get a Quote →</a>\n<a href='contact.html' target='_blank' class='gf-page-link'>Contact Us for Details →</a>\n\nOr speak with an agent for customized rates!",
      fees: "✅ <strong>No Hidden Fees Policy!</strong>\n\n<strong>Complete Transparency Guaranteed</strong>\n\nAll charges disclosed upfront in your loan agreement:\n\n📄 <strong>What You'll See:</strong>\n• 💵 Principal loan amount\n• 📊 Interest rate percentage\n• 💳 Processing fees (if any)\n• 📋 Any other applicable charges\n• 💰 Total amount to repay\n• 📅 Payment schedule\n\n✨ <strong>Our Transparency Promise:</strong>\n\"What you see is what you pay. Period.\"\n\n🛡️ We believe in:\n• Clear communication\n• Honest pricing\n• No surprise charges\n• Full disclosure before signing\n\n<em>Want to see our complete terms?</em>\n<a href='terms.html' target='_blank' class='gf-page-link'>Read Full Terms & Conditions →</a>\n<a href='faq.html#fees' target='_blank' class='gf-page-link'>FAQ About Fees →</a>",
      hiddenFees: "❌ <strong>ZERO Hidden Fees!</strong>\n\n<strong>100% Transparency Guarantee</strong>\n\n🛡️ <strong>Our Promise to You:</strong>\n\"No surprises. No hidden charges. Complete transparency.\"\n\n<strong>Before You Sign:</strong>\n✅ All fees clearly disclosed\n✅ Interest rate shown upfront\n✅ Total repayment amount stated\n✅ Payment schedule provided\n✅ No fine print tricks\n\n<strong>Bank of Zambia Compliant:</strong>\n🏛️ We operate under strict regulations requiring full disclosure of all charges.\n\n💡 <strong>What This Means:</strong>\n• You know exactly what you'll pay\n• No unexpected charges later\n• Complete peace of mind\n• Ethical lending practices\n\n<em>Read our commitment to transparency:</em>\n<a href='terms.html#fees' target='_blank' class='gf-page-link'>View Pricing Policy →</a>\n<a href='about.html' target='_blank' class='gf-page-link'>Our Values & Ethics →</a>",
      branches: "<strong>🗺️ Our Branch Network</strong>\n\n📍 <strong>28 Branches Nationwide!</strong>\n\nWe're in <strong>all 10 provinces</strong> of Zambia:\n\n<strong>Major Locations:</strong>\n🏢 <strong>Lusaka</strong> - Head Office (Rhodespark) + branches\n🏢 <strong>Copperbelt</strong> - Kitwe, Ndola, Chingola, Mufulira\n🏢 <strong>Southern</strong> - Livingstone, Choma, Mazabuka\n🏢 <strong>Central</strong> - Kabwe, Kapiri Mposhi\n🏢 <strong>Northern</strong> - Kasama, Mbala\n🏢 <strong>Luapula</strong> - Mansa, Nchelenge\n🏢 <strong>Eastern</strong> - Chipata, Katete\n🏢 <strong>Western</strong> - Mongu, Senanga\n🏢 <strong>North-Western</strong> - Solwezi, Kasempa\n🏢 <strong>Muchinga</strong> - Chinsali\n\n⏰ <strong>Operating Hours:</strong>\n• Mon-Fri: 8:00 AM - 5:00 PM\n• Saturday: 8:00 AM - 1:00 PM\n• Sunday: Closed\n\n💡 <strong>Nano Loans?</strong> Available 24/7 via *774#!\n\n<em>Need specific branch details & directions?</em>\n<a href='branches.html' target='_blank' class='gf-page-link'>View Complete Branch List →</a>\n<a href='contact.html' target='_blank' class='gf-page-link'>Contact Branch Near You →</a>",
      apply: "<strong>💼 How to Apply for a Loan</strong>\n\nChoose your preferred method:\n\n<strong>Option 1: Branch Visit 🏢</strong>\n• Walk into any of our 28 branches\n• Bring required documents\n• Speak with our friendly staff\n• <a href='branches.html' target='_blank' class='gf-page-link'>Find Nearest Branch →</a>\n\n<strong>Option 2: Online Application 💻</strong>\n• Apply from anywhere, anytime\n• Submit via website\n• Upload documents electronically\n• <a href='appointment.html' target='_blank' class='gf-page-link'>Apply Online Now →</a>\n\n<strong>Option 3: Phone/WhatsApp 📱</strong>\n• Call: +260 211 238 719\n• WhatsApp: +260 957 224 792\n• Speak to our team directly\n\n<strong>Option 4: Nano Loans (USSD) 📲</strong>\n• Dial *774# from your phone\n• Instant mobile loans\n• No branch visit needed!\n• <button class='gf-dial-btn' onclick='window.location.href=\"tel:*774%23\"'>📞 Dial *774# Now</button>\n\n<em>Which method works best for you?</em>\nShall I connect you with an agent for assistance?",
      ussd: "📱 <strong>Dial *774# for Instant Nano Loans!</strong>\n\nIt's super easy:\n\n1️⃣ Dial <strong>*774#</strong>\n2️⃣ Follow the prompts to register\n3️⃣ Get your loan in minutes!\n\n<button class='gf-dial-btn' onclick='window.location.href=\"tel:*774%23\"'>📞 Click to Dial *774#</button>\n\nNo branch visits needed! 🎉",
      disbursement: "💰 <strong>Flexible Loan Disbursement Options</strong>\n\nChoose how you want to receive your money:\n\n<strong>1️⃣ Cash Collection 💵</strong>\n• Visit any of our 28 branches\n• Instant cash pickup\n• Bring your NRC\n• Perfect for Salary Advances\n\n<strong>2️⃣ Bank Transfer 🏦</strong>\n• Direct to your bank account\n• Processing: 24-48 hours\n• Secure and reliable\n• No collection needed\n\n<strong>3️⃣ Mobile Money 📱</strong>\n• MTN Mobile Money\n• Airtel Money\n• Zamtel Kwacha\n• Instant for Nano Loans\n\n<strong>4️⃣ Mobile Wallet 📲</strong>\n• For Nano Loans via *774#\n• Instant disbursement\n• Available 24/7\n\n⏱️ <strong>Processing Time:</strong>\n• Nano Loans: Instant\n• Salary Advances: 24-48 hours after approval\n\n<em>Want to see complete service details?</em>\n<a href='services.html#disbursement' target='_blank' class='gf-page-link'>View All Disbursement Methods →</a>",
      repayment: "💳 <strong>Easy & Convenient Repayment Methods</strong>\n\n<strong>Automated Options (Recommended):</strong>\n\n<strong>1️⃣ DDACC (Direct Debit Authority)</strong>\n✅ Automatic bank deduction\n✅ On your payday\n✅ Never miss a payment\n✅ Setup once, works monthly\n\n<strong>2️⃣ PMEC (Payroll Deduction)</strong>\n✅ Deducted directly from salary\n✅ Through your employer\n✅ Seamless recovery\n✅ No manual payments needed\n\n<strong>Manual Payment Options:</strong>\n\n<strong>3️⃣ Mobile Money</strong>\n• MTN, Airtel, Zamtel\n• Pay anytime, anywhere\n\n<strong>4️⃣ Bank Transfer</strong>\n• Direct to our account\n• Provide loan reference\n\n<strong>5️⃣ Branch Payment</strong>\n• Visit any of our 28 branches\n• Pay in cash or card\n\n💡 <strong>Pro Tip:</strong> Automated methods (DDACC/PMEC) ensure you never miss a payment!\n\n<a href='services.html#recovery' target='_blank' class='gf-page-link'>Learn More About Repayment →</a>\n<a href='terms.html#repayment' target='_blank' class='gf-page-link'>View Terms & Conditions →</a>",
      terms: "📅 <strong>Loan Terms & Conditions</strong>\n\n<strong>Repayment Period:</strong>\n⏰ Typically <strong>1-2 months</strong>\n\n<strong>What's Included:</strong>\n\n✅ <strong>Clear Repayment Schedule</strong>\n   • Exact payment dates\n   • Amount per installment\n   • Total repayment amount\n\n✅ <strong>Interest Rate Disclosure</strong>\n   • Rate percentage\n   • How it's calculated\n   • Total interest amount\n\n✅ <strong>Written Agreement</strong>\n   • All terms in writing\n   • Explained before signing\n   • Copy provided to you\n\n<strong>Your Rights:</strong>\n• 📖 Read all terms before signing\n• ❓ Ask questions - we're here to explain\n• 📄 Receive copy of agreement\n• ⚖️ Fair treatment guaranteed\n\n💡 <strong>Bank of Zambia regulated for your protection!</strong>\n\n<em>Want to read complete terms?</em>\n<a href='terms.html' target='_blank' class='gf-page-link'>Full Terms & Conditions →</a>\n<a href='faq.html' target='_blank' class='gf-page-link'>Common Questions Answered →</a>",
      period: "Repayment period: <strong>1-2 months</strong> typically. Your exact schedule, amount, and interest are clearly shown before you sign the agreement.\n\n<a href='terms.html#repayment' target='_blank' class='gf-page-link'>View Detailed Terms →</a>",
      receive: "You can receive your loan via multiple methods:\n\n💵 Cash at any branch\n🏦 Bank transfer\n📱 Mobile money (MTN/Airtel/Zamtel)\n\nChoose what works best for you!\n\n<a href='services.html#disbursement' target='_blank' class='gf-page-link'>See All Options →</a>",
      payback: "Repayment is easy with automated options:\n\n✅ DDACC (automatic bank deduction)\n✅ PMEC (salary deduction)\n✅ Mobile money\n✅ Bank transfer\n\nYou'll never miss a payment!\n\n<a href='services.html#recovery' target='_blank' class='gf-page-link'>Learn About Repayment Methods →</a>",
      hours: "🕒 <strong>Business Hours:</strong>\n\n<strong>Monday - Friday:</strong> 8:00 AM - 5:00 PM\n<strong>Saturday:</strong> 8:00 AM - 1:00 PM\n<strong>Sunday:</strong> Closed\n\n💡 <strong>Nano Loans?</strong> Available 24/7 via *774#!\n\nNote: Hours may vary by branch.",
      contact: "📞 <strong>Contact Goodfellow Finance</strong>\n\n<strong>📱 Phone Numbers:</strong>\n• +260 211 238 719\n• +260 957 224 792\n\n<strong>📧 Email:</strong>\n• info@goodfellowzm.com\n\n<strong>🌐 Website:</strong>\n• www.goodfellowzm.com\n\n<strong>📲 Nano Loans USSD:</strong>\n• Dial *774#\n\n<strong>🏢 Head Office:</strong>\n• Rhodespark, Lusaka\n\n<strong>📍 28 Branches Nationwide</strong>\n\n<em>Need to reach us?</em>\n<a href='contact.html' target='_blank' class='gf-page-link'>Send Us a Message →</a>\n<a href='branches.html' target='_blank' class='gf-page-link'>Find Your Nearest Branch →</a>\n\nWould you like to speak with a live agent now?",
      complaints: "🛡️ <strong>Complaint Handling Procedure</strong>\n\n<strong>Your Voice Matters - We're Here to Help!</strong>\n\n🏛️ <strong>Bank of Zambia Compliant Process</strong>\n\n<strong>How to Lodge a Complaint:</strong>\n\n1️⃣ <strong>Visit a Branch</strong> - Walk into any of our 28 branches\n2️⃣ <strong>Call Us</strong> - +260 211 238 719 or +260 957 224 792\n3️⃣ <strong>Email Us</strong> - complaints@goodfellowzm.com\n4️⃣ <strong>Write to Us</strong> - Complaints Department, Rhodespark, Lusaka\n\n⏱️ <strong>Resolution Timeline:</strong>\n• Step 1: Immediate acknowledgment + reference number\n• Step 2: Investigation (1-3 business days)\n• Step 3: Resolution proposal (within 7 business days)\n• Step 4: Final resolution (within 14 business days max)\n\n🔄 <strong>Not Satisfied?</strong> Escalation Options:\n• Senior Management Review\n• Bank of Zambia (+260 211 399 300)\n\n✅ <strong>Your Rights:</strong>\n• Right to complain without retaliation\n• Timely response guaranteed\n• Fair & impartial investigation\n• Complete confidentiality\n\n💡 We take all complaints seriously and aim for fair resolution!\n\n<em>Learn about our complete complaint handling procedure:</em>\n<a href='complaints.html' target='_blank' class='gf-page-link'>View Complaint Procedure →</a>\n<a href='contact.html' target='_blank' class='gf-page-link'>Lodge a Complaint Now →</a>\n\nWould you like to speak with a customer service agent?",
      help: "I'm here to help! 🤖\n\n<strong>I can answer questions about:</strong>\n\n💰 <strong>Loan Products</strong>\n• Salary Advances\n• Nano Loans (*774#)\n• Loan types & features\n\n📄 <strong>Requirements</strong>\n• Documents needed\n• Eligibility criteria\n• Application process\n\n💳 <strong>Rates & Fees</strong>\n• Interest rates\n• Processing fees\n• Transparency policy\n\n📍 <strong>Branch & Contact</strong>\n• 28 branch locations\n• Operating hours\n• Contact information\n\n✅ <strong>Application & Approval</strong>\n• How to apply\n• Approval timeline\n• Disbursement methods\n\n💸 <strong>Repayment</strong>\n• Payment methods\n• DDACC & PMEC\n• Loan terms\n\n🛡️ <strong>Complaints & Concerns</strong>\n• Complaint procedure\n• Your consumer rights\n• Escalation options\n\n<em>Explore our website for more:</em>\n<a href='about.html' target='_blank' class='gf-page-link'>About Us →</a>\n<a href='services.html' target='_blank' class='gf-page-link'>Our Services →</a>\n<a href='faq.html' target='_blank' class='gf-page-link'>FAQs →</a>\n\nWhat would you like to know?",
      default: "I can help with:\n\n• 💰 Salary Advances & Nano Loans\n• 📄 Eligibility & Documents\n• 💳 Interest Rates & Fees\n• 💸 Repayment & Terms\n• 📍 Branch Locations\n• ✅ Application Process\n• 🏦 Disbursement Options\n• 🛡️ Complaints & Concerns\n\n<em>Or browse our website:</em>\n<a href='services.html' target='_blank' class='gf-page-link'>View Services →</a>\n<a href='faq.html' target='_blank' class='gf-page-link'>Read FAQs →</a>\n<a href='appointment.html' target='_blank' class='gf-page-link'>Apply Now →</a>\n<a href='complaints.html' target='_blank' class='gf-page-link'>Complaint Procedure →</a>\n\nTry asking about any topic above! 😊"
    };

    // Keywords mapping - Comprehensive FAQ-based keywords
    const keywordMap = {
      greeting: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'greetings', 'helo', 'hie'],
      about: ['who are you', 'what is goodfellow', 'company', 'about', 'info', 'microfinance', 'bank of zambia', 'established', 'history', 'registered', 'indigenous'],
      whoCanApply: ['who can apply', 'can i apply', 'sector', 'employed', 'employee', 'government', 'mining', 'zesco', 'ngo', 'teacher', 'nurse', 'who qualify', 'who is eligible'],
      loanTypes: ['loan', 'product', 'type', 'what loans', 'services', 'offer', 'what do you', 'types of loan'],
      nanoLoan: ['nano', 'ussd', '*774', '774', 'dial', 'mobile loan', 'instant', 'quick loan', 'phone loan'],
      salaryAdvance: ['salary', 'advance', 'payday', 'salary loan', 'employment loan', 'pay day'],
      eligibility: ['qualify', 'eligible', 'eligibility', 'requirement', 'need', 'criteria', 'can i get', 'do i qualify', 'requirements for', 'what are the requirements'],
      documents: ['document', 'papers', 'nrc', 'id', 'payslip', 'payslips', '3 payslips', 'three payslips', 'bank statement', 'what do i need', 'required', 'bring', 'what should i bring', 'requirements'],
      approvalTime: ['approve', 'approval', 'how long', 'processing', 'same day', 'fast', 'when will i', 'approval time'],
      howLong: ['how long', 'time', 'days', 'hours', 'wait', 'processing time', 'how fast'],
      interest: ['rate', 'interest', 'cost', 'percentage', 'how much', '20', '30', 'interest rate'],
      fees: ['fee', 'fees', 'charge', 'charges', 'cost', 'extra cost'],
      hiddenFees: ['hidden', 'transparent', 'surprise', 'no fees', 'hidden fee', 'hidden charge', 'transparency'],
      branches: ['branch', 'location', 'office', 'where', 'address', 'near me', 'lusaka', 'kitwe', 'ndola', 'livingstone', 'kabwe', 'solwezi', 'find you'],
      apply: ['apply', 'application', 'how to', 'get loan', 'process', 'start', 'want loan', 'register', 'sign up', 'how do i'],
      ussd: ['*774', '774', 'dial', 'ussd', 'code'],
      disbursement: ['disburse', 'get money', 'payout', 'payment method', 'cash', 'bank', 'mobile money', 'mtn', 'airtel', 'disbursement'],
      receive: ['receive', 'get', 'collect', 'pickup', 'transfer', 'how will i receive'],
      repayment: ['repay', 'pay back', 'recovery', 'deduction', 'ddacc', 'pmec', 'payroll', 'repayment'],
      payback: ['pay back', 'payback', 'return', 'refund', 'payment'],
      terms: ['term', 'terms', 'condition', 'conditions', 'agreement'],
      period: ['period', 'months', '1 month', '2 months', 'repayment schedule', 'duration', 'how long to pay'],
      hours: ['hours', 'time', 'open', 'closed', 'when', 'schedule', 'working', 'business hours', 'operating'],
      contact: ['contact', 'phone', 'email', 'call', 'reach', 'speak', 'talk', 'phone number'],
      complaints: ['complaint', 'complain', 'issue', 'problem', 'dissatisfied', 'unhappy', 'dispute', 'resolve', 'resolution', 'escalate', 'not happy', 'bad service', 'poor service', 'unfair', 'report', 'concern', 'feedback', 'lodge complaint'],
      help: ['help', 'assist', 'support', 'guide', 'options']
    };

    // Load conversation from localStorage
    function loadConversation() {
      const saved = localStorage.getItem('gf_chat_history');
      if (saved) {
        conversationHistory = JSON.parse(saved);
        renderAllMessages();
      } else if (!hasGreeted) {
        setTimeout(() => addBotMessage(botResponses.greeting[0], true), 500);
        hasGreeted = true;
      }
    }

    // Save conversation to localStorage
    function saveConversation() {
      localStorage.setItem('gf_chat_history', JSON.stringify(conversationHistory));
    }

    // Clear conversation
    function clearConversation() {
      conversationHistory = [];
      localStorage.removeItem('gf_chat_history');
      if (messagesContainer) messagesContainer.innerHTML = '';
    }

    // Render all messages
    function renderAllMessages() {
      if (!messagesContainer) return;
      messagesContainer.innerHTML = '';
      conversationHistory.forEach(msg => {
        const msgEl = createMessageElement(msg.type, msg.text, false);
        messagesContainer.appendChild(msgEl);
      });
      scrollToBottom();
    }

    // Create message element
    function createMessageElement(type, text, animate = true) {
      const msgDiv = document.createElement('div');
      msgDiv.className = `gf-message gf-message-${type}`;
      
      const avatar = document.createElement('div');
      avatar.className = 'gf-message-avatar';
      avatar.innerHTML = type === 'bot' ? '<i class="bi bi-robot"></i>' : '<i class="bi bi-person-fill"></i>';
      
      const content = document.createElement('div');
      content.className = 'gf-message-content';
      content.innerHTML = text;
      
      msgDiv.appendChild(avatar);
      msgDiv.appendChild(content);
      
      return msgDiv;
    }

    // Add user message
    function addUserMessage(text) {
      if (!messagesContainer || !text.trim()) return;
      
      const msg = { type: 'user', text: text.trim(), time: new Date().toISOString() };
      conversationHistory.push(msg);
      
      const msgEl = createMessageElement('user', text.trim());
      messagesContainer.appendChild(msgEl);
      scrollToBottom();
      saveConversation();
      
      // Process bot response
      setTimeout(() => handleBotResponse(text.trim()), 800);
    }

    // Add bot message
    function addBotMessage(text, withQuickReplies = false) {
      if (!messagesContainer) return;
      
      showTyping();
      
      setTimeout(() => {
        hideTyping();
        
        const msg = { type: 'bot', text, time: new Date().toISOString() };
        conversationHistory.push(msg);
        
        const msgEl = createMessageElement('bot', text);
        messagesContainer.appendChild(msgEl);
        
        // Add quick reply buttons if this is the greeting
        if (withQuickReplies) {
          const quickReplies = createQuickReplies([
            'Salary Advances',
            'Nano Loans (*774#)',
            'Branch Locations',
            'Speak to Agent'
          ]);
          messagesContainer.appendChild(quickReplies);
        }
        
        scrollToBottom();
        saveConversation();
        
        // Show badge if panel is closed
        if (!panel.classList.contains('is-open') && badge) {
          badge.style.display = 'flex';
        }
      }, 1200);
    }

    // Create quick reply buttons
    function createQuickReplies(options) {
      const container = document.createElement('div');
      container.className = 'gf-message gf-message-bot';
      
      const avatar = document.createElement('div');
      avatar.className = 'gf-message-avatar';
      avatar.style.opacity = '0';
      
      const repliesDiv = document.createElement('div');
      repliesDiv.className = 'gf-quick-replies';
      
      options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'gf-quick-reply-btn';
        btn.textContent = option;
        btn.onclick = () => {
          addUserMessage(option);
          container.remove();
        };
        repliesDiv.appendChild(btn);
      });
      
      container.appendChild(avatar);
      container.appendChild(repliesDiv);
      
      return container;
    }

    // Show typing indicator
    function showTyping() {
      if (typingIndicator) {
        typingIndicator.classList.remove('gf-hidden');
        scrollToBottom();
      }
    }

    // Hide typing indicator
    function hideTyping() {
      if (typingIndicator) {
        typingIndicator.classList.add('gf-hidden');
      }
    }

    // Handle bot response
    function handleBotResponse(userText) {
      const lowerText = userText.toLowerCase();
      
      // Check for agent request
      if (lowerText.includes('agent') || lowerText.includes('human') || lowerText.includes('person') || 
          lowerText.includes('representative') || lowerText.includes('staff') || lowerText.includes('speak to')) {
        addBotMessage("I'll connect you with one of our loan specialists right away! Please fill out the form and we'll get back to you within 24 hours. 👨‍💼");
        setTimeout(showAgentForm, 1500);
        return;
      }
      
      // Match keywords to responses
      let bestMatch = 'default';
      let maxMatches = 0;
      
      for (const [category, keywords] of Object.entries(keywordMap)) {
        const matches = keywords.filter(keyword => lowerText.includes(keyword)).length;
        if (matches > maxMatches) {
          maxMatches = matches;
          bestMatch = category;
        }
      }
      
      // Send appropriate response
      if (maxMatches > 0 || bestMatch !== 'default') {
        addBotMessage(botResponses[bestMatch]);
      } else {
        addBotMessage(botResponses.default);
      }
    }

    // Scroll to bottom
    function scrollToBottom() {
      if (messagesContainer) {
        setTimeout(() => {
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }, 100);
      }
    }

    // Show agent form
    function showAgentForm() {
      if (agentForm && chatBody) {
        chatBody.style.display = 'none';
        agentForm.classList.remove('gf-hidden');
      }
    }

    // Hide agent form
    function hideAgentForm() {
      if (agentForm && chatBody) {
        agentForm.classList.add('gf-hidden');
        chatBody.style.display = 'block';
      }
    }

    // Open/close panel functions
    const openPanel = () => {
      console.log('📖 Opening chat panel...');
      panel.classList.add('is-open');
      toggleBtn.setAttribute('aria-expanded', 'true');
      if (badge) badge.style.display = 'none';
      scrollToBottom();
    };
    
    const closePanel = () => {
      console.log('📕 Closing chat panel...');
      panel.classList.remove('is-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      hideAgentForm();
    };
    
    const togglePanel = () => {
      console.log('🔄 Toggling chat panel. Currently open:', panel.classList.contains('is-open'));
      if (panel.classList.contains('is-open')) closePanel(); else openPanel();
    };

    // Event listeners
    console.log('🎯 Setting up event listeners...');
    
    if (toggleBtn) {
      toggleBtn.addEventListener('click', (e) => { 
        e.preventDefault();
        e.stopPropagation();
        console.log('🖱️ Toggle button clicked!');
        togglePanel(); 
      });
      console.log('✅ Toggle button listener attached');
    } else {
      console.error('❌ Toggle button not found!');
    }
    
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => { 
        e.preventDefault(); 
        closePanel(); 
      });
      console.log('✅ Close button listener attached');
    }
    
    if (backToChatBtn) {
      backToChatBtn.addEventListener('click', (e) => {
        e.preventDefault();
        hideAgentForm();
      });
    }

    // Send message on button click
    if (sendBtn && inputField) {
      sendBtn.addEventListener('click', () => {
        const text = inputField.value;
        if (text.trim()) {
          addUserMessage(text);
          inputField.value = '';
        }
      });
      
      // Send message on Enter key
      inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          const text = inputField.value;
          if (text.trim()) {
            addUserMessage(text);
            inputField.value = '';
          }
        }
      });
    }

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!panel.classList.contains('is-open')) return;
      const within = panel.contains(e.target) || toggleBtn.contains(e.target);
      if (!within) closePanel();
    });

    // Initialize conversation
    loadConversation();
    
    console.log('✅ Chat widget initialized successfully!');
  }

  // Initialize after components load (ensures widget exists)
  console.log('📋 Registering chat widget initialization...');
  document.addEventListener('componentsLoaded', () => {
    console.log('🎉 Components loaded event fired!');
    setTimeout(() => {
      initChatWidget();
    }, 200);
  });
  
  // And attempt once on DOM ready (for cases where component is already present)
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    console.log('⚡ DOM already ready, initializing immediately...');
    setTimeout(initChatWidget, 300);
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      console.log('📄 DOMContentLoaded fired, initializing...');
      setTimeout(initChatWidget, 300);
    });
  }

  // Fallback: Watch for chat widget to appear in DOM
  const observer = new MutationObserver((mutations) => {
    const chatWidget = document.getElementById('gf-chat-widget');
    if (chatWidget) {
      console.log('👀 Chat widget detected by observer, initializing...');
      observer.disconnect();
      setTimeout(initChatWidget, 100);
    }
  });
  
  observer.observe(document.body, { childList: true, subtree: true });

})();