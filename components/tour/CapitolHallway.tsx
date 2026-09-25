'use client';
import { DOORS, type BallotDoor } from '@/lib/ballot-tour';
import { CivicDoor } from './CivicDoor';
export function CapitolHallway({visited,opening,onEnter}:{visited:BallotDoor[];opening:BallotDoor|null;onEnter:(door:BallotDoor)=>void}){
 return <div className="civic-building">
  <svg className="capitol-roof" viewBox="0 0 600 160" aria-hidden="true"><path d="M28 53 300 8 572 53 557 78H43Z" fill="#24281f"/><path d="M43 78H557V102H43Z" fill="#b9aa81" stroke="#30291f" strokeWidth="3"/><path d="M43 78 300 103 557 78" fill="none" stroke="#efe1bc" strokeWidth="3"/><path d="M66 97 82 160H111L122 97M197 97l9 63h24l11-63M361 97l9 63h24l11-63M478 97l10 63h29l17-63" fill="#c4b489" stroke="#30291f" strokeWidth="3"/><path d="M165 83H435V126H165Z" fill="#efe4c6" stroke="#30291f" strokeWidth="3"/><text x="300" y="102" textAnchor="middle" fontFamily="Georgia,serif" fontSize="11" letterSpacing="3" fill="#332a20">THE PEOPLE’S HOUSE</text><text x="300" y="117" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="8" letterSpacing="2" fill="#8c2725">NO SECRET HANDSHAKE REQUIRED</text></svg>
  <div className="building-interior"><div className="hallway-label"><span>CHOOSE YOUR DOOR</span><p>Choose your adventure. Democracy awaits.</p></div><div className="door-grid">{DOORS.map(door=><CivicDoor key={door.id} door={door} visited={visited.includes(door.id)} opening={opening===door.id} disabled={opening!==null} onEnter={()=>onEnter(door.id)}/>)}</div><div className="hallway-floor" aria-hidden="true"/></div>
 </div>
}
