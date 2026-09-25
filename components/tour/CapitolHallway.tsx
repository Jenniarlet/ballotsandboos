'use client';
import { DOORS, type BallotDoor } from '@/lib/ballot-tour';
import { CivicDoor } from './CivicDoor';
export function CapitolHallway({visited,opening,onEnter}:{visited:BallotDoor[];opening:BallotDoor|null;onEnter:(door:BallotDoor)=>void}){
 return <div className="civic-building">
  <img className="capitol-art hallway-capitol" src="/haunted-capitol.webp" width="1536" height="1024" alt="The Hawaiʻi State Capitol imagined as a haunted civic house. Four doors await inside."/>
  <div className="building-interior"><div className="hallway-label"><span>CHOOSE YOUR DOOR</span><p>Choose your adventure. Democracy awaits.</p></div><div className="door-grid">{DOORS.map(door=><CivicDoor key={door.id} door={door} visited={visited.includes(door.id)} opening={opening===door.id} disabled={opening!==null} onEnter={()=>onEnter(door.id)}/>)}</div><div className="hallway-floor" aria-hidden="true"/></div>
 </div>
}
