# v3_rag_26_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: So, I was wondering… what country’s flag is black, red, and 
     7.21s  agent 발화 시작: That’s a rather interesting question, and a common one, actu
     7.37s  user  발화 끝
    10.61s  <ret> 발화 (turn2 첫 프레임)
    10.84s  agent 발화 시작: <ret> Let me share what I know… The flag you’re thinking of 
    10.96s  agent 발화 끝
    11.57s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.06s]: The flag of Germany is composed of three horizontal bands of black, re
    19.08s  agent 발화 끝
    19.79s  user  발화 시작: Oh, right! Germany. Mm-hmm. I knew it was a European country
    24.74s  agent 발화 시작: Indeed. The symbolism of those colors has quite a rich histo
    24.79s  user  발화 끝
    30.73s  <ret> 발화 (turn5 첫 프레임)
    31.02s  agent 발화 시작: <ret> It’s a history connected to liberation movements… Thos
    31.23s  agent 발화 끝
    32.09s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.15s]: The black, red, and gold colors were adopted in 1848 by the German stu
    41.82s  agent 발화 끝
    41.95s  user  발화 시작: That's fascinating. Were those colors used before that, thou
    47.72s  agent 발화 시작: Before eighteen forty-eight, those colors had earlier associ
    47.83s  user  발화 끝
    54.91s  <ret> 발화 (turn8 첫 프레임)
    55.30s  agent 발화 시작: <ret> They drew inspiration from earlier military units… The
    55.54s  agent 발화 끝
    56.51s  ⚡SPAN 주입 [d'=1.60s / d_lead=3.23s]: The black-red-gold were colors used by the Lützow Free Corps during th
    66.85s  agent 발화 끝
