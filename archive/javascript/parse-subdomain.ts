// npm run ts -- ./archive/javascript/parse-subdomain.ts

const valid_subdomains = ["location", "school"];
const dev_links = [
  "http://school.localhost:3000/clubs",
  "http://location.localhost:3000/clubs",
  "http://other.localhost:3000/clubs",
  "http://localhost:3000",
  "http://school.sub.localhost:3000/dashboard",
];
const prod_links = [
  "http://school.example.com/clubs",
  "http://location.example.com/clubs",
  "http://other.example.com/clubs",
  "http://example.com",
  "http://school.sub.example.com/dashboard",
];

const parse_subdomain = (
  link: string,
  prod: boolean
): { valid: false; reason: string } | { valid: true; subdomain: string } => {
  const url = new URL(link);
  const dotOccurrences = url.hostname.split(".").length - 1;
  if (prod && dotOccurrences !== 2) return { valid: false, reason: "too many or too few subdomains" };
  if (!prod && dotOccurrences !== 1) return { valid: false, reason: "too many or too few subdomains" };
  const subdomain = url.hostname.split(".")[0];
  if (!valid_subdomains.includes(subdomain)) return { valid: false, reason: "invalid subdomain" };

  return { valid: true, subdomain };
};

const test = (link: string, prod: boolean) => {
  const result = parse_subdomain(link, prod);
  if (!result.valid) console.log("Invalid link:", link, "because", result.reason);
  else console.log("Valid link:", link, "with subdomain:", result.subdomain);
};

for (let link of dev_links) test(link, false);
for (let link of prod_links) test(link, true);
