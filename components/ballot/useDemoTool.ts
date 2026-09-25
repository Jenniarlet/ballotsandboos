'use client';
import { useEffect } from 'react';
import { flushSync } from 'react-dom';
type Tool={name:string;description:string;inputSchema:object;annotations:object;execute:(input:unknown)=>unknown};
export function useDemoTool(showDemo:()=>void){useEffect(()=>{
 const context=(document as Document & {modelContext?:{registerTool:(t:Tool,o:{signal:AbortSignal})=>void|Promise<void>}}).modelContext;
 if(!context)return;const life=new AbortController();
 const tool:Tool={name:'show_demo_districts',description:'Open the fictional Oahu district example. Does not look up, collect, or submit an address.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:false},execute(input){if(!input||typeof input!=='object'||Array.isArray(input)||Object.keys(input).length)throw new Error('Pass an empty object; no address is accepted.');flushSync(showDemo);return {status:'demo',districts:['Demo A','Demo B','Demo C','Demo D'],realLookup:false}}};
 try{void Promise.resolve(context.registerTool(tool,{signal:life.signal})).catch(()=>{});}catch{}return()=>life.abort();
 },[showDemo]);}
