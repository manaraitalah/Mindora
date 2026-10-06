"use client";

import { useAudioPlayer } from "@/hooks/useAudio";
import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";

import { ActivityInfo } from "./activity-info";
import { ActivitySteps } from "./activity-step";
import { AudioControls } from "./audio-controls";
import { BreathingVisualizer } from "./breathing-visualizer";
import { ProgressBar } from "./progress-bar";
import { useRouter } from "next/navigation";

export const breathingSteps = [
  {
    id: 1,
    title: "Settle in",
    duration: 30,
  },
  {
    id: 2,
    title: "Breathe in",
    duration: 4,
  },
  {
    id: 3,
    title: "Hold",
    duration: 4,
  },
  {
    id: 4,
    title: "Breathe out",
    duration: 6,
  },
  {
    id: 5,
    title: "Rest",
    duration: 2,
  },
];

export const activityTips = [
  {
    id: 1,
    label: "Sit comfortably",
  },
  {
    id: 2,
    label: "Keep your back straight",
  },
  {
    id: 3,
    label: "Breathe through your nose",
  },
];

export function Breathing() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(1);

  const {
    isPlaying,
    currentTime,
    duration,
    volume,
    togglePlay,
    seek,
    skipForward,
    skipBackward,
    setVolume,
  } = useAudioPlayer({
    src: "/audio/breathing.mp3",
  });

  const handleBack = () => {
    router.back();
  };
  return (
    <main className="min-h-screen bg-mindora-background p-3 sm:p-5 lg:p-6">
      <section className="mx-auto flex min-h-[720px] max-w-[1440px] flex-col rounded-[24px] border border-border-subtle bg-background px-5 py-5 shadow-[0_3px_20px_rgba(26,46,35,0.04)] sm:px-7 lg:px-8">
        {/* Header */}
        <header>
          <button
            onClick={handleBack}
            type="button"
            className="inline-flex items-center gap-2 text-xs font-medium text-text-secondary transition-colors hover:text-brand-primary"
          >
            <FiArrowLeft size={15} />
            Back to activities
          </button>

          <div className="mt-6">
            <h1 className="text-[22px] font-semibold tracking-[-0.025em] text-text-primary">
              5-Minute Breathing
            </h1>

            <div className="mt-2 flex items-center gap-2 text-xs font-medium text-text-secondary">
              <span>Breathing</span>
              <span className="text-text-muted">•</span>
              <span>5 min.</span>
              <span className="text-text-muted">•</span>
              <span>Easy</span>
            </div>
          </div>
        </header>

        {/* Main activity area */}
        <div className="mt-4 grid flex-1 grid-cols-[230px_minmax(400px,1fr)_240px] items-start gap-8 lg:gap-10">
          {/* Left */}
          <div className="w-full lg:pt-2">
            <ActivitySteps
              steps={breathingSteps}
              activeStep={activeStep}
              onStepChange={setActiveStep}
            />
          </div>

          {/* Center */}
          <section className="flex min-h-[400px] flex-col items-center justify-center">
            <BreathingVisualizer isPlaying={isPlaying} />

            <div className="mt-3 text-center">
              <h2 className="text-[20px] font-semibold tracking-[-0.01em] text-text-primary">
                Breathe in
              </h2>

              <p className="mt-1.5 text-sm text-text-secondary">
                Inhale slowly through your nose
              </p>

              <p className="mt-2 text-sm font-semibold text-brand-primary">
                4 sec
              </p>
            </div>
          </section>

          {/* Right */}
          <div className="lg:pt-2">
            <ActivityInfo tips={activityTips} />
          </div>
        </div>

        {/* Player */}
        <footer className="mt-auto pt-7">
          <ProgressBar
            value={currentTime}
            max={duration || 300}
            onChange={seek}
          />

          <AudioControls
            isPlaying={isPlaying}
            currentTime={currentTime}
            duration={duration || 300}
            volume={volume * 100}
            onPlayPause={togglePlay}
            onBackward={skipBackward}
            onForward={skipForward}
            onVolumeChange={(value) => setVolume(value / 100)}
          />
        </footer>
      </section>
    </main>
  );
}
