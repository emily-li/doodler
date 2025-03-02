interface DoodleIdeaProps {
  idea: string;
}

export default function DoodleIdea(props: DoodleIdeaProps) {
  return (
    props.idea && <p className="mt-8 text-5xl text-cyan-900">{props.idea}</p>
  );
}
