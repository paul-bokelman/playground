// npm run ts -- ./archive/javascript/add-url-subdomain.ts

const base_dev = "http://localhost:8000/api";
const base_prod = "https://example.com/api";

const append_subdomain = (subdomain: string, prod: boolean): string => {
  const base = new URL(prod ? base_prod : base_dev);
  return `${base.protocol}//${subdomain}.${base.host}`;
};

for (let subdomain of ["school", "location"]) {
  console.log(append_subdomain(subdomain, false));
  console.log(append_subdomain(subdomain, true));
}
