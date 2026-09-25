import type { BallotQuestion } from '@/lib/ballot-tour';
export function QuestionCard({question}:{question:BallotQuestion}){
 return <article className="question-card"><div className="question-meta"><span>QUESTION {question.id}</span><span>MOCK · {question.level==='state'?'STATE':'COUNTY'}</span></div><h3>{question.title}</h3><h4>WHAT THIS CHANGES</h4><p>{question.explanation}</p><div className="question-choices"><div><strong>YES</strong><span>Approve the change</span></div><div><strong>NO</strong><span>Reject the change</span></div></div><p className="question-note">Explanations only. No vote is selected or saved.</p></article>
}
