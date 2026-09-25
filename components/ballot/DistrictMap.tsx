'use client';
import { OAHU_PATH } from '@/lib/oahu';
import { DISTRICT_LAYERS } from '@/lib/civic';
export function DistrictMap({selected,layer}:{selected:boolean;layer:number}){
 const color=DISTRICT_LAYERS[layer].color;
 return <div className="map-frame"><div className="map-caption"><strong>OʻAHU</strong><span>ILLUSTRATIVE MAP</span></div><svg viewBox="0 0 400 340" role="img" aria-label={`Oahu geographic outline with invented ${DISTRICT_LAYERS[layer].name} demo overlays. Not real district boundaries.`}>
 <defs><clipPath id="island"><path d={OAHU_PATH}/></clipPath><pattern id="sea" width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r=".7" fill="#6b7f79" opacity=".35"/></pattern></defs>
 <rect width="400" height="340" fill="#d5dfcf"/><rect width="400" height="340" fill="url(#sea)"/>
 <g clipPath="url(#island)"><rect width="400" height="340" fill="#ead7aa"/><path d={`M0 0 H400 V${100+layer*25} L${130+layer*25} 220 L0 150Z`} fill="#a3aa73"/><path d={`M0 180 L${160+layer*20} 110 L400 250 V340 H0Z`} fill="#c88049" fillOpacity=".65" stroke="#f5edda" strokeWidth="3"/><path d={`M${190-layer*20} 175 L400 140 V340 H${140+layer*15}Z`} fill={selected?color:'#769995'} fillOpacity={selected?'.95':'.5'} stroke={selected?'#221e19':'#f5edda'} strokeWidth={selected?'4':'3'}/></g>
 <path d={OAHU_PATH} fill="none" stroke="#3f4e42" strokeWidth="2"/><text x="172" y="115" fontSize="17" fontWeight="bold" fill="#30382b" transform="rotate(-25 172 115)">OʻAHU</text><text x="275" y="300" fontSize="12" fill="#283e3c">PACIFIC OCEAN</text><path d="M365 30v25m-5-18 5-8 5 8" stroke="#283e3c" fill="none"/><text x="360" y="22" fontSize="12">N</text>
 {selected&&<g><circle cx="266" cy="252" r="8" fill="#f9efd8" stroke="#231e19" strokeWidth="3"/><text x="216" y="280" fontSize="13" fontWeight="bold">DEMO AREA</text></g>}
 </svg><div className="map-legend"><span style={{background:color}}/>{selected?'Highlighted demo region':'Placeholder regions'} · boundaries are not official</div></div>
}
