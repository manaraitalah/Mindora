"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  FiCamera,
  FiCameraOff,
  FiChevronRight,
  FiMic,
  FiMicOff,
  FiRadio,
} from "react-icons/fi";

import { Toggle } from "@/components/ui/inputs/toggle-box";

import { StatusBlock } from "./status-block";
import Button from "@/components/ui/buttons/primary-button";

export default function DeviceCheckCard() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [stream, setStream] = useState<MediaStream | null>(null);
  const [cameraEnabled, setCameraEnabled] = useState(false);
  const [microphoneEnabled, setMicrophoneEnabled] = useState(false);
  const [cameraLoading, setCameraLoading] = useState(true);
  const [permissionError, setPermissionError] = useState<string | null>(null);
  const [reduceMotion, setReduceMotion] = useState(true);

  const initializeMedia = useCallback(async () => {
    try {
      setCameraLoading(true);
      setPermissionError(null);

      if (!navigator.mediaDevices?.getUserMedia) {
        throw new Error(
          "Your browser does not support camera and microphone access.",
        );
      }

      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: {
            ideal: 1280,
          },
          height: {
            ideal: 720,
          },
          facingMode: "user",
        },
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });

      setStream(mediaStream);

      const videoTrack = mediaStream.getVideoTracks()[0];
      const audioTrack = mediaStream.getAudioTracks()[0];

      setCameraEnabled(Boolean(videoTrack));
      setMicrophoneEnabled(Boolean(audioTrack));
    } catch (error) {
      console.error("Media permission error:", error);

      setCameraEnabled(false);
      setMicrophoneEnabled(false);

      if (error instanceof DOMException) {
        switch (error.name) {
          case "NotAllowedError":
            setPermissionError("Camera or microphone permission was denied.");
            break;

          case "NotFoundError":
            setPermissionError("No camera or microphone was found.");
            break;

          case "NotReadableError":
            setPermissionError(
              "Camera or microphone is already being used by another application.",
            );
            break;

          default:
            setPermissionError("Unable to access your camera or microphone.");
        }
      } else {
        setPermissionError("Unable to access your camera or microphone.");
      }
    } finally {
      setCameraLoading(false);
    }
  }, []);

  useEffect(() => {
    initializeMedia();

    return () => {
      stream?.getTracks().forEach((track) => {
        track.stop();
      });
    };
  }, [initializeMedia]);

  useEffect(() => {
    if (!videoRef.current) return;

    videoRef.current.srcObject = stream;
  }, [stream]);

  const toggleCamera = async () => {
    const videoTrack = stream?.getVideoTracks()[0];

    if (!videoTrack) {
      await initializeMedia();
      return;
    }

    const newState = !cameraEnabled;

    videoTrack.enabled = newState;
    setCameraEnabled(newState);
  };

  const toggleMicrophone = async () => {
    const audioTrack = stream?.getAudioTracks()[0];

    if (!audioTrack) {
      await initializeMedia();
      return;
    }

    const newState = !microphoneEnabled;

    audioTrack.enabled = newState;
    setMicrophoneEnabled(newState);
  };

  return (
    <>
      <div className="grid gap-5 lg:grid-cols-[1.65fr_0.95fr]">
        {/* LEFT */}
        <section className="rounded-[22px] border border-border-subtle bg-background p-5 sm:p-7">
          <div className="mb-5">
            <h2 className="text-[18px] font-semibold text-text-primary">
              Check your devices
            </h2>

            <p className="mt-1 text-sm text-text-secondary">
              Let&apos;s make sure everything is ready.
            </p>
          </div>

          {/* CAMERA */}
          <div className="border-b border-border-subtle pb-5">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {cameraEnabled ? (
                  <FiCamera
                    size={24}
                    strokeWidth={1.7}
                    className="text-text-muted"
                  />
                ) : (
                  <FiCameraOff
                    size={24}
                    strokeWidth={1.7}
                    className="text-text-muted"
                  />
                )}

                <div>
                  <p className="text-sm font-medium text-text-primary">
                    Camera
                  </p>

                  <p className="text-xs text-text-secondary">
                    {cameraEnabled ? "Camera active" : "Camera off"}
                  </p>
                </div>
              </div>

              <Toggle enabled={cameraEnabled} onClick={toggleCamera} />
            </div>

            {/* REAL CAMERA PREVIEW */}
            <div className="relative aspect-video overflow-hidden rounded-[18px] bg-text-primary">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className={`h-full w-full object-cover transition-opacity duration-300 ${
                  cameraEnabled ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Camera loading */}
              {cameraLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-surface-muted">
                  <div className="text-center">
                    <FiCamera
                      size={28}
                      className="mx-auto mb-3 animate-pulse text-text-muted"
                    />

                    <p className="text-sm text-text-secondary">
                      Starting camera...
                    </p>
                  </div>
                </div>
              )}

              {/* Camera OFF */}
              {!cameraEnabled && !cameraLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-surface-muted">
                  <div className="text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-background">
                      <FiCameraOff size={20} className="text-text-muted" />
                    </div>

                    <p className="text-sm font-medium text-text-secondary">
                      Camera is off
                    </p>
                  </div>
                </div>
              )}

              {/* GOOD STATUS */}
              {cameraEnabled && (
                <div className="absolute right-4 top-4 rounded-full bg-background/90 px-3 py-1.5 text-xs font-medium text-brand-primary shadow-sm backdrop-blur">
                  Good
                </div>
              )}
            </div>

            {/* ERROR */}
            {permissionError && (
              <div className="mt-3 rounded-xl bg-mood-low-bg px-4 py-3 text-sm text-mood-low">
                {permissionError}
              </div>
            )}
          </div>

          {/* MICROPHONE */}
          <div className="flex items-center justify-between gap-4 pt-5">
            <div className="flex items-center gap-3">
              {microphoneEnabled ? (
                <FiMic
                  size={24}
                  strokeWidth={1.7}
                  className="text-text-muted"
                />
              ) : (
                <FiMicOff
                  size={24}
                  strokeWidth={1.7}
                  className="text-text-muted"
                />
              )}

              <div>
                <p className="text-sm font-medium text-text-primary">
                  Microphone
                </p>

                <p className="text-xs text-text-secondary">
                  {microphoneEnabled ? "Microphone active" : "Microphone muted"}
                </p>
              </div>
            </div>

            <Toggle enabled={microphoneEnabled} onClick={toggleMicrophone} />
          </div>
        </section>

        {/* RIGHT */}
        <aside className="rounded-[22px] border border-border-subtle bg-background p-5 sm:p-7">
          <StatusBlock
            title="Connection"
            content={
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <span className="h-2.5 w-2.5 rounded-full border-2 border-brand-primary/60" />
                  Good connection
                </div>

                <FiRadio
                  size={20}
                  strokeWidth={1.7}
                  className="text-brand-primary"
                />
              </div>
            }
          />

          <StatusBlock
            title="Browser"
            content={
              <p className="text-sm font-medium text-brand-primary">
                Permission granted
              </p>
            }
          />

          <StatusBlock
            title="Internet"
            content={
              <div className="flex items-center justify-between">
                <p className="text-sm text-text-primary">125 Mbps</p>

                <FiRadio
                  size={20}
                  strokeWidth={1.7}
                  className="text-brand-primary"
                />
              </div>
            }
          />

          {/* ACCESSIBILITY */}
          <div className="pt-5">
            <h3 className="mb-5 text-sm font-semibold text-text-primary">
              Accessibility
            </h3>

            <div className="flex items-center justify-between">
              <span className="text-sm text-text-secondary">Captions</span>

              <button
                type="button"
                className="flex items-center gap-2 text-sm text-text-secondary transition hover:text-brand-primary"
              >
                Preferred
                <FiChevronRight size={16} />
              </button>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-sm text-text-secondary">Reduce motion</span>

              <Toggle
                enabled={reduceMotion}
                onClick={() => setReduceMotion((prev) => !prev)}
              />
            </div>
          </div>
        </aside>
      </div>
      <Button
        type="button"
        variant="primary"
        className="mt-7 h-[68px] rounded-[15px] text-base"
      >
        Join Session
      </Button>
    </>
  );
}
