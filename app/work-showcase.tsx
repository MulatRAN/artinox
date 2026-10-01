"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import { galleryImages } from "./gallery-images.generated";
import balconyOne from "../images/balcon/Art1.png";
import balconyTwo from "../images/balcon/ART2.png";
import balconyThree from "../images/balcon/ART3.png";
import balconyFour from "../images/balcon/ART’.png";
import balconyBeforeAfter from "../images/balcon/Grey and Beige Minimalist Collage Before & After Fashion Style YouTube Thumbnail.png";
import furnitureOne from "../images/meuble/583515813_870314725558044_5874196165783481756_n.jpg";
import furnitureTwo from "../images/meuble/666612053_981853587737490_7600138322855568167_n.jpg";
import stairRail from "../images/rampe/625098463_927131733209676_5478803428873201654_n.jpg";
import carBumper from "../images/voiture/Beige Minimalist Mood Photo Collage1.png";

type ProjectImage = {
  category: string;
  title: string;
  alt: string;
  image: StaticImageData;
};

const additionalProjects = (
  category: string,
  images: StaticImageData[],
  existingProjects: ProjectImage[],
): ProjectImage[] => images
  .filter((image) => !existingProjects.some((project) => project.image.src === image.src))
  .map((image, index) => ({
    category,
    title: `Réalisation ${category.toLowerCase()} ${String(index + 1).padStart(2, "0")}`,
    alt: `Ouvrage en inox de la catégorie ${category.toLowerCase()}`,
    image,
  }));

const balconyTerrace: ProjectImage = {
  category: "Balcons",
  title: "Garde-corps sur terrasse",
  alt: "Garde-corps en inox sur une terrasse avec vue dégagée",
  image: balconyOne,
};

const balconyView: ProjectImage = {
  category: "Balcons",
  title: "Balcon avec vue sur la ville",
  alt: "Balcon équipé d’un garde-corps en inox",
  image: balconyTwo,
};

const balconyFacade: ProjectImage = {
  category: "Balcons",
  title: "Garde-corps de façade",
  alt: "Balcons et garde-corps en inox sur une maison",
  image: balconyThree,
};

const balconyRail: ProjectImage = {
  category: "Balcons",
  title: "Rampe de terrasse",
  alt: "Rampe en inox installée le long d’une terrasse",
  image: balconyFour,
};

const balconyComparison: ProjectImage = {
  category: "Balcons",
  title: "Projet avant et après",
  alt: "Comparaison avant et après d’un garde-corps de balcon",
  image: balconyBeforeAfter,
};

const furnitureStorage: ProjectImage = {
  category: "Meubles",
  title: "Rangement en inox",
  alt: "Meuble de rangement en inox avec portes et étagères",
  image: furnitureOne,
};

const furnitureTable: ProjectImage = {
  category: "Meubles",
  title: "Table en inox",
  alt: "Table conçue avec une structure en inox",
  image: furnitureTwo,
};

const staircase: ProjectImage = {
  category: "Rampes",
  title: "Rampe d’escalier",
  alt: "Rampe en inox installée le long d’un escalier intérieur",
  image: stairRail,
};

const carBumperProject: ProjectImage = {
  category: "Automobile",
  title: "Pare-chocs en inox",
  alt: "Pare-chocs en inox présenté avec un véhicule",
  image: carBumper,
};

const services = [
  {
    title: "Pare-chocs de voiture",
    description: "Conception de pare-chocs en inox pour vos projets automobiles.",
    images: [carBumperProject, ...additionalProjects("Automobile", galleryImages.voiture, [carBumperProject])],
  },
  {
    title: "Rampes d’escalier",
    description: "Des rampes en inox pensées pour accompagner vos escaliers et vos espaces.",
    images: [staircase, ...additionalProjects("Rampes", galleryImages.rampe, [staircase])],
  },
  {
    title: "Balcons",
    description: "Des garde-corps et rampes en inox conçus pour vos balcons et terrasses.",
    images: [
      balconyTerrace,
      balconyView,
      balconyFacade,
      balconyRail,
      balconyComparison,
      ...additionalProjects("Balcons", galleryImages.balcon, [
        balconyTerrace,
        balconyView,
        balconyFacade,
        balconyRail,
        balconyComparison,
      ]),
    ],
  },
  {
    title: "Meubles en inox",
    description: "Des meubles en inox conçus selon vos besoins et votre espace.",
    images: [
      furnitureStorage,
      furnitureTable,
      ...additionalProjects("Meubles", galleryImages.meuble, [furnitureStorage, furnitureTable]),
    ],
  },
  {
    title: "Ouvrages sur mesure",
    description: "Une autre idée en inox ? Découvrez quelques exemples et parlons de votre projet.",
    images: [balconyComparison, furnitureTable, carBumperProject],
  },
];

