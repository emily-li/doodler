interface DoodleIdeaProps {
  idea: string;
}

export default function DoodleIdea(props: DoodleIdeaProps) {
  return props.idea ? (
    <p className="mt-3 text-5xl text-cyan-900">{props.idea}</p>
  ) : (
    <p className="mt-3 text-5xl invisible">Waiting for idea</p>
  );
}
