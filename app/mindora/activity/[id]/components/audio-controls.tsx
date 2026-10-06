import {
  Pause,
  Play,
  RotateCcw,
  RotateCw,
  SkipBack,
  SkipForward,
  Volume2,
} from "lucide-react";

type AudioControlsProps = {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;

  onPlayPause: () => void;
  onBackward: () => void;
  onForward: () => void;
  onVolumeChange: (value: number) => void;
};

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

export function AudioControls({
  isPlaying,
  currentTime,
  duration,
  volume,
  onPlayPause,
  onBackward,
  onForward,
  onVolumeChange,
}: AudioControlsProps) {
  return (
    <div
      className="
        flex
        flex-col
        gap-5
        py-4
        md:flex-row
        md:items-center
      "
    >
      {/* Time */}
      <div className="min-w-[110px] text-sm text-[#59635E]">
        {formatTime(currentTime)} / {formatTime(duration)}
      </div>

      {/* Center Controls */}
      <div className="flex flex-1 items-center justify-center gap-6">
        <button
          type="button"
          onClick={onBackward}
          aria-label="Go back 10 seconds"
          className="
            flex
            items-center
            gap-1
            text-[#66716B]
            transition
            hover:text-[#1F5B3D]
          "
        >
          <RotateCcw size={19} />
          <span className="text-xs font-medium">10s</span>
        </button>

        <button
          type="button"
          aria-label="Previous"
          className="
            text-[#7A837E]
            transition
            hover:text-[#315F49]
          "
        >
          <SkipBack size={18} fill="currentColor" />
        </button>

        <button
          type="button"
          onClick={onPlayPause}
          aria-label={isPlaying ? "Pause" : "Play"}
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-[#225F40]
            text-white
            shadow-sm
            transition
            hover:scale-105
            hover:bg-[#184D33]
          "
        >
          {isPlaying ? (
            <Pause size={20} fill="currentColor" />
          ) : (
            <Play size={20} fill="currentColor" className="ml-0.5" />
          )}
        </button>

        <button
          type="button"
          aria-label="Next"
          className="
            text-[#7A837E]
            transition
            hover:text-[#315F49]
          "
        >
          <SkipForward size={18} fill="currentColor" />
        </button>

        <button
          type="button"
          onClick={onForward}
          aria-label="Go forward 10 seconds"
          className="
            flex
            items-center
            gap-1
            text-[#66716B]
            transition
            hover:text-[#1F5B3D]
          "
        >
          <span className="text-xs font-medium">10s</span>
          <RotateCw size={19} />
        </button>
      </div>

      {/* Volume */}
      <div className="flex min-w-[200px] items-center justify-end gap-3">
        <Volume2 size={18} className="text-[#68736D]" />

        <input
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={(event) => onVolumeChange(Number(event.target.value))}
          aria-label="Volume"
          className="w-[110px] accent-[#286448]"
        />
      </div>
    </div>
  );
}