const allGalleryProjects = [
  { category: "Balcons", images: galleryImages.balcon },
  { category: "Meubles", images: galleryImages.meuble },
  { category: "Rampes", images: galleryImages.rampe },
  { category: "Automobile", images: galleryImages.voiture },
].flatMap(({ category, images }) => images.map((image, index) => ({
  category,
  title: `Réalisation ${category.toLowerCase()} ${String(index + 1).padStart(2, "0")}`,
  alt: `Ouvrage en inox de la catégorie ${category.toLowerCase()}`,
  image,
} satisfies ProjectImage)));

const selectRandomProjects = () => {
  const shuffledProjects = [...allGalleryProjects];

  for (let index = shuffledProjects.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffledProjects[index], shuffledProjects[randomIndex]] = [
      shuffledProjects[randomIndex],
      shuffledProjects[index],
    ];
  }

  return shuffledProjects.slice(0, 6);
};

type ImageTriggerProps = {
  project: ProjectImage;
  className: string;
  sizes: string;
  blurredBackdrop?: boolean;
  tabIndex?: number;
  onOpen: (project: ProjectImage, opener: HTMLButtonElement) => void;
};

function ImageTrigger({ project, className, sizes, blurredBackdrop = false, tabIndex, onOpen }: ImageTriggerProps) {
  return (
    <button
      type="button"
      className={className}
      aria-label={`Agrandir : ${project.title}`}
      tabIndex={tabIndex}
      onClick={(event) => onOpen(project, event.currentTarget)}
    >
      {blurredBackdrop && (
        <Image
          src={project.image}
          alt=""
          aria-hidden="true"
          fill
          sizes={sizes}
          className="featured-image-backdrop"
        />
      )}
      <Image
        src={project.image}
        alt={project.alt}
        fill
        sizes={sizes}
        className={blurredBackdrop ? "showcase-image featured-image-foreground" : "showcase-image"}
      />
      <span className="image-zoom-hint" aria-hidden="true">↗</span>
    </button>
  );
}

