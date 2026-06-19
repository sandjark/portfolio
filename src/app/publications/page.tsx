import { getPublicationSections } from "@/lib/content";
import PublicationsClient from "./publications-client";

const publicationSections = getPublicationSections();

export default function PublicationsPage() {
  return <PublicationsClient publicationSections={publicationSections} />;
}
