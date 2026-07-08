# v3_abs_21_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: How many senators are there in the French Senate?
     2.61s  <ret> 발화 (turn1 첫 프레임)
     2.69s  agent 발화 시작: <ret> That’s a good question about French governance. I’m af
     2.73s  user  발화 끝
     3.65s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.21s]: (no information found)
     8.99s  agent 발화 끝
     9.08s  user  발화 시작: Oh. Well, what about the US Senate? How many senators are th
    13.33s  <ret> 발화 (turn3 첫 프레임)
    13.57s  agent 발화 시작: <ret> Ah, the US Senate, a body I’m more familiar with. Ther
    13.57s  user  발화 끝
    14.37s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.57s]: The United States Senate is composed of one hundred senators, two from
    21.77s  agent 발화 끝
    21.89s  user  발화 시작: That makes sense. Um, are they all elected directly by the p
    25.91s  user  발화 끝
    25.93s  agent 발화 시작: For the most part, yes. Direct election is the standard, tho
    31.58s  agent 발화 끝
    32.44s  user  발화 시작: Historical changes? Like what?
    34.97s  <ret> 발화 (turn7 첫 프레임)
    35.36s  agent 발화 시작: <ret> That’s an interesting piece of history… Until nineteen
    35.53s  user  발화 끝
    36.73s  ⚡SPAN 주입 [d'=1.76s / d_lead=2.93s]: Before 1913, US senators were chosen by state legislatures, not by pop
    43.66s  agent 발화 끝
    45.24s  user  발화 시작: Wow, that’s a big difference. So, the Seventeenth Amendment 
    49.59s  user  발화 끝
    49.60s  agent 발화 시작: Precisely. The Seventeenth Amendment established direct elec
    55.07s  user  발화 시작: I— I mean, that seems like a really important change.
    55.16s  agent 발화 끝
    58.16s  agent 발화 시작: It was, fundamentally shifting power to the electorate. It’s
    58.30s  user  발화 끝
    66.69s  user  발화 시작: [laugh] Constellations? That's a leap.
    67.07s  agent 발화 끝
    69.54s  agent 발화 시작: Well, observing the sky teaches you about immense changes ov
    69.61s  user  발화 끝
    74.78s  agent 발화 끝
    74.81s  user  발화 시작: [happy] I guess so. Okay, new topic. What’s the brightest st
    79.13s  <ret> 발화 (turn15 첫 프레임)
    79.51s  agent 발화 시작: <ret> Now *that* is a question I can answer with certainty. 
    79.62s  user  발화 끝
    81.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.90s]: Sirius is the brightest star in the Earth’s night sky, with an apparen
    89.25s  agent 발화 끝
    89.59s  user  발화 시작: Negative one point four six? That’s a weird number.
    93.44s  user  발화 끝
    93.68s  agent 발화 시작: It’s a measure of brightness, where lower numbers mean brigh
   100.21s  agent 발화 끝
   100.24s  user  발화 시작: Right. Okay, what’s the next brightest after Sirius?
   103.31s  <ret> 발화 (turn19 첫 프레임)
   103.61s  agent 발화 시작: <ret> Let me quickly check my records on that… Canopus follo
   103.71s  user  발화 끝
   105.23s  ⚡SPAN 주입 [d'=1.92s / d_lead=3.07s]: Canopus is the second-brightest star in the night sky, with an apparen
   111.47s  user  발화 시작: So, both are negative numbers?
   111.67s  agent 발화 끝
   114.01s  user  발화 끝
   114.12s  agent 발화 시작: Yes, the brightest stars have negative magnitudes. It indica
   120.37s  agent 발화 끝
   122.43s  user  발화 시작: Hmm. Canopus… I don’t think I’ve ever noticed it.
   126.31s  user  발화 끝
   126.73s  agent 발화 시작: It’s in the southern sky, so visibility depends on your loca
   132.79s  user  발화 시작: Oh, that makes sense. Is it far away, then?
   132.98s  agent 발화 끝
   135.20s  <ret> 발화 (turn25 첫 프레임)
   135.44s  agent 발화 시작: <ret> Distance is always a factor when considering brightnes
   135.55s  user  발화 끝
   136.40s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.79s]: Canopus is approximately three hundred ten light-years from Earth.
   141.91s  user  발화 시작: Three hundred ten light-years… that's a long way.
   142.07s  agent 발화 끝
   145.80s  agent 발화 시작: Indeed. It puts things in perspective, doesn't it?
   145.94s  user  발화 끝
   149.74s  agent 발화 끝