export default function WorkShowcase() {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [activeProject, setActiveProject] = useState(0);
  const [featuredProjects, setFeaturedProjects] = useState(() => allGalleryProjects.slice(0, 6));
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [lightbox, setLightbox] = useState<ProjectImage | null>(null);
  const lightboxOpener = useRef<HTMLButtonElement | null>(null);
  const serviceOpener = useRef<HTMLButtonElement | null>(null);
  const wasLightboxOpen = useRef(false);
  const currentService = selectedService === null ? null : services[selectedService];

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setFeaturedProjects(selectRandomProjects());
    }, 0);

    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => {
      setPrefersReducedMotion(motionPreference.matches);
      setIsAutoPlaying(!motionPreference.matches);
    };

    updateMotionPreference();
    motionPreference.addEventListener("change", updateMotionPreference);
    return () => motionPreference.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || lightbox || selectedService !== null) return;

    const timeout = window.setTimeout(() => {
      setActiveProject((current) => (current + 1) % featuredProjects.length);
    }, 4500 + Math.random() * 3500);

    return () => window.clearTimeout(timeout);
  }, [activeProject, featuredProjects.length, isAutoPlaying, lightbox, selectedService]);

  useEffect(() => {
    const isDrawerOpen = selectedService !== null;
    if (!lightbox && wasLightboxOpen.current) {
      lightboxOpener.current?.focus();
      wasLightboxOpen.current = false;
    }

    if (!lightbox && !isDrawerOpen) {
      serviceOpener.current?.focus();
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (lightbox) {
          setLightbox(null);
        } else {
          setSelectedService(null);
        }
      }
    };

    if (lightbox) wasLightboxOpen.current = true;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightbox, selectedService]);

  const openLightbox = (project: ProjectImage, opener: HTMLButtonElement) => {
    lightboxOpener.current = opener;
    setLightbox(project);
  };

  const closeLightbox = () => setLightbox(null);
  const closeServiceDrawer = () => setSelectedService(null);
  const showProject = (index: number) => {
    setActiveProject((index + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <>
      <section className="services section-wrap" id="savoir-faire">
        <div className="section-heading">
          <p className="eyebrow"><span /> Nos savoir-faire</p>
          <h2>Des idées concrètes.<br /><span>Un travail en inox.</span></h2>
          <p className="section-intro">
            Choisissez un métier pour découvrir les réalisations correspondantes.
          </p>
        </div>
        <div className="service-explorer">
          <nav className="service-sidebar" aria-label="Nos savoir-faire">
            {services.map((service, index) => (
              <button
                type="button"
                className="service-tab"
                key={service.title}
                aria-haspopup="dialog"
                aria-expanded={selectedService === index}
                aria-controls="service-drawer"
                onClick={(event) => {
                  serviceOpener.current = event.currentTarget;
                  setSelectedService(index);
                }}
              >
                <span className="service-tab-number">0{index + 1}</span>
                <span>{service.title}</span>
                <span className="service-tab-arrow" aria-hidden="true">↗</span>
              </button>
            ))}
          </nav>
          <div className="service-invitation">
            <span className="service-invitation-mark" aria-hidden="true">↖</span>
            <p>Sélectionnez un savoir-faire pour découvrir ses images et sa description.</p>
          </div>
        </div>
      </section>

      <section className="projects" id="realisations">
        <div className="projects-inner">
          <div className="projects-heading">
            <div>
              <p className="eyebrow eyebrow-light"><span /> Réalisations</p>
              <h2>Nos réalisations.<br /><span>Le savoir-faire en images.</span></h2>
            </div>
            <p>
              Balcons, meubles, rampes et pare-chocs : faites défiler les réalisations
              Artinox et ouvrez une image pour la voir en grand.
            </p>
          </div>

          <div className="featured-carousel" aria-label="Carrousel des réalisations">
            <div className="featured-viewport">
              <div className="featured-track" style={{ transform: `translateX(-${activeProject * 100}%)` }}>
                {featuredProjects.map((project, index) => (
                  <article
                    className="featured-slide"
                    key={project.title}
                    aria-hidden={activeProject !== index}
                  >
                    <div className="featured-image-frame">
                      <ImageTrigger
                        project={project}
                        className="featured-image-trigger"
                        sizes="(max-width: 700px) 100vw, 70vw"
                        blurredBackdrop
                        tabIndex={activeProject === index ? 0 : -1}
                        onOpen={openLightbox}
                      />
                    </div>
                    <div className="featured-caption" aria-live={isAutoPlaying ? "off" : "polite"}>
                      <span className="featured-index">0{index + 1} <i>/ {String(featuredProjects.length).padStart(2, "0")}</i></span>
                      <p className="featured-category">{project.category}</p>
                      <h3>{project.title}</h3>
                      <span className="featured-hint">Sélectionnez l’image pour l’agrandir</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="carousel-controls">
              <span className="carousel-count">0{activeProject + 1} <i>/ {String(featuredProjects.length).padStart(2, "0")}</i></span>
              <div className="carousel-dots" aria-label="Choisir une réalisation">
                {featuredProjects.map((project, index) => (
                  <button
                    type="button"
                    key={project.title}
                    aria-label={`Afficher ${project.title}`}
                    aria-current={activeProject === index ? "step" : undefined}
                    onClick={() => showProject(index)}
                  />
                ))}
              </div>
              <div className="carousel-arrows">
                <button
                  type="button"
                  aria-label={isAutoPlaying ? "Mettre le carrousel en pause" : "Reprendre le carrousel"}
                  aria-pressed={isAutoPlaying}
                  title={isAutoPlaying ? "Mettre en pause" : "Reprendre"}
                  disabled={prefersReducedMotion}
                  onClick={() => setIsAutoPlaying((playing) => !playing)}
                >
                  {isAutoPlaying ? "Ⅱ" : "▶"}
                </button>
                <button type="button" aria-label="Réalisation précédente" onClick={() => showProject(activeProject - 1)}>
                  ←
                </button>
                <button type="button" aria-label="Réalisation suivante" onClick={() => showProject(activeProject + 1)}>
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {currentService && (
        <div className="service-drawer-backdrop" onClick={closeServiceDrawer}>
          <aside
            className="service-drawer"
            id="service-drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-drawer-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="service-drawer-header">
              <div>
                <p className="service-detail-kicker">Savoir-faire · 0{selectedService! + 1}</p>
                <h2 id="service-drawer-title">{currentService.title}</h2>
              </div>
              <button type="button" className="service-drawer-close" onClick={closeServiceDrawer} autoFocus>
                Fermer <span aria-hidden="true">×</span>
              </button>
            </div>
            <p className="service-drawer-description">{currentService.description}</p>
            <div className="service-images">
              {currentService.images.map((project) => (
                <div className="service-image-frame" key={project.title}>
                  <ImageTrigger
                    project={project}
                    className="service-image-trigger"
                    sizes="(max-width: 640px) 100vw, 520px"
                    onOpen={openLightbox}
                  />
                  <span className="service-image-title">{project.title}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      )}

      {lightbox && (
        <div className="lightbox-backdrop" onClick={closeLightbox}>
          <div
            className="lightbox-dialog"
            role="dialog"
            aria-modal="true"
            aria-label={`Image agrandie : ${lightbox.title}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className="lightbox-close" onClick={closeLightbox} autoFocus>
              Fermer <span aria-hidden="true">×</span>
            </button>
            <div className="lightbox-image-frame">
              <Image src={lightbox.image} alt={lightbox.alt} fill sizes="100vw" className="lightbox-image" />
            </div>
            <div className="lightbox-caption">
              <span>{lightbox.category}</span>
              <h2>{lightbox.title}</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
}