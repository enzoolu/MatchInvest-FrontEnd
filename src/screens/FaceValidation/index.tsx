import React, { useEffect, useRef, useState } from "react";
import { Pressable, View, Text } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { useNavigation } from "@react-navigation/native";

type ValidationState =
  | "idle"
  | "detecting"
  | "validated"
  | "error"
  | "no-camera"
  | "failed";

const FaceValidationScreen: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const navigation = useNavigation<any>();

  const [state, setState] = useState<ValidationState>("idle");
  const [message, setMessage] = useState<string>(
    "Pronto para validar seu rosto"
  );
  const [error, setError] = useState<string | null>(null);

  const startCamera = async () => {
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: 640, height: 480 },
        audio: false,
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
    } catch (err) {
      console.error("Camera error:", err);
      setError("Unable to access camera");
      setState("no-camera");
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.srcObject = null;
    }
    setMessage("Camera stopped");
  };

  const mockDetectFace = async (): Promise<boolean> => {
    await new Promise((r) => setTimeout(r, 3000));

    return Math.random() < 0.7;
  };

  const runValidation = async () => {
    if (!videoRef.current || !streamRef.current) {
      setError("Camera nao encontrada, por favor verifique as permissoes.");
      setState("no-camera");
      return;
    }

    setState("detecting");
    setMessage("Procurando seu rosto... Por favor olhe para a camera.");

    try {
      const attempts = 3;
      let detected = false;
      for (let i = 0; i < attempts; i++) {
        const ok = await mockDetectFace();
        if (ok) {
          detected = true;
          break;
        }
        setState("failed");
        setMessage(`Tentativa ${i + 1} falha. Tentando novamente...`);
      }

      if (detected) {
        setState("validated");
        setMessage("Rosto validado com sucesso!");
      } else {
        setState("error");
        setError("Nao foi possivel detectar o rosto. Tente novamente.");
      }
    } catch (err) {
      console.error("Validation error:", err);
      setState("error");
      setError("Validation process failed");
    }
  };

  useEffect(() => {
    if (state === "validated") {
      global.setTimeout(() => {
        navigation.navigate("AccountType");
      }, 3000);
    }
  }, [state, navigation]);

  useEffect(() => {
    startCamera();
    return () => {
      stopCamera();
    };
  }, []);

  return (
    <View style={styles.backgroundView}>
      <Header subtitle="Olhe para a camera para registar seu rosto na plataforma." />

      <View style={styles.videoContainer}>
        <View style={styles.videoWrapper}>
          <video
            ref={videoRef}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              borderRadius: "50%",
              transform: "scaleX(-1)",
            }}
            playsInline
            muted
          />
          <canvas
            ref={canvasRef}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              borderRadius: "50%",
              transform: "scaleX(-1)",
            }}
          />
          <Pressable
            onPress={runValidation}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "transparent",
              borderRadius: "50%",
              zIndex: 10,
            }}
            android_ripple={{ color: "transparent" }}
          />
        </View>
        {state === "detecting" && (
          <View style={[styles.bubble, { backgroundColor: "#d1c303" }]}>
            <Text style={styles.bubbleText}>{message}</Text>
          </View>
        )}

        {state === "validated" && (
          <View style={[styles.bubble, { backgroundColor: "#41fa088b" }]}>
            <Text style={styles.bubbleText}>{message}</Text>
          </View>
        )}

        {state === "failed" && (
          <View style={[styles.bubble, { backgroundColor: "#ff000089" }]}>
            <Text style={styles.bubbleText}>{message}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default FaceValidationScreen;
