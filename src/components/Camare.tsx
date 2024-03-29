import React, { useRef, useEffect } from "react";
import { Button } from "./ui/button";

interface CameraProps {
  onCapture: (data: string) => void;
}

const Camera: React.FC<CameraProps> = (props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          let video = videoRef.current;
          if (video) {
            video.srcObject = stream;
            video.play();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const captureImage = () => {
    let canvas = canvasRef.current;
    let video = videoRef.current;
    if (canvas && video) {
      let context = canvas.getContext("2d");
      if (context) {
        context.drawImage(video, 0, 0, 640, 480);
        let data = canvas.toDataURL("image/png");
        props.onCapture(data);
      }
    }
  };

  return (
    <div className="flex ">
      <div>
        <video ref={videoRef} width="640" height="480" />
        <canvas
          ref={canvasRef}
          width="640"
          height="480"
          style={{ display: "none" }}
        />
      </div>
      <div className="justify-center items-center mx-auto flex">
        <Button className="w-full" type="submit" onClick={captureImage}>
          Capturar
        </Button>
      </div>
    </div>
  );
};

export default Camera;
