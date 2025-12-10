import Link from "next/link";

type FooterLinksProps = {
  title: string;
  links: string[];
};

function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">{title}</h2>
      <div className="flex flex-col gap-3">
        {links.map((link, idx) => (
          <Link
            href="#"
            className="text-sm hover:text-secondary hover:ps-2 transition-all duration-300"
            key={idx}
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FooterLinks;
