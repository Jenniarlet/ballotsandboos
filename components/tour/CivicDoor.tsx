'use client';
import { Landmark, Building2, House, ScrollText, ArrowRight, Check } from 'lucide-react';
import type { CSSProperties } from 'react';
import type { DoorDefinition } from '@/lib/ballot-tour';
const symbols={washington:Landmark,hawaii:Building2,community:House,questions:ScrollText};
export function CivicDoor({door,visited,opening,disabled,onEnter}:{door:DoorDefinition;visited:boolean;opening:boolean;disabled:boolean;onEnter:()=>void}){
 const Icon=symbols[door.id];
 return <button type="button" className={`civic-door ${opening?'door-opening':''}`} style={{'--door-color':door.color} as CSSProperties} onClick={onEnter} disabled={disabled} aria-label={`Enter ${door.title}${visited?', visited':''}`}>
  <span className="door-light" aria-hidden="true"/>
  <span className="door-leaf"><span className="door-plaque"><Icon size={30} strokeWidth={1.3}/><strong>{door.title}</strong><span>{door.subtitle}</span></span><span className="door-panels" aria-hidden="true"/><span className="door-handle" aria-hidden="true"/><span className="door-enter">ENTER <ArrowRight size={17}/></span></span>
  <span className={`door-status ${visited?'is-visited':''}`}>{visited?<><Check size={14}/> VISITED</>:<>OPEN TO ALL</>}</span>
 </button>
}
