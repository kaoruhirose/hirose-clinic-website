const variants = {
  a: {name: '凪', description: '写真のなかに、静かに佇む。'},
  b: {name: '余白', description: '写真集のように、風景と文字を置く。'},
  c: {name: '山の端', description: '深い緑に、夕景の光を浮かべる。'},
};
const preview = document.getElementById('preview');
const stage = document.getElementById('stage');
function selectConcept(key) {
  if (!Object.hasOwn(variants, key)) key = 'a';
  const variant = variants[key];
  document.querySelectorAll('[data-concept]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.concept === key));
  });
  preview.src = `/${key}.html`;
  preview.title = `${key.toUpperCase()} ${variant.name} のデザイン試作`;
  document.getElementById('description').textContent = `${key.toUpperCase()}「${variant.name}」— ${variant.description}`;
  document.getElementById('full-view').href = `/${key}.html`;
}
document.querySelectorAll('[data-concept]').forEach(button => {
  button.addEventListener('click', () => {
    const key = button.dataset.concept;
    history.replaceState(null, '', `?concept=${key}`);
    selectConcept(key);
  });
});
document.querySelectorAll('[data-device]').forEach(button => {
  button.addEventListener('click', () => {
    const mobile = button.dataset.device === 'mobile';
    stage.classList.toggle('mobile', mobile);
    document.querySelectorAll('[data-device]').forEach(item => {
      item.setAttribute('aria-pressed', String(item === button));
    });
  });
});
const initialConcept = new URLSearchParams(location.search).get('concept');
if (initialConcept) selectConcept(initialConcept);
