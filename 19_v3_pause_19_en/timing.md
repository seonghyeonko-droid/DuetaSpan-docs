# v3_pause_19_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Do you happen to know when the seventh season of Lego Ninjag
     3.40s  <ret> 발화 (turn1 첫 프레임)
     3.99s  agent 발화 시작: <ret> That’s a good question. Season seven of Lego Ninjago f
     4.16s  user  발화 끝
     4.40s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.79s]: May 15, 2017 was the release date for Lego Ninjago season seven.
    11.60s  agent 발화 끝
    11.94s  user  발화 시작: Wow, that was a while ago… uh, I was wondering—
    15.59s  user  발화 끝
    15.94s  agent 발화 시작: …wondering what?
    18.25s  agent 발화 끝
    18.29s  user  발화 시작: So I was thinking… about the whole trip, actually. I’m plann
    22.63s  <ret> 발화 (turn5 첫 프레임)
    22.63s  ⚡SPAN 주입 [d'=0.00s / d_lead=1.88s]: Legoland California features Ninjago World, which opened June 2017, in
    23.22s  agent 발화 시작: <ret> Legoland California does have a Ninjago area. Ninjago 
    23.34s  user  발화 끝
    31.28s  agent 발화 끝
