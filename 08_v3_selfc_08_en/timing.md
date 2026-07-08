# v3_selfc_08_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Hello? Is this moshi?
     1.50s  agent 발화 시작: Good morning. You’ve reached me. How can I help you today?
     1.50s  user  발화 끝
     5.61s  user  발화 시작: Um, I’m planning a trip and I was wondering about the weathe
     5.61s  agent 발화 끝
    11.97s  agent 발화 시작: <ret>
    11.97s  <ret> 발화 (turn3 첫 프레임)
    11.97s  user  발화 끝
    12.29s  ⚡SPAN 주입 [d'=0.32s / d_lead=0.37s]: (tool result) The weather in Denver on December twenty-first is foreca
    12.34s  user  발화 시작: That sounds… brisk. Do you know if there are any good botani
    12.34s  agent 발화 끝
    20.20s  agent 발화 시작: Oh, a fellow enthusiast! [happy] That’s wonderful. Denver Bo
    20.20s  user  발화 끝
    27.68s  user  발화 시작: I’ve heard of that one. Are there any smaller, maybe less cr
    27.68s  agent 발화 끝
    35.53s  agent 발화 시작: <ret>
    35.53s  <ret> 발화 (turn7 첫 프레임)
    35.53s  user  발화 끝
    35.77s  ⚡SPAN 주입 [d'=0.24s / d_lead=0.37s]: (tool result) The York Street Gardens in Denver is 23 acres and receiv
    35.91s  user  발화 시작: Two hundred thousand still sounds like a lot! Is Chatfield F
    35.91s  agent 발화 끝
    41.52s  agent 발화 시작: It is. Chatfield Farms is located in Littleton, which is abo
    41.52s  user  발화 끝
    47.50s  user  발화 시작: Okay. And, uh, what kind of flowers are typically blooming i
    47.50s  agent 발화 끝
    54.98s  agent 발화 시작: That's a good question. December blooms are limited, natural
    54.98s  user  발화 끝
    63.96s  user  발화 시작: Snowdrops, huh? I’ve always wanted to see those. Do they gro
    63.96s  agent 발화 끝
    69.57s  agent 발화 시작: They do, actually. Snowdrops are remarkably resilient. They 
    69.57s  user  발화 끝
    78.17s  user  발화 시작: That’s good to know. I’m also looking for a hotel, in Boston
    78.17s  agent 발화 끝
    86.03s  agent 발화 시작: <ret>
    86.03s  <ret> 발화 (turn15 첫 프레임)
    86.03s  user  발화 끝
    86.27s  ⚡SPAN 주입 [d'=0.24s / d_lead=0.37s]: (tool result) The Art Institute of Chicago is located at 111 South Mic
    86.40s  user  발화 시작: The Palmer House… is that a nice hotel?
    86.40s  agent 발화 끝
    89.39s  agent 발화 시작: It’s quite historic. The Palmer House has been a landmark in
    89.39s  user  발화 끝
    98.00s  user  발화 시작: Wow, that's old! What about restaurants nearby? I'm hoping f
    98.00s  agent 발화 끝
   103.61s  agent 발화 시작: <ret>
   103.61s  <ret> 발화 (turn19 첫 프레임)
   103.61s  user  발화 끝
   103.85s  ⚡SPAN 주입 [d'=0.24s / d_lead=0.37s]: (tool result) Frontera Grill, serving contemporary Mexican cuisine, is
   103.98s  user  발화 시작: Frontera Grill sounds good. Do they take reservations?
   103.98s  agent 발화 끝
   106.97s  agent 발화 시작: <ret>
   106.97s  <ret> 발화 (turn21 첫 프레임)
   106.97s  user  발화 끝
   107.13s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.37s]: (tool result) Frontera Grill accepts reservations online through their
   107.35s  user  발화 시작: Perfect. Thank you so much, moshi.
   107.35s  agent 발화 끝
   109.59s  agent 발화 시작: You're very welcome. I’m glad I could assist with your plann
   109.59s  user  발화 끝
   114.45s  user  발화 시작: Mm-hmm.
   114.45s  agent 발화 끝
   114.83s  user  발화 끝
