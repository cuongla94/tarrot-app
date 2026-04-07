export type Service = {
  name: string;
  short_description: string;
  description: string;
  image: string;
};

export type ServicesData = {
  services: Service[];
};

export type FloatingActionItem = {
  type: "zalo" | "messenger" | "booking";
  label: string;
  href?: string;
  target?: string;
  enabled: boolean;
};

export type MainData = {
  brand: {
    title: string;
    subtitle: string;
    tagline: string;
  };
  hero: {
    title: string;
    description: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
  };
  floating_actions: {
    enabled: boolean;
    position?: string;
    items: FloatingActionItem[];
  };
  services?: {
    title?: string;
    description?: string;
  };
  about?: {
    title?: string;
    description?: string;
    image?: string;
  };
  booking?: {
    title?: string;
    description?: string;
    buttonLabel?: string;
    successMessage?: string;
  };
  contact?: {
    title?: string;
    email?: string;
    instagram?: string;
    zalo?: string;
    phone?: string;
  };
  faq?: {
    title?: string;
  };
  footer?: {
    copyright?: string;
  };
  ui?: {
    showAbout?: boolean;
    showTestimonials?: boolean;
    showFaq?: boolean;
    showContact?: boolean;
    showSecondaryCta?: boolean;
  };
  layout?: {
    sections?: string[];
  };
};
