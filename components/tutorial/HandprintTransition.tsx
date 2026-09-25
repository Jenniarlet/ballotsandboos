'use client';

/** Decorative overlay; navigation and timing remain owned by the page. */
export function HandprintTransition({ active }: { active: boolean }) {
  return (
    <div className={`handprint-transition${active ? ' is-active' : ''}`} aria-hidden="true">
      {[0, 1, 2].map(index => (
        <img key={index} className={`haunted-hand haunted-hand-${index}`} src="/haunted-handprint.png" alt="" width={1024} height={1024} draggable={false} />
      ))}
    </div>
  );
}
