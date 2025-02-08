import { Locutor } from "./locutor.model";

export interface Podcast {
    id: string;
    temaGeneral: string;  
    temaDia: string;      
    fechaTema: string;    
    audioUrl: string;     
    locutorPrincipal: Locutor;
    locutoresInvitados: Locutor[];
    reproducciones: number;
  }