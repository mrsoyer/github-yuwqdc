export interface NavigationItem {
  title: string;
  href: string;
  icon?: string;
}

export const mainNavigation: NavigationItem[] = [
  {
    title: "Accueil",
    href: "/",
  },
  {
    title: "Biens",
    href: "/properties",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Mon Compte",
    href: "/account",
  }
];

export const footerNavigation = {
  main: [
    { title: "Accueil", href: "/" },
    { title: "Biens", href: "/properties" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" }
  ],
  services: [
    { title: "Acheter", href: "/buy" },
    { title: "Vendre", href: "/sell" },
    { title: "Louer", href: "/rent" },
    { title: "Estimer", href: "/estimate" }
  ],
  contact: {
    phone: "+33 1 23 45 67 89",
    email: "contact@weinvest.fr",
    address: "123 Avenue des Champs-Élysées",
    city: "75008 Paris, France"
  }
};