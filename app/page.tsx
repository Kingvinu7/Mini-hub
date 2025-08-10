"use client";

import { useEffect, useState } from "react";
import { sdk } from "@farcaster/miniapp-sdk";

type Miniapp = {
  name: string;
  url: string;
  icon: string;
  desc: string;
};

export default function Home() {
  const [user, setUser] = useState<any | null>(null);

  const miniapps: Miniapp[] = [
    {
      name: "FC Tap Game",
      url: "https://farcaster.xyz/miniapps/jcV0ojRAzBKZ/fc-tap-game",
      icon: "https://fc-taps.vercel.app/icon.png",
      desc: "A miniapp to test your finger speeds, tap as much as you can in 15 Seconds"
    },
    {
      name: "Farscan",
      url: "https://farcaster.xyz/miniapps/9GKmp-8gSzi_/farscan",
      icon: "https://farscan.replit.app/icon.png",
      desc: "A miniapp to Check your simple Base transaction history directly in Farcaster. No browser required."
    },
    {
      name: "Cast-it-Fast",
      url: "https://farcaster.xyz/miniapps/Y6Z-3Zz-bf_T/cast-it-fast",
      icon: "https://cast-it-fast.vercel.app/app-icon.png",
      desc: "A miniapp of a fast-paced trivia game with 3 rounds and 15 questions. Cast your answer fast."
    },
    {
      name: "Feed The Snake",
      url: "https://farcaster.xyz/miniapps/qloEP_2uNhBO/feed-the-snake",
      icon: "https://feed-the-snake-six.vercel.app/icon.png",
      desc: "A miniapp to play the old classic Snake Game with modern neon vibes."
    },
    {
      name: "Sloto Caster",
      url: "https://farcaster.xyz/miniapps/q48CMd_Ss_iF/sloto-caster",
      icon: "https://sloto-caster.vercel.app/logo.png",
      desc: "A miniapp to test your luck, slot machine game on base network, try spinning and win Eth now."
    }
  ];

  useEffect(() => {
    sdk.context
      .then(ctx => setUser(ctx.user))
      .catch(console.error);
  }, []);

  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        padding: 20,
        maxWidth: 500,
        margin: "0 auto"
      }}
    >
      <h1>Mini-Hub</h1>
      <p style={{ color: "#444", marginBottom: 20 }}>
        Welcome to Mini-Hub — your mini app store for quick access to my awesome Farcaster miniapps. Tap to open and explore!
      </p>

      <button
        onClick={() => sdk.actions.openUrl("https://farcaster.xyz/vinu07")}
        style={{
          backgroundColor: "#06f",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          padding: "10px 18px",
          fontWeight: "bold",
          cursor: "pointer",
          marginBottom: 30,
          width: "100%"
        }}
      >
        Follow Me on Farcaster
      </button>

      {user && <p style={{ color: "#666", marginBottom: 20 }}>Hi, {user.displayName} 👋</p>}

      {miniapps.map((app, i) => (
        <div
          key={i}
          style={{
            border: "1px solid #e0e0e0",
            borderRadius: 12,
            padding: 15,
            marginBottom: 15,
            background: "#fff",
            textAlign: "center"
          }}
        >
          <img
            src={app.icon}
            alt={`${app.name} icon`}
            style={{
              width: 64,
              height: 64,
              objectFit: "contain",
              marginBottom: 10
            }}
          />
          <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 6 }}>
            {app.name}
          </div>
          <div style={{ fontSize: 13, color: "#555", marginBottom: 10 }}>
            {app.desc}
          </div>
          <button
            style={{
              marginTop: 5,
              padding: "10px 16px",
              background: "#7c3aed",
              color: "#fff",
              fontWeight: "bold",
              fontSize: 14,
              border: "none",
              borderRadius: 8,
              width: "100%",
              cursor: "pointer"
            }}
            onClick={() => sdk.actions.openUrl(app.url)}
          >
            Open
          </button>
        </div>
      ))}
    </div>
  );
}
