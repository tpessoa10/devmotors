// Interface do banner
interface Banner {
  url: string;
  imgix_url: string;
}

// Interface do botão
interface Button {
  title: string;
  url: string;
}

// Interface da descrição dentro de metadata
interface Description {
  title: string;
  text: string;
  banner: Banner | null;
  button_active: boolean;
  button_title: string | null;
  button_url: string | null;
}

// Interface do metadata
interface Metadata {
  banner: Banner;
  button: Button;
  description: Description;
}

// Interface de cada objeto retornado
export interface CosmicObject {
  slug: string;
  title: string;
  type: string;
  metadata: Metadata;
  id:string
}

// Interface do retorno da API
export interface CosmicResponse {
  objects: CosmicObject[];
  total: number;
}