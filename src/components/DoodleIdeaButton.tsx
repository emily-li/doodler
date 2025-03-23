import { MouseEventHandler } from "react";

interface DoodleIdeaButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function DoodleIdeaButton(props: DoodleIdeaButtonProps) {
  return (
    <button
      className="container py-2 px-4 text-2xl rounded-lg cursor-pointer active:translate-0.5 bg-emerald-600 text-yellow-100 active:bg-emerald-700"
      onClick={props.onClick}
    >
      generate doodle idea
    </button>
  );
}
