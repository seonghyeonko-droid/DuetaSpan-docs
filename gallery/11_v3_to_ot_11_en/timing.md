# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Do you know when the Oakland A’s were last no-hit? I’m curio
     4.51s  <ret> 발화 (turn1 첫 프레임)
     4.90s  agent 발화 시작: <ret> That’s a fascinating question regarding baseball histo
     5.05s  user  발화 끝
     6.35s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.47s]: The Oakland Athletics were last no-hit on April 21, 2018.
    14.68s  user  발화 시작: Wow, that was a while ago.
    14.82s  agent 발화 끝
    17.09s  user  발화 끝
    17.19s  agent 발화 시작: It certainly has been; no-hitters are always memorable games
    22.00s  agent 발화 끝
    22.15s  user  발화 시작: Was it a home game for them, or were they on the road?
    25.49s  <ret> 발화 (turn5 첫 프레임)
    25.72s  agent 발화 시작: <ret> That’s a good detail to consider— the no-hitter occurr
    25.85s  user  발화 끝
    26.53s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.76s]: The game on April 21, 2018, was played at the Oakland-Alameda County C
    32.16s  agent 발화 끝
    32.51s  user  발화 시작: Okay, good to know. Thanks for the info.
    35.37s  user  발화 끝
