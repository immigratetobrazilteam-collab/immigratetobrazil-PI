
// Master JS for State: PI - Persona: Semi-Arid Survivor
// Comprehensive, mobile-first animations using GSAP (CDN: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>)
// Draws from js_data.json for globals; animations match stereotype (e.g., bouncy for expressive, smooth for conservative)
// Best practices: DOMContentLoaded, element checks, reduced motion support, mobile detection for shorter durations

document.addEventListener('DOMContentLoaded', () => {
  // Load js_data.json for globals (async fetch for modularity)
  fetch('js/js_data.json')
    .then(response => response.json())
    .then(data => {
      const intensityMod = data.persona.visual_intensity === 'high' ? 1.2 : data.persona.visual_intensity === 'medium' ? 1.0 : 0.8;
      const isMobile = window.innerWidth < 768;
      const mobileMod = data.animation_customizations.mobile_mod;
      const durationMod = isMobile ? intensityMod * mobileMod : intensityMod;

      // Reduced motion check (best practice)
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        return;  // Skip all animations
      }

      // General smooth scroll (vanilla JS, mobile-friendly)
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });

      // Section-specific animations (comprehensive, per role/ID)

  const pi_index_section_immigrate_to_piau = document.getElementById('pi-index-section-immigrate-to-piau');
  if (pi_index_section_immigrate_to_piau) {
    gsap.fromTo('#pi-index-section-immigrate-to-piau', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_index_form_immigrate_to_piau = document.getElementById('pi-index-form-immigrate-to-piau');
  if (pi_index_form_immigrate_to_piau) {
    gsap.from('#pi-index-form-immigrate-to-piau input, #pi-index-form-immigrate-to-piau textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_index_section_state_vibe = document.getElementById('pi-index-section-state-vibe');
  if (pi_index_section_state_vibe) {
    gsap.fromTo('#pi-index-section-state-vibe', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_index_section_quick_facts_snapshot = document.getElementById('pi-index-section-quick-facts-snapshot');
  if (pi_index_section_quick_facts_snapshot) {
    gsap.fromTo('#pi-index-section-quick-facts-snapshot', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_index_section_piau_map = document.getElementById('pi-index-section-piau-map');
  if (pi_index_section_piau_map) {
    gsap.fromTo('#pi-index-section-piau-map', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_index_section_cost_of_living_piau = document.getElementById('pi-index-section-cost-of-living-piau');
  if (pi_index_section_cost_of_living_piau) {
    gsap.fromTo('#pi-index-section-cost-of-living-piau', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_index_section_government_context = document.getElementById('pi-index-section-government-context');
  if (pi_index_section_government_context) {
    gsap.fromTo('#pi-index-section-government-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_index_hero_immigration_notes = document.getElementById('pi-index-hero-immigration-notes');
  if (pi_index_hero_immigration_notes) {
    gsap.fromTo('#pi-index-hero-immigration-notes', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_index_list_common_applicant_profiles = document.getElementById('pi-index-list-common-applicant-profiles');
  if (pi_index_list_common_applicant_profiles) {
    gsap.from('#pi-index-list-common-applicant-profiles li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_index_list_economic_drivers = document.getElementById('pi-index-list-economic-drivers');
  if (pi_index_list_economic_drivers) {
    gsap.from('#pi-index-list-economic-drivers li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_index_section_demographics = document.getElementById('pi-index-section-demographics');
  if (pi_index_section_demographics) {
    gsap.fromTo('#pi-index-section-demographics', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_index_section_regional_challenges = document.getElementById('pi-index-section-regional-challenges');
  if (pi_index_section_regional_challenges) {
    gsap.fromTo('#pi-index-section-regional-challenges', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_index_section_regional_opportunities = document.getElementById('pi-index-section-regional-opportunities');
  if (pi_index_section_regional_opportunities) {
    gsap.fromTo('#pi-index-section-regional-opportunities', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_index_section_culture_daily_life = document.getElementById('pi-index-section-culture-daily-life');
  if (pi_index_section_culture_daily_life) {
    gsap.fromTo('#pi-index-section-culture-daily-life', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_index_list_local_language_expressions = document.getElementById('pi-index-list-local-language-expressions');
  if (pi_index_list_local_language_expressions) {
    gsap.from('#pi-index-list-local-language-expressions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_index_list_food_cuisine = document.getElementById('pi-index-list-food-cuisine');
  if (pi_index_list_food_cuisine) {
    gsap.from('#pi-index-list-food-cuisine li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_index_list_festivals_traditions = document.getElementById('pi-index-list-festivals-traditions');
  if (pi_index_list_festivals_traditions) {
    gsap.from('#pi-index-list-festivals-traditions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_index_list_music_artistic_expression = document.getElementById('pi-index-list-music-artistic-expression');
  if (pi_index_list_music_artistic_expression) {
    gsap.from('#pi-index-list-music-artistic-expression li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_index_list_sports_recreation = document.getElementById('pi-index-list-sports-recreation');
  if (pi_index_list_sports_recreation) {
    gsap.from('#pi-index-list-sports-recreation li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_index_list_landmarks_historical_sites = document.getElementById('pi-index-list-landmarks-historical-sites');
  if (pi_index_list_landmarks_historical_sites) {
    gsap.from('#pi-index-list-landmarks-historical-sites li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_index_list_natural_features = document.getElementById('pi-index-list-natural-features');
  if (pi_index_list_natural_features) {
    gsap.from('#pi-index-list-natural-features li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_index_list_parks_protected_areas = document.getElementById('pi-index-list-parks-protected-areas');
  if (pi_index_list_parks_protected_areas) {
    gsap.from('#pi-index-list-parks-protected-areas li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_index_list_museums_cultural_institutions = document.getElementById('pi-index-list-museums-cultural-institutions');
  if (pi_index_list_museums_cultural_institutions) {
    gsap.from('#pi-index-list-museums-cultural-institutions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_index_section_image_gallery = document.getElementById('pi-index-section-image-gallery');
  if (pi_index_section_image_gallery) {
    gsap.fromTo('#pi-index-section-image-gallery', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_index_section_useful_government_links = document.getElementById('pi-index-section-useful-government-links');
  if (pi_index_section_useful_government_links) {
    gsap.fromTo('#pi-index-section-useful-government-links', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_index_hero_federal_police_immigration_links = document.getElementById('pi-index-hero-federal-police-immigration-links');
  if (pi_index_hero_federal_police_immigration_links) {
    gsap.fromTo('#pi-index-hero-federal-police-immigration-links', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_index_section_external_references = document.getElementById('pi-index-section-external-references');
  if (pi_index_section_external_references) {
    gsap.fromTo('#pi-index-section-external-references', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_index_list_immigration_services_overview = document.getElementById('pi-index-list-immigration-services-overview');
  if (pi_index_list_immigration_services_overview) {
    gsap.from('#pi-index-list-immigration-services-overview li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_index_section_why_immigrate_here = document.getElementById('pi-index-section-why-immigrate-here');
  if (pi_index_section_why_immigrate_here) {
    gsap.fromTo('#pi-index-section-why-immigrate-here', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_index_section_legal_guidance_disclaimers = document.getElementById('pi-index-section-legal-guidance-disclaimers');
  if (pi_index_section_legal_guidance_disclaimers) {
    gsap.fromTo('#pi-index-section-legal-guidance-disclaimers', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_index_list_travel_services = document.getElementById('pi-index-list-travel-services');
  if (pi_index_list_travel_services) {
    gsap.from('#pi-index-list-travel-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_index_list_how_the_process_works = document.getElementById('pi-index-list-how-the-process-works');
  if (pi_index_list_how_the_process_works) {
    gsap.from('#pi-index-list-how-the-process-works li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_index_section__frequently_asked_questions_about_living_in_piau_ = document.getElementById('pi-index-section--frequently-asked-questions-about-living-in-piau-');
  if (pi_index_section__frequently_asked_questions_about_living_in_piau_) {
    gsap.fromTo('#pi-index-section--frequently-asked-questions-about-living-in-piau-', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const contact_cta.html = document.getElementById('contact-cta.html');
  if (contact_cta.html) {
    gsap.fromTo('#contact-cta.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_contactcta_section_get_started_in_piau = document.getElementById('pi-contactcta-section-get-started-in-piau');
  if (pi_contactcta_section_get_started_in_piau) {
    gsap.fromTo('#pi-contactcta-section-get-started-in-piau', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const renouncing_citizenship.html = document.getElementById('renouncing-citizenship.html');
  if (renouncing_citizenship.html) {
    gsap.fromTo('#renouncing-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_renouncingcitizenship_form_renounce_brazilian_citizenship = document.getElementById('pi-renouncingcitizenship-form-renounce-brazilian-citizenship');
  if (pi_renouncingcitizenship_form_renounce_brazilian_citizenship) {
    gsap.from('#pi-renouncingcitizenship-form-renounce-brazilian-citizenship input, #pi-renouncingcitizenship-form-renounce-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_renouncingcitizenship_list_quick_facts = document.getElementById('pi-renouncingcitizenship-list-quick-facts');
  if (pi_renouncingcitizenship_list_quick_facts) {
    gsap.from('#pi-renouncingcitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_renouncingcitizenship_list_common_challenges_applicants_face = document.getElementById('pi-renouncingcitizenship-list-common-challenges-applicants-face');
  if (pi_renouncingcitizenship_list_common_challenges_applicants_face) {
    gsap.from('#pi-renouncingcitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_renouncingcitizenship_list_how_we_solve_these_challenges = document.getElementById('pi-renouncingcitizenship-list-how-we-solve-these-challenges');
  if (pi_renouncingcitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#pi-renouncingcitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_renouncingcitizenship_section_renunciation_overview = document.getElementById('pi-renouncingcitizenship-section-renunciation-overview');
  if (pi_renouncingcitizenship_section_renunciation_overview) {
    gsap.fromTo('#pi-renouncingcitizenship-section-renunciation-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_renouncingcitizenship_form_who_is_this_for = document.getElementById('pi-renouncingcitizenship-form-who-is-this-for');
  if (pi_renouncingcitizenship_form_who_is_this_for) {
    gsap.from('#pi-renouncingcitizenship-form-who-is-this-for input, #pi-renouncingcitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_renouncingcitizenship_list_required_documents = document.getElementById('pi-renouncingcitizenship-list-required-documents');
  if (pi_renouncingcitizenship_list_required_documents) {
    gsap.from('#pi-renouncingcitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_renouncingcitizenship_list_process = document.getElementById('pi-renouncingcitizenship-list-process');
  if (pi_renouncingcitizenship_list_process) {
    gsap.from('#pi-renouncingcitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_renouncingcitizenship_section_timelines_deadlines = document.getElementById('pi-renouncingcitizenship-section-timelines-deadlines');
  if (pi_renouncingcitizenship_section_timelines_deadlines) {
    gsap.fromTo('#pi-renouncingcitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_renouncingcitizenship_section_fees_costs = document.getElementById('pi-renouncingcitizenship-section-fees-costs');
  if (pi_renouncingcitizenship_section_fees_costs) {
    gsap.fromTo('#pi-renouncingcitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_renouncingcitizenship_list_risks_common_mistakes = document.getElementById('pi-renouncingcitizenship-list-risks-common-mistakes');
  if (pi_renouncingcitizenship_list_risks_common_mistakes) {
    gsap.from('#pi-renouncingcitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_renouncingcitizenship_section_diy_vs_professional_assistance = document.getElementById('pi-renouncingcitizenship-section-diy-vs-professional-assistance');
  if (pi_renouncingcitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-renouncingcitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_renouncingcitizenship_section_piau_specific_context = document.getElementById('pi-renouncingcitizenship-section-piau-specific-context');
  if (pi_renouncingcitizenship_section_piau_specific_context) {
    gsap.fromTo('#pi-renouncingcitizenship-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_renouncingcitizenship_section_what_our_clients_say = document.getElementById('pi-renouncingcitizenship-section-what-our-clients-say');
  if (pi_renouncingcitizenship_section_what_our_clients_say) {
    gsap.fromTo('#pi-renouncingcitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_renouncingcitizenship_section_frequently_asked_questions = document.getElementById('pi-renouncingcitizenship-section-frequently-asked-questions');
  if (pi_renouncingcitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#pi-renouncingcitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_renouncingcitizenship_section_international_support = document.getElementById('pi-renouncingcitizenship-section-international-support');
  if (pi_renouncingcitizenship_section_international_support) {
    gsap.fromTo('#pi-renouncingcitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_renouncingcitizenship_list_our_credentials = document.getElementById('pi-renouncingcitizenship-list-our-credentials');
  if (pi_renouncingcitizenship_list_our_credentials) {
    gsap.from('#pi-renouncingcitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_renouncingcitizenship_list_related_services = document.getElementById('pi-renouncingcitizenship-list-related-services');
  if (pi_renouncingcitizenship_list_related_services) {
    gsap.from('#pi-renouncingcitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_renouncingcitizenship_section_youre_in_good_hands = document.getElementById('pi-renouncingcitizenship-section-youre-in-good-hands');
  if (pi_renouncingcitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#pi-renouncingcitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_renouncingcitizenship_section_21 = document.getElementById('pi-renouncingcitizenship-section-21');
  if (pi_renouncingcitizenship_section_21) {
    gsap.fromTo('#pi-renouncingcitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_provisional_form_provisional_naturalisation_in_brazil_for_minors = document.getElementById('pi-provisional-form-provisional-naturalisation-in-brazil-for-minors');
  if (pi_provisional_form_provisional_naturalisation_in_brazil_for_minors) {
    gsap.from('#pi-provisional-form-provisional-naturalisation-in-brazil-for-minors input, #pi-provisional-form-provisional-naturalisation-in-brazil-for-minors textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_provisional_list_quick_facts = document.getElementById('pi-provisional-list-quick-facts');
  if (pi_provisional_list_quick_facts) {
    gsap.from('#pi-provisional-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_provisional_list_common_challenges_applicants_face = document.getElementById('pi-provisional-list-common-challenges-applicants-face');
  if (pi_provisional_list_common_challenges_applicants_face) {
    gsap.from('#pi-provisional-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_provisional_list_how_we_solve_these_challenges = document.getElementById('pi-provisional-list-how-we-solve-these-challenges');
  if (pi_provisional_list_how_we_solve_these_challenges) {
    gsap.from('#pi-provisional-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_provisional_section_naturalisation_overview = document.getElementById('pi-provisional-section-naturalisation-overview');
  if (pi_provisional_section_naturalisation_overview) {
    gsap.fromTo('#pi-provisional-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_provisional_form_who_is_this_naturalisation_for = document.getElementById('pi-provisional-form-who-is-this-naturalisation-for');
  if (pi_provisional_form_who_is_this_naturalisation_for) {
    gsap.from('#pi-provisional-form-who-is-this-naturalisation-for input, #pi-provisional-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_provisional_list_required_documents = document.getElementById('pi-provisional-list-required-documents');
  if (pi_provisional_list_required_documents) {
    gsap.from('#pi-provisional-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_provisional_list_application_process = document.getElementById('pi-provisional-list-application-process');
  if (pi_provisional_list_application_process) {
    gsap.from('#pi-provisional-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_provisional_section_timelines_deadlines = document.getElementById('pi-provisional-section-timelines-deadlines');
  if (pi_provisional_section_timelines_deadlines) {
    gsap.fromTo('#pi-provisional-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_provisional_section_fees_costs = document.getElementById('pi-provisional-section-fees-costs');
  if (pi_provisional_section_fees_costs) {
    gsap.fromTo('#pi-provisional-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_provisional_list_risks_common_mistakes = document.getElementById('pi-provisional-list-risks-common-mistakes');
  if (pi_provisional_list_risks_common_mistakes) {
    gsap.from('#pi-provisional-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_provisional_section_diy_vs_professional_assistance = document.getElementById('pi-provisional-section-diy-vs-professional-assistance');
  if (pi_provisional_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-provisional-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_provisional_section_piau_specific_context = document.getElementById('pi-provisional-section-piau-specific-context');
  if (pi_provisional_section_piau_specific_context) {
    gsap.fromTo('#pi-provisional-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_provisional_section_what_our_clients_say = document.getElementById('pi-provisional-section-what-our-clients-say');
  if (pi_provisional_section_what_our_clients_say) {
    gsap.fromTo('#pi-provisional-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_provisional_section_frequently_asked_questions = document.getElementById('pi-provisional-section-frequently-asked-questions');
  if (pi_provisional_section_frequently_asked_questions) {
    gsap.fromTo('#pi-provisional-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_provisional_section_international_support = document.getElementById('pi-provisional-section-international-support');
  if (pi_provisional_section_international_support) {
    gsap.fromTo('#pi-provisional-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_provisional_list_our_credentials = document.getElementById('pi-provisional-list-our-credentials');
  if (pi_provisional_list_our_credentials) {
    gsap.from('#pi-provisional-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_provisional_list_related_services = document.getElementById('pi-provisional-list-related-services');
  if (pi_provisional_list_related_services) {
    gsap.from('#pi-provisional-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_provisional_section_youre_in_good_hands = document.getElementById('pi-provisional-section-youre-in-good-hands');
  if (pi_provisional_section_youre_in_good_hands) {
    gsap.fromTo('#pi-provisional-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_provisional_section_21 = document.getElementById('pi-provisional-section-21');
  if (pi_provisional_section_21) {
    gsap.fromTo('#pi-provisional-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_special_form_special_naturalisation_in_brazil_for_particular_cases = document.getElementById('pi-special-form-special-naturalisation-in-brazil-for-particular-cases');
  if (pi_special_form_special_naturalisation_in_brazil_for_particular_cases) {
    gsap.from('#pi-special-form-special-naturalisation-in-brazil-for-particular-cases input, #pi-special-form-special-naturalisation-in-brazil-for-particular-cases textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_special_list_quick_facts = document.getElementById('pi-special-list-quick-facts');
  if (pi_special_list_quick_facts) {
    gsap.from('#pi-special-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_special_list_common_challenges_applicants_face = document.getElementById('pi-special-list-common-challenges-applicants-face');
  if (pi_special_list_common_challenges_applicants_face) {
    gsap.from('#pi-special-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_special_list_how_we_solve_these_challenges = document.getElementById('pi-special-list-how-we-solve-these-challenges');
  if (pi_special_list_how_we_solve_these_challenges) {
    gsap.from('#pi-special-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_special_section_naturalisation_overview = document.getElementById('pi-special-section-naturalisation-overview');
  if (pi_special_section_naturalisation_overview) {
    gsap.fromTo('#pi-special-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_special_form_who_is_this_naturalisation_for = document.getElementById('pi-special-form-who-is-this-naturalisation-for');
  if (pi_special_form_who_is_this_naturalisation_for) {
    gsap.from('#pi-special-form-who-is-this-naturalisation-for input, #pi-special-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_special_list_required_documents = document.getElementById('pi-special-list-required-documents');
  if (pi_special_list_required_documents) {
    gsap.from('#pi-special-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_special_list_application_process = document.getElementById('pi-special-list-application-process');
  if (pi_special_list_application_process) {
    gsap.from('#pi-special-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_special_section_timelines_deadlines = document.getElementById('pi-special-section-timelines-deadlines');
  if (pi_special_section_timelines_deadlines) {
    gsap.fromTo('#pi-special-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_special_section_fees_costs = document.getElementById('pi-special-section-fees-costs');
  if (pi_special_section_fees_costs) {
    gsap.fromTo('#pi-special-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_special_list_risks_common_mistakes = document.getElementById('pi-special-list-risks-common-mistakes');
  if (pi_special_list_risks_common_mistakes) {
    gsap.from('#pi-special-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_special_section_diy_vs_professional_assistance = document.getElementById('pi-special-section-diy-vs-professional-assistance');
  if (pi_special_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-special-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_special_section_piau_specific_context = document.getElementById('pi-special-section-piau-specific-context');
  if (pi_special_section_piau_specific_context) {
    gsap.fromTo('#pi-special-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_special_section_what_our_clients_say = document.getElementById('pi-special-section-what-our-clients-say');
  if (pi_special_section_what_our_clients_say) {
    gsap.fromTo('#pi-special-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_special_section_frequently_asked_questions = document.getElementById('pi-special-section-frequently-asked-questions');
  if (pi_special_section_frequently_asked_questions) {
    gsap.fromTo('#pi-special-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_special_section_international_support = document.getElementById('pi-special-section-international-support');
  if (pi_special_section_international_support) {
    gsap.fromTo('#pi-special-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_special_list_our_credentials = document.getElementById('pi-special-list-our-credentials');
  if (pi_special_list_our_credentials) {
    gsap.from('#pi-special-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_special_list_related_services = document.getElementById('pi-special-list-related-services');
  if (pi_special_list_related_services) {
    gsap.from('#pi-special-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_special_section_youre_in_good_hands = document.getElementById('pi-special-section-youre-in-good-hands');
  if (pi_special_section_youre_in_good_hands) {
    gsap.fromTo('#pi-special-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_special_section_21 = document.getElementById('pi-special-section-21');
  if (pi_special_section_21) {
    gsap.fromTo('#pi-special-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation = document.getElementById('pi-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation');
  if (pi_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation) {
    gsap.from('#pi-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation input, #pi-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_ordinary_list_quick_facts = document.getElementById('pi-ordinary-list-quick-facts');
  if (pi_ordinary_list_quick_facts) {
    gsap.from('#pi-ordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_ordinary_list_common_challenges_applicants_face = document.getElementById('pi-ordinary-list-common-challenges-applicants-face');
  if (pi_ordinary_list_common_challenges_applicants_face) {
    gsap.from('#pi-ordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_ordinary_list_how_we_solve_these_challenges = document.getElementById('pi-ordinary-list-how-we-solve-these-challenges');
  if (pi_ordinary_list_how_we_solve_these_challenges) {
    gsap.from('#pi-ordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_ordinary_section_naturalisation_overview = document.getElementById('pi-ordinary-section-naturalisation-overview');
  if (pi_ordinary_section_naturalisation_overview) {
    gsap.fromTo('#pi-ordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_ordinary_form_who_is_this_naturalisation_for = document.getElementById('pi-ordinary-form-who-is-this-naturalisation-for');
  if (pi_ordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#pi-ordinary-form-who-is-this-naturalisation-for input, #pi-ordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_ordinary_list_required_documents = document.getElementById('pi-ordinary-list-required-documents');
  if (pi_ordinary_list_required_documents) {
    gsap.from('#pi-ordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_ordinary_list_application_process = document.getElementById('pi-ordinary-list-application-process');
  if (pi_ordinary_list_application_process) {
    gsap.from('#pi-ordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_ordinary_section_timelines_deadlines = document.getElementById('pi-ordinary-section-timelines-deadlines');
  if (pi_ordinary_section_timelines_deadlines) {
    gsap.fromTo('#pi-ordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_ordinary_section_fees_costs = document.getElementById('pi-ordinary-section-fees-costs');
  if (pi_ordinary_section_fees_costs) {
    gsap.fromTo('#pi-ordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_ordinary_list_risks_common_mistakes = document.getElementById('pi-ordinary-list-risks-common-mistakes');
  if (pi_ordinary_list_risks_common_mistakes) {
    gsap.from('#pi-ordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_ordinary_section_diy_vs_professional_assistance = document.getElementById('pi-ordinary-section-diy-vs-professional-assistance');
  if (pi_ordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-ordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_ordinary_section_piau_specific_context = document.getElementById('pi-ordinary-section-piau-specific-context');
  if (pi_ordinary_section_piau_specific_context) {
    gsap.fromTo('#pi-ordinary-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_ordinary_section_what_our_clients_say = document.getElementById('pi-ordinary-section-what-our-clients-say');
  if (pi_ordinary_section_what_our_clients_say) {
    gsap.fromTo('#pi-ordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_ordinary_section_frequently_asked_questions = document.getElementById('pi-ordinary-section-frequently-asked-questions');
  if (pi_ordinary_section_frequently_asked_questions) {
    gsap.fromTo('#pi-ordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_ordinary_section_international_support = document.getElementById('pi-ordinary-section-international-support');
  if (pi_ordinary_section_international_support) {
    gsap.fromTo('#pi-ordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_ordinary_list_our_credentials = document.getElementById('pi-ordinary-list-our-credentials');
  if (pi_ordinary_list_our_credentials) {
    gsap.from('#pi-ordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_ordinary_list_related_services = document.getElementById('pi-ordinary-list-related-services');
  if (pi_ordinary_list_related_services) {
    gsap.from('#pi-ordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_ordinary_section_youre_in_good_hands = document.getElementById('pi-ordinary-section-youre-in-good-hands');
  if (pi_ordinary_section_youre_in_good_hands) {
    gsap.fromTo('#pi-ordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_ordinary_section_21 = document.getElementById('pi-ordinary-section-21');
  if (pi_ordinary_section_21) {
    gsap.fromTo('#pi-ordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions = document.getElementById('pi-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions');
  if (pi_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions) {
    gsap.from('#pi-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions input, #pi-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_extraordinary_list_quick_facts = document.getElementById('pi-extraordinary-list-quick-facts');
  if (pi_extraordinary_list_quick_facts) {
    gsap.from('#pi-extraordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_extraordinary_list_common_challenges_applicants_face = document.getElementById('pi-extraordinary-list-common-challenges-applicants-face');
  if (pi_extraordinary_list_common_challenges_applicants_face) {
    gsap.from('#pi-extraordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_extraordinary_list_how_we_solve_these_challenges = document.getElementById('pi-extraordinary-list-how-we-solve-these-challenges');
  if (pi_extraordinary_list_how_we_solve_these_challenges) {
    gsap.from('#pi-extraordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_extraordinary_section_naturalisation_overview = document.getElementById('pi-extraordinary-section-naturalisation-overview');
  if (pi_extraordinary_section_naturalisation_overview) {
    gsap.fromTo('#pi-extraordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_extraordinary_form_who_is_this_naturalisation_for = document.getElementById('pi-extraordinary-form-who-is-this-naturalisation-for');
  if (pi_extraordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#pi-extraordinary-form-who-is-this-naturalisation-for input, #pi-extraordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_extraordinary_list_required_documents = document.getElementById('pi-extraordinary-list-required-documents');
  if (pi_extraordinary_list_required_documents) {
    gsap.from('#pi-extraordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_extraordinary_list_application_process = document.getElementById('pi-extraordinary-list-application-process');
  if (pi_extraordinary_list_application_process) {
    gsap.from('#pi-extraordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_extraordinary_section_timelines_deadlines = document.getElementById('pi-extraordinary-section-timelines-deadlines');
  if (pi_extraordinary_section_timelines_deadlines) {
    gsap.fromTo('#pi-extraordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_extraordinary_section_fees_costs = document.getElementById('pi-extraordinary-section-fees-costs');
  if (pi_extraordinary_section_fees_costs) {
    gsap.fromTo('#pi-extraordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_extraordinary_list_risks_common_mistakes = document.getElementById('pi-extraordinary-list-risks-common-mistakes');
  if (pi_extraordinary_list_risks_common_mistakes) {
    gsap.from('#pi-extraordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_extraordinary_section_diy_vs_professional_assistance = document.getElementById('pi-extraordinary-section-diy-vs-professional-assistance');
  if (pi_extraordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-extraordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_extraordinary_section_piau_specific_context = document.getElementById('pi-extraordinary-section-piau-specific-context');
  if (pi_extraordinary_section_piau_specific_context) {
    gsap.fromTo('#pi-extraordinary-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_extraordinary_section_what_our_clients_say = document.getElementById('pi-extraordinary-section-what-our-clients-say');
  if (pi_extraordinary_section_what_our_clients_say) {
    gsap.fromTo('#pi-extraordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_extraordinary_section_frequently_asked_questions = document.getElementById('pi-extraordinary-section-frequently-asked-questions');
  if (pi_extraordinary_section_frequently_asked_questions) {
    gsap.fromTo('#pi-extraordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_extraordinary_section_international_support = document.getElementById('pi-extraordinary-section-international-support');
  if (pi_extraordinary_section_international_support) {
    gsap.fromTo('#pi-extraordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_extraordinary_list_our_credentials = document.getElementById('pi-extraordinary-list-our-credentials');
  if (pi_extraordinary_list_our_credentials) {
    gsap.from('#pi-extraordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_extraordinary_list_related_services = document.getElementById('pi-extraordinary-list-related-services');
  if (pi_extraordinary_list_related_services) {
    gsap.from('#pi-extraordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_extraordinary_section_youre_in_good_hands = document.getElementById('pi-extraordinary-section-youre-in-good-hands');
  if (pi_extraordinary_section_youre_in_good_hands) {
    gsap.fromTo('#pi-extraordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_extraordinary_section_21 = document.getElementById('pi-extraordinary-section-21');
  if (pi_extraordinary_section_21) {
    gsap.fromTo('#pi-extraordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const reacquisition_citizenship.html = document.getElementById('reacquisition-citizenship.html');
  if (reacquisition_citizenship.html) {
    gsap.fromTo('#reacquisition-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_reacquisitioncitizenship_form_reacquire_brazilian_citizenship = document.getElementById('pi-reacquisitioncitizenship-form-reacquire-brazilian-citizenship');
  if (pi_reacquisitioncitizenship_form_reacquire_brazilian_citizenship) {
    gsap.from('#pi-reacquisitioncitizenship-form-reacquire-brazilian-citizenship input, #pi-reacquisitioncitizenship-form-reacquire-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_reacquisitioncitizenship_list_quick_facts = document.getElementById('pi-reacquisitioncitizenship-list-quick-facts');
  if (pi_reacquisitioncitizenship_list_quick_facts) {
    gsap.from('#pi-reacquisitioncitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_reacquisitioncitizenship_list_common_challenges_applicants_face = document.getElementById('pi-reacquisitioncitizenship-list-common-challenges-applicants-face');
  if (pi_reacquisitioncitizenship_list_common_challenges_applicants_face) {
    gsap.from('#pi-reacquisitioncitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_reacquisitioncitizenship_list_how_we_solve_these_challenges = document.getElementById('pi-reacquisitioncitizenship-list-how-we-solve-these-challenges');
  if (pi_reacquisitioncitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#pi-reacquisitioncitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_reacquisitioncitizenship_section_reacquisition_overview = document.getElementById('pi-reacquisitioncitizenship-section-reacquisition-overview');
  if (pi_reacquisitioncitizenship_section_reacquisition_overview) {
    gsap.fromTo('#pi-reacquisitioncitizenship-section-reacquisition-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_reacquisitioncitizenship_form_who_is_this_for = document.getElementById('pi-reacquisitioncitizenship-form-who-is-this-for');
  if (pi_reacquisitioncitizenship_form_who_is_this_for) {
    gsap.from('#pi-reacquisitioncitizenship-form-who-is-this-for input, #pi-reacquisitioncitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_reacquisitioncitizenship_list_required_documents = document.getElementById('pi-reacquisitioncitizenship-list-required-documents');
  if (pi_reacquisitioncitizenship_list_required_documents) {
    gsap.from('#pi-reacquisitioncitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_reacquisitioncitizenship_list_process = document.getElementById('pi-reacquisitioncitizenship-list-process');
  if (pi_reacquisitioncitizenship_list_process) {
    gsap.from('#pi-reacquisitioncitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_reacquisitioncitizenship_section_timelines_deadlines = document.getElementById('pi-reacquisitioncitizenship-section-timelines-deadlines');
  if (pi_reacquisitioncitizenship_section_timelines_deadlines) {
    gsap.fromTo('#pi-reacquisitioncitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_reacquisitioncitizenship_section_fees_costs = document.getElementById('pi-reacquisitioncitizenship-section-fees-costs');
  if (pi_reacquisitioncitizenship_section_fees_costs) {
    gsap.fromTo('#pi-reacquisitioncitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_reacquisitioncitizenship_list_risks_common_mistakes = document.getElementById('pi-reacquisitioncitizenship-list-risks-common-mistakes');
  if (pi_reacquisitioncitizenship_list_risks_common_mistakes) {
    gsap.from('#pi-reacquisitioncitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_reacquisitioncitizenship_section_diy_vs_professional_assistance = document.getElementById('pi-reacquisitioncitizenship-section-diy-vs-professional-assistance');
  if (pi_reacquisitioncitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-reacquisitioncitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_reacquisitioncitizenship_section_piau_specific_context = document.getElementById('pi-reacquisitioncitizenship-section-piau-specific-context');
  if (pi_reacquisitioncitizenship_section_piau_specific_context) {
    gsap.fromTo('#pi-reacquisitioncitizenship-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_reacquisitioncitizenship_section_what_our_clients_say = document.getElementById('pi-reacquisitioncitizenship-section-what-our-clients-say');
  if (pi_reacquisitioncitizenship_section_what_our_clients_say) {
    gsap.fromTo('#pi-reacquisitioncitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_reacquisitioncitizenship_section_frequently_asked_questions = document.getElementById('pi-reacquisitioncitizenship-section-frequently-asked-questions');
  if (pi_reacquisitioncitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#pi-reacquisitioncitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_reacquisitioncitizenship_section_international_support = document.getElementById('pi-reacquisitioncitizenship-section-international-support');
  if (pi_reacquisitioncitizenship_section_international_support) {
    gsap.fromTo('#pi-reacquisitioncitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_reacquisitioncitizenship_list_our_credentials = document.getElementById('pi-reacquisitioncitizenship-list-our-credentials');
  if (pi_reacquisitioncitizenship_list_our_credentials) {
    gsap.from('#pi-reacquisitioncitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_reacquisitioncitizenship_list_related_services = document.getElementById('pi-reacquisitioncitizenship-list-related-services');
  if (pi_reacquisitioncitizenship_list_related_services) {
    gsap.from('#pi-reacquisitioncitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_reacquisitioncitizenship_section_youre_in_good_hands = document.getElementById('pi-reacquisitioncitizenship-section-youre-in-good-hands');
  if (pi_reacquisitioncitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#pi-reacquisitioncitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_reacquisitioncitizenship_section_21 = document.getElementById('pi-reacquisitioncitizenship-section-21');
  if (pi_reacquisitioncitizenship_section_21) {
    gsap.fromTo('#pi-reacquisitioncitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const scientific_research.html = document.getElementById('scientific-research.html');
  if (scientific_research.html) {
    gsap.fromTo('#scientific-research.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil = document.getElementById('pi-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil');
  if (pi_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil) {
    gsap.from('#pi-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil input, #pi-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_scientificresearch_list_quick_facts = document.getElementById('pi-scientificresearch-list-quick-facts');
  if (pi_scientificresearch_list_quick_facts) {
    gsap.from('#pi-scientificresearch-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_scientificresearch_list_common_challenges_applicants_face = document.getElementById('pi-scientificresearch-list-common-challenges-applicants-face');
  if (pi_scientificresearch_list_common_challenges_applicants_face) {
    gsap.from('#pi-scientificresearch-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_scientificresearch_list_how_we_solve_these_challenges = document.getElementById('pi-scientificresearch-list-how-we-solve-these-challenges');
  if (pi_scientificresearch_list_how_we_solve_these_challenges) {
    gsap.from('#pi-scientificresearch-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_scientificresearch_section_residency_overview = document.getElementById('pi-scientificresearch-section-residency-overview');
  if (pi_scientificresearch_section_residency_overview) {
    gsap.fromTo('#pi-scientificresearch-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_scientificresearch_form_who_is_this_residency_for = document.getElementById('pi-scientificresearch-form-who-is-this-residency-for');
  if (pi_scientificresearch_form_who_is_this_residency_for) {
    gsap.from('#pi-scientificresearch-form-who-is-this-residency-for input, #pi-scientificresearch-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_scientificresearch_list_required_documents = document.getElementById('pi-scientificresearch-list-required-documents');
  if (pi_scientificresearch_list_required_documents) {
    gsap.from('#pi-scientificresearch-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_scientificresearch_list_application_process = document.getElementById('pi-scientificresearch-list-application-process');
  if (pi_scientificresearch_list_application_process) {
    gsap.from('#pi-scientificresearch-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_scientificresearch_section_timelines_deadlines = document.getElementById('pi-scientificresearch-section-timelines-deadlines');
  if (pi_scientificresearch_section_timelines_deadlines) {
    gsap.fromTo('#pi-scientificresearch-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_scientificresearch_section_fees_costs = document.getElementById('pi-scientificresearch-section-fees-costs');
  if (pi_scientificresearch_section_fees_costs) {
    gsap.fromTo('#pi-scientificresearch-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_scientificresearch_list_risks_common_mistakes = document.getElementById('pi-scientificresearch-list-risks-common-mistakes');
  if (pi_scientificresearch_list_risks_common_mistakes) {
    gsap.from('#pi-scientificresearch-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_scientificresearch_section_diy_vs_professional_assistance = document.getElementById('pi-scientificresearch-section-diy-vs-professional-assistance');
  if (pi_scientificresearch_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-scientificresearch-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_scientificresearch_section_piau_specific_context = document.getElementById('pi-scientificresearch-section-piau-specific-context');
  if (pi_scientificresearch_section_piau_specific_context) {
    gsap.fromTo('#pi-scientificresearch-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_scientificresearch_section_what_our_clients_say = document.getElementById('pi-scientificresearch-section-what-our-clients-say');
  if (pi_scientificresearch_section_what_our_clients_say) {
    gsap.fromTo('#pi-scientificresearch-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_scientificresearch_section_frequently_asked_questions = document.getElementById('pi-scientificresearch-section-frequently-asked-questions');
  if (pi_scientificresearch_section_frequently_asked_questions) {
    gsap.fromTo('#pi-scientificresearch-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_scientificresearch_section_international_support = document.getElementById('pi-scientificresearch-section-international-support');
  if (pi_scientificresearch_section_international_support) {
    gsap.fromTo('#pi-scientificresearch-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_scientificresearch_list_our_credentials = document.getElementById('pi-scientificresearch-list-our-credentials');
  if (pi_scientificresearch_list_our_credentials) {
    gsap.from('#pi-scientificresearch-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_scientificresearch_list_related_services = document.getElementById('pi-scientificresearch-list-related-services');
  if (pi_scientificresearch_list_related_services) {
    gsap.from('#pi-scientificresearch-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_scientificresearch_section_youre_in_good_hands = document.getElementById('pi-scientificresearch-section-youre-in-good-hands');
  if (pi_scientificresearch_section_youre_in_good_hands) {
    gsap.fromTo('#pi-scientificresearch-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_scientificresearch_section_21 = document.getElementById('pi-scientificresearch-section-21');
  if (pi_scientificresearch_section_21) {
    gsap.fromTo('#pi-scientificresearch-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_study_form_study_in_brazil_with_study_residency = document.getElementById('pi-study-form-study-in-brazil-with-study-residency');
  if (pi_study_form_study_in_brazil_with_study_residency) {
    gsap.from('#pi-study-form-study-in-brazil-with-study-residency input, #pi-study-form-study-in-brazil-with-study-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_study_list_quick_facts = document.getElementById('pi-study-list-quick-facts');
  if (pi_study_list_quick_facts) {
    gsap.from('#pi-study-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_study_list_common_challenges_applicants_face = document.getElementById('pi-study-list-common-challenges-applicants-face');
  if (pi_study_list_common_challenges_applicants_face) {
    gsap.from('#pi-study-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_study_list_how_we_solve_these_challenges = document.getElementById('pi-study-list-how-we-solve-these-challenges');
  if (pi_study_list_how_we_solve_these_challenges) {
    gsap.from('#pi-study-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_study_section_residency_overview = document.getElementById('pi-study-section-residency-overview');
  if (pi_study_section_residency_overview) {
    gsap.fromTo('#pi-study-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_study_form_who_is_this_residency_for = document.getElementById('pi-study-form-who-is-this-residency-for');
  if (pi_study_form_who_is_this_residency_for) {
    gsap.from('#pi-study-form-who-is-this-residency-for input, #pi-study-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_study_list_required_documents = document.getElementById('pi-study-list-required-documents');
  if (pi_study_list_required_documents) {
    gsap.from('#pi-study-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_study_list_application_process = document.getElementById('pi-study-list-application-process');
  if (pi_study_list_application_process) {
    gsap.from('#pi-study-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_study_section_timelines_deadlines = document.getElementById('pi-study-section-timelines-deadlines');
  if (pi_study_section_timelines_deadlines) {
    gsap.fromTo('#pi-study-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_study_section_fees_costs = document.getElementById('pi-study-section-fees-costs');
  if (pi_study_section_fees_costs) {
    gsap.fromTo('#pi-study-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_study_list_risks_common_mistakes = document.getElementById('pi-study-list-risks-common-mistakes');
  if (pi_study_list_risks_common_mistakes) {
    gsap.from('#pi-study-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_study_section_diy_vs_professional_assistance = document.getElementById('pi-study-section-diy-vs-professional-assistance');
  if (pi_study_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-study-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_study_section_piau_specific_context = document.getElementById('pi-study-section-piau-specific-context');
  if (pi_study_section_piau_specific_context) {
    gsap.fromTo('#pi-study-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_study_section_what_our_clients_say = document.getElementById('pi-study-section-what-our-clients-say');
  if (pi_study_section_what_our_clients_say) {
    gsap.fromTo('#pi-study-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_study_section_frequently_asked_questions = document.getElementById('pi-study-section-frequently-asked-questions');
  if (pi_study_section_frequently_asked_questions) {
    gsap.fromTo('#pi-study-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_study_section_international_support = document.getElementById('pi-study-section-international-support');
  if (pi_study_section_international_support) {
    gsap.fromTo('#pi-study-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_study_list_our_credentials = document.getElementById('pi-study-list-our-credentials');
  if (pi_study_list_our_credentials) {
    gsap.from('#pi-study-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_study_list_related_services = document.getElementById('pi-study-list-related-services');
  if (pi_study_list_related_services) {
    gsap.from('#pi-study-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_study_section_youre_in_good_hands = document.getElementById('pi-study-section-youre-in-good-hands');
  if (pi_study_section_youre_in_good_hands) {
    gsap.fromTo('#pi-study-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_study_section_21 = document.getElementById('pi-study-section-21');
  if (pi_study_section_21) {
    gsap.fromTo('#pi-study-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const educational_exchange.html = document.getElementById('educational-exchange.html');
  if (educational_exchange.html) {
    gsap.fromTo('#educational-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil = document.getElementById('pi-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil');
  if (pi_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil) {
    gsap.from('#pi-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil input, #pi-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_educationalexchange_list_quick_facts = document.getElementById('pi-educationalexchange-list-quick-facts');
  if (pi_educationalexchange_list_quick_facts) {
    gsap.from('#pi-educationalexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_educationalexchange_list_common_challenges_applicants_face = document.getElementById('pi-educationalexchange-list-common-challenges-applicants-face');
  if (pi_educationalexchange_list_common_challenges_applicants_face) {
    gsap.from('#pi-educationalexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_educationalexchange_list_how_we_solve_these_challenges = document.getElementById('pi-educationalexchange-list-how-we-solve-these-challenges');
  if (pi_educationalexchange_list_how_we_solve_these_challenges) {
    gsap.from('#pi-educationalexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_educationalexchange_section_residency_overview = document.getElementById('pi-educationalexchange-section-residency-overview');
  if (pi_educationalexchange_section_residency_overview) {
    gsap.fromTo('#pi-educationalexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_educationalexchange_form_who_is_this_residency_for = document.getElementById('pi-educationalexchange-form-who-is-this-residency-for');
  if (pi_educationalexchange_form_who_is_this_residency_for) {
    gsap.from('#pi-educationalexchange-form-who-is-this-residency-for input, #pi-educationalexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_educationalexchange_list_required_documents = document.getElementById('pi-educationalexchange-list-required-documents');
  if (pi_educationalexchange_list_required_documents) {
    gsap.from('#pi-educationalexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_educationalexchange_list_application_process = document.getElementById('pi-educationalexchange-list-application-process');
  if (pi_educationalexchange_list_application_process) {
    gsap.from('#pi-educationalexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_educationalexchange_section_timelines_deadlines = document.getElementById('pi-educationalexchange-section-timelines-deadlines');
  if (pi_educationalexchange_section_timelines_deadlines) {
    gsap.fromTo('#pi-educationalexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_educationalexchange_section_fees_costs = document.getElementById('pi-educationalexchange-section-fees-costs');
  if (pi_educationalexchange_section_fees_costs) {
    gsap.fromTo('#pi-educationalexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_educationalexchange_list_risks_common_mistakes = document.getElementById('pi-educationalexchange-list-risks-common-mistakes');
  if (pi_educationalexchange_list_risks_common_mistakes) {
    gsap.from('#pi-educationalexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_educationalexchange_section_diy_vs_professional_assistance = document.getElementById('pi-educationalexchange-section-diy-vs-professional-assistance');
  if (pi_educationalexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-educationalexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_educationalexchange_section_piau_specific_context = document.getElementById('pi-educationalexchange-section-piau-specific-context');
  if (pi_educationalexchange_section_piau_specific_context) {
    gsap.fromTo('#pi-educationalexchange-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_educationalexchange_section_what_our_clients_say = document.getElementById('pi-educationalexchange-section-what-our-clients-say');
  if (pi_educationalexchange_section_what_our_clients_say) {
    gsap.fromTo('#pi-educationalexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_educationalexchange_section_frequently_asked_questions = document.getElementById('pi-educationalexchange-section-frequently-asked-questions');
  if (pi_educationalexchange_section_frequently_asked_questions) {
    gsap.fromTo('#pi-educationalexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_educationalexchange_section_international_support = document.getElementById('pi-educationalexchange-section-international-support');
  if (pi_educationalexchange_section_international_support) {
    gsap.fromTo('#pi-educationalexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_educationalexchange_list_our_credentials = document.getElementById('pi-educationalexchange-list-our-credentials');
  if (pi_educationalexchange_list_our_credentials) {
    gsap.from('#pi-educationalexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_educationalexchange_list_related_services = document.getElementById('pi-educationalexchange-list-related-services');
  if (pi_educationalexchange_list_related_services) {
    gsap.from('#pi-educationalexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_educationalexchange_section_youre_in_good_hands = document.getElementById('pi-educationalexchange-section-youre-in-good-hands');
  if (pi_educationalexchange_section_youre_in_good_hands) {
    gsap.fromTo('#pi-educationalexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_educationalexchange_section_21 = document.getElementById('pi-educationalexchange-section-21');
  if (pi_educationalexchange_section_21) {
    gsap.fromTo('#pi-educationalexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_humanitarian_form_humanitarian_residency_in_brazil_for_protection = document.getElementById('pi-humanitarian-form-humanitarian-residency-in-brazil-for-protection');
  if (pi_humanitarian_form_humanitarian_residency_in_brazil_for_protection) {
    gsap.from('#pi-humanitarian-form-humanitarian-residency-in-brazil-for-protection input, #pi-humanitarian-form-humanitarian-residency-in-brazil-for-protection textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_humanitarian_list_quick_facts = document.getElementById('pi-humanitarian-list-quick-facts');
  if (pi_humanitarian_list_quick_facts) {
    gsap.from('#pi-humanitarian-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_humanitarian_list_common_challenges_applicants_face = document.getElementById('pi-humanitarian-list-common-challenges-applicants-face');
  if (pi_humanitarian_list_common_challenges_applicants_face) {
    gsap.from('#pi-humanitarian-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_humanitarian_list_how_we_solve_these_challenges = document.getElementById('pi-humanitarian-list-how-we-solve-these-challenges');
  if (pi_humanitarian_list_how_we_solve_these_challenges) {
    gsap.from('#pi-humanitarian-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_humanitarian_section_residency_overview = document.getElementById('pi-humanitarian-section-residency-overview');
  if (pi_humanitarian_section_residency_overview) {
    gsap.fromTo('#pi-humanitarian-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_humanitarian_form_who_is_this_residency_for = document.getElementById('pi-humanitarian-form-who-is-this-residency-for');
  if (pi_humanitarian_form_who_is_this_residency_for) {
    gsap.from('#pi-humanitarian-form-who-is-this-residency-for input, #pi-humanitarian-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_humanitarian_list_required_documents = document.getElementById('pi-humanitarian-list-required-documents');
  if (pi_humanitarian_list_required_documents) {
    gsap.from('#pi-humanitarian-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_humanitarian_list_application_process = document.getElementById('pi-humanitarian-list-application-process');
  if (pi_humanitarian_list_application_process) {
    gsap.from('#pi-humanitarian-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_humanitarian_section_timelines_deadlines = document.getElementById('pi-humanitarian-section-timelines-deadlines');
  if (pi_humanitarian_section_timelines_deadlines) {
    gsap.fromTo('#pi-humanitarian-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_humanitarian_section_fees_costs = document.getElementById('pi-humanitarian-section-fees-costs');
  if (pi_humanitarian_section_fees_costs) {
    gsap.fromTo('#pi-humanitarian-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_humanitarian_list_risks_common_mistakes = document.getElementById('pi-humanitarian-list-risks-common-mistakes');
  if (pi_humanitarian_list_risks_common_mistakes) {
    gsap.from('#pi-humanitarian-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_humanitarian_section_diy_vs_professional_assistance = document.getElementById('pi-humanitarian-section-diy-vs-professional-assistance');
  if (pi_humanitarian_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-humanitarian-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_humanitarian_section_piau_specific_context = document.getElementById('pi-humanitarian-section-piau-specific-context');
  if (pi_humanitarian_section_piau_specific_context) {
    gsap.fromTo('#pi-humanitarian-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_humanitarian_section_what_our_clients_say = document.getElementById('pi-humanitarian-section-what-our-clients-say');
  if (pi_humanitarian_section_what_our_clients_say) {
    gsap.fromTo('#pi-humanitarian-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_humanitarian_section_frequently_asked_questions = document.getElementById('pi-humanitarian-section-frequently-asked-questions');
  if (pi_humanitarian_section_frequently_asked_questions) {
    gsap.fromTo('#pi-humanitarian-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_humanitarian_section_international_support = document.getElementById('pi-humanitarian-section-international-support');
  if (pi_humanitarian_section_international_support) {
    gsap.fromTo('#pi-humanitarian-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_humanitarian_list_our_credentials = document.getElementById('pi-humanitarian-list-our-credentials');
  if (pi_humanitarian_list_our_credentials) {
    gsap.from('#pi-humanitarian-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_humanitarian_list_related_services = document.getElementById('pi-humanitarian-list-related-services');
  if (pi_humanitarian_list_related_services) {
    gsap.from('#pi-humanitarian-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_humanitarian_section_youre_in_good_hands = document.getElementById('pi-humanitarian-section-youre-in-good-hands');
  if (pi_humanitarian_section_youre_in_good_hands) {
    gsap.fromTo('#pi-humanitarian-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_humanitarian_section_21 = document.getElementById('pi-humanitarian-section-21');
  if (pi_humanitarian_section_21) {
    gsap.fromTo('#pi-humanitarian-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const digital_nomad.html = document.getElementById('digital-nomad.html');
  if (digital_nomad.html) {
    gsap.fromTo('#digital-nomad.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_digitalnomad_form_digital_nomad_residency_in_brazil = document.getElementById('pi-digitalnomad-form-digital-nomad-residency-in-brazil');
  if (pi_digitalnomad_form_digital_nomad_residency_in_brazil) {
    gsap.from('#pi-digitalnomad-form-digital-nomad-residency-in-brazil input, #pi-digitalnomad-form-digital-nomad-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_digitalnomad_list_quick_facts = document.getElementById('pi-digitalnomad-list-quick-facts');
  if (pi_digitalnomad_list_quick_facts) {
    gsap.from('#pi-digitalnomad-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_digitalnomad_list_common_challenges_applicants_face = document.getElementById('pi-digitalnomad-list-common-challenges-applicants-face');
  if (pi_digitalnomad_list_common_challenges_applicants_face) {
    gsap.from('#pi-digitalnomad-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_digitalnomad_list_how_we_solve_these_challenges = document.getElementById('pi-digitalnomad-list-how-we-solve-these-challenges');
  if (pi_digitalnomad_list_how_we_solve_these_challenges) {
    gsap.from('#pi-digitalnomad-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_digitalnomad_section_residency_overview = document.getElementById('pi-digitalnomad-section-residency-overview');
  if (pi_digitalnomad_section_residency_overview) {
    gsap.fromTo('#pi-digitalnomad-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_digitalnomad_form_who_is_this_residency_for = document.getElementById('pi-digitalnomad-form-who-is-this-residency-for');
  if (pi_digitalnomad_form_who_is_this_residency_for) {
    gsap.from('#pi-digitalnomad-form-who-is-this-residency-for input, #pi-digitalnomad-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_digitalnomad_list_required_documents = document.getElementById('pi-digitalnomad-list-required-documents');
  if (pi_digitalnomad_list_required_documents) {
    gsap.from('#pi-digitalnomad-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_digitalnomad_list_application_process = document.getElementById('pi-digitalnomad-list-application-process');
  if (pi_digitalnomad_list_application_process) {
    gsap.from('#pi-digitalnomad-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_digitalnomad_section_timelines_deadlines = document.getElementById('pi-digitalnomad-section-timelines-deadlines');
  if (pi_digitalnomad_section_timelines_deadlines) {
    gsap.fromTo('#pi-digitalnomad-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_digitalnomad_section_fees_costs = document.getElementById('pi-digitalnomad-section-fees-costs');
  if (pi_digitalnomad_section_fees_costs) {
    gsap.fromTo('#pi-digitalnomad-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_digitalnomad_list_risks_common_mistakes = document.getElementById('pi-digitalnomad-list-risks-common-mistakes');
  if (pi_digitalnomad_list_risks_common_mistakes) {
    gsap.from('#pi-digitalnomad-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_digitalnomad_section_diy_vs_professional_assistance = document.getElementById('pi-digitalnomad-section-diy-vs-professional-assistance');
  if (pi_digitalnomad_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-digitalnomad-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_digitalnomad_section_piau_specific_context = document.getElementById('pi-digitalnomad-section-piau-specific-context');
  if (pi_digitalnomad_section_piau_specific_context) {
    gsap.fromTo('#pi-digitalnomad-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_digitalnomad_section_what_our_clients_say = document.getElementById('pi-digitalnomad-section-what-our-clients-say');
  if (pi_digitalnomad_section_what_our_clients_say) {
    gsap.fromTo('#pi-digitalnomad-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_digitalnomad_section_frequently_asked_questions = document.getElementById('pi-digitalnomad-section-frequently-asked-questions');
  if (pi_digitalnomad_section_frequently_asked_questions) {
    gsap.fromTo('#pi-digitalnomad-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_digitalnomad_section_international_support = document.getElementById('pi-digitalnomad-section-international-support');
  if (pi_digitalnomad_section_international_support) {
    gsap.fromTo('#pi-digitalnomad-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_digitalnomad_list_our_credentials = document.getElementById('pi-digitalnomad-list-our-credentials');
  if (pi_digitalnomad_list_our_credentials) {
    gsap.from('#pi-digitalnomad-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_digitalnomad_list_related_services = document.getElementById('pi-digitalnomad-list-related-services');
  if (pi_digitalnomad_list_related_services) {
    gsap.from('#pi-digitalnomad-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_digitalnomad_section_youre_in_good_hands = document.getElementById('pi-digitalnomad-section-youre-in-good-hands');
  if (pi_digitalnomad_section_youre_in_good_hands) {
    gsap.fromTo('#pi-digitalnomad-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_digitalnomad_section_21 = document.getElementById('pi-digitalnomad-section-21');
  if (pi_digitalnomad_section_21) {
    gsap.fromTo('#pi-digitalnomad-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const family_reunion.html = document.getElementById('family-reunion.html');
  if (family_reunion.html) {
    gsap.fromTo('#family-reunion.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency = document.getElementById('pi-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency');
  if (pi_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency) {
    gsap.from('#pi-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency input, #pi-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_familyreunion_list_quick_facts = document.getElementById('pi-familyreunion-list-quick-facts');
  if (pi_familyreunion_list_quick_facts) {
    gsap.from('#pi-familyreunion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_familyreunion_list_common_challenges_applicants_face = document.getElementById('pi-familyreunion-list-common-challenges-applicants-face');
  if (pi_familyreunion_list_common_challenges_applicants_face) {
    gsap.from('#pi-familyreunion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_familyreunion_list_how_we_solve_these_challenges = document.getElementById('pi-familyreunion-list-how-we-solve-these-challenges');
  if (pi_familyreunion_list_how_we_solve_these_challenges) {
    gsap.from('#pi-familyreunion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_familyreunion_section_residency_overview = document.getElementById('pi-familyreunion-section-residency-overview');
  if (pi_familyreunion_section_residency_overview) {
    gsap.fromTo('#pi-familyreunion-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_familyreunion_form_who_is_this_residency_for = document.getElementById('pi-familyreunion-form-who-is-this-residency-for');
  if (pi_familyreunion_form_who_is_this_residency_for) {
    gsap.from('#pi-familyreunion-form-who-is-this-residency-for input, #pi-familyreunion-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_familyreunion_list_required_documents = document.getElementById('pi-familyreunion-list-required-documents');
  if (pi_familyreunion_list_required_documents) {
    gsap.from('#pi-familyreunion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_familyreunion_list_application_process = document.getElementById('pi-familyreunion-list-application-process');
  if (pi_familyreunion_list_application_process) {
    gsap.from('#pi-familyreunion-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_familyreunion_section_timelines_deadlines = document.getElementById('pi-familyreunion-section-timelines-deadlines');
  if (pi_familyreunion_section_timelines_deadlines) {
    gsap.fromTo('#pi-familyreunion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_familyreunion_section_fees_costs = document.getElementById('pi-familyreunion-section-fees-costs');
  if (pi_familyreunion_section_fees_costs) {
    gsap.fromTo('#pi-familyreunion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_familyreunion_list_risks_common_mistakes = document.getElementById('pi-familyreunion-list-risks-common-mistakes');
  if (pi_familyreunion_list_risks_common_mistakes) {
    gsap.from('#pi-familyreunion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_familyreunion_section_diy_vs_professional_assistance = document.getElementById('pi-familyreunion-section-diy-vs-professional-assistance');
  if (pi_familyreunion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-familyreunion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_familyreunion_section_piau_specific_context = document.getElementById('pi-familyreunion-section-piau-specific-context');
  if (pi_familyreunion_section_piau_specific_context) {
    gsap.fromTo('#pi-familyreunion-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_familyreunion_section_what_our_clients_say = document.getElementById('pi-familyreunion-section-what-our-clients-say');
  if (pi_familyreunion_section_what_our_clients_say) {
    gsap.fromTo('#pi-familyreunion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_familyreunion_section_frequently_asked_questions = document.getElementById('pi-familyreunion-section-frequently-asked-questions');
  if (pi_familyreunion_section_frequently_asked_questions) {
    gsap.fromTo('#pi-familyreunion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_familyreunion_section_international_support = document.getElementById('pi-familyreunion-section-international-support');
  if (pi_familyreunion_section_international_support) {
    gsap.fromTo('#pi-familyreunion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_familyreunion_list_our_credentials = document.getElementById('pi-familyreunion-list-our-credentials');
  if (pi_familyreunion_list_our_credentials) {
    gsap.from('#pi-familyreunion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_familyreunion_list_related_services = document.getElementById('pi-familyreunion-list-related-services');
  if (pi_familyreunion_list_related_services) {
    gsap.from('#pi-familyreunion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_familyreunion_section_youre_in_good_hands = document.getElementById('pi-familyreunion-section-youre-in-good-hands');
  if (pi_familyreunion_section_youre_in_good_hands) {
    gsap.fromTo('#pi-familyreunion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_familyreunion_section_21 = document.getElementById('pi-familyreunion-section-21');
  if (pi_familyreunion_section_21) {
    gsap.fromTo('#pi-familyreunion-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_mercosul_form_residency_for_mercosul_citizens_in_brazil = document.getElementById('pi-mercosul-form-residency-for-mercosul-citizens-in-brazil');
  if (pi_mercosul_form_residency_for_mercosul_citizens_in_brazil) {
    gsap.from('#pi-mercosul-form-residency-for-mercosul-citizens-in-brazil input, #pi-mercosul-form-residency-for-mercosul-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_mercosul_list_quick_facts = document.getElementById('pi-mercosul-list-quick-facts');
  if (pi_mercosul_list_quick_facts) {
    gsap.from('#pi-mercosul-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_mercosul_list_common_challenges_applicants_face = document.getElementById('pi-mercosul-list-common-challenges-applicants-face');
  if (pi_mercosul_list_common_challenges_applicants_face) {
    gsap.from('#pi-mercosul-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_mercosul_list_how_we_solve_these_challenges = document.getElementById('pi-mercosul-list-how-we-solve-these-challenges');
  if (pi_mercosul_list_how_we_solve_these_challenges) {
    gsap.from('#pi-mercosul-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_mercosul_section_residency_overview = document.getElementById('pi-mercosul-section-residency-overview');
  if (pi_mercosul_section_residency_overview) {
    gsap.fromTo('#pi-mercosul-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_mercosul_form_who_is_this_residency_for = document.getElementById('pi-mercosul-form-who-is-this-residency-for');
  if (pi_mercosul_form_who_is_this_residency_for) {
    gsap.from('#pi-mercosul-form-who-is-this-residency-for input, #pi-mercosul-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_mercosul_list_required_documents = document.getElementById('pi-mercosul-list-required-documents');
  if (pi_mercosul_list_required_documents) {
    gsap.from('#pi-mercosul-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_mercosul_list_application_process = document.getElementById('pi-mercosul-list-application-process');
  if (pi_mercosul_list_application_process) {
    gsap.from('#pi-mercosul-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_mercosul_section_timelines_deadlines = document.getElementById('pi-mercosul-section-timelines-deadlines');
  if (pi_mercosul_section_timelines_deadlines) {
    gsap.fromTo('#pi-mercosul-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_mercosul_section_fees_costs = document.getElementById('pi-mercosul-section-fees-costs');
  if (pi_mercosul_section_fees_costs) {
    gsap.fromTo('#pi-mercosul-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_mercosul_list_risks_common_mistakes = document.getElementById('pi-mercosul-list-risks-common-mistakes');
  if (pi_mercosul_list_risks_common_mistakes) {
    gsap.from('#pi-mercosul-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_mercosul_section_diy_vs_professional_assistance = document.getElementById('pi-mercosul-section-diy-vs-professional-assistance');
  if (pi_mercosul_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-mercosul-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_mercosul_section_piau_specific_context = document.getElementById('pi-mercosul-section-piau-specific-context');
  if (pi_mercosul_section_piau_specific_context) {
    gsap.fromTo('#pi-mercosul-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_mercosul_section_what_our_clients_say = document.getElementById('pi-mercosul-section-what-our-clients-say');
  if (pi_mercosul_section_what_our_clients_say) {
    gsap.fromTo('#pi-mercosul-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_mercosul_section_frequently_asked_questions = document.getElementById('pi-mercosul-section-frequently-asked-questions');
  if (pi_mercosul_section_frequently_asked_questions) {
    gsap.fromTo('#pi-mercosul-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_mercosul_section_international_support = document.getElementById('pi-mercosul-section-international-support');
  if (pi_mercosul_section_international_support) {
    gsap.fromTo('#pi-mercosul-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_mercosul_list_our_credentials = document.getElementById('pi-mercosul-list-our-credentials');
  if (pi_mercosul_list_our_credentials) {
    gsap.from('#pi-mercosul-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_mercosul_list_related_services = document.getElementById('pi-mercosul-list-related-services');
  if (pi_mercosul_list_related_services) {
    gsap.from('#pi-mercosul-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_mercosul_section_youre_in_good_hands = document.getElementById('pi-mercosul-section-youre-in-good-hands');
  if (pi_mercosul_section_youre_in_good_hands) {
    gsap.fromTo('#pi-mercosul-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_mercosul_section_21 = document.getElementById('pi-mercosul-section-21');
  if (pi_mercosul_section_21) {
    gsap.fromTo('#pi-mercosul-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_retiree_form_retire_in_brazil_with_retiree_residency = document.getElementById('pi-retiree-form-retire-in-brazil-with-retiree-residency');
  if (pi_retiree_form_retire_in_brazil_with_retiree_residency) {
    gsap.from('#pi-retiree-form-retire-in-brazil-with-retiree-residency input, #pi-retiree-form-retire-in-brazil-with-retiree-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_retiree_list_quick_facts = document.getElementById('pi-retiree-list-quick-facts');
  if (pi_retiree_list_quick_facts) {
    gsap.from('#pi-retiree-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_retiree_list_common_challenges_applicants_face = document.getElementById('pi-retiree-list-common-challenges-applicants-face');
  if (pi_retiree_list_common_challenges_applicants_face) {
    gsap.from('#pi-retiree-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_retiree_list_how_we_solve_these_challenges = document.getElementById('pi-retiree-list-how-we-solve-these-challenges');
  if (pi_retiree_list_how_we_solve_these_challenges) {
    gsap.from('#pi-retiree-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_retiree_section_residency_overview = document.getElementById('pi-retiree-section-residency-overview');
  if (pi_retiree_section_residency_overview) {
    gsap.fromTo('#pi-retiree-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_retiree_form_who_is_this_residency_for = document.getElementById('pi-retiree-form-who-is-this-residency-for');
  if (pi_retiree_form_who_is_this_residency_for) {
    gsap.from('#pi-retiree-form-who-is-this-residency-for input, #pi-retiree-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_retiree_list_required_documents = document.getElementById('pi-retiree-list-required-documents');
  if (pi_retiree_list_required_documents) {
    gsap.from('#pi-retiree-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_retiree_list_application_process = document.getElementById('pi-retiree-list-application-process');
  if (pi_retiree_list_application_process) {
    gsap.from('#pi-retiree-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_retiree_section_timelines_deadlines = document.getElementById('pi-retiree-section-timelines-deadlines');
  if (pi_retiree_section_timelines_deadlines) {
    gsap.fromTo('#pi-retiree-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_retiree_section_fees_costs = document.getElementById('pi-retiree-section-fees-costs');
  if (pi_retiree_section_fees_costs) {
    gsap.fromTo('#pi-retiree-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_retiree_list_risks_common_mistakes = document.getElementById('pi-retiree-list-risks-common-mistakes');
  if (pi_retiree_list_risks_common_mistakes) {
    gsap.from('#pi-retiree-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_retiree_section_diy_vs_professional_assistance = document.getElementById('pi-retiree-section-diy-vs-professional-assistance');
  if (pi_retiree_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-retiree-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_retiree_section_piau_specific_context = document.getElementById('pi-retiree-section-piau-specific-context');
  if (pi_retiree_section_piau_specific_context) {
    gsap.fromTo('#pi-retiree-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_retiree_section_what_our_clients_say = document.getElementById('pi-retiree-section-what-our-clients-say');
  if (pi_retiree_section_what_our_clients_say) {
    gsap.fromTo('#pi-retiree-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_retiree_section_frequently_asked_questions = document.getElementById('pi-retiree-section-frequently-asked-questions');
  if (pi_retiree_section_frequently_asked_questions) {
    gsap.fromTo('#pi-retiree-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_retiree_section_international_support = document.getElementById('pi-retiree-section-international-support');
  if (pi_retiree_section_international_support) {
    gsap.fromTo('#pi-retiree-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_retiree_list_our_credentials = document.getElementById('pi-retiree-list-our-credentials');
  if (pi_retiree_list_our_credentials) {
    gsap.from('#pi-retiree-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_retiree_list_related_services = document.getElementById('pi-retiree-list-related-services');
  if (pi_retiree_list_related_services) {
    gsap.from('#pi-retiree-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_retiree_section_youre_in_good_hands = document.getElementById('pi-retiree-section-youre-in-good-hands');
  if (pi_retiree_section_youre_in_good_hands) {
    gsap.fromTo('#pi-retiree-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_retiree_section_21 = document.getElementById('pi-retiree-section-21');
  if (pi_retiree_section_21) {
    gsap.fromTo('#pi-retiree-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_volunteer_form_volunteer_in_brazil_with_volunteer_residency = document.getElementById('pi-volunteer-form-volunteer-in-brazil-with-volunteer-residency');
  if (pi_volunteer_form_volunteer_in_brazil_with_volunteer_residency) {
    gsap.from('#pi-volunteer-form-volunteer-in-brazil-with-volunteer-residency input, #pi-volunteer-form-volunteer-in-brazil-with-volunteer-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_volunteer_list_quick_facts = document.getElementById('pi-volunteer-list-quick-facts');
  if (pi_volunteer_list_quick_facts) {
    gsap.from('#pi-volunteer-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_volunteer_list_common_challenges_applicants_face = document.getElementById('pi-volunteer-list-common-challenges-applicants-face');
  if (pi_volunteer_list_common_challenges_applicants_face) {
    gsap.from('#pi-volunteer-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_volunteer_list_how_we_solve_these_challenges = document.getElementById('pi-volunteer-list-how-we-solve-these-challenges');
  if (pi_volunteer_list_how_we_solve_these_challenges) {
    gsap.from('#pi-volunteer-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_volunteer_section_residency_overview = document.getElementById('pi-volunteer-section-residency-overview');
  if (pi_volunteer_section_residency_overview) {
    gsap.fromTo('#pi-volunteer-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_volunteer_form_who_is_this_residency_for = document.getElementById('pi-volunteer-form-who-is-this-residency-for');
  if (pi_volunteer_form_who_is_this_residency_for) {
    gsap.from('#pi-volunteer-form-who-is-this-residency-for input, #pi-volunteer-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_volunteer_list_required_documents = document.getElementById('pi-volunteer-list-required-documents');
  if (pi_volunteer_list_required_documents) {
    gsap.from('#pi-volunteer-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_volunteer_list_application_process = document.getElementById('pi-volunteer-list-application-process');
  if (pi_volunteer_list_application_process) {
    gsap.from('#pi-volunteer-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_volunteer_section_timelines_deadlines = document.getElementById('pi-volunteer-section-timelines-deadlines');
  if (pi_volunteer_section_timelines_deadlines) {
    gsap.fromTo('#pi-volunteer-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_volunteer_section_fees_costs = document.getElementById('pi-volunteer-section-fees-costs');
  if (pi_volunteer_section_fees_costs) {
    gsap.fromTo('#pi-volunteer-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_volunteer_list_risks_common_mistakes = document.getElementById('pi-volunteer-list-risks-common-mistakes');
  if (pi_volunteer_list_risks_common_mistakes) {
    gsap.from('#pi-volunteer-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_volunteer_section_diy_vs_professional_assistance = document.getElementById('pi-volunteer-section-diy-vs-professional-assistance');
  if (pi_volunteer_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-volunteer-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_volunteer_section_piau_specific_context = document.getElementById('pi-volunteer-section-piau-specific-context');
  if (pi_volunteer_section_piau_specific_context) {
    gsap.fromTo('#pi-volunteer-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_volunteer_section_what_our_clients_say = document.getElementById('pi-volunteer-section-what-our-clients-say');
  if (pi_volunteer_section_what_our_clients_say) {
    gsap.fromTo('#pi-volunteer-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_volunteer_section_frequently_asked_questions = document.getElementById('pi-volunteer-section-frequently-asked-questions');
  if (pi_volunteer_section_frequently_asked_questions) {
    gsap.fromTo('#pi-volunteer-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_volunteer_section_international_support = document.getElementById('pi-volunteer-section-international-support');
  if (pi_volunteer_section_international_support) {
    gsap.fromTo('#pi-volunteer-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_volunteer_list_our_credentials = document.getElementById('pi-volunteer-list-our-credentials');
  if (pi_volunteer_list_our_credentials) {
    gsap.from('#pi-volunteer-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_volunteer_list_related_services = document.getElementById('pi-volunteer-list-related-services');
  if (pi_volunteer_list_related_services) {
    gsap.from('#pi-volunteer-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_volunteer_section_youre_in_good_hands = document.getElementById('pi-volunteer-section-youre-in-good-hands');
  if (pi_volunteer_section_youre_in_good_hands) {
    gsap.fromTo('#pi-volunteer-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_volunteer_section_21 = document.getElementById('pi-volunteer-section-21');
  if (pi_volunteer_section_21) {
    gsap.fromTo('#pi-volunteer-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const skilled_worker.html = document.getElementById('skilled-worker.html');
  if (skilled_worker.html) {
    gsap.fromTo('#skilled-worker.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals = document.getElementById('pi-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals');
  if (pi_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals) {
    gsap.from('#pi-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals input, #pi-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_skilledworker_list_quick_facts = document.getElementById('pi-skilledworker-list-quick-facts');
  if (pi_skilledworker_list_quick_facts) {
    gsap.from('#pi-skilledworker-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_skilledworker_list_common_challenges_applicants_face = document.getElementById('pi-skilledworker-list-common-challenges-applicants-face');
  if (pi_skilledworker_list_common_challenges_applicants_face) {
    gsap.from('#pi-skilledworker-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_skilledworker_list_how_we_solve_these_challenges = document.getElementById('pi-skilledworker-list-how-we-solve-these-challenges');
  if (pi_skilledworker_list_how_we_solve_these_challenges) {
    gsap.from('#pi-skilledworker-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_skilledworker_section_residency_overview = document.getElementById('pi-skilledworker-section-residency-overview');
  if (pi_skilledworker_section_residency_overview) {
    gsap.fromTo('#pi-skilledworker-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_skilledworker_form_who_is_this_residency_for = document.getElementById('pi-skilledworker-form-who-is-this-residency-for');
  if (pi_skilledworker_form_who_is_this_residency_for) {
    gsap.from('#pi-skilledworker-form-who-is-this-residency-for input, #pi-skilledworker-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_skilledworker_list_required_documents = document.getElementById('pi-skilledworker-list-required-documents');
  if (pi_skilledworker_list_required_documents) {
    gsap.from('#pi-skilledworker-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_skilledworker_list_application_process = document.getElementById('pi-skilledworker-list-application-process');
  if (pi_skilledworker_list_application_process) {
    gsap.from('#pi-skilledworker-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_skilledworker_section_timelines_deadlines = document.getElementById('pi-skilledworker-section-timelines-deadlines');
  if (pi_skilledworker_section_timelines_deadlines) {
    gsap.fromTo('#pi-skilledworker-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_skilledworker_section_fees_costs = document.getElementById('pi-skilledworker-section-fees-costs');
  if (pi_skilledworker_section_fees_costs) {
    gsap.fromTo('#pi-skilledworker-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_skilledworker_list_risks_common_mistakes = document.getElementById('pi-skilledworker-list-risks-common-mistakes');
  if (pi_skilledworker_list_risks_common_mistakes) {
    gsap.from('#pi-skilledworker-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_skilledworker_section_diy_vs_professional_assistance = document.getElementById('pi-skilledworker-section-diy-vs-professional-assistance');
  if (pi_skilledworker_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-skilledworker-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_skilledworker_section_piau_specific_context = document.getElementById('pi-skilledworker-section-piau-specific-context');
  if (pi_skilledworker_section_piau_specific_context) {
    gsap.fromTo('#pi-skilledworker-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_skilledworker_section_what_our_clients_say = document.getElementById('pi-skilledworker-section-what-our-clients-say');
  if (pi_skilledworker_section_what_our_clients_say) {
    gsap.fromTo('#pi-skilledworker-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_skilledworker_section_frequently_asked_questions = document.getElementById('pi-skilledworker-section-frequently-asked-questions');
  if (pi_skilledworker_section_frequently_asked_questions) {
    gsap.fromTo('#pi-skilledworker-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_skilledworker_section_international_support = document.getElementById('pi-skilledworker-section-international-support');
  if (pi_skilledworker_section_international_support) {
    gsap.fromTo('#pi-skilledworker-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_skilledworker_list_our_credentials = document.getElementById('pi-skilledworker-list-our-credentials');
  if (pi_skilledworker_list_our_credentials) {
    gsap.from('#pi-skilledworker-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_skilledworker_list_related_services = document.getElementById('pi-skilledworker-list-related-services');
  if (pi_skilledworker_list_related_services) {
    gsap.from('#pi-skilledworker-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_skilledworker_section_youre_in_good_hands = document.getElementById('pi-skilledworker-section-youre-in-good-hands');
  if (pi_skilledworker_section_youre_in_good_hands) {
    gsap.fromTo('#pi-skilledworker-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_skilledworker_section_21 = document.getElementById('pi-skilledworker-section-21');
  if (pi_skilledworker_section_21) {
    gsap.fromTo('#pi-skilledworker-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_religious_form_religious_residency_in_brazil_for_missions = document.getElementById('pi-religious-form-religious-residency-in-brazil-for-missions');
  if (pi_religious_form_religious_residency_in_brazil_for_missions) {
    gsap.from('#pi-religious-form-religious-residency-in-brazil-for-missions input, #pi-religious-form-religious-residency-in-brazil-for-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_religious_list_quick_facts = document.getElementById('pi-religious-list-quick-facts');
  if (pi_religious_list_quick_facts) {
    gsap.from('#pi-religious-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_religious_list_common_challenges_applicants_face = document.getElementById('pi-religious-list-common-challenges-applicants-face');
  if (pi_religious_list_common_challenges_applicants_face) {
    gsap.from('#pi-religious-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_religious_list_how_we_solve_these_challenges = document.getElementById('pi-religious-list-how-we-solve-these-challenges');
  if (pi_religious_list_how_we_solve_these_challenges) {
    gsap.from('#pi-religious-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_religious_section_residency_overview = document.getElementById('pi-religious-section-residency-overview');
  if (pi_religious_section_residency_overview) {
    gsap.fromTo('#pi-religious-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_religious_form_who_is_this_residency_for = document.getElementById('pi-religious-form-who-is-this-residency-for');
  if (pi_religious_form_who_is_this_residency_for) {
    gsap.from('#pi-religious-form-who-is-this-residency-for input, #pi-religious-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_religious_list_required_documents = document.getElementById('pi-religious-list-required-documents');
  if (pi_religious_list_required_documents) {
    gsap.from('#pi-religious-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_religious_list_application_process = document.getElementById('pi-religious-list-application-process');
  if (pi_religious_list_application_process) {
    gsap.from('#pi-religious-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_religious_section_timelines_deadlines = document.getElementById('pi-religious-section-timelines-deadlines');
  if (pi_religious_section_timelines_deadlines) {
    gsap.fromTo('#pi-religious-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_religious_section_fees_costs = document.getElementById('pi-religious-section-fees-costs');
  if (pi_religious_section_fees_costs) {
    gsap.fromTo('#pi-religious-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_religious_list_risks_common_mistakes = document.getElementById('pi-religious-list-risks-common-mistakes');
  if (pi_religious_list_risks_common_mistakes) {
    gsap.from('#pi-religious-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_religious_section_diy_vs_professional_assistance = document.getElementById('pi-religious-section-diy-vs-professional-assistance');
  if (pi_religious_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-religious-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_religious_section_piau_specific_context = document.getElementById('pi-religious-section-piau-specific-context');
  if (pi_religious_section_piau_specific_context) {
    gsap.fromTo('#pi-religious-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_religious_section_what_our_clients_say = document.getElementById('pi-religious-section-what-our-clients-say');
  if (pi_religious_section_what_our_clients_say) {
    gsap.fromTo('#pi-religious-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_religious_section_frequently_asked_questions = document.getElementById('pi-religious-section-frequently-asked-questions');
  if (pi_religious_section_frequently_asked_questions) {
    gsap.fromTo('#pi-religious-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_religious_section_international_support = document.getElementById('pi-religious-section-international-support');
  if (pi_religious_section_international_support) {
    gsap.fromTo('#pi-religious-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_religious_list_our_credentials = document.getElementById('pi-religious-list-our-credentials');
  if (pi_religious_list_our_credentials) {
    gsap.from('#pi-religious-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_religious_list_related_services = document.getElementById('pi-religious-list-related-services');
  if (pi_religious_list_related_services) {
    gsap.from('#pi-religious-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_religious_section_youre_in_good_hands = document.getElementById('pi-religious-section-youre-in-good-hands');
  if (pi_religious_section_youre_in_good_hands) {
    gsap.fromTo('#pi-religious-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_religious_section_21 = document.getElementById('pi-religious-section-21');
  if (pi_religious_section_21) {
    gsap.fromTo('#pi-religious-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_investor_form_gain_residency_in_brazil_through_investment = document.getElementById('pi-investor-form-gain-residency-in-brazil-through-investment');
  if (pi_investor_form_gain_residency_in_brazil_through_investment) {
    gsap.from('#pi-investor-form-gain-residency-in-brazil-through-investment input, #pi-investor-form-gain-residency-in-brazil-through-investment textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_investor_list_quick_facts = document.getElementById('pi-investor-list-quick-facts');
  if (pi_investor_list_quick_facts) {
    gsap.from('#pi-investor-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_investor_list_common_challenges_applicants_face = document.getElementById('pi-investor-list-common-challenges-applicants-face');
  if (pi_investor_list_common_challenges_applicants_face) {
    gsap.from('#pi-investor-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_investor_list_how_we_solve_these_challenges = document.getElementById('pi-investor-list-how-we-solve-these-challenges');
  if (pi_investor_list_how_we_solve_these_challenges) {
    gsap.from('#pi-investor-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_investor_section_residency_overview = document.getElementById('pi-investor-section-residency-overview');
  if (pi_investor_section_residency_overview) {
    gsap.fromTo('#pi-investor-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_investor_form_who_is_this_residency_for = document.getElementById('pi-investor-form-who-is-this-residency-for');
  if (pi_investor_form_who_is_this_residency_for) {
    gsap.from('#pi-investor-form-who-is-this-residency-for input, #pi-investor-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_investor_list_required_documents = document.getElementById('pi-investor-list-required-documents');
  if (pi_investor_list_required_documents) {
    gsap.from('#pi-investor-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_investor_list_application_process = document.getElementById('pi-investor-list-application-process');
  if (pi_investor_list_application_process) {
    gsap.from('#pi-investor-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_investor_section_timelines_deadlines = document.getElementById('pi-investor-section-timelines-deadlines');
  if (pi_investor_section_timelines_deadlines) {
    gsap.fromTo('#pi-investor-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_investor_section_fees_costs = document.getElementById('pi-investor-section-fees-costs');
  if (pi_investor_section_fees_costs) {
    gsap.fromTo('#pi-investor-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_investor_list_risks_common_mistakes = document.getElementById('pi-investor-list-risks-common-mistakes');
  if (pi_investor_list_risks_common_mistakes) {
    gsap.from('#pi-investor-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_investor_section_diy_vs_professional_assistance = document.getElementById('pi-investor-section-diy-vs-professional-assistance');
  if (pi_investor_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-investor-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_investor_section_piau_specific_context = document.getElementById('pi-investor-section-piau-specific-context');
  if (pi_investor_section_piau_specific_context) {
    gsap.fromTo('#pi-investor-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_investor_section_what_our_clients_say = document.getElementById('pi-investor-section-what-our-clients-say');
  if (pi_investor_section_what_our_clients_say) {
    gsap.fromTo('#pi-investor-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_investor_section_frequently_asked_questions = document.getElementById('pi-investor-section-frequently-asked-questions');
  if (pi_investor_section_frequently_asked_questions) {
    gsap.fromTo('#pi-investor-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_investor_section_international_support = document.getElementById('pi-investor-section-international-support');
  if (pi_investor_section_international_support) {
    gsap.fromTo('#pi-investor-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_investor_list_our_credentials = document.getElementById('pi-investor-list-our-credentials');
  if (pi_investor_list_our_credentials) {
    gsap.from('#pi-investor-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_investor_list_related_services = document.getElementById('pi-investor-list-related-services');
  if (pi_investor_list_related_services) {
    gsap.from('#pi-investor-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_investor_section_youre_in_good_hands = document.getElementById('pi-investor-section-youre-in-good-hands');
  if (pi_investor_section_youre_in_good_hands) {
    gsap.fromTo('#pi-investor-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_investor_section_21 = document.getElementById('pi-investor-section-21');
  if (pi_investor_section_21) {
    gsap.fromTo('#pi-investor-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const health_treatment.html = document.getElementById('health-treatment.html');
  if (health_treatment.html) {
    gsap.fromTo('#health-treatment.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil = document.getElementById('pi-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil');
  if (pi_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil) {
    gsap.from('#pi-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil input, #pi-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_healthtreatment_list_quick_facts = document.getElementById('pi-healthtreatment-list-quick-facts');
  if (pi_healthtreatment_list_quick_facts) {
    gsap.from('#pi-healthtreatment-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_healthtreatment_list_common_challenges_applicants_face = document.getElementById('pi-healthtreatment-list-common-challenges-applicants-face');
  if (pi_healthtreatment_list_common_challenges_applicants_face) {
    gsap.from('#pi-healthtreatment-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_healthtreatment_list_how_we_solve_these_challenges = document.getElementById('pi-healthtreatment-list-how-we-solve-these-challenges');
  if (pi_healthtreatment_list_how_we_solve_these_challenges) {
    gsap.from('#pi-healthtreatment-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_healthtreatment_section_residency_overview = document.getElementById('pi-healthtreatment-section-residency-overview');
  if (pi_healthtreatment_section_residency_overview) {
    gsap.fromTo('#pi-healthtreatment-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_healthtreatment_form_who_is_this_residency_for = document.getElementById('pi-healthtreatment-form-who-is-this-residency-for');
  if (pi_healthtreatment_form_who_is_this_residency_for) {
    gsap.from('#pi-healthtreatment-form-who-is-this-residency-for input, #pi-healthtreatment-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_healthtreatment_list_required_documents = document.getElementById('pi-healthtreatment-list-required-documents');
  if (pi_healthtreatment_list_required_documents) {
    gsap.from('#pi-healthtreatment-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_healthtreatment_list_application_process = document.getElementById('pi-healthtreatment-list-application-process');
  if (pi_healthtreatment_list_application_process) {
    gsap.from('#pi-healthtreatment-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_healthtreatment_section_timelines_deadlines = document.getElementById('pi-healthtreatment-section-timelines-deadlines');
  if (pi_healthtreatment_section_timelines_deadlines) {
    gsap.fromTo('#pi-healthtreatment-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_healthtreatment_section_fees_costs = document.getElementById('pi-healthtreatment-section-fees-costs');
  if (pi_healthtreatment_section_fees_costs) {
    gsap.fromTo('#pi-healthtreatment-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_healthtreatment_list_risks_common_mistakes = document.getElementById('pi-healthtreatment-list-risks-common-mistakes');
  if (pi_healthtreatment_list_risks_common_mistakes) {
    gsap.from('#pi-healthtreatment-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_healthtreatment_section_diy_vs_professional_assistance = document.getElementById('pi-healthtreatment-section-diy-vs-professional-assistance');
  if (pi_healthtreatment_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-healthtreatment-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_healthtreatment_section_piau_specific_context = document.getElementById('pi-healthtreatment-section-piau-specific-context');
  if (pi_healthtreatment_section_piau_specific_context) {
    gsap.fromTo('#pi-healthtreatment-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_healthtreatment_section_what_our_clients_say = document.getElementById('pi-healthtreatment-section-what-our-clients-say');
  if (pi_healthtreatment_section_what_our_clients_say) {
    gsap.fromTo('#pi-healthtreatment-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_healthtreatment_section_frequently_asked_questions = document.getElementById('pi-healthtreatment-section-frequently-asked-questions');
  if (pi_healthtreatment_section_frequently_asked_questions) {
    gsap.fromTo('#pi-healthtreatment-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_healthtreatment_section_international_support = document.getElementById('pi-healthtreatment-section-international-support');
  if (pi_healthtreatment_section_international_support) {
    gsap.fromTo('#pi-healthtreatment-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_healthtreatment_list_our_credentials = document.getElementById('pi-healthtreatment-list-our-credentials');
  if (pi_healthtreatment_list_our_credentials) {
    gsap.from('#pi-healthtreatment-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_healthtreatment_list_related_services = document.getElementById('pi-healthtreatment-list-related-services');
  if (pi_healthtreatment_list_related_services) {
    gsap.from('#pi-healthtreatment-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_healthtreatment_section_youre_in_good_hands = document.getElementById('pi-healthtreatment-section-youre-in-good-hands');
  if (pi_healthtreatment_section_youre_in_good_hands) {
    gsap.fromTo('#pi-healthtreatment-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_healthtreatment_section_21 = document.getElementById('pi-healthtreatment-section-21');
  if (pi_healthtreatment_section_21) {
    gsap.fromTo('#pi-healthtreatment-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_cplp_form_residency_for_cplp_citizens_in_brazil = document.getElementById('pi-cplp-form-residency-for-cplp-citizens-in-brazil');
  if (pi_cplp_form_residency_for_cplp_citizens_in_brazil) {
    gsap.from('#pi-cplp-form-residency-for-cplp-citizens-in-brazil input, #pi-cplp-form-residency-for-cplp-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_cplp_list_quick_facts = document.getElementById('pi-cplp-list-quick-facts');
  if (pi_cplp_list_quick_facts) {
    gsap.from('#pi-cplp-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_cplp_list_common_challenges_applicants_face = document.getElementById('pi-cplp-list-common-challenges-applicants-face');
  if (pi_cplp_list_common_challenges_applicants_face) {
    gsap.from('#pi-cplp-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_cplp_list_how_we_solve_these_challenges = document.getElementById('pi-cplp-list-how-we-solve-these-challenges');
  if (pi_cplp_list_how_we_solve_these_challenges) {
    gsap.from('#pi-cplp-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_cplp_section_residency_overview = document.getElementById('pi-cplp-section-residency-overview');
  if (pi_cplp_section_residency_overview) {
    gsap.fromTo('#pi-cplp-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_cplp_form_who_is_this_residency_for = document.getElementById('pi-cplp-form-who-is-this-residency-for');
  if (pi_cplp_form_who_is_this_residency_for) {
    gsap.from('#pi-cplp-form-who-is-this-residency-for input, #pi-cplp-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_cplp_list_required_documents = document.getElementById('pi-cplp-list-required-documents');
  if (pi_cplp_list_required_documents) {
    gsap.from('#pi-cplp-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_cplp_list_application_process = document.getElementById('pi-cplp-list-application-process');
  if (pi_cplp_list_application_process) {
    gsap.from('#pi-cplp-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_cplp_section_timelines_deadlines = document.getElementById('pi-cplp-section-timelines-deadlines');
  if (pi_cplp_section_timelines_deadlines) {
    gsap.fromTo('#pi-cplp-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_cplp_section_fees_costs = document.getElementById('pi-cplp-section-fees-costs');
  if (pi_cplp_section_fees_costs) {
    gsap.fromTo('#pi-cplp-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_cplp_list_risks_common_mistakes = document.getElementById('pi-cplp-list-risks-common-mistakes');
  if (pi_cplp_list_risks_common_mistakes) {
    gsap.from('#pi-cplp-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_cplp_section_diy_vs_professional_assistance = document.getElementById('pi-cplp-section-diy-vs-professional-assistance');
  if (pi_cplp_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-cplp-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_cplp_section_piau_specific_context = document.getElementById('pi-cplp-section-piau-specific-context');
  if (pi_cplp_section_piau_specific_context) {
    gsap.fromTo('#pi-cplp-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_cplp_section_what_our_clients_say = document.getElementById('pi-cplp-section-what-our-clients-say');
  if (pi_cplp_section_what_our_clients_say) {
    gsap.fromTo('#pi-cplp-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_cplp_section_frequently_asked_questions = document.getElementById('pi-cplp-section-frequently-asked-questions');
  if (pi_cplp_section_frequently_asked_questions) {
    gsap.fromTo('#pi-cplp-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_cplp_section_international_support = document.getElementById('pi-cplp-section-international-support');
  if (pi_cplp_section_international_support) {
    gsap.fromTo('#pi-cplp-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_cplp_list_our_credentials = document.getElementById('pi-cplp-list-our-credentials');
  if (pi_cplp_list_our_credentials) {
    gsap.from('#pi-cplp-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_cplp_list_related_services = document.getElementById('pi-cplp-list-related-services');
  if (pi_cplp_list_related_services) {
    gsap.from('#pi-cplp-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_cplp_section_youre_in_good_hands = document.getElementById('pi-cplp-section-youre-in-good-hands');
  if (pi_cplp_section_youre_in_good_hands) {
    gsap.fromTo('#pi-cplp-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_cplp_section_21 = document.getElementById('pi-cplp-section-21');
  if (pi_cplp_section_21) {
    gsap.fromTo('#pi-cplp-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const youth_exchange.html = document.getElementById('youth-exchange.html');
  if (youth_exchange.html) {
    gsap.fromTo('#youth-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_youthexchange_form_youth_exchange_residency_in_brazil_for_programs = document.getElementById('pi-youthexchange-form-youth-exchange-residency-in-brazil-for-programs');
  if (pi_youthexchange_form_youth_exchange_residency_in_brazil_for_programs) {
    gsap.from('#pi-youthexchange-form-youth-exchange-residency-in-brazil-for-programs input, #pi-youthexchange-form-youth-exchange-residency-in-brazil-for-programs textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_youthexchange_list_quick_facts = document.getElementById('pi-youthexchange-list-quick-facts');
  if (pi_youthexchange_list_quick_facts) {
    gsap.from('#pi-youthexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_youthexchange_list_common_challenges_applicants_face = document.getElementById('pi-youthexchange-list-common-challenges-applicants-face');
  if (pi_youthexchange_list_common_challenges_applicants_face) {
    gsap.from('#pi-youthexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_youthexchange_list_how_we_solve_these_challenges = document.getElementById('pi-youthexchange-list-how-we-solve-these-challenges');
  if (pi_youthexchange_list_how_we_solve_these_challenges) {
    gsap.from('#pi-youthexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_youthexchange_section_residency_overview = document.getElementById('pi-youthexchange-section-residency-overview');
  if (pi_youthexchange_section_residency_overview) {
    gsap.fromTo('#pi-youthexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_youthexchange_form_who_is_this_residency_for = document.getElementById('pi-youthexchange-form-who-is-this-residency-for');
  if (pi_youthexchange_form_who_is_this_residency_for) {
    gsap.from('#pi-youthexchange-form-who-is-this-residency-for input, #pi-youthexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_youthexchange_list_required_documents = document.getElementById('pi-youthexchange-list-required-documents');
  if (pi_youthexchange_list_required_documents) {
    gsap.from('#pi-youthexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_youthexchange_list_application_process = document.getElementById('pi-youthexchange-list-application-process');
  if (pi_youthexchange_list_application_process) {
    gsap.from('#pi-youthexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_youthexchange_section_timelines_deadlines = document.getElementById('pi-youthexchange-section-timelines-deadlines');
  if (pi_youthexchange_section_timelines_deadlines) {
    gsap.fromTo('#pi-youthexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_youthexchange_section_fees_costs = document.getElementById('pi-youthexchange-section-fees-costs');
  if (pi_youthexchange_section_fees_costs) {
    gsap.fromTo('#pi-youthexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_youthexchange_list_risks_common_mistakes = document.getElementById('pi-youthexchange-list-risks-common-mistakes');
  if (pi_youthexchange_list_risks_common_mistakes) {
    gsap.from('#pi-youthexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_youthexchange_section_diy_vs_professional_assistance = document.getElementById('pi-youthexchange-section-diy-vs-professional-assistance');
  if (pi_youthexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-youthexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_youthexchange_section_piau_specific_context = document.getElementById('pi-youthexchange-section-piau-specific-context');
  if (pi_youthexchange_section_piau_specific_context) {
    gsap.fromTo('#pi-youthexchange-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_youthexchange_section_what_our_clients_say = document.getElementById('pi-youthexchange-section-what-our-clients-say');
  if (pi_youthexchange_section_what_our_clients_say) {
    gsap.fromTo('#pi-youthexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_youthexchange_section_frequently_asked_questions = document.getElementById('pi-youthexchange-section-frequently-asked-questions');
  if (pi_youthexchange_section_frequently_asked_questions) {
    gsap.fromTo('#pi-youthexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_youthexchange_section_international_support = document.getElementById('pi-youthexchange-section-international-support');
  if (pi_youthexchange_section_international_support) {
    gsap.fromTo('#pi-youthexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_youthexchange_list_our_credentials = document.getElementById('pi-youthexchange-list-our-credentials');
  if (pi_youthexchange_list_our_credentials) {
    gsap.from('#pi-youthexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_youthexchange_list_related_services = document.getElementById('pi-youthexchange-list-related-services');
  if (pi_youthexchange_list_related_services) {
    gsap.from('#pi-youthexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_youthexchange_section_youre_in_good_hands = document.getElementById('pi-youthexchange-section-youre-in-good-hands');
  if (pi_youthexchange_section_youre_in_good_hands) {
    gsap.fromTo('#pi-youthexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_youthexchange_section_21 = document.getElementById('pi-youthexchange-section-21');
  if (pi_youthexchange_section_21) {
    gsap.fromTo('#pi-youthexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_work_form_work_and_reside_in_brazil_with_work_residency = document.getElementById('pi-work-form-work-and-reside-in-brazil-with-work-residency');
  if (pi_work_form_work_and_reside_in_brazil_with_work_residency) {
    gsap.from('#pi-work-form-work-and-reside-in-brazil-with-work-residency input, #pi-work-form-work-and-reside-in-brazil-with-work-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_work_list_quick_facts = document.getElementById('pi-work-list-quick-facts');
  if (pi_work_list_quick_facts) {
    gsap.from('#pi-work-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_work_list_common_challenges_applicants_face = document.getElementById('pi-work-list-common-challenges-applicants-face');
  if (pi_work_list_common_challenges_applicants_face) {
    gsap.from('#pi-work-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_work_list_how_we_solve_these_challenges = document.getElementById('pi-work-list-how-we-solve-these-challenges');
  if (pi_work_list_how_we_solve_these_challenges) {
    gsap.from('#pi-work-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_work_section_residency_overview = document.getElementById('pi-work-section-residency-overview');
  if (pi_work_section_residency_overview) {
    gsap.fromTo('#pi-work-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_work_form_who_is_this_residency_for = document.getElementById('pi-work-form-who-is-this-residency-for');
  if (pi_work_form_who_is_this_residency_for) {
    gsap.from('#pi-work-form-who-is-this-residency-for input, #pi-work-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_work_list_required_documents = document.getElementById('pi-work-list-required-documents');
  if (pi_work_list_required_documents) {
    gsap.from('#pi-work-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_work_list_application_process = document.getElementById('pi-work-list-application-process');
  if (pi_work_list_application_process) {
    gsap.from('#pi-work-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_work_section_timelines_deadlines = document.getElementById('pi-work-section-timelines-deadlines');
  if (pi_work_section_timelines_deadlines) {
    gsap.fromTo('#pi-work-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_work_section_fees_costs = document.getElementById('pi-work-section-fees-costs');
  if (pi_work_section_fees_costs) {
    gsap.fromTo('#pi-work-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_work_list_risks_common_mistakes = document.getElementById('pi-work-list-risks-common-mistakes');
  if (pi_work_list_risks_common_mistakes) {
    gsap.from('#pi-work-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_work_section_diy_vs_professional_assistance = document.getElementById('pi-work-section-diy-vs-professional-assistance');
  if (pi_work_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-work-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_work_section_piau_specific_context = document.getElementById('pi-work-section-piau-specific-context');
  if (pi_work_section_piau_specific_context) {
    gsap.fromTo('#pi-work-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_work_section_what_our_clients_say = document.getElementById('pi-work-section-what-our-clients-say');
  if (pi_work_section_what_our_clients_say) {
    gsap.fromTo('#pi-work-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_work_section_frequently_asked_questions = document.getElementById('pi-work-section-frequently-asked-questions');
  if (pi_work_section_frequently_asked_questions) {
    gsap.fromTo('#pi-work-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_work_section_international_support = document.getElementById('pi-work-section-international-support');
  if (pi_work_section_international_support) {
    gsap.fromTo('#pi-work-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_work_list_our_credentials = document.getElementById('pi-work-list-our-credentials');
  if (pi_work_list_our_credentials) {
    gsap.from('#pi-work-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_work_list_related_services = document.getElementById('pi-work-list-related-services');
  if (pi_work_list_related_services) {
    gsap.from('#pi-work-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_work_section_youre_in_good_hands = document.getElementById('pi-work-section-youre-in-good-hands');
  if (pi_work_section_youre_in_good_hands) {
    gsap.fromTo('#pi-work-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_work_section_21 = document.getElementById('pi-work-section-21');
  if (pi_work_section_21) {
    gsap.fromTo('#pi-work-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_startup_form_launch_your_startup_in_brazil_with_the_startup_visa = document.getElementById('pi-startup-form-launch-your-startup-in-brazil-with-the-startup-visa');
  if (pi_startup_form_launch_your_startup_in_brazil_with_the_startup_visa) {
    gsap.from('#pi-startup-form-launch-your-startup-in-brazil-with-the-startup-visa input, #pi-startup-form-launch-your-startup-in-brazil-with-the-startup-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_startup_list_quick_facts = document.getElementById('pi-startup-list-quick-facts');
  if (pi_startup_list_quick_facts) {
    gsap.from('#pi-startup-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_startup_list_common_challenges_applicants_face = document.getElementById('pi-startup-list-common-challenges-applicants-face');
  if (pi_startup_list_common_challenges_applicants_face) {
    gsap.from('#pi-startup-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_startup_list_how_we_solve_these_challenges = document.getElementById('pi-startup-list-how-we-solve-these-challenges');
  if (pi_startup_list_how_we_solve_these_challenges) {
    gsap.from('#pi-startup-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_startup_section_visa_overview = document.getElementById('pi-startup-section-visa-overview');
  if (pi_startup_section_visa_overview) {
    gsap.fromTo('#pi-startup-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_startup_form_who_is_this_visa_for = document.getElementById('pi-startup-form-who-is-this-visa-for');
  if (pi_startup_form_who_is_this_visa_for) {
    gsap.from('#pi-startup-form-who-is-this-visa-for input, #pi-startup-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_startup_list_required_documents = document.getElementById('pi-startup-list-required-documents');
  if (pi_startup_list_required_documents) {
    gsap.from('#pi-startup-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_startup_list_application_process = document.getElementById('pi-startup-list-application-process');
  if (pi_startup_list_application_process) {
    gsap.from('#pi-startup-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_startup_section_timelines_deadlines = document.getElementById('pi-startup-section-timelines-deadlines');
  if (pi_startup_section_timelines_deadlines) {
    gsap.fromTo('#pi-startup-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_startup_section_fees_costs = document.getElementById('pi-startup-section-fees-costs');
  if (pi_startup_section_fees_costs) {
    gsap.fromTo('#pi-startup-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_startup_list_risks_common_mistakes = document.getElementById('pi-startup-list-risks-common-mistakes');
  if (pi_startup_list_risks_common_mistakes) {
    gsap.from('#pi-startup-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_startup_section_diy_vs_professional_assistance = document.getElementById('pi-startup-section-diy-vs-professional-assistance');
  if (pi_startup_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-startup-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_startup_section_piau_specific_context = document.getElementById('pi-startup-section-piau-specific-context');
  if (pi_startup_section_piau_specific_context) {
    gsap.fromTo('#pi-startup-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_startup_section_what_our_clients_say = document.getElementById('pi-startup-section-what-our-clients-say');
  if (pi_startup_section_what_our_clients_say) {
    gsap.fromTo('#pi-startup-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_startup_section_frequently_asked_questions = document.getElementById('pi-startup-section-frequently-asked-questions');
  if (pi_startup_section_frequently_asked_questions) {
    gsap.fromTo('#pi-startup-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_startup_section_international_support = document.getElementById('pi-startup-section-international-support');
  if (pi_startup_section_international_support) {
    gsap.fromTo('#pi-startup-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_startup_list_our_credentials = document.getElementById('pi-startup-list-our-credentials');
  if (pi_startup_list_our_credentials) {
    gsap.from('#pi-startup-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_startup_list_related_services = document.getElementById('pi-startup-list-related-services');
  if (pi_startup_list_related_services) {
    gsap.from('#pi-startup-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_startup_section_youre_in_good_hands = document.getElementById('pi-startup-section-youre-in-good-hands');
  if (pi_startup_section_youre_in_good_hands) {
    gsap.fromTo('#pi-startup-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_startup_section_21 = document.getElementById('pi-startup-section-21');
  if (pi_startup_section_21) {
    gsap.fromTo('#pi-startup-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_family_form_reunite_with_family_in_brazil_with_the_family_visa = document.getElementById('pi-family-form-reunite-with-family-in-brazil-with-the-family-visa');
  if (pi_family_form_reunite_with_family_in_brazil_with_the_family_visa) {
    gsap.from('#pi-family-form-reunite-with-family-in-brazil-with-the-family-visa input, #pi-family-form-reunite-with-family-in-brazil-with-the-family-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_family_list_quick_facts = document.getElementById('pi-family-list-quick-facts');
  if (pi_family_list_quick_facts) {
    gsap.from('#pi-family-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_family_list_common_challenges_applicants_face = document.getElementById('pi-family-list-common-challenges-applicants-face');
  if (pi_family_list_common_challenges_applicants_face) {
    gsap.from('#pi-family-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_family_list_how_we_solve_these_challenges = document.getElementById('pi-family-list-how-we-solve-these-challenges');
  if (pi_family_list_how_we_solve_these_challenges) {
    gsap.from('#pi-family-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_family_section_visa_overview = document.getElementById('pi-family-section-visa-overview');
  if (pi_family_section_visa_overview) {
    gsap.fromTo('#pi-family-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_family_form_who_is_this_visa_for = document.getElementById('pi-family-form-who-is-this-visa-for');
  if (pi_family_form_who_is_this_visa_for) {
    gsap.from('#pi-family-form-who-is-this-visa-for input, #pi-family-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_family_list_required_documents = document.getElementById('pi-family-list-required-documents');
  if (pi_family_list_required_documents) {
    gsap.from('#pi-family-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_family_list_application_process = document.getElementById('pi-family-list-application-process');
  if (pi_family_list_application_process) {
    gsap.from('#pi-family-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_family_section_timelines_deadlines = document.getElementById('pi-family-section-timelines-deadlines');
  if (pi_family_section_timelines_deadlines) {
    gsap.fromTo('#pi-family-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_family_section_fees_costs = document.getElementById('pi-family-section-fees-costs');
  if (pi_family_section_fees_costs) {
    gsap.fromTo('#pi-family-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_family_list_risks_common_mistakes = document.getElementById('pi-family-list-risks-common-mistakes');
  if (pi_family_list_risks_common_mistakes) {
    gsap.from('#pi-family-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_family_section_diy_vs_professional_assistance = document.getElementById('pi-family-section-diy-vs-professional-assistance');
  if (pi_family_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-family-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_family_section_piau_specific_context = document.getElementById('pi-family-section-piau-specific-context');
  if (pi_family_section_piau_specific_context) {
    gsap.fromTo('#pi-family-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_family_section_what_our_clients_say = document.getElementById('pi-family-section-what-our-clients-say');
  if (pi_family_section_what_our_clients_say) {
    gsap.fromTo('#pi-family-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_family_section_frequently_asked_questions = document.getElementById('pi-family-section-frequently-asked-questions');
  if (pi_family_section_frequently_asked_questions) {
    gsap.fromTo('#pi-family-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_family_section_international_support = document.getElementById('pi-family-section-international-support');
  if (pi_family_section_international_support) {
    gsap.fromTo('#pi-family-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_family_list_our_credentials = document.getElementById('pi-family-list-our-credentials');
  if (pi_family_list_our_credentials) {
    gsap.from('#pi-family-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_family_list_related_services = document.getElementById('pi-family-list-related-services');
  if (pi_family_list_related_services) {
    gsap.from('#pi-family-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_family_section_youre_in_good_hands = document.getElementById('pi-family-section-youre-in-good-hands');
  if (pi_family_section_youre_in_good_hands) {
    gsap.fromTo('#pi-family-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_family_section_21 = document.getElementById('pi-family-section-21');
  if (pi_family_section_21) {
    gsap.fromTo('#pi-family-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_sports_form_compete_in_brazil_with_the_sports_visa = document.getElementById('pi-sports-form-compete-in-brazil-with-the-sports-visa');
  if (pi_sports_form_compete_in_brazil_with_the_sports_visa) {
    gsap.from('#pi-sports-form-compete-in-brazil-with-the-sports-visa input, #pi-sports-form-compete-in-brazil-with-the-sports-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_sports_list_quick_facts = document.getElementById('pi-sports-list-quick-facts');
  if (pi_sports_list_quick_facts) {
    gsap.from('#pi-sports-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_sports_list_common_challenges_applicants_face = document.getElementById('pi-sports-list-common-challenges-applicants-face');
  if (pi_sports_list_common_challenges_applicants_face) {
    gsap.from('#pi-sports-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_sports_list_how_we_solve_these_challenges = document.getElementById('pi-sports-list-how-we-solve-these-challenges');
  if (pi_sports_list_how_we_solve_these_challenges) {
    gsap.from('#pi-sports-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_sports_section_visa_overview = document.getElementById('pi-sports-section-visa-overview');
  if (pi_sports_section_visa_overview) {
    gsap.fromTo('#pi-sports-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_sports_form_who_is_this_visa_for = document.getElementById('pi-sports-form-who-is-this-visa-for');
  if (pi_sports_form_who_is_this_visa_for) {
    gsap.from('#pi-sports-form-who-is-this-visa-for input, #pi-sports-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_sports_list_required_documents = document.getElementById('pi-sports-list-required-documents');
  if (pi_sports_list_required_documents) {
    gsap.from('#pi-sports-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_sports_list_application_process = document.getElementById('pi-sports-list-application-process');
  if (pi_sports_list_application_process) {
    gsap.from('#pi-sports-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_sports_section_timelines_deadlines = document.getElementById('pi-sports-section-timelines-deadlines');
  if (pi_sports_section_timelines_deadlines) {
    gsap.fromTo('#pi-sports-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_sports_section_fees_costs = document.getElementById('pi-sports-section-fees-costs');
  if (pi_sports_section_fees_costs) {
    gsap.fromTo('#pi-sports-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_sports_list_risks_common_mistakes = document.getElementById('pi-sports-list-risks-common-mistakes');
  if (pi_sports_list_risks_common_mistakes) {
    gsap.from('#pi-sports-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_sports_section_diy_vs_professional_assistance = document.getElementById('pi-sports-section-diy-vs-professional-assistance');
  if (pi_sports_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-sports-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_sports_section_piau_specific_context = document.getElementById('pi-sports-section-piau-specific-context');
  if (pi_sports_section_piau_specific_context) {
    gsap.fromTo('#pi-sports-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_sports_section_what_our_clients_say = document.getElementById('pi-sports-section-what-our-clients-say');
  if (pi_sports_section_what_our_clients_say) {
    gsap.fromTo('#pi-sports-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_sports_section_frequently_asked_questions = document.getElementById('pi-sports-section-frequently-asked-questions');
  if (pi_sports_section_frequently_asked_questions) {
    gsap.fromTo('#pi-sports-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_sports_section_international_support = document.getElementById('pi-sports-section-international-support');
  if (pi_sports_section_international_support) {
    gsap.fromTo('#pi-sports-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_sports_list_our_credentials = document.getElementById('pi-sports-list-our-credentials');
  if (pi_sports_list_our_credentials) {
    gsap.from('#pi-sports-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_sports_list_related_services = document.getElementById('pi-sports-list-related-services');
  if (pi_sports_list_related_services) {
    gsap.from('#pi-sports-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_sports_section_youre_in_good_hands = document.getElementById('pi-sports-section-youre-in-good-hands');
  if (pi_sports_section_youre_in_good_hands) {
    gsap.fromTo('#pi-sports-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_sports_section_21 = document.getElementById('pi-sports-section-21');
  if (pi_sports_section_21) {
    gsap.fromTo('#pi-sports-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa = document.getElementById('pi-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa');
  if (pi_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa) {
    gsap.from('#pi-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa input, #pi-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_medical_list_quick_facts = document.getElementById('pi-medical-list-quick-facts');
  if (pi_medical_list_quick_facts) {
    gsap.from('#pi-medical-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_medical_list_common_challenges_applicants_face = document.getElementById('pi-medical-list-common-challenges-applicants-face');
  if (pi_medical_list_common_challenges_applicants_face) {
    gsap.from('#pi-medical-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_medical_list_how_we_solve_these_challenges = document.getElementById('pi-medical-list-how-we-solve-these-challenges');
  if (pi_medical_list_how_we_solve_these_challenges) {
    gsap.from('#pi-medical-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_medical_section_visa_overview = document.getElementById('pi-medical-section-visa-overview');
  if (pi_medical_section_visa_overview) {
    gsap.fromTo('#pi-medical-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_medical_form_who_is_this_visa_for = document.getElementById('pi-medical-form-who-is-this-visa-for');
  if (pi_medical_form_who_is_this_visa_for) {
    gsap.from('#pi-medical-form-who-is-this-visa-for input, #pi-medical-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_medical_list_required_documents = document.getElementById('pi-medical-list-required-documents');
  if (pi_medical_list_required_documents) {
    gsap.from('#pi-medical-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_medical_list_application_process = document.getElementById('pi-medical-list-application-process');
  if (pi_medical_list_application_process) {
    gsap.from('#pi-medical-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_medical_section_timelines_deadlines = document.getElementById('pi-medical-section-timelines-deadlines');
  if (pi_medical_section_timelines_deadlines) {
    gsap.fromTo('#pi-medical-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_medical_section_fees_costs = document.getElementById('pi-medical-section-fees-costs');
  if (pi_medical_section_fees_costs) {
    gsap.fromTo('#pi-medical-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_medical_list_risks_common_mistakes = document.getElementById('pi-medical-list-risks-common-mistakes');
  if (pi_medical_list_risks_common_mistakes) {
    gsap.from('#pi-medical-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_medical_section_diy_vs_professional_assistance = document.getElementById('pi-medical-section-diy-vs-professional-assistance');
  if (pi_medical_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-medical-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_medical_section_piau_specific_context = document.getElementById('pi-medical-section-piau-specific-context');
  if (pi_medical_section_piau_specific_context) {
    gsap.fromTo('#pi-medical-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_medical_section_what_our_clients_say = document.getElementById('pi-medical-section-what-our-clients-say');
  if (pi_medical_section_what_our_clients_say) {
    gsap.fromTo('#pi-medical-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_medical_section_frequently_asked_questions = document.getElementById('pi-medical-section-frequently-asked-questions');
  if (pi_medical_section_frequently_asked_questions) {
    gsap.fromTo('#pi-medical-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_medical_section_international_support = document.getElementById('pi-medical-section-international-support');
  if (pi_medical_section_international_support) {
    gsap.fromTo('#pi-medical-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_medical_list_our_credentials = document.getElementById('pi-medical-list-our-credentials');
  if (pi_medical_list_our_credentials) {
    gsap.from('#pi-medical-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_medical_list_related_services = document.getElementById('pi-medical-list-related-services');
  if (pi_medical_list_related_services) {
    gsap.from('#pi-medical-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_medical_section_youre_in_good_hands = document.getElementById('pi-medical-section-youre-in-good-hands');
  if (pi_medical_section_youre_in_good_hands) {
    gsap.fromTo('#pi-medical-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_medical_section_21 = document.getElementById('pi-medical-section-21');
  if (pi_medical_section_21) {
    gsap.fromTo('#pi-medical-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa = document.getElementById('pi-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa');
  if (pi_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa) {
    gsap.from('#pi-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa input, #pi-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_tourist_list_quick_facts = document.getElementById('pi-tourist-list-quick-facts');
  if (pi_tourist_list_quick_facts) {
    gsap.from('#pi-tourist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_tourist_list_common_challenges_applicants_face = document.getElementById('pi-tourist-list-common-challenges-applicants-face');
  if (pi_tourist_list_common_challenges_applicants_face) {
    gsap.from('#pi-tourist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_tourist_list_how_we_solve_these_challenges = document.getElementById('pi-tourist-list-how-we-solve-these-challenges');
  if (pi_tourist_list_how_we_solve_these_challenges) {
    gsap.from('#pi-tourist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_tourist_section_visa_overview = document.getElementById('pi-tourist-section-visa-overview');
  if (pi_tourist_section_visa_overview) {
    gsap.fromTo('#pi-tourist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_tourist_form_who_is_this_visa_for = document.getElementById('pi-tourist-form-who-is-this-visa-for');
  if (pi_tourist_form_who_is_this_visa_for) {
    gsap.from('#pi-tourist-form-who-is-this-visa-for input, #pi-tourist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_tourist_list_required_documents = document.getElementById('pi-tourist-list-required-documents');
  if (pi_tourist_list_required_documents) {
    gsap.from('#pi-tourist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_tourist_list_application_process = document.getElementById('pi-tourist-list-application-process');
  if (pi_tourist_list_application_process) {
    gsap.from('#pi-tourist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_tourist_section_timelines_deadlines = document.getElementById('pi-tourist-section-timelines-deadlines');
  if (pi_tourist_section_timelines_deadlines) {
    gsap.fromTo('#pi-tourist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_tourist_section_fees_costs = document.getElementById('pi-tourist-section-fees-costs');
  if (pi_tourist_section_fees_costs) {
    gsap.fromTo('#pi-tourist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_tourist_list_risks_common_mistakes = document.getElementById('pi-tourist-list-risks-common-mistakes');
  if (pi_tourist_list_risks_common_mistakes) {
    gsap.from('#pi-tourist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_tourist_section_diy_vs_professional_assistance = document.getElementById('pi-tourist-section-diy-vs-professional-assistance');
  if (pi_tourist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-tourist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_tourist_section_piau_specific_context = document.getElementById('pi-tourist-section-piau-specific-context');
  if (pi_tourist_section_piau_specific_context) {
    gsap.fromTo('#pi-tourist-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_tourist_section_what_our_clients_say = document.getElementById('pi-tourist-section-what-our-clients-say');
  if (pi_tourist_section_what_our_clients_say) {
    gsap.fromTo('#pi-tourist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_tourist_section_frequently_asked_questions = document.getElementById('pi-tourist-section-frequently-asked-questions');
  if (pi_tourist_section_frequently_asked_questions) {
    gsap.fromTo('#pi-tourist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_tourist_section_international_support = document.getElementById('pi-tourist-section-international-support');
  if (pi_tourist_section_international_support) {
    gsap.fromTo('#pi-tourist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_tourist_list_our_credentials = document.getElementById('pi-tourist-list-our-credentials');
  if (pi_tourist_list_our_credentials) {
    gsap.from('#pi-tourist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_tourist_list_related_services = document.getElementById('pi-tourist-list-related-services');
  if (pi_tourist_list_related_services) {
    gsap.from('#pi-tourist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_tourist_section_youre_in_good_hands = document.getElementById('pi-tourist-section-youre-in-good-hands');
  if (pi_tourist_section_youre_in_good_hands) {
    gsap.fromTo('#pi-tourist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_tourist_section_21 = document.getElementById('pi-tourist-section-21');
  if (pi_tourist_section_21) {
    gsap.fromTo('#pi-tourist-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_transit_form_transit_through_brazil_with_the_transit_visa = document.getElementById('pi-transit-form-transit-through-brazil-with-the-transit-visa');
  if (pi_transit_form_transit_through_brazil_with_the_transit_visa) {
    gsap.from('#pi-transit-form-transit-through-brazil-with-the-transit-visa input, #pi-transit-form-transit-through-brazil-with-the-transit-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_transit_list_quick_facts = document.getElementById('pi-transit-list-quick-facts');
  if (pi_transit_list_quick_facts) {
    gsap.from('#pi-transit-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_transit_list_common_challenges_applicants_face = document.getElementById('pi-transit-list-common-challenges-applicants-face');
  if (pi_transit_list_common_challenges_applicants_face) {
    gsap.from('#pi-transit-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_transit_list_how_we_solve_these_challenges = document.getElementById('pi-transit-list-how-we-solve-these-challenges');
  if (pi_transit_list_how_we_solve_these_challenges) {
    gsap.from('#pi-transit-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_transit_section_visa_overview = document.getElementById('pi-transit-section-visa-overview');
  if (pi_transit_section_visa_overview) {
    gsap.fromTo('#pi-transit-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_transit_form_who_is_this_visa_for = document.getElementById('pi-transit-form-who-is-this-visa-for');
  if (pi_transit_form_who_is_this_visa_for) {
    gsap.from('#pi-transit-form-who-is-this-visa-for input, #pi-transit-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_transit_list_required_documents = document.getElementById('pi-transit-list-required-documents');
  if (pi_transit_list_required_documents) {
    gsap.from('#pi-transit-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_transit_list_application_process = document.getElementById('pi-transit-list-application-process');
  if (pi_transit_list_application_process) {
    gsap.from('#pi-transit-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_transit_section_timelines_deadlines = document.getElementById('pi-transit-section-timelines-deadlines');
  if (pi_transit_section_timelines_deadlines) {
    gsap.fromTo('#pi-transit-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_transit_section_fees_costs = document.getElementById('pi-transit-section-fees-costs');
  if (pi_transit_section_fees_costs) {
    gsap.fromTo('#pi-transit-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_transit_list_risks_common_mistakes = document.getElementById('pi-transit-list-risks-common-mistakes');
  if (pi_transit_list_risks_common_mistakes) {
    gsap.from('#pi-transit-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_transit_section_diy_vs_professional_assistance = document.getElementById('pi-transit-section-diy-vs-professional-assistance');
  if (pi_transit_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-transit-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_transit_section_piau_specific_context = document.getElementById('pi-transit-section-piau-specific-context');
  if (pi_transit_section_piau_specific_context) {
    gsap.fromTo('#pi-transit-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_transit_section_what_our_clients_say = document.getElementById('pi-transit-section-what-our-clients-say');
  if (pi_transit_section_what_our_clients_say) {
    gsap.fromTo('#pi-transit-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_transit_section_frequently_asked_questions = document.getElementById('pi-transit-section-frequently-asked-questions');
  if (pi_transit_section_frequently_asked_questions) {
    gsap.fromTo('#pi-transit-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_transit_section_international_support = document.getElementById('pi-transit-section-international-support');
  if (pi_transit_section_international_support) {
    gsap.fromTo('#pi-transit-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_transit_list_our_credentials = document.getElementById('pi-transit-list-our-credentials');
  if (pi_transit_list_our_credentials) {
    gsap.from('#pi-transit-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_transit_list_related_services = document.getElementById('pi-transit-list-related-services');
  if (pi_transit_list_related_services) {
    gsap.from('#pi-transit-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_transit_section_youre_in_good_hands = document.getElementById('pi-transit-section-youre-in-good-hands');
  if (pi_transit_section_youre_in_good_hands) {
    gsap.fromTo('#pi-transit-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_transit_section_21 = document.getElementById('pi-transit-section-21');
  if (pi_transit_section_21) {
    gsap.fromTo('#pi-transit-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_student_form_study_in_brazil_with_the_student_visa = document.getElementById('pi-student-form-study-in-brazil-with-the-student-visa');
  if (pi_student_form_study_in_brazil_with_the_student_visa) {
    gsap.from('#pi-student-form-study-in-brazil-with-the-student-visa input, #pi-student-form-study-in-brazil-with-the-student-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_student_list_quick_facts = document.getElementById('pi-student-list-quick-facts');
  if (pi_student_list_quick_facts) {
    gsap.from('#pi-student-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_student_list_common_challenges_applicants_face = document.getElementById('pi-student-list-common-challenges-applicants-face');
  if (pi_student_list_common_challenges_applicants_face) {
    gsap.from('#pi-student-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_student_list_how_we_solve_these_challenges = document.getElementById('pi-student-list-how-we-solve-these-challenges');
  if (pi_student_list_how_we_solve_these_challenges) {
    gsap.from('#pi-student-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_student_section_visa_overview = document.getElementById('pi-student-section-visa-overview');
  if (pi_student_section_visa_overview) {
    gsap.fromTo('#pi-student-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_student_form_who_is_this_visa_for = document.getElementById('pi-student-form-who-is-this-visa-for');
  if (pi_student_form_who_is_this_visa_for) {
    gsap.from('#pi-student-form-who-is-this-visa-for input, #pi-student-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_student_list_required_documents = document.getElementById('pi-student-list-required-documents');
  if (pi_student_list_required_documents) {
    gsap.from('#pi-student-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_student_list_application_process = document.getElementById('pi-student-list-application-process');
  if (pi_student_list_application_process) {
    gsap.from('#pi-student-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_student_section_timelines_deadlines = document.getElementById('pi-student-section-timelines-deadlines');
  if (pi_student_section_timelines_deadlines) {
    gsap.fromTo('#pi-student-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_student_section_fees_costs = document.getElementById('pi-student-section-fees-costs');
  if (pi_student_section_fees_costs) {
    gsap.fromTo('#pi-student-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_student_list_risks_common_mistakes = document.getElementById('pi-student-list-risks-common-mistakes');
  if (pi_student_list_risks_common_mistakes) {
    gsap.from('#pi-student-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_student_section_diy_vs_professional_assistance = document.getElementById('pi-student-section-diy-vs-professional-assistance');
  if (pi_student_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-student-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_student_section_piau_specific_context = document.getElementById('pi-student-section-piau-specific-context');
  if (pi_student_section_piau_specific_context) {
    gsap.fromTo('#pi-student-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_student_section_what_our_clients_say = document.getElementById('pi-student-section-what-our-clients-say');
  if (pi_student_section_what_our_clients_say) {
    gsap.fromTo('#pi-student-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_student_section_frequently_asked_questions = document.getElementById('pi-student-section-frequently-asked-questions');
  if (pi_student_section_frequently_asked_questions) {
    gsap.fromTo('#pi-student-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_student_section_international_support = document.getElementById('pi-student-section-international-support');
  if (pi_student_section_international_support) {
    gsap.fromTo('#pi-student-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_student_list_our_credentials = document.getElementById('pi-student-list-our-credentials');
  if (pi_student_list_our_credentials) {
    gsap.from('#pi-student-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_student_list_related_services = document.getElementById('pi-student-list-related-services');
  if (pi_student_list_related_services) {
    gsap.from('#pi-student-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_student_section_youre_in_good_hands = document.getElementById('pi-student-section-youre-in-good-hands');
  if (pi_student_section_youre_in_good_hands) {
    gsap.fromTo('#pi-student-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_student_section_21 = document.getElementById('pi-student-section-21');
  if (pi_student_section_21) {
    gsap.fromTo('#pi-student-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_business_form_conduct_business_in_brazil_with_the_business_visa = document.getElementById('pi-business-form-conduct-business-in-brazil-with-the-business-visa');
  if (pi_business_form_conduct_business_in_brazil_with_the_business_visa) {
    gsap.from('#pi-business-form-conduct-business-in-brazil-with-the-business-visa input, #pi-business-form-conduct-business-in-brazil-with-the-business-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_business_list_quick_facts = document.getElementById('pi-business-list-quick-facts');
  if (pi_business_list_quick_facts) {
    gsap.from('#pi-business-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_business_list_common_challenges_applicants_face = document.getElementById('pi-business-list-common-challenges-applicants-face');
  if (pi_business_list_common_challenges_applicants_face) {
    gsap.from('#pi-business-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_business_list_how_we_solve_these_challenges = document.getElementById('pi-business-list-how-we-solve-these-challenges');
  if (pi_business_list_how_we_solve_these_challenges) {
    gsap.from('#pi-business-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_business_section_visa_overview = document.getElementById('pi-business-section-visa-overview');
  if (pi_business_section_visa_overview) {
    gsap.fromTo('#pi-business-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_business_form_who_is_this_visa_for = document.getElementById('pi-business-form-who-is-this-visa-for');
  if (pi_business_form_who_is_this_visa_for) {
    gsap.from('#pi-business-form-who-is-this-visa-for input, #pi-business-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_business_list_required_documents = document.getElementById('pi-business-list-required-documents');
  if (pi_business_list_required_documents) {
    gsap.from('#pi-business-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_business_list_application_process = document.getElementById('pi-business-list-application-process');
  if (pi_business_list_application_process) {
    gsap.from('#pi-business-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_business_section_timelines_deadlines = document.getElementById('pi-business-section-timelines-deadlines');
  if (pi_business_section_timelines_deadlines) {
    gsap.fromTo('#pi-business-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_business_section_fees_costs = document.getElementById('pi-business-section-fees-costs');
  if (pi_business_section_fees_costs) {
    gsap.fromTo('#pi-business-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_business_list_risks_common_mistakes = document.getElementById('pi-business-list-risks-common-mistakes');
  if (pi_business_list_risks_common_mistakes) {
    gsap.from('#pi-business-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_business_section_diy_vs_professional_assistance = document.getElementById('pi-business-section-diy-vs-professional-assistance');
  if (pi_business_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-business-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_business_section_piau_specific_context = document.getElementById('pi-business-section-piau-specific-context');
  if (pi_business_section_piau_specific_context) {
    gsap.fromTo('#pi-business-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_business_section_what_our_clients_say = document.getElementById('pi-business-section-what-our-clients-say');
  if (pi_business_section_what_our_clients_say) {
    gsap.fromTo('#pi-business-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_business_section_frequently_asked_questions = document.getElementById('pi-business-section-frequently-asked-questions');
  if (pi_business_section_frequently_asked_questions) {
    gsap.fromTo('#pi-business-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_business_section_international_support = document.getElementById('pi-business-section-international-support');
  if (pi_business_section_international_support) {
    gsap.fromTo('#pi-business-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_business_list_our_credentials = document.getElementById('pi-business-list-our-credentials');
  if (pi_business_list_our_credentials) {
    gsap.from('#pi-business-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_business_list_related_services = document.getElementById('pi-business-list-related-services');
  if (pi_business_list_related_services) {
    gsap.from('#pi-business-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_business_section_youre_in_good_hands = document.getElementById('pi-business-section-youre-in-good-hands');
  if (pi_business_section_youre_in_good_hands) {
    gsap.fromTo('#pi-business-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_business_section_21 = document.getElementById('pi-business-section-21');
  if (pi_business_section_21) {
    gsap.fromTo('#pi-business-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_research_form_conduct_research_in_brazil_with_the_research_visa = document.getElementById('pi-research-form-conduct-research-in-brazil-with-the-research-visa');
  if (pi_research_form_conduct_research_in_brazil_with_the_research_visa) {
    gsap.from('#pi-research-form-conduct-research-in-brazil-with-the-research-visa input, #pi-research-form-conduct-research-in-brazil-with-the-research-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_research_list_quick_facts = document.getElementById('pi-research-list-quick-facts');
  if (pi_research_list_quick_facts) {
    gsap.from('#pi-research-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_research_list_common_challenges_applicants_face = document.getElementById('pi-research-list-common-challenges-applicants-face');
  if (pi_research_list_common_challenges_applicants_face) {
    gsap.from('#pi-research-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_research_list_how_we_solve_these_challenges = document.getElementById('pi-research-list-how-we-solve-these-challenges');
  if (pi_research_list_how_we_solve_these_challenges) {
    gsap.from('#pi-research-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_research_section_visa_overview = document.getElementById('pi-research-section-visa-overview');
  if (pi_research_section_visa_overview) {
    gsap.fromTo('#pi-research-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_research_form_who_is_this_visa_for = document.getElementById('pi-research-form-who-is-this-visa-for');
  if (pi_research_form_who_is_this_visa_for) {
    gsap.from('#pi-research-form-who-is-this-visa-for input, #pi-research-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_research_list_required_documents = document.getElementById('pi-research-list-required-documents');
  if (pi_research_list_required_documents) {
    gsap.from('#pi-research-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_research_list_application_process = document.getElementById('pi-research-list-application-process');
  if (pi_research_list_application_process) {
    gsap.from('#pi-research-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_research_section_timelines_deadlines = document.getElementById('pi-research-section-timelines-deadlines');
  if (pi_research_section_timelines_deadlines) {
    gsap.fromTo('#pi-research-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_research_section_fees_costs = document.getElementById('pi-research-section-fees-costs');
  if (pi_research_section_fees_costs) {
    gsap.fromTo('#pi-research-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_research_list_risks_common_mistakes = document.getElementById('pi-research-list-risks-common-mistakes');
  if (pi_research_list_risks_common_mistakes) {
    gsap.from('#pi-research-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_research_section_diy_vs_professional_assistance = document.getElementById('pi-research-section-diy-vs-professional-assistance');
  if (pi_research_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-research-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_research_section_piau_specific_context = document.getElementById('pi-research-section-piau-specific-context');
  if (pi_research_section_piau_specific_context) {
    gsap.fromTo('#pi-research-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_research_section_what_our_clients_say = document.getElementById('pi-research-section-what-our-clients-say');
  if (pi_research_section_what_our_clients_say) {
    gsap.fromTo('#pi-research-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_research_section_frequently_asked_questions = document.getElementById('pi-research-section-frequently-asked-questions');
  if (pi_research_section_frequently_asked_questions) {
    gsap.fromTo('#pi-research-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_research_section_international_support = document.getElementById('pi-research-section-international-support');
  if (pi_research_section_international_support) {
    gsap.fromTo('#pi-research-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_research_list_our_credentials = document.getElementById('pi-research-list-our-credentials');
  if (pi_research_list_our_credentials) {
    gsap.from('#pi-research-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_research_list_related_services = document.getElementById('pi-research-list-related-services');
  if (pi_research_list_related_services) {
    gsap.from('#pi-research-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_research_section_youre_in_good_hands = document.getElementById('pi-research-section-youre-in-good-hands');
  if (pi_research_section_youre_in_good_hands) {
    gsap.fromTo('#pi-research-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_research_section_21 = document.getElementById('pi-research-section-21');
  if (pi_research_section_21) {
    gsap.fromTo('#pi-research-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_diplomatic_form_official_diplomatic_visa_for_brazil_missions = document.getElementById('pi-diplomatic-form-official-diplomatic-visa-for-brazil-missions');
  if (pi_diplomatic_form_official_diplomatic_visa_for_brazil_missions) {
    gsap.from('#pi-diplomatic-form-official-diplomatic-visa-for-brazil-missions input, #pi-diplomatic-form-official-diplomatic-visa-for-brazil-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_diplomatic_list_quick_facts = document.getElementById('pi-diplomatic-list-quick-facts');
  if (pi_diplomatic_list_quick_facts) {
    gsap.from('#pi-diplomatic-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_diplomatic_list_common_challenges_applicants_face = document.getElementById('pi-diplomatic-list-common-challenges-applicants-face');
  if (pi_diplomatic_list_common_challenges_applicants_face) {
    gsap.from('#pi-diplomatic-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_diplomatic_list_how_we_solve_these_challenges = document.getElementById('pi-diplomatic-list-how-we-solve-these-challenges');
  if (pi_diplomatic_list_how_we_solve_these_challenges) {
    gsap.from('#pi-diplomatic-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_diplomatic_section_visa_overview = document.getElementById('pi-diplomatic-section-visa-overview');
  if (pi_diplomatic_section_visa_overview) {
    gsap.fromTo('#pi-diplomatic-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_diplomatic_form_who_is_this_visa_for = document.getElementById('pi-diplomatic-form-who-is-this-visa-for');
  if (pi_diplomatic_form_who_is_this_visa_for) {
    gsap.from('#pi-diplomatic-form-who-is-this-visa-for input, #pi-diplomatic-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_diplomatic_list_required_documents = document.getElementById('pi-diplomatic-list-required-documents');
  if (pi_diplomatic_list_required_documents) {
    gsap.from('#pi-diplomatic-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_diplomatic_list_application_process = document.getElementById('pi-diplomatic-list-application-process');
  if (pi_diplomatic_list_application_process) {
    gsap.from('#pi-diplomatic-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_diplomatic_section_timelines_deadlines = document.getElementById('pi-diplomatic-section-timelines-deadlines');
  if (pi_diplomatic_section_timelines_deadlines) {
    gsap.fromTo('#pi-diplomatic-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_diplomatic_section_fees_costs = document.getElementById('pi-diplomatic-section-fees-costs');
  if (pi_diplomatic_section_fees_costs) {
    gsap.fromTo('#pi-diplomatic-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_diplomatic_list_risks_common_mistakes = document.getElementById('pi-diplomatic-list-risks-common-mistakes');
  if (pi_diplomatic_list_risks_common_mistakes) {
    gsap.from('#pi-diplomatic-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_diplomatic_section_diy_vs_professional_assistance = document.getElementById('pi-diplomatic-section-diy-vs-professional-assistance');
  if (pi_diplomatic_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-diplomatic-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_diplomatic_section_piau_specific_context = document.getElementById('pi-diplomatic-section-piau-specific-context');
  if (pi_diplomatic_section_piau_specific_context) {
    gsap.fromTo('#pi-diplomatic-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_diplomatic_section_what_our_clients_say = document.getElementById('pi-diplomatic-section-what-our-clients-say');
  if (pi_diplomatic_section_what_our_clients_say) {
    gsap.fromTo('#pi-diplomatic-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_diplomatic_section_frequently_asked_questions = document.getElementById('pi-diplomatic-section-frequently-asked-questions');
  if (pi_diplomatic_section_frequently_asked_questions) {
    gsap.fromTo('#pi-diplomatic-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_diplomatic_section_international_support = document.getElementById('pi-diplomatic-section-international-support');
  if (pi_diplomatic_section_international_support) {
    gsap.fromTo('#pi-diplomatic-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_diplomatic_list_our_credentials = document.getElementById('pi-diplomatic-list-our-credentials');
  if (pi_diplomatic_list_our_credentials) {
    gsap.from('#pi-diplomatic-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_diplomatic_list_related_services = document.getElementById('pi-diplomatic-list-related-services');
  if (pi_diplomatic_list_related_services) {
    gsap.from('#pi-diplomatic-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_diplomatic_section_youre_in_good_hands = document.getElementById('pi-diplomatic-section-youre-in-good-hands');
  if (pi_diplomatic_section_youre_in_good_hands) {
    gsap.fromTo('#pi-diplomatic-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_diplomatic_section_21 = document.getElementById('pi-diplomatic-section-21');
  if (pi_diplomatic_section_21) {
    gsap.fromTo('#pi-diplomatic-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_journalist_form_cover_news_in_brazil_with_the_journalist_visa = document.getElementById('pi-journalist-form-cover-news-in-brazil-with-the-journalist-visa');
  if (pi_journalist_form_cover_news_in_brazil_with_the_journalist_visa) {
    gsap.from('#pi-journalist-form-cover-news-in-brazil-with-the-journalist-visa input, #pi-journalist-form-cover-news-in-brazil-with-the-journalist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_journalist_list_quick_facts = document.getElementById('pi-journalist-list-quick-facts');
  if (pi_journalist_list_quick_facts) {
    gsap.from('#pi-journalist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_journalist_list_common_challenges_applicants_face = document.getElementById('pi-journalist-list-common-challenges-applicants-face');
  if (pi_journalist_list_common_challenges_applicants_face) {
    gsap.from('#pi-journalist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_journalist_list_how_we_solve_these_challenges = document.getElementById('pi-journalist-list-how-we-solve-these-challenges');
  if (pi_journalist_list_how_we_solve_these_challenges) {
    gsap.from('#pi-journalist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_journalist_section_visa_overview = document.getElementById('pi-journalist-section-visa-overview');
  if (pi_journalist_section_visa_overview) {
    gsap.fromTo('#pi-journalist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_journalist_form_who_is_this_visa_for = document.getElementById('pi-journalist-form-who-is-this-visa-for');
  if (pi_journalist_form_who_is_this_visa_for) {
    gsap.from('#pi-journalist-form-who-is-this-visa-for input, #pi-journalist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_journalist_list_required_documents = document.getElementById('pi-journalist-list-required-documents');
  if (pi_journalist_list_required_documents) {
    gsap.from('#pi-journalist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_journalist_list_application_process = document.getElementById('pi-journalist-list-application-process');
  if (pi_journalist_list_application_process) {
    gsap.from('#pi-journalist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_journalist_section_timelines_deadlines = document.getElementById('pi-journalist-section-timelines-deadlines');
  if (pi_journalist_section_timelines_deadlines) {
    gsap.fromTo('#pi-journalist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_journalist_section_fees_costs = document.getElementById('pi-journalist-section-fees-costs');
  if (pi_journalist_section_fees_costs) {
    gsap.fromTo('#pi-journalist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_journalist_list_risks_common_mistakes = document.getElementById('pi-journalist-list-risks-common-mistakes');
  if (pi_journalist_list_risks_common_mistakes) {
    gsap.from('#pi-journalist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_journalist_section_diy_vs_professional_assistance = document.getElementById('pi-journalist-section-diy-vs-professional-assistance');
  if (pi_journalist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-journalist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_journalist_section_piau_specific_context = document.getElementById('pi-journalist-section-piau-specific-context');
  if (pi_journalist_section_piau_specific_context) {
    gsap.fromTo('#pi-journalist-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_journalist_section_what_our_clients_say = document.getElementById('pi-journalist-section-what-our-clients-say');
  if (pi_journalist_section_what_our_clients_say) {
    gsap.fromTo('#pi-journalist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_journalist_section_frequently_asked_questions = document.getElementById('pi-journalist-section-frequently-asked-questions');
  if (pi_journalist_section_frequently_asked_questions) {
    gsap.fromTo('#pi-journalist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_journalist_section_international_support = document.getElementById('pi-journalist-section-international-support');
  if (pi_journalist_section_international_support) {
    gsap.fromTo('#pi-journalist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_journalist_list_our_credentials = document.getElementById('pi-journalist-list-our-credentials');
  if (pi_journalist_list_our_credentials) {
    gsap.from('#pi-journalist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_journalist_list_related_services = document.getElementById('pi-journalist-list-related-services');
  if (pi_journalist_list_related_services) {
    gsap.from('#pi-journalist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_journalist_section_youre_in_good_hands = document.getElementById('pi-journalist-section-youre-in-good-hands');
  if (pi_journalist_section_youre_in_good_hands) {
    gsap.fromTo('#pi-journalist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_journalist_section_21 = document.getElementById('pi-journalist-section-21');
  if (pi_journalist_section_21) {
    gsap.fromTo('#pi-journalist-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_fines_form_resolve_immigration_fines_in_brazil = document.getElementById('pi-fines-form-resolve-immigration-fines-in-brazil');
  if (pi_fines_form_resolve_immigration_fines_in_brazil) {
    gsap.from('#pi-fines-form-resolve-immigration-fines-in-brazil input, #pi-fines-form-resolve-immigration-fines-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_fines_list_quick_facts = document.getElementById('pi-fines-list-quick-facts');
  if (pi_fines_list_quick_facts) {
    gsap.from('#pi-fines-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_fines_list_common_challenges_applicants_face = document.getElementById('pi-fines-list-common-challenges-applicants-face');
  if (pi_fines_list_common_challenges_applicants_face) {
    gsap.from('#pi-fines-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_fines_list_how_we_solve_these_challenges = document.getElementById('pi-fines-list-how-we-solve-these-challenges');
  if (pi_fines_list_how_we_solve_these_challenges) {
    gsap.from('#pi-fines-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_fines_section_service_overview = document.getElementById('pi-fines-section-service-overview');
  if (pi_fines_section_service_overview) {
    gsap.fromTo('#pi-fines-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_fines_form_who_is_this_service_for = document.getElementById('pi-fines-form-who-is-this-service-for');
  if (pi_fines_form_who_is_this_service_for) {
    gsap.from('#pi-fines-form-who-is-this-service-for input, #pi-fines-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_fines_list_required_documents = document.getElementById('pi-fines-list-required-documents');
  if (pi_fines_list_required_documents) {
    gsap.from('#pi-fines-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_fines_list_process = document.getElementById('pi-fines-list-process');
  if (pi_fines_list_process) {
    gsap.from('#pi-fines-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_fines_section_timelines_deadlines = document.getElementById('pi-fines-section-timelines-deadlines');
  if (pi_fines_section_timelines_deadlines) {
    gsap.fromTo('#pi-fines-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_fines_section_fees_costs = document.getElementById('pi-fines-section-fees-costs');
  if (pi_fines_section_fees_costs) {
    gsap.fromTo('#pi-fines-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_fines_list_risks_common_mistakes = document.getElementById('pi-fines-list-risks-common-mistakes');
  if (pi_fines_list_risks_common_mistakes) {
    gsap.from('#pi-fines-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_fines_section_diy_vs_professional_assistance = document.getElementById('pi-fines-section-diy-vs-professional-assistance');
  if (pi_fines_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-fines-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_fines_section_piau_specific_context = document.getElementById('pi-fines-section-piau-specific-context');
  if (pi_fines_section_piau_specific_context) {
    gsap.fromTo('#pi-fines-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_fines_section_what_our_clients_say = document.getElementById('pi-fines-section-what-our-clients-say');
  if (pi_fines_section_what_our_clients_say) {
    gsap.fromTo('#pi-fines-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_fines_section_frequently_asked_questions = document.getElementById('pi-fines-section-frequently-asked-questions');
  if (pi_fines_section_frequently_asked_questions) {
    gsap.fromTo('#pi-fines-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_fines_section_international_support = document.getElementById('pi-fines-section-international-support');
  if (pi_fines_section_international_support) {
    gsap.fromTo('#pi-fines-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_fines_list_our_credentials = document.getElementById('pi-fines-list-our-credentials');
  if (pi_fines_list_our_credentials) {
    gsap.from('#pi-fines-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_fines_list_related_services = document.getElementById('pi-fines-list-related-services');
  if (pi_fines_list_related_services) {
    gsap.from('#pi-fines-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_fines_section_youre_in_good_hands = document.getElementById('pi-fines-section-youre-in-good-hands');
  if (pi_fines_section_youre_in_good_hands) {
    gsap.fromTo('#pi-fines-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_fines_section_21 = document.getElementById('pi-fines-section-21');
  if (pi_fines_section_21) {
    gsap.fromTo('#pi-fines-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_deportation_form_deportation_assistance_in_brazil = document.getElementById('pi-deportation-form-deportation-assistance-in-brazil');
  if (pi_deportation_form_deportation_assistance_in_brazil) {
    gsap.from('#pi-deportation-form-deportation-assistance-in-brazil input, #pi-deportation-form-deportation-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_deportation_list_quick_facts = document.getElementById('pi-deportation-list-quick-facts');
  if (pi_deportation_list_quick_facts) {
    gsap.from('#pi-deportation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_deportation_list_common_challenges_applicants_face = document.getElementById('pi-deportation-list-common-challenges-applicants-face');
  if (pi_deportation_list_common_challenges_applicants_face) {
    gsap.from('#pi-deportation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_deportation_list_how_we_solve_these_challenges = document.getElementById('pi-deportation-list-how-we-solve-these-challenges');
  if (pi_deportation_list_how_we_solve_these_challenges) {
    gsap.from('#pi-deportation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_deportation_section_service_overview = document.getElementById('pi-deportation-section-service-overview');
  if (pi_deportation_section_service_overview) {
    gsap.fromTo('#pi-deportation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_deportation_form_who_is_this_service_for = document.getElementById('pi-deportation-form-who-is-this-service-for');
  if (pi_deportation_form_who_is_this_service_for) {
    gsap.from('#pi-deportation-form-who-is-this-service-for input, #pi-deportation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_deportation_list_required_documents = document.getElementById('pi-deportation-list-required-documents');
  if (pi_deportation_list_required_documents) {
    gsap.from('#pi-deportation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_deportation_list_process = document.getElementById('pi-deportation-list-process');
  if (pi_deportation_list_process) {
    gsap.from('#pi-deportation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_deportation_section_timelines_deadlines = document.getElementById('pi-deportation-section-timelines-deadlines');
  if (pi_deportation_section_timelines_deadlines) {
    gsap.fromTo('#pi-deportation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_deportation_section_fees_costs = document.getElementById('pi-deportation-section-fees-costs');
  if (pi_deportation_section_fees_costs) {
    gsap.fromTo('#pi-deportation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_deportation_list_risks_common_mistakes = document.getElementById('pi-deportation-list-risks-common-mistakes');
  if (pi_deportation_list_risks_common_mistakes) {
    gsap.from('#pi-deportation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_deportation_section_diy_vs_professional_assistance = document.getElementById('pi-deportation-section-diy-vs-professional-assistance');
  if (pi_deportation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-deportation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_deportation_section_piau_specific_context = document.getElementById('pi-deportation-section-piau-specific-context');
  if (pi_deportation_section_piau_specific_context) {
    gsap.fromTo('#pi-deportation-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_deportation_section_what_our_clients_say = document.getElementById('pi-deportation-section-what-our-clients-say');
  if (pi_deportation_section_what_our_clients_say) {
    gsap.fromTo('#pi-deportation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_deportation_section_frequently_asked_questions = document.getElementById('pi-deportation-section-frequently-asked-questions');
  if (pi_deportation_section_frequently_asked_questions) {
    gsap.fromTo('#pi-deportation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_deportation_section_international_support = document.getElementById('pi-deportation-section-international-support');
  if (pi_deportation_section_international_support) {
    gsap.fromTo('#pi-deportation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_deportation_list_our_credentials = document.getElementById('pi-deportation-list-our-credentials');
  if (pi_deportation_list_our_credentials) {
    gsap.from('#pi-deportation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_deportation_list_related_services = document.getElementById('pi-deportation-list-related-services');
  if (pi_deportation_list_related_services) {
    gsap.from('#pi-deportation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_deportation_section_youre_in_good_hands = document.getElementById('pi-deportation-section-youre-in-good-hands');
  if (pi_deportation_section_youre_in_good_hands) {
    gsap.fromTo('#pi-deportation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_deportation_section_21 = document.getElementById('pi-deportation-section-21');
  if (pi_deportation_section_21) {
    gsap.fromTo('#pi-deportation-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_translation_form_sworn_document_translation_services_in_brazil = document.getElementById('pi-translation-form-sworn-document-translation-services-in-brazil');
  if (pi_translation_form_sworn_document_translation_services_in_brazil) {
    gsap.from('#pi-translation-form-sworn-document-translation-services-in-brazil input, #pi-translation-form-sworn-document-translation-services-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_translation_list_quick_facts = document.getElementById('pi-translation-list-quick-facts');
  if (pi_translation_list_quick_facts) {
    gsap.from('#pi-translation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_translation_list_common_challenges_applicants_face = document.getElementById('pi-translation-list-common-challenges-applicants-face');
  if (pi_translation_list_common_challenges_applicants_face) {
    gsap.from('#pi-translation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_translation_list_how_we_solve_these_challenges = document.getElementById('pi-translation-list-how-we-solve-these-challenges');
  if (pi_translation_list_how_we_solve_these_challenges) {
    gsap.from('#pi-translation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_translation_section_service_overview = document.getElementById('pi-translation-section-service-overview');
  if (pi_translation_section_service_overview) {
    gsap.fromTo('#pi-translation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_translation_form_who_is_this_service_for = document.getElementById('pi-translation-form-who-is-this-service-for');
  if (pi_translation_form_who_is_this_service_for) {
    gsap.from('#pi-translation-form-who-is-this-service-for input, #pi-translation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_translation_list_required_documents = document.getElementById('pi-translation-list-required-documents');
  if (pi_translation_list_required_documents) {
    gsap.from('#pi-translation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_translation_list_process = document.getElementById('pi-translation-list-process');
  if (pi_translation_list_process) {
    gsap.from('#pi-translation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_translation_section_timelines_deadlines = document.getElementById('pi-translation-section-timelines-deadlines');
  if (pi_translation_section_timelines_deadlines) {
    gsap.fromTo('#pi-translation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_translation_section_fees_costs = document.getElementById('pi-translation-section-fees-costs');
  if (pi_translation_section_fees_costs) {
    gsap.fromTo('#pi-translation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_translation_list_risks_common_mistakes = document.getElementById('pi-translation-list-risks-common-mistakes');
  if (pi_translation_list_risks_common_mistakes) {
    gsap.from('#pi-translation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_translation_section_diy_vs_professional_assistance = document.getElementById('pi-translation-section-diy-vs-professional-assistance');
  if (pi_translation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-translation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_translation_section_piau_specific_context = document.getElementById('pi-translation-section-piau-specific-context');
  if (pi_translation_section_piau_specific_context) {
    gsap.fromTo('#pi-translation-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_translation_section_what_our_clients_say = document.getElementById('pi-translation-section-what-our-clients-say');
  if (pi_translation_section_what_our_clients_say) {
    gsap.fromTo('#pi-translation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_translation_section_frequently_asked_questions = document.getElementById('pi-translation-section-frequently-asked-questions');
  if (pi_translation_section_frequently_asked_questions) {
    gsap.fromTo('#pi-translation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_translation_section_international_support = document.getElementById('pi-translation-section-international-support');
  if (pi_translation_section_international_support) {
    gsap.fromTo('#pi-translation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_translation_list_our_credentials = document.getElementById('pi-translation-list-our-credentials');
  if (pi_translation_list_our_credentials) {
    gsap.from('#pi-translation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_translation_list_related_services = document.getElementById('pi-translation-list-related-services');
  if (pi_translation_list_related_services) {
    gsap.from('#pi-translation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_translation_section_youre_in_good_hands = document.getElementById('pi-translation-section-youre-in-good-hands');
  if (pi_translation_section_youre_in_good_hands) {
    gsap.fromTo('#pi-translation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_translation_section_21 = document.getElementById('pi-translation-section-21');
  if (pi_translation_section_21) {
    gsap.fromTo('#pi-translation-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_expulsion_form_expulsion_assistance_in_brazil = document.getElementById('pi-expulsion-form-expulsion-assistance-in-brazil');
  if (pi_expulsion_form_expulsion_assistance_in_brazil) {
    gsap.from('#pi-expulsion-form-expulsion-assistance-in-brazil input, #pi-expulsion-form-expulsion-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_expulsion_list_quick_facts = document.getElementById('pi-expulsion-list-quick-facts');
  if (pi_expulsion_list_quick_facts) {
    gsap.from('#pi-expulsion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_expulsion_list_common_challenges_applicants_face = document.getElementById('pi-expulsion-list-common-challenges-applicants-face');
  if (pi_expulsion_list_common_challenges_applicants_face) {
    gsap.from('#pi-expulsion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_expulsion_list_how_we_solve_these_challenges = document.getElementById('pi-expulsion-list-how-we-solve-these-challenges');
  if (pi_expulsion_list_how_we_solve_these_challenges) {
    gsap.from('#pi-expulsion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_expulsion_section_service_overview = document.getElementById('pi-expulsion-section-service-overview');
  if (pi_expulsion_section_service_overview) {
    gsap.fromTo('#pi-expulsion-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_expulsion_form_who_is_this_service_for = document.getElementById('pi-expulsion-form-who-is-this-service-for');
  if (pi_expulsion_form_who_is_this_service_for) {
    gsap.from('#pi-expulsion-form-who-is-this-service-for input, #pi-expulsion-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_expulsion_list_required_documents = document.getElementById('pi-expulsion-list-required-documents');
  if (pi_expulsion_list_required_documents) {
    gsap.from('#pi-expulsion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_expulsion_list_process = document.getElementById('pi-expulsion-list-process');
  if (pi_expulsion_list_process) {
    gsap.from('#pi-expulsion-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_expulsion_section_timelines_deadlines = document.getElementById('pi-expulsion-section-timelines-deadlines');
  if (pi_expulsion_section_timelines_deadlines) {
    gsap.fromTo('#pi-expulsion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_expulsion_section_fees_costs = document.getElementById('pi-expulsion-section-fees-costs');
  if (pi_expulsion_section_fees_costs) {
    gsap.fromTo('#pi-expulsion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_expulsion_list_risks_common_mistakes = document.getElementById('pi-expulsion-list-risks-common-mistakes');
  if (pi_expulsion_list_risks_common_mistakes) {
    gsap.from('#pi-expulsion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_expulsion_section_diy_vs_professional_assistance = document.getElementById('pi-expulsion-section-diy-vs-professional-assistance');
  if (pi_expulsion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-expulsion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_expulsion_section_piau_specific_context = document.getElementById('pi-expulsion-section-piau-specific-context');
  if (pi_expulsion_section_piau_specific_context) {
    gsap.fromTo('#pi-expulsion-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_expulsion_section_what_our_clients_say = document.getElementById('pi-expulsion-section-what-our-clients-say');
  if (pi_expulsion_section_what_our_clients_say) {
    gsap.fromTo('#pi-expulsion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_expulsion_section_frequently_asked_questions = document.getElementById('pi-expulsion-section-frequently-asked-questions');
  if (pi_expulsion_section_frequently_asked_questions) {
    gsap.fromTo('#pi-expulsion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_expulsion_section_international_support = document.getElementById('pi-expulsion-section-international-support');
  if (pi_expulsion_section_international_support) {
    gsap.fromTo('#pi-expulsion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_expulsion_list_our_credentials = document.getElementById('pi-expulsion-list-our-credentials');
  if (pi_expulsion_list_our_credentials) {
    gsap.from('#pi-expulsion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_expulsion_list_related_services = document.getElementById('pi-expulsion-list-related-services');
  if (pi_expulsion_list_related_services) {
    gsap.from('#pi-expulsion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_expulsion_section_youre_in_good_hands = document.getElementById('pi-expulsion-section-youre-in-good-hands');
  if (pi_expulsion_section_youre_in_good_hands) {
    gsap.fromTo('#pi-expulsion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_expulsion_section_21 = document.getElementById('pi-expulsion-section-21');
  if (pi_expulsion_section_21) {
    gsap.fromTo('#pi-expulsion-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_appeals_form_appeal_immigration_denials_in_brazil = document.getElementById('pi-appeals-form-appeal-immigration-denials-in-brazil');
  if (pi_appeals_form_appeal_immigration_denials_in_brazil) {
    gsap.from('#pi-appeals-form-appeal-immigration-denials-in-brazil input, #pi-appeals-form-appeal-immigration-denials-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_appeals_list_quick_facts = document.getElementById('pi-appeals-list-quick-facts');
  if (pi_appeals_list_quick_facts) {
    gsap.from('#pi-appeals-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_appeals_list_common_challenges_applicants_face = document.getElementById('pi-appeals-list-common-challenges-applicants-face');
  if (pi_appeals_list_common_challenges_applicants_face) {
    gsap.from('#pi-appeals-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_appeals_list_how_we_solve_these_challenges = document.getElementById('pi-appeals-list-how-we-solve-these-challenges');
  if (pi_appeals_list_how_we_solve_these_challenges) {
    gsap.from('#pi-appeals-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_appeals_section_service_overview = document.getElementById('pi-appeals-section-service-overview');
  if (pi_appeals_section_service_overview) {
    gsap.fromTo('#pi-appeals-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_appeals_form_who_is_this_service_for = document.getElementById('pi-appeals-form-who-is-this-service-for');
  if (pi_appeals_form_who_is_this_service_for) {
    gsap.from('#pi-appeals-form-who-is-this-service-for input, #pi-appeals-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_appeals_list_required_documents = document.getElementById('pi-appeals-list-required-documents');
  if (pi_appeals_list_required_documents) {
    gsap.from('#pi-appeals-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_appeals_list_appeal_process = document.getElementById('pi-appeals-list-appeal-process');
  if (pi_appeals_list_appeal_process) {
    gsap.from('#pi-appeals-list-appeal-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_appeals_section_timelines_deadlines = document.getElementById('pi-appeals-section-timelines-deadlines');
  if (pi_appeals_section_timelines_deadlines) {
    gsap.fromTo('#pi-appeals-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_appeals_section_fees_costs = document.getElementById('pi-appeals-section-fees-costs');
  if (pi_appeals_section_fees_costs) {
    gsap.fromTo('#pi-appeals-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_appeals_list_risks_common_mistakes = document.getElementById('pi-appeals-list-risks-common-mistakes');
  if (pi_appeals_list_risks_common_mistakes) {
    gsap.from('#pi-appeals-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_appeals_section_diy_vs_professional_assistance = document.getElementById('pi-appeals-section-diy-vs-professional-assistance');
  if (pi_appeals_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-appeals-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_appeals_section_piau_specific_context = document.getElementById('pi-appeals-section-piau-specific-context');
  if (pi_appeals_section_piau_specific_context) {
    gsap.fromTo('#pi-appeals-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_appeals_section_what_our_clients_say = document.getElementById('pi-appeals-section-what-our-clients-say');
  if (pi_appeals_section_what_our_clients_say) {
    gsap.fromTo('#pi-appeals-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_appeals_section_frequently_asked_questions = document.getElementById('pi-appeals-section-frequently-asked-questions');
  if (pi_appeals_section_frequently_asked_questions) {
    gsap.fromTo('#pi-appeals-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_appeals_section_international_support = document.getElementById('pi-appeals-section-international-support');
  if (pi_appeals_section_international_support) {
    gsap.fromTo('#pi-appeals-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_appeals_list_our_credentials = document.getElementById('pi-appeals-list-our-credentials');
  if (pi_appeals_list_our_credentials) {
    gsap.from('#pi-appeals-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_appeals_list_related_services = document.getElementById('pi-appeals-list-related-services');
  if (pi_appeals_list_related_services) {
    gsap.from('#pi-appeals-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_appeals_section_youre_in_good_hands = document.getElementById('pi-appeals-section-youre-in-good-hands');
  if (pi_appeals_section_youre_in_good_hands) {
    gsap.fromTo('#pi-appeals-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_appeals_section_21 = document.getElementById('pi-appeals-section-21');
  if (pi_appeals_section_21) {
    gsap.fromTo('#pi-appeals-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_consular_form_consular_services_in_brazil_for_citizens = document.getElementById('pi-consular-form-consular-services-in-brazil-for-citizens');
  if (pi_consular_form_consular_services_in_brazil_for_citizens) {
    gsap.from('#pi-consular-form-consular-services-in-brazil-for-citizens input, #pi-consular-form-consular-services-in-brazil-for-citizens textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_consular_list_quick_facts = document.getElementById('pi-consular-list-quick-facts');
  if (pi_consular_list_quick_facts) {
    gsap.from('#pi-consular-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_consular_list_common_challenges_applicants_face = document.getElementById('pi-consular-list-common-challenges-applicants-face');
  if (pi_consular_list_common_challenges_applicants_face) {
    gsap.from('#pi-consular-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_consular_list_how_we_solve_these_challenges = document.getElementById('pi-consular-list-how-we-solve-these-challenges');
  if (pi_consular_list_how_we_solve_these_challenges) {
    gsap.from('#pi-consular-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_consular_section_service_overview = document.getElementById('pi-consular-section-service-overview');
  if (pi_consular_section_service_overview) {
    gsap.fromTo('#pi-consular-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_consular_form_who_is_this_service_for = document.getElementById('pi-consular-form-who-is-this-service-for');
  if (pi_consular_form_who_is_this_service_for) {
    gsap.from('#pi-consular-form-who-is-this-service-for input, #pi-consular-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_consular_list_required_documents = document.getElementById('pi-consular-list-required-documents');
  if (pi_consular_list_required_documents) {
    gsap.from('#pi-consular-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_consular_list_process = document.getElementById('pi-consular-list-process');
  if (pi_consular_list_process) {
    gsap.from('#pi-consular-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_consular_section_timelines_deadlines = document.getElementById('pi-consular-section-timelines-deadlines');
  if (pi_consular_section_timelines_deadlines) {
    gsap.fromTo('#pi-consular-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_consular_section_fees_costs = document.getElementById('pi-consular-section-fees-costs');
  if (pi_consular_section_fees_costs) {
    gsap.fromTo('#pi-consular-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_consular_list_risks_common_mistakes = document.getElementById('pi-consular-list-risks-common-mistakes');
  if (pi_consular_list_risks_common_mistakes) {
    gsap.from('#pi-consular-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_consular_section_diy_vs_professional_assistance = document.getElementById('pi-consular-section-diy-vs-professional-assistance');
  if (pi_consular_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-consular-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_consular_section_piau_specific_context = document.getElementById('pi-consular-section-piau-specific-context');
  if (pi_consular_section_piau_specific_context) {
    gsap.fromTo('#pi-consular-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_consular_section_what_our_clients_say = document.getElementById('pi-consular-section-what-our-clients-say');
  if (pi_consular_section_what_our_clients_say) {
    gsap.fromTo('#pi-consular-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_consular_section_frequently_asked_questions = document.getElementById('pi-consular-section-frequently-asked-questions');
  if (pi_consular_section_frequently_asked_questions) {
    gsap.fromTo('#pi-consular-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_consular_section_international_support = document.getElementById('pi-consular-section-international-support');
  if (pi_consular_section_international_support) {
    gsap.fromTo('#pi-consular-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_consular_list_our_credentials = document.getElementById('pi-consular-list-our-credentials');
  if (pi_consular_list_our_credentials) {
    gsap.from('#pi-consular-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_consular_list_related_services = document.getElementById('pi-consular-list-related-services');
  if (pi_consular_list_related_services) {
    gsap.from('#pi-consular-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_consular_section_youre_in_good_hands = document.getElementById('pi-consular-section-youre-in-good-hands');
  if (pi_consular_section_youre_in_good_hands) {
    gsap.fromTo('#pi-consular-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_consular_section_21 = document.getElementById('pi-consular-section-21');
  if (pi_consular_section_21) {
    gsap.fromTo('#pi-consular-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const criminal_records.html = document.getElementById('criminal-records.html');
  if (criminal_records.html) {
    gsap.fromTo('#criminal-records.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_criminalrecords_form_obtain_criminal_records_certificate_in_brazil = document.getElementById('pi-criminalrecords-form-obtain-criminal-records-certificate-in-brazil');
  if (pi_criminalrecords_form_obtain_criminal_records_certificate_in_brazil) {
    gsap.from('#pi-criminalrecords-form-obtain-criminal-records-certificate-in-brazil input, #pi-criminalrecords-form-obtain-criminal-records-certificate-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_criminalrecords_list_quick_facts = document.getElementById('pi-criminalrecords-list-quick-facts');
  if (pi_criminalrecords_list_quick_facts) {
    gsap.from('#pi-criminalrecords-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_criminalrecords_list_common_challenges_applicants_face = document.getElementById('pi-criminalrecords-list-common-challenges-applicants-face');
  if (pi_criminalrecords_list_common_challenges_applicants_face) {
    gsap.from('#pi-criminalrecords-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_criminalrecords_list_how_we_solve_these_challenges = document.getElementById('pi-criminalrecords-list-how-we-solve-these-challenges');
  if (pi_criminalrecords_list_how_we_solve_these_challenges) {
    gsap.from('#pi-criminalrecords-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_criminalrecords_section_service_overview = document.getElementById('pi-criminalrecords-section-service-overview');
  if (pi_criminalrecords_section_service_overview) {
    gsap.fromTo('#pi-criminalrecords-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_criminalrecords_form_who_is_this_service_for = document.getElementById('pi-criminalrecords-form-who-is-this-service-for');
  if (pi_criminalrecords_form_who_is_this_service_for) {
    gsap.from('#pi-criminalrecords-form-who-is-this-service-for input, #pi-criminalrecords-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_criminalrecords_list_required_documents = document.getElementById('pi-criminalrecords-list-required-documents');
  if (pi_criminalrecords_list_required_documents) {
    gsap.from('#pi-criminalrecords-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_criminalrecords_list_process = document.getElementById('pi-criminalrecords-list-process');
  if (pi_criminalrecords_list_process) {
    gsap.from('#pi-criminalrecords-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_criminalrecords_section_timelines_deadlines = document.getElementById('pi-criminalrecords-section-timelines-deadlines');
  if (pi_criminalrecords_section_timelines_deadlines) {
    gsap.fromTo('#pi-criminalrecords-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_criminalrecords_section_fees_costs = document.getElementById('pi-criminalrecords-section-fees-costs');
  if (pi_criminalrecords_section_fees_costs) {
    gsap.fromTo('#pi-criminalrecords-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_criminalrecords_list_risks_common_mistakes = document.getElementById('pi-criminalrecords-list-risks-common-mistakes');
  if (pi_criminalrecords_list_risks_common_mistakes) {
    gsap.from('#pi-criminalrecords-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_criminalrecords_section_diy_vs_professional_assistance = document.getElementById('pi-criminalrecords-section-diy-vs-professional-assistance');
  if (pi_criminalrecords_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-criminalrecords-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_criminalrecords_section_piau_specific_context = document.getElementById('pi-criminalrecords-section-piau-specific-context');
  if (pi_criminalrecords_section_piau_specific_context) {
    gsap.fromTo('#pi-criminalrecords-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_criminalrecords_section_what_our_clients_say = document.getElementById('pi-criminalrecords-section-what-our-clients-say');
  if (pi_criminalrecords_section_what_our_clients_say) {
    gsap.fromTo('#pi-criminalrecords-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_criminalrecords_section_frequently_asked_questions = document.getElementById('pi-criminalrecords-section-frequently-asked-questions');
  if (pi_criminalrecords_section_frequently_asked_questions) {
    gsap.fromTo('#pi-criminalrecords-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_criminalrecords_section_international_support = document.getElementById('pi-criminalrecords-section-international-support');
  if (pi_criminalrecords_section_international_support) {
    gsap.fromTo('#pi-criminalrecords-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_criminalrecords_list_our_credentials = document.getElementById('pi-criminalrecords-list-our-credentials');
  if (pi_criminalrecords_list_our_credentials) {
    gsap.from('#pi-criminalrecords-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_criminalrecords_list_related_services = document.getElementById('pi-criminalrecords-list-related-services');
  if (pi_criminalrecords_list_related_services) {
    gsap.from('#pi-criminalrecords-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_criminalrecords_section_youre_in_good_hands = document.getElementById('pi-criminalrecords-section-youre-in-good-hands');
  if (pi_criminalrecords_section_youre_in_good_hands) {
    gsap.fromTo('#pi-criminalrecords-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_criminalrecords_section_21 = document.getElementById('pi-criminalrecords-section-21');
  if (pi_criminalrecords_section_21) {
    gsap.fromTo('#pi-criminalrecords-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_extradition_form_extradition_assistance_in_brazil = document.getElementById('pi-extradition-form-extradition-assistance-in-brazil');
  if (pi_extradition_form_extradition_assistance_in_brazil) {
    gsap.from('#pi-extradition-form-extradition-assistance-in-brazil input, #pi-extradition-form-extradition-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_extradition_list_quick_facts = document.getElementById('pi-extradition-list-quick-facts');
  if (pi_extradition_list_quick_facts) {
    gsap.from('#pi-extradition-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_extradition_list_common_challenges_applicants_face = document.getElementById('pi-extradition-list-common-challenges-applicants-face');
  if (pi_extradition_list_common_challenges_applicants_face) {
    gsap.from('#pi-extradition-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_extradition_list_how_we_solve_these_challenges = document.getElementById('pi-extradition-list-how-we-solve-these-challenges');
  if (pi_extradition_list_how_we_solve_these_challenges) {
    gsap.from('#pi-extradition-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_extradition_section_service_overview = document.getElementById('pi-extradition-section-service-overview');
  if (pi_extradition_section_service_overview) {
    gsap.fromTo('#pi-extradition-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_extradition_form_who_is_this_service_for = document.getElementById('pi-extradition-form-who-is-this-service-for');
  if (pi_extradition_form_who_is_this_service_for) {
    gsap.from('#pi-extradition-form-who-is-this-service-for input, #pi-extradition-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_extradition_list_required_documents = document.getElementById('pi-extradition-list-required-documents');
  if (pi_extradition_list_required_documents) {
    gsap.from('#pi-extradition-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_extradition_list_process = document.getElementById('pi-extradition-list-process');
  if (pi_extradition_list_process) {
    gsap.from('#pi-extradition-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_extradition_section_timelines_deadlines = document.getElementById('pi-extradition-section-timelines-deadlines');
  if (pi_extradition_section_timelines_deadlines) {
    gsap.fromTo('#pi-extradition-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_extradition_section_fees_costs = document.getElementById('pi-extradition-section-fees-costs');
  if (pi_extradition_section_fees_costs) {
    gsap.fromTo('#pi-extradition-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_extradition_list_risks_common_mistakes = document.getElementById('pi-extradition-list-risks-common-mistakes');
  if (pi_extradition_list_risks_common_mistakes) {
    gsap.from('#pi-extradition-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_extradition_section_diy_vs_professional_assistance = document.getElementById('pi-extradition-section-diy-vs-professional-assistance');
  if (pi_extradition_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-extradition-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_extradition_section_piau_specific_context = document.getElementById('pi-extradition-section-piau-specific-context');
  if (pi_extradition_section_piau_specific_context) {
    gsap.fromTo('#pi-extradition-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_extradition_section_what_our_clients_say = document.getElementById('pi-extradition-section-what-our-clients-say');
  if (pi_extradition_section_what_our_clients_say) {
    gsap.fromTo('#pi-extradition-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_extradition_section_frequently_asked_questions = document.getElementById('pi-extradition-section-frequently-asked-questions');
  if (pi_extradition_section_frequently_asked_questions) {
    gsap.fromTo('#pi-extradition-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_extradition_section_international_support = document.getElementById('pi-extradition-section-international-support');
  if (pi_extradition_section_international_support) {
    gsap.fromTo('#pi-extradition-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_extradition_list_our_credentials = document.getElementById('pi-extradition-list-our-credentials');
  if (pi_extradition_list_our_credentials) {
    gsap.from('#pi-extradition-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_extradition_list_related_services = document.getElementById('pi-extradition-list-related-services');
  if (pi_extradition_list_related_services) {
    gsap.from('#pi-extradition-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_extradition_section_youre_in_good_hands = document.getElementById('pi-extradition-section-youre-in-good-hands');
  if (pi_extradition_section_youre_in_good_hands) {
    gsap.fromTo('#pi-extradition-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_extradition_section_21 = document.getElementById('pi-extradition-section-21');
  if (pi_extradition_section_21) {
    gsap.fromTo('#pi-extradition-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_north_form_discover_the_north_amazon_and_beyond = document.getElementById('pi-north-form-discover-the-north-amazon-and-beyond');
  if (pi_north_form_discover_the_north_amazon_and_beyond) {
    gsap.from('#pi-north-form-discover-the-north-amazon-and-beyond input, #pi-north-form-discover-the-north-amazon-and-beyond textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_north_list_quick_facts = document.getElementById('pi-north-list-quick-facts');
  if (pi_north_list_quick_facts) {
    gsap.from('#pi-north-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_north_list_common_challenges_applicants_face = document.getElementById('pi-north-list-common-challenges-applicants-face');
  if (pi_north_list_common_challenges_applicants_face) {
    gsap.from('#pi-north-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_north_list_how_we_solve_these_challenges = document.getElementById('pi-north-list-how-we-solve-these-challenges');
  if (pi_north_list_how_we_solve_these_challenges) {
    gsap.from('#pi-north-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_north_section_trip_overview = document.getElementById('pi-north-section-trip-overview');
  if (pi_north_section_trip_overview) {
    gsap.fromTo('#pi-north-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_north_form_who_is_this_trip_for = document.getElementById('pi-north-form-who-is-this-trip-for');
  if (pi_north_form_who_is_this_trip_for) {
    gsap.from('#pi-north-form-who-is-this-trip-for input, #pi-north-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_north_list_required_documents = document.getElementById('pi-north-list-required-documents');
  if (pi_north_list_required_documents) {
    gsap.from('#pi-north-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_north_list_booking_process = document.getElementById('pi-north-list-booking-process');
  if (pi_north_list_booking_process) {
    gsap.from('#pi-north-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_north_section_timelines_deadlines = document.getElementById('pi-north-section-timelines-deadlines');
  if (pi_north_section_timelines_deadlines) {
    gsap.fromTo('#pi-north-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_north_section_fees_costs = document.getElementById('pi-north-section-fees-costs');
  if (pi_north_section_fees_costs) {
    gsap.fromTo('#pi-north-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_north_list_risks_common_mistakes = document.getElementById('pi-north-list-risks-common-mistakes');
  if (pi_north_list_risks_common_mistakes) {
    gsap.from('#pi-north-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_north_section_diy_vs_professional_assistance = document.getElementById('pi-north-section-diy-vs-professional-assistance');
  if (pi_north_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-north-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_north_section_piau_specific_context = document.getElementById('pi-north-section-piau-specific-context');
  if (pi_north_section_piau_specific_context) {
    gsap.fromTo('#pi-north-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_north_section_what_our_clients_say = document.getElementById('pi-north-section-what-our-clients-say');
  if (pi_north_section_what_our_clients_say) {
    gsap.fromTo('#pi-north-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_north_section_frequently_asked_questions = document.getElementById('pi-north-section-frequently-asked-questions');
  if (pi_north_section_frequently_asked_questions) {
    gsap.fromTo('#pi-north-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_north_section_international_support = document.getElementById('pi-north-section-international-support');
  if (pi_north_section_international_support) {
    gsap.fromTo('#pi-north-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_north_list_our_credentials = document.getElementById('pi-north-list-our-credentials');
  if (pi_north_list_our_credentials) {
    gsap.from('#pi-north-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_north_list_related_services = document.getElementById('pi-north-list-related-services');
  if (pi_north_list_related_services) {
    gsap.from('#pi-north-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_north_section_youre_in_good_hands = document.getElementById('pi-north-section-youre-in-good-hands');
  if (pi_north_section_youre_in_good_hands) {
    gsap.fromTo('#pi-north-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_north_section_21 = document.getElementById('pi-north-section-21');
  if (pi_north_section_21) {
    gsap.fromTo('#pi-north-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const central_west.html = document.getElementById('central-west.html');
  if (central_west.html) {
    gsap.fromTo('#central-west.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_centralwest_form_wild_centralwest_pantanal_and_cerrado = document.getElementById('pi-centralwest-form-wild-centralwest-pantanal-and-cerrado');
  if (pi_centralwest_form_wild_centralwest_pantanal_and_cerrado) {
    gsap.from('#pi-centralwest-form-wild-centralwest-pantanal-and-cerrado input, #pi-centralwest-form-wild-centralwest-pantanal-and-cerrado textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_centralwest_list_quick_facts = document.getElementById('pi-centralwest-list-quick-facts');
  if (pi_centralwest_list_quick_facts) {
    gsap.from('#pi-centralwest-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_centralwest_list_common_challenges_applicants_face = document.getElementById('pi-centralwest-list-common-challenges-applicants-face');
  if (pi_centralwest_list_common_challenges_applicants_face) {
    gsap.from('#pi-centralwest-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_centralwest_list_how_we_solve_these_challenges = document.getElementById('pi-centralwest-list-how-we-solve-these-challenges');
  if (pi_centralwest_list_how_we_solve_these_challenges) {
    gsap.from('#pi-centralwest-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_centralwest_section_trip_overview = document.getElementById('pi-centralwest-section-trip-overview');
  if (pi_centralwest_section_trip_overview) {
    gsap.fromTo('#pi-centralwest-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_centralwest_form_who_is_this_trip_for = document.getElementById('pi-centralwest-form-who-is-this-trip-for');
  if (pi_centralwest_form_who_is_this_trip_for) {
    gsap.from('#pi-centralwest-form-who-is-this-trip-for input, #pi-centralwest-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_centralwest_list_required_documents = document.getElementById('pi-centralwest-list-required-documents');
  if (pi_centralwest_list_required_documents) {
    gsap.from('#pi-centralwest-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_centralwest_list_booking_process = document.getElementById('pi-centralwest-list-booking-process');
  if (pi_centralwest_list_booking_process) {
    gsap.from('#pi-centralwest-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_centralwest_section_timelines_deadlines = document.getElementById('pi-centralwest-section-timelines-deadlines');
  if (pi_centralwest_section_timelines_deadlines) {
    gsap.fromTo('#pi-centralwest-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_centralwest_section_fees_costs = document.getElementById('pi-centralwest-section-fees-costs');
  if (pi_centralwest_section_fees_costs) {
    gsap.fromTo('#pi-centralwest-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_centralwest_list_risks_common_mistakes = document.getElementById('pi-centralwest-list-risks-common-mistakes');
  if (pi_centralwest_list_risks_common_mistakes) {
    gsap.from('#pi-centralwest-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_centralwest_section_diy_vs_professional_assistance = document.getElementById('pi-centralwest-section-diy-vs-professional-assistance');
  if (pi_centralwest_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-centralwest-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_centralwest_section_piau_specific_context = document.getElementById('pi-centralwest-section-piau-specific-context');
  if (pi_centralwest_section_piau_specific_context) {
    gsap.fromTo('#pi-centralwest-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_centralwest_section_what_our_clients_say = document.getElementById('pi-centralwest-section-what-our-clients-say');
  if (pi_centralwest_section_what_our_clients_say) {
    gsap.fromTo('#pi-centralwest-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_centralwest_section_frequently_asked_questions = document.getElementById('pi-centralwest-section-frequently-asked-questions');
  if (pi_centralwest_section_frequently_asked_questions) {
    gsap.fromTo('#pi-centralwest-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_centralwest_section_international_support = document.getElementById('pi-centralwest-section-international-support');
  if (pi_centralwest_section_international_support) {
    gsap.fromTo('#pi-centralwest-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_centralwest_list_our_credentials = document.getElementById('pi-centralwest-list-our-credentials');
  if (pi_centralwest_list_our_credentials) {
    gsap.from('#pi-centralwest-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_centralwest_list_related_services = document.getElementById('pi-centralwest-list-related-services');
  if (pi_centralwest_list_related_services) {
    gsap.from('#pi-centralwest-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_centralwest_section_youre_in_good_hands = document.getElementById('pi-centralwest-section-youre-in-good-hands');
  if (pi_centralwest_section_youre_in_good_hands) {
    gsap.fromTo('#pi-centralwest-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_centralwest_section_21 = document.getElementById('pi-centralwest-section-21');
  if (pi_centralwest_section_21) {
    gsap.fromTo('#pi-centralwest-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_southeast_form_dynamic_southeast_cities_and_history = document.getElementById('pi-southeast-form-dynamic-southeast-cities-and-history');
  if (pi_southeast_form_dynamic_southeast_cities_and_history) {
    gsap.from('#pi-southeast-form-dynamic-southeast-cities-and-history input, #pi-southeast-form-dynamic-southeast-cities-and-history textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_southeast_list_quick_facts = document.getElementById('pi-southeast-list-quick-facts');
  if (pi_southeast_list_quick_facts) {
    gsap.from('#pi-southeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_southeast_list_common_challenges_applicants_face = document.getElementById('pi-southeast-list-common-challenges-applicants-face');
  if (pi_southeast_list_common_challenges_applicants_face) {
    gsap.from('#pi-southeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_southeast_list_how_we_solve_these_challenges = document.getElementById('pi-southeast-list-how-we-solve-these-challenges');
  if (pi_southeast_list_how_we_solve_these_challenges) {
    gsap.from('#pi-southeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_southeast_section_trip_overview = document.getElementById('pi-southeast-section-trip-overview');
  if (pi_southeast_section_trip_overview) {
    gsap.fromTo('#pi-southeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_southeast_form_who_is_this_trip_for = document.getElementById('pi-southeast-form-who-is-this-trip-for');
  if (pi_southeast_form_who_is_this_trip_for) {
    gsap.from('#pi-southeast-form-who-is-this-trip-for input, #pi-southeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_southeast_list_required_documents = document.getElementById('pi-southeast-list-required-documents');
  if (pi_southeast_list_required_documents) {
    gsap.from('#pi-southeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_southeast_list_booking_process = document.getElementById('pi-southeast-list-booking-process');
  if (pi_southeast_list_booking_process) {
    gsap.from('#pi-southeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_southeast_section_timelines_deadlines = document.getElementById('pi-southeast-section-timelines-deadlines');
  if (pi_southeast_section_timelines_deadlines) {
    gsap.fromTo('#pi-southeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_southeast_section_fees_costs = document.getElementById('pi-southeast-section-fees-costs');
  if (pi_southeast_section_fees_costs) {
    gsap.fromTo('#pi-southeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_southeast_list_risks_common_mistakes = document.getElementById('pi-southeast-list-risks-common-mistakes');
  if (pi_southeast_list_risks_common_mistakes) {
    gsap.from('#pi-southeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_southeast_section_diy_vs_professional_assistance = document.getElementById('pi-southeast-section-diy-vs-professional-assistance');
  if (pi_southeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-southeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_southeast_section_piau_specific_context = document.getElementById('pi-southeast-section-piau-specific-context');
  if (pi_southeast_section_piau_specific_context) {
    gsap.fromTo('#pi-southeast-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_southeast_section_what_our_clients_say = document.getElementById('pi-southeast-section-what-our-clients-say');
  if (pi_southeast_section_what_our_clients_say) {
    gsap.fromTo('#pi-southeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_southeast_section_frequently_asked_questions = document.getElementById('pi-southeast-section-frequently-asked-questions');
  if (pi_southeast_section_frequently_asked_questions) {
    gsap.fromTo('#pi-southeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_southeast_section_international_support = document.getElementById('pi-southeast-section-international-support');
  if (pi_southeast_section_international_support) {
    gsap.fromTo('#pi-southeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_southeast_list_our_credentials = document.getElementById('pi-southeast-list-our-credentials');
  if (pi_southeast_list_our_credentials) {
    gsap.from('#pi-southeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_southeast_list_related_services = document.getElementById('pi-southeast-list-related-services');
  if (pi_southeast_list_related_services) {
    gsap.from('#pi-southeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_southeast_section_youre_in_good_hands = document.getElementById('pi-southeast-section-youre-in-good-hands');
  if (pi_southeast_section_youre_in_good_hands) {
    gsap.fromTo('#pi-southeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_southeast_section_21 = document.getElementById('pi-southeast-section-21');
  if (pi_southeast_section_21) {
    gsap.fromTo('#pi-southeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_northeast_form_vibrant_northeast_beaches_and_culture = document.getElementById('pi-northeast-form-vibrant-northeast-beaches-and-culture');
  if (pi_northeast_form_vibrant_northeast_beaches_and_culture) {
    gsap.from('#pi-northeast-form-vibrant-northeast-beaches-and-culture input, #pi-northeast-form-vibrant-northeast-beaches-and-culture textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_northeast_list_quick_facts = document.getElementById('pi-northeast-list-quick-facts');
  if (pi_northeast_list_quick_facts) {
    gsap.from('#pi-northeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_northeast_list_common_challenges_applicants_face = document.getElementById('pi-northeast-list-common-challenges-applicants-face');
  if (pi_northeast_list_common_challenges_applicants_face) {
    gsap.from('#pi-northeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_northeast_list_how_we_solve_these_challenges = document.getElementById('pi-northeast-list-how-we-solve-these-challenges');
  if (pi_northeast_list_how_we_solve_these_challenges) {
    gsap.from('#pi-northeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_northeast_section_trip_overview = document.getElementById('pi-northeast-section-trip-overview');
  if (pi_northeast_section_trip_overview) {
    gsap.fromTo('#pi-northeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_northeast_form_who_is_this_trip_for = document.getElementById('pi-northeast-form-who-is-this-trip-for');
  if (pi_northeast_form_who_is_this_trip_for) {
    gsap.from('#pi-northeast-form-who-is-this-trip-for input, #pi-northeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_northeast_list_required_documents = document.getElementById('pi-northeast-list-required-documents');
  if (pi_northeast_list_required_documents) {
    gsap.from('#pi-northeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_northeast_list_booking_process = document.getElementById('pi-northeast-list-booking-process');
  if (pi_northeast_list_booking_process) {
    gsap.from('#pi-northeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_northeast_section_timelines_deadlines = document.getElementById('pi-northeast-section-timelines-deadlines');
  if (pi_northeast_section_timelines_deadlines) {
    gsap.fromTo('#pi-northeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_northeast_section_fees_costs = document.getElementById('pi-northeast-section-fees-costs');
  if (pi_northeast_section_fees_costs) {
    gsap.fromTo('#pi-northeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_northeast_list_risks_common_mistakes = document.getElementById('pi-northeast-list-risks-common-mistakes');
  if (pi_northeast_list_risks_common_mistakes) {
    gsap.from('#pi-northeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_northeast_section_diy_vs_professional_assistance = document.getElementById('pi-northeast-section-diy-vs-professional-assistance');
  if (pi_northeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-northeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_northeast_section_piau_specific_context = document.getElementById('pi-northeast-section-piau-specific-context');
  if (pi_northeast_section_piau_specific_context) {
    gsap.fromTo('#pi-northeast-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_northeast_section_what_our_clients_say = document.getElementById('pi-northeast-section-what-our-clients-say');
  if (pi_northeast_section_what_our_clients_say) {
    gsap.fromTo('#pi-northeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_northeast_section_frequently_asked_questions = document.getElementById('pi-northeast-section-frequently-asked-questions');
  if (pi_northeast_section_frequently_asked_questions) {
    gsap.fromTo('#pi-northeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_northeast_section_international_support = document.getElementById('pi-northeast-section-international-support');
  if (pi_northeast_section_international_support) {
    gsap.fromTo('#pi-northeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_northeast_list_our_credentials = document.getElementById('pi-northeast-list-our-credentials');
  if (pi_northeast_list_our_credentials) {
    gsap.from('#pi-northeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_northeast_list_related_services = document.getElementById('pi-northeast-list-related-services');
  if (pi_northeast_list_related_services) {
    gsap.from('#pi-northeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_northeast_section_youre_in_good_hands = document.getElementById('pi-northeast-section-youre-in-good-hands');
  if (pi_northeast_section_youre_in_good_hands) {
    gsap.fromTo('#pi-northeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_northeast_section_21 = document.getElementById('pi-northeast-section-21');
  if (pi_northeast_section_21) {
    gsap.fromTo('#pi-northeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_south_form_charming_south_wine_and_gauchos = document.getElementById('pi-south-form-charming-south-wine-and-gauchos');
  if (pi_south_form_charming_south_wine_and_gauchos) {
    gsap.from('#pi-south-form-charming-south-wine-and-gauchos input, #pi-south-form-charming-south-wine-and-gauchos textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_south_list_quick_facts = document.getElementById('pi-south-list-quick-facts');
  if (pi_south_list_quick_facts) {
    gsap.from('#pi-south-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_south_list_common_challenges_applicants_face = document.getElementById('pi-south-list-common-challenges-applicants-face');
  if (pi_south_list_common_challenges_applicants_face) {
    gsap.from('#pi-south-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_south_list_how_we_solve_these_challenges = document.getElementById('pi-south-list-how-we-solve-these-challenges');
  if (pi_south_list_how_we_solve_these_challenges) {
    gsap.from('#pi-south-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_south_section_trip_overview = document.getElementById('pi-south-section-trip-overview');
  if (pi_south_section_trip_overview) {
    gsap.fromTo('#pi-south-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_south_form_who_is_this_trip_for = document.getElementById('pi-south-form-who-is-this-trip-for');
  if (pi_south_form_who_is_this_trip_for) {
    gsap.from('#pi-south-form-who-is-this-trip-for input, #pi-south-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_south_list_required_documents = document.getElementById('pi-south-list-required-documents');
  if (pi_south_list_required_documents) {
    gsap.from('#pi-south-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_south_list_booking_process = document.getElementById('pi-south-list-booking-process');
  if (pi_south_list_booking_process) {
    gsap.from('#pi-south-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_south_section_timelines_deadlines = document.getElementById('pi-south-section-timelines-deadlines');
  if (pi_south_section_timelines_deadlines) {
    gsap.fromTo('#pi-south-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_south_section_fees_costs = document.getElementById('pi-south-section-fees-costs');
  if (pi_south_section_fees_costs) {
    gsap.fromTo('#pi-south-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_south_list_risks_common_mistakes = document.getElementById('pi-south-list-risks-common-mistakes');
  if (pi_south_list_risks_common_mistakes) {
    gsap.from('#pi-south-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_south_section_diy_vs_professional_assistance = document.getElementById('pi-south-section-diy-vs-professional-assistance');
  if (pi_south_section_diy_vs_professional_assistance) {
    gsap.fromTo('#pi-south-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_south_section_piau_specific_context = document.getElementById('pi-south-section-piau-specific-context');
  if (pi_south_section_piau_specific_context) {
    gsap.fromTo('#pi-south-section-piau-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_south_section_what_our_clients_say = document.getElementById('pi-south-section-what-our-clients-say');
  if (pi_south_section_what_our_clients_say) {
    gsap.fromTo('#pi-south-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_south_section_frequently_asked_questions = document.getElementById('pi-south-section-frequently-asked-questions');
  if (pi_south_section_frequently_asked_questions) {
    gsap.fromTo('#pi-south-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_south_section_international_support = document.getElementById('pi-south-section-international-support');
  if (pi_south_section_international_support) {
    gsap.fromTo('#pi-south-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_south_list_our_credentials = document.getElementById('pi-south-list-our-credentials');
  if (pi_south_list_our_credentials) {
    gsap.from('#pi-south-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_south_list_related_services = document.getElementById('pi-south-list-related-services');
  if (pi_south_list_related_services) {
    gsap.from('#pi-south-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_south_section_youre_in_good_hands = document.getElementById('pi-south-section-youre-in-good-hands');
  if (pi_south_section_youre_in_good_hands) {
    gsap.fromTo('#pi-south-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

  const pi_south_section_21 = document.getElementById('pi-south-section-21');
  if (pi_south_section_21) {
    gsap.fromTo('#pi-south-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInQuad'});
  }

    })
    .catch(error => console.error('Error loading js_data.json:', error));
});
