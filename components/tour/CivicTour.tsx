'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ExternalLink, MapPin, Mail, ScrollText } from 'lucide-react';
import { DOORS, OFFICES, QUESTIONS, TOUR_SOURCES, type BallotDoor, type DistrictContext } from '@/lib/ballot-tour';
import { OFFICIAL_LINKS } from '@/lib/civic';
import { CapitolHallway } from './CapitolHallway';
import { OfficeCard } from './OfficeCard';
import { QuestionCard } from './QuestionCard';
import { useReducedMotion } from './useReducedMotion';
export function CivicTour({context,visited,onVisited,onBackToMap}:{context:DistrictContext;visited:BallotDoor[];onVisited:(door:BallotDoor)=>void;onBackToMap:()=>void}){
 const [active,setActive]=useState<BallotDoor|null>(null);const [opening,setOpening]=useState<BallotDoor|null>(null);const reduced=useReducedMotion();const title=useRef<HTMLHeadingElement>(null);const lastDoor=useRef<BallotDoor|null>(null);const root=useRef<HTMLElement>(null);
 useEffect(()=>{window.scrollTo({top:0,behavior:'instant'});if(active===null&&lastDoor.current){root.current?.querySelector<HTMLButtonElement>(`button[aria-label^="Enter ${DOORS.find(d=>d.id===lastDoor.current)?.title}"]`)?.focus({preventScroll:true})}else title.current?.focus({preventScroll:true});},[active]);
 useEffect(()=>{if(!opening)return;const timeout=window.setTimeout(()=>{setActive(opening);onVisited(opening);lastDoor.current=opening;setOpening(null)},reduced?0:650);return()=>window.clearTimeout(timeout)},[opening,reduced,onVisited]);
 function enter(door:BallotDoor){if(!opening)setOpening(door)}
 const door=DOORS.find(d=>d.id===active);
 return <section ref={root} className={`poster tour-poster ${active?'tour-room':'tour-hallway'} ${opening?'entering-door':''}`}>
  <div className="lesson-top"><button className="back" onClick={active?()=>setActive(null):onBackToMap}><ArrowLeft size={18}/>{active?'HALLWAY':'MY DISTRICTS'}</button><span className="demo-tag">CIVIC TOUR · DEMO</span></div>
  {!door?<><div className="chapter">THE NEXT CHAPTER</div><h2 ref={title} tabIndex={-1} className="tour-heading">WELCOME TO<br/><em>YOUR BALLOT</em></h2><p className="tour-intro">Every door leads to a different layer of government.</p><p className="hallway-context">Your address determines which versions of these races appear on your ballot.</p><CapitolHallway visited={visited} opening={opening} onEnter={enter}/><p className="tour-disclaimer">Explore in any order. All candidates, questions, and district labels here are fictional examples.</p><div className="context-strip"><MapPin size={17}/><span>YOUR DEMO DISTRICTS</span><b>{Object.values(context.districts).join(' · ')}</b></div><a className="tour-registration" href={OFFICIAL_LINKS.registration} target="_blank" rel="noopener noreferrer"><Mail size={18}/> REGISTER / UPDATE REGISTRATION <ExternalLink size={16}/></a></>:
  <div className="room-content" key={active}><div className="chapter">BEHIND THE DOOR · {DOORS.indexOf(door)+1} OF 4</div><h2 ref={title} tabIndex={-1} className="tour-heading">{door.title}</h2><p className="tour-intro">{door.intro}</p><p className="room-disclaimer">Illustrative ballot content · fictional candidates and questions</p>
   {active==='community'&&<blockquote className="feature-statement">LOCAL ISN’T<br/><em>SMALL.</em><p>Local government affects everyday life.</p></blockquote>}
   {active==='questions'?<><blockquote className="feature-statement question-feature">YOU GET TO VOTE<br/>DIRECTLY ON<br/><em>THE RULES.</em></blockquote><p className="question-intro">These aren’t races between people. Ballot questions ask voters whether certain changes should be approved or rejected.</p><div className="question-categories"><div><ScrollText size={24}/><h3>STATE CONSTITUTION</h3><p>Possible changes to Hawaiʻi’s state constitution.</p></div><div><ScrollText size={24}/><h3>COUNTY CHARTER</h3><p>Possible changes to the rules governing the City and County of Honolulu.</p></div></div><p className="aside">No campaign portrait required.</p><div className="question-stack">{QUESTIONS.map(question=><QuestionCard key={question.id} question={question}/>)}</div></>:
   <>{door.officeIds.map(id=>{const office=OFFICES.find(o=>o.id===id)!;return <OfficeCard key={id} office={office} context={context}/>})}{active==='washington'&&<aside className="cycle-note"><strong>NO U.S. SENATE RACE THIS CYCLE</strong><p>Hawaiʻi’s regularly scheduled 2026 elections.</p><a href={TOUR_SOURCES.electionSchedule} target="_blank" rel="noopener noreferrer">Official contest schedule <ExternalLink size={13}/></a></aside>}{active==='community'&&<a className="source-link" href={TOUR_SOURCES.oha} target="_blank" rel="noopener noreferrer">About the Office of Hawaiian Affairs <ExternalLink size={14}/></a>}</>}
   <button className="primary hallway-return" onClick={()=>setActive(null)}><ArrowLeft size={20}/> BACK TO THE HALLWAY</button>
  </div>}
  {opening&&<div className="door-mist" aria-hidden="true"/>}
 </section>
}
