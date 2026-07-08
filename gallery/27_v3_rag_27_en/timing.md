# v3_rag_27_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was just wondering, who’s the older one—Glenn Hughes or Ro
     3.92s  <ret> 발화 (turn1 첫 프레임)
     4.15s  agent 발화 시작: <ret> That’s a good question, comparing musicians across gen
     4.35s  user  발화 끝
     5.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.88s]: Glenn Hughes was born on August 21, 1951, and is an English singer and
    12.40s  agent 발화 끝
    12.45s  user  발화 시작: Right.
    13.17s  agent 발화 시작: And Ross Lynch, of course, came along quite a bit later.
    13.22s  user  발화 끝
    16.22s  <ret> 발화 (turn4 첫 프레임)
    16.30s  agent 발화 시작: <ret> Let’s see what the records show about young Ross. Ross
    16.40s  agent 발화 끝
    17.18s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.43s]: Ross Lynch was born on October 29, 1995, in Littleton, Colorado.
    19.46s  user  발화 시작: Yeah, yeah.
    20.88s  user  발화 끝
    23.11s  agent 발화 시작: So, clearly Glenn Hughes has a considerable lead in years.
    23.16s  agent 발화 끝
    26.72s  agent 발화 끝
    26.72s  user  발화 시작: Oh, wow, that’s a pretty big difference.
    29.45s  user  발화 끝
    29.59s  agent 발화 시작: Indeed—over thirty years separate their births, a lifetime i
    33.82s  agent 발화 끝
