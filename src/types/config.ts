export type NavBarLink = {
  title: string;
  url: string;
  external?: boolean;
};

export type SocialLink = {
  title: string;
  url: string;
  icon: string;
  external?: boolean;
};

export type Identity = {
  name: string;
  logo: string;
  email: string;
};

export type SEOInfo = {
  title: string;
  description: string;
  image: string;
};

export type HomePageContent = {
  seo: SEOInfo;
  role: string;
  description: string;
  socialLinks: SocialLink[];
  links: {
    title: string;
    url: string;
    external?: boolean;
  }[];
  featuredModules: FeaturedModule[];
};

export type ResumeItem = {
  title: string;
  company: {
    name: string;
    image: string;
    url: string;
  };
  date: string;
};

export type AboutPageContent = {
  seo: SEOInfo;
  subtitle: string;
  about: {
    description: string;
    image: {
      url: string;
      alt: string;
    };
    resume: {
      url: string;
      label: string;
    };
    coverLetter: {
      url: string;
      label: string;
    };
  };
  work: {
    description: string;
    items: {
      title: string;
      company: {
        name: string;
        url: string;
      };
      date: string;
      description: string;
    }[];
  };
  connect: {
    description: string;
    links: SocialLink[];
  };
};

export type ProjectResource = {
  title: string;
  url: string;
  icon: string;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  year: string;
  url: string;
  resources?: ProjectResource[];
};

export type ProjectPageContent = {
  seo: SEOInfo;
  subtitle: string;
  projects: Project[];
};

export type Certificate = {
  title: string;
  issuer: string;
  description: string;
  date: string;
  url?: string;
};

export type CertificatesPageContent = {
  seo: SEOInfo;
  subtitle: string;
  certificates: {
    title: string;
    issuer: string;
    date: string;
    description: string;
    image: string;
    url: string;
  }[];
};

export type ProjectLink = {
  title: string;
  url: string;
  icon: string;
};

export type FeaturedModule = {
  title: string;
  description: string;
  links?: ProjectLink[];
  files?: ProjectLink[];
};
