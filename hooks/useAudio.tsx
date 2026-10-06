"use client";
import { useEffect, useRef, useState } from "react";
import { Howl } from "howler";

type UseAudioPlayerOptions = {
  src: string;
};

export function useAudioPlayer({ src }: UseAudioPlayerOptions) {
  const soundRef = useRef<Howl | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolumeState] = useState(0.7);

  useEffect(() => {
    const sound = new Howl({
      src: [src],
      html5: true,
      volume,

      onload: () => {
        setDuration(sound.duration());
      },

      onplay: () => {
        setIsPlaying(true);
      },

      onpause: () => {
        setIsPlaying(false);
      },

      onstop: () => {
        setIsPlaying(false);
        setCurrentTime(0);
      },

      onend: () => {
        setIsPlaying(false);
        setCurrentTime(sound.duration());
      },
    });

    soundRef.current = sound;

    return () => {
      sound.unload();
      soundRef.current = null;
    };
  }, [src]);

  useEffect(() => {
    let animationFrame: number;

    const updateTime = () => {
      const sound = soundRef.current;

      if (sound && sound.playing()) {
        const seek = sound.seek();

        if (typeof seek === "number") {
          setCurrentTime(seek);
        }
      }

      animationFrame = requestAnimationFrame(updateTime);
    };

    animationFrame = requestAnimationFrame(updateTime);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const togglePlay = () => {
    const sound = soundRef.current;

    if (!sound) return;

    if (sound.playing()) {
      sound.pause();
    } else {
      sound.play();
    }
  };

  const seek = (time: number) => {
    const sound = soundRef.current;

    if (!sound) return;

    const nextTime = Math.max(0, Math.min(time, sound.duration()));

    sound.seek(nextTime);
    setCurrentTime(nextTime);
  };

  const skipForward = () => {
    seek(currentTime + 10);
  };

  const skipBackward = () => {
    seek(currentTime - 10);
  };

  const setVolume = (value: number) => {
    const normalized = Math.max(0, Math.min(1, value));

    soundRef.current?.volume(normalized);
    setVolumeState(normalized);
  };

  return {
    isPlaying,
    currentTime,
    duration,
    volume,

    togglePlay,
    seek,
    skipForward,
    skipBackward,
    setVolume,
  };
}
