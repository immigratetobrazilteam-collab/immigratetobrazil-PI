/** PI JS - Teresina - Warm-historic with rustic tan and brown */
const STATE_CONFIG = {
  stateCode: 'pi',
  capital: 'Teresina',
  formspreeUrl: 'https://formspree.io/f/xpiqbddb',
  colors: { primary: '#d2691e', secondary: '#cd853f', accent: '#f4a460' },
  animations: {"enabled": true, "header": {"type": "deltaSlide", "duration": "0.8s", "easing": "ease-in-out", "delay": "0s"}, "sections": {"type": "riverReveal", "duration": "1.1s", "easing": "ease-out", "stagger": "0.2s"}, "hero": {"type": "deltaParallax", "speed": 0.4, "direction": "multi"}, "cards": {"type": "waterFloat", "calm": true, "ripple": true}, "images": {"type": "coastalReveal", "horizon": true, "duration": "1.2s"}},
  interactions: {"hover": "river-lift", "scroll": "delta-flow", "transitions": "water-ease", "click": "wave-ripple"},
  premiumEffects: ["delta-gradient", "water-shimmer", "coastal-breeze", "river-reflections"]
};

const SECTIONS = ["pi-index-section--map", "pi-index-section-frequently-asked-questions-about-living-in-", "pi-index-contact"];

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        await fetch(STATE_CONFIG.formspreeUrl, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
        alert('Message sent!');
        form.reset();
      } catch(err) { alert('Error'); }
    });
  });
});
